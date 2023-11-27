import React, {useEffect, useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  TouchableOpacity,
  ScrollView,
  StatusBar,
  Image,
} from 'react-native';
import {COLORS, FONTS, images, icons} from '../../constants';
import Button from '../../component/Button';
import {connect, useDispatch} from 'react-redux';
import styles from './styles';
import OTPInputView from '@twotalltotems/react-native-otp-input';
import {AUTH_TOKEN} from './../../redux/types';
import {RNToasty} from 'react-native-toasty';
import {YellowBtn} from './../../component/Button/index';
const {height, width} = Dimensions.get('window');

const OTP = ({navigation}) => {
  const [loading, setLoading] = useState(false);
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
    <ScrollView
      showsVerticalScrollIndicator={false}
      keyboardShouldPersistTaps="handled"
      style={styles.container}>
      <StatusBar backgroundColor={COLORS.primary} barStyle={'light-content'} />

      <View style={[styles.bgblueBox, {marginTop: height * 0.015}]}>
        <Text style={styles.subheading}>
          Enter the verification code we just sent you on your email address.
        </Text>
      </View>
      <View style={styles.bgblueBox}>
        <OTPInputView
          style={styles.otpCheck}
          pinCount={4}
          autoFocusOnLoad
          codeInputFieldStyle={styles.underlineStyleBase}
          onCodeFilled={code => {
            setOtp(code);
            // handleSubmit(code);
            console.log(`Code is ${code}, you are good to go!`);
          }}
        />

        <View style={styles.box3}>
          {currtime == 0 ? null : (
            <Text style={styles.resend}>If you didn’t receive a code!</Text>
          )}
          {currtime == 0 ? (
            <TouchableOpacity
              style={{alignSelf: 'center', textAlign: 'center'}}
              onPress={resendOtp}>
              <Text style={styles.resent}>Resend</Text>
            </TouchableOpacity>
          ) : (
            <Text style={styles.time}>Resend in {currtime} sec</Text>
          )}
        </View>
      </View>
      <View style={styles.bgblueBox}>
        <YellowBtn
          children="PAY"
          btnStyle={styles.btn}
          onPress={() => navigation.navigate('OrderPlaced')}
        />
      </View>
    </ScrollView>
  );
};

const mapStateToProps = state => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(OTP);
