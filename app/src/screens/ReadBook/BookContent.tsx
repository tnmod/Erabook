import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
import { ScrollView } from 'react-native-gesture-handler'
import { Popins } from '../../components/popins';
import Icon from 'react-native-vector-icons/AntDesign';
import Icon1 from 'react-native-vector-icons/Feather';
const BookContent = () => {
  return (
    <View style={{ flex: 1 }}>
      <View style={{ flexDirection: "row", paddingTop: 20, alignItems: 'center', flex: 0, marginHorizontal: 24 }}>
        <TouchableOpacity style={{ flex: 0 }} >
          <Icon name="arrowleft" style={[styles.colorMain]} size={24} />
        </TouchableOpacity>
        <Text ellipsizeMode={'tail'} numberOfLines={1} style={[styles.text600, { fontSize: 18, flex: 1, marginHorizontal: 8 }]}>The Silence of the Lambse</Text>
        <View style={{ flexDirection: "row", justifyContent: "space-around", flex: 0 }}>
          <Icon name="search1" style={styles.colorMain} size={24} />
          <Icon1 name="mic" style={[styles.colorMain, { marginHorizontal: 8 }]} size={24} />
          <Icon1 name="more-horizontal" style={styles.colorMain} size={24} />
        </View>

      </View>
      <View style={{ width: '100%', height: 0.5, backgroundColor: 'grey', opacity: 0.5, marginTop: 16 }}></View>
      <View style={[styles.container, { flex: 1 }]}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <Text style={[styles.text400, { textAlign: 'justify' }]}>     Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla risus velit, hendrerit at augue at, consequat maximus nisl. Pellentesque enim est, malesuada ac condimentum a, ultrices quis risus. Morbi gravida non lectus quis semper. Suspendisse potenti. Ut in arcu eros. Proin pharetra, diam non tincidunt sagittis, velit magna luctus mi, non bibendum est dui ut est. Phasellus fringilla erat ipsum, sit amet aliquam urna pulvinar nec. In sit amet tortor vel nulla bibendum finibus. Etiam sit amet scelerisque sapien. Nullam malesuada laoreet felis sed congue. Donec luctus ultrices maximus. In sit amet elit in enim tempus congue. Donec dapibus, tellus sit amet euismod vestibulum, lectus augue hendrerit tortor, auctor consectetur purus ex at turpis.

            Nulla et ante non nisi placerat ullamcorper. In porta lobortis dui, ut cursus dolor tristique id. Fusce finibus nulla in gravida vulputate. Morbi at turpis ut arcu mollis vestibulum. Nunc eu fermentum nisi. Sed at quam in nisl consequat sodales. In tempor, urna ac condimentum tincidunt, ligula est finibus nulla, ut ullamcorper nisl lacus sit amet est.

            Aliquam vehicula sem mattis quam varius aliquam. Suspendisse lorem nisl, vulputate ut euismod eu, commodo sit amet urna. Praesent luctus posuere elit convallis pretium. Donec lacinia libero sed tellus ultrices tempor. Donec id aliquet dolor, vitae molestie elit. Quisque ornare risus nibh, vitae laoreet metus aliquet a. Aenean sit amet mi eu risus facilisis ultrices. Vivamus lectus ex, convallis eu egestas ut, luctus et orci. Nulla dictum, dolor non vulputate pulvinar, arcu sem tristique eros, id auctor mauris dolor et justo. Nullam eget metus urna. In vestibulum consectetur maximus. Integer vitae neque sit amet justo molestie pretium et in velit. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Maecenas non mollis nisl, eu luctus leo.

            Aenean pulvinar blandit ligula, non convallis tortor facilisis sed. Praesent magna lorem, aliquam eu maximus at, egestas eu odio. Maecenas tempor ornare magna, ut congue enim porttitor eget. Maecenas aliquet sit amet odio quis scelerisque. Curabitur ut faucibus sapien, vel lobortis massa. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Aenean sit amet varius neque, ac ultrices est.

            Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Pellentesque ullamcorper nibh in erat pretium, eu pharetra ante tempor. Suspendisse eget lacinia libero. Nam ac massa varius, dignissim justo eu, condimentum leo. Praesent vehicula mi at massa aliquet, id sagittis felis commodo. In facilisis libero in arcu cursus tristique. Morbi tristique id purus in mollis. Phasellus leo elit, facilisis non felis sed, semper venenatis urna. Phasellus eget lobortis nibh, eget pharetra dolor. Sed tristique dolor nisl, sed consequat nulla ornare vitae. Donec tincidunt maximus tortor non cursus. Praesent rhoncus lacinia congue. Etiam sit amet porttitor nunc. Sed imperdiet ex tellus, nec elementum diam aliquet a. Duis vel est sed nulla mollis ultricies.</Text>

          <View style={{ width: '100%', height: 30 }}></View>
        </ScrollView>
      </View>
    </View>
  )
}

export default BookContent

const styles = StyleSheet.create({
  container: {
    flex: 0,
    paddingHorizontal: 24,
  },
  text400: {
    color: '#192e51',
    fontFamily: Popins[400],
    fontSize: 16,
    top: 1.2
  },
  text700: {
    color: '#192e51',
    fontFamily: Popins[700],
    fontSize: 16,
    top: 1.2
  },
  text600: {
    color: '#192e51',
    fontFamily: Popins[600],
  },
  colorMain: {
    color: '#192e51'
  }
})