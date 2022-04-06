import { arrMonAn } from "../controllers";
import {DoAn} from "./DoAn.js"

renderMonAn2 = (selector) => {
    //Tạo table món ăn từ mảng món ăn lấy ra từ localstorage

    let  htmlContent= "";
    for (let monAn2 of this.arrMonAn) {
      monAn = { ...monAn, ...monAn2 };
      htmlContent += `
            <tr>
            <Td>${monAn.maMonAn}</Td>
            <Td>${monAn.tenMonAn}</Td>
            <Td>${monAn.soLuong}</Td>
            <Td>${monAn.giaTien}</Td>
            
            
            <td>
           
            </td>
            </tr>
            `;
    }
    document.querySelector(selector).innerHTML = htmlContent;
  };

document.querySelectorAll('#btnAdd').onclick = function add(){
    for (let item of arrMonAn){
        if(arrMonAn[item] == arrMonAn.maMonAn){
            item.count ++;
            renderMonAn2();
            console.log(item.count)
        }
        break
    }
    
}

document.querySelectorAll('#btnMinus').onclick = function minus(){
    for (let item of arrMonAn){
        if(arrMonAn[item] == arrMonAn.maMonAn){
            item.count --;
            renderMonAn2();
            console.log(item.count)
        }
        break
    }
    
}