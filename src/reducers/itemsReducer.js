export default function itemsReducer(state = [
    {name:"Kelly", brand:"Hermes", description: "Empty description"},
    {name:"Mini", brand:"Chanel", description: "Empty description"},
    {name:"WOC", brand:"Chanel", description: "Empty description"},
    {name:"Espadrilles", brand:"Chanel", description: "Empty description"},
    {name:"Phone case", brand:"Louis Vuiton", description: "Empty description"},
    {name:"Sneakers", brand:"Gucci", description: "Empty description"},
    {name:"Birkin", brand:"Hermes", description: "Empty description"},
], action) {


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