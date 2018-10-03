
export function addItem(item, history){
    console.log('C')
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
            console.log('D')
            dispatch({type:'ADD_ITEM', payload:item}),
            history.push('/items/'+item.id)
        })
    }
    console.log('E')    
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

export function fetchItems(){
    return(dispatch) =>{
        dispatch ({type:'START_FETCHING_ITEMS'}) 
        return fetch("http://localhost:3000/items")
        .then(response => response.json())
        .then(items => dispatch({type:'FETCH_ITEMS', payload:items}))
        }
}

