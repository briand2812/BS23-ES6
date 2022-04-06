import { MonAn } from "../models/MonAn.js";
import {Menu} from "../models/Menu.js"

let menu =  new Menu();

document.querySelector('#btnThemMon').onclick=() => {

    let arrInput = document.querySelectorAll('#foodForm input');
    let monAn = new MonAn();
    for (let input of arrInput){
        let {id,value} = input;
        monAn = {...monAn,[id]:value}
    }        
        console.log('monAn',monAn);
        menu.themMonAn(monAn);
        menu.renderMonAn('#thongTinMonAn');
        
}


window.xoaMonAn = function (maMon) {
    menu.xoaMonAn(maMon);
    menu.renderMonAn('#thongTinMonAn');
}










var arrMonAn = [
    {maMonAn:1,tenMonAn:'Nước lẩu haidilao',giaTien:100},
    {maMonAn:2,tenMonAn:'Mì cay thành đô',giaTien:200},
    {maMonAn:3,tenMonAn:'Mực bạch ngọc',giaTien:300},
];


