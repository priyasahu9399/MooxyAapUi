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
const {height, width} = Dimensions.get('window');

const ForgotPassword = ({navigation}) => {
  const [error, setEror] = useState();
  const [postdata, setPostdata] = useState({
    email: null,
  });

  const handleChange = (name, value) => {
    setPostdata({
      ...postdata,
      [name]: value,
    });
  };
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor={COLORS.primary} barStyle={'light-content'} />
      <ScrollView
        showsVerticalScrollIndicator={false}
        keyboardShouldPersistTaps="handled"
        style={styles.innercontainer}>
        <Text style={styles.heading}>Forgot Password</Text>
        <Text style={styles.subheading}>
          Please enter the email address associated with your account.
        </Text>
        <Text style={styles.subhead2}>
          We will email you verification code to reset your password.
        </Text>
        <InputBox
          nineone
          placeholder={'Email'}
          keyboardType={'email-address'}
          value={postdata.email}
          onChangeText={text => handleChange('email', text)}
          errors={error}
        />
        <ButtonCustom
          children="SEND"
          btnStyle={styles.btn}
          onPress={() => navigation.navigate('Verification')}
        />
      </ScrollView>
    </View>
  );
};

const mapStateToProps = state => ({});
const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(ForgotPassword);
