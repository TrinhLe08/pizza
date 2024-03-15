import { useState, useEffect } from 'react';
import { View, Text, Button, StyleSheet, TextInput, TouchableOpacity, FlatList, Image } from 'react-native'; 
import { categoriesApi } from '../../../apis/categories-api';
import { useRecoilState } from 'recoil';
import { recoilRouter } from '../../../recoil/router.recoil';
import { recoilCategories } from '../../../recoil/categories.recoil';
import { useNavigate } from 'react-router-native';

const CategoriesPage = () => {
    const [allCategories, setAllCategories] = useState([])
    const [_, setRouter] = useRecoilState(recoilRouter.router)
    const [updateCategories, setCategories] = useRecoilState(recoilCategories.informationToUpdateCategories)
    const navigate = useNavigate();
    useEffect(() => {
        const dataAllCategories = async () => { 
            try {
              const allCategories = await categoriesApi.allCategories()
              console.log(allCategories);
              setAllCategories(allCategories.data)
            } catch (e) {
                navigate('/')
                console.log(e);
            }
        }
        dataAllCategories()
    }, [])

    const DeleteCategories = async (CategoriesId) => {
      console.log(CategoriesId);
      try {
        await categoriesApi.deleteCategories(CategoriesId)
        const allCategories = await categoriesApi.allCategories()
        setAllCategories(allCategories.data)
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
            <Text>Categories list :</Text>
              <TouchableOpacity  onPress={() =>{
                 navigate('/create-categories')
                
              }}>
                  <Text style ={{textDecorationLine: 'underline'}}>Create +</Text>
               </TouchableOpacity>
            </View>
            <View style={styles.itemMenu}>
               <Text style={styles.contentName}>Name</Text>
               <Text style={styles.contentDescription}>Order by</Text>
               <Text style={styles.contentDescription}>Active</Text>

           </View>
          <FlatList
               data={allCategories}
               style={{marginBottom: 500}}
               renderItem={({ item }) => (
            <View  style={{ flex: 1, flexDirection: 'row',}} >
                 <TouchableOpacity onPress={() => {
                  navigate('/update-categories')
                 setCategories(item)
                 }
                }>
                   <View style={styles.itemData}>
                       <Text style={styles.contentName}>{item.name}</Text>
                       <Text style={styles.contentDescription}>{item.order_by}</Text>
                       <Text style={styles.contentDescription}>{item.active ? 'active' : 'inactive'}</Text>
                   </View>
                 </TouchableOpacity>
              <TouchableOpacity >
                  <Text style ={{textDecorationLine: 'underline', marginLeft: 10, color: 'red'}} onPress={() => DeleteCategories(item._id)}>Delete</Text>
               </TouchableOpacity>
            </View>
        )} />
        </View>
    )
}

const styles = StyleSheet.create({
  container : {
    marginTop: 50,
        // marginLeft: 80
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
    paddingTop: 10,
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
    width: 110,
  },
  contentDescription: {
    width: 70,
  },
});

export default CategoriesPage