
// 1. Написать скриптик, который сосчитает и выведет результат от возведения 2 в степень 10, начиная со степени 1
let b = 1;
let a = 2;

while(b <= 10) {
    
    console.log(a**b)
    b++
}


// 1*. Преобразовать 1 задачу в функцию, принимающую на вход степень, в которую будет возводиться число 2

function stepen(st) {

let num = 2;
let sstart = 0;

while(sstart <= st) {
    
    console.log(num**sstart)
    sstart++
}
}

stepen(15)




// 2. Написать скрипт, который выведет 5 строк в консоль таким образом, чтобы в первой строчке выводилось :), во второй :):) и так далее
/*Пример в консоли:
:)
:):)
:):):)
:):):):)
:):):):):)*/

for (let a = 1 ; a<=5; a++) {

        console.log (":)".repeat(a))

}


// 2*. Преобразовать 2 задачу в функцию, принимающую на вход строку, которая и будет выводиться в консоль (как в условии смайлик), а также количество строк для вывода 
// e.g. function printSmile(stroka, numberOfRows)

function printSmile(stroka, numberOfRows) {

for (let a = 1 ; a<=numberOfRows; a++) {

        console.log (stroka.repeat(a))
}
}
printSmile("7", 6)




// 3**.  Написать функцию, которая принимает на вход слово. Задача функции посчитать и вывести в консоль, сколько в слове гласных, и сколько согласных букв.
/*e.g. function getWordStructure(word)
В консоли: 
Слово (word) состоит из  (число) гласных и (число) согласных букв
Проверки: 'case', 'Case', 'Check-list'*/

const getWordStructure = function(word){



    
    const consonats='bcdfghjklmnpqrstvwxzбвгджзйклмнпрстфхцчшщ'.split('');
    const znaki = 'ьЪ-'.split('');
    let v = 0;
    let c = 0;
    let z = 0;



    for(char of word.toLowerCase()){
            if(vovels.includes(char)) v++;
            if(consonats.includes(char)) c++;
            if(znaki.includes(char)) z++;
    }

    console.log('word ' + word + ' consist of ' + v + ' vovel and ' + c + ' consonant ' + z + ' znakof' )

}

getWordStructure2('Приветь-Sasha')



// 4**. Написать функцию, которая проверяет, является ли слово палиндромом
// e.g. function isPalindrom(word)
// Проверки: 'abba', 'Abba'

function isPalindrom(word){
    
        let wordReverse1 = '';
        for (i = word.length - 1; i >= 0; i--) {
            wordReverse1 = wordReverse1 + word[i];
        }
                if(word.toLowerCase() === wordReverse1.toLowerCase()){
                    console.log(word + ' this is palindrom')
                } else {
                console.log(word + ' this does not palindrom')
            }
    }
       
    
    isPalindrom('abfba')
    isPalindrom('Abba')
    isPalindrom('b3ba')
    
    




// 4**var2 

// function isPalindrom2(word1){
//     return word1.toLowerCase() === word1.toLowerCase().split('').reverse().join('')
// }

//         console.log(`${isPalindrom2('abba')? 'it is a palindrom' : 'it is not a palindrom'}`)
//         console.log(`${isPalindrom2('abrba')? 'it is a palindrom' : 'it is not a palindrom'}`)
//         console.log(`${isPalindrom2('Abba')? 'it is a palindrom' : 'it is not a palindrom'}`)
//         console.log(`${isPalindrom2('abbas')? 'it is a palindrom' : 'it is not a palindrom'}`)

   
// 4**var3 

// function isPalindrom3(word3){
//     word3 = word3.toLowerCase()

//     let len = word3.length

// for (let i = 0;  i < len / 2; i++) {
           
//                 if(word3[i] !== word3[len - 1 - i]) {

//                     return 'it is not a palindrom';
//                 }
//             }

//             return 'it is a palindrom';

//         }

//         console.log(isPalindrom3('abfba'))
//         console.log(isPalindrom3('Abfba'))
//         console.log(isPalindrom3('abfbva'))
//         console.log(isPalindrom3('abf4ba'))
//         console.log(isPalindrom3('ab ba'))

