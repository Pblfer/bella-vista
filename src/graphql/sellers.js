import gql from "graphql-tag";
import graphqlClient from "@/services/apolloClient";

export const getSellersByProyect = async (projectId) => {
  const response = await graphqlClient.query({
    query: gql`
      {
  users(where: {proyect_member: {Project: {id: {_eq: "${projectId}"}}}, roll: {_eq: "SELLER"}, _and: {InternalUser: {_eq: true}}}) {
    email
  }
}

    `,
  });
  return response.data.users;
};

export default {
  getSellersByProyect,
};
