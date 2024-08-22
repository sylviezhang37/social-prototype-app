import { StyleSheet } from "react-native";
import { COLORS, SIZES, SHADOWS, FONT } from "../constants";

const appstyles = StyleSheet.create({
  container: {
    textAlign: "center",
  },
  backgroundContainer: {
    flex: 1,
  },
  cardsContainer: {
    flex: 3,
    backgroundColor: COLORS.white,
    borderRadius: 50,
  },
  errorContainer: {
    flex: 1,
    backgroundColor: COLORS.white,
    alignContent: "center",
  },
  avatarContainer: {
    width: 32,
    height: 32,
    backgroundColor: COLORS.white,
    borderRadius: SIZES.medium,
    marginLeft: SIZES.medium,
  },
  avatarImage: {
    width: "100%",
    height: "100%",
    borderRadius: 20,
    ...SHADOWS.avatar,
  },
  emptyWhiteSpace: {
    margin: SIZES.xSmall,
    backgroundColor: COLORS.white,
  },
  header1: {
    fontFamily: FONT.WSBold,
    fontSize: SIZES.xxLarge,
    lineHeight: SIZES.xLarge,
    padding: SIZES.small,
    color: COLORS.white,
    textAlign: "center",
    marginTop: "14%",
    marginBottom: "3%",
  },
  header2: {
    fontFamily: FONT.WSSemiBold,
    fontSize: SIZES.xLarge,
    lineHeight: SIZES.xLarge,
    paddingBottom: SIZES.xSmall,
    color: COLORS.black,
    textAlign: "center",
  },
  body1Bold: {
    fontFamily: FONT.interBold,
    fontSize: SIZES.medium,
    lineHeight: SIZES.large,
  },
  body1: {
    fontFamily: FONT.inter,
    fontSize: SIZES.small,
    lineHeight: SIZES.large,
  },
  body2: {
    fontFamily: FONT.inter,
    fontSize: SIZES.xSmall,
  },
  divider: {
    height: 2,
    backgroundColor: COLORS.grey,
    paddingHorizontal: 10,
  },
});

export default appstyles;
