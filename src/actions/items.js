

export function addItem(item){
    fetch("http://localhost:3000/items.json", {
        method: "POST",
        headers: {
            "Content-Type": "application/json; charset=utf-8"
        },
        body: JSON.stringify({
            name: item.name,
            brand: item.brand,
            description: item.description
          })
    })
    return { 
        type: 'ADD_ITEM',
        payload: item,
        };
};

export function removeItem(item){
    fetch("http://localhost:3000/items/"+item.id, {
        method: "DELETE",
        headers: {
            "Content-Type": "application/json; charset=utf-8"
        },
        body: JSON.stringify({
            id: item.id
          })
    })
    return { 
        type: 'REMOVE_ITEM',
        payload: item };
};

export function fetchItems(items){
    return { 
        type: 'FETCH_ITEMS',
        payload: items,
        };
};