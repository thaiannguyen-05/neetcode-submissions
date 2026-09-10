class Solution {
    checkInclusion(s1: string, s2: string): boolean {
        if (s1.length > s2.length) return false;

        const need = new Map<string, number>();
        const window = new Map<string, number>();

        for (let i = 0; i < s1.length; i++) {
            need.set(s1[i], (need.get(s1[i]) ?? 0) + 1);
            window.set(s2[i], (window.get(s2[i]) ?? 0) + 1);
        }

        if (this.isSameMap(need, window)) return true;

        let left = 0;

        for (let right = s1.length; right < s2.length; right++) {
            const addChar = s2[right];
            window.set(addChar, (window.get(addChar) ?? 0) + 1);

            const removeChar = s2[left];
            window.set(removeChar, window.get(removeChar)! - 1);

            if (window.get(removeChar) === 0) {
                window.delete(removeChar);
            }

            left++;

            if (this.isSameMap(need, window)) return true;
        }

        return false;
    }

    isSameMap(map1: Map<string, number>, map2: Map<string, number>): boolean {
        if (map1.size !== map2.size) return false;

        for (const [key, value] of map1) {
            if (map2.get(key) !== value) return false;
        }

        return true;
    }
}