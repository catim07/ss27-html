let check = 1, count = 0, arr = [];
do {
    let chose = +prompt(`
        ================= MENU ==================
        1. Cộng hai số.
        2. Trừ hai số.
        3. Nhân hai số.
        4. Chia hai số.
        5. Thoát.
        ==========================================
        Lựa chọn của bạn: `);
    switch (chose) {
        case 1:
            {
            let a = +prompt("mời bạn nhập số thứ nhất: ");
            let b = +prompt("mời bạn nhập số thứ hai: ");
            let total=a+b
            alert(total)
            break;
            }
        case 2:
            {
                let a = +prompt("mời bạn nhập số thứ nhất: ");
                let b = +prompt("mời bạn nhập số thứ hai: ");
                let total=a-b
                alert(total)
                break;
            }
        case 3:
            {
                let a = +prompt("mời bạn nhập số thứ nhất: ");
                let b = +prompt("mời bạn nhập số thứ hai: ");
                let total=a*b
                alert(total)
                break;
                }
        case 4:
            {
                let a = +prompt("mời bạn nhập số thứ nhất: ");
                let b = +prompt("mời bạn nhập số thứ hai: ");
                let total=a/b
                alert(total)
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

