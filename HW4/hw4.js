//ДЗ 4-1
//Наверное этот способ как Вы говорили "читерский"
var objNum = {};//создаем пустой объект

function chkNum (number){
    
    if (number > 999 || number < 0) {
        console.log("Вы передали число вне диапазона. Значение должно быть от 0 до 999");
    } else {
        number = String(number);//переводим число в строку для дольнейшего разбора в массив
        arrNumber = number.split('');//Создаем массив и записываем каждую подстроку в отдельную ячейка
        switch (arrNumber.length) { //проверяем динну массива
            case 1:
                objNum = {};//очищаем объект от старых значений (несколько раз значение в объекте оставались стары решил так сделать chkNum(342) и тут же запустить chkNum(5))
                //конечно можно было удалять ненужные поля в объекте   delete objNum.десятки, delete objNum.сотни. Это лишние строки кода на мой взгляд.
                //в задание написано что выводить Руссими буквами. Не стал умничать и делать все на английском
                objNum.единицы = arrNumber[0];//заполняем единицы
                return objNum;
            case 2:
                objNum = {};
                objNum.десятки = arrNumber[0];//заполняем десятки
                objNum.единицы = arrNumber[1];//заполняем единицы
                return objNum;
            case 3:
                objNum = {};
                objNum.сотни = arrNumber[0];//заполняем сотни 
                objNum.десятки = arrNumber[1];//заполняем десятки
                objNum.единицы = arrNumber[2];//заполняем единицы
                return objNum;
        }
    }
}

console.log(chkNum(34));



//ДЗ 4-2
//Создаем объекты (товары)
var objItem0 = {
    id: 12, //id товара в базе
    price: 900, //цена
    units: "шт", //еденица измерения , вдруг когдато будем торговать на вес :) 
    name: 'Майка', //название тавара
    size: 'XL', //размер
    number: 2 //количество штук которое хочет купить клиент
};

var objItem1 = {
    id: 122, 
    price: 700, 
    units: "шт", 
    name: 'Шерты', 
    size: 'XL',
    number: 1
};

var objItem2 = {
    id: 24,
    price: 1500,
    units: "шт",
    name: 'Шлепки',
    size: '42',
    number: 1
};
var objBasket = {
    result: 0, //сумма в корзине
    numitem: 0, //количество товаров в корзине
    puts: {}, // объект/свойство куда будем складывать товары
    basketPrice: function () { //метод расчета суммы в корзине 
        var result = 0;
        for (var key in this.puts) {
            const elem = this.puts[key];
            result = result + elem.price * elem.number; //перебераем все значения price eмножаем на количество и складываем их
            this.result = result; // записываем общую сумму в  result (можно убрать эту строку использовал при старом написание)
        }
    return result;
    },
    basketNumItem: function () { //метод подсчета количества товаров в корзине
            var numitem = 0;
            for (var key in this.puts) {
                const elem = this.puts[key];
                numitem = numitem + elem.number; //перебераем все количество товаров
                this.numitem = numitem; // записываем общее количество товаров в корзине (можно убрать эту строку использовал при старом написание)
            }
        return numitem;
    }
};

objBasket.puts = { objItem0, objItem1, objItem2 }; //кладем товар в корзину

//Пытался сначала записывать все в свойства и только потом выводить, но понял что это лишнее и переделал
//objBasket.basketPrice(); //запускаем метод расчета суммы
//objBasket.basketNumItem(); // запускаем метод подсчета количество товаров в корзине
//console.log('В корзине ' + objBasket.numitem + ' товара(ов) на сумму: ' + objBasket.result + ' руб.'); //Выводим сумму

console.log('В корзине ' + objBasket.basketNumItem() + ' товара(ов) на сумму: ' + objBasket.basketPrice() + ' руб.'); //Выводим сумму



