const COLORS: { [key: string]: string } = {
  white: '#FFFFFF',
  black: '#000000',
  purple: '#8259F6',
  lightPurple: '#CCBAFF',
  grey: "#ECECEC",
  lightGrey: "#FAFAFA"
};

const USER_COLORS: { [key: number]: string } = {
  1: '#FF5733',
  2: '#33FF57',
  3: '#3357FF',
  4: '#FF33A6',
  5: '#33FFF5',
  6: '#FFBD33',
  7: '#8D33FF',
  8: '#FF5733', 
  9: '#33FFBD',
  10: '#FF33F6',
};

const FONT: { [key: string]: string } = {
  inter: "Inter",
  interBold: "InterBold",
  WS: "WS",
  WSSemiBold: "WSSemiBold",
  WSBold: "WSBold",
};

const SIZES: { [key: string]: number } = {
  xxSmall: 5,
  xSmall: 12,
  small: 14,
  medium: 15, // text body
  large: 16,
  xLarge: 22,
  xxLarge: 27,
};

const SHADOWS: { [key: string]: { 
  shadowColor: string; 
  shadowOffset: { width: number; height: number }; 
  shadowOpacity: number; 
  elevation: number;
}} = {
  comment: {
    shadowColor: COLORS.black,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.25,
    elevation: 4, 
  },
  avatar: {
    shadowColor: "#6E7486",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.24,
    elevation: 6, 
  }
};

export { COLORS, FONT, SIZES, SHADOWS, USER_COLORS };