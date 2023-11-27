import React, {useEffect, useState, useCallback} from 'react';
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
  TextInput,
} from 'react-native';
import {COLORS, FONTS, images, icons, data} from '../../constants';
import styles from './styles';
import {connect} from 'react-redux';
import DocumentPicker from 'react-native-document-picker';

const {height, width} = Dimensions.get('window');

const Comment = ({navigation}) => {
  const [loading, setLoading] = useState(false);

  navigation.setOptions({
    headerLeft: () => (
      <View style={styles.iconrow}>
        <Image
          source={icons.c_eye}
          resizeMode="contain"
          style={styles.threeicon}
        />
        <Text style={styles.threeicontext}>16</Text>
        <Image
          source={icons.rarrow}
          resizeMode="contain"
          style={styles.threeicon}
        />
      </View>
    ),

    headerRight: () => (
      <View style={styles.iconrow}>
        <Image
          source={icons.like}
          resizeMode="contain"
          style={styles.threeicon}
        />
        <Text style={styles.threeicontext}>16</Text>
      </View>
    ),
  });
  const [fileResponse, setFileResponse] = useState('');
  const handleDocumentSelection = useCallback(async () => {
    try {
      const selectDocument = await DocumentPicker.pick({
        presentationStyle: 'fullScreen',
      });
      console.log('selectDocument', selectDocument);
      setFileResponse(selectDocument);
    } catch (err) {
      if (DocumentPicker.isCancel(err)) console.log('err cancel', err);
      else console.log('errrr', err);
    }
  }, []);
  return (
    <View style={styles.container}>
      {/* <Loader loading={loading} /> */}
      <StatusBar backgroundColor={COLORS.white} barStyle={'dark-content'} />
      <ScrollView
        keyboardShouldPersistTaps="handled"
        style={styles.innercontainer}
        showsVerticalScrollIndicator={false}>
        <TouchableOpacity style={styles.row}>
          <Text style={styles.heading}>Most Relevent</Text>
          <Image source={icons.darrow} style={styles.arrow} />
        </TouchableOpacity>

        <View style={{flexDirection: 'row', marginTop: height * 0.01}}>
          <Image style={styles.person} source={images.person1} />

          <View>
            <View style={styles.bgbluebox}>
              <Text style={styles.heading}>Anirudh Singh</Text>
              <Text style={styles.subtitle}>Super Sir!</Text>
            </View>

            <View style={styles.row}>
              <Text style={styles.graytext}>2d</Text>
              <TouchableOpacity>
                <Text style={styles.graytext}>Like</Text>
              </TouchableOpacity>
              <TouchableOpacity>
                <Text style={styles.graytext}>Reply</Text>
              </TouchableOpacity>
              <View style={{flexDirection: 'row'}}>
                <Text style={[styles.graytext, {width: width * 0.06}]}>10</Text>
                <TouchableOpacity>
                  <Image
                    source={icons.like}
                    style={[styles.arrow, {marginLeft: 0}]}
                  />
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
      <View style={styles.inputrow}>
        <View style={styles.inputbox}>
          <TouchableOpacity>
            <Image source={icons.smile} style={styles.smileicon} />
          </TouchableOpacity>
          <TextInput
            placeholder="Write your query........"
            style={styles.inputtext}
            placeholderTextColor={COLORS.gray50}
          />
          <TouchableOpacity onPress={handleDocumentSelection}>
            <Image source={icons.fileattach2} style={styles.fileattach2} />
          </TouchableOpacity>
        </View>
        <TouchableOpacity
          activeOpacity={0.6}
          onPress={() => navigation.navigate('ChatUs')}>
          <Image source={icons.send} style={styles.sendimg} />
        </TouchableOpacity>
      </View>
    </View>
  );
};
const mapStateToProps = state => ({});
const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Comment);
