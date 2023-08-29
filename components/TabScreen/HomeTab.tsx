import React, { useState, useEffect } from 'react';
import { StyleSheet, ScrollView, Text, TouchableOpacity, Image, StatusBar, View } from 'react-native';
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

  return (
    <SafeAreaView style={styles.container}>
      <View style= {styles.row}>
      {
        images.map((public_id) => {
          console.log('here?????????', public_id);
          const myImage = cld.image(public_id);
          return (
            <View key={public_id}>
              <AdvancedImage cldImg={myImage} style={styles.image} />
            </View>
          )
        })
      }
      </View>
    </SafeAreaView>
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    //flexDirection:'row',
    alignItems: 'center'
  },
  scrollView: {
    backgroundColor: 'pink'
  },
  row: {
    flexDirection: 'row', // Arrange children horizontally
    alignItems: 'center', // Align children vertically in the middle
    justifyContent: 'flex-start', // Distribute children evenly along the main axis
    flexWrap: 'wrap'
  },
  image: {
    width: 180,
    height: 180,
    margin: 5,
  },
});
export default HomeTab;