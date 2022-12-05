import { gql } from '@apollo/client';

export const LOGIN_USER = gql`
    mutation login($email: string!, $password: string!){
        login(email: $email, password: $password) {
            token
            user {
                _id
                username
                savedBooks
            }
        }
    }
`;

export const ADD_USER = gql`
    mutation adduser($username: string!, $password: string!, $email: string!){
        adduser(username: $username, password: $password, email: $email) {
            token
            user {
                _id
                username
              }
        }
    }
`;

export const SAVE_BOOK= gql`
    mutation saveBook($content: BookInfo!){
        saveBook(input: $input) {
            bookId
            authors
            description
            title
            image
            link

        }

    }

`;

export const REMOVE_BOOK = gql`
    mutation removeBook($bookId: ID!){
        removeBook(bookId!: $bookId){
            bookId
            title

        }

    }

`;