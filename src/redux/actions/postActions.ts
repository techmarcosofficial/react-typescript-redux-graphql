import { postConstants } from "../constants";

export const postsAction = (posts: any) => {
  return {
    type: postConstants.FETCH_POSTS,
    posts,
  }
}

export const _postAction = (post: any) => {
  return {
    type: postConstants.FETCH_POST,
    post,
  }
}