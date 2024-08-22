import { URL } from "../constants/config";
import User from "./User";

export default class UsersRepository {
  async getUsers(): Promise<User[]> {
    const response = await fetch(`${URL}/users`);
    return response.json();
  }

  async getUser({ id }: { id: string }): Promise<User> {
    const response = await fetch(`${URL}/users/${id}`);
    return response.json();
  }
}
