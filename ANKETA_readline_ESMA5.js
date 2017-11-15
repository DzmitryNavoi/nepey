
   'use strict';

const readline = require('readline');

const result = {
    family:'',
    name:'',
    surname:'',
    pol:'',
    age:0,
    days:0,
    future:0
}
function askFamily() {
    const rl = prompt();
    rl.question('Введите вашу фамилию ', function (answer) {
        rl.close();
        if (!answer) {
            console.log('поле фимилии не может быть пустым.');
            askFamily();
        }
        else {
            result.family = answer;
            askName();
        }
    });
}
function askName() {
  const rl = prompt();
  rl.question('Введите ваше имя ', function (answer) {
      rl.close();
      if (!answer) {
          console.log('поле имени не может быть пустым.');
          askName();
      }
      else {
          result.name = answer;
          askSurname();
      }
  });
}
function askSurname() {
  const rl = prompt();
  rl.question('Введите ваше отчество ', function (answer) {
      rl.close();
      if (!answer) {
          console.log('поле отчества не может быть пустым.');
          askSurname();
      }
      else {
          result.surname = answer;
          askAge();
      }
  });
}


function askAge() {
    const rl = prompt();
    rl.question('Введите ваш возраст в годах ', function (answer) {
        rl.close();
        const age = +answer;
        if (isNaN(age)) {
            console.log('Возраст должен быть введен числом.');
            askAge();
        }
        else {
            result.age = age;
            result.days = age*365;
            result.future = parseInt(age) + 5;
            askPol();}
            });
}

function askPol() {
  const rl = prompt();
  rl.question('Если Ваш пол мужской, введите цифру 1, если женский введите цифру 2 ',
   (answer) => {
      rl.close();
      if (answer==1) {
        result.pol = 'мужской'; 
      }
      if (answer==2) {
        result.pol = 'женский'; 
      }
       pension();
     });
}
function pension() {
    if (result.pol==='мужской' && result.age >= 60) {result.pol="вы мужчина и вы на пенсии"}
    if (result.pol==='мужской' && result.age < 60) {result.pol='вы мужчина и вы не на пенсии';}
    if (result.pol==='женский' && result.age >=55 ) {result.pol="вы женщина и вы на пенсии";}
    if (result.pol==='женский' && result.age < 55 ) {result.pol='вы женщина и вы не на пенсии';}
    
    end();
}
function prompt() {
    return readline.createInterface({ input: process.stdin,  output: process.stdout});
}

function end() {
    console.log('Ваше ФИО:' + result.family +''+ result.name +''+ result.surname +'\n'+
     'Ваш возраст в годах:' + result.age + '\n' + 'Ваш возраст в днях:' +
     result.days +'\n'+ 'Через 5 лет Вам будет:' + result.future + '\n'+ result.pol);
}

askFamily();
