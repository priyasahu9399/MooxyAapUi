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

const {height, width} = Dimensions.get('window');

const ContactUs2 = ({navigation, token}) => {
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

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor={COLORS.primary} barStyle={'light-content'} />
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={styles.innercontainer}>
        <Image source={images.contact2} style={styles.oneImg} />
        <View style={styles.listrow}>
          <View activeOpacity={0.6} style={styles.listbox}>
            <Text style={styles.heading}>Call Us At</Text>

            <View style={styles.row}>
              <Image source={icons.phone} style={styles.listimg} />
              <Text style={styles.listtext}> +918222222222</Text>
            </View>
            <View style={styles.row}>
              <Image source={icons.phone} style={styles.listimg} />
              <Text style={styles.listtext}> +918222222222</Text>
            </View>
          </View>
        </View>

        <View style={styles.listrow}>
          <View activeOpacity={0.6} style={styles.listbox}>
            <Text style={styles.heading}>Email Us At</Text>

            <View style={styles.row}>
              <Image source={icons.email} style={styles.listimg} />
              <Text style={styles.listtext}>xyz@gmail.com</Text>
            </View>
            <View style={styles.row}>
              <Image source={icons.email} style={styles.listimg} />
              <Text style={styles.listtext}>abc@gmail.com</Text>
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};
const mapStateToProps = state => ({});
const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(ContactUs2);
