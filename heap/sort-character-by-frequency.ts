/**
    Problem - Given a string s, sort it in decreasing order based on the frequency of the characters.
    The frequency of a character is the number of times it appears in the string.

    Return the sorted string. If there are multiple answers, return any of them.

    Input: s = "tree"
    Output: "eert"
    Explanation: 'e' appears twice while 'r' and 't' both appear once.
    So 'e' must appear before both 'r' and 't'. Therefore "eetr" is also a valid answer.

    Input: s = "cccaaa"
    Output: "aaaccc"
    Explanation: Both 'c' and 'a' appear three times, so both "cccaaa" and "aaaccc" are valid answers.
    Note that "cacaca" is incorrect, as the same characters must be together.

    Input: s = "Aabb"
    Output: "bbAa"
    Explanation: "bbaA" is also a valid answer, but "Aabb" is incorrect.
    Note that 'A' and 'a' are treated as two different characters.
    

    Constraints:
    1 <= s.length <= 5 * 105
    s consists of uppercase and lowercase English letters and digits.
 */

class MaxHeapFrequencySort {
    private heap: [number, number][];
    private compareFn: (a: number, b: number) => number

    constructor(compareFn: (a: number, b: number) => number) {
        this.compareFn = compareFn
    }

    sort() {

    }

    heapifyUp() {

    }

    heapifyDown() {

    }

    insert() {

    }

    extractMax() {

    }
}

function frequencySort(s: string): string {
    let hashmap = new Map<string, number>();

    for (let i = 0; i < s.length; i++) {
        hashmap.set(s, hashmap.get(s) ? hashmap.get(s)! + 1 : 1);
    }

    const pq = new MaxHeapFrequencySort((a, b) => a[1] - b[1]);
    for (const [key, val] of Object.entries(hashmap)) {
        
    }
};