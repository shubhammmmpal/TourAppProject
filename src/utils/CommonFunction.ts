import { Dimensions } from 'react-native';

import { RouteString } from './AppString';
import { colors } from './Colors';
export const SCREEN_WIDTH = Dimensions.get('screen').width;
export const SCREEN_HEIGHT = Dimensions.get('screen').height;
export const leftToRightAnimation = {
  cardStyleInterpolator: ({ current, layouts }: any) => {
    return {
      cardStyle: {
        transform: [
          {
            translateX: current.progress.interpolate({
              inputRange: [0, 1],
              outputRange: [-layouts.screen.width, 0],
            }),
          },
        ],
      },
    };
  },
};

export const righToLefttAnimation = {
  cardStyleInterpolator: ({ current, layouts }: any) => {
    return {
      cardStyle: {
        transform: [
          {
            translateX: current.progress.interpolate({
              inputRange: [0, 1],
              outputRange: [layouts.screen.width, 0],
            }),
          },
        ],
      },
    };
  },
};

export const bottomToTopAnimation: any = {
  gestureDirection: 'vertical', // Use allowed string literal
  transitionSpec: {
    open: {
      animation: 'timing',
      config: {
        duration: 300,
      },
    },
    close: {
      animation: 'timing',
      config: {
        duration: 300,
      },
    },
  },
  cardStyleInterpolator: ({ current, layouts }: any) => ({
    cardStyle: {
      transform: [
        {
          translateY: current.progress.interpolate({
            inputRange: [0, 1],
            outputRange: [layouts.screen.height, 0],
          }),
        },
      ],
    },
  }),
};

export const getInitials = (fullname: string = ''): string => {
  if (!fullname) return '';

  const words = fullname
    .trim()
    .split(/\s+/)
    .filter(Boolean);

  if (words?.length === 1) {
    return words[0]?.charAt(0)?.toUpperCase();
  }

  const firstInitial = words[0]?.charAt(0);
  const lastInitial = words[words?.length - 1]?.charAt(0);

  return (firstInitial + lastInitial)?.toUpperCase();
};

export function KMoneyNumber(number: any): string {
  if (number == null || isNaN(number)) return '0';
  const num = Math.abs(Number(number));
  if (num >= 10000000) {
    return (num / 10000000).toFixed(2).replace(/\.00$/, '') + 'Cr';
  } else if (num >= 100000) {
    return (num / 100000).toFixed(2).replace(/\.00$/, '') + 'L';
  } else if (num >= 1000) {
    return (num / 1000).toFixed(2).replace(/\.00$/, '') + 'K';
  } else {
    return num.toLocaleString();
  }
}

export const formatDate = (isoDate: string | null | undefined): string => {
  if (!isoDate) return 'N/A';

  const datePart = isoDate.split('T')[0];

  const [year, month, day] = datePart.split('-');
  return `${day}-${month}-${year}`;
};

export const formatToApiDate = (date: any): string => {
  if (!date) return '';
  const d = new Date(date);
  if (isNaN(d.getTime())) return '';
  return d.toISOString().split('T')[0]; // "2025-12-18"
};

export const formatDateChange = (date: any): string => {
  if (!date) return '';

  const d = new Date(date);
  if (isNaN(d.getTime())) return '';

  // Use UTC to avoid local timezone shifts
  const year = d.getUTCFullYear();
  const month = String(d.getUTCMonth() + 1).padStart(2, '0');
  const day = String(d.getUTCDate()).padStart(2, '0');
  const hours = String(d.getUTCHours()).padStart(2, '0');
  const minutes = String(d.getUTCMinutes()).padStart(2, '0');
  const seconds = String(d.getUTCSeconds()).padStart(2, '0');

  // Return YYYY-MM-DDTHH:mm:ss (removes milliseconds and Z)
  return `${year}-${month}-${day}T${hours}:${minutes}:${seconds}`;
};

export const formatToCustomString = (date: Date): any => {
  const year = date?.getFullYear();
  const month = String(date?.getMonth() + 1).padStart(2, '0');
  const day = String(date?.getDate()).padStart(2, '0');
  const hours = String(date?.getHours()).padStart(2, '0');
  const minutes = String(date?.getMinutes()).padStart(2, '0');
  const seconds = String(date?.getSeconds()).padStart(2, '0');
  return `${year}-${month}-${day}T${hours}:${minutes}:${seconds}`;
};



export const barData = [
  {
    label: '2 Dec',
    stacks: [
      { value: 20, color: colors.green },
      { value: 20, color: colors.grey_EB },
    ],
  },
  {
    label: '3 Dec',
    stacks: [
      { value: 32, color: colors.green },
      { value: 8, color: colors.grey_EB },
    ],
  },
  {
    label: '4 Dec',
    stacks: [
      { value: 15, color: colors.green },
      { value: 25, color: colors.grey_EB },
    ],
  },
  {
    label: '5 Dec',
    stacks: [
      { value: 38, color: colors.green },
      { value: 2, color: colors.grey_EB },
    ],
  },
  {
    label: '6 Dec',
    stacks: [
      { value: 30, color: colors.green },
      { value: 10, color: colors.grey_EB },
    ],
  },
  {
    label: '7 Dec',
    stacks: [
      { value: 20, color: colors.green },
      { value: 6, color: colors.grey_EB },
    ],
  },
  {
    label: '8 Dec',
    stacks: [
      { value: 10, color: colors.green },
      { value: 5, color: colors.grey_EB },
    ],
  },
  {
    label: '9 Dec',
    stacks: [
      { value: 13, color: colors.green },
      { value: 2, color: colors.grey_EB },
    ],
  },
  {
    label: '10 Dec',
    stacks: [
      { value: 20, color: colors.green },
      { value: 2, color: colors.grey_EB },
    ],
  },
  {
    label: '11 Dec',
    stacks: [
      { value: 22, color: colors.green },
      { value: 5, color: colors.grey_EB },
    ],
  },
];


