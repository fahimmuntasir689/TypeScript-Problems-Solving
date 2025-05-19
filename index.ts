function formatString(input: string, toUpper?: boolean): string {
    if (toUpper === false) {

        return input.toLowerCase()
    }
    else {
        return input.toUpperCase()

    }
}



function filterByRating(items: { title: string; rating: number }[]): { title: string; rating: number }[] {

    const filteredArray = items.filter((item => item.rating >= 4))
    return filteredArray

}



function concatenateArrays<T>(...arrays: T[][]): T[] {

    const newArr: T[] = []

    arrays.forEach((array => {
        array.forEach((item => {
            newArr.push(item)
        }))

    }))
    return newArr
}





class Vehicle {

    constructor(private make: string, private year: number) {}
    getInfo(): string {
        return `Make : ${this.make} , Year : ${this.year}`
    }
}
class Car extends Vehicle {
    constructor(make: string, year: number, private model: string) {
        super(make, year)

    }
    getModel(): string {
        return `Model : ${this.model}`

    }
}



function processValue(value: string | number): number {
    if (typeof value === 'string') {
        return value.length
    }
    else return value * 2
}




interface Product {
    name: string;
    price: number;
}

function getMostExpensiveProduct(products: Product[]): Product | null {

    if (products.length === 0) {
        return null
    }
    let mostExpensiveProduct = products[0]
    products.forEach(product => {
        if (product.price > mostExpensiveProduct.price) {
            mostExpensiveProduct = product
        }
    })
    return mostExpensiveProduct;
}





enum Day {
    Monday,
    Tuesday,
    Wednesday,
    Thursday,
    Friday,
    Saturday,
    Sunday
}

function getDayType(day: Day): string {
    if (day === Day.Sunday || day === Day.Saturday) {
        return 'Weekend'
    }
    else {
        return 'Weekday'
    }
}


async function squareAsync(n: number): Promise<number> {

    return await new Promise<number>((resolve, reject) => {
        if (n < 0) {

            return reject(new Error ('The number is Negative'))
        }
        else {
            setTimeout(() => {
                resolve(n * n);
            }, 1000);
        }
    })
}


