<!DOCTYPE html>
<html>
    <head>
      <meta charset=`UTF-8`>
      <title> ANKETA_inner_ESMA5</title>
    </head> 
   <body>
       <script>
`use strict`;

let family=prompt(`Введите вашу фамилию`,``);  
let name=prompt(`Введите ваше имя`,``);  
let surname=prompt(`Введите ваше отчество`,``);  
let years=prompt(`Введите ваш возраст в годах`,``); 
let pol=confirm(`Ваш пол мужской?`);

let days=years;
days*=365;
let future=parseInt(years); 
future+=5; 
        
var mail=(`ваш пол: `)
var mailp=(`вы на пенсии: `)
 
mail=(pol==true)?mail=mail + `мужской`: mail=mail + `женский`;
mailp=(mail==`мужской`,years >= 60)?mailp=mailp+`да`: 
(mail==`женский`,years >= 55)?mailp=mailp+`да`:mailp=mailp+`нет`;

document.body.innerHTML = `ваше ФИО: ${family} ${name} ${surname}<br>
ваш возраст в годах: ${years}<br>
ваш возраст в днях: ${days}<br>
через 5 лет вам будет: ${future}<br>
${mail}<br>
${mailp}`

</script>
</body>
</html>       
