import { IResolverObject } from "apollo-server";

const books = []

const resolvers: IResolverObject = {
    Query: {
      books: () => [
        {
            title: "Hello World",
            author: "Me and Only Me",
            description: "This is a test.",
        }
      ],
    },
};

export default resolvers;
