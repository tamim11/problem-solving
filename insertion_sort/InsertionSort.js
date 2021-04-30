class InsertionSort {

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
        let key, i, j
        for (i = 1; i < this.#len; i++) {
            key = this.#numbers[i]
            j = i
            if (this.#dir === 1) {
                while (j >= 0 && this.#numbers[j] < this.#numbers[j - 1]) {
                    this.#swap(j, j - 1)
                    j--
                }
            } else {
                while (j >= 0 && this.#numbers[j] > this.#numbers[j - 1]) {
                    this.#swap(j, j - 1)
                    j--
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

new InsertionSort([4, 12, 65, 112, 32, -2, 33]).displayNumbers()