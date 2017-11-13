<!DOCTYPE html>
<html>
    <head>
      <meta charset="UTF-8">
      <title> ANKETA_readline_ESMA5</title>
    </head> 
   <body>
       <script>
'use strict';


const readline = require('readline');

const result = {
  family:'',
  years:0
  
 }
function askFamily() {
  const rl = prompt();
  rl.question ('Введите вашу фамилию',
  (answer) => {
    rl.close();
    if (!answer) {
      console.log('поле фамилии не может быть пустым');
      askFamily();
    }
    else {
      result.family = answer;
      askYears();
      }
  });
}
function askYears() {
    const rl = prompt();
    rl.question('укажите ваш возраст в годах',(answer) => {
      rl.close();
      const years = +answer;
      if (isNaN(years)) {
        console.log('возраст должен быть введен числом');
        askYears();
      }
      else {
        result.years = years;
        end();
        }
    });
  }
function prompt(){
  return
  readline.createInterface({ input: process.stdin, output: process.stdout});
}
function end() {
  console.log(`ваша фамилия: ${result.family}, возраст ${result.years}`);
}
askFamily();
</script>
</body>
</html>       