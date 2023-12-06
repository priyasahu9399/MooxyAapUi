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

const NewPassword = ({navigation}) => {
  const [error, setEror] = useState();
  const [postdata, setPostdata] = useState({
    Password: null,
    re_Password: null,
  });

  const handleChange = (name, value) => {
    setPostdata({
      ...postdata,
      [name]: value,
    });
  };

  const LoginValidationSchema = yup.object().shape({
    Password: yup.string().required('Password is Required'),
    re_Password: yup.string().required('Please Re-enter Password '),
  });

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor={COLORS.primary} barStyle={'light-content'} />
      <ScrollView
        showsVerticalScrollIndicator={false}
        keyboardShouldPersistTaps="handled"
        style={styles.innercontainer}>
        <Text style={styles.heading}>Set New Password</Text>
        <Text style={styles.subheading}>Please create your new password. </Text>
        <Formik
          validationSchema={LoginValidationSchema}
          initialValues={postdata}
          onSubmit={values => {
            if (values.Password === values.re_Password) {
              navigation.navigate('Verification');
            }
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
                  placeholder={'Password'}
                  value={values.Password}
                  onChangeText={handleChange('Password')}
                  errors={touched?.Password && errors?.Password}
                  icon
                  secureTextEntry
                />
                <InputBox
                  nineone
                  placeholder={'Re- enter Password'}
                  value={values.re_Password}
                  onChangeText={handleChange('re_Password')}
                  errors={touched?.re_Password && errors?.re_Password}
                  icon
                  secureTextEntry
                />

                <ButtonCustom
                  children="CONFIRM"
                  btnStyle={[styles.btn, {marginBottom: height * 0.1}]}
                  onPress={handleSubmit}
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

export default connect(mapStateToProps, mapDispatchToProps)(NewPassword);
