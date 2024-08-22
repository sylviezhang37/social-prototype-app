import React from "react";
import { View, Text, FlatList, ScrollView } from "react-native";

import CommentCard from "../comment-card/CommentCard";
import Comment from "@/comments/Comment";
import styles from "./comments-section.style";
import appstyles from "@/styles/app.style";


const CommentsSection: React.FC<{ comments: Comment[] }> = ({ comments }) => {
  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <Text style={appstyles.header2}>Comments</Text>
      </View>

      {comments.map((comment) => (
        <CommentCard comment={comment} key={`${comment.id}`} />
      ))}

      <View style={appstyles.emptyWhiteSpace} />
    </View>
  );
};

export default CommentsSection;
