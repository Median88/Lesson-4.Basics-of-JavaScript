var numberObject = {};

function numberToObject() {
    numberObject['сотни'] = 0;
    numberObject['десятки'] = 0;
    var k = document.getElementById('inputNumber').value,
        i = +k,
        j = k.split('').reverse(),
        l = j.length;
    if (isNaN(k) || i > 999 || i < 0) {
        console.log('Введенное число не соответствует условию. Повторите ввод.');
    } else {
        if (l > 2)
            numberObject['сотни'] = +j[2];
        if (l > 1 && (j[0] != j[1]))
            numberObject['десятки'] = +j[1];
        numberObject['единицы'] = +j[0];
        console.log(numberObject);
    }
};