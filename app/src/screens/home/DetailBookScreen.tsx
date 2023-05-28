import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import * as Icon from "react-native-feather";
const DetatilBookScreen = () => {
    return (
        <View>
            <View style={{ flexDirection: "row" }}>
                <TouchableOpacity>
                    <Icon.ArrowLeft stroke="black" strokeWidth={4} />
                </TouchableOpacity>
                <View style={{ paddingLeft: 15 }}>
                    <Text style={{ fontSize: 20 }}>About This Book</Text>
                </View>
            </View>
            <Text style={{ marginTop: 10, marginBottom: 50 }}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras consequat tempus tortor, faucibus euismod orci facilisis accumsan. Donec tellus nulla, fermentum et tincidunt et, dapibus a arcu. Sed sed augue aliquam, aliquam velit nec, interdum lacus. Duis laoreet gravida rutrum. Proin feugiat sagittis sem, non gravida velit tempor sed. Donec ac facilisis tellus, sed fringilla augue. Integer sit amet mi nunc. Maecenas vulputate, lacus et convallis facilisis, quam libero congue risus, eget aliquam massa ante eget enim.
            </Text>
            <View style={{ flexDirection: 'row', justifyContent: 'space-around', marginBottom: 20 }}>
                <View>
                    <Text style={{ color: 'black', fontSize: 14 }}>Language</Text>
                    <Text>English</Text>
                </View>
                <View>
                    <Text style={{ color: 'black', fontSize: 14 }}>Age</Text>
                    <Text>20 & 18</Text>
                </View>
            </View>
        </View>
    )
}



export default DetatilBookScreen