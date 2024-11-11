import gql from "graphql-tag";
import graphqlClient from "@/services/apolloClient";

export const getSellersByProyect = async (projectId) => {
  const response = await graphqlClient.query({
    query: gql`
      query {
        users(
          where: {
            proyect_member: {
              Project: { id: { _eq: "${projectId}" } }
            }
            roll: { _eq: "SELLER" }
          }
        ) {
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
