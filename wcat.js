let fs= require('fs')
let input=process.argv.slice(2);
console.log("input : ",input);
let options=[];
let filepath=[];
for(let i=0;i<input.length;i++){
   if( input[i]=="-s" || input[i]=="-b" || input[i] == "-n" ){
      options.push(input[i]);
   }
   else{
    filepath.push(input[i]);
   }
}
console.log(options);
console.log(filepath);
for(let i=0;i<filepath.length;i++){
   let isFilePresent=fs.existsSync(filepath[i]);
   if(!isFilePresent){
      console.log("filepath", filepaths[i]),"does not exist";
      return;
   }
}
let file="";
for(let i=0;i<filepath.length;i++){
  file=file+fs.readFileSync(filepath[i]).toString();
}
console.log(file);

