import { StyleSheet } from "react-native";

import { SIZES } from "../../constants";

const styles = StyleSheet.create({
  // container of each postcard
  container: {
    flex: 1,
    backgroundColor: "transparent",
    justifyContent: "space-between",
    alignItems: "flex-start",
    flexDirection: "row",
    marginTop: SIZES.small,
  },
  bodyContainer: {
    flex: 1,
    alignItems: "flex-start",
    flexDirection: "row",
    backgroundColor: "transparent", 
    paddingHorizontal: SIZES.small,
    paddingVertical: SIZES.small,
  },
  textContainer: {
    flex: 1,
    backgroundColor: "transparent",
    marginHorizontal: SIZES.small,
  },
});

export default styles;
