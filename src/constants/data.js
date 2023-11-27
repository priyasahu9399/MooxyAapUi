import icons from './icons';
import images from './images';
import {COLORS} from './theme';
const OnBoardingData = [
  {
    id: 0,
    title: 'Welcome  To MooXY',
    subTitle:
      '"Transform your passion for gadgets into a rewarding career at our Mobile Repairing Training Center."',
    image: images.onboard1,
  },
  {
    id: 1,
    title: '',
    subTitle:
      'Join us and turn "broken" into "fixed." Become a certified mobile technician with our expert training.',
    image: images.onboard2,
  },
  {
    id: 2,
    title: '',
    subTitle:
      '"In a world full of smartphones, become the one who knows how to make them smarter."',
    image: images.onboard3,
  },
];
const homesliderlist = [
  {id: 0, image: images.home1},
  {id: 1, image: images.home2},
  {id: 2, image: images.home1},
];

const learnslider = [
  {id: 0, image: images.learn2},
  {id: 1, image: images.learn1},
  {id: 2, image: images.home1},
];
const categorylist = [
  {id: 1, text: 'BASIC', navigation: 'Basic'},
  {id: 2, text: 'HARDWARE', navigation: 'Hardware'},
  {id: 3, text: 'SOFTWARE', navigation: 'Software'},
  {id: 4, text: 'ADDITIONAL', navigation: 'Additional'},
  {id: 4, text: 'ADVANCE', navigation: 'Advance'},
];
const categorylist2 = [
  {id: 0, img: images.cat2},
  {id: 1, img: images.cat4},
  {id: 2, img: images.cat3},
  {id: 3, img: images.cat1},
];
const rangcart = [
  {
    id: 0,
    bgimg: images.cate1,
    img: images.file,
    title: 'Flash Files & Dump',
    progress: 0.5,
    pgColor: '#FDCB0D',
    navigation: 'FlashFilesDump',
  },
  {
    id: 1,
    bgimg: images.cate2,
    img: images.ytube,
    title: 'Video Class Assignment',
    progress: 0.6,
    pgColor: '#C92C51',
    navigation: 'LearningVideo',
  },
  {
    id: 2,
    bgimg: images.cate3,
    img: images.wire,
    title: 'Hardware Solution & Diode Value',
    progress: 0.4,
    pgColor: '#2D55D6',
    navigation: 'DirectSolutionDiodeValue',
  },
];
const homesliderlist2 = [
  {
    img: images.profile1,
    text1:
      'It is the best institute in Bhopal for mobile repair learning hardware and software solutions. Staff members also very co-operative.',
  },
  {
    img: images.profile3,
    text1:
      'It is the best institute in Bhopal for mobile repair learning hardware and software solutions. Staff members also very co-operative.',
  },
  {
    img: images.profile2,
    text1:
      'It is the best institute in Bhopal for mobile repair learning hardware and software solutions. Staff members also very co-operative.',
  },
  {
    img: images.profile3,
    text1:
      'It is the best institute in Bhopal for mobile repair learning hardware and software solutions. Staff members also very co-operative.',
  },
  {
    img: images.profile1,
    text1:
      'It is the best institute in Bhopal for mobile repair learning hardware and software solutions. Staff members also very co-operative.',
  },
];

const myorder = [
  {
    id: 0,
    course: 'Hardware Repair Course',
    date: '10 Nov 2023',
    oNo: '12345678987654',
    total: ' 20000',
    status: 'Order Confirmed',
  },
  {
    id: 1,
    course: 'Software Repair Course',
    date: '22 Nov 2023',
    oNo: '12345678987654',
    total: ' 25000',
    status: 'Order Confirmed',
  },
];

