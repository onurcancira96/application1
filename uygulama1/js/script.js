'use strict'; //hata yaparsak bu ifade bizi uyarıcak.

let secretNumber=Math.trunc(Math.random() *20) + 1; // integera çeviriyor Math.trunc 
let score = 20;
let highscore = 0;
const canlar = ["💖", "💖💖", "💖💖💖", "💖💖💖💖"];

let canicerik =document.querySelector('.can').textContent;

const displayMessage = function(message){
    document.querySelector('.message').textContent = message;
}

document.querySelector('.check').addEventListener('click',function(){

    if(canlar.length<2){
        document.querySelector('.guess').disabled=true;
        document.querySelector('.anabaslik').textContent='Oyun Bitti kaybettin';
        document.querySelector('.check').disabled=true;
    }
const guess =Number(document.querySelector('.guess').value);
console.log(guess, typeof guess);
console.log(secretNumber, typeof secretNumber);


if(!guess)
{
    displayMessage('Bir sayı giriniz.');
}
else if(guess === secretNumber)
 {

    document.querySelector('.can').textContent = (document.querySelector('.can').textContent + '💖');
    canlar.push(document.querySelector('.can').textContent);
    displayMessage('Doğru tahmin.');
    document.querySelector('.number').textContent = secretNumber;
    document.querySelector('body').style.backgroundColor='98c361#';
    document.querySelector('.number').style.width='30rem';
    secretNumber=Math.trunc(Math.random() *20)+1;

    if(score>highscore)
    {
        highscore=score;
        document.querySelector('.label-highscore').textContent= highscore;
    }
}
//sayılar birbiriyle eşleşmiyor ise


else if(guess !== secretNumber){
    let x =Math.abs(guess-secretNumber)
    canlar.pop();
    document.querySelector('.can').textContent=canlar[(canlar.length-1)];
    
    if(score>1)
    {
        if(x<5 &&guess>secretNumber)
        {
            displayMessage('Yüksek');
        }
        else if(guess>secretNumber)
        {
            displayMessage('Çok Yüksek');
        }
        else if(x<5 &&guess<secretNumber)
        {
            displayMessage('Düşük');
        }
        else if(guess<secretNumber)
        {
            displayMessage('Çok Düşük');
        }
        document.querySelector('.label-score'). textContent=score;
    }
    else{
        displayMessage('Oyunu kaybettin.')
        document.querySelector('.label-score').textContent=0;
    }

}

});

document.querySelector('.again').addEventListener('click',function(){
    score = 20;
    secretNumber=Math.trunc(Math.random() *20)+1;

    displayMessage('Tahmin ediliyor...');
    document.querySelector('.label-score').textContent = score;
    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('.number').textContent = '?';
    document.querySelector('.number').style.width = '15rem';
    document.querySelector('.label-score').value = '';
    document.querySelector('.guess').value = '';
    document.querySelector('.check').disabled=false;
    document.querySelector('.guess').disabled=false;
    document.querySelector('.anabaslik').textContent = 'Sayı Tahmin Et';
    canlar.forEach(function(item)
    {
        canlar.pop(canlar.length-1);
    }
    );
    canlar.push('');
    document.querySelector('.can').textContent=canlar[(canlar.length-1)];
    canlar.forEach(function(item)
    {
        canlar.pop(canlar.length-1);
    }
    );
    canlar.push('💖');
    canlar.push('💖💖');
    canlar.push('💖💖💖');
    canlar.push('💖💖💖💖');
    document.querySelector('.can').textContent=canlar[(canlar.length-1)];
    


});

