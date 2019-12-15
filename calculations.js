
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
            } 
        else{
            hide_show.style.display = "none";
        }
}

// Function to print decimal table from 0-50
function printDEC(){
      var num = 1;
          for(var i=0; i<=50; i++){
                var dec = document.getElementById('decPrint');
                    dec.innerHTML += (num*i) + "<br/>" 
    }
}

// Function to print binary table from 0-50
function printBIN(){
      var num = 1;
          for(var i=0; i<=50; i++){
                var bin = document.getElementById('binPrint');
                    bin.innerHTML += (num*i.toString(2)) + "<br/>" 
    }
}

// Function to print octal table from 0-50
function printOCT(){
      var num = 1;
          for(var i=0; i<=50; i++){
              var oct = document.getElementById('octPrint');
                  oct.innerHTML += (num*i.toString(8)) + "<br/>" 
    }
}

// Function to print hexadecimal table from 0-50
function printHEX(){
          for(var i=0; i<=50; i++){
                var hex = (document.getElementById('hexPrint'));
                var hexConvert = i.toString(16);
                    hex.innerHTML += (hexConvert) + "<br/>" 
    }
}

//Function to reset table
function resetTable() {
    document.getElementById("table").innerHTML = "";
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
                 randomNumber = Math.floor(Math.random() * (+max - +min) + +min);
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

//Currency converter from selected currency to Euros
function CurrencyToEUR(){
	y = document.getElementById("converterToEur").value;
	    return y;
	}
	
function CalculateCurrToEUR(){
	y = CurrencyToEUR();
	x = document.getElementById("value1").value;
        
        if(x == ""){
			document.getElementById("value2").value = "";
            }
            else{
			    switch(y){
				    case "USD": document.getElementById("value2").value = x * 0.9;
				    break;
				    case "GBP": document.getElementById("value2").value = x * 1.18;
				    break;
				    case "SEK": document.getElementById("value2").value = x * 0.1;
				    break;
				    case "MAR": document.getElementById("value2").value = x * 0.17;
				    break;
				    case "AUD": document.getElementById("value2").value = x * 0.62;
				    break;
                    case "CAD": document.getElementById("value2").value = x * 0.68;
				    break;
				    case "CHF": document.getElementById("value2").value = x * 0.91;
				    break;
				    case "HKD": document.getElementById("value2").value = x * 0.12;
				    break;
				    case "NZD": document.getElementById("value2").value = x * 0.59;
				    break;
				    case "MXN": document.getElementById("value2").value = x * 0.05;
				    break;
                    case "NOK": document.getElementById("value2").value = x * 0.1;
				    break;
				    case "JPY": document.getElementById("value2").value = x * 0.01;
				    break;
				    case "INR": document.getElementById("value2").value = x * 0.01;
				    break;
				    case "KRW": document.getElementById("value2").value = x * 0.0007;
				    break;
				    case "SGD": document.getElementById("value2").value = x * 0.66;
				    break;
                    case "RUB": document.getElementById("value2").value = x * 0.01;
				    break;
				    case "ZAR": document.getElementById("value2").value = x * 0.06;
				    break;
                    case "TRY": document.getElementById("value2").value = x * 0.16;
				    break;
				    case "BRL": document.getElementById("value2").value = x * 0.22;
				    break;
                    case "TWD": document.getElementById("value2").value = x * 0.03;
				    break;
				    case "DKK": document.getElementById("value2").value = x * 0.13;
				    break;
                    case "PLN": document.getElementById("value2").value = x * 0.23;
				    break;
                    case "THB": document.getElementById("value2").value = x * 0.03;
				    break;
                    case "IDR": document.getElementById("value2").value = x * 0.00006;
				    break;
                    case "HUF": document.getElementById("value2").value = x * 0.003;
				    break;
                    case "CZK": document.getElementById("value2").value = x * 0.04;
				    break;
				    case "ILS": document.getElementById("value2").value = x * 0.26;
				    break;
                    case "CLP": document.getElementById("value2").value = x * 0.001;
				    break;
                    case "PHP": document.getElementById("value2").value = x * 0.02;
				    break;
                    case "AED": document.getElementById("value2").value = x * 0.24;
				    break;
                    case "COP": document.getElementById("value2").value = x * 0.0002;
				    break;
                    case "SAR": document.getElementById("value2").value = x * 0.24;
				    break;
                    case "MYR": document.getElementById("value2").value = x * 0.22;
				    break;
                    case "RON": document.getElementById("value2").value = x * 0.21;
				    break;
			    }
		    }
	}

//Currency converter from Euros to selected currency
function CurrencyFromEUR(){
    y = document.getElementById("converterFromEur").value;
        return y;
    }
        
function CalculateCurrFromEUR(){
    y = CurrencyFromEUR();
    x = document.getElementById("value3").value;
        if(x == ""){
            document.getElementById("value4").value = "";
            }
            else{
                switch(y){
                    case "USD": document.getElementById("value4").value = x * 1.11;
                    break;        
                    case "GBP": document.getElementById("value4").value = x * 0.85;
                    break;
                    case "SEK": document.getElementById("value4").value = x * 10.45;
                    break;
                    case "MAR": document.getElementById("value4").value = x * 5.95;
                    break;
                    case "AUD": document.getElementById("value4").value = x * 1.62;
                    break;
                    case "CAD": document.getElementById("value4").value = x * 1,47;
                    break;
                    case "CHF": document.getElementById("value4").value = x * 1.09;
                    break;
                    case "HKD": document.getElementById("value4").value = x * 8.69;
                    break;
                    case "NZD": document.getElementById("value4").value = x * 1.69;
                    break;
                    case "MXN": document.getElementById("value4").value = x * 21.27;
                    break;
                    case "NOK": document.getElementById("value4").value = x * 10.13;
                    break;
                    case "JPY": document.getElementById("value4").value = x * 121.00;
                    break;
                    case "INR": document.getElementById("value4").value = x * 78.79;
                    break;
                    case "KRW": document.getElementById("value4").value = x * 1322.29;
                    break;
                    case "SGD": document.getElementById("value4").value = x * 1.51;
                    break;
                    case "RUB": document.getElementById("value4").value = x * 70.15;
                    break;
                    case "ZAR": document.getElementById("value4").value = x * 16.31;
                    break;
                    case "TRY": document.getElementById("value4").value = x * 6.44;
                    break;
                    case "BRL": document.getElementById("value4").value = x * 4.57;
                    break;
                    case "TWD": document.getElementById("value4").value = x * 33.71;
                    break;
                    case "DKK": document.getElementById("value4").value = x * 7.47;
                    break;
                    case "PLN": document.getElementById("value4").value = x * 4.28;
                    break;
                    case "THB": document.getElementById("value4").value = x * 33.60;
                    break;
                    case "IDR": document.getElementById("value4").value = x * 15619.10;
                    break;
                    case "HUF": document.getElementById("value4").value = x * 329.27;
                    break;
                    case "CZK": document.getElementById("value4").value = x * 25.52;
                    break;
                    case "ILS": document.getElementById("value4").value = x * 3.87;
                    break;
                    case "CLP": document.getElementById("value4").value = x * 860.49;
                    break;
                    case "PHP": document.getElementById("value4").value = x * 56.49;
                    break;
                    case "AED": document.getElementById("value4").value = x * 4.09;
                    break;
                    case "COP": document.getElementById("value4").value = x * 3771.52;
                    break;
                    case "SAR": document.getElementById("value4").value = x * 4.17;
                    break;
                    case "MYR": document.getElementById("value4").value = x * 4.63;
                    break;
                    case "RON": document.getElementById("value4").value = x * 4.78;
                    break;
                }
		    }
    }
   
//Truth table calculator
function truthTable() {
    var trueFirst = Number(document.getElementById("trueFirst").value);
    var trueSecond = Number(document.getElementById("trueSecond").value);
        document.getElementById("and").innerHTML = !! (trueFirst && trueSecond);
        document.getElementById("or").innerHTML =  !! (trueFirst || trueSecond);
        document.getElementById("xor").innerHTML = !! ( ( trueFirst && !trueSecond ) || ( !trueFirst && trueSecond ) );
        document.getElementById("nor").innerHTML = !! (!trueFirst && !trueSecond);
    }