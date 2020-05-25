import { gql } from "apollo-server";

const BookSchema = gql`
    type Book {
        id: ID!
        title: String!
        author: String!
        description: String!
    }

    type BookEdge {
        cursor: String!
        node: Book
    }

    type BookConnection {
        edges: [BookEdge]!
        pageInfo: PageInfo!
    }

    extend type Query {
        books(first: Int,  after: String, last: Int, before: String): BookConnection!
    }
`;

export default BookSchema;
