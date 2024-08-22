import React from "react";
import { View, Text } from "react-native";

import { SIZES, USER_COLORS } from "../../constants";
import styles from "./post-card.style";
import appstyles from "../../styles/app.style";

const PostCard: React.FC<{ title: string; body: string; userId: number; userName: string }> = ({
  title,
  body,
  userId,
  userName
}) => {
  return (
    <View style={styles.container}>
      <Text style={appstyles.header2}>{title}</Text>

      <View style={styles.bodyContainer}>
        <View style={appstyles.avatarContainer}>
          <View
            style={[
              appstyles.avatarImage,
              { backgroundColor: USER_COLORS[userId] },
            ]}
          />
        </View>

        <View style={styles.textContainer}>
          <Text
            style={[appstyles.body1Bold, { paddingTop: SIZES.xxSmall }]}
            numberOfLines={1}
          >
            {userName}
          </Text>
          <Text style={appstyles.body1}>{body}</Text>
        </View>
      </View>
    </View>
  );
};

export default PostCard;