const filelist = [
  {
    id: 0,
    title: 'Samsung',
    icon: icons.allfile,
  },
  {
    id: 1,
    title: 'Nokia',
    icon: icons.allfile,
  },
  {
    id: 2,
    title: 'OnePlus',
    icon: icons.allfile,
  },
  {
    id: 3,
    title: 'Oppo',
    icon: icons.allfile,
  },
  {
    id: 4,
    title: 'Lava',
    icon: icons.allfile,
  },
  {
    id: 5,
    title: 'Samsung',
    icon: icons.allfile,
  },
  {
    id: 6,
    title: 'Nokia',
    icon: icons.allfile,
  },
  {
    id: 7,
    title: 'Xiaomi',
    icon: icons.allfile,
  },
  {
    id: 8,
    title: 'Oneplus',
    icon: icons.allfile,
  },
  {
    id: 9,
    title: 'Samsung',
    icon: icons.allfile,
  },
  {
    id: 10,
    title: 'Xiaomi',
    icon: icons.allfile,
  },
  {
    id: 11,
    title: 'Samsung',
    icon: icons.allfile,
  },
  {
    id: 12,
    title: 'Lava',
    icon: icons.allfile,
  },
];
const filelist2 = [
  {
    id: 0,
    title: 'OFFICIAL FIRMWARE',
    icon: icons.allfile,
  },
  {
    id: 1,
    title: 'SM-A226B',
    icon: icons.allfile,
  },
  {
    id: 2,
    title: 'OFFICIAL FIRMWARE',
    icon: icons.allfile,
  },
  {
    id: 3,
    title: 'SM-A226B',
    icon: icons.allfile,
  },
];

const listFiles = [
  {
    id: 0,
    title: 'DRK ERROR FIX FILE BINARY U1',
    icon: icons.files,
  },
  {
    id: 1,
    title: 'DRK ERROR FIX FILE BINARY U1',
    icon: icons.files,
  },
  {
    id: 2,
    title: 'DRK ERROR FIX FILE BINARY U1',
    icon: icons.files,
  },
  {
    id: 3,
    title: 'DRK ERROR FIX FILE BINARY U1',
    icon: icons.files,
  },
];

const diodevalue = [
  {
    id: 0,
    title: 'POWER IC',
    icon: icons.allfile,
  },
  {
    id: 1,
    title: 'DC TO DC (CHARGING IC)',
    icon: icons.allfile,
  },
  {
    id: 2,
    title: 'AUDIO IC',
    icon: icons.allfile,
  },
  {
    id: 3,
    title: 'WTR/SDR/BASEBAND',
    icon: icons.allfile,
  },
  {
    id: 4,
    title: 'OFFICIAL FIRMWARE',
    icon: icons.allfile,
  },
  {
    id: 5,
    title: 'DC TO DC (CHARGING IC)',
    icon: icons.allfile,
  },
  {
    id: 6,
    title: 'AUDIO IC',
    icon: icons.allfile,
  },
  {
    id: 7,
    title: 'WTR/SDR/BASEBAND',
    icon: icons.allfile,
  },
];
const diodeAudio = [
  {
    id: 0,
    title: 'AUDIO 1',
    icon: icons.allfile,
  },
  {
    id: 1,
    title: 'AUDIO 2',
    icon: icons.allfile,
  },
];

