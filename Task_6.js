let arr = ['a', 't', 'q', 'd', 'с', 'f', 'g', 's'];
let theSame = true;
for (let i = 0; i < arr.length - 1; i++){
    for (let j = i + 1; j < arr.length; j++){
        if (arr[i] == arr[j]) {
            theSame = false;
        }
    }
}
if (theSame) {
    console.log("array is the same");
} else {
    console.log("array is not the same");
}
