const express = require('express');
const bodyParser = require('body-parser');
const graphqlHttp = require('express-graphql');
const { buildSchema } = require('grapql');

const app = express();

app.use(bodyParser.json());

app.use('/graphql', graphqlHttp({
    schema: buildSchema(`
    type RootQuery {
        event: [String!]!
    }

    type RootMutation {
         createEvent(name: String!): String
    }
       schema {
        query: RootQuery
        mutation: RootMutation
       }
    `),
    rootValue: {
        event: () => {
            return ['Accra', 'Korle-Bu', 'Madina'];
        },
        createEvent: (args) => {
            const eventName = args.name;
            return eventName;
        }
    },
    graphiql: true
}));

app.listen(3000);