
# API for NLU

Project này sẽ cung cấp các api mà trang [dkmh](https://dkmh.hcmuaf.edu.vn/) của NLU sử dụng. Từ đó có thể dễ dàng tạo các tool dkmh với việc chỉ cần gọi các api cần thiết đã được cung cấp sẵn giúp tối ưu hiệu suất.



## Tech Stack

**Client:** Node



## Features

- Đăng nhập
- Đăng ký môn học
- Lấy danh sách điểm sinh viên
- Lấy danh sách thông tin các môn học



## Roadmap

- Thêm lấy thời khóa biểu
- Tối ưu offset



## Usage

Tải project này về.

```bash
git clone https://github.com/HaiGH-Space/API-NLU-JS.git
```
Trước khi sử dụng các api, phải thực hiện api đăng nhập trước.
Điền vào mssv và mật khẩu vào hàm login, hàm này sẽ trở về sinh viên nếu đăng nhập thành công.
```javascript
import {api} from "./api/api.js";
async function test() {
    const sinh_vien = await api.login(username, password)
    console.log(sinh_vien)
}
test()
```
Sau khi đăng nhập thành công có thể sử dụng các api có trong file api.js
 ```javascript
import {api} from "./api/api.js";

async function test() {
    const sinh_vien = await api.login(username, password)
    const dsDieuKienloc = await api.dsDieuKienloc() // Lấy danh sách điều kiện lọc 
    const dsKQdkmh =  await api.dsKQdkmh()          // Lấy danh sách các kết quả đăng ký môn học
    const dsCacMonHoc =  await api.dsThongTin()     // Lấy danh sách thông tin về các môn học như: ds_lop, ds_mon_hoc, ds_nhom_to, ds_khoa
    const dkmh =  await api.dkmh(id_to_hoc, isDK)   // id_to_hoc là môn muốn thực thi lấy được thông qua dsCacMonHoc, isDK nếu là true thì thực thi dk môn, false thì sẽ hủy dk môn
}

test()
```
### Note !!!


Các đối tượng đều được định nghĩa trong file **/api/model.js**.

#### Ví dụ:
Với tên biến là ds[X] trong các đối tượng api trả về đều được định nghĩa trong **/api/model.js**.


```bash
 import * as model from "./api/model.js";
 import {api} from "./api/api.js";

 const dsCacMonHoc =  await api.dsThongTin()

 /* 
 Trong đối tượng dsThongTin có các biến sau là mảng
 - ds_khoa
 - ds_lop
 - ds_mon_hoc
 - ds_nhom_to
 Bây giờ sẽ lấy ví dụ gán giá trị ds_khoa tại ví trí 0 vào biến khoa trong model.js
 */  
 model.assignElem(model.khoa, dsCacMonHoc.ds_khoa[0])

 // Bây giờ đã có thể truy xuất các giá trị ds_khoa tại ví trí 0 thông qua biến khoa trong model
 console.log(model.khoa.ma)
 console.log(model.khoa.ten)
 ```

## Running Tests

To run tests, run the following command

```bash
  npm run start
```

Or

```bash
  node index.js
```


## FAQ

#### Sử dụng dkmh bằng API liệu nhà trường có khóa không?

Câu trả lời là không

#### Project này có thu nhập dữ liệu cá nhân hay bất kì dữ liệu riêng tư nào không?

Câu trả lời là không, bạn chạy trên local của chính bạn không qua bất kì bên nào khác.


## Authors

- [@HaiGH](https://github.com/HaiGH-Space)


## Licenses

[![MIT License](https://img.shields.io/badge/License-MIT-green.svg)](https://choosealicense.com/licenses/mit/)

