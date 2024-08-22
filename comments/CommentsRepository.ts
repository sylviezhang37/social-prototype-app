import { URL } from "../constants/config";
import Comment from "./Comment";

export default class CommentsRepository {
  async getComments({ postId }: { postId: string }): Promise<Comment[]> {
    const response = await fetch(`${URL}/posts/${postId}/comments`);
    return response.json();
  }
}
