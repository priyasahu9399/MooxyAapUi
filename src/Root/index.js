import React, {useEffect} from 'react';
import {StyleSheet, Dimensions} from 'react-native';
import {FONTS, COLORS} from './../constants/index';
import StackNavigator from './../navigation/StackNavigator/index';
import {connect} from 'react-redux';
import {
  CardStyleInterpolators,
  createStackNavigator,
} from '@react-navigation/stack';
import {createDrawerNavigator} from '@react-navigation/drawer';
import Onboarding from './../screens/onBoarding';
import SplashScreen from 'react-native-splash-screen';
import {AuthFunction} from './../redux/actions/authActions';
import Login from './../screens/login/index';
import ForgotPassword from './../screens/forgotpassword/index';
import NewPassword from './../screens/newPassword/index';
import Verification from './../screens/verification/index';
import CreateAccount from './../screens/createaccount/index';
import DrawerScreen from './../screens/drawerScreen/index';

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();
const {height, width} = Dimensions.get('window');

const Root = ({token, navigation, onboard, AuthFunction}) => {
  useEffect(() => {
    SplashScreen.hide();
  }, []);

  return (
    <>
      {token == null ? (
        <Stack.Navigator
          screenOptions={{
            headerShown: false,
          }}>
          {onboard && <Stack.Screen name="Onboarding" component={Onboarding} />}
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="CreateAccount" component={CreateAccount} />
          <Stack.Screen name="Verification" component={Verification} />
          <Stack.Screen name="NewPassword" component={NewPassword} />
          <Stack.Screen name="ForgotPassword" component={ForgotPassword} />
        </Stack.Navigator>
      ) : (
        <Drawer.Navigator
          drawerContent={props => <DrawerScreen {...props} />}
          screenOptions={{
            drawerStyle: {
              width: width * 0.84,
            },
            cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
            headerTitleStyle: styles.headerTitle,
            headerShown: false,
          }}>
          <Stack.Screen name="StackNavigator" component={StackNavigator} />
        </Drawer.Navigator>
      )}
    </>
  );
};

const mapStateToProps = state => ({
  onboard: state?.auth?.onboard,
  token: state?.auth?.token,
});
const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Root);
const styles = StyleSheet.create({
  headerTitle: {
    ...FONTS.sixHundred,
    color: COLORS.black,
    fontSize: 19,
  },
});
