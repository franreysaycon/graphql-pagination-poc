import { gql } from "apollo-server";

const BookSchema = gql`
    type Book {
        title: String
        author: String
        description: String
    }

    extend type Query {
        books: [Book]
    }
`;

export default BookSchema;
