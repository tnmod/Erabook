import { StyleSheet, Text, View, Image, ScrollView, TouchableOpacity } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Popins } from '../../components/popins'
import Icon from 'react-native-vector-icons/AntDesign'

const Book: React.FC = () => {

  return (
    <ScrollView style={{ backgroundColor: 'white', flex: 1 }}>
      <View style={[styles.container]}>
        <TouchableOpacity style={{ flexDirection: 'row', alignItems: 'center', }}>
          <Icon size={24} name='arrowleft' color={'#192e51'} />
          <Text style={[styles.text500, { marginLeft: 12, fontSize: 18 }]}>Notification</Text>
        </TouchableOpacity>
        <View style={{ width: "100%", height: 0.5, backgroundColor: 'grey', opacity: 0.5, marginVertical: 12 }}></View>
        <View style={[{ marginTop: 12 }]}>
            <View style={[styles.container1]}>
                <Text style={[styles.text3]}>Notify me when...</Text>
            </View>
          <TouchableOpacity style={[styles.container1]}>
            <Text style={[styles.text3]}>There is a New Recommendation</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.container1]}>
            <Text style={[styles.text3]}>There's a New Book Series</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.container1]}>
            <Text style={[styles.text3]}>There is an update from Authors</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.container1]}>
            <Text style={[styles.text3]}>There are Price Drops Available</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.container1]}>
            <Text style={[styles.text3]}>When I Make a Purchase</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.container1]}>
            <Text style={[styles.text3]}>Enable</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.container1]}>
            <Text style={[styles.text3]}>Rate us</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.container1]}>
            <Text style={[styles.text3]}>Visit Our Website</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.container1]}>
            <Text style={[styles.text3]}>Follow us on Social Media</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  )
}



export default Book

const styles = StyleSheet.create({

  container: {
    flex: 1,
    paddingHorizontal: 24,
    backgroundColor: 'white',
  },
  container1: {
    flex: 0,
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
  },

  text1: {
    fontSize: 20,
    fontWeight: '700',
    color: 'black',
    justifyContent: 'space-between',
  },
  text3: {
    flex: 1,
    fontSize: 16,
    fontFamily: Popins[400],
    color: 'black',
    justifyContent: 'space-between',
    height: 42,
    textAlignVertical: 'center'
  },
  img: {
    width: 24,
    height: 24
  },


  color: {
    color: '#192e51',
  },
  textCenter: {
    textAlign: 'center',
    textAlignVertical: 'center'
  },
  text400: {
    color: '#192e51',
    fontFamily: Popins[400],
    top: 1.8,
  },
  text500: {
    color: '#192e51',
    fontFamily: Popins[500],
    top: 2,
  },
  text700: {
    color: '#192e51',
    fontFamily: Popins[700],
    top: 2.1,
  },
  center: {
    alignItems: 'center'
  },

})