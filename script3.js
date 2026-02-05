// ================== ĐĂNG NHẬP ==================
let attempts = 0;
let isAuthenticated = false;
const USERNAME = "admin";
const PASSWORD = "12345";

while (attempts < 3) {
  let u = prompt("Tên đăng nhập:");
  let p = prompt("Mật khẩu:");

  if (u === USERNAME && p === PASSWORD) {
    alert("Đăng nhập thành công!");
    isAuthenticated = true;
    break;
  } else {
    attempts++;
    alert("Sai thông tin! Còn " + (3 - attempts) + " lần.");
  }
}

if (!isAuthenticated) {
  alert("Hệ thống bị khóa!");
} else {
  // ================== DỮ LIỆU ==================
  let libraries = ["Toán", "Văn", "Anh"];
  let choice;

  // ================== MENU ==================
  do {
    choice = Number(
      prompt(
`--- MENU THƯ VIỆN ---
1. Nhập lô sách mới
2. Hiển thị danh sách
3. Tìm kiếm sách
4. Cập nhật tên sách
5. Đảo ngược kệ
6. Nhập kho từ nguồn khác
0. Thoát`
      )
    );

    switch (choice) {

      // ===== 1. NHẬP LÔ SÁCH =====
      case 1: {
        let input = prompt("Nhập tên sách (cách nhau bằng dấu phẩy):");
        if (!input) {
          alert("Dữ liệu không hợp lệ!");
          break;
        }

        let books = input.split(",");

        for (let i = 0; i < books.length; i++) {
          let book = books[i];
          let foundIndex = -1;

          for (let j = 0; j < libraries.length; j++) {
            if (libraries[j].toLowerCase() === book.toLowerCase()) {
              foundIndex = j;
              break;
            }
          }

          if (foundIndex !== -1) {
            libraries[foundIndex] = book; // ghi đè
          } else {
            libraries.push(book);
          }
        }

        alert("Đã xử lý xong lô sách.");
        break;
      }

      // ===== 2. HIỂN THỊ =====
      case 2: {
        console.clear();
        console.log("=== DANH SÁCH SÁCH ===");
        for (let i = 0; i < libraries.length; i++) {
          console.log(i + 1 + ". " + libraries[i]);
        }
        alert("Đã in danh sách ra console.");
        break;
      }

      // ===== 3. TÌM KIẾM =====
      case 3: {
        let key = prompt("Nhập tên sách cần tìm:");
        let found = false;

        for (let i = 0; i < libraries.length; i++) {
          if (libraries[i].toLowerCase() === key.toLowerCase()) {
            alert("Tìm thấy sách tại vị trí index: " + i);
            found = true;
            break;
          }
        }

        if (!found) {
          alert("Không tìm thấy sách.");
        }
        break;
      }

      // ===== 4. CẬP NHẬT =====
      case 4: {
        let oldName = prompt("Nhập tên sách cần sửa:");
        let index = -1;

        for (let i = 0; i < libraries.length; i++) {
          if (libraries[i].toLowerCase() === oldName.toLowerCase()) {
            index = i;
            break;
          }
        }

        if (index === -1) {
          alert("Không tìm thấy sách.");
        } else {
          let newName = prompt("Nhập tên mới:");
          libraries[index] = newName;
          alert("Cập nhật thành công!");
        }
        break;
      }

      // ===== 5. ĐẢO NGƯỢC =====
      case 5: {
        libraries.reverse();
        console.clear();
        for (let i = 0; i < libraries.length; i++) {
          console.log(i + ": " + libraries[i]);
        }
        alert("Đã đảo ngược kệ sách.");
        break;
      }

      // ===== 6. NHẬP KHO TỪ NGUỒN KHÁC =====
      case 6: {
        let externalBooks = ["Sách Kỹ Năng", "Truyện Tranh"];
        let added = 0;

        for (let i = 0; i < externalBooks.length; i++) {
          let exists = false;

          for (let j = 0; j < libraries.length; j++) {
            if (
              libraries[j].toLowerCase() ===
              externalBooks[i].toLowerCase()
            ) {
              exists = true;
              break;
            }
          }

          if (!exists) {
            libraries.push(externalBooks[i]);
            added++;
          }
        }

        alert("Đã nhập kho từ nguồn khác. Thêm mới: " + added + " sách.");
        break;
      }

      // ===== 0. THOÁT =====
      case 0:
        alert("Hẹn gặp lại!");
        break;

      default:
        alert("Lựa chọn không hợp lệ!");
    }
  } while (choice !== 0);
}
