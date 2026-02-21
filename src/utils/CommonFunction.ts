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


export const topDestination = [
  {
    id: 1,
    img: require('../assets/images/HomeScreen/Bombay.jpg'),
    title: "Bombay",
  },
  {
    id: 3,
    img: require('../assets/images/HomeScreen/Delhi.jpg'),
    title: "Delhi",
  },
  {
    id: 3,
    img: require('../assets/images/HomeScreen/Pune.jpg'),
    title: "Pune",
  },
  {
    id: 4,
    img: require('../assets/images/HomeScreen/Goa.jpg'),
    title: "Goa",
  },
]


export const mostPopularDestination = [
  {
    id: 1,
    img: require('../assets/images/HomeScreen/Udaipur.png'),
    title: "Hotel  Raj Palace",
    price: "₹14,80/night",
    place: "Udaipur, Rajasthan",
    rating: "4.5",
  },
  {
    id: 2,
    img: require('../assets/images/HomeScreen/Jaipur.png'),
    title: "Royal Palace",
    price: "₹14,80/night",
    place: "Jaipur, Rajasthan",
    rating: "4.5",

  },
  {
    id: 3,
    img: require('../assets/images/HomeScreen/Udaipur.png'),
    title: "Lake View Palace",
    price: "₹14,80/night",
    place: "Pune, Maharashtra",
    rating: "4.5",
  },
]


export const exploreHostings = [
  {
    id: 1,
    img: require('../assets/images/HomeScreen/hotel.png'),
    title: "Hotels",
  },
  {
    id: 2,
    img: require('../assets/images/HomeScreen/residential.png'),
    title: "Apartement",
  },
  {
    id: 3,
    img: require('../assets/images/HomeScreen/villa.png'),
    title: "Villas",
  },
]


export const hostingList = [
  {
    id: '1',
    image: require('../assets/images/HomeScreen/hotel1.png'),
    title: 'Elysian Suites',
    location: 'San Diego, CA',
    price: '$320',
    rating: '3.8',
  },
  {
    id: '2',
    image: require('../assets/images/HomeScreen/hotel2.png'),
    title: 'Elysian Suites',
    location: 'San Diego, CA',
    price: '$320',
    rating: '3.8',
  },
  {
    id: '3',
    image: require('../assets/images/HomeScreen/hotel3.png'),
    title: 'Elysian Suites',
    location: 'San Diego, CA',
    price: '$320',
    rating: '3.8',
  },
];
