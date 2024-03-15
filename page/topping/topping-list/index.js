import { useState, useEffect } from 'react';
import { View, Text, Button, StyleSheet, TextInput, TouchableOpacity, FlatList, Image } from 'react-native'; 
import { ToppingsApi } from '../../../apis/topping-api';
import { useRecoilState } from 'recoil';
import { recoilRouter } from '../../../recoil/router.recoil';
import { recoilToppings } from '../../../recoil/topping.recoil';
import { useNavigate } from 'react-router-native';

const ToppingsPage = () => {
    const navigate = useNavigate();
    const [allToppings, setAllToppings] = useState([])
    const [_, setRouter] = useRecoilState(recoilRouter.router)
    const [updateToppings, setUpdateToppings] = useRecoilState(recoilToppings.informationToUpdateToppings)
    useEffect(() => {
        const dataAllToppings = async () => { 
            try {
              const allToppings = await ToppingsApi.allToppings()
              console.log(allToppings, 15);
              setAllToppings(allToppings.data)
            } catch (e) {
                console.log(e);
            }
        }
        dataAllToppings()
    }, [])
    const DeleteToppings = async (ToppingsId) => {
      try {
        await ToppingsApi.deleteToppings(ToppingsId)
        const allToppings = await ToppingsApi.allToppings()
        setAllToppings(allToppings.data)
      } catch (e) {
        navigate('/')
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
            <Text>Toppings list :</Text>
              <TouchableOpacity onPress={() => navigate('/create-topping')}>
                  <Text style ={{textDecorationLine: 'underline'}}>Create +</Text>
               </TouchableOpacity>
            </View>
            <View style={styles.itemMenu}>
               <Text style={styles.contentName}>Name</Text>
               <Text style={styles.contentDescription}>Value</Text>
               <Text style={styles.contentDescription}>Active</Text>
           </View>
          <FlatList
               data={allToppings}
               style={{marginBottom: 270}}
               renderItem={({ item }) => (
            <View  style={{ flex: 1, flexDirection: 'row',}} >
                   <TouchableOpacity onPress={() => {
                    navigate('/update-topping')
                    setUpdateToppings(item)
                   }}>
                    <View style={styles.itemData}>         
              <Text style={styles.contentName}>{item.name}</Text>
              <Text style={styles.contentDescription}>{item.value}</Text>
              <Text style={styles.contentDescription}>{item.active ? 'active' : 'inactive'}</Text>
                    </View>
                   </TouchableOpacity>
              <TouchableOpacity >
                  <Text style ={{textDecorationLine: 'underline', marginLeft: 10, color: 'red'}} onPress={() => DeleteToppings(item._id)}>Delete</Text>
               </TouchableOpacity>
            </View>
        )} />
        </View>
    )
}

const styles = StyleSheet.create({
  container : {
    marginTop: 50,
    // marginLeft: 60,
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
    marginBottom: 20
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

export default ToppingsPage