//ДЗ 4-3
var objItem = {
    id: 12, //id товара в базе
    price: 100, //цена
    name: 'Майка', //название тавара
    discription: 'Футболка 100% хлопок',//описание товара
    size: 'M', //размер
    brande: 'Adidas', // название производителя
    stock: false, //Акционный товар
    stockname: 'Купи 3 заплоти за 2', //название акции
    stockdiscount: 10, //скидка по акции
    discount: 5, //скидка %
    catposition: 10, //позиция в общем каталоге
    catalog: 'Мужская одежда', //разделы каталого
    subcatalog: ['Майки/Рубашки', 'Мужская майка'],//подкаталог
    number: 10, //Количество на складе
    units: "шт", //еденица измерения , вдруг когдато будем торговать на вес :) 
    delivery: ['CDEK','EMS','Курьер','Самовывоз'], //способы доставки
    image: ['1.jpg','2.jpg'], //фото для каталога
    finalprice: 0, //фактическая цена продажи заполняется после продажи
   
    toCatalog: function () { //метод получения данных для формирования каталога
        arrToCatalog = [
            `id: ${this.id}`, 
            `price: ${this.price}`,
            `name: ${this.name}`,
            `discription: ${this.discription}`,
            `size: ${this.size}`,
            `brande: ${this.brande}`,
            `stock: ${this.stock}`,
            `stockdiscount: ${this.stockdiscount}`,
            `discount: ${this.discount}`,
            `catposition: ${this.catposition}`,
            `catalog: ${this.catalog}`,
            `subcatalog: ${this.subcatalog} `,
            `number: ${this.number}`,
            `image: ${this.image}`,
         ];
        return arrToCatalog;
    },
    toBasket: function () { //метод получения данных для корзины
        arrToBasket = [
            `id: ${this.id}`,
            `price: ${this.price}`,
            `name: ${this.name}`,
            `discription: ${this.discription}`,
            `size: ${this.size}`,
            `brande: ${this.brande}`,
            `stock: ${this.stock}`,
            `stockdiscount: ${this.stockdiscount}`,
            `discount: ${this.discount}`,
            `number: ${this.number}`,
            `units: ${this.units}`,
            `delivery: ${this.delivery}`,
            `image: ${this.image}`,
            `finalprice: ${this.finalprice}`,
        ];
        return arrToBasket;
    },
    toSearch: function () { //метод получения данных для поиска на сайте
        arrToSearch = [
            `id: ${this.id}`,
            `price: ${this.price}`,
            `name: ${this.name}`,
            `discription: ${this.discription}`,
            `brande: ${this.brande}`,
            `stock: ${this.stock}`,
            `number: ${this.number}`,
            `units: ${this.units}`,
            `image: ${this.image}`,
        ];
        return arrToSearch;
    },
    toProduct: function () { //метод получения данных для карточки товара
        arrToProduct = [
            `id: ${this.id}`,
            `price: ${this.price}`,
            `name: ${this.name}`,
            `discription: ${this.discription}`,
            `size: ${this.size}`,
            `brande: ${this.brande}`,
            `stock: ${this.stock}`,
            `stockdiscount: ${this.stockdiscount}`,
            `discount: ${this.discount}`,
            `catalog: ${this.catalog}`,
            `subcatalog: ${this.subcatalog} `,
            `number: ${this.number}`,
            `units: ${this.units}`,
            `delivery: ${this.delivery}`,
            `image: ${this.image}`,
        ];
        return arrToProduct;
    },
    toHistory: function () { //метод получения данных для истории заказов
        arrHistory = [
            `id: ${this.id}`,
            `price: ${this.price}`,
            `name: ${this.name}`,
            `discription: ${this.discription}`,
            `size: ${this.size}`,
            `brande: ${this.brande}`,
            `stock: ${this.stock}`,
            `stockdiscount: ${this.stockdiscount}`,
            `discount: ${this.discount}`,
            `units: ${this.units}`,
            `image: ${this.image}`,
            `finalprice: ${this.finalprice}`,
        ];
        return arrHistory;
    },
};