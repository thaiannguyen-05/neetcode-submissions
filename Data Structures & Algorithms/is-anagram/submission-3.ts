class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    hash(str: string): string {
        let hash = new Array(26).fill(0);

        for(let i = 0 ; i<str.length ; i++) {
            const char = str[i];
            hash[char.charCodeAt(0) - "a".charCodeAt(0)]++;
        }

        return hash.toString();
    }

    isAnagram(s: string, t: string): boolean {
        if(s.length !== t.length) return false;

        return this.hash(s) === this.hash(t);
    }
}
