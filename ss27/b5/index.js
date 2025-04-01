function chiaMang(arr, n) {
    let ketQua = [];
    while (arr.length>0) {
        ketQua.push(arr.splice(0,n));
    }
    return ketQua;
}
let mang1 = [1, 2, 3, 4, 5, 6, 7, 8];
let kichThuoc1 = 3;
let mang2 = [1, 2, 3, 4, 5, 6, 7, 8];
let kichThuoc2 = 2;
console.log(chiaMang(mang1, kichThuoc1));
console.log(chiaMang(mang2, kichThuoc2));
