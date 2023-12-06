import React, {useEffect, useState} from 'react';
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
import {connect, useDispatch} from 'react-redux';
import styles from './styles';
import InputBox from './../../component/InputText/index';
import ButtonCustom from './../../component/Button/index';
import {Formik} from 'formik';
import * as yup from 'yup';

const {height, width} = Dimensions.get('window');

const ContactUs = ({navigation, token}) => {
  const [postdata, setpostdata] = useState({
    name: null,
    message: null,
    email: null,
  });

  const handleChange = (name, value) => {
    setpostdata({
      ...postdata,
      [name]: value,
    });
  };

  const LoginValidationSchema = yup.object().shape({
    name: yup.string().required('Please enter name'),
    email: yup.string().required('Email is Required'),
    message: yup.string().required('message is Required'),
  });

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor={COLORS.primary} barStyle={'light-content'} />
      <ScrollView
        keyboardShouldPersistTaps="handled"
        showsVerticalScrollIndicator={false}>
        <Image source={images.contact1} style={styles.oneImg} />
        <View style={styles.listrow}>
          <TouchableOpacity activeOpacity={0.6} style={styles.listbox}>
            <View style={styles.listimgbox}>
              <Image source={icons.phone} style={styles.listimg} />
            </View>
            <Text style={styles.listtext}>Call Us</Text>
          </TouchableOpacity>
          <TouchableOpacity activeOpacity={0.6} style={styles.listbox}>
            <View style={styles.listimgbox}>
              <Image source={icons.email} style={styles.listimg} />
            </View>
            <Text style={styles.listtext}>Email Us</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigation.navigate('ChatUs')}
            activeOpacity={0.6}
            style={styles.listbox}>
            <View style={styles.listimgbox}>
              <Image source={icons.community} style={styles.listimg} />
            </View>
            <Text style={styles.listtext}>Chat Us</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.innercontainer}>
          <Text style={styles.heading}>Quick Contact</Text>
          <Formik
            validationSchema={LoginValidationSchema}
            initialValues={postdata}
            onSubmit={values => {
              console.log(values), navigation.navigate('ContactUs2');
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
                    placeholder="Name"
                    value={values.name}
                    img={icons.user}
                    errors={touched?.name && errors?.name}
                    onChangeText={handleChange('name')}
                    errorstyle={{marginLeft: width * 0.062}}
                  />
                  <InputBox
                    placeholder="Email"
                    value={values.email}
                    img={icons.email}
                    keyboardType="email-address"
                    errors={touched?.email && errors?.email}
                    onChangeText={handleChange('email')}
                    errorstyle={{marginLeft: width * 0.062}}
                  />
                  <InputBox
                    placeholder="Message"
                    textAlignVertical="top"
                    multiline={true}
                    numberOfLines={8}
                    value={values.message}
                    errors={touched?.message && errors?.message}
                    onChangeText={handleChange('message')}
                    errorstyle={{marginLeft: width * 0.062}}
                  />
                  <ButtonCustom
                    children="MESSAGE SENT"
                    btnStyle={styles.messagebtn}
                    onPress={handleSubmit}
                  />
                </>
              );
            }}
          </Formik>
        </View>
      </ScrollView>
    </View>
  );
};
const mapStateToProps = state => ({});
const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(ContactUs);
