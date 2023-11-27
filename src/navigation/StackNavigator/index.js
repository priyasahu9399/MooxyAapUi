import React, {useState} from 'react';
import {Dimensions, TouchableOpacity, Image, Text, View} from 'react-native';
import {
  createStackNavigator,
  CardStyleInterpolators,
} from '@react-navigation/stack';
import TabNavigator from '../BottomTabNavigator';
import Feather from 'react-native-vector-icons/Feather';
import BottomTab from './../BottomTabNavigator';
import {COLORS, icons} from '../../constants';
import styles from './styles';
import Search from './../../screens/search/index';
import EditProfile from './../../screens/editprofile/index';
import ContactUs from './../../screens/contactus/index';
import ContactUs2 from './../../screens/contactus2/index';
import MyOrder from './../../screens/myorder/index';
import Basic from './../../screens/basicCategory/index';
import Hardware from './../../screens/hardwareCategory/index';
import Software from './../../screens/softwareCategory/index';
import Advance from './../../screens/advanceCategory/index';
import Additional from './../../screens/aditionalCategory/index';
import FlashFilesDump from './../../screens/flashfiles&dump/index';
import FlashFilesDumpCategory from './../../screens/flashfiles&dumpcategory/index';
import FlashFilesDumpSubCategory from './../../screens/flashfiles&dumpsubcategory/index';
import FlashFilesDumpFiles from './../../screens/flashfiles&dumpFILES/index';
import DirectSolutionDiodeValue from './../../screens/directSolution&diode/index';
import DirectSolutionDiodeCategory from './../../screens/directSolution&diodeCategory/index';
import DirectSolutionDiodeSubCategory from './../../screens/directSolution&diodeSubCategory/index';
import DirectSolutionDiodeSubCategory2 from './../../screens/directSolution&diodeSubCategory2/index';
import DirectSolutionSubCategory3 from './../../screens/directSolutionSubCategory3/index';
import Notification from './../../screens/notification/index';
import NotificationDetail from './../../screens/notificationDetail/index';
import FAQ from './../../screens/FAQ';
import AboutUs from './../../screens/aboutUs/index';
import ChatUs from './../../screens/chatUs/index';
import MobileWallet from './../../screens/mobileWallet/index';
import Course from './../../screens/course/index';
import CourseDetail from './../../screens/courseDetail/index';
import CourseBuy from './../../screens/courseBuy/index';
import OTP from './../../screens/otpPymt/index';
import OrderPlaced from './../../screens/orderPlaced/index';
import ReferEarn from './../../screens/refer&earn/index';
import CommunityDetail from './../../screens/communitydetail/index';
import LearningVideo from './../../screens/mylearningvideo';
import DemoCourseVideo from './../../screens/mylearndemoVideo/index';
import LearningVideoCheckList from './../../screens/mylearnvideochecklist/index';
import NotesWrite from './../../screens/Noteswrite/index';
import Notes from './../../screens/Notes/index';
import ViewCourse from './../../screens/courseView/index';
import CourseBatchEducator from './../../screens/courseBatchEducator/index';
import QuizStart from './../../screens/quizstart/index';
import NotesList from './../../screens/NotesList/index';
import NotesListinstitute from './../../screens/NotesListinstitute/index';
import NotesListSelf from './../../screens/NotesListSelf/index';
import Practice from './../../screens/practice/index';
import PracticeQuestion from './../../screens/practiceQuestion/index';
import QuizTopic from './../../screens/quizTopic/index';
import QuizQuestion from './../../screens/quizQuestion/index';
import QuizResult from './../../screens/quizResult/index';
import LearningVideoDetail from './../../screens/mylearningvideodetail/index';
import RateUs from './../../screens/rateUs/index';
import TermCondition from './../../screens/termcondition/index';
import Privacy from './../../screens/privacy/index';
import Comment from './../../screens/comment/index';
const Stack = createStackNavigator();
const {height, width} = Dimensions.get('window');

