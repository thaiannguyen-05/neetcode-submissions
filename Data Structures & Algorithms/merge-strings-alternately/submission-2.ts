class Solution {
    /**
     * @param {string} word1
     * @param {string} word2
     * @return {string}
     */
    mergeAlternately(word1: string, word2: string): string {
        let merge: string = "";
        let i = 0;
        let j = 0;

        while(i < word1.length && j < word2.length) {
            merge += word1[i];
            merge += word2[i];
            ++i;
            ++j;
        }

        if(i < word1.length) {
            merge += word1.slice(i);
        }


        if(j < word2.length) {
            merge += word2.slice(j);
        }

        return merge;

    }
}
