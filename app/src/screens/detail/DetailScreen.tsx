import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native'
import React, { useState } from 'react'
import { Popins } from '../../components/popins'
import Icon from 'react-native-vector-icons/Feather'
import Icon1 from 'react-native-vector-icons/FontAwesome'
import { ProgressBar } from 'react-native-paper'
import { color } from '@rneui/base'
// import { Image } from '@rneui/base'
// import { TouchableOpacity } from 'react-native-gesture-handler'

const DetailScreen: React.FC = () => {
  const [listicon, setlisticon] = useState(true);
 const seticon = () => {
  listicon == true ? setlisticon(false) : setlisticon(true)
 }
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity>
          <Icon name="arrow-left" style={styles.colorMain} size={26} />
        </TouchableOpacity>
        <View style={styles.social}>
          <TouchableOpacity onPress={seticon}>
            {/* <Icon name="file-plus" style={{color: '#F89300'}} size={26} /> */}
            {
              listicon == true ? (<Icon name="file-minus" style={styles.colorMain} size={26} />)
              : (<Icon name="file-plus" style={{color: '#F89300'}} size={26} />) 
            }
          </TouchableOpacity>
          <TouchableOpacity>
            <Icon name="send" style={[styles.colorMain, { marginStart: 25 }]} size={26} />
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.main}>
        <Image source={require('../../assets/images/harry_potter.jpg')} style={{ width: 150, height: 220, borderRadius: 10, marginEnd: 15 }} />
        <View>
          <Text style={[styles.text700, { width: 200, fontSize: 20 }]}>Harry Potter & the  Deathly  Hallows</Text>
          <Text style={[styles.text500, { color: '#F89300', marginTop: 7, fontSize: 12 }]}>J.K. Rowling</Text>
          <Text style={[styles.text400, { color: '#686868', fontSize: 11, marginTop: 7, marginBottom: 5 }]}>Released on Dec, 2015</Text>
          <View>
            <View style={styles.mainbutton}>
              <TouchableOpacity style={[styles.button]}>
                <Text style={styles.textbutton}>Fantasy</Text>
              </TouchableOpacity>
              <TouchableOpacity style={[styles.button]}>
                <Text style={styles.textbutton}>Fiction</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.mainbutton}>
              <TouchableOpacity style={[styles.button]}>
                <Text style={styles.textbutton}>Mystery</Text>
              </TouchableOpacity>
              <TouchableOpacity style={[styles.button]}>
                <Text style={styles.textbutton}>Magic</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.main}>
        <View style={[styles.viewcontent, { borderRightWidth: 2, borderColor: '#EEEEEE' }]}>
          <View style={{ flexDirection: 'row' }}>
            <Text style={[styles.text500, { fontSize: 18, marginEnd: 10, top: 0 }]}>4.9</Text>
            <Icon1 name="star-half-empty" style={styles.colorMain} size={22} />
          </View>
          <Text style={styles.viewtext}>6.8K reviews</Text>
        </View>
        <View style={[styles.viewcontent, { borderRightWidth: 2, borderColor: '#EEEEEE' }]}>
          <View style={{ flexDirection: 'row' }}>
            <Text style={[styles.text500, { fontSize: 18, marginEnd: 10, top: 0 }]}>5.6 MB</Text>
          </View>
          <Text style={styles.viewtext}>size</Text>
        </View>
        <View style={[styles.viewcontent, { borderRightWidth: 2, borderColor: '#EEEEEE' }]}>
          <View style={{ flexDirection: 'row' }}>
            <Text style={[styles.text500, { fontSize: 18, marginEnd: 10, top: 0 }]}>784</Text>
          </View>
          <Text style={styles.viewtext}>pages</Text>
        </View>
        <View style={styles.viewcontent}>
          <View style={{ flexDirection: 'row' }}>
            <Text style={[styles.text500, { fontSize: 18, marginEnd: 10, top: 0 }]}>50M+</Text>
          </View>
          <Text style={styles.viewtext}>purchases</Text>
        </View>
      </View>
      <TouchableOpacity style={{ backgroundColor: '#F89300', height: 50, marginTop: 20, borderRadius: 25, justifyContent: 'center', alignItems: 'center' }}>
        <Text style={[styles.text500, { fontSize: 18, color: 'white' }]} >Buy USD $9.99</Text>
      </TouchableOpacity>
      <View style={{ flexDirection: 'row', marginTop: 30, justifyContent: 'space-between', alignItems: 'center' }}>
        <Text style={[styles.text700, { fontSize: 20 }]}>
          About this Ebook
        </Text>
        <TouchableOpacity>
        <Icon name="arrow-right" style={{ color: '#F89300' }} size={26} />
        </TouchableOpacity>
      </View>
      <Text style={[styles.text400, { color: '#686868', fontSize: 15, marginTop: 15 }]}>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor  incididunt ut labore et dolore magagna aliqua. Ut  enim ad minim veniam, quis nostrud ...
      </Text>
      <View style={{ flexDirection: 'row', marginTop: 30, justifyContent: 'space-between', alignItems: 'center' }}>
        <Text style={[styles.text700, { fontSize: 18 }]}>
          Rantings & Reviews
        </Text>
        <TouchableOpacity>
        <Icon name="arrow-right" style={{ color: '#F89300' }} size={26} />
        </TouchableOpacity>
      </View>
      <View style = {styles.footer}>
        <View style= {[styles.footercontent, {borderRightWidth: 2, borderColor: '#EEEEEE', width: 145, marginTop: 15}]}>
          <Text style={[styles.text700, {fontSize: 38}]}>4.9</Text>
          <View style={{flexDirection: 'row', justifyContent: 'space-evenly'}}>
            <Icon1 name="star" style={{color: '#F89300', margin: 3}} size={22} />
            <Icon1 name="star" style={{color: '#F89300', margin: 3}} size={22} />
            <Icon1 name="star" style={{color: '#F89300', margin: 3}} size={22} />
            <Icon1 name="star" style={{color: '#F89300', margin: 3}} size={22} />
            <Icon1 name="star-half-empty" style={{color: '#F89300', margin: 3}} size={22} />
          </View>
          <Text style = {styles.text500}>(6.8k  reviews)</Text>
        </View>
        <View style= {[styles.footercontent1]}>
          <View style= {styles.viewpaper}>
            <Text>5</Text>
            <ProgressBar progress={0.9} color='#F89300' style={styles.paper}/>
          </View>
          <View style= {styles.viewpaper}>
            <Text>4</Text>
            <ProgressBar progress={0.7} color='#F89300' style={styles.paper}/>
          </View>
          <View style= {styles.viewpaper}>
            <Text>3</Text>
            <ProgressBar progress={0.12} color='#F89300' style={styles.paper}/>
          </View>
          <View style= {styles.viewpaper}>
            <Text>2</Text>
            <ProgressBar progress={0.2} color='#F89300' style={styles.paper}/>
          </View>
          <View style= {styles.viewpaper}>
            <Text>1</Text>
            <ProgressBar progress={0.08} color='#F89300' style={styles.paper}/>
          </View>
        </View>
      </View>
    </View>
  )
}

