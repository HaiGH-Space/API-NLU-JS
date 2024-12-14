import {readFileSync} from 'fs'
const apiJSON = JSON.parse(readFileSync('./api.json', 'utf8'));
class APIParams {
     #root = "";
     #prefix = "";
    constructor(apiJSON) {
        this.locDsDiemSinhVien = apiJSON.locDsDiemSinhVien
        this.xuLydkmhSinhVien = apiJSON.xuLydkmhSinhVien
        this.locDsNhomTo = apiJSON.locDsNhomTo
        this.locDsDieuKienLoc = apiJSON.locDsDieuKienLoc
        this.#root = apiJSON.root;
        this.#prefix = apiJSON.prefix;
        this.getUrl = apiJSON.getUrl;
        this.locThongTin =  apiJSON.locThongTin;
        this.login = apiJSON.login;
        this.loginPing = apiJSON.loginPing;
        this.getCurrentLogin =  apiJSON.getCurrentLogin
        this.logOut = apiJSON.logOut;
        this.getUserOnline = apiJSON.getUserOnline
        this.locSinhVienInfo = apiJSON.locSinhVienInfo;
        this.locGiangVienInfo = apiJSON.locGiangVienInfo;
        this.locDsKQdkmhSinhVien = apiJSON.locDsKQdkmhSinhVien
    }

    requestWithAPI(api) {
        return this.#prefix + api;
    }
    baseUrl(){
        return this.#root + this.#prefix;
    }
    requestWithAPIUrlPublic(api) {
        return this.#root +"/public/api/" + api;
    }
    requestWithAPIUrlDKMH(api) {
        return this.#root + "/dkmh/api/"+ api;
    }
    requestWithAPIUrl(api) {
        return this.#root + this.#prefix + api;
    }
    static getRequestURLFromParams(root, prefix, api) {
        return root + prefix + api;
    }
}
const apiParams = new APIParams(apiJSON);
export { apiParams };

