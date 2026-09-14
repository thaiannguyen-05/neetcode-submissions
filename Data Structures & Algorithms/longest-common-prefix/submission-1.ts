class Solution {
    /**
     * @param {string[]} strs
     * @return {string}
     */
    longestCommonPrefix(strs: string[]): string {
        if(strs.length <= 0) return "";
        if(strs.length === 1) return strs[0];

        let longest = strs[0];

        for(let i = 1 ; i < strs.length ; i++) {
            let curr_len = strs[i].length;
            let start = 0;
            while(start < curr_len) {
                if(longest[start] !== strs[i][start]) break;
                ++start;
            }


            longest = longest.slice(0, start);
        }

        return longest;
    }
}
