import * as React from 'react';
import {TextStyle, StyleProp} from 'react-native';

export interface TextProperties extends React.Props<Text> {
  /**
   *  Renders components as Text children. Accepts a JSX.Element or an array of JSX.Element.
   */
  children?: React.ReactNode | string;
  /**
   * The size of font
   */
  fontSize?:
    | 'xxs'
    | 'xs'
    | 'sm'
    | 'md'
    | 'lg'
    | 'xl'
    | '2xl'
    | '3xl'
    | '4xl'
    | '5xl'
    | '6xl';
  /**
   * Used to truncate text at a specific number of lines
   */
  numberOfLines?: number;
  style?: StyleProp<TextStyle>;
  color?: string;
  textType?: 'bold' | 'medium';
}

export default class Text extends React.Component<TextProperties, any> {}
