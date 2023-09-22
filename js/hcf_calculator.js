function find_hcf() {

    var input = document.getElementById('inp').value.split(",");
    numbers = []
    for (x in input) {
        numbers.push(parseInt(input[x]))
    }
    console.log(numbers)

    function calculateHCF(numbers) {
        function findHCF(a, b) {
            if (b == 0) {
                return a;
            }
            return findHCF(b, a % b);
            }
  
        if (numbers.length < 2) {
            return "HCF requires at least two numbers.";
            }
  
        let hcf = numbers[0];
        for (let i = 1; i < numbers.length; i++) {
            hcf = findHCF(hcf, numbers[i]);
            }
  
            return hcf;
        }
  
    const inputNumbers = numbers;
    const result = calculateHCF(inputNumbers);
    document.getElementById("result").innerHTML = "Result: " + result;
  
}
