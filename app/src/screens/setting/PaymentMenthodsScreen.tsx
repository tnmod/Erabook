import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { styled } from 'nativewind';


const TextTw = styled(Text);
const ViewTw = styled(View);
const TouchableOpacityTw = styled(TouchableOpacity);
const ImageTw = styled(Image);
const ScrollviewTw = styled(ScrollView);

const DATA = [
    {
        id: 1,
        name: 'PayPal',
        uri: 'https://play-lh.googleusercontent.com/bDCkDV64ZPT38q44KBEWgicFt2gDHdYPgCHbA3knlieeYpNqbliEqBI90Wr6Tu8YOw',
        type: 'app'
    },
    {
        id: 2,
        name: 'Google Pay',
        uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/2008px-Google_%22G%22_Logo.svg.png',
        type: 'app'
    },
    {
        id: 3,
        name: 'Apple Pay',
        uri: 'https://thegioibantin.com/wp-content/uploads/2021/09/Mot-thay-doi-nho-trong-Marketing-Steve-Jobs-cuu-roi-Apple-tu-bo-vuc-pha-san-tro-thanh-sieu-cuong-the-gioi-1.jpg',
        type: 'app'
    },
    {
        id: 4,
        name: '**** **** **** 5567',
        uri: 'https://accgroup.vn/wp-content/uploads/2022/08/unnamed-1-1.png',
        type: 'creditcard'
    },
    {
        id: 5,
        name: '**** **** **** 8456',
        uri: 'https://media.wired.com/photos/5926dea77034dc5f91bece36/master/w_1600%2Cc_limit/Mastercard3-1.jpg',
        type: 'creditcard'
    }
]

const PaymentMenthodsScreen: React.FC = () => {
    return (
        <ViewTw className='flex-1 bg-white px-6 pt-4'>
            {
                DATA.map((item, index) => (
                    <ViewTw className=' ' key={item.id}>
                        <ViewTw className='flex-row items-center'>
                            <ImageTw className='grow-0 w-12 h-12 rounded-full mr-4' source={{ uri: item.uri }} />
                            <TextTw className='grow text-black font-bold text-base' >{item.name}</TextTw>
                            <TouchableOpacityTw>
                                <TextTw className='grow-0 text-orange-400 font-bold text-base'>Connected</TextTw>
                            </TouchableOpacityTw>
                        </ViewTw>
                        {
                            index === DATA.length - 1 ? (
                                <ViewTw className='w-full bg-black opacity-0 my-4' style={[{ height: 1 }]}></ViewTw>
                            ) : (
                                <ViewTw className='w-full bg-black opacity-5 my-4' style={[{ height: 1 }]}></ViewTw>
                            )
                        }
                    </ViewTw>
                ))
            }

            <ViewTw className='absolute bottom-6 w-screen px-6'>
                <ViewTw className='w-full bg-black opacity-5 my-4' style={[{ height: 1 }]}></ViewTw>
                <TouchableOpacityTw className='flex-row bg-orange-400 p-4 justify-center items-center rounded-full'>
                    <TextTw className='mr-5 text-white font-bold text-base'>+</TextTw>
                    <TextTw className=' text-white font-bold text-base'>Add New</TextTw>
                </TouchableOpacityTw>
            </ViewTw>
        </ViewTw>
    )
}

export default PaymentMenthodsScreen

const styles = StyleSheet.create({})