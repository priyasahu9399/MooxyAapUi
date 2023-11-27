import React, {useEffect, useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
  StatusBar,
  ScrollView,
  FlatList,
} from 'react-native';
import {COLORS, FONTS, images, icons, data} from '../../constants';
import styles from './styles';
import {connect} from 'react-redux';


const {height, width} = Dimensions.get('window');

const PracticeQuestion = ({navigation}) => {
  const [loading, setLoading] = useState(false);
  return (
    <View style={styles.container}>
      {/* <Loader loading={loading} /> */}
      <StatusBar backgroundColor={COLORS.primary} barStyle={'light-content'} />
      <ScrollView showsVerticalScrollIndicator={false}>
        <Text style={styles.heading}>Basic Of Mobile</Text>

        <View style={{paddingBottom: height * 0.02}}>
          <FlatList
            data={data.practiceque}
            renderItem={({item, index}) => (
              <View style={styles.bgblueBox}>
                <Text style={styles.title}>{item?.que}</Text>
                <Text style={styles.subtitle}>Answer: {item?.ans}</Text>
              </View>
            )}
          />
        </View>
      </ScrollView>
    </View>
  );
};
const mapStateToProps = state => ({});
const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(PracticeQuestion);
