// level {1/2/3}
// level 1
// 1. Convert [1, 2, 3] to [2, 3, 4] using one line of code.
//Output should be [2, 3, 4]

let arr= [1,2,3];
console.log(  arr.map( (a)=> a+1  )  );

// 2. Calculate total of all the numbers in array [1, 2, 3] using one line of code.
// Output should be a number: 6

let ar= [1, 2, 3];
console.log(  ar.reduce( (a,b)=> a+b  ) );

// 3. Print all the properties of the object along with value {name: 'Elie', rank: 'Pro'}.
// Output should be a string: "name: Elie, rank: Pro"

var obj={
    name: 'Elie', rank: 'Pro'
}


var str= Object.keys(obj).map(function (key) { return "" + key + ":" + obj[key];}).join(", ");
console.log(JSON.stringify(str));
