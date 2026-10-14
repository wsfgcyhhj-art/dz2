// Домашнее задание №2 по JavaScript

// ==========================================
// Задание 1. Создание переменных разных типов данных
// ==========================================
// Строка (имя)
const userName = "Али";

// Число (возраст)
const userAge = 20;

// Логическое значение (boolean)
const isStudent = true;

// Специальное значение null (намеренное отсутствие значения)
const emptyData = null;

// Специальное значение undefined (переменная объявлена, но значение не присвоено)
let undefinedData;

// ==========================================
// Задание 2. Вывод каждой переменной в консоль
// ==========================================
console.log("=== 1 & 2. Значения переменных ===");
console.log("Строка (имя):", userName);
console.log("Число (возраст):", userAge);
console.log("Логическое значение (isStudent):", isStudent);
console.log("Значение null:", emptyData);
console.log("Значение undefined:", undefinedData);

// ==========================================
// Задание 3. Вывод типа каждой переменной с помощью typeof
// ==========================================
console.log("\n=== 3. Типы переменных (оператор typeof) ===");
console.log("typeof userName:", typeof userName);              // "string"
console.log("typeof userAge:", typeof userAge);                // "number"
console.log("typeof isStudent:", typeof isStudent);            // "boolean"
console.log("typeof emptyData:", typeof emptyData);            // "object" (историческая особенность JavaScript)
console.log("typeof undefinedData:", typeof undefinedData);    // "undefined"

// ==========================================
// Задание 4. Создание объекта person с полями: name, age, isStudent
// ==========================================
const person = {
  name: "Али",
  age: 20,
  isStudent: true
};

console.log("\n=== 4. Объект person ===");
console.log("Объект person:", person);

// ==========================================
// Задание 5. Вывод информации о персоне в одном сообщении
// Формат: "Меня зовут Али, мне 20 лет." (данные берутся из объекта person)
// ==========================================
console.log("\n=== 5. Сообщение о персоне ===");
console.log(`Меня зовут ${person.name}, мне ${person.age} лет.`);

// ==========================================
// Задание 6. Создание массива из 5 любимых фильмов/игр/книг и вывод в консоль
// ==========================================
const favoriteMovies = [
  "Интерстеллар",
  "Начало",
  "Матрица",
  "Властелин колец",
  "Гладиатор"
];

console.log("\n=== 6. Массив любимых фильмов ===");
console.log("Любимые фильмы:", favoriteMovies);
