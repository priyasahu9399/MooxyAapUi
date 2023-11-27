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
import ImagePicker from 'react-native-image-crop-picker';
import DatePicker from 'react-native-date-picker';
import {formattedDateServer} from './../../services/date';

const {height, width} = Dimensions.get('window');

const EditProfile = ({navigation, token}) => {
  const [postdata, setpostdata] = useState({
    img: images.profile3,
    name: null,
    fathersname: null,
    email: null,
    phoneNumber: null,
    alternatenumber: null,
    address: null,
    dob: null,
  });

  const handleChange = (name, value) => {
    setpostdata({
      ...postdata,
      [name]: value,
    });
  };

  const [date, setDate] = useState();
  const [open, setOpen] = useState(false);

  const OnSelectImage = () => {
    ImagePicker.openPicker({
      width: 300,
      height: 400,
      cropping: true,
    }).then(image => {
      handleChange('image', {
        uri: image.path,
        name: image.filename || Date.now() + '-' + image.path.slice(-10),
        type: image.mime,
      });
    });
  };

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor={COLORS.primary} barStyle={'light-content'} />
      <ScrollView
        keyboardShouldPersistTaps="handled"
        showsVerticalScrollIndicator={false}>
        <ImageBackground
          source={images.profilebg}
          style={styles.ImageBackground}>
          <TouchableOpacity onPress={OnSelectImage} activeOpacity={0.6}>
            <View style={styles.profilebox}>
              <Image
                source={
                  postdata.image ? {uri: postdata.image.uri} : images.profile3
                }
                style={styles.profile}
              />
            </View>
            <Image source={icons.camera} style={styles.camera} />
          </TouchableOpacity>
          <Text style={styles.heading}>Sonal Mehra</Text>
          <Text style={styles.edit}>sonalmehra@gmail.com</Text>
        </ImageBackground>
        <View style={styles.innercontainer}>
          <InputBox placeholder="Name" value={postdata.name} img={icons.user} />
          <InputBox
            placeholder="Father’s Name"
            value={postdata.fathersname}
            img={icons.user}
          />
          <InputBox
            placeholder="Email"
            value={postdata.email}
            img={icons.email}
            keyboardType="email-address"
          />
          <InputBox
            placeholder="Contact Number"
            keyboardType="numeric"
            maxLength={10}
            value={postdata.phoneNumber}
            img={icons.phone}
          />
          <InputBox
            placeholder="Alternate Contact Number"
            value={postdata.alternatenumber}
            img={icons.phone}
            maxLength={10}
            keyboardType="numeric"
          />
          <InputBox
            placeholder="Address"
            value={postdata.address}
            img={icons.location}
          />
          <TouchableOpacity activeOpacity={0.8} onPress={() => setOpen(true)}>
            <InputBox
              placeholder="DOB"
              // value={postdata.dob}
              img={icons.dob}
              editable={false}
              value={date}
            />
          </TouchableOpacity>
          <ButtonCustom
            children="SAVE"
            btnStyle={{
              width: width * 0.9,
              alignSelf: 'center',
              marginBottom: height * 0.03,
            }}
            onPress={() => navigation.goBack()}
          />

          <DatePicker
            modal
            title="Select date"
            mode="date"
            open={open}
            date={new Date()}
            onConfirm={d => {
              setOpen(false);
              setDate(formattedDateServer(d));
            }}
            onCancel={() => {
              setOpen(false);
            }}
            theme="light"
            textColor={COLORS.black}
          />
        </View>
      </ScrollView>
    </View>
  );
};
const mapStateToProps = state => ({});
const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(EditProfile);
