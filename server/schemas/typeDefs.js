const { gql } = require('apollo-server-express');


// get this stuff from user-controller.js AND the models

const typeDefs =gql`
   #defining user schema
    type User {
        _id: ID
        username: String
        email: String
        password: String
        savedBooks: [Book]
    }
    #defining Book schema
    type Book {
        bookId: ID
        authors: [String]
        description: String
        title: String
        image: String
        link: String
    }
    #defining Auth schema, used for authentication
    type Auth {
        token: ID!
        user: User
    }
    # setting up query for finding users
    type Query {
        me: [User]!
    }

    # setting input to handle saveBook Mutation
     input BookInfo {
        bookId: ID
        authors: [String]
        description: String
        title: String
        image: String
        link: String
    }

    # creating mutations 
    type Mutation {
        login(email: String!, password: String!): Auth
        addUser(username: String!, email: String!): Auth
        saveBook(content: BookInfo!): User 
        removeBook(bookId: ID): User
        
    }`;


module.exports = typeDefs;
