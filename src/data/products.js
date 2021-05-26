// Initial State
const initState= {
    // Products: [{stock:100,price:400,category:"console",name: "PS4 Pro", description: "The PS4 Pro is Sony's newer, more premium console. It plays games in a higher resolution (4K) and often in High Dynamic Range (HDR). It's a little more expensive than the regular PS4 was, but that's because it uses slightly different hardware to get better results in terms of performance.", image: },
    //     {stock:70,price:1000,category:"console",name: "PS5", description: "The PlayStation 5 (PS5) is a home video game console developed by Sony Interactive Entertainment. Announced in 2019 as the successor to the PlayStation 4, the PS5 was released on November 12, 2020, in Australia, Japan, New Zealand, North America, Singapore and South Korea, with worldwide release following a week later. The PS5, along with Microsoft's Xbox Series X and Series S consoles, released the same month, are part of the ninth generation of video game consoles.", image: "https://todayinbermuda.com/wp-content/uploads/2021/02/Sony-PS5.jpg"},
    //     {stock:90,price:590,category:"console",name: "Xbox one x", description: "The Xbox One X does what no console has done before: native 4K HDR gaming. However, while games look stunning – with a fantastic level of detail accentuated by the console's HDR support – their larger file sizes will mean that the 1TB hard drive fills up fast. Memory issues aside, the Xbox One X fulfills the promise of 4K HDR gaming and offers the most premium gaming experience on a console, bar none.", image:  "data:image/jpeg;base64,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"},
    //     {stock:50,price:1000,category:"mobile",name:"Galaxy Fold 2" , description: "With the new Galaxy Z Flip release, Samsung showed its strong commitment to the foldable smartphone market and according to rumors, the Galaxy Fold 2 will be another device where engineers will spare no effort. Two separate sources claim that the upcoming successor of the original Fold will offer under-screen module for its selfie snapper.", image: "https://fdn.gsmarena.com/imgroot/news/20/09/samsung-galaxy-z-fold2-official/-727w2/gsmarena_009.jpg"},
    //     {stock:40,price:980,category:"mobile",name: "Huawei Mate X2", description: "he Mate X2 is not the foldable for the masses that many of us desire. Instead, it is still very much a halo device, meant to impress and showcase more than anything else. In fact, it might just be even more unattainable than its predecessors, seeing how it is currently only sold in China, with no official intention of expanding availability and that the still ongoing US sanctions mean no Google Play Services and severely handcapped chipset manufacturing capabilities. And this is all before we even start to consider the Mate X2's eye-watering price tag of around EUR 2300.", image:  "https://www.mobihall.com/data/news/2021/02/9d9c69d13f-img.jpg"},
    //     {stock:60,price:880,category:"mobile",name: "iPhone 12 Pro Max", description: "iPhone 12 Pro Max smartphone was launched on 13th October 2020. The phone comes with a 6.70-inch touchscreen display with a resolution of 1284x2778 pixels at a pixel density of 458 pixels per inch (ppi). The iPhone 12 Pro Max supports wireless charging, as well as proprietary fast charging.", image:  "https://www.apple.com/newsroom/images/product/iphone/standard/Apple_announce-iphone12pro_10132020.jpg.og.jpg?202103272121"},
    // ],
    Products:[]
}

// Reducers
     const Products=(state=initState,action)=>{
    const {type,payload}=action;
    let Products
    switch (type){
        case "GET":
             Products=payload
            console.log(Products)
            return Products

        // case "dec":
        //
        //     //  Products=state.Products.map((ele)=>{
        //     //     if(ele.name===payload){
        //     //         return{...ele,stock:ele.stock-1}
        //     //     }else{
        //     //         return ele
        //     //     }
        //     // })
        //     // console.log(Products)
        //     return Products
        case "increase":

            Products=state.Products.map((ele)=>{
                console.log(payload.Products._id)

                if(ele._id===payload.Products._id){
                    return{...ele,inStock:ele.inStock+1}
                }else{
                    return ele
                }

            })

            return {Products}

        case "decrease":
            // console.log(state.Products,"befoooore")

            Products=state.Products.map((ele)=>{
                // console.log(payload.Products._id)

                if(ele._id===payload.Products._id){
                    // console.log("eeeeeeee")
                    return{...ele,inStock:ele.inStock-1}
                }else{
                    return ele
                }

            })
            // console.log(state,"Afteeeeer")

            return {Products}
        default :
            return state
    }

}

export default Products

