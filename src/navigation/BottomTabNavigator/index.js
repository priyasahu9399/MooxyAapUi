import React, {useEffect} from 'react';
import {
  Image,
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {images, icons} from '../../constants';
import {COLORS, SIZES} from './../../constants';
import styles from './styles';
import {connect} from 'react-redux';
import Home from './../../screens/home/index';
import Profile from './../../screens/profile/index';
import MyLearning from './../../screens/mylearning/index';
import Community from './../../screens/community/index';
import Store from './../../screens/store/index';
const {height, width} = Dimensions.get('window');

const Tab = createBottomTabNavigator();
const BottomTab = ({navigation}) => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerTitleStyle: styles.headerTitle,
        tabBarHideOnKeyboard: true,
        tabBarStyle: styles.tableBarstyle,
        tabBarLabelStyle: styles.tablebal,
        headerStyle: styles.headerstyle,
        headerTitleStyle: {color: COLORS.white},
        tabBarActiveTintColor: COLORS.primary,
        tabBarInActiveTintColor: COLORS.gray60,
      }}>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          title: '',
          tabBarLabel: 'Home',
          headerLeft: () => (
            <TouchableOpacity onPress={() => navigation.openDrawer()}>
              <Image source={icons.toggle} style={styles.toggle} />
            </TouchableOpacity>
          ),
          tabBarIcon: ({focused}) => (
            <>
              <View
                style={[
                  styles.borderTop,
                  focused && {backgroundColor: COLORS.primary},
                ]}></View>
              <Image
                source={icons.home}
                style={[
                  styles.icon_set,
                  {
                    tintColor: focused ? COLORS.primary : COLORS.gray60,
                    shadowColor: focused && COLORS.primary,
                  },
                ]}
              />
            </>
          ),
        }}
      />
      <Tab.Screen
        name="Store"
        component={Store}
        options={{
          tabBarLabel: 'Store',
          headerRight: () => (
            <TouchableOpacity
              onPress={() => navigation.navigate('Search')}
              style={{marginRight: width * 0.025}}
              activeOpacity={0.6}>
              <Image source={icons.search} style={styles.search} />
            </TouchableOpacity>
          ),
          tabBarIcon: ({focused}) => (
            <>
              <View
                style={[
                  styles.borderTop,
                  focused && {backgroundColor: COLORS.primary},
                ]}></View>
              <Image
                source={icons.store}
                style={[
                  styles.icon_set,
                  {
                    tintColor: focused ? COLORS.primary : COLORS.gray60,
                    shadowColor: focused && COLORS.primary,
                  },
                ]}
              />
            </>
          ),
        }}
      />
      <Tab.Screen
        name="Community"
        component={Community}
        options={{
          tabBarLabel: 'Community',

          headerRight: () => (
            <TouchableOpacity
              onPress={() => navigation.navigate('Search')}
              style={{marginRight: width * 0.025}}
              activeOpacity={0.6}>
              <Image source={icons.search} style={styles.search} />
            </TouchableOpacity>
          ),
          tabBarIcon: ({focused}) => (
            <>
              <View
                style={[
                  styles.borderTop,
                  focused && {backgroundColor: COLORS.primary},
                ]}></View>
              <Image
                source={icons.community}
                style={[
                  styles.icon_set,
                  {
                    tintColor: focused ? COLORS.primary : COLORS.gray60,
                    shadowColor: focused && COLORS.primary,
                  },
                ]}
              />
            </>
          ),
        }}
      />
      <Tab.Screen
        name="MyLearning"
        component={MyLearning}
        options={{
          tabBarLabel: 'My Learning',
          title: 'My Learning',
          headerRight: () => (
            <TouchableOpacity
              onPress={() => navigation.navigate('Search')}
              style={{marginRight: width * 0.025}}
              activeOpacity={0.6}>
              <Image source={icons.search} style={styles.search} />
            </TouchableOpacity>
          ),
          tabBarIcon: ({focused}) => (
            <>
              <View
                style={[
                  styles.borderTop,
                  focused && {backgroundColor: COLORS.primary},
                ]}></View>
              <Image
                source={icons.learning}
                style={[
                  styles.icon_set,
                  {
                    tintColor: focused ? COLORS.primary : COLORS.gray60,
                    shadowColor: focused && 'rgba(215, 56, 0, 0.4)',
                  },
                ]}
              />
            </>
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarLabel: 'Profile',
          title: 'Profile',
          tabBarIcon: ({focused}) => (
            <>
              <View
                style={[
                  styles.borderTop,
                  focused && {backgroundColor: COLORS.primary},
                ]}></View>
              <Image
                source={icons.user}
                style={[
                  styles.icon_set,
                  {
                    tintColor: focused ? COLORS.primary : COLORS.gray60,
                    shadowColor: focused && 'rgba(215, 56, 0, 0.4)',
                  },
                ]}
              />
            </>
          ),
        }}
      />
    </Tab.Navigator>
  );
};

const mapStateToProps = state => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(BottomTab);
