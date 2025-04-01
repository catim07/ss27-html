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
let arr1=[1,2,3,5]
let arr2=[1,2,4,5]
let arr3="abc"
alert(ktra(arr1))
alert(ktra(arr2))
alert(ktra(arr3))