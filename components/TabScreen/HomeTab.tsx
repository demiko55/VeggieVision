import React, { useState, useEffect } from 'react';
import { StyleSheet, ScrollView, Text, TouchableOpacity, Image, StatusBar, View, FlatList } from 'react-native';
import { SafeAreaView } from 'react-native';
import { API_KEY, API_SECRET, CLOUD_NAME } from '@env'
import axios from 'axios';
import { AdvancedImage } from 'cloudinary-react-native';
import { Cloudinary } from "@cloudinary/url-gen";

const cld = new Cloudinary({
  cloud: {
    cloudName: 'dzvkuocfb'
  }
});

const HomeTab = () => {
  const [images, setImages] = useState([]);

  const url = `https://${API_KEY}:${API_SECRET}@api.cloudinary.com/v1_1/${CLOUD_NAME}/resources/search`;

  const getImages = () => {
    const data: object = {
      expression: "resource_type:image AND folder=veggie",
      sort_by: [{ "public_id": "desc" }],
    };
    axios({
      method: 'get',
      url: url,
    })
      .then((res) => {
        // console.log('res', res.data.resources);
        handleImagesProductId(res.data.resources);
      })
      .catch((error) => {
        console.log(error);
      })
  }
  useEffect(() => getImages(), [])

  const handleImagesProductId = (res)=>{
    let tempProductIdArray = [];
    res.forEach((img)=>{
      tempProductIdArray.push(img.public_id);
    })
    setImages(tempProductIdArray);
  }

  console.log(images);

  const renderItem = ({ item, index }) => {
    const myImage = cld.image(item);
           return (
             <View key={item}>
               <AdvancedImage cldImg={myImage} style={styles.image} />
            </View>
        )
  };

  return (
    <FlatList
      data={images}
      renderItem={renderItem}
      keyExtractor={(item, index) => index.toString()}
      numColumns={2}
      contentContainerStyle={styles.container}
    />
  );
}
const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    alignItems: 'flex-start',
    marginTop:40,
    marginLeft:17
  },
  image: {
    width: 185,
    aspectRatio: 1,
    margin: 3,
  },
});
export default HomeTab;