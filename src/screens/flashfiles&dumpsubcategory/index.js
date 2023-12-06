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

const FlashFilesDumpSubCategory = ({navigation, route}) => {
  const [loading, setLoading] = useState(false);
  const [active, setActive] = useState(0);

  const pretitle = route.params.data;
  console.log(pretitle);
  navigation.setOptions({
    headerTitle: () => (
      <View style={styles.headrow}>
        <Text style={styles.heading}>Flash Files & Dump</Text>
        <Image
          source={icons.rarrow}
          resizeMode="contain"
          style={styles.threeicon}
        />
        <Text style={styles.heading}>{pretitle?.prvTitle}</Text>
        <Image
          source={icons.rarrow}
          resizeMode="contain"
          style={styles.threeicon}
        />
        <Text style={[styles.heading]}>{pretitle?.mainTitle}</Text>
      </View>
    ),
    headerTitleAlign:'left'
  });
  return (
    <View style={styles.container}>
      {/* <Loader loading={loading} /> */}
      <StatusBar backgroundColor={COLORS.primary} barStyle={'light-content'} />
      <ScrollView showsVerticalScrollIndicator={false}>
        <SearchBox disabled={true} placeholder="Search" />
        {data.filelist.map((item, index) => (
          <TouchableOpacity
            activeOpacity={0.5}
            onPress={() => {
              setActive(index),
                navigation.navigate('FlashFilesDumpFiles', {
                  data: {
                    pretitle: pretitle,
                    mainTitle: item?.title,
                  },
                });
            }}
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

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(FlashFilesDumpSubCategory);
