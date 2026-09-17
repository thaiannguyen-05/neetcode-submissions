class MyHashSet {
    arr: number[];

    constructor() {
        this.arr = [];
    }

    /**
     * @param {number} key
     * @return {void}
     */
    add(key: number): void {
        for (let i = 0; i < this.arr.length; i++) {
            if (this.arr[i] === key) {
                return;
            }
        }

        this.arr.push(key);
    }

    /**
     * @param {number} key
     * @return {void}
     */
    remove(key: number): void {
        for (let i = 0; i < this.arr.length; i++) {
            if (this.arr[i] === key) {
                for (let j = i; j < this.arr.length - 1; j++) {
                    this.arr[j] = this.arr[j + 1];
                }

                this.arr.length--;
                return;
            }
        }
    }

    /**
     * @param {number} key
     * @return {boolean}
     */
    contains(key: number): boolean {
        for (let i = 0; i < this.arr.length; i++) {
            if (this.arr[i] === key) {
                return true;
            }
        }

        return false;
    }
}