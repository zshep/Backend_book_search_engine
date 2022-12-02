const { gql } = require('apollo-server-express');


// get this stuff from user-controller.js AND the models

const typeDefs =gql`
    type User {
        _id: ID
        username: String
        email: String
        password: String
        savedBooks: [Book]
    }

    type Book {
        bookId: ID
        authors: [String]
        description: String
        title: String
        image: String
        link: String

    }

    type Auth {
        token: ID!
        user: User
    }

    type Query {
        me: [User]!


    }

    type Mutation {
        login(email: String!, password: String!): Auth
        addUser(username: String!, email: String!): Auth
        # saveBook(authors:) -> create an input type to handle all parameteres, [authors], description, title, book id, image
        removeBook(bookId: ID): User
        
    }`;


module.exports = typeDefs;
