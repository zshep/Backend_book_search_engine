const { AuthenticationError } = require('apollo-server-express');
const { User } = require('../models');
const { signToken } = require('../utils/auth');

//To do: All of it

const resolvers = {
    Query: {
        me: async (parent, args, context) => {
            return User.findOne({ 
                _id: context.User._id
            })
        }
    },

    Mutation: {
        login: async (parent, { email, password }) => {
            const user = await User.findOne({ email });

            if (!user) {
                throw new AuthenticationError('No profile with this username found!');
            }

            const correctPw = await password.isCorrectPassword(password);

            if (!correctPw) {
                throw new AuthenticationError('Incorrect password!');
            }

            const token = signToken(user);
            return { token, user };
        },

        addUser: async(parent, { username, email, password}) =>{
            
            return //Auth type
        },
        //look into input type to handle lots of parameters
        saveBooks: async (parent, { input })=> {

            return //user type
        },

        removeBook: async(parnt, { bookId }) => {

            return //user
        }
    }
}

module.exports = resolvers;

