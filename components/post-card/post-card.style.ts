import { StyleSheet } from "react-native";
import { COLORS, SIZES } from "../../constants";

const styles = StyleSheet.create({
  container: {
    padding: SIZES.small,
  },
  bodyContainer: {
    alignItems: "flex-start", 
    flexDirection: "row",
    backgroundColor: COLORS.white,
    paddingHorizontal: SIZES.xxSmall,
    paddingBottom: SIZES.medium,
  },
  textContainer: {
    flex: 1,
    backgroundColor: COLORS.white,
    marginHorizontal: SIZES.medium,
  },
});

export default styles;