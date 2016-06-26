function sum(numbers) {
    var total = 0;
    numbers.forEach(function(number) {
       total += number;  
    });
    return total;
}