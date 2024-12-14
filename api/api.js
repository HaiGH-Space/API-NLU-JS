import {apiParams} from "./api-params.js";
import axios from 'axios';
import * as model from "./model.js"
import {stringify} from "qs";
import {gc, getOffset, isapi} from "./utils.js";
import {dk_loc, ds_dk_loc, dsThongTin, lop} from "./model.js";

class API {
    offset = 0
    #setToken() {
        model.sinh_vien.token = model.sinh_vien.token_type + " " + model.sinh_vien.access_token;
    }

    constructor() {
    }

    #getOffset() {
        return getOffset();
    }

    #getUA(apiParam) {
        return gc(isapi(apiParams.requestWithAPI(apiParam)))
    }

    #request(method, url, headers, params) {
        const fullUrl = new URL(url, apiParams.baseUrl()).href;
        let config = {
            method: method,
            maxBodyLength: Infinity,
            url: fullUrl,
            headers: headers,
        };

        if (method !== 'GET') {
            config.data = params; // Axios sử dụng 'data' cho body của POST, PUT, etc.
        }

        return axios(config)
            .then(response => {
                if (response.status !== 200) {
                    console.error(response.data);
                }
                return response.data; // Giả sử API trả về JSON
            });
    }


async dkmh(id_to_hoc,isDK) {
    const params = {"filter":{"id_to_hoc":id_to_hoc,"is_checked":isDK,"sv_nganh":1}}
    const headers = {
        'authorization': model.sinh_vien.token,
        'ua': await this.#getUA(apiParams.xuLydkmhSinhVien)
    }
    try {
        const response =await this.#request("POST", apiParams.requestWithAPIUrlDKMH(apiParams.xuLydkmhSinhVien), headers,params)
        const data = response.data
        console.log(data)

        return model.dsThongTin
    }catch (error) {
        console.log(error.status)
        return null
    }
}
async dsThongTin() {
    const params = {"is_CVHT":false,"additional":{"paging":{"limit":99999,"page":1},"ordering":[{"name":"","order_type":""}]}}
    const headers = {
        'authorization': model.sinh_vien.token,
        'ua': await this.#getUA(apiParams.locDsNhomTo)
    }
    try {
        const response =await this.#request("POST", apiParams.requestWithAPIUrlPublic(apiParams.locDsNhomTo), headers,params)
        const data = response.data
        model.dsThongTin.total_items = data.total_items
        model.dsThongTin.trong_thoi_gian_dang_ky = data.trong_thoi_gian_dang_ky
        model.dsThongTin.ds_khoa = data.ds_khoa
        model.dsThongTin.ds_lop = data.ds_lop
        model.dsThongTin.ds_mon_hoc = data.ds_mon_hoc
        model.dsThongTin.ds_nhom_to = data.ds_nhom_to
      return model.dsThongTin
    }catch (error) {
        console.log(error.status)
        return null
    }
}
    async dsKQdkmh() {
        const params = {"is_CVHT":false,"is_Clear":false}
        const headers = {
            'authorization': model.sinh_vien.token,
            'ua': await this.#getUA(apiParams.locDsKQdkmhSinhVien)
        }
        try {
            const response =await this.#request("POST", apiParams.requestWithAPIUrlPublic(apiParams.locDsKQdkmhSinhVien), headers,params)
            model.ds_kq_dk.length = 0
            response.data.ds_kqdkmh.forEach((value) => {
                model.ds_kq_dk.push(value)
            })
            return model.ds_kq_dk

        }catch (error) {
            console.log(error.status)
        }


    }

    async dsDieuKienloc() {
        const headers = {
            'authorization': model.sinh_vien.token,
            'ua': await this.#getUA(apiParams.locDsDieuKienLoc)
        }
        try {
            const response =await this.#request("POST", apiParams.requestWithAPIUrlPublic(apiParams.locDsDieuKienLoc), headers)
            model.ds_dk_loc.length = 0
            response.forEach((value)=> {
               model.ds_dk_loc.push(value)
            })
            return model.ds_dk_loc
        }catch (error) {
            console.log(error)
        }
    }

    async login(username, password) {
        const ua = await this.#getUA(apiParams.login)
        const headers = {
            'ua': ua
        }
        const params = stringify({
            "username": username,
            "password": password,
            "grant_type": "password",
        })
        const response = await this.#request("POST", apiParams.requestWithAPIUrl(apiParams.login), headers, params)
        model.sinh_vien.token_type = response.token_type
        model.sinh_vien.access_token = response.access_token
        model.sinh_vien.name = response.name
        model.sinh_vien.mail = response.principal
        model.sinh_vien.refresh_token = response.refresh_token
        model.sinh_vien.expires_in = response.expires_in
        this.#setToken()
        return true
        // console.log(model.sinh_vien);
    }
}

const api = new API();
export {api};