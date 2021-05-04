import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import * as Haptics from 'expo-haptics';

import styles from './styles';
import { theme } from '../../components';
import { AppNavParamList } from '../../types/navigationTypes';
import { consult } from '../../screens';
import HomeNav from '../HomeNav/HomeNav';
import ProfileNav from '../ProfileNav/ProfileNav';
import SearchNav from '../SearchNav/SearchNav';
import {
  HomeIcon,
  SearchIcon,
  ConsultIcon,
  ProfileIcon,
} from '../../svg/homeNavIcons';

const AppStack = createBottomTabNavigator<AppNavParamList>();

const AppNav = () => {
  return (
    <AppStack.Navigator
      tabBarOptions={{
        keyboardHidesTabBar: true,
        activeTintColor: theme.colors.primary,
        inactiveTintColor: theme.colors.grey,
        tabStyle: styles.tabBarItem,
        style: styles.tabBar,
      }}
    >
      <AppStack.Screen
        name="Home"
        component={HomeNav}
        options={{
          tabBarIcon: ({ color }) => {
            return <HomeIcon color={color} />;
          },
        }}
        listeners={() => ({
          tabPress: (e) => {
            Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
          },
        })}
      />
      <AppStack.Screen
        name="Search"
        component={SearchNav}
        options={{
          tabBarIcon: ({ color }) => {
            return <SearchIcon color={color} />;
          },
        }}
        listeners={() => ({
          tabPress: (e) => {
            Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
          },
        })}
      />
      <AppStack.Screen
        name="Consult"
        component={consult}
        options={{
          tabBarIcon: ({ color }) => {
            return <ConsultIcon color={color} />;
          },
        }}
        listeners={() => ({
          tabPress: (e) => {
            Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
          },
        })}
      />
      <AppStack.Screen
        name="Profile"
        component={ProfileNav}
        options={{
          tabBarIcon: ({ color }) => {
            return <ProfileIcon color={color} />;
          },
          unmountOnBlur: true,
        }}
        listeners={() => ({
          tabPress: (e) => {
            Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
          },
        })}
      />
    </AppStack.Navigator>
  );
};

export default AppNav;
