
function main(){
    let argc = process.argv.slice(2).length
    var myargs = process.argv.slice(2);
    //check argument count
    if(argc != 1){
        console.log("Usage: node ceasar.js key(int)");
        return
    }
    //check if the key is numeric
    if(isNaN(myargs[0]) == true){
        console.log("key must me a numeric integer");
    }
    else{
        var key = parseInt(myargs[0]);
    }
    //convert string
    let check = typeof(key);
    const prompt = require('prompt-sync')();
    const pt = prompt('PlainText:');
    console.log(`${pt}`);
    codigo(pt, key);
}

function codigo(pt, key){
    for (let i = 0; i < pt.length; i++){
        if (isAlpha(pt[i]) == true){
            if (pt[i] == pt[i].toUpperCase()){
                //get the ASCCI value - 65 for Upperchars
                let up = pt.charCodeAt(i) - 65;
                //add the key and make sure that stays in range of 1-26
                let r = (up + key) % 26;
                // add 65 to get the char from ASCCI value
                let char = String.fromCharCode(r+65);
                //use this istead console.log to remove '\n' 
                process.stdout.write(`${char}`);
                
            }
            if (pt[i] == pt[i].toLowerCase()){
                let down = pt.charCodeAt(i) - 97;
                let r = (down + key) % 26;
                let char = String.fromCharCode(r+97);
                //process.stdout.write(`${char}`);
            }
        }    
        if (isAlpha(pt[i]) == false){
           process.stdout.write(`${pt[i]}`);
        }
    }
}

function isAlpha(aChar)
{
   myCharCode = aChar.charCodeAt(0);

   if(((myCharCode > 64) && (myCharCode <  91)) ||
     ((myCharCode > 96) && (myCharCode < 123)))
   {
      return true;
   }

   return false;
}
main();