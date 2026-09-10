interface Pair<K, V> {
    key: K;
    value: V;
}

class TimeMap {
    private keyStore: Map<string, Array<Pair<number, string>>>;

    constructor() {
        this.keyStore = new Map<string, Array<Pair<number, string>>>();
    }

    search(nums: Pair<number, string>[], target: number): string {
        let left = 0;
        let right = nums.length - 1;

        while (left <= right) {
            const mid = Math.floor((right - left) / 2 + left);

            if (nums[mid].key === target) {
                return nums[mid].value;
            } else if (nums[mid].key > target) {
                right = mid - 1;
            } else {
                left = mid + 1;
            }
        }

        if (right >= 0) {
            return nums[right].value;
        }

        return "";
    }

    set(key: string, value: string, timestamp: number): void {
        const newPair: Pair<number, string> = {
            key: timestamp,
            value: value
        };

        if (this.keyStore.has(key)) {
            this.keyStore.get(key)!.push(newPair);
        } else {
            this.keyStore.set(key, [newPair]);
        }
    }

    get(key: string, timestamp: number): string {
        if (!this.keyStore.has(key)) {
            return "";
        }

        return this.search(this.keyStore.get(key)!, timestamp);
    }
}