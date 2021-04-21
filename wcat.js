let fs= require('fs')
let input=process.argv.slice(2);//taking input from the user
console.log("input : ",input);
let options=[];//array for storing options of the command
let filepath=[];// array for storing paths of the files
for(let i=0;i<input.length;i++){
   //identifying input arguments if they are option or filepath
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
      console.log("filepath: ", filepaths[i]," does not exist.Kindly check path");
      return;
   }
}
// to read content from provided files and concatenating them
let totalcontent="";
for(let i=0;i<filepath.length;i++){
  totalcontent=totalcontent+fs.readFileSync(filepath[i]).toString()+"\r\n";
}
// Implementing command(-s) >> Removes Empty line breaks
let isSOption=options.includes('-s');
if(isSOption){
   
   //identify and remove empty line breaks
   let contentarray=totalcontent.split("\r\n");

   console.log(contentarray);
   //remove  
   let tempArr=[];
   for(let i=0;i<contentarray.length;i++) {
        if(contentarray[i]!=""){
            tempArr.push(contentarray[i]);
        }
   }
   totalcontent=tempArr.join("\r\n");

}
// Implementing command(-n) >> Puts a number to every line
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

let isB=options.includes("-b");
if(isB){
   let count=1;
   let contentArr=totalcontent.split("\r\n");

   for(let i=0;i<contentArr.length;i++){
      if(contentArr[i]!=""){
         contentArr[i]=count+" ."+contentArr[i];
         count++;
      }
      
   }

   totalcontent = contentArr.join("\r\n");
}
console.log(totalcontent);



