// OOP = Object Oriented Programming

class Product {

    static counter = 0;
    
    constructor(title, sku, quantity, price) {
        this.title = title;
        this.sku = sku;
        this.quantity = quantity;
        this.price = price;


        Product.counter++
    }

    // method
    setTitle(title) {
        this.title = title;
    }

    // METHOD OVERRIDING / POLYMORPHISM

    showType() {
        console.log("Type Product")
    }

}

// INHERITANCE

class Electronic extends Product {

    static counter = 0;
    constructor(title, quantity, price) {
        // string literal
        super(title, `ELEKTRONIK-${Electronic.counter}`, quantity, price);
        Electronic.counter++;
    }

    showType() {
        console.log("Type Electronic")
    }
}

class Sport extends Product {

    static counter = 0;
    constructor(title, quantity, price) {
        super(title, `SPORT-${Sport.counter}`, quantity, price);
        Sport.counter++;
    }

    showType() {
        console.log("Type Sport")
    }
}


const refrigerator = new Electronic("Kulkas", 10, 2500000)
const microwave = new Electronic("Microwave", 40, 3000000);


const basketBall = new Sport("Bola Basket", 200, 400000);
const baseBallBat = new Sport("Tongkat Baseball", 100, 800000);


// new Product
// Udah punya properties ==> judul, sku, quantity, price

// const firstProduct = new Product("Kulkas", "ELEKTRONIK-001", 10, 2000000)
// const secondProduct = new Product("Microwave", "ELEKTRONIK-002", 10, 2000000);
// const thirdProduct = new Product("Blender", "ELEKTRONIK-003", 10, 2000000);


// STATIC PROPERTY = property milik class
// NORMAL PROPERTY = property milik object


// CLASS
// OBJECT


// CLUSTER RUMAH
// DESAINER SAMA BLUEPRINT RUMAH = CLASS
// RUMAH ASLI = OBJECT

// JENDELA, PINTU, ATAP, KAMAR MANDI, KAMAR TIDUR

// JENDELA 3, PINTU 2, ATAP WARNA HITAM, KAMAR MANDI 2 DLL


// ASYNCHRONOUS


// CALLBACK = FUNCTION YANG DIPANGGIL DIDALAM FUNCTION

// Memunculkan download progress

// Synchronous

// const showDownload = (timer, message, callback) => {

//     setTimeout(() => {
//         console.log(message)
//         callback();
//     }, timer)
// }

// showDownload(1000, "Download first url", () => {
//     showDownload(2000, "Download second url", () => {
//         showDownload(3000, "Download third url", () => {
//            showDownload(1000, "Download fourth url", () => {
//             showDownload(2000, "Download fifth url", () => {
//                 console.log("completed")
//             })
//            })
//         })
//     })
// })


// PROMISE

const showDownload = (timer, message) => {

    return new Promise((resolve, reject) => {
        // resolve = kondisi sukses
        // reject = kondisi failed / gagal

        if(message.length === 0) {
            reject("Message mustn't empty")
        } else {
            setTimeout(() => {
                console.log(message)
                resolve();
            }, timer)
        }

    })
}

// showDownload(1000, "Download first url...")
//     .then(() => {
//         return showDownload(2000, "Download second url....")
//     })
//     .then(() => {
//         return showDownload(3000, "Download third url....")
//     })
//     .then(() => {
//         return showDownload(3000, "")
//     })
//     .catch(err => {
//         console.log(err)
//     })


// ASYNC AWAIT ==> ES8


const printLog = async () => {

    try {
        await showDownload(1000, "Download first url...")
        await showDownload(2000, "Download second url...")
        await showDownload(3000, "Download third url...")
    } catch(err) {
        console.log(err)
    }
}


printLog();