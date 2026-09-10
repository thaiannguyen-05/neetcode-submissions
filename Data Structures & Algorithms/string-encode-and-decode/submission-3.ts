class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */

    isNumber(value: string): boolean {
    return /^-?\d+$/.test(value);
    }

    encode(strs: string[]): string {
        console.log(strs.map(str => `${str.length}#${str}`).join(''));
        return strs.map(str => `${str.length}#${str}`).join('');
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str: string): string[] {
        let results: string[] = [];

        let i = 0;
        while(i < str.length) {
            let j = i;
            while(str[j] !== '#') ++j;

            const length = Number(str.slice(i , j));
            const sub = str.slice(j + 1 , j + 1 + length);

            results.push(sub);
            i = j + 1 + length;
        }

        return results;
        
    }
}
