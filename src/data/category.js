// Initial State
const initState= {
    category:{
      category:[{name:"console",description:"best Series from Consoles"},
          {name:"mobile",description:"best Series from Mobiles"}
      ]
  },
activeCategory:null,
}

// Reducers
const Category=(state=initState,action)=>{
    const {type,payload}=action;
    switch (type){
        case "Active":
            return {...initState,activeCategory:payload}
        default :
            return state
    }
}
export default Category
//  ACtions
export  const Active=(name)=>{
    return{
        type:'Active',
        payload :name,
    }
}



