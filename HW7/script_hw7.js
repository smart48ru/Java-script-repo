var arrCatalog = {
    "10": {
        "name" : "Джинсы",
        "cost" : 1000,
        "smimg": ["img/small/10-0.jpeg", "img/small/10-1.jpeg", "img/small/10-2.jpeg"],
        "img": ["img/big/10-0.jpeg", "img/big/10-1.jpeg", "img/big/10-2.jpeg" ],
        "sklad": 10,
    },
    "1124": {
        "name": "Майка",
        "cost": 1200,
        "smimg": ["img/small/1124-0.jpeg", "img/small/1124-1.jpeg", "img/small/1124-2.jpeg"],
        "img": ["img/big/1124-0.jpeg", "img/big/1124-1.jpeg", "img/big/1124-2.jpeg"],
        "sklad": 5,
    },

    "2341": {
        "name": "Кросовки",
        "cost": 1990,
        "smimg": ["img/small/2341-0.jpeg", "img/small/2341-1.jpeg", "img/small/2341-2.jpeg"],
        "img": ["img/big/2341-0.jpeg", "img/big/2341-1.jpeg", "img/big/2341-2.jpeg"],
        "sklad": 1,
    }
};

var arrBasket =[];


function init(){
    
    var items = '<div class="thumbnail">';
    var catalogDiv = document.getElementById("catalog");
    var basketDiv = document.getElementById("basket")//для корзины
    /* Строем каталог */
for (var key in arrCatalog) { 
    items+= 'Название: '+ arrCatalog[key].name +'<br>';
    items+= 'Цена: '+ arrCatalog[key].cost +' руб.<br>';
    items += '<img id="' + key + '" src="' + arrCatalog[key].smimg[0] + '">';
    items += '<button onclick="toBasket('+key+')">Купить</button>'
    items += '<hr>';      
}
    /* вешаем на все миниатюры обработчик событий по нажатию */
    items += '<div>';
    catalogDiv.innerHTML = items;
    const images = document.querySelectorAll(".thumbnail > img");
    for (let image of images){
        image.addEventListener('click', openModal)   
    }
    basketDiv.innerHTML = '<h2>Корзина пуста</h2>'     
    

    /* ставим на accordeon-section обработчик событий*/
    const selections = document.querySelectorAll('.accordeon-section');
    for (let selection of selections) {
        selection.addEventListener('click', acClick,true)//долго тупил! При удаление товара из корзины все разваливалось вспомнил про "всплывание"!
    }
    makeAccordeon()//создаем аккордион 
}


function acClick(h) {
    selections = document.querySelectorAll('.accordeon-section')
    /* перед открытием нужного раздела закрываем все*/ 
    for (let selection of selections) {
        body = selection.querySelector('.accordeon-body')
        body.style.maxHeight='0px'
    }
    var accordeonSection = h.target.closest('.accordeon-section')//находим на какой раздел нажали
    var insideElHeight = accordeonSection.querySelector('.accordeon-body > *').scrollHeight//берем его высоту
    accordeonSection.querySelector('.accordeon-body').style.maxHeight = insideElHeight + 'px'//меняем параемтр его высоты
    //console.log(accordeonSection)
}
/* Функуция открытия модального окна */
function openModal(event){
    carousels = '';
    var modal = document.getElementById('myModal');
    modal.style.display = "block";
    var carousel = document.getElementById('carousel');
    var mheader = document.getElementById('modalheader');
    /* Заполняем шапку модального окна */
    mheaders = '<h2>' + arrCatalog[event.target.id].name + '</h2><br>Цена: ' + arrCatalog[event.target.id].cost ;
    /* Загружаем все картинки в модальное окно */
    for (key in arrCatalog[event.target.id].img){   
        carousels += '<img src=' + arrCatalog[event.target.id].img[key]+'>'    
    }
    carousel.innerHTML = carousels;
    mheader.innerHTML = mheaders;
    /* находим кнопки вперед/назад */
    let btn_prev = document.querySelector('#container .prev');
    let btn_next = document.querySelector('#container .next');
    let images = document.querySelectorAll('#carousel img');
    
    document.onkeydown = checkKey;

    /* Функуция контроля нажатия на клавиаторе*/
    function checkKey(e) {
        e = e || window.event;
        //console.log(e.keyCode);//узнавал код нажатой кнопки
        if (e.keyCode == '37') {//стрелочка влево
            btn_prev.onclick()
        }
        else if (e.keyCode == '39') {//стрелочка вправо 
            btn_next.onclick();
        }
    }


    /* 
    пробовал и так и так! не получается что бы первая картинка была таже что и в каталоге
    ломается карусель.... и я не пойму я ошибаюсь.
    */
    let i = 0; // номер текущей картинки, на экране
    images[i].style.display = 'none';  // прячем текущую картину
    i++;  // увеличиваем переменную i на единицу

    if (i >= images.length) {
        i = 0; // переменная i равна 0
    }

    /* нажатие мышкой влево */
    btn_prev.onclick = function () {
        images[i].style.display = 'none';
        i = i - 1;
        if (i < 0) {
            i = images.length - 1;
        }
        images[i].style.display = 'block';
    }
    
    /* нажатие мышкой вправо */
    btn_next.onclick = function () {
        images[i].style.display = 'none';
        i++;
        if (i >= images.length) {
            i = 0; // переменная i равна 0
        }
        images[i].style.display = 'block';
    }   
}

