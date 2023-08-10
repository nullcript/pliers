![Logo](https://i.ibb.co/TBD1xMn/pliers-Logo.png)

# Pliers

A simple and integrated library of commonly used methods for **JavaScript**

## Description

**Pliers** is a simple and practical library of a variety of methods used in JavaScript to work with arrays, strings and objects, and a number of important and useful algorithms in sorting and searching, as well as algorithms in numerical and statistical calculations and other general items that you can easily use in your own projects.
In fact, some of these items may be present in JavaScript by default, but this library has tried to either improve them, such as sorting algorithms or sometimes using the same items to collect these important methods in a library. For a glimpse of the **meta-programming**.

Here is a list of things you can do with pliers.

## Features

-   **`Pliers.random(min, max)`**
    -   Returns a random number between and includes the minimum and maximum numbers
-   **`Pliers.search(arr, target)`**
    -   Returns the index of target in the arr otherwise `-1`
-   **`Pliers.includes(arr, target)`**
    -   Returns true if find the target in the arr
-   **`Pliers.sort(arr)`**
    -   Sorts arr based on textual or numeric content
    -   It's Case Sensitive sort in textual mod : `"a" < "A"`
-   **`Pliers.sortMix(arr)`**
    -   Sorts arr based on textual content with numeric end
    -   `["file1","file9","file10","file11"]`
-   **`Pliers.shuffle(arr)`**
    -   Shuffles the array based on the **FisherYates** algorithm
-   **`Pliers.sample(arr, n)`**
    -   Random selection of n sample of arr without repeat
    -   [default n == 1] and [if n > arr.length => n = arr.length]
    -   [if n == 1] return value else return an array of values
-   **`Pliers.union(arr)`**
    -   Remove duplicate elements from the array and make it unique
    -   `[1, 2, 1, 2, 2, 3, 1, 2, 3]` => `[1, 2, 3]`
-   **`Pliers.compact(arr)`**
    -   Remove falsy values from the arr
    -   falsy values like => `[0, -0, false, "" (empty string), NaN, undefined, null]`
-   **`Pliers.reverse(arr)`**
    -   reverse the arr => `[1, 2, 3]` => `[3, 2, 1]`
-   **`Pliers.deepClone(obj)`**
    -   deepClone an object => `const target = Pliers.deepClone(obj)`
-   **`Pliers.JTG(jy, jm, jd)`**
    -   Jalali to Gregorian => `Pliers.JTG(1378, 1, 5) //[1999, 3, 25]`
-   **`Pliers.GTJ(gy, gm, gd)`**
    -   Gregorian to Jalali => `Pliers.GTJ(1999, 3, 25) //[1378, 1, 5]`
-   **`Pliers.binarySearch(sortArr, target)`**
    -   searching via binarySearch in a sort array
    -   if find return index otherwise -1 `O(logn)`
-   **`Pliers.quickSort(arr)`**
    -   sorting via quickSort algorithm with`O(n*logn)`

## How to use

install via npm :
```bash
npm i @shokri/pliers
```
then import and use it :
```javascript
const Pliers = require("@shokri/pliers");

console.log(Pliers.sort([0, 1, 7, 9, 6]));  //[ 0, 1, 6, 7, 9 ]
```

## Author

-   [@Mohammad Shokri](https://www.github.com/nullcript)

## 🔗 Links

[![portfolio](https://img.shields.io/badge/my_portfolio-000?style=for-the-badge&logo=ko-fi&logoColor=white)](https://github.com/nullcript)
[![linkedin](https://img.shields.io/badge/linkedin-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/nullcript)
[![twitter](https://img.shields.io/badge/twitter-1DA1F2?style=for-the-badge&logo=twitter&logoColor=white)](https://twitter.com/nullcript)

## Feedback

If you have any feedback, please reach out to us at nullcript@gmail.com
