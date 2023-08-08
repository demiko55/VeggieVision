import React from 'react';
import { StyleSheet, ScrollView, View, TouchableOpacity, Image } from 'react-native';
import { SafeAreaView } from 'react-native';


const HomeTab = ()=>{

  return (
    <SafeAreaView style = {styles.container}>
      <ScrollView>
      <Image source={{uri:'https://res.cloudinary.com/dzvkuocfb/image/upload/v1691451483/eggplant1.jpg'}} style={styles.imgWrapper}/>
        <Image source={{uri:'https://res.cloudinary.com/dzvkuocfb/image/upload/v1691451476/celtuce.jpg'}} style={styles.imgWrapper}/>
        <Image source={{uri:'https://res.cloudinary.com/dzvkuocfb/image/upload/v1691451474/cauliflower.jpg'}} style={styles.imgWrapper}/>
        <Image source={{uri:'https://res.cloudinary.com/dzvkuocfb/image/upload/v1691451471/amaranthusTricolor.jpg'}} style={styles.imgWrapper}/>
        <Image source={{uri:'https://res.cloudinary.com/dzvkuocfb/image/upload/v1691451464/waterSpinach.jpg'}} style={styles.imgWrapper}/>
        <Image source={{uri:'https://res.cloudinary.com/dzvkuocfb/image/upload/v1691451460/garlandChrysanthemum.jpg'}} style={styles.imgWrapper}/>
        <Image source={{uri:'https://res.cloudinary.com/dzvkuocfb/image/upload/v1691451456/lotusRoot.jpg'}} style={styles.imgWrapper}/>
        <Image source={{uri:'https://res.cloudinary.com/dzvkuocfb/image/upload/v1691450851/chineseKale.jpg'}} style={styles.imgWrapper}/>
        <Image source={{uri:'https://res.cloudinary.com/dzvkuocfb/image/upload/v1691450804/garlicSprout.jpg'}} style={styles.imgWrapper}/>
      </ScrollView>

    </SafeAreaView>
  )
}
const styles = StyleSheet.create({
  container: {
    // justifyContent:'flex-start',
    // display: 'flex',
    flex: 1,
    flexWrap:'wrap',
    flexDirection:'row',
    marginTop: 50
    },
  imgWrapper:{
    width:"45%",
    height:200,
  }
  });
export default HomeTab;