import { test } from '@playwright/test';

const testEmails = [
  'admin@gmail.com',
  'user@example.com',
  '',
  'invalidemail',
  'test@gmail.com'
];

test('тестові дані для перевірки логіну', async () => {

  console.log('Масив до змін:', testEmails);

 const emailsForLogin = [...testEmails];

 emailsForLogin.push('another@example.com');

  console.log('Масив після змін:', emailsForLogin);

  let checksPassed = 0;

});

test('перевірка кількості знайдених рецептів', async () => {

  const recipesFoundText = '12';
  const recipesFound = Number(recipesFoundText);

  if (recipesFound === 0) {
    console.log('Рецептів не знайдено');
  } else if (recipesFound === 12) {
    console.log('Знайдено очікувану кількість рецептів');
  } else {
    console.log('Знайдено іншу кількість рецептів');
  }

  const recipeAuthor = null;
  console.log(recipeAuthor || 'Автор невідомий');

});

test('перебір email через continue і break', async () => {

  const emailsToCheck = [...testEmails, 'another@example.com'];

  let checksPassed = 0;

  for (const email of emailsToCheck) {
    if (email === '') {
      console.log('Пропущено порожній email');
      continue;
    }

    if (email === 'another@example.com') {
      console.log('Знайдено потрібний email. Зупиняємо цикл');
      break;
    }

    checksPassed++;
    console.log('Перевірено email:', email);
  }

  console.log('Усього перевірено:', checksPassed);

  for (const email of emailsToCheck) {
    if (email === '' || !email.includes('@')) {
      console.log('Знайдено невалідний email. Зупиняємо перевірку:', email);
      break;
    }

    console.log('Валідний email:', email);
  }

});

test('зменшення часу приготування через цикли', async () => {

  let cookingTime = 90;

  console.log('Цикл while:');

  while (cookingTime >= 30) {
    console.log('Час приготування:', cookingTime);
    cookingTime -= 10;
  }

  console.log('Цикл while завершено:', cookingTime);

  let cookingTime2 = 90;

  console.log('Цикл do...while:');

  do {
    console.log('Час приготування:', cookingTime2);
    cookingTime2 -= 10;
  } while (cookingTime2 >= 30);

  console.log('Цикл do...while завершено:', cookingTime2);

});