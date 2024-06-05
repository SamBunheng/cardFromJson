import { cardComponent } from "../components/cardComponent.js";
import { fake_product } from "../data/product.js";

const BASE_URL  = "http://127.0.0.1:5500/data/product.json"
let renderArea = document.querySelector("#cardRender")
//     fake_product.map((fake_product) => {
//         renderArea.innerHTML += cardComponent(fake_product)
//     })
fetch(BASE_URL).then((res)=> res.json())
.then((data)=>{
    data.products.map((fake_product) => {
        renderArea.innerHTML += cardComponent(fake_product)
    })
})