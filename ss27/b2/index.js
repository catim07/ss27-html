let check = 1, count = 0, arr = [];
do {
    let chose = +prompt(`
        ================= MENU ==================
        1. Nhập danh sách sinh viên.
        2. Hiển thị danh sách sinh viên.
        3. Tìm sinh viên theo tên.
        4. Xóa sinh viên khỏi danh sách.
        5. Thoát.
        ==========================================
        Lựa chọn của bạn: `);
    switch (chose) {
        case 1:
            let num = +prompt("mời bạn nhập số lượng: ");
            for (let i = 0; i < num; i++) {
                let ten;
                do {
                    ten= prompt(`Mời bạn nhập tên đầy đủ sinh viên thứ ${i + 1}:`).trim();
                    if (ten === "") {
                        alert("Tên sinh viên không được để trống.");
                    }
                } while (ten === "");
                arr.push(ten);
            }
            count = 1;
            break;
        case 2:
            if (count == 0) {
                console.log("chưa có phần tử trong mảng");
            } else {
                alert(arr)
            }
            break;
        case 3:
            if (count == 0) {
                console.log("chưa có phần tử trong mảng");
            } else {
                let tim=prompt("mời bạn nhập tên: ");
                let thay=arr.filter(ten=>ten.toUpperCase().includes(tim.toUpperCase()))
                alert(thay)
            }
            break;
        case 4:
            if (count == 0) {
                console.log("Chưa có phần tử trong mảng");
            } else {
                let tim=prompt("mời bạn nhập tên: ");
                let index=arr.findIndex(ten=>ten.toUpperCase().includes(tim.toUpperCase()))
                if(index===-1){
                    alert("không tìm thấy")
                }else{
                    arr.splice(index,1);
                    alert("xóa thành công: "+arr)
                }
            }
            break;
        case 5:
            check = 0;
            break;
        default:
            alert("số ko hợp lệ");
            break;
    }

} while (check != 0);
