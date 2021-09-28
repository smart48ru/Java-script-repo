function makeChess() {
    var table = document.createElement('table');
    var blackFlag = true;//флаг окраса ячейки таблицы

    var trr = document.createElement('tr');
    var arrLetters = [' ', 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];

    //генерим 9 строк tr для таблицы 
    for (var i = 0; i < 8; i++) {
        var tr = document.createElement('tr');
        tr.id=`tr-${i}`;
        //создаем столбцы td для цифр
        var tdd = document.createElement('td');
        tdd.className = "num-cel";//устанваливаем класс для ячеек с нумиравми
        tdd.innerHTML = 8 - i; //что бы нумирация шла с низу вверх 
        tr.appendChild(tdd);

        for (var j = 0; j < 8; j++) {//создаем столбцы tr для для поля 

            if (j == 0)//если ячейка первая в строке то меняем флаг на противоположный
                blackFlag = !blackFlag;

            var td = document.createElement('td');
            td.id = `tr-${i}-${j}`;//пропиcываем id для дальнейшего размещения фигур 
            td.align = "center";
            if (blackFlag) {//если флаг black
                td.className = 'black';//присваивем клас для ячейки
            } else {
                td.className = 'white';
            }
            tr.appendChild(td);
            blackFlag = !blackFlag;
            
        }
        table.appendChild(tr);
    }

    //создаем столбцы tr для букв и заполняем ее
    for (var k = 0; k < 9; k++) {

        var td = document.createElement('td');
        td.className ='letters-cel';
        td.innerHTML = arrLetters[k];
        trr.appendChild(td);

    }

    table.appendChild(trr);

    document.body.appendChild(table);
}


function placePieces(){
    blackPawn='img/black-pawn.png'
    arrBlack = ['img/black-rook.png', 'img/black-horse.png', 'img/black-elephant.png', 'img/black-queen.png', 'img/black-king.png', 'img/black-elephant.png', 'img/black-horse.png', 'img/black-rook.png'];

    whitePawn = 'img/white-pawn.png'
    arrWhite = ['img/white-rook.png', 'img/white-horse.png', 'img/white-elephant.png', 'img/white-queen.png', 'img/white-king.png', 'img/white-elephant.png', 'img/white-horse.png', 'img/white-rook.png'];
    
    //Раставляем черные фигуры
    for ( var l = 0 ; l <= 7; l++){
        //расставляем черные фигуры
        putBlack = document.getElementById(`tr-0-${l}`);
        putBlack.innerHTML = `<img src="${arrBlack[l]}">`;
        
        putBlackPawn = document.getElementById(`tr-1-${l}`);
        putBlackPawn.innerHTML = `<img src="${blackPawn}">`;

        //расставляем белые фигуры
        putWhite = document.getElementById(`tr-7-${l}`);
        putWhite.innerHTML = `<img src="${arrWhite[l]}">`;

        putWhitePawn = document.getElementById(`tr-6-${l}`);
        putWhitePawn.innerHTML = `<img src="${whitePawn}">`;
    }
    

}
window.onload = makeChess;

