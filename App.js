import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { RecoilRoot, useRecoilValue } from 'recoil';
import { recoilRouter } from './recoil/router.recoil';
import MainApp from './main';
import LoginPage from './page/login';
import UserListPage from './page/user/users-list';
import CreateUserPage from './page/user/create-user';
import UpdateUserPage from './page/user/update-user';
import CategoriesPage from './page/categories/categories-list';
import CreateCategoriesPage from './page/categories/create-categories';
import UpdateCategoriesPage from './page/categories/update-categories';
import ToppingsPage from './page/topping/topping-list';
import CreateToppingsPage from './page/topping/create-topping';
import UpdateToppingsPage from './page/topping/update-topping';
import SizesPage from './page/size/size-list';
import CreateSizesPage from './page/size/create-size';
import UpdateSizesPage from './page/size/update-size';
import CrustsPage from './page/crusts/crusts-list';
import CreateCrustsPage from './page/crusts/create-crusts';
import UpdateCrustsPage from './page/crusts/update-crusts';
import ProductPage from './page/product/product-list'
import UpdateProductPage from './page/product/update-product';
import CreateProductPage from './page/product/create-product';
import OrderPage from './page/order';
import BasicStatistical from './page/statistical';

const App = () =>  {
  return (
    <RecoilRoot>
      <View style ={styles.container}>
        <MainApp/>
      </View>
    </RecoilRoot>
  );
}

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

