import React, {useState, useRef} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
  TouchableOpacity,
  ScrollView,
  ImageBackground,
} from 'react-native';
import {COLORS, FONTS, images, icons, data} from '../../constants';
import styles from './styles';
const {height, width} = Dimensions.get('window');
import {connect, useDispatch} from 'react-redux';
import {AUTH_TOKEN} from './../../redux/types';
import RBSheet from 'react-native-raw-bottom-sheet';
import ButtonCustom from './../../component/Button';
import Share from 'react-native-share';

// LearningVideoCheckList
const DrawerList = ({icon, title, onPress}) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.collapsbox}>
      <Image source={icon} style={styles.collapsimg} />
      <Text style={styles.collapstitle}>{title}</Text>
    </TouchableOpacity>
  );
};

const DrawerScreen = ({navigation}) => {
  const dispatch = useDispatch();
  const refRBSheet = useRef();
  const share = () => {
    const options = {
      message: 'hello dear',
      url: 'http:product.hsgh.pmng',
      email: 'priyasahu833242@gmail.com',
    };
    Share.open(options)
      .then(res => {
        console.log(res);
      })
      .catch(err => {
        err && console.log(err);
      });
  };
  return (
    <ScrollView style={{height: height}} showsVerticalScrollIndicator={false}>
      <ImageBackground source={images.drawbg} style={styles.drawbg}>
        <TouchableOpacity onPress={() => navigation?.closeDrawer()}>
          <Image source={icons.x} style={styles.cross} />
        </TouchableOpacity>
        <View style={styles.row}>
          <View style={styles.logobox}>
            <Image source={images.profile3} style={styles.logo} />
          </View>
          <View style={{marginLeft: width * 0.08}}>
            <Text style={styles.title}>Sonal Mehra</Text>
            <View style={styles.row}>
              <Image
                source={icons.location2}
                style={[
                  styles.collapsimg,
                  {
                    marginRight: width * 0.01,
                    marginLeft: width * 0,
                    height: width * 0.04,
                  },
                ]}
              />
              <Text style={[styles.collapstitle, {fontSize: width * 0.03}]}>
                Bhopal
              </Text>
            </View>
          </View>
        </View>
        <DrawerList
          icon={icons.user}
          title="Profile"
          onPress={() => navigation.navigate('Profile')}
        />
        <DrawerList
          icon={icons.myorder}
          title="My Orders"
          onPress={() => navigation.navigate('MyOrder')}
        />
        <DrawerList
          icon={icons.notify1}
          title="Notification"
          onPress={() => navigation.navigate('Notification')}
        />
        <DrawerList
          icon={icons.help}
          title="Help & Support"
          onPress={() => navigation.navigate('FlashFilesDump')}
        />
        <DrawerList
          icon={icons.iicon}
          title="About Us"
          onPress={() => navigation.navigate('AboutUs')}
        />
        <DrawerList
          icon={icons.queicon}
          title="FAQ"
          onPress={() => navigation.navigate('FAQ')}
        />
        <DrawerList
          icon={icons.wallet}
          title="My Wallet"
          onPress={() => navigation.navigate('MobileWallet')}
        />
        <DrawerList
          icon={icons.term}
          title="Term & Condition"
          onPress={() => navigation.navigate('TermCondition')}
        />
        <DrawerList
          icon={icons.privacy}
          title="Privacy Policy"
          onPress={() => navigation.navigate('Privacy')}
        />
        <DrawerList
          icon={icons.share}
          title="Share App"
          onPress={share}
        />
        <DrawerList
          icon={icons.starw}
          title="Rate Us"
          onPress={() => navigation.navigate('RateUs')}
        />
        <DrawerList
          icon={icons.logout}
          title="Logout"
          onPress={() => refRBSheet.current.open()}
        />

        <Image source={images.idea} style={styles.idea} />

        <RBSheet
          ref={refRBSheet}
          closeOnDragDown={true}
          closeOnPressMask={false}
          customStyles={{
            wrapper: {
              backgroundColor: 'transparent',
            },
            container: {
              width: width * 0.84,
              borderTopLeftRadius: 50,
              borderTopRightRadius: 50,
              height: height * 0.17,
            },
            draggableIcon: {
              backgroundColor: '#ffff',
            },
          }}>
          <View style={styles.bottombox}>
            <TouchableOpacity onPress={() => refRBSheet.current.close()}>
              <Image source={icons.x} style={styles.bottomcross} />
            </TouchableOpacity>
            <Text style={[styles.collapstitle, {color: COLORS.black}]}>
              Are you sure you want to Logout?
            </Text>

            <View style={styles.rowbtn}>
              <ButtonCustom
                children="YES"
                btnStyle={{width: width * 0.34, height: height * 0.05}}
                onPress={() => {
                  refRBSheet.current.close(),
                    dispatch({
                      type: AUTH_TOKEN,
                      payload: null,
                    });
                }}
              />
              <ButtonCustom
                children="NO"
                btnStyle={styles.borderbtn}
                btntextStyle={{color: COLORS.primary}}
                onPress={() => refRBSheet.current.close()}
              />
            </View>
          </View>
        </RBSheet>
      </ImageBackground>
    </ScrollView>
  );
};

const mapStateToProps = state => ({});
const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(DrawerScreen);
