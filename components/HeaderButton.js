import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import {HeaderButton} from 'react-navigation-header-buttons'
import {Ionicons} from '@expo/vector-icons'
import Colors from '../constants/Color'
import {Platform} from 'react-native'
const customHeaderButton = (props) => {
    return (
        <HeaderButton {...props} 
        IconComponent={Ionicons} 
        iconSize={23} 
        color={Platform.OS === 'android' ? 'white' : Colors.primerycolor}/>
    )
}

export default customHeaderButton

const styles = StyleSheet.create({})
