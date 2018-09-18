
export function addItem(item, history){
    return (dispatch) => {
        dispatch({ type: 'START_ADDING_ITEM_REQUEST' });    
        return fetch("http://localhost:3000/items", {
            method: "POST",
            headers: {
                "Content-Type": "application/json; charset=utf-8"
            },
            body: JSON.stringify({
                item: item
            })
        })
        .then(response => response.json())
        .then(item => { 
            dispatch({type:'ADD_ITEM', payload:item}),
            history.push('/items/'+item.id)
        })
    }    
};



export function removeItem(item){
    return (dispatch) => {
        dispatch({ type: 'START_ADDING_ITEM_REQUEST' });  
        return fetch("http://localhost:3000/items/"+item.id, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json; charset=utf-8"
            },
            body: JSON.stringify({
                id: item.id
            })
        })
        .then(response => response.json())
        .then(item => dispatch({type:'REMOVE_ITEM', payload:item}))
    }
}

export function fetchItems(items){
    return { 
        type: 'FETCH_ITEMS',
        payload: items,
        };
}