import { StyleSheet, Text, View } from 'react-native';
import { NativeRouter, Routes, Route } from 'react-router-native';
import { useRecoilValue } from 'recoil';
import { recoilRouter } from './recoil/router.recoil';
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
import ProductPage from './page/product/product-list';
import CreateProductPage from './page/product/create-product';
import UpdateProductPage from './page/product/update-product';
import VoucherPage from './page/voucher/voucher-list';
import UpdateVoucherPage from './page/voucher/update-voucher';
import CreateVoucherPage from './page/voucher/create-voucher';
import BasicStatistical from './page/statistical';
import OrderPage from './page/order';
import LoginPage from './page/login';
import React from 'react';

export default function MainApp() {
  const router = useRecoilValue(recoilRouter.router)
  return (
   <NativeRouter>
     <Routes>
      <Route exact path="/" element={<LoginPage/>} /> 
      <Route exact path="/statistical-page" element={<BasicStatistical />} /> 

      <Route exact path="/users-list" element={<UserListPage />} /> 
      <Route exact path="/create-user" element={<CreateUserPage />} /> 
      <Route exact path="/update-user" element={<UpdateUserPage />} /> 

      <Route exact path="/categories-list" element={<CategoriesPage />} />
      <Route exact path="/create-categories" element={<CreateCategoriesPage />} />
      <Route exact path="/update-categories" element={<UpdateCategoriesPage />} />

      <Route exact path="/topping-list" element={<ToppingsPage />} />
      <Route exact path="/create-topping" element={<CreateToppingsPage />} />
      <Route exact path="/update-topping" element={<UpdateToppingsPage />} />

      <Route exact path="/size-list" element={<SizesPage />} />
      <Route exact path="/create-size" element={<CreateSizesPage />} />
      <Route exact path="/update-size" element={<UpdateSizesPage />} />    

      <Route exact path="/crusts-list" element={<CrustsPage />} />
      <Route exact path="/create-crusts" element={<CreateCrustsPage />} />
      <Route exact path="/update-crusts" element={<UpdateCrustsPage />} />  

      <Route exact path="/product-list" element={<ProductPage />} />
      <Route exact path="/create-product" element={<CreateProductPage />} />
      <Route exact path="/update-product" element={<UpdateProductPage />} />
      
      <Route exact path="/voucher-list" element={<VoucherPage />} />
      <Route exact path="/create-voucher" element={<CreateVoucherPage />} />
      <Route exact path="/update-voucher" element={<UpdateVoucherPage />} />
      
      <Route exact path="/order-list" element={<OrderPage />} />
     </Routes>
  </NativeRouter>
  );
}



