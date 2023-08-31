import React, { useContext, useState, useEffect } from 'react';
import { View, Text, SafeAreaView, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { AdvancedImage } from 'cloudinary-react-native';
import { Cloudinary } from "@cloudinary/url-gen";


const cld = new Cloudinary({
  cloud: {
    cloudName: 'dzvkuocfb'
  }
});
const  Display = () => {

  // console.log('clickedUserIndex in Display', clickedUserIndex);

  return (
    <View>
      <Text>9999</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  Container: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },

});
export default Display;