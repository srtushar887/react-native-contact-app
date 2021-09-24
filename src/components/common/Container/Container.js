import React from 'react'
import { View, Text, ScrollView, SafeAreaView } from 'react-native'
import styles from './styles'

const Container = ({ style, children }) => {
    return (
        <SafeAreaView>
            <ScrollView>
                <View style={[styles.wrapper, style]}>
                    {children}
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

export default Container;
