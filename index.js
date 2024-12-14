import {api} from "./api/api.js";
import {nhom_to, assignElem, mon_hoc} from "./api/model.js";

async function init() {
    await api.login("21130343", "hai0932169055")
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
    await api.dkmh("-8263160012138159500",true)
    await api.dkmh("-8263160012138159500",false)
}

init();
