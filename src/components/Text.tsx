import React from 'react';
import {Text as NativeText, Dimensions, PixelRatio, Platform} from 'react-native';


const {width: SCREEN_WIDTH} = Dimensions.get('window');
const scale = Math.round(SCREEN_WIDTH / 350); // 375 base by ios 5
const isIos = Platform.OS === 'ios';

interface Props {
  textType?: string;
  fontSize?: string;
  color?: string;
  style?: any;
  children?: React.ReactNode | string;
}

const Text: React.FC<Props> = ({textType,fontSize,color,style,children}) =>{
  
  const setFontType = (fontType:string) => {
    switch (fontType) {
      case 'bold':
        return 'NotoSansLao-Bold';
      case 'medium':
        return 'NotoSansLao-Medium';
      default:
        return 'NotoSansLao-Regular';
    }
  };

  const setFontSize = (size:string) => {
    switch (size) {
      case '6xl':
        return normalize(55);
      case '5xl':
        return normalize(45);
      case '4xl':
        return normalize(33);
      case '3xl':
        return normalize(28);
      case '2xl':
        return normalize(22);
      case 'xl':
        return normalize(18);
      case 'lg':
        return normalize(17);
      case 'md':
        return normalize(15);
      case 'sm':
        return normalize(13);
      case 'xs':
        return normalize(11);
      case 'xxs':
        return normalize(9);
      default:
        return normalize(15);
    }
  };

  const normalize = (size:number) => {
    const newSize = size * scale;
    if (isIos) {
      return Math.round(PixelRatio.roundToNearestPixel(newSize));
    } else {
      return Math.round(PixelRatio.roundToNearestPixel(newSize)) - 2;
    }
  };

  const fontType = setFontType(textType ? textType : 'regular');
  const fontSizeCustom = setFontSize(fontSize ? fontSize : 'md');
  const fontColor = color ? color : 'darkslategrey';

  const fontStyle = [
    {fontFamily: fontType},
    {fontSize: fontSizeCustom},
    {color: fontColor},
    style || {},
  ];

  const textProps = Object.assign({}, {style: fontStyle});

  return <NativeText {...textProps}>{children}</NativeText>;
};

export default Text;
