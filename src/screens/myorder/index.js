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
import {connect, useDispatch} from 'react-redux';
import styles from './styles';
import OrderCart from './../../component/carts/myorder';

const {height, width} = Dimensions.get('window');

const MyOrder = ({navigation, token}) => {
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor={COLORS.primary} barStyle={'light-content'} />
      <ScrollView
        style={styles.innercontainer}
        showsVerticalScrollIndicator={false}>
        <FlatList
          data={data.myorder}
          renderItem={({item, index}) => (
            <OrderCart
              course={item?.course}
              date={item?.date}
              oNo={item?.oNo}
              total={item?.total}
              status={item?.status}
            />
          )}
        />
      </ScrollView>
    </View>
  );
};
const mapStateToProps = state => ({});
const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(MyOrder);
