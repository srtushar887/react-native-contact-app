import { useNavigation } from "@react-navigation/core";
import React, { useState, useEffect, useContext } from "react";
import { View, Text } from "react-native";
import RegisterComponent from "../../components/SignupComponent/SignupComponent";
import envs from '../../config/env';
import { LOGIN } from "../../constants/routeNames";
import register, { clearAuthState } from "../../context/actions/auth/register";
import { GlobalContext } from "../../context/Provider";
import axiosInstance from "../../helpers/axiosInterceptor";
import { useFocusEffect } from "@react-navigation/core";


const Register = () => {
    const { navigate } = useNavigation();
    const [form, setForm] = useState({});
    const [errors, setErrors] = useState({});
    const { authDispatch, authState: { error, loading, data } } = useContext(GlobalContext);


    useEffect(() => {
        if (data) {
            navigate(LOGIN);
        }
    }, [data]);


    useFocusEffect(
        React.useCallback(() => {
            if (data || error) {
                clearAuthState()(authDispatch);
            }
        }, [data, error])
    );

    const onChange = ({ name, value }) => {
        setForm({ ...form, [name]: value });




        if (value !== '') {

            if (name === 'password') {
                if (value.length < 6) {
                    setErrors(prev => {
                        return { ...prev, [name]: 'Password Should be min 6 Char long' };
                    })
                } else {
                    setErrors(prev => {
                        return { ...prev, [name]: null };
                    })
                }
            } else {
                setErrors(prev => {
                    return { ...prev, [name]: null };
                })
            }


        } else {
            setErrors(prev => {
                return { ...prev, [name]: 'This field is required' };
            })
        }
    };

    const onSubmit = () => {
        // console.log(form);
        if (!form.userName) {
            setErrors(prev => {
                return { ...prev, userName: 'Please Enter Your Username' };
            })
        }

        if (!form.firstName) {
            setErrors(prev => {
                return { ...prev, firstName: 'Please Enter Your First Name' };
            })
        }
        if (!form.lastName) {
            setErrors(prev => {
                return { ...prev, lastName: 'Please Enter Your Last Name' };
            })
        }
        if (!form.email) {
            setErrors(prev => {
                return { ...prev, email: 'Please Enter Your Email' };
            })
        }
        if (!form.password) {
            setErrors(prev => {
                return { ...prev, password: 'Please Enter Your Password' };
            })
        }

        if (Object.values(form).length === 5 &&
            Object.values(form).every((item) => item.trim().length > 0) &&
            Object.values(errors).every((item) => !item)) {

            register(form)(authDispatch);

        }



    };

    return (
        <RegisterComponent
            onSubmit={onSubmit}
            onChange={onChange}
            form={form} errors={errors}
            error={error}
            loading={loading}
        />
    )
};

export default Register;