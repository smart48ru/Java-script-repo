/* 
ДЗ 1

var a = 1, b = 1, c, d;
c = ++a; alert(c);           // 2
1. Выведет значение переменной с равное 2, т.к. сначала добавляетя 1 потом записывается в переменную с 

d = b++; alert(d);           // 1
2. Выведет значение переменной d равное 1, т.к. добовление 1 происходит после записи значения в переменную d

c = (2 + ++a); alert(c);      // 5
3. Ввыедится значение переменной с равное 5. тк в пункте 1 перменная a имеет значение 2 

d = (2 + b++); alert(d);      // 4
4. Выведится значение переменной d равное 4. т.к. после выполнения п.2 значение переменной b расно 2 

alert(a);                    // 3
5. Выведится значение переменной a равное 3. т.к. после выаолнения п1 значение = 2, после выполнения п.3 значение = 3

alert(b);                    // 3
5. Выведится значение переменной b равное 3. т.к. после выаолнения п2 значение = 2, после выполнения п.4 значение = 3
*/

/*
ДЗ 2

var a = 2;
var x = 1 + (a *= 2);

х = 5 

1+(2*2)=5
Все вычисления согласно законам математики
*/


//ДЗ 3

const A = Number(prompt("Введите число а"));
const B = Number(prompt("Введите число B"));

if (A >= 0 && B >= 0) {
    alert("Разность a и b = " + (A - B));
} else if (A < 0 && B < 0) {
    alert("Произведение a и b = " + (A * B));
} else if (A < 0 && B >= 0 || A >= 0 && B < 0){
    alert("Сумма a и b = " + (A + B));
}

//ДЗ 4

function numberGen(num) {  
    var strnum = num;
    while (num < 15) { 
        ++num;
        strnum = strnum + ", " + num ;
    }
    return strnum;
}
//Мне кажется вариант с switch не особо нужен тут можно просто передавать переменную num в функцию и таким образом уменьшить код на много строк


const num = Number(prompt("Введите число от 0 до 15"));
/*
//Вот так код будет короче
if (num >= 0 && num <= 15){
    alert(numberGen(num));
} else{
    alert("Вы ввели не верные значения");
}
*/

switch (num){
    case 0:
        alert(numberGen(num));
        break;
    case 1:
        alert(numberGen(num));
        break;
    case 2:
        alert(numberGen(num));
        break;
    case 3:
        alert(numberGen(num));
        break;
    case 4:
        alert(numberGen(num));
        break;
    case 5:
        alert(numberGen(num));
        break;
    case 6:
        alert(numberGen(num));
        break;
    case 7:
        alert(numberGen(num));
        break;
    case 8:
        alert(numberGen(num));
        break;
    case 9:
        alert(numberGen(num));
        break;
    case 10:
        alert(numberGen(num));
        break;
    case 11:
        alert(numberGen(num));
        break;
    case 12:
        alert(numberGen(num));
        break;
    case 13:
        alert(numberGen(num));
        break;
    case 14:
        alert(numberGen(num));
        break;
    case 15:
        alert(numberGen(num));
        break;
    default:
        alert("Вы ввели не верные значения");
}




//ДЗ 5

function matchAddit(num1, num2) {
    res = Number(num1) + Number(num2)
    return res;
}

function matchSubst(num1, num2) {
    res = Number(num1) - Number(num2)
    return res;
}

function matchMulti(num1, num2) {
    res = Number(num1) * Number(num2)
    return res;
}

function matchDivid(num1, num2) {
    res = Number(num1) / Number(num2)
    return res;
}

//ДЗ 6

function mathOperation(arg1, arg2, operator) {

switch (operator) {
    case "+":
        res = matchAddit(arg1, arg2);
        return res 
    case "-":
        res = matchSubst(arg1, arg2);
        return res
    case "*":
        res = matchMulti(arg1, arg2);
        return res
    case "/":
        res = matchDivid(arg1, arg2);
        return res
    default:
        return "Неверный математический оператор"
    }
}


/*
ДЗ 7
не совсем мне ясно! null почти всегда не равен, не больше, не меньше нуля. Но почемуто она >= , <= истина!
Возможно это связано см с тем что принудительно меняется тип null в этом случае
Но это неточно ! :)
null > 0; // false
null == 0; // false
null >= 0; // true
null <= 0; // true

*/


//ДЗ 8

function matchExpone(val, pow) {
    let result = val;
    if (pow == 1) {
        return val;
    } else {
        return result * matchExpone(val, pow -1);
    }
}

