require("dotenv").config();

const { ApolloServer } = required('apollo-server');
const mongoose = required('mongoose');

const MONGODB = process.env.MONGODB_KEY;

// The Apollo Server
// typeDefs: GraphQL Type Definations.
// resovers: How do we resolve queries / mutations

const server = new ApolloServer({
    typeDefs,
    resolvers
});

mongoose.connect(MONGODB, {useNewUrlParser: true}).then(() => {
    console.log("MongoDB Connection sucessful");
    return server.listen({port: 5000})
})