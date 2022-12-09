function favoritefilm(film){
    let array = [];
    array = ["Титаник", "Матрица", "Интерстеллар"];
    if (array.includes(film)){
        return true;
    } else {
        return false
    } 
}

let film = (prompt('Введите название фильма (например: Титаник, Матрица, Интерстеллар):'));
while (!favoritefilm(film)){
    film = (prompt('Введите название фильма (например: Титаник, Матрица, Интерстеллар):'));
}
alert('Отличный выбор!');

