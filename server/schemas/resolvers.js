const { AuthenticationError } = require('apollo-server-express');
const { User } = require('../models');
const { signToken } = require('../utils/auth');

const resolvers = {
    Query: {
        // using the Context arguement to grab the user that is already logged in
        me: async (parent, args, context) => {
            const OneUser = await User.findOne( {
                _id: context.User._id
            })

            if (!OneUser) {
                return res.status(400).json({ message: 'This user does not exist'})
            }
                        return OneUser;
        }
    },

    // EXTRA TO DO: Add in exra queries to see if they show up in Apollo

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

        addUser: async(parent, args ) =>{
            const user = await User.create(args);
            const token = signToken(user);

            return { token, user }
        },
        //look into input type to handle lots of parameters
        saveBook: async (parent, { input }, context)=> {
            const UserUpdate = await User.findOneAndUpdate(
                {_id: context.user._id },
                { $addToSet: { savedBooks: input} }
               
            );

            return UserUpdate
        },

        removeBook: async(parent, { bookId }, context ) => {
            const removeBook = await User.findOneAndUpdate(
                {_id: context.user._id},
                { $pull: { savedBooks: { bookId } } },
                {new: true}   
            );
            return removeBook;
        }
    }
}

module.exports = resolvers;

