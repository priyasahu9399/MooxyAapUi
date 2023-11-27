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
import Stars from 'react-native-stars';

const {height, width} = Dimensions.get('window');

const Community = ({navigation}) => {
  const [loading, setLoading] = useState(false);
  return (
    <View style={styles.container}>
      {/* <Loader loading={loading} /> */}
      <StatusBar backgroundColor={COLORS.white} barStyle={'dark-content'} />
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={styles.innercontainer}>
        <SearchBox disabled={true} />

        <View style={styles.row}>
          <View>
            <Text style={styles.heading}>
              How is your community feature experience?
            </Text>
            <View style={{alignSelf: 'flex-start'}}>
              <Stars
                default={0}
                count={5}
                starSize={19}
                spacing={3}
                fullStar={
                  <Image
                    source={icons.star}
                    style={[styles.star, {tintColor: 'rgb(253, 203,15)'}]}
                  />
                }
                emptyStar={<Image source={icons.star} style={styles.star} />}
              />
            </View>
          </View>

          <Image source={images.community} style={styles.community} />
        </View>

        <View style={styles.bgblueBox}>
          <View style={styles.row}>
            <Text style={[styles.heading, {width: width * 0.78}]}>
              Top Educators
            </Text>
            <TouchableOpacity>
              <Text
                style={[
                  styles.heading,
                  {width: width * 0.17, color: COLORS.primary},
                ]}>
                See All
              </Text>
            </TouchableOpacity>
          </View>

          <FlatList
            data={data.communitylist}
            renderItem={({item, index}) => (
              <TouchableOpacity
                onPress={() => navigation.navigate('CommunityDetail')}
                activeOpacity={0.6}
                key={item => item?.id}
                style={[styles.row, {marginTop: height * 0.022}]}>
                <View style={styles.personbox}>
                  <Image source={item?.img} style={styles.person} />
                </View>
                <View>
                  <Text style={styles.title}>{item?.title}</Text>
                  <Text style={styles.subtitle}>{item.subtitle} </Text>
                </View>
                <Image source={icons.rarrow} style={styles.arrow} />
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

export default connect(mapStateToProps, mapDispatchToProps)(Community);
