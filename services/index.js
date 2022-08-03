import { request, gql } from 'graphql-request'

const graphqlAPI = process.env.NEXT_PUBLIC_HYGRAPH_ENDPOINT

export const getProjects = async () => {
    const query = gql`
        query GetProjects {
            projects {
                id
                createdAt
                description
                demo
                name
                image {
                    url
                }
                slug
                sourceCode
                tags
            }
        }
    `

    const result = await request(graphqlAPI, query)

    return result.projects
}



export const getPosts = async () => {
    const query = gql`
   query MyQuery {
  postsConnection(orderBy: publishedAt_DESC) {
    edges {
      cursor
      node {
        author {
          bio
          name
          id
          picture {
            url
          }
        }
        excerpt
        createdAt
        slug
        title
        coverImage {
          url
        }
      }
    }
  }
}
  `;

    const result = await request(graphqlAPI, query);

    return result.postsConnection.edges;
};



export const getPostDetails = async (slug) => {
    const query = gql`
    query GetPostDetails($slug : String!) {
      post(where: {slug: $slug}) {
        title
        excerpt
        coverImage {
          url
        }
        author{
          name
          bio
          picture {
            url
          }
        }
        createdAt
        slug
        content {
          raw
        }
        
      }
    }
  `;

    const result = await request(graphqlAPI, query, { slug });

    return result.post;
};
