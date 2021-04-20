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
let totalcontent="";
for(let i=0;i<filepath.length;i++){
  totalcontent=totalcontent+fs.readFileSync(filepath[i]).toString()+"\n";
}
// Implementing command 3(-s) 
let isSOption=options.includes('-s');
if(isSOption){
   //empty line break remove
   //console.log totalcontent
   //identify empty line breaks
   let contentarray=totalcontent.split("\r\n");
   console.log(contentarray);
   //remove  
   let tempArr=[];
   for(let i=0;i<contentarray.length;i++) {
        if(contentarray[i]!=""){
            tempArr.push(contentarray[i]);
        }
   }
   totalcontent=tempArr.join("\n");

}
//console.log(finalfile);
let isN=options.includes("-n");
if(isN){
   let count=1;
   let contentArr=totalcontent.split("\r\n");

   for(let i=0;i<contentArr.length;i++){
      contentArr[i]=count+" ."+contentArr[i];
      count++;
   }

   totalcontent = contentArr.join("\r\n");
}
console.log(totalcontent);



