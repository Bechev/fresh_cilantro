export default function itemsReducer(state = [], action) {


    switch (action.type) {

        case 'ADD_ITEM':
            console.log("Added an item", state.items);
            console.log(action.item)
            return  [].concat(state, action.payload)
        
        case 'REMOVE_ITEM':
            console.log("Removed an item", state.items);
            return state.filter((val) => val !== action.payload)
        
        default:
            return state;
    }
}