

import React, { useState, Dispatch } from 'react';
import type { PropsWithChildren } from 'react';
import {
  Image,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import MainNagivator from './src/Navigator/MainNavigator';
import { NavigationContainer } from '@react-navigation/native';
import { store } from './src/redux/app/store';
import { Provider } from 'react-redux';
import EbookItem from './src/components/Item/EbookItem';
import DetailScreen from './src/screens/detail/DetailScreen';
import Notification from './src/screens/setting/Notification';
import Preferences from './src/screens/setting/Preferences';
import Security from './src/screens/setting/Security';





type SectionProps = PropsWithChildren<{
  title: string;
}>;
type Model = {
  name: String;
  age: Number;
}


const StatusBarIOS = () => {
  return (
    <View style={{ width: "100%", height: 42, paddingTop: 10, justifyContent: 'space-between', flexDirection: 'row', backgroundColor: 'white' }}>
      <View style={{ height: "100%", flex: 1, marginHorizontal: 20, justifyContent: 'center', alignItems: 'center', flexDirection: 'row' }}>
        <Text style={{ fontWeight: 'bold', fontSize: 16, color: 'black' }}>9:41</Text>
      </View>
      <View style={{ flex: 3 / 4 }}></View>
      <View style={{ height: "100%", flex: 1, marginHorizontal: 20, justifyContent: 'center', alignItems: 'center', flexDirection: 'row' }}>
        <Image style={{ width: 19, height: 16, margin: 2, resizeMode: 'stretch' }} source={require('./src/assets/statusbar-signal.png')} />
        <Image style={{ width: 22, height: 22, margin: 2 }} source={require('./src/assets/statusbar-wifi.png')} />
        <Image style={{ width: 27, height: 24, margin: 2, resizeMode: 'stretch' }} source={require('./src/assets/statusbar-battery.png')} />
      </View>
    </View>
  )
}


const App: React.FC<Model> = () => {

  return (
    <Provider store={store} >
      <NavigationContainer>
        <SafeAreaView style={{ flex: 1 }}>
          <StatusBarIOS />
          <StatusBar hidden={true} />
          {/* <MainNagivator /> */}
          {/* <EbookItem /> */}
          <Security/>
        </SafeAreaView>
      </NavigationContainer>
    </Provider>
  );
}

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
