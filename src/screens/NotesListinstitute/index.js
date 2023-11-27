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

const NotesListinstitute = ({navigation}) => {
  const [loading, setLoading] = useState(false);
  return (
    <View style={styles.container}>
      {/* <Loader loading={loading} /> */}
      <StatusBar backgroundColor={COLORS.primary} barStyle={'light-content'} />

      <ScrollView showsVerticalScrollIndicator={false}>
        <FlatList
          data={data.notesinstitute}
          renderItem={({item, index}) => (
            <View style={styles.bgblueBox}>
              <View>
                <View style={styles.row}>
                  <Image source={icons.notes} style={styles.img} />
                  <Text style={styles.title}>{item?.title}</Text>
                </View>
                <YellowBtn
                  children="UPGRADE & UNLOCK"
                  btnStyle={{width: width * 0.45, borderRadius: 16}}
                  onPress={() => navigation.navigate('NotesListinstitute')}
                />
              </View>
              <Image source={icons.lock} style={styles.arrow} />
            </View>
          )}
        />
      </ScrollView>
    </View>
  );
};
const mapStateToProps = state => ({});
const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(NotesListinstitute);
