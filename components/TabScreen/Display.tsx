import React, { useContext, useState, useEffect } from 'react';
import { View, Text, SafeAreaView, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { AdvancedImage } from 'cloudinary-react-native';
import { Cloudinary } from "@cloudinary/url-gen";
import { useSelector } from 'react-redux';


const cld = new Cloudinary({
  cloud: {
    cloudName: 'dzvkuocfb'
  }
});
const  Display = () => {
  const img = useSelector(state=>state.img);

  return (
    <View>
      <Text>{img.id}</Text>
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