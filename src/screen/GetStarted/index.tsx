import React, { useState, useEffect, useRef } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  LayoutAnimation,
  Platform,
  UIManager,
  ViewStyle,
  Pressable,
} from 'react-native';
import FastImage from 'react-native-fast-image';
import LinearGradient from 'react-native-linear-gradient';
import Swiper from 'react-native-swiper';

// Assuming these paths exist in your project
import { styles as globalStyles, styles } from './styles';
import { SCREEN_HEIGHT } from '../../utils/CommonFunction';
import { colors } from '../../utils/Colors';
import AppText from '../../components/AppText/AppText';
import { SafeAreaView, useSafeAreaInsets } from 'react-native-safe-area-context';
import { RouteString } from '../../utils/AppString';

// Enable LayoutAnimation for Android
if (
  Platform.OS === 'android' &&
  UIManager.setLayoutAnimationEnabledExperimental
) {
  UIManager.setLayoutAnimationEnabledExperimental(true);
}

type GetStartedScreenProps = {
  navigation: any; // You can replace 'any' with the specific type if you have it defined
};  

// 1. Define Interfaces for Type Safety
interface SlideItem {
  id: number;
  image: number; // require() returns a number in React Native
  title: string;
  highlight: string;
  description: string;
}

const GetStartedScreen = ({navigation}: GetStartedScreenProps) => {
  // 2. Data with explicit typing
  const slides: SlideItem[] = [
    {
      id: 1,
      image: require('../../assets/images/GetStartedPage/first.png'),
      title: 'Life is short and the world is ',
      highlight: 'wide',
      description:
        'At Friends tours and travel, we customize reliable and trutworthy educational tours to destinations all over the world',
    },
    {
      id: 2,
      image: require('../../assets/images/GetStartedPage/second.jpg'), // Ensure this image exists
      title: 'It’s a big world out there go ',
      highlight: 'cultures',
      description:
        'To get the best of your adventure you just need to leave and go where you like. we are waiting for you',
    },
    {
      id: 3,
      image: require('../../assets/images/GetStartedPage/third.jpg'), // Ensure this image exists
      title: 'People don’t take trips, trips take ',
      highlight: 'people',
      description:
        'Your safety is our priority. We ensure a secure and comfortable journey wherever you go.',
    },
  ];

  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const swiperRef = useRef<Swiper>(null);
  // 3. Animate Dot Width Changes
  const handleIndexChanged = (index: number) => {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
    setCurrentIndex(index);
  };

  // 4. Custom Pagination with Animated Dots
  const renderPagination = (index: number, total: number, context: any) => {
    return (
      <View style={styles.paginationContainer}>
        {slides.map((_, i) => {
          const isActive = i === index;

          return (
            <View
              key={i}
              style={[
                styles.dot,
                {
                  width: isActive ? 35 : 8,
                  backgroundColor: isActive ? colors.blue : colors.blueCA,
                },
              ]}
            />
          );
        })}
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <Swiper
        ref={swiperRef}
        loop={false}
        showsButtons={false}
        onIndexChanged={handleIndexChanged}
        renderPagination={renderPagination}
        dotColor="transparent"
        activeDotColor="transparent"
      >
        {slides.map((item) => (
          <View key={item.id} style={styles.slide}>
            <FastImage
              source={item.image}
              style={styles.image}
              resizeMode="cover"
            >
              <Pressable style={[styles.skipButton, {marginTop: Platform.OS == "android" ? useSafeAreaInsets().top + 10 : useSafeAreaInsets().top }]} onPress={() => {
                if (currentIndex != 2) {
                  swiperRef?.current?.scrollBy(2, true)
                }
              }}>
                <AppText color={colors.blueCA} size={16} family='AvenirRegular'>Skip</AppText>
              </Pressable>
            </FastImage>

            {/* Content Section */}
            <View style={styles.innerContainer}>

              {/* Title Section - No style on AppText, spacing via View */}
              <View style={styles.titleWrapper}>
                <AppText
                  size={30}
                  color={'black'}
                  family="AvenirBlack"
                  align="center"
                >
                  {item.title}
                  <AppText
                    size={30}
                    color={'#FF7029'}
                    family="AvenirBlack"
                    align="center"
                  >
                    {item.highlight}
                  </AppText>
                </AppText>
              </View>

              {/* Description Section - No style on AppText, spacing via View */}
              <View style={styles.descWrapper}>
                <AppText
                  size={16}
                  color={'#606060'}
                  family="AvenirRegular"
                  align="center"
                >
                  {item.description}
                </AppText>
              </View>

            </View>
          </View>
        ))}
      </Swiper>

      {/* Fixed Bottom Button */}
      <View style={styles.buttonContainer}>
        <Pressable onPress={() => {
          if (currentIndex < slides.length - 1)
            swiperRef?.current?.scrollBy(1, true)
          else
            navigation.navigate(RouteString.BOTTOMSTACK)
        }}>
          <LinearGradient
            colors={[colors.blue78, colors.blue008]}
            style={styles.linearGradient}
            start={{ x: 0, y: 1 }}
            end={{ x: 1, y: 1 }}
          >
            <AppText
              size={18}
              color={'white'}
              family="AvenirHeavy"
            >
              {currentIndex === slides.length - 1 ? 'Get Started' : 'Next'}
            </AppText>
          </LinearGradient>
        </Pressable>
      </View>
    </View>
  );
};

export default GetStartedScreen;
