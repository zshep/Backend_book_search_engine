const { gql } = require('apollo-server-express');


// get this stuff from user-controller.js AND the models

const typeDefs =gql`
    type User {
        _id: ID
        username: string
        email: string
        password: string
        savedBooks: [Book]
    }

    type Book {
        bookId: number
        authors: [String]
        description: string
        title: string
        image: string
        link: string

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
        removeBook(bookId: number): User
        
    }


`;

