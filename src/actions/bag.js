
export function addItemToBag(item){
    return { 
        type: 'ADD_ITEM_TO_BAG',
        payload: item,
        };
};

export function removeItemToBag(item){
    return { 
        type: 'REMOVE_ITEM_TO_BAG',
        payload: item,
    };
};

export const checkout = (name) => {
    return { type: 'CHECKOUT_TO_BAG' };
};

export const empty = (name) => {
    return { type: 'EMPTY_BAG' };
};