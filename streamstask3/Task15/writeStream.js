const fs=require('fs');
const writeStream=fs.createWriteStream('output.txt');
writeStream.write("Name:Priya\n");
writeStream.write("Age:25\n");
writeStream.write("City:Chennai\n");
writeStream.write("Role:Developer\n");
writeStream.end();
writeStream.on('finish',()=> {
    console.log("All data written to output.txt");
});