export default function itemsReducer(state = [
    {id:1, name:"Kelly", brand:"Hermes", description: "Empty description"},
    {id:2, name:"Mini", brand:"Chanel", description: "Empty description"},
    {id:3, name:"WOC", brand:"Chanel", description: "Empty description"},
    {id:4, name:"Espadrilles", brand:"Chanel", description: "Empty description"},
    {id:5, name:"Phone case", brand:"Louis Vuiton", description: "Empty description"},
    {id:6, name:"Sneakers", brand:"Gucci", description: "Empty description"},
    {id:7, name:"Birkin", brand:"Hermes", description: "Empty description"},
], action) {


    switch (action.type) {

        case 'ADD_ITEM':
            console.log("Added an item", action.payload);
            console.log(action.item)
            return  [].concat(state, action.payload)
        
        case 'REMOVE_ITEM':
            console.log("Removed an item", state.items);
            return state.filter((val) => val !== action.payload)
        
        default:
            return state;
    }
}