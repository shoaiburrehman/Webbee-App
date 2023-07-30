import React from 'react';
import styles from './styles';
import DrawerButton from '../DrawerButton';
import {View} from 'react-native';
import {drawerRoutes} from '../../../navigations/NavigationOptions';
import {useTypedSelector} from '../../../redux/useTypedSelected';
import {CategoryType} from '../../../models/categories.model';
import NavigationRoutes from '../../../navigations/NavigationRoutes';

const DrawerContent = (props: any) => {
  const categories = useTypedSelector(state => state.categories.categories);

  const handleOnDrawerItemPress = (
    routeName: string,
    item?: CategoryType | null,
  ) => {
    if (drawerRoutes[routeName]) {
      if (drawerRoutes[routeName].notRoute != true) {
        return props.navigation.navigate(routeName, {item});
      }
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.routeContainer}>
        <DrawerButton
          onPress={() => handleOnDrawerItemPress(NavigationRoutes.DASHBOARD)}
          routeName={NavigationRoutes.DASHBOARD}
        />

        {categories.map((item, index) => {
          return (
            <DrawerButton
              index={index}
              onPress={() =>
                handleOnDrawerItemPress(NavigationRoutes.DASHBOARD, item)
              }
              routeName={item?.CategoryName}
            />
          );
        })}

        <DrawerButton
          onPress={() =>
            handleOnDrawerItemPress(NavigationRoutes.MANAGE_CATEGORY)
          }
          routeName={NavigationRoutes.MANAGE_CATEGORY}
        />
      </View>
    </View>
  );
};
export default DrawerContent;
