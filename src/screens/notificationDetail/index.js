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

const NotificationDetail = ({navigation}) => {
  const [loading, setLoading] = useState(false);
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor={COLORS.primary} barStyle={'light-content'} />
      <ScrollView
        style={styles.innercontainer}
        showsVerticalScrollIndicator={false}>
        <View style={styles.notifyBox}>
          <View style={styles.row}>
            <View style={styles.notifybox}>
              <Image source={icons.notify} style={styles.notify} />
            </View>
            <Text style={styles.heading}>New Course Offerings!</Text>
            <View style={styles.row}>
              <Image source={icons.clock} style={styles.clock} />
              <Text style={styles.time}>6h ago</Text>
            </View>
          </View>
          <Text style={styles.subhead}>
            We are thrilled to introduce new courses that cover the latest
            advancements in mobile technology. Stay ahead in the industry with
            our updated curriculum! If you have any doubt or query please
            contact us. We are always happy to help you. Have a good day! We are
            thrilled to introduce new courses that cover the latest advancements
            in mobile technology. Stay ahead in the industry with our updated
            curriculum! If you have any doubt or query please contact us. We are
            always happy to help you. Have a good day!
          </Text>
        </View>
      </ScrollView>
    </View>
  );
};
const mapStateToProps = state => ({});
const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(NotificationDetail);
