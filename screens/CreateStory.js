import React, { Component } from 'react';
import {
  Text,
  View,
  ScrollView,
  SafeAreaView,
  Image,
  StyleSheet,
  Platform,
  TextInput,
} from 'react-native';

import AppLoading from 'expo-app-loading';
import { RFValue } from 'react-native-responsive-fontsize';
import DropDownPicker from 'react-native-dropdown-picker';
import * as Font from "expo-font";

let customFonts = {
  "Bubblegum-Sans": require("../assets/fonts/BubblegumSans-Regular.ttf")
};

export default class CreateStory extends Component {
  constructor(){
    super();
    this.state = {
      fontsLoaded: false,
      previewImage: "image_1",
      dropDownHeight: 40,
    };
  }

  async _loadFontsAsync() {
    await Font.loadAsync(customFonts);
    this.setState({ fontsLoaded: true });
  }

  componentDidMount() {
    this._loadFontsAsync();
  }

  render() {
    if(!this.state.fontsLoaded){
      return <AppLoading />
    } else {
      let preview_images = {
        "image_1": require("../assets/image_1.jpg"),
        "image_2": require('../assets/image_2.jpg'),
        "image_3": require('../assets/image_3.jpg'),
        "image_4": require('../assets/image_4.jpg'),
        "image_5": require('../assets/image_5.jpg')
      };

    return (
      <View style={styles.container}>
        <SafeAreaView style={styles.droidSafeArea} />

        <View style={styles.appTitle}>
          <View style={styles.appIcon}>
            
            </View>
            <View style={styles.appTitleTextContainer}>
              <Text style={styles.appTitleText}> New Post </Text>
            </View>
          </View>
        <ScrollView>
              <Image
                source={preview_images[this.state.previewImage]}
                style={styles.iconImage}></Image>
          <View style={styles.cardContainer}>
            <DropDownPicker
              items={[
                { label: 'Image 1', value: 'image_1' },
                { label: 'Image 2', value: 'image_2' },
                { label: 'Image 3', value: 'image_3' },
                { label: 'Image 4', value: 'image_4' },
                { label: 'Image 5', value: 'image_5' },
                { label: 'Image 6', value: 'image_6' },
                { label: 'Image 7', value: 'image_7' },
              ]}
              defaultValue={this.state.previewImage}
              containerStyle={{
                height: 40,
                borderRadius: 20,
                marginBottom: 10,
              }}
              onOpen={() => {
                this.setState({
                  drownDownHeight: 170,
                });
              }}
              onClose={() => {
                this.setState({
                  dropDownHeight: 40,
                });
              }}
              style={{ backgroundColor: 'transparent' }}
              itemStyle={{
                justifyContent: 'flex-start',
              }}
              dropDownStyle={{ backgroundColor: '#2a2a2a' }}
              labelStyle={{ color: 'white' }}
              arrowStyle={{
                color: 'white',
              }}
              onChangeItem={(item) =>
                this.setState({
                  previewImage: item.value,
                })
              }
            />

            <TextInput
            style = {{color: 'white'}}
            multiline = {true}
            numberOfLines = {2}
              onChangeText={(caption) => {
                this.setState({
                  caption,
                });
              }}
              placeholder="Enter a caption"
              placeholderTextColor="white"
            />
            </View>
          </ScrollView>
        
      </View>
    );
  }
}
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#15193c"
  },
  droidSafeArea: {
    marginTop: Platform.OS === "android" ? StatusBar.currentHeight : RFValue(35)
  },
  appTitle: {
    flex: 0.07,
    flexDirection: "row"
  },
  appIcon: {
    flex: 0.3,
    justifyContent: "center",
    alignItems: "center"
  },
  iconImage: {
    width: "100%",
    height: "100%",
    resizeMode: "contain"
  },
  appTitleTextContainer: {
    flex: 0.7,
    justifyContent: "center"
  },
  appTitleText: {
    color: "white",
    fontSize: RFValue(28),
    fontFamily: "Bubblegum-Sans"
  },
  fieldsContainer: {
    flex: 0.85
  },
  previewImage: {
    width: "93%",
    height: RFValue(250),
    alignSelf: "center",
    borderRadius: RFValue(10),
    marginVertical: RFValue(10),
    resizeMode: "contain"
  }
});