/* ценкция закрытия модального окна */
function spanClick(){
    var modal = document.getElementById('myModal');
    modal.style.display = "none";//прячем модальное окно
    document.onkeydown = null;//выключаем обработчик нажатия на клавиши
}
/* Функция добавляения id товара в массив корзины */
function toBasket(id){
    arrBasket.push(id);
    makeBasket();
}
/* функция создания корзины*/
function makeBasket(){
    var basketDiv = document.getElementById("basket");//для корзины
    var totalDiv = document.getElementById("total");//для корзины
    var butonDiv = document.getElementById("button");//для кнопки положить/удалить товар
    var tditem = '';
    
    if (arrBasket.length == 0) {
        totalDiv.innerHTML = '';
        basketDiv.innerHTML = '<h2>Корзина пуста</h2>'
        butonDiv.innerHTML = '';
    } else {
        basketDiv.innerHTML = ''
        var table = document.createElement('table');
        table.className = "table-basket";
        var totalcost = 0;
        itemNumber = unique(arrBasket);
        for (let i of itemNumber){
            var tditem = '';
    
            var tr = document.createElement('tr');
            var td = document.createElement('td');
            var btn = document.createElement('button');

            var itemnumber = arrBasket.filter(x => x === i).length;
            var itemname = arrCatalog[i].name;
            var itemcost = arrCatalog[i].cost;
            var id = [i];
            var totalitemcost = itemnumber * itemcost;
            
            tditem += 'Товар: ' + itemname + ', количество: ' + itemnumber + ' шт., Цена: ' + itemcost + ', <br><br><strong>Итого: ' + totalitemcost + '</strong><br><button onclick="delOneBasket(' + id + ')">-</button><button onclick="toBasket(' + id + ')">+</button>';
            td.innerHTML = tditem;
            tr.appendChild(td);          
            totalcost = totalitemcost + totalcost;
            table.appendChild(tr);
            btn.appendChild(table)           
        }
        basketDiv.appendChild(table);
        totalDiv.innerHTML = '<br><br><strong>В корзине ' + arrBasket.length + ' товара(ов) на сумму: ' + totalcost +'руб.</strong>';
        butonDiv.innerHTML = '<br><button onclick="delAllBasket()">Удалить все тавары и корзина</button><br><button onclick="nextAccordeon()">>>>Далее>>></button>';
    }
    makeAccordeon();//после перерисовки корзины, перерисовываем аккордеон 
};
/* Функуция удаления  всех товаров из корзины */
function delAllBasket(){
    //var basketDiv = document.getElementById("basket")//для корзины
    arrBasket = [];
    makeBasket();
}

/* Функуция удаления товара 1 единицы из корзины */
function delOneBasket(id) {
    idIndex = arrBasket.indexOf(id);
    if (idIndex !== -1) {//если возавращает "-1" то товара с таким id нет. если есть то удаляем этот id по индексу
        arrBasket.splice(idIndex, 1);
    } 
    makeBasket();//перересовывем карзину
}

/*Функция выделения уникальных значений из массива*/ 
function unique(arr) {
    let result = [];

    for (let str of arr) {
        if (!result.includes(str)) {
            result.push(str);
        }
    }
    return result;
}

/* Функция создания аккордеона */
function makeAccordeon() {

    selections = document.querySelectorAll('.accordeon-section')
    /* перед открытием нужного раздела закрываем все*/
    for (let selection of selections) {
        body = selection.querySelector('.accordeon-body')
        body.style.maxHeight = '0px'
    }
    var firstSectionBodyHeight = document.querySelector('.accordeon-section .accordeon-body > *').scrollHeight
    document.querySelector('.accordeon-section .accordeon-body').style.maxHeight = firstSectionBodyHeight + 'px'
}
/* Функция по нажатию кнопки далее в аккордеоне */
function nextAccordeon (){
    var k =0;
    var firstSectionBodyHeight = document.querySelector('.accordeon-section .accordeon-body').scrollHeight
    selections = document.querySelectorAll('.accordeon-section')
    for (let i = 0; i < selections.length; i++){
        body = selections[i].querySelector('.accordeon-body')
        if (body.style.maxHeight != '0px'){//если в текущей секции высота не 0 
            body.style.maxHeight = '0px';//то закрываем ее
            k = i + 1;//записываем в переменную индекс массива+1 для открытия следующей секции
            if (k >= selections.length){
                k = 0;
            }          
        }
    }
    /* откурываем нужную нам секцию */
    newbody = selections[k].querySelector('.accordeon-body')
    newbodyhigh = selections[k].querySelector('.accordeon-body').scrollHeight
    newbody.style.maxHeight = newbodyhigh + 'px'   
}   
window.onload=init


