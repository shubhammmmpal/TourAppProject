import { StyleSheet } from "react-native";
import { rw, SCREEN_WIDTH } from "../../helper/responsiveUtils";
import { colors } from "../../utils/Colors";

export const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    headerView: {
        width: "100%",
        paddingHorizontal: rw(16)
    },
    row: {
        flexDirection: 'row',
        alignItems: 'center',

    },
    profileView: {
        height: 45,
        width: 45,

    },
    center: {
        justifyContent: 'center',
        alignItems: 'center'
    },
    profileImg: {
        height: 36,
        width: 36,
        borderRadius: 18,
        overflow: 'hidden',
    },
    notiifcationView: {
        height: 45,
        width: 45,
        borderRadius: 45,
        backgroundColor: '#E7EAEE',

    },
    banner: {
        marginTop: 16
    },
    varietyView: {
        marginTop: 16,
        paddingHorizontal: 16,
        borderBottomWidth: 1,
        borderBottomColor: 'rgba(157, 157, 157, 0.2)'
    },
    buttonView: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    featuredBtn: {
        height: 65,
        paddingHorizontal: 8,
        gap: 3,
        paddingBottom: 2
    },
    bottomLine: {
        height: 2,
        width: 40,
        backgroundColor: colors.blue,
        position: 'absolute',
        bottom: 0,
    },
    bigBanner: {
        marginTop: 36,
    },
    ticketView: {
        paddingTop: 20,
        paddingHorizontal: 16,
        gap: 16
    },
    ticketInnerView: {
        backgroundColor: 'white',
        paddingVertical: 12,
        borderWidth: 1,
        borderColor: 'rgba(0, 0, 0, 0.1)',
        borderRadius: 16,

    },
    ticketRow: {
        gap: 10,
        flex: 1,
    },
    fromInnerView: {
        gap: 4,
        paddingLeft: 10,
        flex: 1,
    },
    line: {
        height: 1,
        width: "100%",
        backgroundColor: 'rgba(120, 120, 120, 0.2)',
    },
    reverseBtn: {
        height: 35,
        width: 35,
        borderRadius: 35,
        backgroundColor: colors.blue,
        justifyContent: 'center',
        alignItems: 'center',
        position: "absolute",
        right: 12,
        marginTop: -18
    },
    daysView: {
        paddingVertical: 12,
        paddingHorizontal: 12,
    },
    todayBtn: {
        height: 38,
        paddingHorizontal: 12,
        borderRadius: 20,
        backgroundColor: "#EFEFEF",
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: "rgba(51, 51, 51, 0.2)",
        alignSelf: 'flex-start',

    },
    calendarView: {
        height: 30,
        width: 30,
        backgroundColor: "#E5E5EA",
        borderRadius: 30,
        overflow: 'hidden',
    },
    linearBtn: {
        width: '100%',
        paddingHorizontal: 12,
        marginTop: 12
    },
    gradientbtn: {
        flex: 1,
        borderRadius: 40,
        height: 50
    },
    bigBannerView: {
        width: SCREEN_WIDTH * 0.6,
        borderRadius: 12,
        overflow: 'hidden',
        borderWidth: 1,
        borderColor: 'rgba(0, 0, 0, 0.1)',
        backgroundColor: 'white'
    },
    innerTextView: {
        width: "100%",
        height: 55,
        marginBottom: 14,
        borderTopWidth: 1,
        borderTopColor: 'rgba(0, 0, 0, 0.1)',
        paddingTop: 6,
        paddingHorizontal: 14,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    leftIcon: {
        height: 24,
        width: 24,
        backgroundColor: 'rgba(34, 34, 34, 0.05)',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius:100
    },
    viewInner:{
        marginTop: 36,
    },
    destinationItem:{
        width: 159,
        height: 167,
        borderRadius: 16
    },
    destiantionImg:{
        width: "100%",
        height: "100%",
        borderRadius: 16,
        overflow: 'hidden'
    },
    bannerBetween:{
        height: 183,
        width: '100%',
        marginTop: 36,
    },
    BookNowbtn:{
        height: 36,
        paddingHorizontal: 12,
        borderRadius: 30,
        borderColor: "rgba(255, 255, 255, 0.2)",
        borderWidth: 1,
        marginBottom: 12,
        backgroundColor: colors.blue,
    },
});