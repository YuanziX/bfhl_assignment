"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.processArray = processArray;
// service function to perform all required operations
function processArray(arr) {
    const odd_numbers = [];
    const even_numbers = [];
    const alphabets = [];
    const special_characters = [];
    let sum = 0;
    let alphabeticalChars = "";
    arr.forEach((item) => {
        if (!isNaN(parseFloat(item)) && isFinite(Number(item))) {
            const num = parseInt(item, 10);
            if (num % 2 === 0) {
                even_numbers.push(item);
            }
            else {
                odd_numbers.push(item);
            }
            sum += parseFloat(item);
        }
        else if (/^[a-zA-Z]$/.test(item)) {
            alphabets.push(item.toUpperCase());
            alphabeticalChars += item;
        }
        else {
            special_characters.push(item);
        }
    });
    let concat_string = "";
    const reversedAlphabets = alphabeticalChars.split("").reverse().join("");
    for (let i = 0; i < reversedAlphabets.length; i++) {
        concat_string +=
            i % 2 !== 0
                ? reversedAlphabets[i].toLowerCase()
                : reversedAlphabets[i].toUpperCase();
    }
    return {
        odd_numbers,
        even_numbers,
        alphabets,
        special_characters,
        sum: sum.toString(),
        concat_string,
    };
}
