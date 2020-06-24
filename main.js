const p = document.getElementById("asb");
const input = document.getElementById("input");
const input2 = document.getElementById("input2");
const buton = document.getElementById("button");
const alphabet1 = ["","a","b","c","d","e","f","g","ğ","h","ı","i","j","k","l","m","n","o","ö","p","r","s","ş","t","u","ü","v","y","z"];

buton.addEventListener('click',()=>{
    p.innerText=" ";
    for (var c=0 ; c < input2.value ; c++){
        let len = Math.random()*27;
        len = Math.round(len);
        var word = "";
        var sentences ="";
    
        for(var b = 0; b < input.value ; b++){
            for(var a = 0 ; a < len ; a++){
                word += alphabet1[Math.round(Math.random()*27)+1];
            }
            sentences += word +" ";
            word = "";
            len = Math.random()*15;
            len = Math.round(len);
    
        }
        sentences =sentences.replace(/.$/,".");
        sentences =sentences.replace(/^/,sentences.charAt(0).toUpperCase());
        p.innerText += sentences +"\n\n";
    }
    })
