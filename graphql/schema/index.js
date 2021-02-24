const { buildSchema } = require("graphql");
// const Schema = require('./schema/schame.graphql');

module.exports = buildSchema(`
    type Users {
        _id: ID!
        Username: String!
        Email: String!
        FName: String!
        LName: String!
        Password: String!
        UserType: String!
        Image: String
    }

    type AuthData {
        userId: ID!
        userType: String!
        token: String!
        tokenExpiration: Int
    }

    type Transaction {
        _id: ID!
        UserId: Users!
        DropAddress: String!
        PickAddress: String!
        DropLat: Float!
        DropLong: Float!
        PickLat: Float!
        PickLong: Float!
        HubLocated: String!
        Notes: String!
    }

    input CreateAccount {
        Username: String!
        Email: String!
        FName: String!
        LName: String!
        Password: String!
        UserType: String!
    }

    input CreateTransaction {
        UserId: String!
        DropAddress: String!
        PickAddress: String!
        DropLat: Float!
        DropLong: Float!
        PickLat: Float!
        PickLong: Float!
        HubLocated: String!
        Notes: String!
    }

    type AllQueries {
        login(Username: String, Password: String): AuthData!
        Transaction(Hub: String): Transaction
        AllTransactions: Transaction
        Profile(userId: String): Users
    }
    
    type AllMutations {
        CreateAccount(newAccount: CreateAccount): Users
        CreateTransaction(newTransaction: CreateTransaction): Transaction
    }

    schema {
        query: AllQueries
        mutation: AllMutations
    }
`);