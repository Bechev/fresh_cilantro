export default function bagReducer(state = [
    {id:1, name:"Kelly", brand:"Hermes", description: "Empty description"},
    {id:6, name:"Sneakers", brand:"Gucci", description: "Empty description"},
    {id:7, name:"Birkin", brand:"Hermes", description: "Empty description"},
], action) {


    switch (action.type) {

        case 'ADD_ITEM_TO_BAG':
            console.log(action.payload)
            return  [].concat(state, action.payload)
        
        case 'REMOVE_ITEM_TO_BAG':
            console.log(action)
            return state.filter((el) => {
                return el.id !== action.payload
            })

        case 'CHECKOUT':
            console.log("Checked-out", state.bag);
            return [] 

        case 'EMPTY_BAG':
            console.log("Emptied bag", state.bag);
            return [] 
            
        default:
            return state;
    }
}