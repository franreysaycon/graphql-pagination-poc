import { IResolvers } from "apollo-server";
import BookResolver from "./book-resolver";

const resolvers: IResolvers[] = [
  BookResolver,
]

export default resolvers;
