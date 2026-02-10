import { FC, ReactNode } from "react";
import { StyleProp, View, ViewProps, ViewStyle } from "react-native";

export type ParamList = {
  OTPScreen: {
    phoneNumber: string
  }
  
}
export type Product = {
  id: number;
  title: string;
  price: number;
  unit: string;
  image: any;
};
export type AppTextProps = {
  size?: number,
  top?: number | string | any
  color?: string,
  family?: 'Montserrat-Black' | 'Montserrat-Bold' | 'Montserrat-Light' | 'Montserrat-Medium' | 'Montserrat-Regular' | 'Montserrat-ExtraBold' | 'Montserrat-ExtraLight' | 'Montserrat-SemiBold' | 'Montserrat-Thin' | 'Montserrat-Italic'
  align?: 'left' | 'center' | 'right' | 'justify'
  transform?: 'capitalize' | 'lowercase' | 'uppercase' | 'none'
  numLines?: number
  children?: React.ReactNode | React.ReactNode[]
  testID?: string,
  animateValue?: any,
  customColor?: string,
  spacing?: number | string | any,
  horizontal?: number | string | any,
  underlineColor?: string,
  underline?: 'underline' | 'line-through' | 'none' | 'underline line-through'
  textDecorationStyle?: 'dashed' | 'dotted' | 'solid' | 'double'
  onPress?: () => void,
  handleTextLayout?: (e: any) => void,
  dotMode?: 'head' | 'tail' | 'middle' | 'clip'
  height?: number | string | any
  width?: number | string | any
  maxWidth?: number | string | any
  opacity?: number | string | any
  lineHeight?: number | string | any
  fontStyle?: any
}
export type CustomHeaderProps = {
  title?: string
  navigation?: any
  rightPress?: () => void
  backPress?: () => void;
  rightButton?: any
  customRightStatus?: boolean
  customRightButton?: any
}

export type DropDownTextInputProps = {
  title: string;
  placeholder: string;
  preInputChnage?: boolean;
  data?: any;
  disabled?:any
  width?: any;
  isEdit?: string;
  isIcons?: boolean;
  onPress?: () => void;
  text?: any,
  preSelect?: any,
  handleSelectPress?: (text: string) => void,
  setText: (text: string) => void,
  onChangeText?: (text: string) => void;
  value?: string;
  preValue?: string;
  selectItemValue: (name: string) => void;
  clearOnPress?: () => void;
  onClearPress?: () => void;
};


export type SubmitButtonProps = {
  title: string;
  pressing: () => void;
  widthOf?: string | number | any;
  loader?: boolean;
  colorChange?: any;
  opacity?: any;
  colortext?: string;
  width?: string | number | any;
  height?: string | number | any;
  disabled?: boolean;
  icon?: boolean;
  icon2?: boolean;
  disable?: boolean;
  fontSize?: number | any;
};


export type SimpleButtonProps = {
  title: string;
  pressing: () => void;
  widthOf?: string | number | any;
  loader?: boolean;
  colorChange?: any;
  opacity?: any;
  borderRadius?:any;
  colortext?: string;
  width?: string | number | any;
  height?: string | number | any;
  disabled?: boolean;
  icon?: boolean;
  icon2?: boolean;
  disable?: boolean;
  fontSize?: number | any;
};
export type loginParmas = {
  email: string;
  password: string;
};


export type InputFieldProps = {
  value: any
  onBlur?: any
  maxLength?: any
  times?: any;
  onFocus?:any;
  icon?:any;
  onPress?: () => void;
  name?: any
  setValue: any
  secure: boolean
  placeHolder: string
  editable?: boolean
  border?: number
  formikValue?: any
  formikError?: any
  width?: any
  numberOfLines?: any
  keyboard?: 'numeric'
  ref?: any
  onKeyPress?: any
  onSubmit?: () => void
  returnKeyType?: any
  focus?: any
}



export type MultilineInputFieldProps = {
  value: any
  maxLength?: any
  times?: any;
  name?: any
  setValue: any
  secure: boolean
  placeHolder: string
  editable?: boolean
  border?: number
  formikValue?: any
  formikError?: any
  width?: any
  numberOfLines?: any
  keyboard?: 'numeric'
  ref?: any
  onKeyPress?: any
  onSubmit?: () => void
  returnKeyType?: any
  focus?: any
}

export const getInitialsData = (fullname: any) => {
  return fullname
    .split(' ')
    .map((name: string[]) => name[0]?.toUpperCase() || '')
    .join('');
};

export function formatTimeAgo(dateString: any) {
  const currentDate: any = new Date();
  const date: any = new Date(dateString);
  const timeDifference = currentDate - date;

  const seconds = Math.abs(Math.floor(timeDifference / 1000));
  const minutes = Math.abs(Math.floor(seconds / 60));
  const hours = Math.abs(Math.floor(minutes / 60));
  const days = Math.abs(Math.floor(hours / 24));
  const weeks = Math.abs(Math.floor(days / 7));
  const months = Math.abs(Math.floor(days / 30));
  const years = Math.abs(Math.floor(days / 365));

  if (timeDifference < 0) {
    // If the time difference is negative, format the date as "DD MMM, YYYY"
    const options = { month: 'short', day: '2-digit', year: 'numeric' };
    return date.toLocaleDateString('en-US', options);
  }

  if (years >= 1) {
    return `${years}y`;
  } else if (months >= 1) {
    return `${months}mo`;
  } else if (weeks >= 1) {
    return `${weeks}w`;
  } else if (days >= 1) {
    return `${days}d`;
  } else if (hours >= 1) {
    return `${hours}h`;
  } else if (minutes >= 1) {
    return `${minutes}m`;
  } else {
    return `${seconds == 0 ? 1 : seconds}s`;
  }
}



