/* Преобразуйте первую букву строки в верхний регистр. Строку вводит пользователь  */

let str = prompt('Введите строку начиная с маленькой буквы');

console.log(ucFirst(str));


function ucFirst(str) {
    str = str.trim();
    // Чтобы не было undefined необходимо проверить на наличие непустой строки
    if (!str) return str; 
    // Применим метод slice, который вернет нам элементы начиная с 1 позиции
    return str[0].toUpperCase() + str.slice(1); 
}


