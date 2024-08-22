import React from "react";
import { Image, Pressable, GestureResponderEvent } from "react-native";
import styles from "./headerbtn.style";

const HeaderBtn = ({
  uri,
  onPress,
}: {
  uri: number;
  onPress: (event: GestureResponderEvent) => void;
}) => {
  return (
    <Pressable style={styles.btnContainer} onPress={onPress}>
      <Image source={uri} resizeMode="cover" style={styles.btnImgStyle} />
    </Pressable>
  );
};

export default HeaderBtn;
