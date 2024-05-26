// const numbers = [1, 1, 2, 3, 5];
// const numbersAddFive = 
// numbers.map(numbers => `${numbers + 5}`);
// // The below line should console.log: [6, 6, 7, 8, 10]
// console.log(numbersAddFive); 

//same result just different methods of doing the same thing 
//below 

// const numbers = [1, 1, 2, 3, 5];
// const numbersReformatted = ["1: ", "1: ", "2: ", "3: ", "5: "];
//     numbersReformatted.map(numbersReformatted => `${numbersReformatted}`);
//     console.log(numbersReformatted);

    // const numbers = [1, 1, 2, 3, 5];
    // const numbersReformatted = numbers.map(number => `${number}: `);
    // console.log(numbersReformatted); // ["1: ", "1: ", "2: ", "3: ", "5: "]

const words = ["planes", "trains", "automobiles"];
    // const singularWords = words.map(word => word.slice(0, -1));
    // console.log(singularWords); // ["plane", "train", "automobile"]
    
    // const firstLetters = words.map(word => word[0]);
    // console.log(firstLetters); // ["p", "t", "a"]

const capitalizedWords = words.map(word => word[0].toUpperCase() +word.slice(1));
// The below line should console.log: ["Planes", "Trains", "Automobiles"]
console.log(capitalizedWords);