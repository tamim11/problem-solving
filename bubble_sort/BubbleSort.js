class BubbleSort {

    // privare variables
    #numbers
    #len
    #dir

    // pass any second argument to sort in descend order
    constructor(numbers, dir = 1) {
        this.#numbers = numbers
        this.#len = numbers.length
        this.#dir = dir
        this.#sort()
    }

    #sort() {
        let boundary = this.#len - 1
        for (let i = 0; i < boundary; i++) {
            for (let j = 0; j < boundary - i; j++) {
                if (this.#dir === 1) {
                    if (this.#numbers[j] > this.#numbers[j + 1]) {
                        this.#swap(j, j + 1)
                    }
                } else {
                    if (this.#numbers[j] < this.#numbers[j + 1]) {
                        this.#swap(j, j + 1)
                    }
                }
            }
        }
    }

    #swap(i, j) {
        let tmp = this.#numbers[i]
        this.#numbers[i] = this.#numbers[j]
        this.#numbers[j] = tmp
    }

    displayNumbers() {
        this.#numbers.forEach(element => console.log(element))
    }

}

new BubbleSort([4, 12, 65, 112, 32, -2, 33]).displayNumbers()