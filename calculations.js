function dec_to_bin() {
    var decConvert = Number(document.getElementById('input1').value);
    var result = document.getElementById('binPrint1');
    result.innerHTML += (decConvert.toString(2)) + "<br/>"

}

function dec_to_oct() {
    var decConvert = Number(document.getElementById('input2').value);
    var result = document.getElementById('binPrint2');
    result.innerHTML += (decConvert.toString(8));
}

function dec_to_hex() {
    var decConvert = Number(document.getElementById('input3').value);
    var result = document.getElementById('binPrint3');
    result.innerHTML += (decConvert.toString(16))
}

function bin_to_dec() {
    var binConvert = Number(document.getElementById('input4').value);
    var result = document.getElementById('binPrint4');
    result.innerHTML += (parseInt(binConvert, 2));
}

function bin_to_oct() {
    var binConvert = Number(document.getElementById('input5').value);
    var result = document.getElementById('binPrint5');
    result.innerHTML += (parseInt(binConvert, 2).toString(8));
}

function bin_to_hex() {
    var binConvert = Number(document.getElementById('input6').value);
    var result = document.getElementById('binPrint6');
    result.innerHTML += (parseInt(binConvert, 2).toString(16));
}

function hex_to_dec() {
    var hexConvert = Number(document.getElementById('input7').value);
    var result = document.getElementById('binPrint7');
    result.innerHTML += (parseInt(hexConvert, 16));
}

function oct_to_dec() {
    var hexConvert = Number(document.getElementById('input8').value);
    var result = document.getElementById('binPrint8');
    result.innerHTML += (parseInt(hexConvert, 8));
}

function hideTable() {
    var x = document.getElementById("table");
        if (x.style.display === "none") {
            x.style.display = "block";
        } else {
            x.style.display = "none";
        }
}

function printDEC(){
          var num = 1;
              for(var i=0; i<=50; i++){
                    var dec = document.getElementById('decPrint');
                    dec.innerHTML += (num*i) + "<br/>" 
        }
}

function printBIN(){
          var num = 1;
              for(var i=0; i<=50; i++){
                    var bin = document.getElementById('binPrint');
                    bin.innerHTML += (num*i.toString(2)) + "<br/>" 
        }
}
function printOCT(){
          var num = 1;
              for(var i=0; i<=50; i++){
                    var oct = document.getElementById('octPrint');
                    oct.innerHTML += (num*i.toString(8)) + "<br/>" 
        }
}
    
function printHEX(){
          var num = 1;
              for(var i=0; i<=50; i++){
          var hex = (document.getElementById('hexPrint'));
          var decConvert = i.toString(16);
                    hex.innerHTML += (decConvert) + "<br/>" 
        }
}
