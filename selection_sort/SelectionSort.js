class SelectionSort {

    // private variables
    #numbers
    #len
    #dir

    // dir 1 is for ascending sort and -1 for descending
    constructor(numbers, dir) {
        this.#numbers = numbers
        this.#dir = dir
        this.#len = numbers.length
        this.#sort()
    }

    #sort() {
        let tempIndex
        for (let i = 1; i < this.#len; i++) {
            tempIndex = i - 1
            for (let j = i; j < this.#len; j++) {
                if (this.#dir === 1) {
                    if (this.#numbers[j] < this.#numbers[tempIndex]) {
                        tempIndex = j
                    }
                } else {
                    if (this.#numbers[j] > this.#numbers[tempIndex]) {
                        tempIndex = j
                    }
                }
            }
            this.#swap(i - 1, tempIndex)
        }
    }

    #swap(i, j) {
        let temp = this.#numbers[i]
        this.#numbers[i] = this.#numbers[j]
        this.#numbers[j] = temp
    }

    displayNumbers() {
        this.#numbers.forEach(element => {
            console.log(element)
        })
    }

}

// driver code
new SelectionSort([2, 1, 4, 5], -1).displayNumbers()