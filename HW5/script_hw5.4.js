

//ДЗ 5-4

var objItem0 = {
    id: 12, //id товара в базе
    price: 1000, //цена
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
    number: 104, //Количество на складе
    units: "шт", //еденица измерения , вдруг когдато будем торговать на вес :) 
    delivery: ['CDEK','EMS','Курьер','Самовывоз'], //способы доставки
    image: ['0-1.jpg','0-2.jpg'], //фото для каталога
    finalprice: 0, //фактическая цена продажи заполняется после продажи
   
    toCatalog: function () { //метод получения данных для формирования каталога
        arrToCatalog = [
            this.id, 
            this.name,
            this.price,
            this.discription,
            this.size,
            this.brande,
            this.catposition,
            this.catalog,
            this.subcatalog,
            this.number,
            this.image,
         ];
        return arrToCatalog;
    }
};

var objItem1 = {
    id: 10, //id товара в базе
    price: 500, //цена
    name: 'Футболка', //название тавара
    discription: 'Футболка хлопок- 80%, полиэстр - 20%',//описание товара
    size: 'XL', //размер
    brande: 'Adidas', // название производителя
    stock: false, //Акционный товар
    stockname: 'Купи 3 заплоти за 2', //название акции
    stockdiscount: 10, //скидка по акции
    discount: 5, //скидка %
    catposition: 10, //позиция в общем каталоге
    catalog: 'Мужская одежда', //разделы каталого
    subcatalog: ['Майки/Рубашки', 'Мужская майка'],//подкаталог
    number: 86, //Количество на складе
    units: "шт", //еденица измерения , вдруг когдато будем торговать на вес :) 
    delivery: ['CDEK', 'EMS', 'Курьер', 'Самовывоз'], //способы доставки
    image: ['1-1.jpg', '1-2.jpg'], //фото для каталога
    finalprice: 0, //фактическая цена продажи заполняется после продажи

    toCatalog: function () { //метод получения данных для формирования каталога
        arrToCatalog = [
            this.id,           
            this.name,
            this.price,
            this.discription,
            this.size,
            this.brande,
            this.catposition,
            this.catalog,
            this.subcatalog,
            this.number,
            this.image,
        ];
        return arrToCatalog;
    }
};


function makeCatalog() {
    var arrItem = [objItem0.toCatalog(), objItem1.toCatalog()];//создаем массив таваров
    var catalogDiv = document.getElementById("catalog");
    var table = document.createElement('table');
    table.className ="tablecatalog";
    var itemNumber = arrItem.length;
    for (var i = 0; i < itemNumber; i++) {//длинну массива  =  сколько товаров в нем (создаем строки)
        var tr = document.createElement('tr');
        for (var k = 0; k < arrItem[i].length; k++) { //длинну массива = сколько свойств тавара в нем (создаем столбцы.) 
            var td = document.createElement('td');
            td.innerHTML = arrItem[i][k];
            tr.appendChild(td);
        }
        table.appendChild(tr);
    }
    catalogDiv.appendChild(table);

}

window.onload = makeCatalog;