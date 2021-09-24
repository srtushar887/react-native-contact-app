import React from 'react'
import { View, Text, Image } from 'react-native'
import Container from '../common/Container/Container';
import styles from './styles';
import CustomButton from '../common/CustomButton/CustomButton';
import Input from '../common/Input/Input';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/core';
import { LOGIN } from '../../constants/routeNames'

const RegisterComponent = ({ onSubmit, onChange, form, errors, error, loading }) => {
    const { navigate } = useNavigation();
    return (
        <Container>
            <Image height={70} width={70} source={require('../../assets/images/logo.png')} style={styles.logoImage} />
            <View>
                <Text style={styles.title}>Welcome to SRT CONTACTS</Text>
                <Text style={styles.subtitle}>Create a free account</Text>

                <View style={styles.form}>
                    {error?.error && <Text>{error.error}</Text>}
                    <Input
                        label="Username"
                        placeholder="Enter Username"
                        iconPosition="right"
                        onChangeText={(value) => onChange({ name: 'userName', value: value })}
                        error={errors.userName || error?.username?.[0]}
                    />
                    <Input
                        label="First Name"
                        placeholder="Enter First Name"
                        iconPosition="right"
                        onChangeText={(value) => onChange({ name: 'firstName', value: value })}
                        error={errors.firstName}
                    />
                    <Input
                        label="Last Name"
                        placeholder="Enter Last Name"
                        iconPosition="right"
                        onChangeText={(value) => onChange({ name: 'lastName', value: value })}
                        error={errors.lastName}
                    />
                    <Input
                        label="Email"
                        placeholder="Enter Email"
                        iconPosition="right"
                        onChangeText={(value) => onChange({ name: 'email', value: value })}
                        error={errors.email}
                    />
                    <Input
                        label="Password"
                        placeholder="Enter Password"
                        secureTextEntry={true}
                        icon={<Text>Show</Text>}
                        iconPosition="right"
                        onChangeText={(value) => onChange({ name: 'password', value: value })}
                        error={errors.password}
                    />
                    <CustomButton
                        onPress={onSubmit}
                        loading={loading}
                        disabled={loading}
                        primary title="submit"
                    />
                    <View style={styles.createSection}>
                        <Text style={styles.infoText}>Already have an account?</Text>
                        <TouchableOpacity onPress={() => navigate(LOGIN)}>
                            <Text style={styles.linkBtn}>Login</Text>
                        </TouchableOpacity>
                    </View>
                </View>



            </View>


        </Container>
    )
}

export default RegisterComponent;
