import { IResolvers } from "apollo-server";

const BookResolver: IResolvers = {
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

export default BookResolver;
