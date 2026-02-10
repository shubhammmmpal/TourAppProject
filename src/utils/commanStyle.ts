import { Platform, StyleSheet } from "react-native";
import { colors } from "./Colors";
import { hp, wp } from "../helper/Responsive";
import { rw } from "../helper/responsiveUtils";
import { fonts } from "./typography";

export const commonStyle = StyleSheet.create({
    bottomModal: {
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        backgroundColor: colors.white,
        paddingBottom: Platform?.OS == 'android' ? rw(60) : rw(20)
    },
    mainContainer: {
        marginHorizontal: rw(20),
        marginTop: 20,
    },
    profileContainer: {
        marginHorizontal: rw(20),
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    actionsheet: {
        paddingVertical: rw(0),
        marginTop: rw(10),
        marginHorizontal: rw(20)
    },
    card: {
        backgroundColor: colors.white,
        borderRadius: 8,
        marginTop: rw(24),
        shadowOffset: { width: 0, height: 10 },
        shadowColor: 'grey',
        shadowOpacity: 0.2,
        shadowRadius: 5,
        elevation: 4,
        paddingHorizontal: rw(10),
        paddingVertical: 20,
    },
    filterStyle: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        gap: rw(6),
        paddingVertical: rw(6),
        paddingHorizontal: rw(10),
        borderRadius: 40,
        borderWidth: 1,
        borderColor: colors.green
    },
    rows: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 8,
    },
    radio: {
        width: 15,
        height: 15,
        borderRadius: 10,
        borderWidth: 1.5,
        borderColor: colors.grey_8E,
        alignItems: 'center',
        justifyContent: 'center',
        marginRight: 14,
    },
    radioActive: {
        borderColor: colors.green,
    },
    radioInner: {
        width: 8,
        height: 8,
        borderRadius: 5,
        backgroundColor: colors.green,
    },
    bottomSheetBackground: {
        backgroundColor: "white",
        borderTopLeftRadius: 24,
        borderTopRightRadius: 24,
    },
    handleIndicator: {
        backgroundColor: "#AAAAAA",
        width: 99,
        marginTop: 10,
        height: 3
    },
    bgIcon: {
        height: rw(24),
        width: rw(24),
        justifyContent: "center",
        alignItems: "center",
    },
    textInputMainView: {
        backgroundColor: colors.grey_EB,
        padding: wp(2),
        marginTop: rw(20),
        alignItems: "center",
        paddingVertical: hp(1.2),
        paddingHorizontal: wp(4),
        borderRadius: 50,
        flexDirection: "row",
        height: 56,
        borderWidth: 1
    },
    modal: {
        justifyContent: "flex-end",
        margin: 0,
    },
    modalContainer: {
        flex: 1,
        backgroundColor: colors.white,
        alignItems: 'center',
        justifyContent: 'center'
    },
    modalTop: {
        marginTop: rw(25),
        gap: rw(12)
    },
    textInput: {
        marginHorizontal: wp(2.5),
        paddingVertical: 0,
        flex: 1,
        fontSize: 14,
        fontFamily: fonts.MontserratMedium,
        color: colors.grey_65,
    },
    notification: {
        flexDirection: 'row',
        alignItems: "center",
        justifyContent: "flex-end"
    },

})