// Compare Objects for Equivalent Properties

//Write a JavaScript program to compare two objects to determine if the first contains equivalent property values to the second one.

function isObjEquivalent(obj1, obj2) {
  // const keys1 = Object.keys(obj1)
  // const keys2 = Object.keys(obj2)

  // if their lenth is not equal return false
  // if(keys1.length !== keys2.length) return false
  // if they dont have same key and value return false
  //     for(let key of keys1){
  // if(obj1[key] !== obj2[key]){
  //     return false
  // }
  //     }
  //     return true
  for (let key in obj2) {
    if (!(key in obj1) || obj1[key] !== obj2[key]) {
      return false;
    }
  }
  return true;
}

function isObjEquivalent2(obj1, obj2) {
  for (let key in obj2) {
    if (!(key in obj1) || obj1[key] !== obj2[key]) {
      return false;
    }
  }
  return true;
}
console.log(
  isObjEquivalent(
    { age: 25, hair: "long", beard: true },
    { hair: "long", beard: true }
  )
);
console.log(
  isObjEquivalent(
    { hair: "long", beard: true },
    { age: 25, hair: "long", beard: true }
  )
);
console.log(
  isObjEquivalent(
    { hair: "long", beard: true },
    { age: 26, hair: "long", beard: true }
  )
);
