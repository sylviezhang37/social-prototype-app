import { StyleSheet, Dimensions } from "react-native";

import { COLORS, SHADOWS, SIZES } from "../../constants";

const styles = StyleSheet.create({
  container: {
    justifyContent: "space-between",
    alignItems: "flex-start",
    paddingLeft: "8%",
    paddingBottom: SIZES.xLarge,
    borderRadius: SIZES.medium,
  },
  textContainer: {
    width: Dimensions.get('window').width * 0.8,
    backgroundColor: COLORS.lightGrey, 
    borderRadius: SIZES.medium,
    paddingHorizontal: SIZES.large,
    paddingVertical: SIZES.small,
    ...SHADOWS.comment,
  }
});

export default styles;
