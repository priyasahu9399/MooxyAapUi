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
  ImageBackground,
} from 'react-native';
import {COLORS, FONTS, images, icons, data} from '../../constants';
import styles from './styles';
import {connect} from 'react-redux';
import InputBox from './../../component/InputText/index';
import ButtonCustom from './../../component/Button/index';
import Modal from 'react-native-modal';
import OTPInputView from '@twotalltotems/react-native-otp-input';
import CheckBox from 'react-native-check-box';
import {Formik} from 'formik';
import * as yup from 'yup';

const {height, width} = Dimensions.get('window');

const CreateAccount = ({navigation}) => {
  const [error, setEror] = useState();
  const [isSelected, setisSelected] = useState('false');
  const [isModalVisible, setModalVisible] = useState(false);
  const [modalActive, setmodalActive] = useState(false);

  const [postdata, setPostdata] = useState({
    name: null,
    email: null,
    phonenumber: null,
    Password: null,
    re_Password: null,
  });

  const LoginValidationSchema = yup.object().shape({
    email: yup.string().required('please enter email'),
    name: yup.string().required('please enter name'),
    phonenumber: yup.string().required('phone number is Required'),
    Password: yup.string().required('Password is Required'),
    re_Password: yup.string().required('please Re-Enter Password '),
  });

  const [currtime, setcurrtime] = useState(30);
  const [otp, setOtp] = useState();

  useEffect(() => {
    countdown();
  }, []);

  const countdown = () => {
    var timeLeft = 52;
    var timerId = setInterval(countdown, 1000);
    function countdown() {
      if (timeLeft == -1) {
        clearTimeout(timerId);
      } else {
        setcurrtime(timeLeft);
        timeLeft--;
      }
    }
  };
  const resendOtp = () => {
    countdown();
  };

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor={COLORS.primary} barStyle={'light-content'} />
      <ScrollView
        showsVerticalScrollIndicator={false}
        keyboardShouldPersistTaps="handled"
        style={styles.innercontainer}>
        <Text style={styles.heading}>Create Account</Text>
        <Text style={styles.subheading}>
          Please fill all the details to create your account.
        </Text>

        <Formik
          validationSchema={LoginValidationSchema}
          initialValues={postdata}
          onSubmit={values => {
            console.log(values), setModalVisible(true);
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
                  placeholder={'name'}
                  onChangeText={handleChange('name')}
                  value={values?.name}
                  errors={touched?.name && errors?.name}
                />
                <InputBox
                  nineone
                  placeholder={'Contact Number'}
                  keyboardType={'numeric'}
                  onChangeText={handleChange('phonenumber')}
                  value={values?.phonenumber}
                  maxLength={10}
                  errors={touched?.phonenumber && errors?.phonenumber}
                />
                <InputBox
                  nineone
                  placeholder={'Email'}
                  keyboardType={'email-address'}
                  onChangeText={handleChange('email')}
                  value={values?.email}
                  errors={touched?.email && errors?.email}
                />
                <InputBox
                  nineone
                  placeholder={'Password'}
                  onChangeText={handleChange('Password')}
                  value={values?.Password}
                  errors={touched?.Password && errors?.Password}
                  icon
                  secureTextEntry
                />
                <InputBox
                  nineone
                  placeholder={'Re-enter Password'}
                  onChangeText={handleChange('re_Password')}
                  value={values?.re_Password}
                  errors={touched?.re_Password && errors?.re_Password}
                  icon
                  secureTextEntry
                />

                <CheckBox
                  isChecked={!isSelected}
                  onClick={() => setisSelected(!isSelected)}
                  checkedCheckBoxColor={COLORS.primary}
                  uncheckedCheckBoxColor={COLORS.primary}
                  rightTextView={
                    <View style={styles.row}>
                      <Text style={styles.checktext}> I agree with {''}</Text>
                      <TouchableOpacity>
                        <Text style={styles.term}>Terms & Conditions.</Text>
                      </TouchableOpacity>
                    </View>
                  }
                  style={{marginLeft: width * 0.026}}
                />
                <ButtonCustom
                  children="VERIFY"
                  btnStyle={[styles.btn, {marginBottom: height * 0.06}]}
                  onPress={handleSubmit}
                />
              </>
            );
          }}
        </Formik>

        <Modal
          backdropOpacity={0.5}
          onBackdropPress={() => setModalVisible(false)}
          isVisible={isModalVisible}>
          <View style={styles.modalBox}>
            {currtime == 0 ? (
              <TouchableOpacity
                style={{alignSelf: 'flex-end', textAlign: 'right'}}
                onPress={resendOtp}>
                <Text style={styles.Resend}>Resend OTP</Text>
              </TouchableOpacity>
            ) : (
              <Text style={styles.time}>Resend in {currtime} sec</Text>
            )}

            <OTPInputView
              style={styles.otpCheck}
              pinCount={4}
              autoFocusOnLoad={false}
              codeInputFieldStyle={styles.underlineStyleBase}
              onCodeFilled={code => {
                setOtp(code);
                console.log(`Code is ${code}, you are good to go!`);
              }}
            />

            <ButtonCustom
              children="CREATE MY ACCOUNT"
              btnStyle={styles.btn}
              onPress={() => {
                setmodalActive(true);
              }}
            />
            <View style={styles.row}>
              <Text style={styles.donthaveaccount}>
                Already have an account ? {''}
              </Text>
              <TouchableOpacity
                onPress={() => {
                  navigation.navigate('Login'), setModalVisible(false);
                }}>
                <Text style={styles.createone}>Login</Text>
              </TouchableOpacity>
            </View>
          </View>
        </Modal>

        <Modal
          onBackdropPress={() => setmodalActive(false)}
          backdropOpacity={0.5}
          isVisible={modalActive}>
          <ImageBackground
            source={images.accountsuc}
            style={styles.succesimg}
          />
        </Modal>
      </ScrollView>
    </View>
  );
};

const mapStateToProps = state => ({});
const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(CreateAccount);
