class LRUCache {
    private capacity: number;
    private cache: Map<number, number>;
    /**
     * @param {number} capacity
     */
    constructor(capacity: number) {
        this.capacity = capacity;
        this.cache = new Map<number, number>();
    }

    /**
     * @param {number} key
     * @return {number}
     */
    get(key: number): number {
        if (!this.cache.get(key)) {
            return -1;
        }

        const value = this.cache.get(key)!;
        this.cache.delete(key);
        this.cache.set(key, value);

        return this.cache.get(key)!;
    }

    /**
     * @param {number} key
     * @param {number} value
     * @return {void}
     */
    put(key: number, value: number): void {
        if (this.cache.has(key)) {
            this.cache.delete(key);
        }
        else if (this.cache.size >= this.capacity) {
            this.cache.delete(this.cache.keys().next().value);
        }
        this.cache.set(key, value);
    }
}
