import { StyleSheet, Text, View, Image, ScrollView, FlatList } from 'react-native'
import EbookItem2 from '../../components/Item/EbookItem2'
import React from 'react'
import axios from 'axios'
import {useState , useEffect } from 'react'

const gap = 18;

const DiscoverScreen = () => {

  const [DATA, setDATA] = useState([
    
  ]);

  const getBook = async () => {
    const response = await axios.get("https://647860ae362560649a2da538.mockapi.io/BookList");
    console.log(response.data);
    setDATA(response.data);
  }

  useEffect(() => {
    getBook()
  
    return () => {
    }
  }, [])
  

  return (
    <ScrollView style={styles.contrainer}>
      <View style={[styles.flexRow, styles.justifyBetween]}>
        <View style={[styles.flexRow, styles.center]}>
          <Image style={{ width: 30, height: 30 }} source={require('../../assets/icon/main/main-icon.png')} />
          <Text style={[styles.big_text, { marginLeft: 15 }]}>Discover</Text>
        </View>
        <View style={[styles.flexRow, styles.center]}>
          <Image style={{ width: 30, height: 30 }} source={require('../../assets/icon/System/search.png')} />
        </View>
      </View>
      <View style={[styles.flexRow, styles.justifyBetween, { marginTop: 50, marginBottom: 30, alignItems: 'center' }]}>
        <Text style={[styles.big_text]}>Top Charts</Text>
        <Image style={{ width: 35, height: 35 }} source={require('../../assets/icon/Arrows/arrow-right.png')} />
      </View>
      <View>
        <FlatList
          horizontal
          data={DATA}
          renderItem={({ }) => <EbookItem2 />}
          contentContainerStyle={{ gap }}
          showsHorizontalScrollIndicator={false}
        />
      </View>


      <View style={[styles.flexRow, styles.justifyBetween, { marginTop: 40, marginBottom: 30, alignItems: 'center' }]}>
        <Text style={[styles.big_text]}>Top Selling</Text>
        <Image style={{ width: 35, height: 35 }} source={require('../../assets/icon/Arrows/arrow-right.png')} />
      </View>
      <View>
        <FlatList
          horizontal
          data={DATA}
          renderItem={({ }) => <EbookItem2 />}
          contentContainerStyle={{ gap }}
          showsHorizontalScrollIndicator={false}
        />
      </View>


      <View style={[styles.flexRow, styles.justifyBetween, { marginTop: 40, marginBottom: 30, alignItems: 'center' }]}>
        <Text style={[styles.big_text]}>Top Free</Text>
        <Image style={{ width: 35, height: 35 }} source={require('../../assets/icon/Arrows/arrow-right.png')} />
      </View>
      <View>
        <FlatList
          horizontal
          data={DATA}
          renderItem={({ }) => <EbookItem2 />}
          contentContainerStyle={{ gap }}
          showsHorizontalScrollIndicator={false}
        />
      </View>


      <View style={[styles.flexRow, styles.justifyBetween, { marginTop: 40, marginBottom: 30, alignItems: 'center' }]}>
        <Text style={[styles.big_text]}>Top New Releases</Text>
        <Image style={{ width: 35, height: 35 }} source={require('../../assets/icon/Arrows/arrow-right.png')} />
      </View>
      <View>
        <FlatList
          horizontal
          data={DATA}
          renderItem={({ }) => <EbookItem2 />}
          contentContainerStyle={{ gap }}
          showsHorizontalScrollIndicator={false}
        />
      </View>

    </ScrollView>
  )
}

export default DiscoverScreen

const styles = StyleSheet.create({
  contrainer: {
    flex: 1,
    backgroundColor: "#FFFFFF",
    padding: 18
  },
  flexRow: {
    flexDirection: 'row',
  },
  justifyBetween: {
    justifyContent: "space-between"
  },
  center: {
    justifyContent: 'center',
    alignItems: 'center'
  },
  big_text: {
    fontFamily: 'Urbanist',
    fontStyle: 'normal',
    fontWeight: '700',
    fontSize: 24,
    color: "#212121",
  },
})