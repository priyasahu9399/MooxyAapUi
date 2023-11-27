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

const Notes = ({navigation}) => {
  const [loading, setLoading] = useState(false);
  return (
    <View style={styles.container}>
      {/* <Loader loading={loading} /> */}
      <StatusBar backgroundColor={COLORS.primary} barStyle={'light-content'} />

      <ScrollView
        style={styles.innercontainer}
        showsVerticalScrollIndicator={false}>
        <Text style={styles.noteslist}>
          1. A decoder is used to convert a binary code into a specific output
          signal.
        </Text>
        <Text style={styles.noteslist}>
          2. Binary code is the fundamental language used in digital electronics.
        </Text>
        <Text style={styles.noteslist}>
          3. A decoder is used to convert a binary code into a specific output
          signal.
        </Text>
        <Text style={styles.noteslist}>
          4. Binary code is the fundamental language used in digital electronics.
        </Text>
      </ScrollView>
    </View>
  );
};
const mapStateToProps = state => ({});
const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Notes);
