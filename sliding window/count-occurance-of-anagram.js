// 👋 check anagrma
// function checkAnagram(str1, str2) {
//     const sortedStr1 = str1.split("").sort().join("");
//     const sortedStr2 = str2.split("").sort().join("");
//     return sortedStr1 === sortedStr2;
// }

// let str1 = "";
// let str2 = "";
// console.log(checkAnagram(str1, str2));

//------------ Permutation in String -----------
/***
 * 
 * Given two strings s1 and s2, return true if s2 contains a permutation of s1, or false otherwise.
    In other words, return true if one of s1's permutations is the substring of s2.

    Example 1:
    Input: s1 = "ab", s2 = "eidbaooo"
    Output: true
    Explanation: s2 contains one permutation of s1 ("ba").

    Example 2:
    Input: s1 = "ab", s2 = "eidboaoo"
    Output: false
 */
// ------- time limit exceeds ---------
const checkPermutation = (str1, str2) => {
    return str1.split("").sort().join("") === str2.split("").sort().join("");
};

const checkInclusion = (s1, s2) => {
    if (s1.length > s2.length) {
        return false; // s1 cannot be a permutation of s2 if it is longer
    }

    for (let i = 0; i <= s2.length - s1.length; i++) {
        const substr = s2.substring(i, i + s1.length);
        if (checkPermutation(s1, substr)) {
            return true;
        }
    }

    return false;
};

let s1 = "ab";
// let s2 = "eidbaooo";
let s2 = "eidboaoo";
console.log(checkInclusion(s1, s2));
