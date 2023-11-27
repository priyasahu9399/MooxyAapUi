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
  FlatList,
} from 'react-native';
import {COLORS, FONTS, images, icons, data} from '../../constants';
import styles from './styles';
import {connect} from 'react-redux';
import {YellowBtn} from './../../component/Button/index';

const {height, width} = Dimensions.get('window');

const NotesList = ({navigation}) => {
  const [loading, setLoading] = useState(false);
  return (
    <View style={styles.container}>
      {/* <Loader loading={loading} /> */}
      <StatusBar backgroundColor={COLORS.primary} barStyle={'light-content'} />

      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.bgblueBox}>
          <YellowBtn
            children="INSTITUTE NOTES"
            btnStyle={{width: width * 0.45}}
            onPress={() => navigation.navigate('NotesListinstitute')}
          />
          <Image source={icons.rarrow} style={styles.arrow} />
        </View>

        <View style={styles.bgblueBox}>
          <YellowBtn
            children="SELF NOTES"
            btnStyle={{width: width * 0.45, borderRadius: 16}}
            onPress={() => navigation.navigate('NotesListSelf')}
          />
          <Image source={icons.rarrow} style={styles.arrow} />
        </View>
      </ScrollView>
    </View>
  );
};
const mapStateToProps = state => ({});
const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(NotesList);
