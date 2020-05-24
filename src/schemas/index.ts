import { gql } from "apollo-server";
import BookSchema from "./book-schema";

const LinkSchema = gql`
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
