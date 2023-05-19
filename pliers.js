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
 * (12) => Pliers.JTG(jy, jm, jd)
 * (13) => Pliers.GTJ(gy, gm, gd)
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
                clone[i] = Pliers.deepClone(obj[i]);
            } else {
                clone[i] = obj[i];
            }
        }
        return clone;
    }

    //(12) => Pliers.JTG(jy, jm, jd)
    static JTG(jy, jm, jd) {
        let gy = (jy <= 979) ? 621 : 1600;
        jy -= (jy <= 979) ? 0 : 979;
        let days = (365 * jy) + ((parseInt(jy / 33)) * 8) + (parseInt(((jy % 33) + 3) / 4))
            + 78 + jd + ((jm < 7) ? (jm - 1) * 31 : ((jm - 7) * 30) + 186);
        gy += 400 * (parseInt(days / 146097));
        days %= 146097;
        if (days > 36524) {
            gy += 100 * (parseInt(--days / 36524));
            days %= 36524;
            if (days >= 365) days++;
        }
        gy += 4 * (parseInt((days) / 1461));
        days %= 1461;
        gy += parseInt((days - 1) / 365);
        if (days > 365) days = (days - 1) % 365;
        let gd = days + 1;
        let sal_a = [0, 31, ((gy % 4 == 0 && gy % 100 != 0) || (gy % 400 == 0)) ? 29 : 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
        let gm
        for (gm = 0; gm < 13; gm++) {
            let v = sal_a[gm];
            if (gd <= v) break;
            gd -= v;
        }
        return [gy, gm, gd];
    }

    //(13) => Pliers.GTJ(gy, gm, gd)
    static GTJ(gy, gm, gd) {
        let g_d_m = [0, 31, 59, 90, 120, 151, 181, 212, 243, 273, 304, 334];
        let jy = (gy <= 1600) ? 0 : 979;
        gy -= (gy <= 1600) ? 621 : 1600;
        let gy2 = (gm > 2) ? (gy + 1) : gy;
        let days = (365 * gy) + (parseInt((gy2 + 3) / 4)) - (parseInt((gy2 + 99) / 100))
            + (parseInt((gy2 + 399) / 400)) - 80 + gd + g_d_m[gm - 1];
        jy += 33 * (parseInt(days / 12053));
        days %= 12053;
        jy += 4 * (parseInt(days / 1461));
        days %= 1461;
        jy += parseInt((days - 1) / 365);
        if (days > 365) days = (days - 1) % 365;
        let jm = (days < 186) ? 1 + parseInt(days / 31) : 7 + parseInt((days - 186) / 30);
        let jd = 1 + ((days < 186) ? (days % 31) : ((days - 186) % 30));
        return [jy, jm, jd];
    }
}

// ***************| Exports Code
//Uncomment one of the following codes based on your programming environment
//Read 'README.md' file for more instruction

// module.exports = Pliers;
// export default Pliers;
