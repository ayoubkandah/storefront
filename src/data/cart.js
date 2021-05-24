// Initial State
const cart= []


// Reducers
const Cart=(state=cart,action)=>{
    const {type,payload}=action;
    switch (type){
        case 'Add':

// console.log(cart,"eee")
            return [...state,payload]

        case "delete" :
            const cart=state.filter((ele,index)=>{
                if(index===payload){
                    return false
                }else{return true}
            })
            return cart
        default :

            return state
    }
}
export default Cart
//  ACtions
export  const Add=(name)=>{

    return{
        type:'Add',
        payload :name,
    }
}

export const deleteC=(name)=>{
    return{
        type:"delete",
        payload:name,
    }
}
