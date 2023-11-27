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

const {height, width} = Dimensions.get('window');

const Search = ({navigation}) => {
  const [loading, setLoading] = useState(false);
  const [postData, setPostData] = useState('');

  return (
    <View style={styles.container}>
      {/* <Loader loading={loading} /> */}
      <StatusBar backgroundColor={COLORS.primary} barStyle={'light-content'} />
      <ScrollView
        keyboardShouldPersistTaps="handled"
        showsVerticalScrollIndicator={false}>
        <View style={styles.searchbox}>
          <Image source={icons.search} style={styles.search} />
          <TextInput
            placeholder={'Search...'}
            style={styles.searchinput}
            value={postData}
            onChange={text => setPostData(text)}
            placeholderTextColor={COLORS.gray50}
          />
          {postData ? (
            <TouchableOpacity onPress={() => setPostData('')}>
              <Image source={icons.x} style={styles.cross} />
            </TouchableOpacity>
          ) : (
            ''
          )}
        </View>

        <FlatList
          data={data.search}
          renderItem={({item, index}) => (
            <TouchableOpacity
              onPress={() => setPostData(item?.title)}
              activeOpacity={0.6}
              style={styles.rowtitle}>
              <Image source={icons.search} style={styles.search} />
              <Text style={styles.searchtitle}>{item?.title}</Text>
            </TouchableOpacity>
          )}
        />
      </ScrollView>
    </View>
  );
};
const mapStateToProps = state => ({});
const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Search);
