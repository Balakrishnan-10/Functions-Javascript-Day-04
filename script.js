// Do the below programs in anonymous function & IIFE
// A.Print odd numbers in an array:
// // Anonymous Function:
var even = [];
var odd = [];
var foo = function (arr) {
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] % 2 == 0) {
      even.push(arr[i]);
    } else {
      odd.push(arr[i]);
    }
  }
  return odd;
};
console.log("Anonymous function:");
console.log("1. Odd Numbers : " + foo([1, 2, 3, 4, 5]));

// ----------------------------------------------------------------------------

// B.Convert all the strings to title caps in a string array:

var titleCase = function (str) {
  str = str.toLowerCase().split(" ");
  for (var i = 0; i < str.length; i++) {
    str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1);
  }
  return str.join(" ");
};
console.log("2. String to Title case : " + titleCase("i am bala"));

// ----------------------------------------------------------------------------

// C.Sum of all numbers in an array:

var foo = function (arr) {
  var sum = 0;
  for (var i = 0; i < arr.length; i++) {
    sum = sum + arr[i];
  }
  return sum;
};
console.log("3. Sum of all numbers in an array : " + foo([1, 2, 3, 4]));

// ----------------------------------------------------------------------------

// D.Return all the prime numbers in an array:

var arr = [2, 3, 4, 5, 6, 7, 8, 9, 10];
var Prime = function (num) {
  for (var i = 2; i < num; i++) {
    if (num % i == 0) {
      return false;
    }
  }
  return true;
};
console.log("4. Prime numbers in an array : " + arr.filter(Prime));

// ----------------------------------------------------------------------------

// E.Return all the palindromes in an array:

const arr6 = ["121", "dad", "abcde", "racecar", "12345"];
var palindrome = function (arr6) {
  return arr6.filter((current, idx, arr6) => {
    const splitArr = current.split("");
    const reversedString = splitArr.reduceRight(
      (prev, curr) => prev + curr,
      ""
    );
    if (current === reversedString) return current;
  });
};
console.log("5. Palindromes in an array : " + palindrome(arr6));

// ----------------------------------------------------------------------------

// F.Return median of two sorted arrays of the same size:

let median = function (arr1,arr2){
  let arr = [...arr1, ...arr2];
  
  arr.sort((a,b) => a-b);
  let len = arr.length;

  if(len%2!==0){

let ans = arr[Math.round(len/2)-1];
let final = ans;

}else{

ans = arr[Math.round(len/2)-1]+arr[Math.round(len/2)];
final = ans;

}
console.log( "6. Median of two sorted arrays of the same size : " + final);
};
var arr1 = [3,2,1,4,5];
var arr2 = [8,6,7,9,10];
median(arr1,arr2);

// ----------------------------------------------------------------------------

// G.Remove duplicates from an array:

var arr = [1, 1, 2, 3, 4, 5, 3, 6, 8, 1, 4];
var res = function (arr) {
  let dup = [...new Set(arr)];
  return dup;
};
console.log("7. Remove duplicates from an array : " + res(arr));

// ----------------------------------------------------------------------------

// H.Rotate an array by k times:

var arr = [1, 2, 3, 4, 5, 6];
var k = 3;
var rotate = function (arr, k) {
  const n = arr.length;
  k %= n;

  const rotated = [];
  for (let i = 0; i < n; i++) {
    rotated[(i + k) % n] = arr[i];
  }

  for (let i = 0; i < n; i++) {
    arr[i] = rotated[i];
  }
  return rotated;
};
console.log("8. Rotate an array by 3 times : " + rotate(arr, k));

// ----------------------------------------------------------------------------

// IIFE Function:
// A.Print odd numbers in an array:

var even = [];
var odd = [];
(function foo(arr) {
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] % 2 == 0) {
      even.push(arr[i]);
    } else {
      odd.push(arr[i]);
    }
  }
  console.log("IIFE function:");
  console.log("1. Odd Numbers : " + odd);
})([1, 2, 3, 4, 5]);

// ----------------------------------------------------------------------------

// B.Convert all the strings to title caps in a string array:
(function (str) {
  str = str.toLowerCase().split(" ");
  for (var i = 0; i < str.length; i++) {
    str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1);
  }
  console.log("2. String to Title case : " + str.join(" "));
})("i am bala");

// ----------------------------------------------------------------------------

// C.Sum of all numbers in an array:

(function foo(arr) {
  var sum = 0;
  for (var i = 0; i < arr.length; i++) {
    sum = sum + arr[i];
  }

  console.log("3. Sum of all numbers in an array : " + sum);
})([1, 2, 3, 4]);

