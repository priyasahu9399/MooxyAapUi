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
} from 'react-native';
import {COLORS, FONTS, images, icons, data} from '../../constants';
import styles from './styles';
import {connect} from 'react-redux';
import Stars from 'react-native-stars';
import ButtonCustom from './../../component/Button';
const {height, width} = Dimensions.get('window');

const RateUs = ({navigation}) => {
  const [loading, setLoading] = useState(false);
  const [activecheck, setActivecheck] = useState();

  return (
    <View style={styles.container}>
      {/* <Loader loading={loading} /> */}
      <StatusBar backgroundColor={COLORS.primary} barStyle={'light-content'} />
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.ratebox}>
          <View style={styles.ratebluebox}>
            <Text style={styles.title}>Rate Us</Text>
            <Text style={styles.subtitle}>How would you love this app?</Text>
          </View>

          <View style={{alignSelf: 'center'}}>
            <Stars
              default={0}
              count={5}
              starSize={19}
              spacing={3}
              fullStar={
                <Image
                  source={icons.star}
                  style={[styles.star, {tintColor: 'rgb(253, 203,15)'}]}
                />
              }
              emptyStar={<Image source={icons.star} style={styles.star} />}
            />
          </View>

          <View style={styles.row}>
            <ButtonCustom children="SUBMIT" btnStyle={{width: width * 0.42, height:height*.05}} />
            <ButtonCustom
              children="LATER"
              btnStyle={styles.borderbtn}
              btntextStyle={{color: COLORS.primary}}
            />
          </View>
        </View>
      </ScrollView>
    </View>
  );
};
const mapStateToProps = state => ({});
const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(RateUs);
