import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { Feather as Icon } from '@expo/vector-icons';

import styles from './styles';
import { theme } from '..';

interface Props {
  name: string;
  address: string;
  phone: string;
  onPressDelete: any;
  onPressEdit: any;
}

const AddressItem = ({
  name,
  address,
  phone,
  onPressDelete,
  onPressEdit,
}: Props) => {
  return (
    <View style={styles.container}>
      <View style={styles.addressContainer}>
        <Text numberOfLines={1} style={styles.name}>
          {name}
        </Text>
        <Text numberOfLines={2} style={styles.address}>
          {address}
        </Text>
        <Text numberOfLines={1} style={styles.phone}>
          {phone}
        </Text>
      </View>
      <View style={styles.iconContainer}>
        <TouchableOpacity activeOpacity={0.7} onPress={onPressDelete}>
          <Icon name="trash" size={24} color={theme.colors.grey} />
        </TouchableOpacity>
        <TouchableOpacity activeOpacity={0.7} onPress={onPressEdit}>
          <Icon name="edit" size={24} color={theme.colors.grey} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default AddressItem;
