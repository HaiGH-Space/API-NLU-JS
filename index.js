import {api} from "./api/api.js";
import {readFileSync} from 'fs'
import {nhom_to, assignElem, mon_hoc} from "./api/model.js";

async function init() {
    const userJSON = JSON.parse(readFileSync('./user.json', 'utf8'));
    await api.login(userJSON.username,userJSON.password)
    // await api.dsDieuKienloc()

    // await api.dsKQdkmh()
    // const dsThongTin =  await api.dsThongTin()
    // dsThongTin.ds_nhom_to.forEach(value =>{
    //     assignElem(nhom_to,value)
    //
    //     if (nhom_to.id_to_hoc === '-8263160012138159500') {
    //         console.log(value)
    //     }
    // })
    // await api.dkmh("-8263160012138159500",true)
    // await api.dkmh("-8263160012138159500",false)
    // await api.dsDiemSinhVien()
}

init();