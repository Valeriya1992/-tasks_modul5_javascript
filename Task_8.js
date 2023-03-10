let myMap = new Map();
myMap.set("Ключ-x", "значение-y");


for (let name of myMap.keys()){
    console.log(name + "," + myMap.get(name));
}
