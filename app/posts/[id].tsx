import React from "react";
import { useEffect, useState } from "react";
import { Text, View, ActivityIndicator, ScrollView } from "react-native";
import { useRouter, useLocalSearchParams } from "expo-router";

import { HeaderBtn, PostCard, CommentsSection } from "../../components";
import CommentsRepository from "../../comments/CommentsRepository";
import PostsRepository from "../../posts/PostsRepository";
import UsersRepository from "@/users/UsersRepository";
import Comment from "@/comments/Comment";
import Post from "@/posts/Post";
import User from "@/users/User";
import appstyles from "../../styles/app.style";
import { COLORS } from "../../constants";
import { left } from "@/constants/icons";

const commentsRepository = new CommentsRepository();
const postsRepository = new PostsRepository();
const usersRepository = new UsersRepository();

const PostPage = () => {
  const router = useRouter();
  const params = useLocalSearchParams();

  const [comments, setComments] = useState<Comment[]>([]);
  const [post, setPost] = useState<Post | null>(null);
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    async function fetchData() {
      try {
        setComments(
          await commentsRepository.getComments({
            postId: params.id as string,
          })
        );

        const fetchedPost = await postsRepository.getPost({
          id: params.id as string,
        });
        setPost(fetchedPost);
        setUser(
          await usersRepository.getUser({ id: String(fetchedPost.userId) })
        );
      } catch (error: any) {
        setError(error);
      } finally {
        setLoading(false);
      }
    }
    fetchData();
  }, []);

  return (
    <View style={{ flex: 1, backgroundColor: COLORS.white }}>
      <HeaderBtn uri={left} onPress={() => router.back()} />

      <ScrollView>
        {loading ? (
          <ActivityIndicator size="large" color={COLORS.purple} />
        ) : error ? (
          <Text>
            {" "}
            Unable to load post details and comments: {error!.message}
          </Text>
        ) : (
          <>
            <PostCard
              title={post!.title}
              body={post!.body}
              userId={post!.userId}
              userName={user!.username}
            />

            <View style={appstyles.divider} />

            <CommentsSection comments={comments} />
          </>
        )}
      </ScrollView>
    </View>
  );
};

export default PostPage;
