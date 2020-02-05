var vvodText=prompt("Введите текст для шифрования");
var shifrSlovo=prompt("Введите кодовое слово");		
var codmass={a:'й',b:'ц',c:'у',d:'к',i:'е',f:'н',j:'г',h:'ш',
    i:'щ',g:'з',k:'х',l:'ф',m:'ы',n:'в',o:'а',p:'п',q:'р',r:'о',
    s:'л',t:'д',u:'ж',v:'э',w:'я',x:'ч',y:'с',z:'м',};
var split = vvodText.split('');            //РАЗБИРАЕМ НА ЗНАЧЕНИЯ
var unicod = split.map(function(item){
    var str = item.charCodeAt(0);        //ПЕРЕВОДИМ В ЮНИКОД
    return str;
});
var newCod = unicod.map(function(n){
    return (n * 3);                      //ШИФРУЕМ ИЗМЕНЕНИЕМ
})
var shifr = newCod.map(function(item){
    return String.fromCharCode(item);    //ВЫВОДИМ ИЗМЕНЕНИЯ 
})
var allIn = shifr.join('');             //ВЫВОДИМ В СТРОКУ
var massSlovoCod = [];
var massSlovoCod=shifrSlovo.split("");//разбиваем слово-код на буквы и вносим в массив
var massSlovoCodShifr=[]; //масив для уже зашифрованного слово-кода
massSlovoCod.forEach(function(arr,item) {	//подменяем слово-код
  massSlovoCodShifr[item]=codmass[arr];
});
var input = massSlovoCodShifr.join('');
  alert('Запомните или запишите Ваш пароль  '+ input)//Вывод слова - пароля
var quest=confirm('Давайте расшифруем?');		
  if(quest==true){
    var inp=prompt('Введите Ваш пароль')}
var lois = [];
var lois = inp.split('');
lois.forEach(function(arr,item){
  if(lois[item] = massSlovoCodShifr[item]){
    var forsCod = newCod.map(function(n){
      return (n / 3);
})
var des = forsCod.map(function(item){
    return String.fromCharCode(item);
});
var forse = des.join('');
  alert('Ваш зашифрованный текст:  ' + forse);
  }else{
    alert('Не угадал')
  }})