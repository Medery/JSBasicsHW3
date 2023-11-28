'use strict';

const rain = Math.round(Math.random());

console.log(rain)

if (rain === 1) {
    console.log('Пошёл дождь. Возьмите зонт!')
} else {
    console.log('Дождя нет!')
}

const mathResult = Number(prompt('Введите кол-во баллов по математике: '));
const rusResult = Number(prompt('Введите кол-во баллов по русскому языку: '));
const infResult = Number(prompt('Введите кол-во баллов по инфморатике: '));
let resultSum

if (typeof mathResult !== 'number' || typeof rusResult !== 'number' || typeof infResult !== 'number' || isNaN(mathResult) || isNaN(rusResult) || isNaN(infResult)) {
    console.log("Вы ввели не число")
} else {
    resultSum = mathResult + rusResult + infResult
    if (resultSum > 264) {
        console.log('Поздравляю, вы поступили на бюджет!')
    } else {
        console.log('Ваших баллов не хватает на бюджет')
    }
}

const value = Number(prompt('Введите сумму, кратную 100, для снятия наличных'));

if (typeof value !== 'number' || isNaN(value)) {
    console.log('Вы ввели не число');
} else if (value < 0) {
    console.log('Введеное число не может быть отрицательным');
} else if (value % 100 !== 0) {
    console.log('Ваша сумма не кратна 100');
} else if (value === 0) {
    console.log('Ваше число не может быть равно нулю');
} else {
    console.log('Приходите еще!');
}
