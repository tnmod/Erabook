import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
import { ScrollView, TextInput } from 'react-native-gesture-handler'
import { Popins } from '../../components/popins';
import Icon from 'react-native-vector-icons/AntDesign';
import Icon1 from 'react-native-vector-icons/Feather';
import { Pressable } from 'react-native';

const BookRating = () => {
  return (
    <View style={[styles.container]}>
      <Text style={[styles.text700, { fontSize: 24, textAlign: "center" }]}>Rate this Ebook</Text>
      <View style={{ flexDirection: "row", justifyContent: "space-evenly", alignContent: "center" }}>
        <Icon name="star" style={[styles.coloredStar]} size={26} />
        <Icon name="star" style={[styles.coloredStar]} size={26} />
        <Icon name="star" style={[styles.coloredStar]} size={26} />
        <Icon name="star" style={[styles.coloredStar]} size={26} />
        <Icon name="staro" size={26} />
      </View>
      <Text style={[styles.text500, { fontSize: 14, marginTop: 40 }]}>Describe Your Experience (Optional)</Text>
      <TextInput style={[styles.ratinginput, { marginTop: 30 }]}></TextInput>
      <View style={{ flexDirection: "row", justifyContent: "space-evenly", alignContent: "center", marginTop: 50 }}>
        <TouchableOpacity style={[styles.btnCancel]}>
          <Text style={[styles.text700, { fontSize: 14, color: "#ff781f" }]}>Cancel</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.btnSubmit]} >
          <Text style={[styles.text700, { fontSize: 14, color: "white" }]}>Submit</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default BookRating

const styles = StyleSheet.create({
  container: {
    flex: 0,
    paddingHorizontal: 24,
    paddingTop: 20,
  },
  text400: {
    color: '#192e51',
    fontFamily: Popins[400],
    top: 1.2
  },
  text500: {
    color: '#192e51',
    fontFamily: Popins[500],
    top: 1.2
  },
  text700: {
    color: '#192e51',
    fontFamily: Popins[700],
    top: 1
  },
  coloredStar: {
    color: '#e6cc00'
  },
  ratinginput: {
    borderBottomWidth: 5,
    borderBottomColor: '#e6cc00'
  },
  btnCancel: {
    height: 50,
    width: 150,
    backgroundColor: '#ffdbac',
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
  btnSubmit: {
    height: 50,
    width: 150,
    backgroundColor: '#ff781f',
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
  }
})