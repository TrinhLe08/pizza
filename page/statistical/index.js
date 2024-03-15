import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import { useRecoilState } from 'recoil';
import { recoilRouter } from '../../recoil/router.recoil';
import { useNavigate } from 'react-router-native';

const BasicStatistical = () => {
  const [totalOrders, setTotalOrders] = useState(0);
  const [totalRevenue, setTotalRevenue] = useState(0);
  const [totalProductsSold, setTotalProductsSold] = useState(0);
  const [_, setRouter] = useRecoilState(recoilRouter.router)
    const navigate = useNavigate();

  useEffect(() => {
    setTotalOrders(100);
    setTotalRevenue(10000);
    setTotalProductsSold(500);
  }, []);

 return (
  <View style={styles.container}>
    <Text style={{ fontSize: 25 }}>Menu</Text>
   <View style={styles.menu}>
  <TouchableOpacity onPress={() => navigate('/product-list')}>
    <Text style={[styles.menuItem, { flex: 1, textDecorationLine: 'underline' }]}>Product</Text>
  </TouchableOpacity>
  <TouchableOpacity onPress={() => navigate('/size-list')}>
    <Text style={[styles.menuItem, { flex: 1, textDecorationLine: 'underline' }]}>Size</Text>
  </TouchableOpacity>
  <TouchableOpacity onPress={() => navigate('/topping-list')}>
    <Text style={[styles.menuItem, { flex: 1, textDecorationLine: 'underline' }]}>Topping</Text>
  </TouchableOpacity>
  <TouchableOpacity onPress={() => navigate('/crusts-list')}>
    <Text style={[styles.menuItem, { flex: 1, textDecorationLine: 'underline' }]}>Crust</Text>
  </TouchableOpacity>
  <TouchableOpacity onPress={() => navigate('/users-list')}>
    <Text style={[styles.menuItem, { flex: 1, textDecorationLine: 'underline' }]}>User</Text>
  </TouchableOpacity>
   <TouchableOpacity onPress={() => navigate('/order-list')}>
    <Text style={[styles.menuItem, { flex: 1, textDecorationLine: 'underline' }]}>Order</Text>
  </TouchableOpacity>
     <TouchableOpacity onPress={() => navigate('/voucher-list')}>
    <Text style={[styles.menuItem, { flex: 1, textDecorationLine: 'underline' }]}>Voucher</Text>
  </TouchableOpacity>
   <TouchableOpacity onPress={() => navigate('/categories-list')}>
    <Text style={[styles.menuItem, { flex: 1, textDecorationLine: 'underline' }]}>Categories</Text>
  </TouchableOpacity>
</View>
    <View style={styles.content}>
      <Text style={{ fontSize: 30, color: 'blue', fontWeight: 600 }}>Statistical</Text>
      <Text style={styles.statItem}>Total Orders : {totalOrders}</Text>
      <Text style={styles.statItem}>Total Revenue : {totalRevenue}</Text>
      <Text style={styles.statItem}>Total Products Sold : {totalProductsSold}</Text>
    </View>
  </View>
);
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 40,
  },
  menu: {
    flexDirection: 'row',
    gap: 8,
    height: 30,
    marginTop: 20,
  },
    statItem:{
    padding: 10,
    borderWidth: 1, 
    borderColor: 'black', 
  },
  content: {
    gap:10,
    marginLeft: 30,
    marginRight: 20, 
  }
});

export default BasicStatistical;