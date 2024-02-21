/*
* З використанням властивостей і методів DOM-елементів, напиши скрипт, який:
* - Порахує й виведе в консоль кількість категорій 
* в ul#categories, тобто елементів li.item.
* - Для кожного елемента li.item у списку ul#categories знайде й виведе в консоль 
* текст заголовка елемента (тегу <h2>) 
* і кількість елементів у категорії (усіх <li>, вкладених у нього).

* На що буде звертати увагу ментор при перевірці:
* - Кількість категорій, їх назва та кількість елементів отримані 
* за допомогою властивостей і методів DOM-елементів.
* - Дані за кожною категорією були отримані й виведені в консоль 
* у тілі циклу або методу forEach().

У консолі має бути виведено наступне повідомлення:
Number of categories: 3
Category: Animais
Elements: 4
Category: Products
Elements: 3
Category: Technologies
Elements: 5
*/

// Отримуємо елемент ul#categories
const categoriesList = document.querySelector('#categories');

// Отримуємо всі елементи li.item в межах ul#categories
const categoryItems = categoriesList.querySelectorAll('li.item');

// Виводимо кількість категорій в консоль
console.log('Number of categories: ', categoryItems.length);

// Перебираємо кожен елемент li.item
categoryItems.forEach(item => {
  // Отримуємо назву категорії
  const categoryName = item.querySelector('h2').textContent;
  // Отримуємо кількість елементів у категорії
  const elementsCount = item.querySelectorAll('li').length;

  // Виводимо дані про категорію в консоль
  console.log(`Category: ${categoryName}`);
  console.log(`Elements: ${elementsCount}`);
});
