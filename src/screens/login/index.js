import React, {useEffect, useState, useRef} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
  TouchableOpacity,
  StatusBar,
  ScrollView,
} from 'react-native';
import {COLORS, FONTS, images, icons, data} from '../../constants';
import styles from './styles';
import {connect} from 'react-redux';
import InputBox from './../../component/InputText/index';
import ButtonCustom from './../../component/Button/index';
import {Formik} from 'formik';
import * as yup from 'yup';

const {height, width} = Dimensions.get('window');
const Login = ({navigation}) => {
  // const [error, setEror] = useState();
  const [postdata, setPostdata] = useState({
    email: null,
    Password: null,
  });

  const LoginValidationSchema = yup.object().shape({
    email: yup.string().required('Email is Required'),
    Password: yup.string().required('Password is Required'),
  });
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor={COLORS.primary} barStyle={'light-content'} />
      <ScrollView
        showsVerticalScrollIndicator={false}
        keyboardShouldPersistTaps="handled"
        style={styles.innercontainer}>
        <Text style={styles.heading}>Login</Text>
        <Text style={styles.subheading}>
          Please enter your email id & password.
        </Text>
        <Formik
          validationSchema={LoginValidationSchema}
          initialValues={postdata}
          onSubmit={values => {
            console.log(values), navigation.navigate('CreateAccount');
          }}>
          {({
            setFieldValue,
            handleChange,
            handleBlur,
            handleSubmit,
            touched,
            values,
            errors,
            isValid,
          }) => {
            return (
              <>
                <InputBox
                  nineone
                  placeholder={'Email'}
                  keyboardType={'email-address'}
                  onChangeText={handleChange('email')}
                  value={values?.email}
                  errors={touched?.email && errors?.email}
                />
                <InputBox
                  placeholder={'Password'}
                  onChangeText={handleChange('Password')}
                  value={values?.Password}
                  errors={touched?.Password && errors?.Password}
                  icon
                  secureTextEntry
                />
                <TouchableOpacity
                  onPress={() => navigation.navigate('ForgotPassword')}
                  style={{alignSelf: 'flex-end'}}>
                  <Text style={styles.forget}>Forgot Password?</Text>
                </TouchableOpacity>
                <ButtonCustom
                  onPress={handleSubmit}
                  children="LOGIN"
                  btnStyle={styles.btn}
                />
                <View style={styles.row}>
                  <Text style={styles.donthaveaccount}>
                    Don’t have an account?{' '}
                  </Text>
                  <TouchableOpacity
                    onPress={() => navigation.navigate('CreateAccount')}>
                    <Text style={styles.createone}>Create One</Text>
                  </TouchableOpacity>
                </View>

                <Text style={styles.or}>Or</Text>

                <ButtonCustom
                  children="LOGIN WITH OTP"
                  onPress={() => navigation.navigate('Verification')}
                  btnStyle={[styles.btn, {marginBottom: height * 0.1}]}
                />
              </>
            );
          }}
        </Formik>
      </ScrollView>
    </View>
  );
};

const mapStateToProps = state => ({});
const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
