import { IResolvers } from "apollo-server";

const BookResolver: IResolvers = {
    Query: {
        books: (_, { first, after, last, before }) => ({
            pageInfo: {
                hasNextPage: true,
                hasPreviousPage: true,
                startCursor: "start",
                endCursor: "end",
            },
            edges: [
                {
                    cursor: "start",
                    node: {
                        id: "id",
                        title: "Hello World",
                        author: "Me and Only Me",
                        description: "This is a test.",
                    }
                }
            ]
        })
    },
};

export default BookResolver;
