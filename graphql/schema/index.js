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
        Phone: String!
        Vehicle: String
        PlateNo: String
        Decals: String
        Hub: String
    }

    type Hubs {
        _id: ID!
        Hub: String!
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
        HubLocated: String
        Notes: String!
        Status: String
        Rate: String
        Driver: Users
        Date: String
    }

    type Decals {
        _id: ID!
        Pic1: String!
        Pic2: String!
        Date: String!
    }

    input CreateAccount {
        Username: String!
        Email: String!
        FName: String!
        LName: String!
        Password: String!
        UserType: String!
        Phone: String!
        Vehicle: String
        PlateNo: String
        Decals: String
        Hub: String
    }

    input CreateTransaction {
        UserId: String!
        DropAddress: String!
        PickAddress: String!
        DropLat: Float!
        DropLong: Float!
        PickLat: Float!
        PickLong: Float!
        Notes: String!
        Status: String!
    }

    input CreateDecalUpdate {
        UserId: String!
        Pic1: String!
        Pic2: String!
        Date: String!
    }

    type AllQueries {
        login(Username: String, Password: String): AuthData!
        TransactionsByHub(Hub: String): [Transaction!]!
        DriverTrip(userId: String): Transaction
        AllTransactions: [Transaction!]!
        RequestTransactions: [Transaction!]!
        ProfileTransaction(User: String): [Transaction!]!
        UserPendingTransactions(User: String): Transaction
        UserAcceptedTransactions(User: String): Transaction
        Searching(TripId: String): Transaction
        Profile(userId: String): Users
        AllHubs: [Hubs!]!
        AllDecals: [Decals!]!
    }
    
    type AllMutations {
        CreateAccount(newAccount: CreateAccount): Users
        CreateTransaction(newTransaction: CreateTransaction): Transaction
        CreateHub(Hub: String): Hubs
        EditStatus(account: String, status: String, rider: String, hub: String): Transaction
        SendDecals(newDecal: CreateDecalUpdate): Decals
    }

    schema {
        query: AllQueries
        mutation: AllMutations
    }
`);