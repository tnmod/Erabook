import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'

const Book: React.FC = () => {

  return (
    <SafeAreaView>
      <View style={[styles.container]}>
        <Text></Text>
        <Image source={require('../../assets/icon/Vectorr/bulletedlist.png')}></Image>
        <Text style={[styles.text1]}>About EraBook</Text>
      </View>
      <View style={[styles.img]}>
      <Image source={require('../../assets/icon/Vectorr/Vector.png')}></Image>
      <Text style={[styles.text1]}>Erabook v7.5.4</Text>
      </View>
      <View style={[styles.text2]}>
        <View style={[styles.container1]}>
        <Text style={[styles.text3]}>Job Vacancy</Text>
        <Image style={[styles.img1]} source={require('../../assets/icon/Vectorr/stack.png')}></Image>
        </View>
        <View style={[styles.container1]}>
        <Text style={[styles.text3]}>Fees</Text>
        <Image style={[styles.img2]} source={require('../../assets/icon/Vectorr/stack.png')}></Image>
        </View>
        <View style={[styles.container1]}>
        <Text style={[styles.text3]}>Developer</Text>
        <Image style={[styles.img3]} source={require('../../assets/icon/Vectorr/stack.png')}></Image>
        </View>
        <View style={[styles.container1]}>
        <Text style={[styles.text3]}>Partner</Text>
        <Image style={[styles.img4]} source={require('../../assets/icon/Vectorr/stack.png')}></Image>
        </View>
        <View style={[styles.container1]}>
        <Text style={[styles.text3]}>Accessibility</Text>
        <Image style={[styles.img5]} source={require('../../assets/icon/Vectorr/stack.png')}></Image>
        </View>
        <View style={[styles.container1]}>
        <Text style={[styles.text3]}>Feedback</Text>
        <Image style={[styles.img6]} source={require('../../assets/icon/Vectorr/stack.png')}></Image>
        </View>
        <View style={[styles.container1]}>
        <Text style={[styles.text3]}>Rate us</Text>
        <Image style={[styles.img7]} source={require('../../assets/icon/Vectorr/stack.png')}></Image>
        </View>
        <View style={[styles.container1]}>
        <Text style={[styles.text3]}>Visit Our Website</Text>
        <Image style={[styles.img8]} source={require('../../assets/icon/Vectorr/stack.png')}></Image>
        </View>
        <View style={[styles.container2]}>
        <Text style={[styles.text3]}>Follow us on Social Media</Text>
        <Image style={[styles.img9]} source={require('../../assets/icon/Vectorr/stack.png')}></Image>
        </View>
      </View>
    </SafeAreaView>
  )
}



export default Book

const styles = StyleSheet.create({

  container: {
    flex: 0,
    paddingHorizontal: 24,
    backgroundColor: 'white',
    flexDirection: 'row',
    paddingTop: 24,
    paddingBottom: 12,
},
container1: {
  flex: 0,
  paddingHorizontal: 24,
  flexDirection: 'row',
  paddingTop: 22,
  paddingBottom: 12,
},
container2: {
  flex: 0,
  paddingHorizontal: 24,
  flexDirection: 'row',
  paddingTop: 10,
  paddingBottom: 12,
},
  text1:{
    fontSize: 20,
    fontWeight: '700',
    color: 'black',
    justifyContent: 'space-between',
  },
  text3:{
    fontSize: 20,
    fontWeight: '600',
    color: 'black',
    justifyContent: 'space-between',
    height: 50
  },
  img:{
    alignItems: 'center',
    height: 50
  },
  text2:{
    alignItems: 'flex-start',
  },
  img1:{
    marginLeft: 200,
  },
  img2:{
    marginLeft: 270,
  },
  img3:{
    marginLeft: 225,
  },
  img4:{
    marginLeft: 245,
  },
  img5:{
    marginLeft: 200,
  },
  img6:{
    marginLeft: 225,
  },
  img7:{
    marginLeft: 245,
  },
  img8:{
    marginLeft: 160,
  },
  img9:{
    marginLeft: 80,
  }
  
})