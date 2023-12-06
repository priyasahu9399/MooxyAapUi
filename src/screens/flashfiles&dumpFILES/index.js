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

const FlashFilesDumpFiles = ({navigation, route}) => {
  const [loading, setLoading] = useState(false);
  const [active, setActive] = useState();

  const pretitle = route.params.data;
  console.log('pretitle', pretitle);
  navigation.setOptions({
    
    headerTitle: () => (
      <View style={styles.headrow}>
        <Text style={styles.heading}>Flash Files & Dump</Text>
        <Image
          source={icons.rarrow}
          resizeMode="contain"
          style={styles.threeicon}
        />
        <Text style={styles.heading}>{pretitle?.pretitle?.prvTitle}</Text>
        <Image
          source={icons.rarrow}
          resizeMode="contain"
          style={styles.threeicon}
        />
        <Text style={[styles.heading]}>{pretitle?.pretitle?.mainTitle}</Text>
        <Image
          source={icons.rarrow}
          resizeMode="contain"
          style={styles.threeicon}
        />
        <Text style={[styles.heading]}>{pretitle?.mainTitle}</Text>
      </View>
    ),
    headerTitleAlign: 'left',
  });

  return (
    <View style={styles.container}>
      {/* <Loader loading={loading} /> */}
      <StatusBar backgroundColor={COLORS.primary} barStyle={'light-content'} />
      <ScrollView showsVerticalScrollIndicator={false}>
        <SearchBox disabled={true} placeholder="Search" />
        {data.listFiles.map((item, index) => (
          <View style={styles.row}>
            <Image source={item?.icon} style={styles.fileicon} />
            <View>
              <Text style={styles.title}>{item?.title}</Text>

              <TouchableOpacity style={styles.rowred}>
                <Image source={icons.fileattach} style={styles.attach} />
                <Text style={styles.attachfiletext}>ATTACH FLASH FILES</Text>
              </TouchableOpacity>
            </View>
          </View>
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
)(FlashFilesDumpFiles);
