import { View, Text, Platform, FlatList, ScrollView, Pressable } from 'react-native'
import React, { useState } from 'react'
import { styles } from './styles'
import FastImage from 'react-native-fast-image'
import { SafeAreaView } from 'react-native-safe-area-context'
import { BusIcon, CalenderIcon, FlightIcon, HotelIcon, NotificationBellIcon, OfferIcon, ReverseIcon, TrainDarkIcon, TrainIcon } from '../../assets/svgs/HomeScreenSvgs'
import { SCREEN_WIDTH } from '../../helper/responsiveUtils'
import AppText from '../../components/AppText/AppText'
import LinearGradient from 'react-native-linear-gradient'
import App from '../../../App'
import { Line } from 'react-native-svg'
import { colors } from '../../utils/Colors'
import { homeBanner } from '../../utils/CommonFunction'

const bannerData = [
  {
    id: '1',
    image: require('../../assets/images/HomeScreen/banner0.jpg'),
    title: 'Travel the WORLD',
    discount: '20%'
  },
  {
    id: '2',
    image: require('../../assets/images/HomeScreen/banner1.jpg'),
    title: 'Discover new PLACES',
    discount: '15%'
  },
]
const HomeScreen = () => {
  const [travelStatus, setTravelStatus] = useState('Bus')
  const renderItem = ({ item, index }: { item: any, index: number }) => {
    return (
      <FastImage source={item?.image} style={{ width: SCREEN_WIDTH * 0.9, height: 147, borderRadius: 8 }} resizeMode='cover'>
        <LinearGradient colors={['rgba(0,0,0,0.7)', 'transparent']}
          style={{ flex: 1, width: "100%", height: '100%' }}
          start={{ x: 0, y: 1 }}
          end={{ x: 1, y: 1 }}
          locations={[0, 0.9]}>
          <View style={{ flex: 1, width: SCREEN_WIDTH * 0.9 / 2.5, gap: 4, margin: 16 }}>
            <AppText size={18} family='AvenirRegular' color='white'>{item?.title}</AppText>
            <View style={[styles.row, { alignItems: 'center' }]}>
              <AppText size={36} family='AvenirHeavy' color='white'>{item?.discount} </AppText>
              <AppText top={10} size={16} family='AvenirHeavy' color='white'>OFF</AppText>
            </View>
          </View>
        </LinearGradient>
      </FastImage>
    )
  }

  const bannerRenderItem = ({ item, index }: { item: any, index: number }) => {
    return (
      <View style={[styles.bigBannerView, styles.center, {
        shadowOffset: { width: 0, height: 0 },
        shadowColor: 'grey',
        shadowOpacity: 0.1,
        shadowRadius: 5,
        elevation: 2
      }]}>
        <FastImage style={{ width: "100%", height: 250 }} source={item?.img} resizeMode='contain' />
        <View style={styles.innerTextView}>
          <AppText size={18} family='AvenirHeavy' color='black'>{item?.title}</AppText>
          <AppText numLines={1} size={14} family='AvenirRegular' color='#76777B'>{item?.describe}</AppText>
        </View>
      </View>
    )
  }
  return (
    <View style={[styles.container, { backgroundColor: "#fff" }]}>
      <SafeAreaView style={[Platform.OS === "android" && { marginTop: 10 }]} edges={['top']} />
      <View style={[styles.headerView, styles.row, { justifyContent: 'space-between', }]}>
        <FastImage source={require('../../assets/images/HomeScreen/circle.png')} style={[styles.profileView, styles.center]} >
          <FastImage source={require('../../assets/images/HomeScreen/profile.png')} style={[styles.profileImg]} resizeMode='cover' />

        </FastImage>
        <View style={[styles.notiifcationView, styles.center]}>
          <NotificationBellIcon />
        </View>
      </View>
      <ScrollView showsVerticalScrollIndicator={false} style={[styles.container, { marginTop: 12 }]}>
        <View style={styles.banner}>
          <FlatList
            data={bannerData}
            keyExtractor={(item) => item?.id?.toString()}
            renderItem={renderItem}
            horizontal
            snapToInterval={(SCREEN_WIDTH * 0.9) + 16}
            snapToAlignment="center"
            decelerationRate="fast"
            contentContainerStyle={{ paddingHorizontal: 16, gap: 8 }}
            showsHorizontalScrollIndicator={false} />
        </View>
        <View style={styles.varietyView}>
          <View style={styles.buttonView}>
            <Pressable style={[styles.featuredBtn, styles.center]} onPress={() => setTravelStatus('Bus')}>
              <BusIcon />
              <AppText size={12} family='AvenirHeavy' color='black'>Bus</AppText>
              {travelStatus === 'Bus' && <View style={styles.bottomLine} />}
            </Pressable>

            <Pressable style={[styles.featuredBtn, styles.center]} onPress={() => setTravelStatus('Train')}>
              <TrainIcon />
              <AppText size={12} family='AvenirHeavy' color='black'>Train</AppText>
              {travelStatus === 'Train' && <View style={styles.bottomLine} />}
            </Pressable>

            <Pressable style={[styles.featuredBtn, styles.center]} onPress={() => setTravelStatus('Flight')}>
              <FlightIcon />
              <AppText size={12} family='AvenirHeavy' color='black'>Flight</AppText>
              {travelStatus === 'Flight' && <View style={styles.bottomLine} />}
            </Pressable>

            <Pressable style={[styles.featuredBtn, styles.center]} onPress={() => setTravelStatus('Hotel')} >
              <HotelIcon />
              <AppText size={12} family='AvenirHeavy' color='black'>Hotel</AppText>
              {travelStatus === 'Hotel' && <View style={styles.bottomLine} />}
            </Pressable>

            <Pressable style={[styles.featuredBtn, styles.center]} onPress={() => setTravelStatus('Offers')}>
              <OfferIcon />
              <AppText size={12} family='AvenirHeavy' color='black'>Offers</AppText>
              {travelStatus === 'Offers' && <View style={styles.bottomLine} />}
            </Pressable>
          </View>
        </View>
        <View style={styles.ticketView}>
          <AppText size={18} family='AvenirHeavy' color='black'>Bus Tickets</AppText>
          <View style={[styles.ticketInnerView, {
            shadowOffset: { width: 0, height: 0 },
            shadowColor: 'grey',
            shadowOpacity: 0.1,
            shadowRadius: 5,
            elevation: 2
          }]}>
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', paddingLeft: 12, }}>
              <View style={[styles.ticketRow, styles.row]}>
                <TrainDarkIcon />
                <View style={styles.fromInnerView}>
                  <AppText size={12} family='AvenirRegular' color='#76777B'>From</AppText>
                  <AppText size={16} family='AvenirHeavy' color='black'>Indore, India</AppText>
                  <View style={[styles.line]} />
                </View>
              </View>
              <View style={[styles.ticketRow, styles.row, { marginTop: 13 }]}>
                <TrainDarkIcon />
                <View style={styles.fromInnerView}>
                  <AppText size={12} family='AvenirRegular' color='#76777B'>To</AppText>
                  <AppText size={16} family='AvenirHeavy' color='black'>Rachi, India</AppText>
                  <View style={[styles.line]} />
                </View>
              </View>
              <Pressable style={styles.reverseBtn} onPress={() => console.log("object")}>
                <ReverseIcon />
              </Pressable>
            </View>

            <View style={[styles.daysView, styles.row]}>
              <View style={[styles.row, { flex: 1, gap: 10, }]}>
                <CalenderIcon />
                <View style={styles.fromInnerView}>
                  <AppText size={12} family='AvenirRegular' color='#76777B'>Date of Journey</AppText>
                  <AppText size={16} family='AvenirHeavy' color='black'>12 Feb 2026</AppText>

                </View>
              </View>
              <View style={[styles.row, { gap: 12 }]}>
                <Pressable style={styles.todayBtn} onPress={() => console.log("object")}>
                  <AppText size={12} family='AvenirRegular' color='black'>Today</AppText>
                </Pressable>
                <Pressable style={[styles.todayBtn, { alignSelf: 'flex-end' }]} onPress={() => console.log("object")}>
                  <AppText size={12} family='AvenirRegular' color='black'>Tomorrow</AppText>
                </Pressable>
              </View>
            </View>
            <View style={[styles.line]} />
            <Pressable style={styles.linearBtn}>
              <LinearGradient
                colors={[colors.blue78, colors.blue008]}
                style={[styles.gradientbtn, styles.center]}
                start={{ x: 0, y: 1 }}
                end={{ x: 1, y: 1 }}
              >
                <AppText size={16} family='AvenirHeavy' color='white'>Search Buses</AppText>
              </LinearGradient>
            </Pressable>
          </View>


        </View>
        <View style={styles.bigBanner}>
          <FlatList
            data={homeBanner}
            keyExtractor={(item) => item?.id?.toString()}
            renderItem={bannerRenderItem}
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{ flexGrow: 1, paddingHorizontal: 16, gap: 25 }}
            snapToInterval={(SCREEN_WIDTH * 0.6) + 25}
            snapToAlignment="start"
            decelerationRate="fast"
          />
        </View>
        <View style={{ height: 200 }} />
      </ScrollView>
    </View>
  )
}

export default HomeScreen