export default DetailScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 24,
    backgroundColor: 'white'
  },
  text: {
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
    justifyContent: 'center',
    alignItems: 'center'
  },
  colorMain: {
    color: '#192e51'
  },
  header: {
    flex: 0,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 30,
    height: 30
  },
  main: {
    // marginStart: 0,
    marginTop: 30,
    flexDirection: 'row',
    // flex: 1
  },
  footer: {
    flexDirection: 'row',
    borderBottomWidth: 2,
    borderBottomColor: '#EEEEEE',
    paddingBottom: 10,
    marginTop: 10
  },
  footercontent: {
    alignItems: 'center',
  },
  social: {
    flexDirection: 'row',
    height: 30
  },
  footercontent1: {
    flex: 1,
    marginStart: 13,
    marginTop: 17
  },
  mainbutton: {
    flexDirection: 'row',
    width: 115,
    justifyContent: 'space-between',
    marginTop: 8
  },
  button: {
    width: 55,
    height: 22,
    backgroundColor: '#EEEEEE',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5
  },
  textbutton: {
    fontSize: 9,
    color: '#686868'
  },
  viewcontent: {
    // flex:1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1
  },
  viewtext: {
    color: '#686868',
    fontSize: 11,
  },
  viewpaper: {
    flexDirection: 'row',
    flex: 1
  },
  paper: {
    marginTop: 7,
    marginStart: 5,
    width: 190,
    borderRadius: 5
  }
})