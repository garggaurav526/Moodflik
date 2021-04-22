import {StyleSheet, Dimensions} from 'react-native';
const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

const globalColors = {
  primary: '#00234b',
  secondary: '#01377d',
  black: '#000000',
  white: '#fff',
  WHITE: '#ffffff',
  gray: '#333333',
  statusBarGrey:'#273238',
  lightGreen: '#1bdab5',
  lightGray: '#c4c4c4',
  lighterGray: '#e4e4e4',
  lightRed: '#ff6473',
  borderPrimary: '#d2ddec',
  textPrimary: '#262626',
  textSecondary: '#262626',
  textDarkGrey: '#0c0d0d',
  textTimeline: '#b2b2b2',
  textLightGrey: '#504f55',
  textDarkBlack: '#272328',
  btnTextPrimary: '#1bdab5',
  blue: '#03377D',
  modalCloseColor: '#707070',
  modalBorderColor: '#02dad7',
  lightgreen: '#e8f2ff',
  bgColor: '#f3f3f4',
  colorRed: 'red',
  cyanBlue:'#177bc9',
  GREYLOGIN:'#3b3c4e',
  NEWGRAY:'#272727',
  LIGHTBORDER: 'rgba(155, 155, 155, 0.5)',
  GREYNOTCH:'#f0eff5',
  TEXTBORDER:'#e9e9e9',




};

var globalHeadingFont = {
  h1: 22,
  h2: 18,
  h3: 16,
  h4: 14,
  h5: 12,
  h6: 10,
  h7:15,
  p: 16,
};

var globalFontFamily = {
  fontNunitoBold: 'Nunito-Bold',
  fontNunitoRegular: 'Nunito-Regular',
  fontNunitoSemiBold: 'Nunito-SemiBold',
  fontNunitoLight: 'Nunito-Light',
  fontNunitoBlack: 'Nunito-Black',
  fontNunitoMedium: 'Nunito-Medium',
  fontLatoBold: 'Lato-Bold',
  fontLatoRegular: "Lato-Regular",

};

const globalSpaces = {
  margin3: 3,
  margin5: 5,
  margin10: 10,
  margin15: 15,
  margin20: 20,
  margin25: 25,

  marginTop3: 3,
  marginTop5: 5,
  marginTop10: 10,
  marginTop15: 15,
  marginTop20: 20,

  marginRight5: 5,
  marginRight10: 10,
  marginRight15: 15,
  marginRight20: 20,
  marginRight25: 25,

  marginBottom5: 5,
  marginBottom10: 10,
  marginBottom15: 15,
  marginBottom20: 20,
  marginBottom25: 25,

  marginLeft5: 5,
  marginLeft10: 10,
  marginLeft15: 15,
  marginLeft20: 20,
  marginLeft25: 25,
  marginLeft30: 30,

  marginHorizontal5: 5,
  marginHorizontal10: 10,
  marginHorizontal15: 15,
  marginHorizontal20: 20,
  marginHorizontal25: 25,

  marginVertical5: 5,
  marginVertical10: 10,
  marginVertical15: 15,
  marginVertical20: 20,
  marginVertical25: 25,

  padding3: 3,
  padding5: 5,
  padding10: 10,
  padding15: 15,
  padding20: 20,
  padding25: 25,

  paddingTop3: 3,
  paddingTop5: 5,
  paddingTop10: 10,
  paddingTop15: 15,
  paddingTop20: 20,

  paddingRight5: 5,
  paddingRight10: 10,
  paddingRight15: 15,
  paddingRight20: 20,
  paddingRight25: 25,

  paddingBottom5: 5,
  paddingBottom10: 10,
  paddingBottom15: 15,
  paddingBottom20: 20,
  paddingBottom25: 25,

  paddingLeft5: 5,
  paddingLeft10: 10,
  paddingLeft15: 15,
  paddingLeft20: 20,
  paddingLeft25: 25,

  paddingHorizontal5: 5,
  paddingHorizontal10: 10,
  paddingHorizontal15: 15,
  paddingHorizontal20: 20,
  paddingHorizontal25: 25,

  paddingVertical5: 5,
  paddingVertical10: 10,
  paddingVertical15: 15,
  paddingVertical20: 20,
  paddingVertical25: 25,
};

