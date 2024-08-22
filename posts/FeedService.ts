import User from "@/users/User";
import UsersRepository from "../users/UsersRepository";
import Post from "./Post";
import PostsRepository from "./PostsRepository";

export interface FeedItem extends Post {
  user: User;
}

export default class FeedService {
  private usersRepository: UsersRepository;
  private postsRepository: PostsRepository;

  constructor() {
    this.usersRepository = new UsersRepository();
    this.postsRepository = new PostsRepository();
  }

  async fetchFeed(): Promise<FeedItem[]> {
    const usersPromise = this.usersRepository.getUsers();
    const postsPromise = this.postsRepository.getPosts();

    const [users, posts]: [User[], Post[]] = await Promise.all([
      usersPromise,
      postsPromise,
    ]);

    const feed: FeedItem[] = posts.map((post) => {
      const user = users.find((user) => user.id === post.userId) || {
        id: -1,
        username: "Unknown User",
      };

      return {
        ...post,
        user: user,
      };
    });

    return feed;
  }
}
