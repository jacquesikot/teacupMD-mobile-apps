import { StyleSheet } from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import { theme } from '../../components';

const IMG_FORM_FACTOR = 2.68;
export const WIDTH = wp(35);
export const HEIGHT = hp(23);
export const PRODUCT_WIDTH = wp(43);
export const PRODUCT_HEIGHT = 230;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.light,
    alignItems: 'center',
  },
  image: {
    width: theme.constants.screenWidth,
    height: theme.constants.screenWidth / IMG_FORM_FACTOR,
    marginBottom: hp('4%'),
  },
  sliderContainer: {
    width: '100%',
    paddingLeft: theme.constants.screenPadding / 2,
  },
  heading: {
    fontFamily: 'SofiaPro-Bold',
    fontSize: wp('6%'),
    color: theme.colors.dark,
    marginTop: hp('2%'),
    marginBottom: hp('4%'),
    width: theme.constants.screenWidth,
  },
  productGrid: {
    width: theme.constants.screenWidth,
    paddingBottom: 100,
  },
  noProductText: {
    fontFamily: 'SofiaPro-Medium',
    fontSize: wp('4'),
    color: theme.colors.dark,
  },
});

export default styles;
