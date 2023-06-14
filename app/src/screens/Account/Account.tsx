import { StyleSheet, Text, View, ScrollView, Image, TouchableOpacity, Pressable } from 'react-native'
import React, { useState } from 'react'
import Icon from 'react-native-vector-icons/AntDesign'
import { Switch } from 'react-native-switch';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../redux/rootState';
import { StackNavigationProp } from '@react-navigation/stack';
import { LogOut } from 'react-native-feather';
import { loginSuccess, logoutSuccess } from '../../redux/features/UserSilce';


export type RootStackParamList = {
  SettingNavigator: { id: number } | undefined;
};

const Account = () => {
  const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();
  const user = useSelector((state: RootState) => state.user.currentUser);
  const dispatch = useDispatch();
  const [language, setlanguage] = useState("English (US)")
  const [darkmode, setdarkmode] = useState(false);

  const changeMode = () => {
    setdarkmode(!darkmode);
  }

  return (
    <ScrollView style={styles.container}>
      <View style={styles.section}>
        <View style={[styles.line, { paddingVertical: 0, marginBottom: 10 }]}>
          <View style={styles.line_left}>
            <Image style={[styles.image, { marginRight: 10, width: 32, height: 32 }]} source={require('../../assets/icon/main/main-icon.png')}></Image>
            <Text style={styles.big_text}>Account</Text>
          </View>
          <TouchableOpacity style={{ borderWidth: 1, borderColor: 'black', borderRadius: 1000, padding: 2 }}>
            <Icon name='ellipsis1' size={16} color={'#212121'} />
          </TouchableOpacity>
        </View>
        <TouchableOpacity style={styles.line} onPress={() => { navigation.navigate('SettingNavigator', { screen: 'PersonalInfo' } as never) }}>
          <View style={styles.line_left}>
            <Image style={[styles.image, { marginRight: 20, width: 48, height: 48, padding: 0 }]} source={require('../../assets/images/avatardefault-dark.png')}></Image>
            <View>
              <Text style={styles.big_text}>{user.username}</Text>
              <Text style={styles.small_text}>{user.email}</Text>
            </View>
          </View>
          <Icon name='edit' size={16} color={'#212121'} />
        </TouchableOpacity>
      </View>
      <View style={styles.section}>
        <TouchableOpacity style={styles.line} onPress={() => { navigation.navigate('SettingNavigator' as never) }}>
          <View style={styles.line_left}>
            <View style={styles.containerImage}>
              <Image style={styles.image} source={require('../../assets/icon/Finance/credit-card.png')}></Image>
            </View>
            <View>
              <Text style={styles.big_text}>Payment Methods</Text>
            </View>
          </View>
          <Icon name='right' size={16} color={'#212121'} />
        </TouchableOpacity>
      </View>
      <View style={styles.section}>
        <TouchableOpacity style={styles.line}>
          <View style={styles.line_left}>
            <View style={[styles.containerImage, { backgroundColor: '#eef4ff' }]}>
              <Image style={styles.image} source={require('../../assets/icon/System/user.png')}></Image>
            </View>
            <View>
              <Text style={styles.big_text}>Personal Info</Text>
            </View>
          </View>
          <Icon name='right' size={16} color={'#212121'} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.line}>
          <View style={styles.line_left}>
            <View style={[styles.containerImage, { backgroundColor: '#fff2f3' }]}>
              <Image style={styles.image} source={require('../../assets/icon/System/bell-2.png')}></Image>
            </View>
            <View>
              <Text style={styles.big_text}>Notification</Text>
            </View>
          </View>
          <Icon name='right' size={16} color={'#212121'} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.line}>
          <View style={styles.line_left}>
            <View style={[styles.containerImage, { backgroundColor: '#f3f1ff' }]}>
              <Image style={styles.image} source={require('../../assets/icon/System/settings-2.png')}></Image>
            </View>
            <View>
              <Text style={styles.big_text}>Preferences</Text>
            </View>
          </View>
          <Icon name='right' size={16} color={'#212121'} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => { navigation.navigate('SettingNavigator', { screen: 'ChangePassword' } as never) }} style={styles.line}>
          <View style={styles.line_left}>
            <View style={[styles.containerImage, { backgroundColor: '#edf9f1' }]}>
              <Image style={styles.image} source={require('../../assets/icon/Outside/shield.png')}></Image>
            </View>
            <View>
              <Text style={styles.big_text}>Security</Text>
            </View>
          </View>
          <Icon name='right' size={16} color={'#212121'} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.line}>
          <View style={styles.line_left}>
            <View style={[styles.containerImage, { backgroundColor: '#fff7eb' }]}>
              <Image style={styles.image} source={require('../../assets/icon/Outside/language.png')}></Image>
            </View>
            <View>
              <Text style={styles.big_text}>Language</Text>
            </View>
          </View>
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <Text style={[styles.big_text, { fontWeight: '400', marginRight: 15 }]}>{language}</Text>
            <Icon name='right' size={16} color={'#212121'} />
          </View>
        </TouchableOpacity>
        <Pressable onPress={changeMode} style={styles.line}>
          <View style={styles.line_left}>
            <View style={[styles.containerImage, { backgroundColor: '#eef4ff' }]}>
              <Image style={styles.image} source={require('../../assets/icon/Outside/dark.png')}></Image>
            </View>
            <View>
              <Text style={styles.big_text}>Dark mode</Text>
            </View>
          </View>
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <Switch
              value={darkmode}
              onValueChange={(val) => setdarkmode(val)}
              disabled={false}
              circleSize={30}
              barHeight={30}
              circleBorderWidth={2}
              //inactive
              circleInActiveColor={'#495057'}
              circleBorderInactiveColor={'#dee2e6'}
              backgroundInactive={'#dee2e6'}
              //active
              circleActiveColor={'#495057'}
              circleBorderActiveColor={'#adb5bd'}
              backgroundActive={'#adb5bd'}

              changeValueImmediately={true} // if rendering inside circle, change state immediately or wait for animation to complete
              innerCircleStyle={{ alignItems: "center", justifyContent: "center" }} // style for inner animated circle for what you (may) be rendering inside the circle
              outerCircleStyle={{}} // style for outer animated circle
              renderActiveText={false}
              renderInActiveText={false}
              switchLeftPx={2} // denominator for logic when sliding to TRUE position. Higher number = more space from RIGHT of the circle to END of the slider
              switchRightPx={2} // denominator for logic when sliding to FALSE position. Higher number = more space from LEFT of the circle to BEGINNING of the slider
              switchWidthMultiplier={2} // multiplied by the `circleSize` prop to calculate total width of the Switch
              switchBorderRadius={30} // Sets the border Radius of the switch slider. If unset, it remains the circleSize.
            />

          </View>
        </Pressable>
      </View>
      <View style={[styles.section, { borderBottomWidth: 0 }]}>
        <TouchableOpacity style={styles.line}>
          <View style={styles.line_left}>
            <View style={[styles.containerImage, { backgroundColor: '#edf9f1' }]}>
              <Image style={styles.image} source={require('../../assets/icon/System/file.png')}></Image>
            </View>
            <View>
              <Text style={styles.big_text}>Help Center</Text>
            </View>
          </View>
          <Icon name='right' size={16} color={'#212121'} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.line}>
          <View style={styles.line_left}>
            <View style={[styles.containerImage, { backgroundColor: '#fff7eb' }]}>
              <Image style={styles.image} source={require('../../assets/icon/System/circle-information.png')}></Image>
            </View>
            <View>
              <Text style={styles.big_text}>About Erabook</Text>
            </View>
          </View>
          <Icon name='right' size={16} color={'#212121'} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.line} onPress={() => { dispatch(logoutSuccess()) }}>
          <View style={styles.line_left}>
            <View style={[styles.containerImage, { backgroundColor: '#fff2f3' }]}>
              <Image style={styles.image} source={require('../../assets/icon/Outside/logout.png')}></Image>
            </View>
            <View>
              <Text style={[styles.big_text, { color: '#ea5050' }]}>Logout</Text>
            </View>
          </View>
        </TouchableOpacity>
      </View>
    </ScrollView>
  )
}

export default Account

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    paddingHorizontal: 24,
    paddingTop: 12
  },
  section: {
    borderBottomColor: '#EEEEEE',
    borderBottomWidth: 1,
  },
  line: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 18
  },
  line_left: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
  icon: {
    width: 48,
    height: 48,
  },
  big_text: {
    fontFamily: 'Urbanist',
    fontStyle: 'normal',
    fontWeight: '700',
    fontSize: 17,
    color: "#212121",
    marginVertical: 5
  },
  small_text: {
    fontFamily: 'Urbanist',
    fontStyle: 'normal',
    fontWeight: '400',
    fontSize: 14,
    color: "#212121",
    marginVertical: 5,
  },
  image: {
    width: 28,
    height: 28,
    borderRadius: 31
  },
  containerImage: {
    borderRadius: 10000,
    backgroundColor: '#edf9f1',
    width: 48,
    height: 48,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 20
  }
})