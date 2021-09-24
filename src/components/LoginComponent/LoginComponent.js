import React from 'react'
import { View, Text, Image } from 'react-native'
import Container from '../common/Container/Container';
import styles from './styles';
import CustomButton from '../common/CustomButton/CustomButton';
import Input from '../common/Input/Input';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/core';
import { REGISTER } from '../../constants/routeNames'

const LoginComponent = () => {
    const { navigate } = useNavigation();
    return (
        <Container>
            <Image height={70} width={70} source={require('../../assets/images/logo.png')} style={styles.logoImage} />
            <View>
                <Text style={styles.title}>Welcome to SRT CONTACTS</Text>
                <Text style={styles.subtitle}>Please Login Here</Text>

                <View style={styles.form}>
                    <Input
                        label="Username"
                        placeholder="Enter Username"
                        iconPosition="right"
                    // error={'This filed is required'}
                    />
                    <Input
                        label="Password"
                        placeholder="Enter Password"
                        secureTextEntry={true}
                        icon={<Text>Show</Text>}
                        iconPosition="right"
                    />
                    <CustomButton primary title="submit" />
                    <View style={styles.createSection}>
                        <Text style={styles.infoText}>Don't have an account?</Text>
                        <TouchableOpacity onPress={() => navigate(REGISTER)}>
                            <Text style={styles.linkBtn}>Register</Text>
                        </TouchableOpacity>
                    </View>
                </View>



            </View>


        </Container>
    )
}

export default LoginComponent;
