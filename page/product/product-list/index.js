import { useState, useEffect } from 'react';
import { View, Text, Button, StyleSheet, TextInput, TouchableOpacity, FlatList, Image } from 'react-native'; 
import { ProductApi } from '../../../apis/product-api';
import { recoilProduct } from '../../../recoil/product.recoil';
import { useRecoilState } from 'recoil';
import { recoilRouter } from '../../../recoil/router.recoil';
import { useNavigate } from 'react-router-native';


const ProductPage = () => {
    const [allProduct, setAllProduct] = useState([])
    const [valueProduct, setValueProduct] = useRecoilState(recoilProduct.informationToUpdateProduct)
    const [_, setRouter] = useRecoilState(recoilRouter.router)
    const navigate = useNavigate();

    useEffect(() => {
        const dataAllProduct = async () => { 
            try {
              const allProduct = await ProductApi.allProduct()
              console.log(allProduct);
              setAllProduct(allProduct.data)
            } catch (e) {
               navigate('/')
               console.log(e);
            }
        }
        dataAllProduct()
    }, [])

    const DeleteProduct = async (ProductId) => {
      try {
        await ProductApi.deleteProduct(ProductId)
        const allProduct = await ProductApi.allProduct()
        setAllProduct(allProduct.data)
      } catch (e) {
        console.log(e);
        return
      }
    }

    return (
        <View style = {styles.container}>
           <TouchableOpacity onPress={() => navigate('/statistical-page')}>
                  <Text style ={{textDecorationLine: 'underline'}}>{'<--'} Back</Text>
       </TouchableOpacity>
          <View style={styles.itemHeader}>
            <Text>Product list :</Text>
              <TouchableOpacity  onPress={() => navigate('/create-product')}>
                  <Text style ={{textDecorationLine: 'underline'}}>Create +</Text>
               </TouchableOpacity>
            </View>
            <View style={styles.itemMenu}>
               <Text style={styles.contentName}>Name</Text>
               <Text style={styles.contentDescription}>Price</Text>
               <Text style={styles.contentDescription}>Active</Text>
           </View>
          <FlatList
               data={allProduct}
               style={{marginBottom: 270}}
               renderItem={({ item }) => (
            <View  style={{ flex: 1, flexDirection: 'row'}} >
                 <TouchableOpacity onPress={() => {
                   navigate('/update-product')
                   setValueProduct(item)
                   return
                 }
                }>
                   <View style={styles.itemData}>
                       <Text style={styles.contentName}>{item.name}</Text>
                       <Text style={styles.contentDescription}>{item.base_price}</Text>
                       <Text style={styles.contentDescription}>{item.active ? 'active' : 'inactive'}</Text>
                   </View>
                 </TouchableOpacity>
              <TouchableOpacity >
                  <Text style ={{textDecorationLine: 'underline', marginLeft: 10, color: 'red'}} onPress={() => DeleteProduct(item._id)}>Delete</Text>
               </TouchableOpacity>
            </View>
        )} />
        </View>
    )
}

const styles = StyleSheet.create({
  container : {
    marginTop: 50,
    height: 'auto',
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
  },
   itemMenu: {
    flex: 1,
    flexDirection: 'row',
    borderBottomColor : 'black',
    borderBottomWidth: 1,  
  },
  contentName: {
    width: 180,
  },
  contentDescription: {
    width: 80,
  },
});


export default ProductPage