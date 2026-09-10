class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs: string[]): string[][] {
        const map = new Map<string , string[]>();

        for(let i = 0 ; i < strs.length ; i++) {
            const value = strs[i].split('').sort().join('');

            if(!map.has(value)) {
                map.set(value, []);
                
            }

            map.get(value)!.push(strs[i]);
            
        
        }
        

        return Array.from(map.values())
      .sort((a, b) => a.length - b.length);  

    }
}
