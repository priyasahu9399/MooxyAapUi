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

const DirectSolutionDiodeValue = ({navigation}) => {
  const [loading, setLoading] = useState(false);
  const [active, setActive] = useState();
  const [headactive, setheadActive] = useState(1);

  return (
    <View style={styles.container}>
      {/* <Loader loading={loading} /> */}
      <StatusBar backgroundColor={COLORS.primary} barStyle={'light-content'} />
      <View>
        <SearchBox disabled={true} placeholder="Search" />
        <View style={styles.headRow}>
          <TouchableOpacity onPress={() => setheadActive(1)}>
            <Text
              style={[
                styles.heading,
                headactive == 1 && {
                  backgroundColor: '#F1F5FF',
                  color: COLORS.primary,
                },
              ]}>
              Direct Solution
            </Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => setheadActive(2)}>
            <Text
              style={[
                styles.heading,
                headactive == 2 && {
                  backgroundColor: '#F1F5FF',
                  color: COLORS.primary,
                },
              ]}>
              Diode Value/GR
            </Text>
          </TouchableOpacity>
        </View>

        <ScrollView showsVerticalScrollIndicator={false}>
          {headactive == 1 && (
            <View style={{paddingBottom: height * 0.2}}>
              <FlatList
                data={data.filelist}
                renderItem={({item, index}) => (
                  <TouchableOpacity
                    onPress={() => {
                      setActive(index),
                        navigation.navigate(
                          'DirectSolutionDiodeCategory',
                          item?.title,
                        );
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
          )}

          {headactive == 2 && (
            <View style={{paddingBottom: height * 0.2}}>
              <FlatList
                data={data.diodevalue}
                renderItem={({item, index}) => (
                  <TouchableOpacity
                    onPress={() => {
                      setActive(index),
                        navigation.navigate(
                          'DirectSolutionDiodeCategory',
                          item?.title,
                        );
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
          )}
        </ScrollView>
      </View>
    </View>
  );
};
const mapStateToProps = state => ({});
const mapDispatchToProps = {};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(DirectSolutionDiodeValue);
