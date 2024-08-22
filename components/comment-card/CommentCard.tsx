import React from "react";
import { View, Text } from "react-native";

import { SIZES } from "@/constants";
import Comment from "@/comments/Comment";
import appstyles from "@/styles/app.style";
import styles from "./comment-card.style";

const CommentCard: React.FC<{ comment: Comment }> = ({ comment }) => (
  <View style={styles.container}>
    <View style={styles.textContainer}>
      <Text style={appstyles.body1Bold}>{comment.email}</Text>
      <Text style={[appstyles.body1, { paddingTop: SIZES.xxSmall }]}>
        {comment.body}
      </Text>
    </View>
  </View>
);

export default CommentCard;
