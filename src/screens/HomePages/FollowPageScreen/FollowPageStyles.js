import React from 'react';
import { Platform, StyleSheet, Text, View, StatusBar } from 'react-native';
import ColorScheme from '../../../../global/ColorScheme';
import { Dimensions } from "react-native";
const { width, height } = Dimensions.get("window");

const styles = StyleSheet.create({
    container: {
        paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
        backgroundColor: 'white',
        flex: 1,
    },
    searchScreenTopBar: {
        backgroundColor: 'white',
        paddingTop: height * 0.01,
    },
    topPadding: {
        height: height * 0.015,
    },
    searchBarArea: {
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1,
    },
    searchBarArea2: {
        alignItems: 'center',
        flexDirection: 'row',
    },
    backBox: {
        justifyContent: 'center',
        marginLeft: width * 0.05,
    },
    searchBarBox: {
        width: width,
        height: height * 0.05,
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: 'ghostwhite',
    },
    searchBarBox2: {
        width: width * 0.7,
        height: height * 0.04,
        //borderWidth: 0.5,
        //borderColor: 'black',
        flexDirection: 'row',
        alignItems: 'center',
        marginLeft: width * 0.05,
    },    searchResultsBox: {
        height: height * 0.07,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderBottomWidth: 0.2,
    },
    searchResultsText: {
        marginLeft: width * 0.05,
    },
    iconRightPadding: {
        marginRight: width * 0.05,
    },
    searchIconBox: {
        paddingHorizontal: width * 0.03,
    },
    searchIconBox: {
        paddingHorizontal: width * 0.03,
    },
    searchQueryText: {
        fontSize: 15,
        color: 'black',
        width: width * 0.7,
    },
    userResults: {
    },
    searchPlaceholder: {
        fontSize: 15,
        color: 'dimgray',
    },
    imageContainer: {
        
    },
    username: {
        fontSize: 15,
        fontWeight: 'bold',
        paddingHorizontal: width * 0.03,
    },
    image: {
        aspectRatio: 1,
    },
    caption: {

    },
})

export default styles;