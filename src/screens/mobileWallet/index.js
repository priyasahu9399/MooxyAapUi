import React, {useState, useEffect} from 'react';
import {
  Image,
  View,
  Text,
  TouchableOpacity,
  StatusBar,
  FlatList,
  ScrollView,
  StyleSheet,
  Dimensions,
} from 'react-native';
import {COLORS, FONTS} from './../../constants';
import styles from './styles';
import {icons, images} from './../../constants';
import {data} from './../../constants';
import WalletCart from './../../component/carts/walletcart';
import ButtonCustom from './../../component/Button';
import InputBox from "./../../component/InputText/index";
import Modal from 'react-native-modal';


const {width, height} = Dimensions.get('window');

const MobileWallet = ({navigation}) => {
    const [isModalVisible, setModalVisible] = useState(false);
    const [isModalVisibleTrnsf, setModalVisibleTrnsf] = useState(false);

  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      style={styles.mainContainer}>
      <StatusBar backgroundColor={COLORS.primary} barStyle="light-content" />
      <View style={styles.firstbox}>
        <View>
          <View style={styles.profilebox}>
            <Image source={images.profile3} style={styles.profile} />
          </View>
          <Image source={icons.camera} style={styles.camera} />
        </View>
        <Text style={styles.heading}>Sonal Mehra</Text>
        <Text style={[styles.heading, {fontSize: width * 0.03}]}>
          sonalmehra@gmail.com
        </Text>

        <View style={styles.rowyellowbtn}>
          <Text style={styles.pinktext}>BALANCE</Text>
          <Text style={styles.pinktext}>₹ 8,999.00</Text>
        </View>

        <View style={styles.btnrow}>
          <ButtonCustom
            children="ADD MONEY"
            iconMdm={icons.plus}
            iconMdmBtn
            onPress={() => setModalVisible(true)}
          />
          <ButtonCustom
            children="TRANSFER"
            iconMdm={icons.transfer}
            iconMdmBtn
            onPress={() => setModalVisibleTrnsf(true)}
          />
        </View>
      </View>

      <View>
        <FlatList
          data={data.TransactionCartdata}
          renderItem={({item, index}) => (
            <WalletCart
              refer={item.refer}
              app={item.app}
              transId={item.transId}
              Amount={item.Amount}
              summary={item.summary}
              total={item.total}
            />
          )}
        />
      </View>

      <Modal isVisible={isModalVisible}>
        <View style={styles.modalbox}>
          <View style={[styles.btnrow, styles.modalborder]}>
            <Text
              style={[
                styles.heading,
                {alignSelf: 'flex-start', marginLeft: width * 0.03},
              ]}>
              Add Money
            </Text>
            <TouchableOpacity onPress={() => setModalVisible(false)}>
              <Image source={icons.x} style={styles.cross} />
            </TouchableOpacity>
          </View>
          <InputBox placeholder="Enter Amount" />
          <InputBox placeholder="Reference Note" />
          <ButtonCustom
            children="ADD MONEY"
            iconMdm={icons.plus}
            iconMdmBtn
            btnStyle={{alignSelf: 'center', marginTop: height * 0.026}}
            onPress={() => setModalVisible(false)}
          />
        </View>
      </Modal>

      <Modal isVisible={isModalVisibleTrnsf}>
        <View style={styles.modalbox}>
          <View style={[styles.btnrow, styles.modalborder]}>
            <Text
              style={[
                styles.heading,
                {alignSelf: 'flex-start', marginLeft: width * 0.03},
              ]}>
              Transfer Money
            </Text>
            <TouchableOpacity onPress={() => setModalVisibleTrnsf(false)}>
              <Image source={icons.x} style={styles.cross} />
            </TouchableOpacity>
          </View>
          <InputBox placeholder="Receiver UPI Id" />
          <InputBox placeholder="Enter Amount" />
          <ButtonCustom
            children="TRANSFER"
            iconMdm={icons.transfer}
            iconMdmBtn
            btnStyle={{alignSelf: 'center', marginTop: height * 0.026}}
            onPress={() => setModalVisibleTrnsf(false)}
          />
        </View>
      </Modal>
    </ScrollView>
  );
};

export default MobileWallet;
