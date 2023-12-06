import React, {useEffect, useRef, useState, useCallback} from 'react';
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
  Keyboard,
} from 'react-native';
import {COLORS, FONTS, images, icons, data} from '../../constants';
import styles from './styles';
import {connect} from 'react-redux';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import DocumentPicker from 'react-native-document-picker';
import EmojiBoard from 'react-native-emoji-board';

import {
  Menu,
  MenuItem,
  MenuDivider,
  Position,
} from 'react-native-enhanced-popup-menu';
import KeyboardListener from 'react-native-keyboard-listener';
import {
  GiphyDialog,
  GiphyDialogEvent,
  GiphyDialogMediaSelectEventHandler,
  GiphyMedia,
  GiphyMediaView,
  GiphySDK,
  GiphyGridView,
  GiphyContent,
  GiphyContentType,
} from '@giphy/react-native-sdk';
// import Modal from 'react-native-modal';

const {height, width} = Dimensions.get('window');
GiphySDK.configure({apiKey: '3n2QMy4su7aGDjWN5VDRJTbl6u5wIgo'});
const ChatUs = ({navigation}) => {
  const [loading, setLoading] = useState(false);
  const [Active, setActive] = useState();
  navigation.setOptions({
    headerRight: () => (
      <TouchableOpacity>
        <FontAwesome
          name="phone"
          size={22}
          color={COLORS.white}
          style={{marginRight: width * 0.06, marginBottom: height * -0.01}}
        />
      </TouchableOpacity>
    ),
  });
  // document ke liy
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

  const [visible, setVisible] = useState(false);
  const [show, setShow] = useState(false);
  function onClick() {
    console.log('emoji');
  }
  function onRemove() {
    setShow(false);
  }

  // const mediaRef = useRef(<GiphyMediaView />);
  // const [media, setMedia] = useState(<GiphyMedia />);
  // const handler: GiphyDialogMediaSelectEventHandler = e => {
  //   setMedia(e.media);
  //   GiphyDialog.hide();
  // };
  // const listener = GiphyDialog.addListener(
  //   GiphyDialogEvent.MediaSelected,
  //   handler,
  // );
  //  return () => {
  //    listener.remove();
  //  };
  // GiphyDialog.configure({
  //   mediaTypeConfig: [GiphyContentType.Clips],
  //   showConfirmationScreen: true,
  // });
  return (
    <View style={styles.container}>
      {/* <Loader loading={loading} /> */}
      <StatusBar backgroundColor={COLORS.primary} barStyle={'light-content'} />
      <ScrollView
        keyboardShouldPersistTaps="handled"
        style={styles.innercontainer}
        showsVerticalScrollIndicator={false}>
        {/* <TouchableOpacity onPress={() => GiphyDialog.show()}>
          <Text>fghjnkmlexcfrvgbhn</Text>
        </TouchableOpacity> */}

        {/* <GiphyMediaView
          // content={GiphyContent.trendingGifs()}
          ref={mediaRef}
          media={media}
          autoPlay={true}
          // mediaType="GiphyMediaType.Gif"
          onMediaSelect={e => {
            console.log(e.nativeEvent.media);
          }}
        /> */}
        <FlatList
          data={data.chat}
          showsVerticalScrollIndicator={false}
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
                    <TouchableOpacity
                      style={styles.rightimgbox}
                      activeOpacity={0.6}>
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
                    <TouchableOpacity
                      style={styles.leftimgbox}
                      activeOpacity={0.6}>
                      <Image source={item?.img} style={styles.chatimageleft} />
                    </TouchableOpacity>
                  )}
                </View>
              )}
            </View>
          )}
        />

        {/* 
        <Menu ref={setMenuRef}>
          <Menu
          visible={visible}
          // anchor={<Text onPress={showMenu}>Show menu</Text>}
          onRequestClose={hideMenu}>
          <MenuItem onPress={hideMenu}>Item 1</MenuItem>
          <MenuItem onPress={hideMenu}>Item 2</MenuItem>
          <MenuItem onPress={hideMenu} disabled>
            Item 3
          </MenuItem>
          <MenuDivider />
          <MenuItem onPress={hideMenu}>Item 4</MenuItem>
        </Menu> */}

        {/* <View style={styles.sixIconBox}>
            <View style={styles.rowdirextion}>
              <TouchableOpacity>
                <Image source={icons.smile2} style={styles.smileicon} />
                <Text style={styles.siximgtext}>Gallery</Text>
              </TouchableOpacity>
              <TouchableOpacity>
                <Image source={icons.gif} style={styles.smileicon} />
                <Text style={styles.siximgtext}>Gallery</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={hideMenu}>
                <Image source={icons.smile3} style={styles.smileicon} />
                <Text style={styles.siximgtext}>Gallery</Text>
              </TouchableOpacity>

              <TouchableOpacity onPress={hideMenu}>
                <Image source={icons.smile3} style={styles.smileicon} />
                <Text style={styles.siximgtext}>Gallery</Text>
              </TouchableOpacity>
            </View>
          </View> */}

        {/* <Modal animationIn="slideInUp" isVisible={isModalVisible}>
          <TouchableOpacity
            onPress={() => setModalVisible(false)}
            style={{backgroundColor: COLORS.white}}>
            <Image source={icons.smile3} style={styles.smileicon} />
            <Text>Gallery</Text>
          </TouchableOpacity>
        </Modal> */}
      </ScrollView>
      <View>
        <View style={show == true && {marginBottom: height * 0.34}}>
          <View style={styles.row}>
            <View style={styles.inputbox}>
              {show == true ? (
                <TouchableOpacity onPress={() => setShow(false)}>
                  <FontAwesome
                    name="keyboard-o"
                    size={22}
                    color={COLORS.primary}
                    style={{
                      marginRight: width * 0.0,
                    }}
                  />
                </TouchableOpacity>
              ) : (
                <TouchableOpacity onPress={() => setShow(true)}>
                  <Image source={icons.smile} style={styles.smileicon} />
                </TouchableOpacity>
              )}
              <TextInput
                placeholder="Write your query........"
                placeholderTextColor={COLORS.gray50}
                style={[
                  styles.inputtext,
                ]}
                editable={show == true ? false : true}
              />
              <TouchableOpacity
              // onPress={handleDocumentSelection}
              >
                <Image source={icons.fileattach2} style={styles.fileattach2} />
              </TouchableOpacity>
            </View>
            <TouchableOpacity>
              <Image source={icons.send} style={styles.sendimg} />
            </TouchableOpacity>
          </View>
          <View style={styles.alliconbox}>
            <TouchableOpacity
              onPress={() => {
                setActive(1), setShow(!show);
              }}
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

        <View>
          <EmojiBoard
            showBoard={show}
            onClick={onClick}
            tabBarPosition="bottom"
            containerStyle={{
              backgroundColor: COLORS.white,
            }}
            onRemove={onRemove}
          />
        </View>
      </View>
    </View>
  );
};
const mapStateToProps = state => ({});
const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(ChatUs);
