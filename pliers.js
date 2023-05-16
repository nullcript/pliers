/* |--------------------| PLIERS.JS |--------------------| */

// ***************| Information
/*
 *
 * 'Pliers.js' ::=> A simple and integrated library of commonly used methods for JavaScript
 * 'Author' ::=> @MohammadShokri [https://Nullcript.ir]
 * 'License' ::=> FREE
 * 'Links' ::=>
 *   ==> email : [nullcript@gmail.com],
 *   ==> github : [https://github.com/nullcript],
 *   ==> website : [https://nullcript.ir],
 *   ==> Linkedin : [https://linkedin.com/in/nullcript],
 *   ==> twitter : [https://twitter.com/nullcript],
 *
 * */

// ***************| Features
/*
 *
 * (01) => Pliers.random(min, max)
 * (02) => Pliers.search(arr, target)
 * (03) => Pliers.includes(arr, target)
 * (04) => Pliers.sort(arr)
 * (05) => Pliers.sortMix(arr)
 * (06) => Pliers.shuffle(arr)
 * (07) => Pliers.sample(arr, n)
 * (08) => Pliers.union(arr)
 * (09) => Pliers.compact(arr)
 * (10) => Pliers.reverse(arr)
 * (11) => Pliers.deepClone(obj)
 *
 * */

// ***************| Source Code
"use strict";

class Pliers {
    //Class Pliers
    constructor() {
        //Can not create an instance from this class
        if (new.target) {
            throw new Error(
                "You can not create an OBJECT from the 'pliers' CLASS with 'new' syntax"
            );
        }
    }

    //(01) => Pliers.random(min, max)
    static random(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    //(02) => Pliers.search(arr, target)
    static search(arr, target) {
        return arr.indexOf(target);
    }

    //(03) => Pliers.includes(arr, target)
    static includes(arr, target) {
        return arr.includes(target);
    }

    //(04) => Pliers.sortNumber(arr)
    static sort(arr) {
        return arr.sort((a, b) => {
            if (typeof a === "number" && typeof b === "number") {
                return a - b;
            } else {
                return a.localeCompare(b);
            }
        });
    }

    //(05) => Pliers.sortMix(arr)
    static sortMix(arr) {
        const filenameOrder = new Intl.Collator(undefined, {
            numeric: true,
        }).compare;
        return arr.sort(filenameOrder);
    }

    //(06) => Pliers.shuffle(arr)
    static shuffle(arr) {
        for (let i = arr.length - 1; i > 0; i--) {
            let j = Math.floor(Math.random() * (i + 1));
            [arr[i], arr[j]] = [arr[j], arr[i]];
        }
        return arr;
    }

    //(07) => Pliers.sample(arr, n)
    static sample(arr, n = 1) {
        n = n > arr.length ? arr.length : n;
        let choice = [],
            temp,
            count = 0;
        while (true) {
            if (count === n) break;
            temp = arr[Math.floor(Math.random() * arr.length)];
            if (!choice.includes(temp)) {
                choice.push(temp);
                count++;
            }
        }
        return choice.length === 1 ? choice[0] : choice;
    }

    //(08) => Pliers.union(arr)
    static union(arr) {
        return [...new Set(arr)];
    }

    //(09) => Pliers.compact(arr)
    static compact(arr) {
        let list = [];
        for (let i of arr) {
            if (Boolean(i) !== false) {
                list.push(i);
            }
        }
        return list;
    }

    //(10) => Pliers.reverse(arr)
    static reverse(arr) {
        return arr.reverse();
    }

    //(11) => Pliers.deepClone(obj)
    static deepClone(obj) {
        let clone = {};
        for (let i in obj) {
            if (typeof obj[i] === "object") {
                clone[i] = deepClone(obj[i]);
            } else {
                clone[i] = obj[i];
            }
        }
        return clone;
    }
}

// ***************| Exports Code
//Uncomment one of the following codes based on your programming environment
//Read 'README.md' file for more instruction

//module.exports = Pliers;
//export default Pliers;
