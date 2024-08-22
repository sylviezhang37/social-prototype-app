import React from "react";
import { useEffect, useState } from "react";
import { useRouter } from "expo-router";
import { View, Text, ActivityIndicator, ScrollView } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

import { FeedItemCard } from "../components";
import { COLORS } from "../constants";
import FeedService, { FeedItem } from "../posts/FeedService";
import styles from "../styles/app.style";
import appstyles from "../styles/app.style";

const feedService = new FeedService();

const App = () => {
  const router = useRouter();
  const [data, setData] = useState<FeedItem[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    async function fetchData() {
      try {
        setData(await feedService.fetchFeed());
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
      <LinearGradient
        colors={[COLORS.purple, COLORS.white]}
        style={styles.backgroundContainer}
      >
        <ScrollView style={{ flex: 1 }}>
          <Text style={styles.header1}>Posts</Text>

          <View style={styles.cardsContainer}>
            <View style={styles.emptyWhiteSpace} />

            {loading ? (
              <ActivityIndicator size="large" color={COLORS.purple} />
            ) : error ? (
              <Text style={appstyles.errorContainer}>Unable to load posts: {error.message}</Text>
            ) : (
              data.map((feedItem) => {
                return (
                  <FeedItemCard
                    feedItem={feedItem}
                    userId={feedItem.userId}
                    userName={feedItem.user.username}
                    onPress={() =>
                      router.push({
                        pathname: "/posts/[id]",
                        params: { id: feedItem.id },
                      })
                    }
                    key={`post-id-${feedItem.id}`}
                  />
                );
              })
            )}

            <View style={appstyles.emptyWhiteSpace} />
          </View>
        </ScrollView>
      </LinearGradient>
    </View>
  );
};

export default App;
