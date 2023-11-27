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

const NewPassword = ({navigation}) => {
  const [error, setEror] = useState();
  const [postdata, setPostdata] = useState({
    Password: null,
    re_Password:null
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
        <Text style={styles.heading}>Set New Password</Text>
        <Text style={styles.subheading}>Please create your new password. </Text>
        <InputBox
          nineone
          placeholder={'Password'}
          keyboardType={'numeric'}
          value={postdata.Password}
          onChangeText={text => handleChange('Password', text)}
          errors={error}
          icon
          secureTextEntry
        />
        <InputBox
          nineone
          placeholder={'Re- enter Password'}
          keyboardType={'numeric'}
          value={postdata.re_Password}
          onChangeText={text => handleChange('re_Password', text)}
          errors={error}
          icon
          secureTextEntry
        />

        <ButtonCustom
          children="CONFIRM"
          btnStyle={[styles.btn, {marginBottom: height * 0.1}]}
          onPress={() => navigation.navigate('Verification')}
        />
      </ScrollView>
    </View>
  );
};

const mapStateToProps = state => ({});
const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(NewPassword);
