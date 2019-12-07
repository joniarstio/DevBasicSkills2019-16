        function dec_to_bin() {
            var decConvert = Number(document.getElementById('input1').value).toString(2);
            alert("Result is: " + decConvert);
}

        function dec_to_oct() {
            var decConvert = Number(document.getElementById('input2').value).toString(8);
            alert("Result is: " + decConvert);
}

        function dec_to_hex() {
            var decConvert = Number(document.getElementById('input3').value).toString(16);
            alert("Result is: " + decConvert);
}

        function bin_to_dec() {
            var binConvert = Number(document.getElementById('input4').value);
            alert("Result is: " + parseInt(binConvert, 2));
}

        function bin_to_oct() {
            var binConvert = Number(document.getElementById('input5').value);
            alert("Result is: " + parseInt(binConvert, 2).toString(8));
}

        function bin_to_hex() {
            var binConvert = Number(document.getElementById('input6').value);
            alert("Result is: " + parseInt(binConvert, 2).toString(16));
}

        function hex_to_dec() {
            var hexConvert = Number(document.getElementById('input7').value);
            alert("Result is: " + parseInt(hexConvert, 16));
}

        function oct_to_dec() {
            var hexConvert = Number(document.getElementById('input8').value);
            alert("Result is: " + parseInt(hexConvert, 8));
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
     