const search = [
  {
    title: 'Electrical and Electronic',
  },
  {
    title: 'Electrical Engineering',
  },
  {
    title: 'Virtual Private Server',
  },
  {
    title: 'Electrical and Electronic Engineering',
  },
];
const courselist = [
  {
    id: 0,
    bigimg: images.course1,
    title: 'Basics of mobile',
    profileimg: images.person1,
    name: 'Aniket Sharma',
    name2: 'Educator',
    time: '12h 40min ',
    lesson: '6',
    rate: '4.9',
  },
  {
    id: 1,
    bigimg: images.course2,
    title: 'Hardware Repair',
    profileimg: images.person2,
    name: 'Ramesh Sharma',
    name2: 'Educator',
    time: '12h 40min ',
    lesson: '6',
    rate: '4.9',
  },
  {
    id: 2,
    bigimg: images.course3,
    title: 'Software Repair',
    profileimg: images.person1,
    name: 'Aniket Sharma',
    name2: 'Educator',
    time: '12h 40min ',
    lesson: '6',
    rate: '4.9',
  },
  {
    id: 3,
    bigimg: images.course4,
    title: 'Advanced Troubleshooting',
    profileimg: images.person2,
    name: 'jay Sharma',
    name2: 'Educator',
    time: '12h 40min ',
    lesson: '6',
    rate: '4.9',
  },
];
const ViewCourse = [
  {
    id: 0,
    bigimg: images.course1,
    title: 'Basics of mobile',
    time: '12h 40min ',
    lesson: '6',
    price: '32,000',
  },
  {
    id: 1,
    bigimg: images.course2,
    title: 'Hardware Repair',
    time: '12h 40min ',
    lesson: '6',
    price: '32,000',
  },
  {
    id: 2,
    bigimg: images.course3,
    title: 'Software Repair',
    time: '12h 40min ',
    lesson: '6',
    price: '32,000',
  },
  {
    id: 3,
    bigimg: images.course4,
    title: 'Advanced Troubleshooting',
    time: '12h 40min ',
    lesson: '6',
    price: '32,000',
  },
  {
    id: 4,
    bigimg: images.course1,
    title: 'Advanced Troubleshooting',
    time: '12h 40min ',
    lesson: '6',
    price: '32,000',
  },
];
const notification = [
  {
    seen: 'seen',
    time: '6h ago',
    text1: 'New Course Offerings!',
    text2:
      'We are thrilled to introduce new courses that cover the latest advancements in mobile technology. ',
  },
  {
    seen: 'seen',
    time: '8h ago',
    text1: 'Free Workshop',
    text2:
      "Join our free workshop  on    'Troubleshooting  Common  Mobile Issues '  this  Saturday       at      10  AM.",
  },

  {
    time: '1d ago',
    text1: 'Feedback & Suggestions',
    text2:
      'We value your feedback. If you have any suggestions or concerns, please feel free to reach out to our administrative team.  ',
  },

  {
    time: '2h ago',
    text1: 'Stay Connected',
    text2:
      'Keep following us on social media and our website for the latest updates, tips, and tricks related to mobile repairing.',
  },
];

const chat = [
  {
    id: 0,
    name: 'Hello! This is Shivali. How may I help you?',
    time: '5.28 PM',
    direction: 'left',
  },
  {
    id: 1,
    name: "Hello! I'm interested in mobile training courses. Can you tell me more about what your institute offers?",
    time: '5.29 PM',
    direction: 'right',
  },
  {
    id: 2,
    name: "Hi there! Of course, we'd be happy to help. Our institute offers a wide range of mobile training courses for both beginners and advanced learners. We cover various aspects of mobile technology, including app development, and mobile device management. What specific area are you interested in?",
    time: '5.31 PM',
    direction: 'left',
  },
  {
    id: 3,
    img: images.green,
    direction: 'right',
  },
];
const TransactionCartdata = [
  {
    id: 0,
    app: 'Wallet',
    refer: '20167253-23458796',
    transId: 21,
    Amount: '23,99.00',
    summary: 'Paid for order purchase',
    total: '2,399.00',
  },
  {
    id: 1,
    app: 'Google Pay',
    refer: '20167253-23458796',
    transId: 16,
    Amount: '23,99.00',
    summary: 'Paid for order purchase',
    total: '2,399.00',
  },
  {
    id: 2,
    app: 'Wallet',
    refer: '20167253-23458796',
    transId: 19,
    Amount: '23,99.00',
    summary: 'Paid for order purchase',
    total: '2,399.00',
  },
  {
    id: 3,
    app: 'Google Pay',
    refer: '20167253-23458796',
    transId: 18,
    Amount: '23,99.00',
    summary: 'Paid for order purchase',
    total: '2,399.00',
  },
];

const courseVideo = [
  {
    id: 0,
    title: 'Introduction',
    time: '4min 12sec',
  },
  {
    id: 1,
    title: 'Introduction',
    time: '4min 12sec',
  },
  {
    id: 2,
    title: 'Introduction',
    time: '4min 12sec',
  },
  {
    id: 3,
    title: 'Introduction',
    time: '4min 12sec',
  },
  {
    id: 4,
    title: 'Introduction',
    time: '4min 12sec',
  },
];

