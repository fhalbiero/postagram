export const getPost = `
  query GetPost($id: ID!) {
    getPost(id: $id) {
      id
      name
      location
      description
      image
      createdAt
      updatedAt
    }
  }
`;

export const listPosts = `
  query ListPosts(
    $filter: ModelPostFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listPosts(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        location
        description
        image
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
