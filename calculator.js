                function add(a, b) { return a + b; }
                function subtract(a, b) { return a - b; }
                function multiply(a, b) { return a * b; }
                function divide(a, b) {
                    if (b === 0) return 'Error: division by zero';
                    return a / b;
                }

                function getInputs() {
                    const n1 = parseFloat(document.getElementById('number1').value);
                    const n2 = parseFloat(document.getElementById('number2').value);
                    return [isNaN(n1) ? 0 : n1, isNaN(n2) ? 0 : n2];
                }

                function showResult(value) {
                    document.getElementById('calculation-result').textContent = value;
                }

                document.getElementById('add').addEventListener('click', function () {
                    const [a, b] = getInputs();
                    showResult(add(a, b));
                });

                document.getElementById('subtract').addEventListener('click', function () {
                    const [a, b] = getInputs();
                    showResult(subtract(a, b));
                });

                document.getElementById('multiply').addEventListener('click', function () {
                    const [a, b] = getInputs();
                    showResult(multiply(a, b));
                });

                document.getElementById('divide').addEventListener('click', function () {
                    const [a, b] = getInputs();
                    showResult(divide(a, b));
                });