const courseBuy = [
  {
    id: 0,
    title: 'Hardware Repair Course',
    date: 'Valid till Dec,2023',
    time: '2 Months',
    img: images.course2,
  },
];

const communitylist = [
  {
    id: 0,
    img: images.person1,
    title: 'Arvind Singh',
    subtitle: 'Unlock a whole new learning experience...',
  },
  {
    id: 0,
    img: images.person2,
    title: 'Ramesh Singh',
    subtitle: 'Hello Everyone, In Today’s class....',
  },
  {
    id: 0,
    img: images.person1,
    title: 'Ankit Singh',
    subtitle: 'Unlock a whole new learning experience...',
  },
  {
    id: 0,
    img: images.person2,
    title: 'Jay Kumar',
    subtitle: 'Hello Everyone, In Today’s class....',
  },
];

const communitydetaillist = [
  {
    id: 0,
    name: 'Arvind Singh',
    dsc: ' Hello Learners, Good Morning ! Today we will learn some basic tricks to rectify the problem.',
    link: 'https://mooxy.com/class/basics of mobile-part-1',
    like: 1,
    comment: 0,
    view: 56,
    time: '9:15 AM',
    day: 'Yesterday',
    img: images.person1,
  },
  {
    id: 1,
    name: 'Arvind Singh',
    dsc: ' Hello Learners, Good Morning ! Today we will learn some basic tricks to rectify the problem.',
    link: 'https://mooxy.com/class/basics of mobile-part-1',
    like: 2,
    comment: 2,
    view: 56,
    time: '9:15 AM',
    day: 'Today',
    img: images.person2,
  },
];

const videochecklist = [
  {
    id: 0,
    title: 'Query in Hardware Repair Course?',
    ans: [
      {
        id: 0,
        ans1: 'Details of various components on the PCB.',
      },
      {
        id: 1,
        ans1: 'Soldering & desoldering of components by using a soldering iron.',
      },
      {
        id: 2,
        ans1: 'Ultrasonic cleaning procedure.',
      },
      {
        id: 3,
        ans1: 'Others',
      },
    ],
  },
  {
    id: 1,
    title: 'Query in Software Repair Course?',
    ans: [
      {
        id: 0,
        ans1: 'Details of various components on the PCB.',
      },
      {
        id: 1,
        ans1: 'Soldering & desoldering of components by using a soldering iron.',
      },
      {
        id: 2,
        ans1: 'Ultrasonic cleaning procedure.',
      },
      {
        id: 3,
        ans1: 'Others',
      },
    ],
  },
];

const notesinstitute = [
  {id: 0, title: 'Hardware Repair'},
  {id: 1, title: 'Basic Of Mobile'},
  {id: 2, title: 'Software Repair'},
  {id: 3, title: 'Basic and Advanced Troubleshooting'},
  {id: 4, title: 'Additional Learning'},
];
const practice = [
  {id: 0, title: '1. Study of Digital Electronics.', que: '10 Questions'},
  {id: 1, title: '2. Basics of mobile communication.', que: '10 Questions'},
  {
    id: 2,
    title:
      '3. Assembling and disassembling of various models of mobile phones.',
    que: '10 Questions',
  },
  {
    id: 3,
    title:
      '4. Study of various tools and equipment used in mobile phone repairs.',
    que: '10 Questions',
  },
  {
    id: 4,
    title: '5. Study of parts inside a mobile phone.',
    que: '10 Questions',
  },
  {id: 5, title: '6. Use of multimeter.', que: '10 Questions'},
];

