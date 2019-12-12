
// Converter from decimal to binary
function dec_to_bin() {
    var decConvert = Number(document.getElementById('input1').value);
    var result = document.getElementById('result1');
<<<<<<< HEAD
    result.innerHTML = (decConvert.toString(2)) + "<br/>";
=======
        result.innerHTML += (decConvert.toString(2)) + "<br/>";
>>>>>>> b7e34947d8f1e2e36be0482b50926466cc2aeeab

}

// Converter from decimal to octal
function dec_to_oct() {
    var decConvert = Number(document.getElementById('input2').value);
    var result = document.getElementById('result2');
<<<<<<< HEAD
    result.innerHTML = (decConvert.toString(8));
=======
        result.innerHTML += (decConvert.toString(8));
>>>>>>> b7e34947d8f1e2e36be0482b50926466cc2aeeab
}

// Converter from decimal to hexadecimal
function dec_to_hex() {
    var decConvert = Number(document.getElementById('input3').value);
    var result = document.getElementById('result3');
<<<<<<< HEAD
    result.innerHTML = (decConvert.toString(16));
=======
        result.innerHTML += (decConvert.toString(16));
>>>>>>> b7e34947d8f1e2e36be0482b50926466cc2aeeab
}

// Converter from binary to decimal
function bin_to_dec() {
    var binConvert = Number(document.getElementById('input4').value);
    var result = document.getElementById('result4');
<<<<<<< HEAD
    result.innerHTML = (parseInt(binConvert, 2));
=======
        result.innerHTML += (parseInt(binConvert, 2));
         
>>>>>>> b7e34947d8f1e2e36be0482b50926466cc2aeeab
}

// Converter from binary to octal
function bin_to_oct() {
    var binConvert = Number(document.getElementById('input5').value);
    var result = document.getElementById('result5');
<<<<<<< HEAD
    result.innerHTML = (parseInt(binConvert, 2).toString(8));
=======
        result.innerHTML += (parseInt(binConvert, 2).toString(8));
>>>>>>> b7e34947d8f1e2e36be0482b50926466cc2aeeab
}

// Converter from binary to hexadecimal
function bin_to_hex() {
    var binConvert = Number(document.getElementById('input6').value);
    var result = document.getElementById('result6');
<<<<<<< HEAD
    result.innerHTML = (parseInt(binConvert, 2).toString(16));
=======
        result.innerHTML += (parseInt(binConvert, 2).toString(16));
>>>>>>> b7e34947d8f1e2e36be0482b50926466cc2aeeab
}

// Converter from hexadecimal to decimal
function hex_to_dec() {
    var hexConvert = Number(document.getElementById('input7').value);
    var result = document.getElementById('result7');
<<<<<<< HEAD
    result.innerHTML = (parseInt(hexConvert, 16));
=======
        result.innerHTML += (parseInt(hexConvert, 16));
>>>>>>> b7e34947d8f1e2e36be0482b50926466cc2aeeab
}

// Converter from octal to decimal
function oct_to_dec() {
    var hexConvert = Number(document.getElementById('input8').value);
    var result = document.getElementById('result8');
<<<<<<< HEAD
    result.innerHTML = (parseInt(hexConvert, 8));
=======
        result.innerHTML += (parseInt(hexConvert, 8));
>>>>>>> b7e34947d8f1e2e36be0482b50926466cc2aeeab
}

// Function for 'hide table' button to toggle hide/show
function hideTable() {
    var hide_show = document.getElementById("table");
        if (hide_show.style.display === "none") {
            hide_show.style.display = "block";
            } 
        else{
            hide_show.style.display = "none";
        }
}

// Function to print decimal table from 0-50
function printDEC(){
<<<<<<< HEAD
          var num = 1;
              for(var i=0; i<=50; i++){
                    var dec = document.getElementById('decPrint');
                    dec.innerHTML = (num*i) + "<br/>" 
        }
=======
      var num = 1;
          for(var i=0; i<=50; i++){
                var dec = document.getElementById('decPrint');
                    dec.innerHTML += (num*i) + "<br/>" 
    }
>>>>>>> b7e34947d8f1e2e36be0482b50926466cc2aeeab
}

