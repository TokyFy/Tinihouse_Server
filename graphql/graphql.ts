import { GraphQLObjectType , GraphQLString , GraphQLSchema, GraphQLFloat, GraphQLInt, GraphQLID, GraphQLNonNull, GraphQLList } from 'graphql';

import {listings} from '../data/listings'

const Listing = new GraphQLObjectType({
    name: "Listing",
    fields: {
        id: { type: new GraphQLNonNull(GraphQLID)},
        title: { type: new GraphQLNonNull(GraphQLString) },
        image: { type: new GraphQLNonNull(GraphQLString) },
        address: { type: new GraphQLNonNull(GraphQLString) },
        price: { type: new GraphQLNonNull(GraphQLInt) },
        numOfGuests: { type: new GraphQLNonNull(GraphQLInt) },
        numOfBeds: { type: new GraphQLNonNull(GraphQLInt) },
        numOfBaths: { type: new GraphQLNonNull(GraphQLInt) },
        rating: { type: new GraphQLNonNull(GraphQLFloat) }
    }
});


const query = new GraphQLObjectType({
    name: "Query",
    fields: {
        listings: {
            type: new GraphQLNonNull(new GraphQLList(new GraphQLNonNull(Listing))),
            resolve: () => {
                return listings;
            }
        },
        listing : {
            type : new GraphQLNonNull(Listing),
            args : {
              id : { type : new GraphQLNonNull(GraphQLID)},
            },
            resolve: (_root , {id})=> {
                console.log(_root);
                return listings.find(listing => listing.id === id);
            }
        }
    }
});

const mutation = new GraphQLObjectType(
    {
        name : "Mutation" ,
        fields : {
            hello : {
                type : GraphQLString,
                resolve : ()=> 'Hello from the Mutation'
            }
        }
    }
)

export const schema = new GraphQLSchema({query , mutation})