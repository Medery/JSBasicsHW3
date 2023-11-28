'use strict';

const wage = Number(prompt('Введите вашу зарплату: '));
let taxWage

if (wage < 0) {
    console.log('Вы ввели отрицательное число')
} else {
    if (typeof wage !== 'number' || isNaN(wage)) {
        console.log('Вы ввели не число')
    } else {
        if (wage < 15000) {
            taxWage = wage * 0.13
        } else if (wage > 50000) {
            taxWage = (wage - 50000) * 0.3
        } else {
            taxWage = (wage - 15000) * 0.2
        }
        console.log(taxWage)
    }
}