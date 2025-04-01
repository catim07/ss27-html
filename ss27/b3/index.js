
let arr = [];
do {
    let chose = +prompt(`
        ================= MENU ==================
        1. Tính diện tích hình tròn.
        2. Tính chu vi hình tròn.
        3. Tính diện tích hình chữ nhật.
        4. Tính chu vi hình chữ nhật.
        5. Thoát.
        ==========================================
        Lựa chọn của bạn: `);
    switch (chose) {
        case 1:
            {
                let r = +prompt("mời bạn nhập bán kính: ")
                if (isNaN(r)) {
                    alert("nhập số")
                } else {
                    let total = r * r * 3.14
                    alert(total)
                }
                break;
            }
        case 2:
            {
                let d = +prompt("mời bạn nhập đường kính: ")
                if (isNaN(r)) {
                    alert("nhập số")
                } else {
                    let total = d * 3.14
                    alert(total)
                }
                break;
            }
        case 3:
            {
                let d = +prompt("mời bạn nhập chiều dài: ")
                let r = +prompt("mời bạn nhập chiều rộng: ")
                if (isNaN(r)) {
                    alert("nhập số")
                } else {
                    let total = r * d
                    alert(total)
                }
                break;
            }
        case 4:
            {
                let d = +prompt("mời bạn nhập chiều dài: ")
                let r = +prompt("mời bạn nhập chiều rộng: ")
                if (isNaN(r)) {
                    alert("nhập số")
                } else {
                    let total = (r * d) *2
                    alert(total)
                }
                break;
            }
        case 5:
            check = 0;
            break;
        default:
            alert("số ko hợp lệ");
            break;
    }

} while (check != 0);
