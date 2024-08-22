import { URL } from "../constants/config";
import Post from "./Post";

export default class PostsRepository {
  async getPosts(): Promise<Post[]> {
    const response = await fetch(`${URL}/posts`);
    return response.json();
  }

  async getPost({ id }: { id: string }): Promise<Post> {
    const response = await fetch(`${URL}/posts/${id}`);
    return response.json();
  }
}
