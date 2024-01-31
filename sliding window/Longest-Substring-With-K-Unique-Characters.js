// str = "aabacbebebe"
// k = 3
// output = "cbebebe" -> 7

const longestSubstringWithKUnique = (str, k) => {
    let i = 0;
    let j = 0;
    let ans = 0;

    let map = new Map();
    while (j < str.length) {
        map.set(str[j], (map.get(str[j]) || 0) + 1);

        while (map.size > k) {
            map.set(str[i], map.get(str[i]) - 1);
            if (map.get(str[i]) === 0) {
                map.delete(str[i]);
            }
            i++;
        }

        if (map.size === k) {
            ans = Math.max(ans, j - i + 1);
        }
        j++;
    }
    return ans;
};

let str = "aabacbebebe";
let k = 3;
console.log(longestSubstringWithKUnique(str, k));
