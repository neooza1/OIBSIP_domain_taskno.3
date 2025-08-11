
window.onload = function () {
    var convertBtn = document.getElementById("convertBtn");


    convertBtn.onclick = function () {
        var tempValue = document.getElementById("tempInput").value;
        var unit = document.getElementById("unitSelect").value;
        var resultArea = document.getElementById("result");

        
        resultArea.innerHTML = "";

   
        if (isNaN(tempValue) || tempValue === "") {
            resultArea.innerHTML = "Please enter a valid number.";
            resultArea.style.color = "red";
            return;
        }

        tempValue = parseFloat(tempValue);
        var converted = "";
        var unitText = "";

      
        if (unit === "C") {
            var toF = (tempValue * 9 / 5) + 32;
            var toK = tempValue + 273.15;
            converted = toF.toFixed(2) + " °F  |  " + toK.toFixed(2) + " K";
            unitText = "Celsius";
        }
        else if (unit === "F") {
            var toC = (tempValue - 32) * 5 / 9;
            var toK2 = toC + 273.15;
            converted = toC.toFixed(2) + " °C  |  " + toK2.toFixed(2) + " K";
            unitText = "Fahrenheit";
        }
        else if (unit === "K") {
            var toC2 = tempValue - 273.15;
            var toF2 = (toC2 * 9 / 5) + 32;
            converted = toC2.toFixed(2) + " °C  |  " + toF2.toFixed(2) + " °F";
            unitText = "Kelvin";
        }

        
        resultArea.innerHTML =   tempValue + " " + unitText + " = " + converted;
        resultArea.style.color = "green";
    };
};