const practiceque = [
  {
    que: '1. What is the fundamental difference between analog and digital electronics?',
    ans: ' Analog electronics deals with continuous signals, while digital electronics deals with discrete signals represented as 0s and 1s.',
  },
  {
    que: '2. What is a logic gate?',
    ans: 'A logic gate is an elementary building block of digital circuits. It processes binary information and produces an output based on logical operations (AND, OR, NOT, etc.).',
  },
  {
    que: '3. What is the significance of binary code in digital electronics?',
    ans: 'Binary code is the fundamental language used in digital electronics. It represents data and instructions in the form of 0s and 1s, making it easy for electronic devices to process and manipulate information.',
  },
  {
    que: '4. How does a digital-to-analog converter (DAC) differ from an analog-to-digital converter (ADC)?',
    ans: ' Analog electronics deals with continuous signals, while digital electronics deals with discrete signals represented as 0s and 1s.',
  },
  {
    que: '5. What is the fundamental difference between analog and digital electronics?',
    ans: ' Analog electronics deals with continuous signals, while digital electronics deals with discrete signals represented as 0s and 1s.',
  },
  {
    que: '6. What is the fundamental difference between analog and digital electronics?',
    ans: ' Analog electronics deals with continuous signals, while digital electronics deals with discrete signals represented as 0s and 1s.',
  },
  {
    que: '7. What is the fundamental difference between analog and digital electronics?',
    ans: ' Analog electronics deals with continuous signals, while digital electronics deals with discrete signals represented as 0s and 1s.',
  },
  {
    que: '8. What is the fundamental difference between analog and digital electronics?',
    ans: ' Analog electronics deals with continuous signals, while digital electronics deals with discrete signals represented as 0s and 1s.',
  },
];

const quiztopic = [
  {
    id: 0,
    title: 'Basics of mobile',
  },
  {
    id: 1,
    title: 'Hardware Repair',
  },
  {
    id: 2,
    title: 'Software Repair',
  },
  {
    id: 3,
    title: 'Basic and Advanced Troubleshooting',
  },
  {
    id: 4,
    title: 'Additional Learning',
  },
];

const quizque = [
  {
    id: 0,
    que: 'What is the full form of OLED ?',
    ans: [
      {
        id: 0,
        ans1: '1. Original Light Emitting Diode',
      },
      {
        id: 1,
        ans1: '2. Old Light Emitting Diode',
      },
      {
        id: 2,
        ans1: '3. Organic Light Emitting Diode',
      },
      {
        id: 3,
        ans1: '4. Only Light Emitting Diode',
      },
    ],
  },
  {
    id: 1,
    que: 'Tools essential for repairing a mobile phone?',
    ans: [
      {
        id: 0,
        ans1: '1. screwdrivers',
      },
      {
        id: 1,
        ans1: '2. spudger and tweezers',
      },
      {
        id: 2,
        ans1: '3. anti-static wrist straps',
      },
      {
        id: 3,
        ans1: '4. All of the above',
      },
    ],
  },
  {
    id: 2,
    que: 'What is the full form of OLED ?',
    ans: [
      {
        id: 0,
        ans1: '1. Original Light Emitting Diode',
      },
      {
        id: 1,
        ans1: '2. Old Light Emitting Diode',
      },
      {
        id: 2,
        ans1: '3. Organic Light Emitting Diode',
      },
      {
        id: 3,
        ans1: '4. Only Light Emitting Diode',
      },
    ],
  },
  {
    id: 3,
    que: 'Tools essential for repairing a mobile phone?',
    ans: [
      {
        id: 0,
        ans1: '1. screwdrivers',
      },
      {
        id: 1,
        ans1: '2. spudger and tweezers',
      },
      {
        id: 2,
        ans1: '3. anti-static wrist straps',
      },
      {
        id: 3,
        ans1: '4. All of the above',
      },
    ],
  },
];

export default {
  OnBoardingData,
  categorylist,
  homesliderlist,
  learnslider,
  categorylist2,
  rangcart,
  homesliderlist2,
  myorder,
  filelist,
  filelist2,
  listFiles,
  diodevalue,
  diodeAudio,
  search,
  notification,
  chat,
  TransactionCartdata,
  courselist,
  ViewCourse,
  courseVideo,
  courseBuy,
  communitylist,
  communitydetaillist,
  videochecklist,
  notesinstitute,
  practice,
  practiceque,
  quiztopic,
  quizque,
};
