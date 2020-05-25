import { gql } from "apollo-server";
import BookSchema from "./book-schema";

const LinkSchema = gql`
    type PageInfo {
        hasNextPage: Boolean!
        hasPreviousPage: Boolean!
        startCursor: String!
        endCursor: String!
    }

    type Query {
        _: Boolean
    }
    type Mutation {
        _: Boolean
    }
    type Subscription {
        _: Boolean
    }
`;

export default [
    LinkSchema,
    BookSchema,
];
