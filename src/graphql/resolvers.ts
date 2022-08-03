import {listings} from "../../data/listings";


export const resolvers = {
    Query: {
        listings : ()=>{
            return listings;
        }
    },

    Mutation : {
        deleteListing : (_root:undefined , {id} : {id : string}) => {
            for (let i = 0 ; i < listings.length ; i++ ) {
                if(listings[i].id === id) {
                    return listings.slice(i , 1)[0];
                }
            }
        }
    }
}