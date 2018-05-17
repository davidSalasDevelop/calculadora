var cantidad_d = "0";
var cantidad2 = "";
var operation = "";

$(document).ready(function () {


    function calculateLastOp() {

        if (operation === "+") {
            if (cantidad2 === "") {
                cantidad2 = "0";
            }
            cantidad2 = parseFloat(cantidad_d) + parseFloat(cantidad2);


            cantidad_d = 0;
            operation = "";
            return;
        }

        if (operation === "*") {
            if (cantidad2 !== "") {
                cantidad2 = parseFloat(cantidad2) * parseFloat(cantidad_d);
            } else {
                cantidad2 = cantidad_d;
            }

            cantidad_d = 0;
            operation = "";
            return;
        }

        
        if (operation === "/") {
            if (cantidad2 !== "") {
                cantidad2 = parseFloat(cantidad2) / parseFloat(cantidad_d);
            } else {
                cantidad2 = cantidad_d;
            }

            cantidad_d = 0;
            operation = "";
            return;
        }

        if (operation === "-") {
            if (cantidad2 !== "") {
                cantidad2 = parseFloat(cantidad2) - parseFloat(cantidad_d);
            } else {
                cantidad2 = cantidad_d;
            }

            cantidad_d = 0;
            operation = "";
            return;
        }

        if(operation === ""){
            cantidad2 = cantidad_d;        
            operation = "";
            cantidad_d = 0;
            return;
        }



    }

    $('.tecla').mousedown(function (event) {


        event.target.style.width = "70px";

        if (event.target.alt === "on") {
            cantidad_d = "0";
            cantidad2 = "";
            $("#display").html(cantidad_d);
            return;
        }

        if (event.target.alt === ".") {
            var charExists = (cantidad_d.indexOf('.') >= 0) ? true : false;
            if (charExists) {
                return;
            }
        }

        if (event.target.alt === "+") {
            calculateLastOp();
            operation = "+";
            cantidad_d = "0";
            $("#display").html(cantidad_d);
            return;
        }

        
        if (event.target.alt === "*") {
            calculateLastOp();
            operation = "*";
            cantidad_d = "0";
            $("#display").html(cantidad_d);
            return;
        }

        if (event.target.alt === "/") {
            calculateLastOp();
            operation = "/";
            cantidad_d = "0";
            $("#display").html(cantidad_d);
            return;
        }


        if (event.target.alt === "-") {
            calculateLastOp();
            operation = "-";
            cantidad_d = "0";

            $("#display").html(cantidad_d);
            return;
        }

        if (event.target.alt === "=") {

            calculateLastOp();
            
            console.log("Sumando operacion "+cantidad2);

            cantidad_d = cantidad2;
            cantidad2 = "";

            $("#display").html(cantidad_d);
            return;
        }


        if (cantidad_d === "0") {
            if (cantidad_d.length === 1) {
                cantidad_d = "";
            }
        }

        cantidad_d = cantidad_d + "" + event.target.alt;
        $("#display").html(cantidad_d);

    });

    $('.tecla').mouseup(function (event) {
        event.target.style.width = "78px";
    });


});
