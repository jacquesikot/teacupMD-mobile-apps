import React, { useState, useEffect, useRef } from 'react';
import { StackScreenProps } from '@react-navigation/stack';
import {
  View,
  Text,
  SafeAreaView,
  Image,
  TouchableOpacity,
  FlatList,
  ScrollView,
} from 'react-native';
import StackHeader from '../../components/StackHeader/StackHeader';
import { HomeNavParamList } from '../../types/navigationTypes';
import * as Haptics from 'expo-haptics';
import Toast from 'react-native-toast-message';
import { useQuery } from 'react-query';
import { widthPercentageToDP as wp } from 'react-native-responsive-screen';

import styles, { WIDTH, HEIGHT, PRODUCT_WIDTH, PRODUCT_HEIGHT } from './styles';
import CategoryItem from '../../components/CategoryItem/CategoryItem';
import Product from '../../components/Product/Product';
import { useAppContext } from '../../context/context';
import productsApi from '../../firebase/products';
import categoriesApi from '../../firebase/categories';
import { theme } from '../../components';
import SkeletonPlaceholder from 'react-native-skeleton-placeholder';
import queryKeys from '../../constants/queryKeys';
import Button from '../../components/Button/Button';

const Pharmacy = ({
  navigation,
}: StackScreenProps<HomeNavParamList, 'Pharmacy'>) => {
  const { manageCart } = useAppContext();

  const scrollRef = useRef<any>();

  const {
    data: products,
    isLoading: productsLoading,
    isError: productsError,
  } = useQuery(queryKeys.AllProducts, () => productsApi.getProducts());
  const {
    data: categories,
    isLoading: categoriesLoading,
    isError: categoriesError,
    refetch: refetchProducts,
  } = useQuery(queryKeys.AllCategories, () => categoriesApi.getCategories());

  const [searchProducts, setSearchProducts] = useState<any[]>([]);
  const [type, setType] = useState<string>('All Products');

  const loadData = async () => {
    setSearchProducts(products);
  };

  const addToCart = (product: any) => {
    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
    manageCart('ADD_TO_CART', product, 1);
    Toast.show({
      text1: 'Cart',
      text2: 'Product added to cart',
      position: 'top',
      visibilityTime: 3000,
      autoHide: true,
      type: 'success',
    });
  };

  const handleCategoryChange = (item: any) => {
    setType(item.name);
    const productsArr: any = [];
    // if (type === 'All Products') return setSearchProducts(products);
    products.map((p: any) => {
      if (
        p.appCategory
          .toLowerCase()
          .includes(item.name.toString().toLowerCase().trim())
      ) {
        productsArr.push(p);
      }
    });
    return setSearchProducts(productsArr);
  };

  const skeletonArray = [1, 2, 3, 4, 5, 6, 7, 8];

  useEffect(() => {
    loadData();
  }, []);

  if (productsError || categoriesError) {
    return (
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Text
          style={{
            fontFamily: 'SofiaPro-Bold',
            fontSize: wp('4%'),
            color: theme.colors.dark,
            marginBottom: 15,
          }}
        >
          Error Loading data
        </Text>
        <Button
          type="primary"
          onPress={() => refetchProducts()}
          label="Try Again"
        />
      </View>
    );
  }

  return (
    <>
      <SafeAreaView style={styles.container}>
        <StackHeader
          color="light"
          label="Pharmacy"
          back={() => navigation.goBack()}
          cartOnPress={() => navigation.navigate('Cart')}
        />
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{
            alignItems: 'center',
            width: '100%',
          }}
        >
          <Image
            source={require('../../../assets/images/pharmaBanner.png')}
            style={styles.image}
          />
          <View style={styles.sliderContainer}>
            {productsLoading && categoriesLoading ? (
              <SkeletonPlaceholder backgroundColor={theme.colors.white}>
                <View
                  style={{
                    flexDirection: 'row',
                    width: theme.constants.screenWidth,
                  }}
                >
                  {skeletonArray.map((s) => (
                    <View
                      key={s}
                      style={{
                        width: WIDTH,
                        height: HEIGHT,
                        borderRadius: 15,
                        marginRight: 15,
                      }}
                    />
                  ))}
                </View>
              </SkeletonPlaceholder>
            ) : (
              <FlatList
                data={categories}
                horizontal
                showsHorizontalScrollIndicator={false}
                keyExtractor={(item: any) => item.id.toString()}
                ref={scrollRef}
                renderItem={({ item, index }: any) => (
                  <TouchableOpacity
                    activeOpacity={0.9}
                    onPress={() => {
                      handleCategoryChange(item);
                      scrollRef.current.scrollToIndex({
                        animated: true,
                        index: index,
                      });
                    }}
                  >
                    <CategoryItem
                      bgColor="white"
                      label={item.name}
                      image="https://firebasestorage.googleapis.com/v0/b/epharma-mobile-apps.appspot.com/o/product.png?alt=media&token=bb589dcb-274f-42c0-93e9-f1a7d682b698"
                      width={WIDTH}
                      height={HEIGHT}
                      icon
                      active={type === item.name ? true : false}
                    />
                  </TouchableOpacity>
                )}
              />
            )}
          </View>
          <Text style={styles.heading}>{type}</Text>
          <View style={styles.productGrid}>
            {productsLoading && categoriesLoading ? (
              <SkeletonPlaceholder backgroundColor={theme.colors.white}>
                <View
                  style={{
                    flexDirection: 'row',
                    width: theme.constants.screenWidth,
                  }}
                >
                  {skeletonArray.map((s) => (
                    <View
                      key={s}
                      style={{
                        width: PRODUCT_WIDTH,
                        height: PRODUCT_HEIGHT,
                        borderRadius: 15,
                        marginRight: 15,
                      }}
                    />
                  ))}
                </View>
              </SkeletonPlaceholder>
            ) : (
              <FlatList
                data={searchProducts}
                numColumns={2}
                showsHorizontalScrollIndicator={false}
                keyExtractor={(item) => item.id.toString()}
                ListEmptyComponent={() => (
                  <View>
                    <Text style={styles.noProductText}>
                      No Products in this category yet
                    </Text>
                  </View>
                )}
                renderItem={({ item }) => (
                  <Product
                    bgColor="white"
                    label={item.title}
                    image={
                      item.image
                        ? item.image
                        : 'https://via.placeholder.com/100x65.png/fff?text=No+Image'
                    }
                    price={item.price}
                    sale={item.sale_price ? item.sale_price : ''}
                    qty={item.qty}
                    main_content={item.main_content ? item.main_content : ''}
                    cart={() => addToCart(item)}
                    details={() =>
                      navigation.navigate('ProductDetail', { product: item })
                    }
                    width={PRODUCT_WIDTH}
                    height={PRODUCT_HEIGHT}
                  />
                )}
              />
            )}
          </View>
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

export default Pharmacy;
