import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import { StackScreenProps } from '@react-navigation/stack';
import { Feather as Icon } from '@expo/vector-icons';
import Toast from 'react-native-toast-message';
import * as Haptics from 'expo-haptics';
import { useSelector, useDispatch } from 'react-redux';

import StackHeader from '../../components/StackHeader/StackHeader';
import { HomeNavParamList } from '../../types/navigationTypes';
import ProductImgSlider from '../../components/ProductImgSlider/ProductImgSlider';
import styles from './styles';
import { theme } from '../../components';
import Button from '../../components/Button/Button';
import { useAppContext } from '../../context/context';
import productsApi from '../../firebase/products';
import { addFavorite } from '../../redux/actions';
import { Product as ProductProps } from '../../types/product';
import { heightPercentageToDP } from 'react-native-responsive-screen';

const ProductDetail = ({
  navigation,
  route,
}: StackScreenProps<HomeNavParamList, 'ProductDetail'>) => {
  const [count, setCount] = useState<number>(1);
  const [loading, setLoading] = useState<boolean>(false);
  const [products, setProducts] = useState<any[]>([]);
  const [isFavorite, setIsFavorite] = useState<boolean>(false);

  const [precautions, setPrecautions] = useState<boolean>(false);
  const [uses, setUses] = useState<boolean>(false);
  const [overdose, setOverdose] = useState<boolean>(false);
  const [sideEffect, setSideEffect] = useState<boolean>(false);
  const [interactions, setInteractions] = useState<boolean>(false);

  // Redux
  const { favorites } = useSelector((state: any) => state.productReducer);
  const dispatch = useDispatch();
  const handleAddFavorite = (product: ProductProps) =>
    dispatch(addFavorite(product, user.id ? user.id : ''));

  const { manageCart, user } = useAppContext();

  const { product } = route.params;

  const reduce = () => {
    if (count === 1) return;
    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
    setCount(count - 1);
  };

  const add = () => {
    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
    if (count === Number(product.qty)) return;
    setCount(count + 1);
  };

  const handlecart = () => {
    manageCart('ADD_TO_CART', product, count);
    Toast.show({
      text1: 'Cart',
      text2: 'Product added to cart',
      position: 'top',
      visibilityTime: 3000,
      autoHide: true,
      type: 'success',
    });
  };

  const isFav = async () => {
    const isFav = favorites.some((f: any) => f.product_id === product.id);
    isFav && setIsFavorite(true);
    return;
  };

  const handleFavorites = async () => {
    if (!user.id)
      return Toast.show({
        text1: 'Login Required',
        text2: 'Sign up or login to add favorites',
        position: 'top',
        visibilityTime: 3000,
        autoHide: true,
        type: 'info',
      });
    if (isFavorite)
      return Toast.show({
        text1: 'Favorites',
        text2: 'Product already in favorites',
        position: 'top',
        visibilityTime: 3000,
        autoHide: true,
        type: 'info',
      });
    try {
      handleAddFavorite(product);
      setIsFavorite(true);
      return Toast.show({
        text1: 'Favorites',
        text2: 'Product added to favorites',
        position: 'top',
        visibilityTime: 3000,
        autoHide: true,
        type: 'success',
      });
    } catch (error) {
      Toast.show({
        text1: 'Favorites',
        text2: 'Error adding product to favorites',
        position: 'top',
        visibilityTime: 3000,
        autoHide: true,
        type: 'error',
      });
    }
  };

  const loadProducts = async () => {
    setLoading(true);
    const products = await productsApi.getProducts();
    setProducts(products);
    setLoading(false);
  };

  useEffect(() => {
    loadProducts();
    isFav();
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
        style={{ width: '100%' }}
        contentContainerStyle={{ alignItems: 'center' }}
        bounces={false}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.topContainer}>
          <StackHeader
            label="Drug Details"
            back={() => navigation.goBack()}
            color="white"
            favorite={() => handleFavorites()}
            isFavorite={isFavorite}
          />
          <ProductImgSlider
            image={
              product.image
                ? product.image
                : `https://via.placeholder.com/${theme.constants.screenWidth}x${
                    heightPercentageToDP(100) * 0.4
                  }.png/fff?text=No+Image`
            }
          />
        </View>
        <View style={styles.bottomContainer}>
          <View style={styles.dash} />
          <Text style={styles.title}>{product.title}</Text>
          {product.prescriptionRequired === 'YES' && (
            <Text style={styles.prescription}>Prescription Required</Text>
          )}
          <View style={styles.priceContainer}>
            <View style={styles.priceItems}>
              <Text style={styles.priceText}>{'ZK ' + product.price}</Text>
              {/* {product.sale_price ||
                (product.sale_price !== '' && (
                  <>
                    <Text style={styles.salePrice}>
                      {'ZK ' + product.sale_price}
                    </Text>
                    <Text style={styles.discount}>
                      {(
                        ((Number(product.price) - Number(product.sale_price)) /
                          Number(product.price)) *
                        100
                      ).toFixed(0) + '% Off'}
                    </Text>
                  </>
                ))} */}
            </View>
            <View style={{ flex: 1 }} />
            <View style={styles.counterContainer}>
              <TouchableOpacity activeOpacity={0.6} onPress={() => reduce()}>
                <View style={styles.counterBox}>
                  <Icon name="minus" size={20} color={theme.colors.primary} />
                </View>
              </TouchableOpacity>
              <Text style={styles.count}> {count} </Text>
              <TouchableOpacity activeOpacity={0.6} onPress={() => add()}>
                <View style={styles.counterBox}>
                  <Icon name="plus" size={20} color={theme.colors.primary} />
                </View>
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.extraContainer}>
            {/* <Icon name="clock" size={15} color={theme.colors.primary} />
            <Text style={styles.deliveryTime}>25-30 min</Text> */}
            <View style={styles.deliveryBanner}>
              <Icon name="box" size={15} color={theme.colors.primary} />
              <Text style={styles.deliveryText}>{product.category}</Text>
            </View>
          </View>

          <View style={styles.detailsContainer}>
            <Text style={styles.detailsHeader}>Precautions</Text>
            <View style={{ flex: 1 }} />
            <TouchableOpacity onPress={() => setPrecautions(!precautions)}>
              <Text style={styles.show}>{precautions ? 'hide' : 'show'}</Text>
            </TouchableOpacity>
          </View>
          {precautions && (
            <Text style={styles.detailsText}>
              {product.precautions !== ''
                ? product.precautions
                : 'No Details available at the moment'}
            </Text>
          )}

          <View style={styles.detailsContainer}>
            <Text style={styles.detailsHeader}>How to use</Text>
            <View style={{ flex: 1 }} />
            <TouchableOpacity onPress={() => setUses(!uses)}>
              <Text style={styles.show}>{uses ? 'hide' : 'show'}</Text>
            </TouchableOpacity>
          </View>
          {uses && (
            <Text style={styles.detailsText}>
              {product.uses !== ''
                ? product.uses
                : 'No Details available at the moment'}
            </Text>
          )}

          <View style={styles.detailsContainer}>
            <Text style={styles.detailsHeader}>Interactions</Text>
            <View style={{ flex: 1 }} />
            <TouchableOpacity onPress={() => setInteractions(!interactions)}>
              <Text style={styles.show}>{interactions ? 'hide' : 'show'}</Text>
            </TouchableOpacity>
          </View>
          {interactions && (
            <Text style={styles.detailsText}>
              {product.interactions !== ''
                ? product.interactions
                : 'No Details available at the moment'}
            </Text>
          )}

          <View style={styles.detailsContainer}>
            <Text style={styles.detailsHeader}>Overdose</Text>
            <View style={{ flex: 1 }} />
            <TouchableOpacity onPress={() => setOverdose(!overdose)}>
              <Text style={styles.show}>{overdose ? 'hide' : 'show'}</Text>
            </TouchableOpacity>
          </View>
          {overdose && (
            <Text style={styles.detailsText}>
              {product.overdose !== ''
                ? product.overdose
                : 'No Details available at the moment'}
            </Text>
          )}

          <View style={styles.detailsContainer}>
            <Text style={styles.detailsHeader}>Side Effects</Text>
            <View style={{ flex: 1 }} />
            <TouchableOpacity onPress={() => setSideEffect(!sideEffect)}>
              <Text style={styles.show}>{sideEffect ? 'hide' : 'show'}</Text>
            </TouchableOpacity>
          </View>
          {sideEffect && (
            <Text style={styles.detailsText}>
              {product.sideEffects !== ''
                ? product.sideEffects
                : 'No Details available at the moment'}
            </Text>
          )}
          {/* <Text style={styles.relatedProduct}>Related Products</Text>
          <View style={{ marginBottom: 30 }}>
            <FlatList
              data={products}
              horizontal
              showsHorizontalScrollIndicator={false}
              keyExtractor={(item) => item.id.toString()}
              renderItem={({ item }) => (
                <Product
                  bgColor="light"
                  label={item.title}
                  image={
                    item.images
                      ? item.images[0]
                      : 'https://via.placeholder.com/100x65.png/f4f5f7?text=No+Image'
                  }
                  price={item.price}
                  sale={item.sale_price ? item.sale_price : ''}
                  qty={item.quantity}
                  main_content={item.main_content ? item.main_content : ''}
                  cart={() => alert('added to cart')}
                  details={() =>
                    navigation.push('ProductDetail', { product: item })
                  }
                />
              )}
            />
          </View> */}
          <View style={{ marginTop: 30 }} />
          <Button
            type="primary"
            label="Add to Cart"
            onPress={() => handlecart()}
            width={theme.constants.screenWidth}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default ProductDetail;