const StackNavigator = ({navigation}) => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerTitleStyle: styles.headerTitle,
        cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
        headerStyle: styles.headerstyle,
        headerTintColor: COLORS.white,
      }}>
      <Stack.Screen
        options={{
          headerShown: false,
        }}
        name="BottomTab"
        component={BottomTab}
      />
      <Stack.Screen
        name="EditProfile"
        component={EditProfile}
        options={{
          title: 'Edit Profile',
        }}
      />
      <Stack.Screen
        name="ContactUs"
        component={ContactUs}
        options={{
          title: 'Contact Us',
        }}
      />
      <Stack.Screen
        name="ContactUs2"
        component={ContactUs2}
        options={{
          title: 'Contact Us',
        }}
      />
      <Stack.Screen
        name="MyOrder"
        component={MyOrder}
        options={{
          title: 'My Order',
        }}
      />
      <Stack.Screen
        name="FlashFilesDump"
        component={FlashFilesDump}
        options={{
          title: 'Flash Files & Dump',
        }}
      />
      <Stack.Screen
        name="FlashFilesDumpCategory"
        component={FlashFilesDumpCategory}
      />
      <Stack.Screen
        name="FlashFilesDumpSubCategory"
        component={FlashFilesDumpSubCategory}
      />
      <Stack.Screen
        name="FlashFilesDumpFiles"
        component={FlashFilesDumpFiles}
      />
      <Stack.Screen
        name="DirectSolutionDiodeValue"
        component={DirectSolutionDiodeValue}
        options={{
          title: 'Direct Solution & Diode Value/GR',
        }}
      />
      <Stack.Screen
        name="DirectSolutionDiodeCategory"
        component={DirectSolutionDiodeCategory}
        options={{
          title: 'Direct Solution & Diode Value/GR',
        }}
      />
      <Stack.Screen
        name="DirectSolutionDiodeSubCategory"
        component={DirectSolutionDiodeSubCategory}
      />
      <Stack.Screen
        name="DirectSolutionDiodeSubCategory2"
        component={DirectSolutionDiodeSubCategory2}
      />
      <Stack.Screen
        name="DirectSolutionSubCategory3"
        component={DirectSolutionSubCategory3}
        options={{
          title: 'AUDIO 1',
        }}
      />
      <Stack.Screen
        name="NotificationDetail"
        component={NotificationDetail}
        options={{
          title: 'Notification',
        }}
      />
      <Stack.Screen name="CourseDetail" component={CourseDetail} />
      <Stack.Screen
        name="CourseBuy"
        component={CourseBuy}
        options={{
          title: 'Course',
        }}
      />
      <Stack.Screen
        name="OrderPlaced"
        component={OrderPlaced}
        options={{
          title: 'Order Placed',
        }}
      />
      <Stack.Screen name="Basic" component={Basic} />
      <Stack.Screen name="Hardware" component={Hardware} />
      <Stack.Screen name="Software" component={Software} />
      <Stack.Screen name="Advance" component={Advance} />
      <Stack.Screen name="Additional" component={Additional} />
      <Stack.Screen name="Search" component={Search} />
      <Stack.Screen name="Notification" component={Notification} />
      <Stack.Screen name="FAQ" component={FAQ} />
      <Stack.Screen name="Course" component={Course} />
      <Stack.Screen name="OTP" component={OTP} />
      <Stack.Screen
        name="AboutUs"
        component={AboutUs}
        options={{
          title: 'About Us',
        }}
      />
      <Stack.Screen
        name="ChatUs"
        component={ChatUs}
        options={{
          title: 'Chat Us',
        }}
      />
      <Stack.Screen
        name="MobileWallet"
        component={MobileWallet}
        options={{
          title: 'Mobile Wallet',
        }}
      />
      <Stack.Screen
        name="ReferEarn"
        component={ReferEarn}
        options={{
          title: 'Refer & Earn',
        }}
      />
      <Stack.Screen
        name="LearningVideo"
        component={LearningVideo}
        options={{
          title: 'Videos',
        }}
      />
      <Stack.Screen
        name="DemoCourseVideo"
        component={DemoCourseVideo}
        options={{
          title: 'Demo Course Video',
        }}
      />
      <Stack.Screen
        name="LearningVideoCheckList"
        component={LearningVideoCheckList}
        options={{
          title: 'Videos',
        }}
      />
      <Stack.Screen
        name="NotesWrite"
        component={NotesWrite}
        options={{
          title: 'Notes',
        }}
      />
      <Stack.Screen name="Notes" component={Notes} />
      <Stack.Screen
        name="NotesList"
        component={NotesList}
        options={{
          title: 'Notes',
        }}
      />
      <Stack.Screen
        name="NotesListinstitute"
        component={NotesListinstitute}
        options={{
          title: 'Notes/Institute',
        }}
      />
      <Stack.Screen
        name="NotesListSelf"
        component={NotesListSelf}
        options={{
          title: 'Notes/Self',
        }}
      />
      <Stack.Screen
        name="ViewCourse"
        component={ViewCourse}
        options={{
          title: 'View Courses',
        }}
      />
      <Stack.Screen
        name="CourseBatchEducator"
        component={CourseBatchEducator}
        options={{
          title: 'Courses , Batches , Educators',
        }}
      />
      <Stack.Screen
        name="QuizStart"
        component={QuizStart}
        options={{
          title: 'Quiz',
        }}
      />
      <Stack.Screen
        name="PracticeQuestion"
        component={PracticeQuestion}
        options={{
          title: 'Practice',
        }}
      />
      <Stack.Screen
        name="QuizTopic"
        component={QuizTopic}
        options={{
          title: 'Quiz Topic',
        }}
      />
      <Stack.Screen
        name="QuizQuestion"
        component={QuizQuestion}
        options={{
          title: 'Quiz',
        }}
      />
      <Stack.Screen
        name="QuizResult"
        component={QuizResult}
        options={{
          title: 'Quiz',
        }}
      />
      <Stack.Screen
        name="LearningVideoDetail"
        component={LearningVideoDetail}
        options={{
          title: 'Videos',
        }}
      />
      <Stack.Screen
        name="RateUs"
        component={RateUs}
        options={{
          title: 'Rate Us',
        }}
      />
      <Stack.Screen
        name="TermCondition"
        component={TermCondition}
        options={{
          title: 'Terms & Conditions',
        }}
      />
      <Stack.Screen
        name="Privacy"
        component={Privacy}
        options={{
          title: 'Privacy Policy',
        }}
      />
      <Stack.Screen
        name="Comment"
        component={Comment}
        options={{
          title: '',
        }}
      />

      <Stack.Screen name="Practice" component={Practice} />
      <Stack.Screen name="CommunityDetail" component={CommunityDetail} />
    </Stack.Navigator>
  );
};

export default StackNavigator;
