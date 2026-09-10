class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs: string[]): string[][] {
        const ans = new Map<string, string[]>();

        for (let i = 0; i < strs.length; i++) {
            const sortedElement = strs[i].split("").sort().join("");

            if (ans.has(sortedElement)) {
                ans.get(sortedElement)!.push(strs[i]);
            } else {
                ans.set(sortedElement, [strs[i]]);
            }
        }

        return Array.from(ans.values());
    }
}
