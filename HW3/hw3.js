//HW3-1
//Как сделать только через while я не сооброзил... сделал while+funcion
//Функция проверки простого числа
function chkPrime(num) {
    //Мы знаем что простые числа > 1 этому . что бы не бежать до самого конца цикла. мы не нашли делитель до корняквадратнорго то после их не будет. 
    for (let i = 2, max = Math.sqrt(num); i <= max; i++) {  
        if (num % i === 0) {
            return false;
        }
    }
    return num > 1;
}
//Задаем начальное число
var m = 1;
//Задаем конечное число
var n = 99;

//создаем пустой массив для простых чисел
const arrPrimes = [];
//собираем все простые числа в массив
while (true) {  
    m++; 
    if (chkPrime(m)){
    arrPrimes.push(m);
    }
    if (m > n)
        break;
}
//выводим заполненный массив с простыми числами в лог
console.log(arrPrimes)


// HW3-2

//созадаем массив с товарами [id, название, цена]
arrBasket = [{ id: 1, name: "Майка", price: 500 }, { id: 10, name: "Кофта", price: 1700 }, { id: 1, name: "Штаны", price: 2000 }];
//в функции надо передать массив
function countBasketPrice(arr) {
    var result = 0;
    for (let i = 0; i < arrBasket.length; i++)
    result = result + arrBasket[i].price; //перебераем в массиве все значения price и складываем их
    return result;
}

console.log(countBasketPrice(arrBasket));

// HW3-3
for (var num = 0; num <= 10; console.log(num++)){}

//HW3-4
//Создаем пустой массив
var arrPoint = [];
//Создаем переменную, дальше в нее собираем строку из массива 
str = "";
for (var point = 0; point <= 20; point++) {//в цикле заполняем массив "*" с каждым разом добавляя "*"
    arrPoint.push("*");
    for ( var i = 0; i < point; i++ ){  //как только заполнили массив на длинну одного шага (1)
        if (arrPoint[i] !== undefined) { //если в ячейки массива не undefined
           str = str + arrPoint[i];//собираем строку из массива, добавляя [i] в строку str
            console.log(str)//выводим массив
            arrPoint = [];//обнуляем массив для перехода к следующему шагу
        }     
    }   
}

//Второй вариант решения, мне больше понравился....
//Чуть покапавшись в интеренте наше что у массивов есть метод reduce так код более короткий
var arrPoint = [];
for (var point = 1; point <= 20; point++) {
    arrPoint.push("*");
    result = arrPoint.reduce((sum, current) => sum + current);
    console.log(result);
}