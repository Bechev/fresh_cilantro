export default function itemsReducer(state = [], action) {


    switch (action.type) {

        case 'ADD_ITEM':
            console.log("Added an item", action.payload);
            console.log(action.item)
            return  [].concat(state, action.payload)
        
        case 'REMOVE_ITEM':
            console.log("Removed an item", action.payload);
            return state.filter((val) => val.id !== action.payload.id)

        case 'FETCH_ITEMS':
            console.log("fetched items", action.payload);
            return action.payload
        
        default:
            return state;
    }
}