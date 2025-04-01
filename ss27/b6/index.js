function ktra(arr){
    if(!Array.isArray(arr)){
        return "dữ liệu ko hợp lệ"
    }
    let a=arr[0];
    let b=arr[0];
    for(let i=0;i<arr.length;i++){
        if(arr[i]!==a){
            return "false"
        }
        a+=b;
    }
    return "true"
}
let arr1=[2,4,6,8]
let arr2=[3,6,9,12,14]
let arr3="abc"
alert(ktra(arr1))
alert(ktra(arr2))
alert(ktra(arr3))