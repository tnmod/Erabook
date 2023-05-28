import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native'
import React, { useState } from 'react'
import Animated, { useAnimatedStyle, useSharedValue, withTiming } from 'react-native-reanimated';

const TabBottomBarCustom = ({ state, descriptors, navigation }: { state: any, descriptors: any, navigation: any }) => {

  const data = [];

  return (
    <View style={{ flexDirection: 'row', backgroundColor: 'white' }}>
      {state.routes.map((route: any, index: any) => {

        const { options } = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
              ? options.title
              : route.name;

        const [isFocused, setFocus] = React.useState(false);
        // = state.index === index;
        React.useEffect(() => {
          if (state.index == index) {
            setFocus(true);
          } else {
            setFocus(false);
          }
        })

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            // The `merge: true` option makes sure that the params inside the tab screen are preserved
            navigation.navigate({ name: route.name, merge: true });
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: 'tabLongPress',
            target: route.key,
          });
        };

        const widthAnimated = useSharedValue({ flex: 0 });
        //get layout
        const onLayout = (event: any) => {
          var { width, height } = event.nativeEvent.layout;
        }

        React.useEffect(() => {
          if (state.index == index) {
            widthAnimated.value = { flex: 0 };
          } else {
            widthAnimated.value = { flex: 1 };
          }
        }, [state.index]);

        const widthAnimationStyle = useAnimatedStyle(() => {
          return {
            flex: withTiming(widthAnimated.value.flex, { duration: 1000 }),
          };
        });

        return (
          <Animated.View key={route.key} onLayout={onLayout} style={[isFocused ? [styles.containerFocus, widthAnimationStyle] : styles.containerDefault]}
          ><TouchableOpacity
            accessibilityRole="button"
            accessibilityState={isFocused ? { selected: true } : {}}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarTestID}
            onPress={onPress}
            onLongPress={onLongPress}
            style={isFocused ? [styles.heroActive,] : styles.hero}>
              <Image style={{ tintColor: isFocused ? '#7A00E6' : '#23004C', marginRight: 6, width: 24, height: 24 }} source={
                index == 0 ?
                  require('../assets/icon/bottombar/home.png')
                  : index == 1 ?
                    require('../assets/icon/bottombar/search.png')
                    : index == 2 ?
                      require('../assets/icon/bottombar/stack.png')
                      : index == 3 ?
                        require('../assets/icon/bottombar/heart.png')
                        : index == 4 ?
                          require('../assets/icon/bottombar/user.png')
                          : require('../assets/icon/bottombar/null.png')} />
              {
                isFocused ?
                  <Text style={{ color: "#7A00E6" }}>
                    {label}
                  </Text>
                  : <View></View>
              }
            </TouchableOpacity>
          </Animated.View>
        );
      })}
    </View>
  );
}

export default TabBottomBarCustom

const styles = StyleSheet.create({
  containerFocus: {
    flex: 0,
    height: 66,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
  },
  containerDefault: {
    flex: 1,
    height: 66,
    backgroundColor: 'white',
    // borderColor: 'black',
    // borderWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  hero: {
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',

  },
  heroActive: {
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    backgroundColor: 'rgba(122, 0, 230, 0.1)',
    paddingHorizontal: 12,
    paddingRight: 16,
    paddingVertical: 8,
    marginHorizontal: 12,
    borderRadius: 50
  }

})