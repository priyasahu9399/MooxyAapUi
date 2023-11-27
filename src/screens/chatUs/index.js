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
import Entypo from 'react-native-vector-icons/Entypo';
import DocumentPicker from 'react-native-document-picker';

const {height, width} = Dimensions.get('window');

const ChatUs = ({navigation}) => {
  const [loading, setLoading] = useState(false);
  const [Active, setActive] = useState(1);
  navigation.setOptions({
    headerRight: () => (
      <TouchableOpacity>
        <Entypo
          name="phone"
          size={22}
          color={COLORS.white}
          style={{marginRight: width * 0.06, marginBottom: height * -0.01}}
        />
      </TouchableOpacity>
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
      <StatusBar backgroundColor={COLORS.primary} barStyle={'light-content'} />
      <ScrollView
        keyboardShouldPersistTaps="handled"
        style={styles.innercontainer}
        showsVerticalScrollIndicator={false}>
        <FlatList
          data={data.chat}
          renderItem={({item, index}) => (
            <View>
              {item?.direction == 'right' ? (
                <View>
                  {item?.name && item?.time && (
                    <TouchableOpacity
                      style={styles.rightBox}
                      activeOpacity={0.7}>
                      <Text style={styles.lefttext}>{item?.name}</Text>
                      <Text style={styles.time}>{item.time}</Text>
                    </TouchableOpacity>
                  )}
                  {item?.img && item?.direction == 'right' && (
                    <TouchableOpacity activeOpacity={0.6}>
                      <Image source={item?.img} style={styles.chatimage} />
                    </TouchableOpacity>
                  )}
                </View>
              ) : (
                <View>
                  {item?.name && item?.time && (
                    <TouchableOpacity
                      style={styles.leftBox}
                      activeOpacity={0.7}>
                      <Text style={styles.lefttext}>{item?.name}</Text>
                      <Text style={styles.time}>{item.time}</Text>
                    </TouchableOpacity>
                  )}
                  {item?.img && item?.direction == 'left' && (
                    <TouchableOpacity activeOpacity={0.6}>
                      <Image source={item?.img} style={styles.chatimageleft} />
                    </TouchableOpacity>
                  )}
                </View>
              )}
            </View>
          )}
        />
      </ScrollView>
      <View>
        <View style={styles.row}>
          <View style={styles.inputbox}>
            <TouchableOpacity>
              <Image source={icons.smile} style={styles.smileicon} />
            </TouchableOpacity>
            <TextInput
              placeholder="Write your query........"
              placeholderTextColor={COLORS.gray50}
              style={styles.inputtext}
            />
            <TouchableOpacity onPress={handleDocumentSelection}>
              <Image source={icons.fileattach2} style={styles.fileattach2} />
            </TouchableOpacity>
          </View>
          <TouchableOpacity>
            <Image source={icons.send} style={styles.sendimg} />
          </TouchableOpacity>
        </View>

        <View style={styles.alliconbox}>
          <TouchableOpacity
            onPress={() => setActive(1)}
            style={[
              styles.smileiconbox,
              Active == 1 && {backgroundColor: COLORS.primary},
            ]}>
            <Image
              source={icons.smile2}
              style={[
                styles.smileicon,
                Active == 1 && {tintColor: COLORS.white},
              ]}
            />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => setActive(2)}
            style={[
              styles.smileiconbox,
              Active == 2 && {backgroundColor: COLORS.primary},
            ]}>
            <Image
              source={icons.gif}
              style={[
                styles.smileicon,
                Active == 2 && {tintColor: COLORS.white},
              ]}
            />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => setActive(3)}
            style={[
              styles.smileiconbox,
              Active == 3 && {backgroundColor: COLORS.primary},
            ]}>
            <Image
              source={icons.smile3}
              style={[
                styles.smileicon,
                Active == 3 && {tintColor: COLORS.white},
              ]}
            />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};
const mapStateToProps = state => ({});
const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(ChatUs);
