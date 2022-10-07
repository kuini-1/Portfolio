export interface I_Product {
    readonly id: number,
    readonly name: string,
    readonly date: string,
    readonly sold: number,
    readonly quantity: number,
    readonly discount: number,
    readonly price: number,
    readonly img: string,
    readonly desc: string,
}

export class ProductManager {
    private static products: I_Product[] = [
        { 
            id: 0,
            name: "Watermelon",
            date: "14/8/2022",
            sold: 428,
            quantity: 23,
            discount: 0,
            price: 40,
            img: "/img/watermelon.png",
            desc: ""
        },
        { 
            id: 1,
            name: "Strawberry",
            date: "14/8/2022",
            sold: 43,
            quantity: 60,
            discount: 25,
            price: 20,
            img: "/img/strawberry.png",
            desc: ""
        },
        { 
            id: 2,
            name: "Orange",
            date: "14/8/2022",
            sold: 105,
            quantity: 42,
            discount: 0,
            price: 15,
            img: "/img/orange.png",
            desc: ""
        },
        { 
            id: 3,
            name: "Kiwi",
            date: "14/8/2022",
            sold: 22,
            quantity: 10,
            discount: 25,
            price: 40,
            img: "/img/kiwi.png",
            desc: ""
        },
        { 
            id: 4,
            name: "Pear",
            date: "14/8/2022",
            sold: 13,
            quantity: 20,
            discount: 15,
            price: 40,
            img: "/img/pear.png",
            desc: ""
        },
        { 
            id: 5,
            name: "Cherry",
            date: "14/8/2022",
            sold: 3,
            quantity: 15,
            discount: 0,
            price: 10,
            img: "/img/cherry.png",
            desc: ""
        },
        { 
            id: 6,
            name: "Apple",
            date: "14/8/2022",
            sold: 33,
            quantity: 20,
            discount: 10,
            price: 19,
            img: "/img/apple.png",
            desc: ""
        },
        { 
            id: 7,
            name: "Pineapple",
            date: "14/8/2022",
            sold: 63,
            quantity: 35,
            discount: 5,
            price: 35,
            img: "/img/pineapple.png",
            desc: ""
        },
        { 
            id: 8,
            name: "Blueberry",
            date: "14/8/2022",
            sold: 19,
            quantity: 10,
            discount: 5,
            price: 89,
            img: "/img/blueberry.png",
            desc: ""
        },
        { 
            id: 9,
            name: "Grapes",
            date: "14/8/2022",
            sold: 31,
            quantity: 15,
            discount: 0,
            price: 69,
            img: "/img/grape.png",
            desc: ""
        },
    ];
    
    static getProducts() {
        return ProductManager.products;
    }
    
    static getProduct(number: number | undefined) {
        return ProductManager.products.find((product) => product.id === number);
    }
}
