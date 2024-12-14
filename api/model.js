export let sinh_vien = {
    mail: "",
    name: "",
    refresh_token: "",
    expires_in: 0,
    token_type: "",
    token: "",
    access_token: ""
}
export let dkmh = {
    is_thanh_cong: false,
    thong_bao_loi: '',
    is_chung_nhom_mon_hoc: false,
    ket_qua_dang_ky: {
        id_kqdk: '',
        ngay_dang_ky: '',
        is_da_rut_mon_hoc: false,
        enable_xoa: false,
    }
}
export let diemSinhVien = {
    ds_diem_hocky: [],
    mesage_diemk1:'',
    mesage_diemtk4:'',
    mesage_diemtk10:'',
    mesage_diemtkc:''
}
export let diem_hocky = {
    ds_diem_mon_hoc : [],
    loai_nganh: -1,
    hoc_ky: "",
    ten_hoc_ky: "",
    dtb_hk_he10: "",
    dtb_hk_he4: "",
    dtb_tich_luy_he_10: "",
    dtb_tich_luy_he_4: "",
    so_tin_chi_dat_hk: "",
    so_tin_chi_dat_tich_luy: "",
    xep_loai_tkb_hk: "",
}
export let diem_mon_hoc = {
    ma_mon: "",
    nhom_to: "",
    ten_mon: "",
    ten_mon_eg: "",
    mon_hoc_nganh: true,
    so_tin_chi: "0",
    diem_thi: "0",
    diem_giua_ky: "0",
    diem_tk: "0",
    diem_tk_so: "0",
    diem_tk_chu: "",
    loai_nganh: -1,
    ds_diem_thanh_phan: []

}
export let diem_thanh_phan = {
    ky_hieu: "",
    ten_thanh_phan: "",
    trong_so: "",
    diem_thanh_phan: ""
}
export let mon_hoc = {
    ma: '',
    ten: ''
}
export let khoa = {
    ma: '',
    ten: ''
}
export let lop = {
    ma: '',
    ten: ''
}
export let dk_loc = {
    "gia_tri": '',
    "mieu_ta": '',
    "is_mac_dinh": ''
}
export let nhom_to = {
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
export let kq_dk = {
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
export function assignElem(element,data) {
    Object.assign(element, data);
}
export let ds_dk_loc = []
export let dsThongTin = {
    total_items: 0,
    trong_thoi_gian_dang_ky: false,
    ds_khoa: [],
    ds_lop: [],
    ds_mon_hoc:[],
    ds_nhom_to: []
}
export let ket_qua_dkmh = {
    is_chung_nhom_mon_hoc: false,
    is_thanh_cong: false,
    ket_qua_dang_ky: kq_dk,
    thong_bao_loi: '',
    thong_bao_tien_quyet: ''
}
export let ds_kq_dk = []
