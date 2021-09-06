import * as React from 'react';
import { View, Text, StyleSheet, Image, RFValue } from 'react-native';

import IonIcons from 'react-native-vector-icons/Ionicons';
export default class PostCard extends React.Component {
  render() {
    return (
      <View>
        <View>
          <View>
            <View>
              <Image>source = {require('../assets/photo.png')}</Image>
            </View>
            <View>
              <Text>{this.props.post.author}</Text>
            </View>
          </View>
          <Image>source = {require('../assets/post.jpeg')}</Image>
          <View>
            <Text>{this.props.post.caption}</Text>
          </View>
          <View>
            <View>
              <IonIcons name={'heart'} size={RFValue(30)} color={'white'} />
              <Text>12k</Text>
            </View>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({});
