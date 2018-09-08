
export function addItem(item){
    return { 
        type: 'ADD_ITEM',
        payload: item,
        };
        // item: item };
};

export function removeItem(item){
    return { 
        type: 'REMOVE_ITEM',
        payload: item };
};