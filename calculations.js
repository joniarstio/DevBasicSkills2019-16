
// Converter from decimal to binary
function dec_to_bin() {
    var decConvert = Number(document.getElementById('input1').value);
    var result = document.getElementById('result1');
    result.innerHTML = (decConvert.toString(2)) + "<br/>";

}

// Converter from decimal to octal
function dec_to_oct() {
    var decConvert = Number(document.getElementById('input2').value);
    var result = document.getElementById('result2');
    result.innerHTML = (decConvert.toString(8));
}

// Converter from decimal to hexadecimal
function dec_to_hex() {
    var decConvert = Number(document.getElementById('input3').value);
    var result = document.getElementById('result3');
    result.innerHTML = (decConvert.toString(16));
}

// Converter from binary to decimal
function bin_to_dec() {
    var binConvert = Number(document.getElementById('input4').value);
    var result = document.getElementById('result4');
    result.innerHTML = (parseInt(binConvert, 2));
}

// Converter from binary to octal
function bin_to_oct() {
    var binConvert = Number(document.getElementById('input5').value);
    var result = document.getElementById('result5');
    result.innerHTML = (parseInt(binConvert, 2).toString(8));
}

// Converter from binary to hexadecimal
function bin_to_hex() {
    var binConvert = Number(document.getElementById('input6').value);
    var result = document.getElementById('result6');
    result.innerHTML = (parseInt(binConvert, 2).toString(16));
}

// Converter from hexadecimal to decimal
function hex_to_dec() {
    var hexConvert = Number(document.getElementById('input7').value);
    var result = document.getElementById('result7');
    result.innerHTML = (parseInt(hexConvert, 16));
}

// Converter from octal to decimal
function oct_to_dec() {
    var hexConvert = Number(document.getElementById('input8').value);
    var result = document.getElementById('result8');
    result.innerHTML = (parseInt(hexConvert, 8));
}

// Function for 'hide table' button to toggle hide/show
function hideTable() {
    var hide_show = document.getElementById("table");
        if (hide_show.style.display === "none") {
            hide_show.style.display = "block";
        } else {
            hide_show.style.display = "none";
        }
}

// Function to print decimal table from 0-50

function printDEC(){
          var num = 1;
              for(var i=0; i<=50; i++){
                    var dec = document.getElementById('decPrint');
                    dec.innerHTML = (num*i) + "<br/>" 
        }
}

// Function to print binary table from 0-50
function printBIN(){
          var num = 1;
              for(var i=0; i<=50; i++){
                    var bin = document.getElementById('binPrint');
                    bin.innerHTML = (num*i.toString(2)) + "<br/>" 
        }
}

// Function to print octal table from 0-50
function printOCT(){
          var num = 1;
              for(var i=0; i<=50; i++){
                    var oct = document.getElementById('octPrint');
                    oct.innerHTML = (num*i.toString(8)) + "<br/>" 
        }
}

// Function to print hexadecimal table from 0-50
function printHEX(){
          var num = 1;
              for(var i=0; i<=50; i++){
          var hex = (document.getElementById('hexPrint'));
          var decConvert = i.toString(16);
                    hex.innerHTML = (decConvert) + "<br/>" 
        }
}
