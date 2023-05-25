// livecode 1

// function numbers(num1, num2) {
//     if (num1 < num2) {
//       return true;
//     } else {
//       return false;
//     }
//   }

//   console.log(numbers(2, 5));

// livecode 2

// function reverseString(str) {
//     let reversedStr = "";
  
//     for(let i = str.length - 1; i >= 0; i--) {
//       reversedStr += str[i];
//     }

//     return reversedStr;
//   }

// let str = "rivaldialwi";
// let reversedStr = reverseString(str);

// console.log(reversedStr);

// live code 3

// function sortString(str) {
//     let sortedStr = '';
//     str = str.toLowerCase();
//     for (let i = 'a'.charCodeAt(0); i <= 'z'.charCodeAt(0); i++) {
//       for (let j = 0; j < str.length; j++) {
//         if (str.charCodeAt(j) === i) {
//           sortedStr += str[j];
//         }
//       }
//     }
//     return sortedStr;
//   }  
  
//   // contoh penggunaan
//   let myString = "AhLo";
//   let sortedString = sortString(myString);
//   console.log(sortedString);

// live code 4

// function aritmatika(data) {
//     if (data.length < 2) {
//       return true; 
//     }
  
//     let diff = data[1] - data[0];  
//     for (let i = 2; i < data.length; i++) {
//       if (data[i] - data[i-1] !== diff) {
//         return false;  
//       }
//     }
  
//     return true;  
//   }
  
//   let data1 = [2, 4, 6, 8];
//   console.log(aritmatika(data1)); 

// live code 5

// function checkString(str) {
//     for (let i = 0; i < str.length; i++) {
//       if (str[i] === 'a') {
//         for (let j = i + 1; j < str.length && j <= i + 3; j++) {
//           if (str[j] === 'b') {
//             return true;
//           }
//         }
//       }
//       if (str[i] === 'b') {
//         for (let j = i + 1; j < str.length && j <= i + 3; j++) {
//           if (str[j] === 'a') {
//             return true;
//           }
//         }
//       }
//     }
//     return false;
//   }
  
//   // contoh penggunaan
//   console.log(checkString('dadefghb'));
//   console.log(checkString('dacbe')); 

// live code 6

// function fpb(a, b) {
//     if (b == 0) {
//       return a;
//     } else {
//       return fpb(b, a % b);
//     }
//   }

//   console.log(fpb(17, 23));

// live code 7

function prima(num) {
    if (num <= 1) {
      return false;
    }
    for (let i = 2; i < num; i++) {
      if (num % i === 0) {
        return false;
      }
    }
    return true;
  }  
  
  console.log(prima(3)); 
  console.log(prima(7)); 
  console.log(prima(6)); 
  console.log(prima(23)); 
  console.log(prima(33));
