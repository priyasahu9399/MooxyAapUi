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
  TextInput,
} from 'react-native';
import {COLORS, FONTS, images, icons, data} from '../../constants';
import styles from './styles';
import {connect} from 'react-redux';
import ButtonCustom from './../../component/Button';
const {height, width} = Dimensions.get('window');

const CommunityDetail = ({navigation}) => {
  const [loading, setLoading] = useState(false);
  navigation?.setOptions({
    headerTitle: () => (
      <View style={styles.row}>
        <View style={styles.personbox}>
          <Image source={images.person1} style={styles.person} />
        </View>
        <View>
          <Text style={styles.title}>Arvind Singh</Text>
          <Text style={styles.title}>Basics of mobile</Text>
        </View>
      </View>
    ),
  });

  return (
    <View style={styles.container}>
      {/* <Loader loading={loading} /> */}
      <StatusBar backgroundColor={COLORS.white} barStyle={'dark-content'} />
      <ScrollView showsVerticalScrollIndicator={false}>
        <FlatList
          data={data.communitydetaillist}
          renderItem={({item, index}) => (
            <View>
              <View style={styles.bgblueBox}>
                <Text style={[styles.heading, {color: COLORS.black}]}>
                  {item?.day}
                </Text>
              </View>
              <View style={styles.whitebox}>
                <View style={styles.row}>
                  <View style={styles.personbox}>
                    <Image source={item?.img} style={styles.person} />
                  </View>
                  <Text style={[styles.heading, {color: COLORS.black}]}>
                    {item?.name}
                  </Text>
                  <View style={styles.dot}></View>
                  <Text style={styles.time}>{item?.time} </Text>
                </View>
                <Text style={styles.boxsubtitle}>{item?.dsc}</Text>
                <Text style={styles.boxsubtitle}>
                  Here is the LINK -------->
                </Text>
                <TouchableOpacity>
                  <Text style={[styles.boxsubtitle, {color: COLORS.primary}]}>
                    {item?.link}
                  </Text>
                </TouchableOpacity>
                <View style={styles.iconrow}>
                  <Image
                    source={icons.like}
                    resizeMode="contain"
                    style={styles.threeicon}
                  />
                  <Text style={styles.threeicontext}>{item?.like}</Text>
                  <Image
                    source={icons.community}
                    resizeMode="contain"
                    style={styles.threeicon}
                  />
                  <Text style={styles.threeicontext}>{item?.comment}</Text>
                  <Image
                    source={icons.c_eye}
                    resizeMode="contain"
                    style={styles.threeicon}
                  />
                  <Text style={[styles.threeicontext, {marginRight: 0}]}>
                    {item?.view}
                  </Text>
                </View>
                <View style={styles.refinputbox}>
                  <Image
                    source={icons.community}
                    style={[
                      styles.threeicon,
                      {
                        tintColor: COLORS.primary,
                        marginHorizontal: width * 0.03,
                      },
                    ]}
                  />
                  <TextInput
                    style={styles.input}
                    placeholderTextColor={COLORS.black}
                    placeholder={
                      item?.id == 0
                        ? 'Be the first the Comment'
                        : 'Comment here.'
                    }
                  />
                </View>
              </View>
            </View>
          )}
        />

        <View style={[styles.bgblueBox, {flexDirection: 'row'}]}>
          <View>
            <View style={styles.personbox}>
              <Image source={images.person1} style={styles.person} />
            </View>
            <Image source={icons.hiii} style={styles.hiii} />
          </View>

          <View>
            <Text style={[styles.title, {color: COLORS.black}]}>
              Welcome, Sonal!
            </Text>
            <Text style={[styles.time, {width: width * 0.8}]}>
              Follow me to get direct messages and updates from me.
            </Text>
          </View>
        </View>

        <ButtonCustom
          children="FOLLOW"
          btnStyle={{alignSelf: 'center', marginVertical: height * 0.02}}
          onPress={() => navigation.navigate('Comment')}
        />
      </ScrollView>
    </View>
  );
};
const mapStateToProps = state => ({});
const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(CommunityDetail);
