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
    const images = document.querySelectorAll(".thumbnail > img")
    for (let image of images){
        image.addEventListener('click', openModal)   
    }
    basketDiv.innerHTML = '<h2>Корзина пуста</h2>'
}

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
    /* нажатие влево */
    btn_prev.onclick = function () {
        images[i].style.display = 'none';
        i = i - 1;
        if (i < 0) {
            i = images.length - 1;
        }
        images[i].style.display = 'block';
    }
    /* нажатие вправо */
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
function spanClick(event){
    var modal = document.getElementById('myModal');
    modal.style.display = "none";
}

function toBasket(id){
    arrBasket.push(id);
    makeBasket();
}

function makeBasket(){
    var basketDiv = document.getElementById("basket");//для корзины
    var totalDiv = document.getElementById("total");//для корзины
    var butonDiv = document.getElementById("button");//для кнопки положить/удалить товар
    var tditem = '';
    
    if (arrBasket.length == 0) {
        totalDiv.innerHTML = 'Корзина пуста';
        basketDiv.innerHTML = ''
        butonDiv.innerHTML = '';
    } else {
        basketDiv.innerHTML = ''
        var table = document.createElement('table');
        table.className = "tablecatalog";
        var totalcost = 0;
        itemNumber = unique(arrBasket);
        for (let i of itemNumber){
            var tditem = '';
    
            var tr = document.createElement('tr');
            var td = document.createElement('td');
            var itemnumber = arrBasket.filter(x => x === i).length;
            var itemname = arrCatalog[i].name;
            var itemcost = arrCatalog[i].cost;
            var totalitemcost = itemnumber * itemcost;
            
            tditem += 'Товар: '+itemname + ', количество: ' + itemnumber + ' шт., Цена: ' + itemcost + ', Итого: ' + totalitemcost;
            td.innerHTML = tditem;
            tr.appendChild(td);          
            totalcost = totalitemcost + totalcost;
            table.appendChild(tr);
        }
        basketDiv.appendChild(table);
        totalDiv.innerHTML = '<br><br><strong>В корзине ' + arrBasket.length + ' товара(ов) на сумму: ' + totalcost +'руб.</strong>';
        butonDiv.innerHTML = '<br><button onclick="delAllBasket()">Удалить все тавары и корзина</button>';
    }
};

function delAllBasket(){
    var basketDiv = document.getElementById("basket")//для корзины
    arrBasket = [];
    makeBasket();
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
window.onload=init


