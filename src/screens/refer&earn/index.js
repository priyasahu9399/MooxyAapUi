import React, {useEffect, useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  Dimensions,
  TouchableOpacity,
  StatusBar,
  ScrollView,
  FlatList,
  Clipboard,
} from 'react-native';
import {COLORS, FONTS, images, icons, data} from '../../constants';
import styles from './styles';
import {connect} from 'react-redux';
import {YellowBtn} from './../../component/Button/index';

const {height, width} = Dimensions.get('window');

const ReferEarn = ({navigation}) => {
  const [loading, setLoading] = useState(false);
  const [copiedText, setCopiedText] = useState('#ABCD1234GH');

  const copyToClipboard = () => {
    Clipboard.setString(copiedText);
  };

  // const fetchCopiedText = async () => {
  //   const text = await Clipboard.getString();
  //   setCopiedText(text);
  // };
  return (
    <View style={styles.container}>
      {/* <Loader loading={loading} /> */}
      <StatusBar backgroundColor={COLORS.primary} barStyle={'light-content'} />
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={{width: width * 0.94, alignSelf: 'center'}}>
          <Text style={styles.heading}>
            Refer Your Friends & Earn{' '}
            <Text style={[styles.heading, {color: COLORS.primary}]}>
              Rs 2000
            </Text>
          </Text>
          <Image source={icons.gift} style={styles.gift} />

          <View style={styles.borderdot}>
            <View>
              <Text style={[styles.heading, {marginVertical: 0}]}>
                Your Referal Code
              </Text>
              <Text style={[styles.heading, {marginVertical: 0}]}>
                #ABCD1234GH
              </Text>
            </View>
            <YellowBtn children="COPY CODE" onPress={() => copyToClipboard()} />
          </View>

          <Text style={[styles.heading, {marginBottom: height * 0.01}]}>
            Share Your Referral Code On Mobile Number
          </Text>
        </View>

        <View style={styles.bgblueBox}>
          <View style={styles.refinputbox}>
            <TextInput
              placeholder="Paste Your Raferral Code"
              style={styles.input}
              placeholderTextColor={COLORS.gray50}
            />
            <Image source={icons.offerref} style={styles.icon} />
          </View>
          <View style={styles.refinputbox}>
            <TextInput
              placeholder="Friends Mobile Number"
              placeholderTextColor={COLORS.gray50}
              style={[styles.input, {width: width * 0.727}]}
            />
            <YellowBtn children="SEND" btnStyle={styles.button} />
          </View>
        </View>
      </ScrollView>
    </View>
  );
};
const mapStateToProps = state => ({});
const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(ReferEarn);
