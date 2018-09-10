
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

export const checkout = () => {
    return { type: 'CHECKOUT' };
};

export const empty_bag = () => {
    return { type: 'EMPTY_BAG' };
};