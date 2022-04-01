// level {1/2/3}
// level 1

// ```
// async function GET_daTA() {
//     let r = await fetch("https://jsonplaceholder.typicode.com/todos/1");
//     let DATA = await r.json();
//     return DATA;
//   }
//   ```

// async function data(){
//     let res= await fetch (  "https://jsonplaceholder.typicode.com/todos/1" );
//     let value= await res.json();
//     console.log(value);
// }

const data= fetch("https://jsonplaceholder.typicode.com/todos/1").then(response => response.json()).then(data => {
return data;
})
.catch( error=> console.log(error) );


