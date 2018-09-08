export default function itemsReducer(state = [
    {name:"Kelly", brand:"Hermes"},
    {name:"Mini", brand:"Chanel"},
    {name:"WOC", brand:"Chanel"},
    {name:"Espadrilles", brand:"Chanel"},
    {name:"Phone case", brand:"Louis Vuiton"},
    {name:"Sneakers", brand:"Gucci"},
    {name:"Birkin", brand:"Hermes"},
    {name:"Kelly", brand:"Hermes"}
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