import { ApolloServer } from "apollo-server";
import typeDefs from "../schemas";
import resolvers from "../resolvers";


const createServer = (): ApolloServer => {
    return new ApolloServer({ typeDefs, resolvers });
}

export default createServer;
