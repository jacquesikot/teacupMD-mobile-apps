import React, { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity, FlatList, Alert } from 'react-native';
import Modal from 'react-native-modal';
import { Feather as Icon } from '@expo/vector-icons';
import * as Browser from 'expo-web-browser';
import Constants from 'expo-constants';

import { CartIcon } from '../../svg/profileIcons';
import CartMethod from '../CartMethod/CartMethod';
import Button from '../Button/Button';
import styles from './styles';
import { theme } from '..';
import ordersApi from '../../firebase/orders';
import flutterwave from '../../utils/flutterwave';
import { useAppContext } from '../../context/context';
import Toast from 'react-native-toast-message';
import Picker from '../Picker';

interface Props {
  show: boolean;
  onRequestClose: any;
  cartTotal: string;
  onFinish: any;
  handleAddress: any;
  addresses: any[];
}

const CheckoutModal = ({
  show,
  onRequestClose,
  cartTotal,
  onFinish,
  handleAddress,
  addresses,
}: Props) => {
  const options = [
    {
      id: 1,
      title: 'Credit Card',
      subtext: 'Pay with Flutterwave pay',
      type: 'credit-card',
    },
    {
      id: 2,
      title: 'Cash',
      subtext: 'Pay cash on delivery',
      type: 'cash',
    },
  ];

  const { user, cart } = useAppContext();

  const [selected, setSelected] = useState<any>(options[0]);
  const [loading, setLoading] = useState<boolean>(false);

  const [visible, setVisible] = useState<boolean>(false);
  const [value, setValue] = useState<string>('');

  const data = addresses.map((a) => {
    return {
      label: a.address,
      value: `${a.name}, ${a.address}, ${a.phone_number}`,
    };
  });

  const orderProducts = cart.map((p) => {
    return p.title;
  });

  const handleCheckout = async () => {
    if (!user.id) return Alert.alert('', 'Please login to place order');
    if (addresses.length < 1)
      return Alert.alert('', 'No Address Found, please add address');
    setLoading(true);
    try {
      if (selected.id === options[0].id) {
        const data = {
          amount: cartTotal,
          redirect_url: Constants.linkingUri,
          name: user.displayName ? user.displayName : '',
          email: user.email ? user.email : '',
          phone_number: '',
          consumer_id: user.id,
        };
        const link = await flutterwave.getPaymentLink(data);
        const browser: any = await Browser.openAuthSessionAsync(
          link,
          Constants.linkingUri
        );
        if (
          browser.type === 'success' &&
          browser.url.includes('status=success')
        ) {
          onFinish('success');
          await ordersApi.newOrder({
            products: orderProducts,
            total: cartTotal,
            user_id: user.id,
            hasPaid: true,
            payment_method: 'card',
            address: value,
            name: user.displayName ? user.displayName : '',
            email: user.email ? user.email : '',
            delivered: false,
          });
          setLoading(false);
        } else {
          onFinish('failed');
          setLoading(false);
        }
      } else {
        onFinish('success');
        await ordersApi.newOrder({
          products: orderProducts,
          total: cartTotal,
          user_id: user.id,
          hasPaid: false,
          payment_method: 'cash',
          address: value,
          name: user.displayName ? user.displayName : '',
          email: user.email ? user.email : '',
          delivered: false,
        });
        setLoading(false);
      }
    } catch (error) {
      setLoading(false);
      Toast.show({
        type: 'success',
        visibilityTime: 3000,
        autoHide: true,
        text1: 'Order Error',
        text2: 'Error completing order',
      });
    }
  };

  return (
    <View>
      <Modal
        isVisible={show}
        onBackdropPress={onRequestClose}
        style={styles.container}
        useNativeDriver
        useNativeDriverForBackdrop
      >
        <View style={styles.modal}>
          <View style={styles.topView}>
            <View style={styles.cartContainer}>
              <View style={styles.cartIcon}>
                <CartIcon />
              </View>
              <Text style={styles.cartText}>Cart Total</Text>
            </View>
            <View style={styles.headerTextContainer}>
              <Text style={styles.totalText}>total</Text>
              <Text style={styles.totalAmount}>ZK {cartTotal}</Text>
            </View>
          </View>
          <TouchableOpacity style={styles.close} onPress={onRequestClose}>
            <Icon name="x" color={theme.colors.red} size={18} />
          </TouchableOpacity>
          <Text style={styles.deliveryAddress}>Delivery Address</Text>
          <TouchableOpacity
            activeOpacity={0.8}
            onPress={() => {
              if (addresses.length < 1) {
                handleAddress();
              } else {
                setVisible(true);
              }
            }}
            style={styles.deliveryContainer}
          >
            {addresses.length > 0 ? (
              <>
                <View style={styles.deliveryTextContainer}>
                  <Picker
                    visible={visible}
                    setVisible={setVisible}
                    value={value}
                    setValue={setValue}
                    data={[
                      {
                        label: '',
                        value: '',
                      },
                      ...data,
                    ]}
                    defaultValue="Select Address"
                  />
                </View>
              </>
            ) : (
              <Text style={styles.deliveryText1}>
                No delivery address found
              </Text>
            )}
            <View style={styles.icon}>
              <Icon
                name={addresses.length < 1 ? 'plus' : 'chevron-down'}
                size={14}
                color={theme.colors.primary}
              />
            </View>
          </TouchableOpacity>
          {addresses.length > 0 && (
            <TouchableOpacity style={styles.addNew} onPress={handleAddress}>
              <Text style={styles.newText}>Add new address?</Text>
            </TouchableOpacity>
          )}
          <Text style={styles.method}>Method</Text>
          <View style={styles.cartMethodContainer}>
            <FlatList
              data={options}
              showsVerticalScrollIndicator={false}
              bounces={false}
              ItemSeparatorComponent={() => <View style={{ height: 18 }} />}
              keyExtractor={(item: any) => item.id.toString()}
              renderItem={({ item }) => (
                <TouchableOpacity
                  activeOpacity={0.9}
                  onPress={() => setSelected(item)}
                >
                  <CartMethod
                    type={item.type}
                    title={item.title}
                    subtext={item.subtext}
                    selected={selected.id === item.id && true}
                  />
                </TouchableOpacity>
              )}
            />
          </View>

          <View style={styles.line} />
          <Button
            loading={loading}
            label={selected.id === 1 ? 'Pay now' : 'Place order'}
            type="primary"
            width={theme.constants.screenWidth}
            onPress={() => handleCheckout()}
          />
        </View>
      </Modal>
    </View>
  );
};

export default CheckoutModal;
