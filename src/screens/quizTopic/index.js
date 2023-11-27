import React, {useEffect, useState, useRef} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
  TouchableOpacity,
  StatusBar,
  FlatList,
  ScrollView,
} from 'react-native';
import {COLORS, FONTS, images, icons, data} from '../../constants';
import styles from './styles';
import {connect} from 'react-redux';
import FontAwesome6 from 'react-native-vector-icons/FontAwesome6';

const {height, width} = Dimensions.get('window');

const QuizTopic = ({navigation}) => {
  const [activecheck, setActivecheck] = useState();

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor={COLORS.primary} barStyle={'light-content'} />
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={styles.innercontainer}>
        <Text style={styles.heading}>Select Topic</Text>
        <Text style={styles.subheading}>
          You can select only one topic at a time.
        </Text>

        <View style={{paddingBottom: height * 0.02}}>
          <FlatList
            data={data.quiztopic}
            renderItem={({item, index}) => (
              <TouchableOpacity
                activeOpacity={0.6}
                onPress={() => setActivecheck(item?.id)}
                style={styles.checkrow}>
                <View style={styles.checkbox}>
                  <FontAwesome6
                    name="check"
                    size={16}
                    color={
                      activecheck == item?.id ? COLORS.primary : COLORS.white
                    }
                  />
                </View>
                <Text style={styles.checktext}>{item?.title}</Text>
                {activecheck == item?.id ? (
                  <Image source={icons.lock2} style={styles.lockactive} />
                ) : (
                  <Image source={icons.lock} style={styles.lock} />
                )}
              </TouchableOpacity>
            )}
          />
        </View>
      </ScrollView>
      <TouchableOpacity
        onPress={() => navigation.navigate('QuizQuestion')}
        activeOpacity={0.6}
        style={styles.yarrowbox}>
        <Image source={icons.yarrow} style={styles.yarrow} />
      </TouchableOpacity>
    </View>
  );
};

const mapStateToProps = state => ({});
const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(QuizTopic);
