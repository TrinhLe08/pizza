import { useState, useEffect } from 'react';
import { View, Text, Button, StyleSheet, TextInput, TouchableOpacity, FlatList, Image } from 'react-native'; 
import { SizesApi } from '../../../apis/size-api';
import { useRecoilState } from 'recoil';
import { recoilRouter } from '../../../recoil/router.recoil';
import { recoilSizes } from '../../../recoil/size.recoil';
import { useNavigate } from 'react-router-native';

const SizesPage = () => {
    const [allSizes, setAllSizes] = useState([])
    const [_, setRouter] = useRecoilState(recoilRouter.router)
    const [valueSizes, setValueSizes] = useRecoilState(recoilSizes.ifnormationToUpdateSizes)
        const navigate = useNavigate();

    useEffect(() => {
        const dataAllSizes = async () => { 
            try {
              const allSizes = await SizesApi.allSizes()
              console.log(allSizes, 14)
              setAllSizes(allSizes.data)
            } catch (e) {
                navigate('/')
                console.log(e);
            }
        }
        dataAllSizes()
    }, [])

    const DeleteSizes = async (SizesId) => {
      try {
        await SizesApi.deleteSizes(SizesId)
        const allSizes = await SizesApi.allSizes()
        setAllSizes(allSizes.data)
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
            <Text>Sizes list :</Text>
              <TouchableOpacity onPress={() => navigate('/create-size')}>
                  <Text style ={{textDecorationLine: 'underline'}}>Create +</Text>
               </TouchableOpacity>
            </View>
            <View style={styles.itemMenu}>
               <Text style={styles.contentName}>Name</Text>
               <Text style={styles.contentDescription}>Order by</Text>
               <Text style={styles.contentDescription}>Active</Text>
           </View>
<FlatList
  data={allSizes}
  style={{ marginBottom: 500 }}
  renderItem={({ item }) => (
    <View style={{ flex: 1, flexDirection: 'row' }}>
      <TouchableOpacity onPress={() => {
        navigate('/update-size')
        setValueSizes(item)
      }}>
        <View style={styles.itemData}>
          <Text style={styles.contentName}>{item.name}</Text>
          <Text style={styles.contentDescription}>{item.order_by}</Text>
          <Text style={styles.contentDescription}>{item.active ? 'active' : 'inactive'}</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity>
        <Text 
          style={{ textDecorationLine: 'underline', marginLeft: 10, color: 'red' }}
          onPress={() => DeleteSizes(item._id)}
        >
          Delete
        </Text>
      </TouchableOpacity>
    </View>
  )}
/>

        </View>
    )
}

const styles = StyleSheet.create({
  container : {
    marginTop: 50,
  },
  itemHeader : {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
 itemData: {
    flex: 1,
    height: 40,
    width: 300,
    justifyContent: 'space-around',
    flexDirection: 'row',
    borderBottomColor : 'black',
    borderBottomWidth: 1,
    paddingTop: 10,
    marginBottom: 20
  },
   itemMenu: {
    flex: 1,
    height: 10,
    width: 300,
    justifyContent: 'space-around',
    flexDirection: 'row',
    borderBottomColor : 'black',
    borderBottomWidth: 1,
  },
  contentName: {
    width: 100,
  },
  contentDescription: {
    width: 70,
  },
});

export default SizesPage