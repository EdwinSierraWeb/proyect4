export default class All {
    constructor() {}
    
    setcalculator() {
        var result = document.querySelector('#result');
        var result00 = document.querySelector('#result00');
        const numbers = document.querySelectorAll('.number');
        const operators = document.querySelectorAll('.operador');
        const wipeoff = document.querySelector('#delete');
        const equal = document.querySelector('#equal');
        var firstNumber = "";
        var secondNumber = "";
        var make = "";

        const numbersArray = Array.from(numbers);
        numbersArray.forEach((number) => {
            number.addEventListener('click', function () {
                result.innerHTML += number.innerHTML;
            });
        });

        const operatorsArray = Array.from(operators);
        operatorsArray.forEach((operador) => {
            operador.addEventListener('click', function () {
                firstNumber = parseFloat(result.innerHTML);
                clear();
                switch (operador.innerHTML) {
                    case "+":
                        make = "+";
                        break;
                    case "-":
                        make = "-";
                        break;
                    case "x":
                        make = "x";
                        break;
                    case "/":
                        make = "/";
                        break;
                    default:
                        return;
                }
            });
        });

        equal.addEventListener('click', function () {
            secondNumber = parseFloat(result.innerHTML);
            clear();
            let calculo = 0;
            switch (make) {
                case "+":
                    calculo = firstNumber + secondNumber;
                    break;
                case "-":
                    calculo = firstNumber - secondNumber;
                    break;
                case "x":
                    calculo = firstNumber * secondNumber;
                    break;
                case "/":
                    calculo = firstNumber / secondNumber;
                    break;
                default:
                    return;
            }
            result.innerHTML = calculo;
            result00.innerHTML = '';
            result00.innerHTML += parseFloat(result.innerHTML);
        });

        wipeoff.addEventListener('click', function () {
            clear();
        });

        function clear() {
            return result.innerHTML = "";
        }
    }
}