export default function bagReducer(state = [{name:"Kelly", brand:"Hermes"}], action) {


    switch (action.type) {

        case 'ADD_ITEM_TO_BAG':
            console.log("Added an item to the bag", state.bag);
            console.log(action.item)
            return  [].concat(state, action.payload)
        
        case 'REMOVE_ITEM_TO_BAG':
            console.log("Removed an item to the bag", state.bag);
            return state.filter((val) => val !== action.payload)

        case 'CHECKOUT':
            console.log("Checked-out", state.bag);
            return {} // To be updated

        case 'EMPTY_BAG':
            console.log("Emptied bag", state.bag);
            return {} // To be updated
            
        default:
            return state;
    }
}