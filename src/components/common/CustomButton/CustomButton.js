import React, { useState } from 'react'
import { View, Text, TextInput, Touchable, ActivityIndicator } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler';
import colors from '../../../assets/theme/colors';
import styles from './styles';


const CustomButton = ({ title, secondary, primary, danger, loading, disabled, onPress }) => {

    const [focused, setFocused] = useState(false);

    const getBackgroundColor = () => {

        if (disabled) {
            return colors.gery;
        }

        if (primary) {
            return colors.primary;
        }

        if (secondary) {
            return colors.secondary;
        }
        if (danger) {
            return colors.danger;
        }


    };

    return (
        <TouchableOpacity
            disabled={disabled}
            onPress={onPress}
            style={[styles.wrapper, { backgroundColor: getBackgroundColor() }]}
        >
            <View style={[styles.loaderSection]}>
                {loading && <ActivityIndicator color={primary? colors.secondary: colors.primary} />}
                {title && <Text style={{ color: disabled ? 'black' : colors.white, paddingLeft: loading ? 5 : 0 }}>{title}</Text>}
            </View>

        </TouchableOpacity>
    )
}

export default CustomButton;