// ----------------------------------------------------------------------------

// D.Return all the prime numbers in an array:

(function (arr) {
  arr = arr.filter((num) => {
    for (var i = 2; i < num; i++) {
      if (num % i == 0) return false;
    }
    return true;
  });
  console.log("4. Prime numbers in an array : " + arr);
})([2, 3, 4, 5, 6, 7, 8, 9, 10]);

// ----------------------------------------------------------------------------
// G.Remove duplicates from an array:
(function(){
  var arr1 =["121", "dad", "abcde", "racecar", "12345"];
  var N1=arr1.length;
  var out =[];
  for(let i=0;i<arr1.length;i++){
      let final = arr1[i];
      let str = final.split('').reverse().join('');
      if(str==arr1[i])
     out.push(arr1[i]);
      }
   console.log("8. Remove duplicates from an array : "+ out);
 
})(); 

// ----------------------------------------------------------

// F.Return median of two sorted arrays of the same size:

var arr1 = [3,2,1,4,5];
var arr2 = [8,6,7,9,10];

(function () {
  let arr = [...arr1, ...arr2];

  arr.sort((a, b) => a - b);
  let len = arr.length;

  if (len % 2 !== 0) {
    let ans = arr[Math.round(len / 2) - 1];
    let final = ans;
  } else {
    ans = arr[Math.round(len / 2) - 1] + arr[Math.round(len / 2)];
    final = ans;
  }
  console.log("6. Median of two sorted arrays of the same size : "+final);
})(arr1, arr2);

// ----------------------------------------------------------------------------

// G.Remove duplicates from an array:

(function (arr) {
  let dup = [...new Set(arr)];
  console.log("7. Remove duplicates from an array : " + dup);
})([1, 1, 2, 3, 4, 5, 3, 6, 8, 1, 4]);

// ----------------------------------------------------------------------------

// H.Rotate an array by k times:

var arr = [1, 2, 3, 4, 5, 6];
var n = arr.length;
var k = 3;

(function (arr, n, k) {
  let p = 1;
  while (p <= k) {
    let last = arr[0];
    for (let i = 0; i < n - 1; i++) {
      arr[i] = arr[i + 1];
    }
    arr[n - 1] = last;
    p++;
  }
  let out = [];
  for (let i = 0; i < n; i++) {
    out.push(arr[i]);
  }
  console.log("8. Rotate an array by 3 times : " + out);
})(arr, n, k);

// ----------------------------------------------------------------------------

// ARROW FUNCTION:
// Do the below programs in arrow functions.
// A.Print odd numbers in an array:

var even1 = [];
var odd1 = [];
var foo1 = (arr3) => {
  for (var i = 0; i < arr3.length; i++) {
    if (arr3[i] % 2 == 0) {
      even1.push(arr3[i]);
    } else {
      odd1.push(arr3[i]);
    }
  }
  return odd1;
};
console.log("Arrow functions solutions =>:");
console.log("1. Odd Numbers in an array : " + foo1([1, 2, 3, 4, 5, 6, 7, 8, 9]));

// ----------------------------------------------------------------------------

//B.Convert all the strings to title caps in a string array:

var titleCase = (str) => {
  str = str.toLowerCase().split(" ");
  for (var i = 0; i < str.length; i++) {
    str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1);
  }
  return str.join(" ");
};
console.log("2. Strings to title caps : " + titleCase("i am bala"));

// ----------------------------------------------------------------------------

// C.Sum of all numbers in an array

var foo = (arr) => {
  var sum = 0;
  for (var i = 0; i < arr.length; i++) {
    sum = sum + arr[i];
  }
  return sum;
};
console.log("3. Sum of all numbers in an array : " + foo([1, 2, 3, 4]));

// ----------------------------------------------------------------------------

//D.Return all the prime numbers in an array

var arr4 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var isPrime = (num1) => {
  for (var i = 2; i < num1; i++) {
    if (num1 % i == 0) {
      return false;
    }
  }
  return num1 > 1;
};
console.log("4. Prime numbers in an array : " + arr4.filter(isPrime));

// ----------------------------------------------------------------------------

// E.Return all the palindromes in an array:

const array = ["121", "dad", "abcde", "racecar", "12345"];
var palindrome = (array) => {
  return array.filter((current, idx, arr) => {
    const splitArr = current.split("");
    const reversedString = splitArr.reduceRight(
      (prev, curr) => prev + curr,
      ""
    );
    if (current === reversedString) return current;
  });
};
console.log("5. Palindromes in an array : " + palindrome(array));

// ----------------------------------------------------------------------------
