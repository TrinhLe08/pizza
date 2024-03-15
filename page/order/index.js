import { useState, useEffect } from 'react';
import { View, Text, Button, StyleSheet, TextInput, TouchableOpacity, FlatList, Image } from 'react-native'; 
// import { OrderApi } from '../../../apis/Order-api';
// import { recoilOrder } from '../../../recoil/product.recoil';
import { useRecoilState } from 'recoil';
import { recoilRouter } from '../../recoil/router.recoil';
import { useNavigate } from 'react-router-native';

const OrderPage = () => {
    const [allOrder, setAllOrder] = useState([])
    // const [valueOrder, setValueOrder] = useRecoilState(recoilOrder.informationToUpdateOrder)
    const [_, setRouter] = useRecoilState(recoilRouter.router)
    const navigate = useNavigate();

    // useEffect(() => {
    //     const dataAllOrder = async () => { 
    //         try {
    //           const allOrder = await OrderApi.allOrder()
    //           setAllOrder(allOrder.data)
    //         } catch (e) {
    //             console.log(e);
    //         }
    //     }
    //     dataAllOrder()
    // }, [])

    // const UpdateStatusOrder = async (OrderId) => {
    //   try {
    //     await OrderApi.updateStatusOrder(OrderId)
    //     const allOrder = await OrderApi.allOrder()
    //     setAllOrder(allOrder.data)
    //   } catch (e) {
    //     console.log(e);
    //     return
    //   }
    // }

    return (
        <View style = {styles.container}>
           <TouchableOpacity onPress={() => navigate('/statistical-page')}>
                  <Text style ={{textDecorationLine: 'underline'}}>{'<--'} Back</Text>
       </TouchableOpacity>
          <View style={styles.itemHeader}>
            <Text>Order list :</Text>
            </View>
            <View style={styles.itemMenu}>
               <Text style={styles.contentName}>Number</Text>
               <Text style={styles.contentDescription}>Order date</Text>
               <Text style={styles.contentDescription}>The buyer</Text>
               <Text style={styles.contentDescription}>Status</Text>
           </View>
          <FlatList
            data={[
    { orderNumber: '001', orderDate: '2022-01-15', buyerName: 'John Doe', status: 'Pending' },
    { orderNumber: '002', orderDate: '2022-01-16', buyerName: 'Jane Smith', status: 'Shipped' },
    { orderNumber: '003', orderDate: '2022-01-17', buyerName: 'Alex Johnson', status: 'Delivered' },
  ]}
               style={{marginBottom: 600}}
               renderItem={({ item }) => (
            <View  style={{ flex: 1, flexDirection: 'row',}} >
                 <TouchableOpacity>
                   <View style={styles.itemData}>
                       <Text style={styles.contentName}>{item.orderNumber}</Text>
                       <Text style={styles.contentDescription}>{item.orderDate}</Text>
                       <Text style={styles.contentDescription}>{item.buyerName}</Text>
                       <Text style={styles.contentDescription}>{item.status}</Text>
                   </View>
                 </TouchableOpacity>
              <TouchableOpacity >
                  <Text style ={{textDecorationLine: 'underline', marginLeft: 10, color: 'red'}}
                  //  onPress={() => UpdateStatusOrder(item._id)}
                   >Update status</Text>
               </TouchableOpacity>
            </View>
        )} />
        </View>
    )
}

const styles = StyleSheet.create({
  container : {
    marginTop: 50,
    marginLeft: 10
  },
  itemHeader : {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
 itemData: {
    flex: 1,
    flexDirection: 'row',
    borderBottomColor : 'black',
    borderBottomWidth: 1,
    paddingBottom: 10,
    paddingTop: 10
  },
   itemMenu: {
    flex: 1,
    flexDirection: 'row',
    borderBottomColor : 'black',
    borderBottomWidth: 1,
  },
  contentName: {
    width: 70,
  },
  contentDescription: {
    width: 110,
  },
});

export default OrderPage