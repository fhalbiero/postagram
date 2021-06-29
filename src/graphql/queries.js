

export const getPost = `
  query GetPost($id: ID!) {
    getPost(id: $id) {
      id
      name
      location
      description
      image
      owner
      createdAt
      updatedAt
      comments {
        items {
          id
          message
          owner
          createdAt
          updatedAt
        }
        nextToken
      }
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
        owner
        createdAt
        updatedAt
        comments {
          nextToken
        }
      }
      nextToken
    }
  }
`;
export const getComment = `
  query GetComment($id: ID!) {
    getComment(id: $id) {
      id
      message
      owner
      createdAt
      updatedAt
    }
  }
`;
export const listComments = `
  query ListComments(
    $filter: ModelCommentFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listComments(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        message
        owner
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
