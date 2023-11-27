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

const {height, width} = Dimensions.get('window');

const DirectSolutionDiodeSubCategory2 = ({navigation, route}) => {
  const [loading, setLoading] = useState(false);
  const [active, setActive] = useState();
  const [headactive, setheadActive] = useState(1);

  const pretitle = route.params.data;
  console.log('pretitle', pretitle);
  navigation.setOptions({
    headerTitle: () => (
      <View style={styles.headerrow}>
        <Text style={styles.headerheading}>Direct Solution</Text>
        <Image
          source={icons.rarrow}
          resizeMode="contain"
          style={styles.threeicon}
        />
        <Text style={styles.headerheading}>{pretitle?.pretitle?.pretitle}</Text>
        <Image
          source={icons.rarrow}
          resizeMode="contain"
          style={styles.threeicon}
        />
        <Text style={[styles.headerheading]}>
          {pretitle?.pretitle?.mainTitle}
        </Text>
        <Image
          source={icons.rarrow}
          resizeMode="contain"
          style={styles.threeicon}
        />
        <Text style={[styles.headerheading]}>{pretitle?.mainTitle}</Text>
      </View>
    ),
    headerTitleAlign: 'left',
  });
  return (
    <View style={styles.container}>
      {/* <Loader loading={loading} /> */}
      <StatusBar backgroundColor={COLORS.primary} barStyle={'light-content'} />
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={{paddingBottom: height * 0.02}}>
          <FlatList
            data={data.diodeAudio}
            renderItem={({item, index}) => (
              <TouchableOpacity
                onPress={() => {
                  setActive(index),
                    navigation.navigate('DirectSolutionSubCategory3');
                }}
                activeOpacity={0.5}
                style={[
                  styles.row,
                  active == index && {backgroundColor: '#F1F5FF'},
                ]}>
                <Image source={item?.icon} style={styles.fileicon} />
                <Text style={styles.title}>{item?.title}</Text>
              </TouchableOpacity>
            )}
          />
        </View>
      </ScrollView>
    </View>
  );
};
const mapStateToProps = state => ({});
const mapDispatchToProps = {};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(DirectSolutionDiodeSubCategory2);
