class BinarySearch {

    // private variables
    #numbers;
    #target;

    constructor(numbers, target) {
        this.#numbers = numbers;
        this.#target = target;
    }

    solve() {
        this.#numbers.sort((a, b) => a - b);
        let left = 0;
        let right = this.#numbers.length - 1;
        let mid;

        while (left <= right) {
            mid = left + ((right - left) / 2);
            if (this.#numbers[mid] === this.#target) {
                console.log(`Exist At ${mid} in Sorted Array`);
                return;
            }
            if (this.#numbers[mid] > this.#target) {
                right = mid - 1;
            } else {
                left = mid + 1;
            }
        }

        console.log('Does Not Exist');
    }
}

// driver code
const binaryObject = new BinarySearch([44, 12, 18, 4, -3, 67, 34], 12);
binaryObject.solve();