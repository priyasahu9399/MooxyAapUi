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
  ImageBackground,
} from 'react-native';
import {COLORS, FONTS, images, icons, data} from '../../constants';
import {connect, useDispatch} from 'react-redux';
import styles from './styles';
import InputBox from './../../component/InputText/index';
import ButtonCustom from './../../component/Button/index';

const {height, width} = Dimensions.get('window');

const Profile = ({navigation, token}) => {
  const [postdata, setpostdata] = useState({
    name: 'sonal mehra',
    fathersname: 'sonuu',
    email: 'sonalmehra@gmail.com',
    phoneNumber: '9399329555',
    alternatenumber: '+91 9988555622',
    address: 'Bhopal',
    dob: '28/11/2002',
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
      <ScrollView showsVerticalScrollIndicator={false}>
        <ImageBackground
          source={images.profilebg}
          style={styles.ImageBackground}>
          <TouchableOpacity
            onPress={() => navigation.navigate('EditProfile')}
            activeOpacity={0.6}>
            <View style={styles.profilebox}>
              <Image source={images.profile3} style={styles.profile} />
            </View>
            <Image source={icons.camera} style={styles.camera} />
          </TouchableOpacity>
          <Text style={styles.heading}>Sonal Mehra</Text>
          <Text style={styles.edit}>sonalmehra@gmail.com</Text>
        </ImageBackground>
        <View style={styles.innercontainer}>
          <InputBox
            placeholder="Name"
            value={postdata.name}
            editable={false}
            img={icons.user}
          />
          <InputBox
            placeholder="Father’s Name"
            value={postdata.fathersname}
            editable={false}
            img={icons.user}
          />
          <InputBox
            placeholder="Email"
            value={postdata.email}
            editable={false}
            img={icons.email}
          />
          <InputBox
            placeholder="Contact Number"
            keyboardType="numeric"
            maxLength={10}
            value={postdata.phoneNumber}
            editable={false}
            img={icons.phone}
          />
          <InputBox
            placeholder="Alternate Contact Number"
            value={postdata.alternatenumber}
            editable={false}
            img={icons.phone}
          />
          <InputBox
            placeholder="Address"
            value={postdata.address}
            editable={false}
            img={icons.location}
          />
          <InputBox
            placeholder="DOB"
            value={postdata.dob}
            editable={false}
            img={icons.dob}
          />

          <ButtonCustom
            children="EDIT PROFILE"
            btnStyle={styles.btn}
            onPress={() => navigation.navigate('EditProfile')}
          />
          <ButtonCustom
            children="DOWNLOAD CERTIFICATE"
            btnStyle={styles.btn}
            borderbtn
          />
        </View>
      </ScrollView>
    </View>
  );
};
const mapStateToProps = state => ({});
const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Profile);
