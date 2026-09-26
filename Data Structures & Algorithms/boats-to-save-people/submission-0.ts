class Solution {
    /**
     * @param {number[]} people
     * @param {number} limit
     * @return {number}
     */
    numRescueBoats(people: number[], limit: number): number {
        let boats = 0;
        people.sort((a, b) => a - b);

        let left = 0;
        let right = people.length - 1;
        while(left <= right) {
            const sum = people[right] + people[left];

            if(sum > limit) {
                --right;
                ++boats;
            } else {
                ++left;
                --right;
                ++boats;
            }
        }

        return boats;
    }
}
