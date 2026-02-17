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


export const homeBanner = [
  {
    id: 1,
    img: require('../assets/images/HomeScreen/BusCircle.png'),
    title: "Book Bus Tickets",
    describe: "Travel anywhere by bus easily", // 5 words
  },
  {
    id: 2,
    img: require('../assets/images/HomeScreen/TrainCircle.png'),
    title: "Book Train Tickets",
    describe: "Journey smoothly on trains daily", // 5 words
  },
  {
    id: 3,
    img: require('../assets/images/HomeScreen/FlightCircle.png'), // assuming you have this image
    title: "Book Flight Tickets",
    describe: "Fly fast to your dream destination", // 5 words
  },
  {
    id: 4,
    img: require('../assets/images/HomeScreen/HotelCircle.png'), // assuming you have this image
    title: "Book Hotels & Stays",
    describe: "Find cozy hotels instantly anywhere", // 5 words
  },
];