const globalStyles = StyleSheet.create({
  btnTextPrimary: {
    color: globalColors.btnTextPrimary,
  },

  h1: {
    fontSize: globalHeadingFont.h1,
    fontFamily: globalFontFamily.fontNunitoBold,
  },
  h2: {
    fontSize: globalHeadingFont.h2,
    fontFamily: globalFontFamily.fontNunitoBold,
  },
  h3: {
    fontSize: globalHeadingFont.h3,
    fontFamily: globalFontFamily.fontNunitoSemiBold,
  },
  h4: {
    fontSize: globalHeadingFont.h4,
    fontFamily: globalFontFamily.fontNunitoMedium,
  },
  h5: {
    fontSize: globalHeadingFont.h5,
    fontFamily: globalFontFamily.fontNunitoRegular,
  },
  h6: {
    fontSize: globalHeadingFont.h6,
    fontFamily: globalFontFamily.fontNunitoRegular,
  },

  marginTop3: {
    marginTop: globalSpaces.marginTop3,
  },
  marginTop5: {
    marginTop: globalSpaces.marginTop5,
  },
  marginTop10: {
    marginTop: globalSpaces.marginTop10,
  },
  marginTop15: {
    marginTop: globalSpaces.marginTop15,
  },
  marginTop20: {
    marginTop: globalSpaces.marginTop20,
  },
  marginTop25: {
    marginTop: globalSpaces.marginTop25,
  },

  marginRight5: {
    marginRight: globalSpaces.marginRight5,
  },
  marginRight10: {
    marginRight: globalSpaces.marginRight10,
  },
  marginRight15: {
    marginRight: globalSpaces.marginRight15,
  },
  marginRight20: {
    marginRight: globalSpaces.marginRight20,
  },
  marginRight25: {
    marginRight: globalSpaces.marginRight25,
  },

  marginBottom5: {
    marginBottom: globalSpaces.marginBottom5,
  },
  marginBottom10: {
    marginBottom: globalSpaces.marginBottom10,
  },
  marginBottom15: {
    marginBottom: globalSpaces.marginBottom15,
  },
  marginBottom20: {
    marginBottom: globalSpaces.marginBottom20,
  },
  marginBottom25: {
    marginBottom: globalSpaces.marginBottom25,
  },

  marginLeft5: {
    marginLeft: globalSpaces.marginLeft5,
  },
  marginLeft10: {
    marginLeft: globalSpaces.marginLeft10,
  },
  marginLeft15: {
    marginLeft: globalSpaces.marginLeft15,
  },
  marginLeft20: {
    marginLeft: globalSpaces.marginLeft20,
  },
  marginLeft25: {
    marginLeft: globalSpaces.marginLeft25,
  },
  marginLeft30: {
    marginLeft: globalSpaces.marginLeft30,
  },

  marginVertical5: {
    marginVertical: globalSpaces.marginVertical5,
  },
  marginVertical10: {
    marginVertical: globalSpaces.marginVertical10,
  },
  marginVertical15: {
    marginVertical: globalSpaces.marginVertical15,
  },
  marginVertical20: {
    marginVertical: globalSpaces.marginVertical20,
  },
  marginVertical25: {
    marginVertical: globalSpaces.marginVertical25,
  },

  marginHorizontal5: {
    marginHorizontal: globalSpaces.marginHorizontal5,
  },
  marginHorizontal10: {
    marginHorizontal: globalSpaces.marginHorizontal10,
  },
  marginHorizontal15: {
    marginHorizontal: globalSpaces.marginHorizontal15,
  },
  marginHorizontal20: {
    marginHorizontal: globalSpaces.marginHorizontal20,
  },
  marginHorizontal25: {
    marginHorizontal: globalSpaces.marginHorizontal25,
  },

  padding3: {
    padding: globalSpaces.padding3,
  },
  padding5: {
    padding: globalSpaces.padding5,
  },
  padding10: {
    padding: globalSpaces.padding10,
  },
  padding15: {
    padding: globalSpaces.padding15,
  },
  padding20: {
    padding: globalSpaces.padding20,
  },
  padding25: {
    padding: globalSpaces.padding25,
  },

  paddingTop3: {
    paddingTop: globalSpaces.paddingTop3,
  },
  paddingTop5: {
    paddingTop: globalSpaces.paddingTop5,
  },
  paddingTop10: {
    paddingTop: globalSpaces.paddingTop10,
  },
  paddingTop15: {
    paddingTop: globalSpaces.paddingTop15,
  },
  paddingTop20: {
    paddingTop: globalSpaces.paddingTop20,
  },
  paddingTop25: {
    paddingTop: globalSpaces.paddingTop25,
  },

  paddingRight0: {
    paddingRight: 0,
  },
  paddingRight5: {
    paddingRight: globalSpaces.paddingRight5,
  },
  paddingRight10: {
    paddingRight: globalSpaces.paddingRight10,
  },
  paddingRight15: {
    paddingRight: globalSpaces.paddingRight15,
  },
  paddingRight20: {
    paddingRight: globalSpaces.paddingRight20,
  },
  paddingRight25: {
    paddingRight: globalSpaces.paddingRight25,
  },

  paddingBottom5: {
    paddingBottom: globalSpaces.paddingBottom5,
  },
  paddingBottom10: {
    paddingBottom: globalSpaces.paddingBottom10,
  },
  paddingBottom15: {
    paddingBottom: globalSpaces.paddingBottom15,
  },
  paddingBottom20: {
    paddingBottom: globalSpaces.paddingBottom20,
  },
  paddingBottom25: {
    paddingBottom: globalSpaces.paddingBottom25,
  },

  paddingLeft5: {
    paddingLeft: globalSpaces.paddingLeft5,
  },
  paddingLeft10: {
    paddingLeft: globalSpaces.paddingLeft10,
  },
  paddingLeft15: {
    paddingLeft: globalSpaces.paddingLeft15,
  },
  paddingLeft20: {
    paddingLeft: globalSpaces.paddingLeft20,
  },
  paddingLeft25: {
    paddingLeft: globalSpaces.paddingLeft25,
  },

  paddingVertical5: {
    paddingVertical: globalSpaces.paddingVertical5,
  },
  paddingVertical10: {
    paddingVertical: globalSpaces.paddingVertical10,
  },
  paddingVertical15: {
    paddingVertical: globalSpaces.paddingVertical15,
  },
  paddingVertical20: {
    paddingVertical: globalSpaces.paddingVertical20,
  },
  paddingVertical25: {
    paddingVertical: globalSpaces.paddingVertical25,
  },

  width10: {
    width: '10%',
  },
  width20: {
    width: '20%',
  },
  width30: {
    width: '30%',
  },
  width40: {
    width: '40%',
  },
  width50: {
    width: '50%',
  },
  width60: {
    width: '60%',
  },
  width70: {
    width: '70%',
  },
  width80: {
    width: '80%',
  },
  width90: {
    width: '90%',
  },
  width100: {
    width: '100%',
  },

  flexRow: {
    flexDirection: 'row',
  },
  flexColumn: {
    flexDirection: 'column',
  },
  justifySpaceBetween: {
    justifyContent: 'space-between',
  },
  justifyCenter: {
    justifyContent: 'center',
  },
  alignCenter: {
    alignItems: 'center',
  },

  globalContainer: {
    padding: 15,
  },
  boxShadow: {
    ...elevationShadowStyle(10),
    backgroundColor: 'white',
  },
});

function elevationShadowStyle(elevation) {
  return {
    elevation,
    shadowOffset: {width: 0, height: 0.5 * elevation},
    // shadowRadius: 0.8 * elevation,
    shadowColor: '#000',
    shadowOpacity: 0.06,
    shadowRadius: 20,
  };
}

module.exports = {
  globalStyles,
  globalColors,
  globalHeadingFont,
  width,
  height,
  globalSpaces,
  globalFontFamily,
};
