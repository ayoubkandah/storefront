import cookie from "react-cookies"
// Initial State
const cart= []


// Reducers
const Cart=(state=cart,action)=>{
    const {type,payload}=action;
    switch (type){
        case 'Add':
            cookie.save("cart",[...state,payload])
// console.log(cart,"eee")
            return [...state,payload]

        case "delete" :
            const cart=state.filter((ele,index)=>{
                if(index===payload){
                    return false
                }else{return true}
            })
            cookie.save("cart",cart)

            return cart
        default :

            return state
    }
}
export default Cart
//  ACtions
