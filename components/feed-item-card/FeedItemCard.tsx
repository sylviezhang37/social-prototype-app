import React from "react";
import { View, Text, Pressable, PressableProps } from "react-native";

import styles from "./feed-item-card.style";
import appstyles from "../../styles/app.style";
import { FeedItem } from "@/posts/FeedService";
import { USER_COLORS } from "../../constants";

interface FeedItemCardProps extends PressableProps {
  feedItem: FeedItem;
  userId: number;
  userName: string;
}

const FeedItemCard: React.FC<FeedItemCardProps> = ({
  feedItem,
  userId,
  userName,
  onPress,
}) => (
  <Pressable style={styles.container} onPress={onPress}>
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
        <Text style={appstyles.body2} numberOfLines={1}>
          {userName}
        </Text>
        <Text style={appstyles.body1Bold} numberOfLines={1}>
          {feedItem.title}
        </Text>
        <Text style={appstyles.body1} numberOfLines={3}>
          {feedItem.body}
        </Text>
      </View>
    </View>
  </Pressable>
);

export default FeedItemCard;
