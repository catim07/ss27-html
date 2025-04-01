function ktra(arr){
    if(!Array.isArray(arr)){
        return "dữ liệu ko hợp lệ"
    }
    let a=arr[0];
    for(let i=0;i<arr.length;i++){
        if(arr[i]!==a){
            return a
        }
        a+=1;
    }
    return "true"
}
let num1=2941
let num2=3875
let num3="1h8t"
alert(ktra(arr1))
alert(ktra(arr2))
alert(ktra(arr3))