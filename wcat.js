let fs= require('fs')
let input=process.argv.slice(2);
console.log("input : ",input);
let options=[];
let filepath=[];
for(let i=0;i<input.length;i++){
    //first character in string
   let firstchar=input[i].charAt(0);
   if(firstchar=='-'){
      options.push(input[i]);
   }
   else{
    filepath.push(input[i]);
   }
}
console.log(options);
console.log(filepath);