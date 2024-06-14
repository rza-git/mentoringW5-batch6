// Object Oriented Programming (OOP)

// Class
// Object

// Mau bikin cluster perumahan

// Class ==> Design rumah + blueprintnya
// Object ==> Rumah aslinya

// Home
// - jendela
// - pintu
// - atap
// - lantai

// Object rumah
// jendela 5
// pintu ada 8
// atap warna hitam
// lantai 2

// Class
class Product {

    // set properties
    constructor(title, sku, price, stock) {
        this.title = title;
        this.sku = sku;
        this.price = price;
        this.stock = stock;
    }

    // methods
    printInfo() {
        console.log(`Title: ${this.title}\nSKU: ${this.sku}\nPrice: ${this.price}\nStock: ${this.stock}`)
    }
}
 
// Object
const microwave = new Product("Microwave", "Elektro001", 4000000, 100);
const refrigerator = new Product("Refrigerator", "Elektro002", 4500000, 200);

// microwave.printInfo();
// refrigerator.printInfo();

// Asynchronous

// Node JS ==> SINGLE THREAD
// Jalan satu persatu setiap programnya


const firstUrl = 'https://www.first-website.co.id' // ==> 4 Detik
const secondUrl = 'https://www.second-website.co.id' // ==> 2 Detik
const thirdUrl = 'https://www.third-website.co.id' // ==> 3 Detik
// Berurutan

// Callback

// const downloadUrl = (url, timer, callback) => {

//     setTimeout(() => {
//         console.log(`${url} completed...`);
//         callback();
//     }, timer)
// }

// downloadUrl(firstUrl, 4000, () => {
//     downloadUrl(secondUrl, 2000, () => {
//         downloadUrl(thirdUrl, 3000, () => {
//             console.log(`All downloads completed....`)
//         })
//     })
// })


// Syntax lama ES5 - Promise
// Promise cuma Object untuk menghandle program asynchronous


// Promise

const downloadUrl = (url, timer) => {

    return new Promise((resolve, reject) => {
        // resolve => untuk menghandle success condition
        // reject => untuk menghandle error condition
        setTimeout(() => {
            console.log(`${url} completed...`);
            resolve();
        }, timer)
    })
}


// downloadUrl(firstUrl, 4000)
//     .then(() => {
//         return downloadUrl(secondUrl, 2000)
//     })
//     .then(() => {
//         return downloadUrl(thirdUrl, 3000)
//     })
//     .then(() => {
//         console.log(`All downloads completed....`)
//     })

// Syntax ES8 - ASYNC AWAIT
// Handle promise

const showDownloads = async () => {

    await downloadUrl(firstUrl, 4000)
    await downloadUrl(secondUrl, 2000)
    await downloadUrl(thirdUrl, 3000)
    console.log(`All downloads completed....`)
}

showDownloads();






