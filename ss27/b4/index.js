let check = 1, count = 0, arr = [];
do {
    let chose = +prompt(`
        ================= MENU ==================
        1. Nhập danh sách số nguyên.
        2. Tính trung bình các số.
        3. Tìm số chẵn lớn nhất.
        4. Tìm số lẻ nhỏ nhất.
        5. Thoát chương trình
        ==========================================
        Lựa chọn của bạn: `);
    switch (chose) {
        case 1:
            let dem = +prompt("mời bạn nhập số phần tử: ");
            if(isNaN(dem)){
                alert("nhập só nguyên dương")
                break;
            }
            for (let i = 0; i < dem; i++) {
                let value = +prompt(`mời bạn nhập phần tử thứ ${i + 1}: `);
                arr.push(value);
                count = 1;
            }
            break;
        case 2:
            if (count == 0) {
                console.log("chưa có phần tử trong mảng");
            } else {
                alert(`trung bình các số là: ${(arr.reduce((acc,curr)=>acc+curr,0)/arr.length)}`)
            }
            break;
        case 3:
            if (count == 0) {
                console.log("chưa có phần tử trong mảng");
            } else {
                alert(`số chẵn lớn nhất là: ${(arr.filter(num=>num%2==0)).reduce((acc,curr)=>acc>curr?acc:curr)}`)
            }
            break;
        case 4:
            if (count == 0) {
                console.log("Chưa có phần tử trong mảng");
            } else {
                alert(`số lẻ nhỏ nhất là: ${(arr.filter(num=>num%2!=0)).reduce((acc,curr)=>acc<curr?acc:curr)}`)
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