// Function to print binary table from 0-50
function printBIN(){
<<<<<<< HEAD
          var num = 1;
              for(var i=0; i<=50; i++){
                    var bin = document.getElementById('binPrint');
                    bin.innerHTML = (num*i.toString(2)) + "<br/>" 
        }
=======
      var num = 1;
          for(var i=0; i<=50; i++){
                var bin = document.getElementById('binPrint');
                    bin.innerHTML += (num*i.toString(2)) + "<br/>" 
    }
>>>>>>> b7e34947d8f1e2e36be0482b50926466cc2aeeab
}

// Function to print octal table from 0-50
function printOCT(){
<<<<<<< HEAD
          var num = 1;
              for(var i=0; i<=50; i++){
                    var oct = document.getElementById('octPrint');
                    oct.innerHTML = (num*i.toString(8)) + "<br/>" 
        }
=======
      var num = 1;
          for(var i=0; i<=50; i++){
              var oct = document.getElementById('octPrint');
                  oct.innerHTML += (num*i.toString(8)) + "<br/>" 
    }
>>>>>>> b7e34947d8f1e2e36be0482b50926466cc2aeeab
}

// Function to print hexadecimal table from 0-50
function printHEX(){
<<<<<<< HEAD
          var num = 1;
              for(var i=0; i<=50; i++){
          var hex = (document.getElementById('hexPrint'));
          var decConvert = i.toString(16);
                    hex.innerHTML = (decConvert) + "<br/>" 
        }
=======
          for(var i=0; i<=50; i++){
                var hex = (document.getElementById('hexPrint'));
                var hexConvert = i.toString(16);
                    hex.innerHTML += (hexConvert) + "<br/>" 
    }
}

//Function to reset table
function resetTable() {
    document.getElementById("table").innerHTML = "";
>>>>>>> b7e34947d8f1e2e36be0482b50926466cc2aeeab
}

// Random number generator
document.addEventListener('DOMContentLoaded', function (){	

//Input validation
document.getElementById("qtyNumbers").addEventListener("keyup", function (){
        var inputNumbers = document.getElementById("qtyNumbers").value;
            document.getElementById("qtyNumbers").value = inputNumbers;
});

document.getElementById("minNumber").addEventListener("keyup", function (){
        var inputNumbers = document.getElementById("minNumber").value; 
            document.getElementById("minNumber").value = inputNumbers;
});

document.getElementById("maxNumber").addEventListener("keyup", function (){
        var inputNumbers = document.getElementById("maxNumber").value; 
            document.getElementById("maxNumber").value = inputNumbers;
});

//Start random generation
document.getElementById("calculateBtn").addEventListener("click", function (){
        var optionsSelect = document.querySelector('.optionsSelect:checked').value;
        var qty = document.getElementById("qtyNumbers").value;
        var min = document.getElementById("minNumber").value;
        var max = document.getElementById("maxNumber").value;
        var randomNumber;
        var randoms = "";
            for (var i = 0; i < qty;){
                 randomNumber = (Math.random() * (max - min + 1)) << 0;
                    if(i + 1 == qty){
                       randoms = randoms + randomNumber; 
                    }	
                    else{
                        if(optionsSelect === "optionsSel"){
                            randoms = randoms + randomNumber + '\r\n';
                        }
                    else{
                        randoms = randoms + randomNumber + optionsSelect;
                    }
                    }
                        i++;
                }		
                        document.getElementById("resultNumber").value = randoms;
});

//Reset
document.getElementById("resetBtn").addEventListener("click", function (){
    document.getElementById("resultNumber").value = "";
    document.getElementById("resultNumber").focus();
});	

var resultBox = document.getElementById("resultNumber");
    resultBox.onfocus = function() {
        resultBox.select();
        resultBox.onmouseup = function() {
            resultBox.onmouseup = null;
            return false;
            };
        };     
});

//Combinatorics calculation
function factorial(num){
    var value = num;
        for(var i = num; i > 1; i--)
          value *= i - 1;
          return value;
  };
  
  function combination(n, r){
    if(n == r) return 1;
      return factorial(n) / (factorial(r) * factorial(n - r));
  };
  
  document.getElementById('calculate').onclick = function(){
    var n = parseFloat(document.getElementById('n').value),
        r = parseFloat(document.getElementById('r').value);
          if ( n && r ){
              document.getElementById('result').innerHTML = combination(n,r);
    }
  };