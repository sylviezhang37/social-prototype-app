import { StyleSheet } from "react-native";
import { SIZES } from "../../constants";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "transparent",
    paddingHorizontal: SIZES.small,
  },
  headerContainer: {
    alignItems: "flex-start",
    backgroundColor: "transparent",
    paddingHorizontal: SIZES.small,
    paddingTop: SIZES.small
  },
});

export default styles;
