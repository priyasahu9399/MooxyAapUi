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
import SearchBox from './../../component/InputText/search';

const {height, width} = Dimensions.get('window');

const FlashFilesDump = ({navigation}) => {
  const [loading, setLoading] = useState(false);
  const [active, setActive] = useState();
  return (
    <View style={styles.container}>
      {/* <Loader loading={loading} /> */}
      <StatusBar backgroundColor={COLORS.primary} barStyle={'light-content'} />
      <ScrollView showsVerticalScrollIndicator={false}>
        <SearchBox disabled={true} />
        {data.filelist.map((item, index) => (
          <TouchableOpacity
            onPress={() => {
              setActive(index),
                navigation.navigate('FlashFilesDumpCategory', item?.title);
            }}
            activeOpacity={0.5}
            style={[
              styles.row,
              active == index && {backgroundColor: '#F1F5FF'},
            ]}>
            <Image source={item?.icon} style={styles.fileicon} />
            <Text style={styles.title}>{item?.title}</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
};
const mapStateToProps = state => ({});
const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(FlashFilesDump);
