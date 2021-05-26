import axios from 'axios';
const url="https://api-js401.herokuapp.com/api/v1/products"
export  const Active=(name)=>{
    return{
        type:'Active',
        payload :name,
    }
}


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
// without Thunk you cant do this!!!
export const getData = function () {
    return (dispatch) => {
        return axios({
            method: "GET",
            url: url,
        }).then((response) => {
            dispatch(getAction({ Products: response.data.results }));
        });
    };
};

export const incUpdate = function (id,stock) {
    return (dispatch) => {
        return axios({
            method: 'put',
            url: `${url}/${id}`,
            data: {inStock:stock+1}
        }).then((response) => {
            dispatch(incAction({ Products: response.data }));
        });
    };
};

export const decUpdate = function (id,stock) {
    console.log(id,stock)
    return (dispatch) => {
        return axios({
            method: 'put',
            url: `${url}/${id}`,
            data: {inStock:stock-1}
        }).then((response) => {
            dispatch(decAction({ Products: response.data }));
        });
    };
};
export const decAction = (payload) => {
    return {
        type: 'decrease',
        payload,
    };
};
export const incAction = (payload) => {
    return {
        type: 'increase',
        payload,
    };
};


export const getAction = (payload) => {
    return {
        type: 'GET',
        payload,
    };
};