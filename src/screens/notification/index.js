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

const Notification = ({navigation}) => {
  const [loading, setLoading] = useState(false);
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor={COLORS.primary} barStyle={'light-content'} />
      <ScrollView
        style={styles.innercontainer}
        showsVerticalScrollIndicator={false}>
        <FlatList
          data={data.notification}
          renderItem={({item, index}) => (
            <TouchableOpacity
              onPress={() => navigation.navigate('NotificationDetail')}
              activeOpacity={0.6}
              style={[
                styles.notifyBox,
                item?.seen && {backgroundColor: COLORS.primary},
              ]}>
              <View style={styles.row}>
                <View
                  style={[
                    styles.notifybox,
                    item?.seen && {backgroundColor: COLORS.white},
                  ]}>
                  <Image
                    source={item?.seen ? icons.notify : icons.notify1}
                    style={styles.notify}
                  />
                </View>
                <Text
                  style={[styles.heading, item?.seen && {color: COLORS.white}]}>
                  {item?.text1}
                </Text>
                <View style={styles.row}>
                  <Image
                    source={icons.clock}
                    style={[
                      styles.clock,
                      item?.seen && {tintColor: COLORS.white},
                    ]}
                  />
                  <Text
                    style={[styles.time, item?.seen && {color: COLORS.white}]}>
                    {item?.time}
                  </Text>
                </View>
              </View>
              <Text
                numberOfLines={3}
                style={[styles.subhead, item?.seen && {color: COLORS.white}]}>
                {item?.text2}
              </Text>
            </TouchableOpacity>
          )}
        />
      </ScrollView>
    </View>
  );
};
const mapStateToProps = state => ({});
const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Notification);
