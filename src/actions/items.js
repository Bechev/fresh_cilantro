
export function addItem(item){
    return { 
        type: 'ADD_ITEM',
        payload: item,
        };
};

export function removeItem(item){
    return { 
        type: 'REMOVE_ITEM',
        payload: item };
};

export function fetchItems(item){
    return { 
        type: 'FETCH_ITEMS',
        payload: items,
        };
};