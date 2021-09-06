import React, { Component } from 'react';
import { Text, View, SafeAreaView, FlatList, Image, Platform, StyleSheet} from 'react-native';

import {RFValue} from 'react-native-responsive-fontsize';
export default class Profile extends Component {
  render() {
    return (
      <View style={styles.container}>
        <SafeAreaView style={styles.droidSafeArea} />

        <View style={styles.appTitle}>
          <View style={styles.appIcon}>
            <Image
            source = {require("../assets/blog_icon.png")}
            style = {styles.iconImage}
            ></Image>
          </View>
          <View style ={styles.appTitleTextContainer}>
          <Text style = {styles.appTitleText}> Spectagram </Text>
        </View>
      </View>
      <View style = {styles.cardContainer}>
      />
      </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
  },
  droidSafeArea: {
    marginTop: Platform.OS == "android" ? StatusBar.currentHeight : RFValue(35),
  },
  appTitle: {
    flex: 0.07,
    flexDirection: 'row',
  },
  appIcon: {
    flex: 0.2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  iconImage: {
    width: "100%",
    height: "100%",
    resizeMode: 'contain',
  },
  appTitleTextContainer: {
    flex: 0.8,
    justifyContent: 'center',
  },
  appTitleText: {
    color: 'white',
    fontSize: RFValue(28),
  },
  cardContainer: {
    flex: 0.85
  }
});