import { DANH_SACH_MON_AN } from "../util/settings.js";
import { MonAn } from "./MonAn.js";
export class Menu {
    danhSachMonAn = [];
    constructor(){}
    themMonAn = (monAn) =>{
        this.danhSachMonAn.push(monAn);
        return this.danhSachMonAn;
    };
    xoaMonAn = (maMon) => {
        this.danhSachMonAn = this.danhSachMonAn.filter(
          (mon) => mon.maMon !== maMon
        );
      console.log(this.danhSachMonAn);

        return this.danhSachMonAn;
      };
      luuLocalStorage = () => {
        //Lấy this.danhSachMonAn -> biến thành chuỗi và lưu vào localstorage
        let sMangMonAn = JSON.stringify(this.danhSachMonAn);
        localStorage.setItem(DANH_SACH_MON_AN, sMangMonAn);
      };
      layLocalStorage = () => {
        if (localStorage.getItem(DANH_SACH_MON_AN)) {
          let sMangMonAn = localStorage.getItem(DANH_SACH_MON_AN);
          this.danhSachMonAn = JSON.parse(sMangMonAn);
        }
      };
      renderMonAn = (selector) => {
        //Tạo table món ăn từ mảng món ăn lấy ra từ localstorage
    
        let htmlContent = "";
        for (let monAnStore of this.danhSachMonAn) {
          let monAn = new MonAn();
          monAn = { ...monAn, ...monAnStore };
          htmlContent += `
                <tr>
                <Td>${monAn.maMon}</Td>
                <Td>${monAn.tenMon}</Td>
                <Td>${monAn.giaMon}</Td>
                <Td>${monAn.hinhAnh}</Td>
                
                
                <td>
                <button class="btn btn-danger" onclick="xoaMonAn('${monAn.maMon}')">Xóa</button>
               
                </td>
                </tr>
                `;
        }
        document.querySelector(selector).innerHTML = htmlContent;
      };
}


