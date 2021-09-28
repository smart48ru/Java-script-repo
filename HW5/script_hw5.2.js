var objItem0 = {
    id: 12, //id товара в базе
    price: 900, //цена
    units: "шт", //еденица измерения , вдруг когдато будем торговать на вес :) 
    name: 'Майка', //название тавара
    size: 'XL', //размер
    number: 1 //количество штук которое хочет купить клиент
};

var objItem1 = {
    id: 122,
    price: 1000,
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
    puts: [], // объект/свойство куда будем складывать товары
    basketPrice: function () { //метод расчета суммы в корзине 
        var result = 0;
       for (var key in this.puts) {

            const elem = this.puts[key];
            result = result + elem["price"] * elem["number"]; //перебераем все значения price eмножаем на количество и складываем их
            this.result = result; // записываем общую сумму в  result (можно убрать эту строку использовал при старом написание)
        
        }
        return result;
    },
    basketNumItem: function () { //метод подсчета количества товаров в корзине
        var numitem = 0;
        for (var key in this.puts) {
            const elem = this.puts[key];
            numitem = numitem + elem["number"]; //перебераем все количество товаров
            this.numitem = numitem; // записываем общее количество товаров в корзине (можно убрать эту строку использовал при старом написание)
        }
        return numitem;
    },
    itemToBasket: function(item) {
        //console.log(item.number);
        var flag = '-1';
        if (this.puts.length == 0) {//tсли карзина пуста то создаем присваиваем занчения
            this.puts = [item] ;
        } else { // если не пуста то добавляем в конец массива товар
            //flag = '-1';
            for (var key in this.puts) {
                
                //console.log('Проверяйем товар с ID ' +item["id"])
                if (this.puts[key]["id"] == item["id"]){//если тавар с таким id уже сущейтсвует в корзине создаем флаг с его номером в массиве
                    flag = key;                    
                    //console.log('Флаг = ' + flag)               
        }

    }
    if (flag >= '0'){
        //item.number = 1;
        //console.log('Количество  = ' + item.number)
        //console.log('Eже в корзине' + this.puts[flag].number)
        this.puts[flag].number =  item.number+1;
        
    }else{
                this.puts.push(item);//если не существует то дописываем новый товар в конец массива
    }
}
    makeBasket();      
    },
    itemFromBasket: function(i){
        id = this.puts[i]["id"];
        iname = this.puts[i]["name"];
        number  = this.puts[i]["number"];
        units = this.puts[i]["units"];
        price = this.puts[i]["price"];      
        return [id, iname, number, units, price  ];
            
            
    },
    deleteItemInBasket: function(id){
        
        for (var i = 0; i < this.puts.length; i++){
            if (this.puts[i]["id"] == id){
                if (this.puts[i]["number"] == 1){
                    console.log(this.puts[i]["number"]);
                    this.puts.splice(i,1);
                makeBasket();
                } else {
                    console.log('else');
                    this.puts[i].number = this.puts[i].number - 1;
                    makeBasket();
                }
            }
        }
    }
};


function delInBasket(){
    objBasket.puts = [];
    makeBasket();
}

function makeBasket(){
    var textDiv = document.getElementById("text")//для текста
    var basketDiv = document.getElementById("basket")//для корзины
    var totalDiv = document.getElementById("total")//для корзины
    var butonDiv = document.getElementById("button")//для кнопки положить/удалить товар
    var basketNum = objBasket.basketNumItem();
    var id = objBasket.itemToBasket;
    
    textDiv.innerHTML ='Задание 2<br><br>В HTML 3 div в каждом формируется своя информация.<br><br>';

    if (basketNum == 0){
        totalDiv.innerHTML = 'Корзина пуста';
        basketDiv.innerHTML = ''
        butonDiv.innerHTML = '<br><button onclick="objBasket.itemToBasket(objItem0)">Положить тавар #1 в корзина</button><button onclick="objBasket.itemToBasket(objItem1)">Положить тавар #2 в корзина</button><button onclick="objBasket.itemToBasket(objItem2)">Положить тавар #3 в корзина</button>';
    } else {
        basketDiv.innerHTML= ''
        var table = document.createElement('table');
        itemNumber = objBasket.puts.length;
        for (var i = 0; i < itemNumber; i++){
            var arrItem = objBasket.itemFromBasket(i);
            var tr = document.createElement('tr');
            for (var k = 0; k < 5; k++) {
                var td = document.createElement('td');
                td.innerHTML = arrItem[k];
                tr.appendChild(td)
            }
            
        table.appendChild(tr)

        
        }
        basketDiv.appendChild(table);
        
        totalDiv.innerHTML = 'В корзине ' + objBasket.basketNumItem() + ' товара(ов) на сумму: ' + objBasket.basketPrice() + ' руб.';
        butonDiv.innerHTML = '<br><button onclick="delInBasket()">Удалить все тавары и корзина</button><br><br><button onclick="objBasket.itemToBasket(objItem0)">Положить тавар #1 в корзина</button><button onclick="objBasket.itemToBasket(objItem1)">Положить тавар #2 в корзина</button><button onclick="objBasket.itemToBasket(objItem2)">Положить тавар #3 в корзина</button><br><br><button onclick="objBasket.deleteItemInBasket(12)">Удалить одну единицу тавара #1 из корзины</button><button onclick="objBasket.deleteItemInBasket(122)">Удалить одну единицу тавара #2 из корзины</button><button onclick="objBasket.deleteItemInBasket(24)">Удалить одну единицу тавара #3 из корзины</button>';
    };


}

window.onload = makeBasket;