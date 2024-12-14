let sinh_vien = {
    mail: "",
    name: "",
    refresh_token: "",
    expires_in: 0,
    token_type: "",
    token: "",
    access_token: ""
}

let mon_hoc = {
    ma: '',
    ten: ''
}
let khoa = {
    ma: '',
    ten: ''
}
let lop = {
    ma: '',
    ten: ''
}
let dk_loc = {
    "gia_tri": '',
    "mieu_ta": '',
    "is_mac_dinh": ''
}
let nhom_to = {
    id_mon: '',
    id_to_hoc: '',
    ma_mon: '',
    ten_mon: '',
    ten_mon_eg: '',
    so_tc: '3',
    nhom_to: '01',
    ds_lop: [ '' ],
    ds_khoa: [ '' ],
    to: '',
    lop: 'DH21CC',
    sl_dk: 0,
    sl_cp: 0,
    sl_cl: 0,
    tkb: '',
    is_dk: false,
    is_ctdt: false

}
let kq_dk = {
    enable_xoa : false,
    hoc_phi_tam_tinh: 0,
    id_dia_diem_thi: '',
    id_kqdk: '',
    ngay_dang_ky: '',
    nguoi_dang_ky: '',
    to_hoc : {
        enable: false,
        id_mon: '',
        id_to_hoc: '',
        lop : '',
        ma_mon: '',
        nhom_to: '',
        sl_cl: '',
        ten_mon: '',
        so_tc: ''
    }
}
function assignElem(element,data) {
    Object.assign(element, data);
}
let ds_dk_loc = []
let dsThongTin = {
    total_items: 0,
    trong_thoi_gian_dang_ky: false,
    ds_khoa: [],
    ds_lop: [],
    ds_mon_hoc:[],
    ds_nhom_to: []
}
let ket_qua_dkmh = {
    is_chung_nhom_mon_hoc: false,
    is_thanh_cong: false,
    ket_qua_dang_ky: kq_dk,
    thong_bao_loi: '',
    thong_bao_tien_quyet: ''
}
let ds_kq_dk = []
export {kq_dk,ds_kq_dk,sinh_vien,nhom_to,dk_loc,ds_dk_loc,dsThongTin,khoa,lop,mon_hoc,assignElem}