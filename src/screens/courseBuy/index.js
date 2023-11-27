import React, {useState, useEffect} from 'react';
import {
  Image,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StatusBar,
  FlatList,
  ScrollView,
  StyleSheet,
  Dimensions,
} from 'react-native';
import {COLORS, FONTS} from './../../constants';
import styles from './styles';
import {icons, images} from './../../constants';
import {data} from './../../constants';
import {YellowBtn} from './../../component/Button/index';
import CourseBuyCart from './../../component/carts/coursebuycart';
import RazorpayCheckout from 'react-native-razorpay';

const {width, height} = Dimensions.get('window');
const CourseBuy = ({navigation}) => {
  const Rozarpayonline = async () => {
    var options = {
      description: 'Credits towards consultation',
      currency: 'INR',
      key: 'rzp_test_sRLd371Eatsnrl', // Your api key
      amount: 24000 * 100,
      name: 'Priya sahu',
      prefill: {
        contact: '9399329654',
      },
      theme: {color: COLORS.primary},
    };
    RazorpayCheckout?.open(options)
      .then(data => {
        alert(`Success`);
      })
      .catch(error => {
        // alert(`Error: ${error?.code} | ${error?.description}`);
      });
  };

  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      style={styles.mainContainer}>
      <StatusBar backgroundColor={COLORS.primary} barStyle="light-content" />

      <Image source={images.mooxylogo} style={styles.logo} />

      <FlatList
        data={data.courseBuy}
        renderItem={({item, index}) => (
          <CourseBuyCart
            title={item.title}
            time={item.time}
            date={item.date}
            img={item?.img}
            onPressChange={()=>navigation.navigate('Course')}
          />
        )}
      />

      <View
        style={[
          styles.bgblueBox,
          {marginBottom: height * 0.025, marginTop: height * 0.02},
        ]}>
        <View style={styles.refinputbox}>
          <TextInput
            placeholder="Have a referral code?"
            placeholderTextColor={COLORS.gray50}
            style={styles.input}
          />
          <Image source={icons.offerref} style={styles.icon} />
        </View>
        <YellowBtn
          children="APPLY"
          btnStyle={styles.btn}
          onPress={() => navigation.navigate('ReferEarn')}
        />
      </View>

      <View style={styles.bgblueBox}>
        <View style={styles.row}>
          <Text style={styles.subtitle}>Course Fee</Text>
          <Text style={styles.subtitle}>Rs 32,000</Text>
        </View>
      </View>
      <View style={styles.bgblueBox}>
        <View style={styles.row}>
          <Text style={[styles.subtitle, {width: width * 0.53}]}>
            Discount{' '}
            <Text style={[styles.subtitle, {color: '#F10A24'}]}>25%</Text>
          </Text>

          <View style={styles.row}>
            <Text style={[styles.subtitle, styles.price]}>Rs 32,000</Text>
            <Text style={styles.subtitle}>Rs 24,000</Text>
          </View>
        </View>
      </View>
      <View style={styles.bgblueBox}>
        <View style={styles.row}>
          <Text style={[styles.subtitle, {color: COLORS.black}]}>
            Total<Text style={styles.subtitle}>(incl. of all taxes)</Text>
          </Text>
          <Text style={[styles.subtitle, {color: COLORS.black}]}>
            Rs 24,000
          </Text>
        </View>
      </View>
      <View style={[styles.bgblueBox, {marginTop: height * 0.025}]}>
        <Text style={styles.title}>Choose a Payment Method</Text>
      </View>
      <TouchableOpacity
        activeOpacity={0.5}
        onPress={() => Rozarpayonline()}
        style={[styles.bgblueBox, styles.row]}>
        <Image source={images.online} style={styles.pymtimg} />
        <Text style={[styles.subtitle, {color: COLORS.black}]}>
          Online Payment
        </Text>
        <Image source={icons.rarrow} style={styles.icon} />
      </TouchableOpacity>
      <TouchableOpacity
        activeOpacity={0.5}
        style={[styles.bgblueBox, styles.row]}>
        <Image source={images.wallet} style={styles.pymtimg} />
        <Text
          style={[styles.subtitle, {color: COLORS.black, width: width * 0.4}]}>
          Mobile Wallet
        </Text>

        <Text
          style={[styles.subtitle, {color: COLORS.black, width: width * 0.16}]}>
          Balance:
        </Text>
        <Text
          style={[
            styles.subtitle,
            {color: COLORS.primary, width: width * 0.2, ...FONTS.sixHundred},
          ]}>
          Rs 1200
        </Text>

        <Image source={icons.rarrow} style={styles.icon} />
      </TouchableOpacity>

      <View
        style={[
          styles.bgblueBox,
          {marginBottom: height * 0.03, marginTop: height * 0.025},
        ]}>
        <Text style={styles.title}>Sonal Mehra</Text>
        <View style={[styles.row, {marginTop: height * 0.006}]}>
          <View style={styles.dot}></View>
          <Text style={[styles.title, {fontSize: width * 0.029}]}>
            8200123123
          </Text>
        </View>
        <View style={[styles.row, {marginTop: height * 0.006}]}>
          <View style={styles.dot}></View>
          <Text style={[styles.title, {fontSize: width * 0.029}]}>
            sonal@12345gmail.com
          </Text>
        </View>
        <View style={[styles.row, {marginTop: height * 0.006}]}>
          <View style={styles.dot}></View>
          <Text style={[styles.title, {fontSize: width * 0.029}]}>Bhopal</Text>
        </View>
      </View>
    </ScrollView>
  );
};

export default CourseBuy;
