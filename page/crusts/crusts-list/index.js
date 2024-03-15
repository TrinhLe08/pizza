import { useState, useEffect } from 'react';
import { View, Text, Button, StyleSheet, TextInput, TouchableOpacity, FlatList, Image } from 'react-native'; 
import { CrustsApi } from '../../../apis/crust-api';
import { useRecoilState } from 'recoil';
import { recoilRouter } from '../../../recoil/router.recoil';
import { recoilCrust } from '../../../recoil/crusts.recoil';
import { useNavigate } from 'react-router-native';

const CrustsPage = () => {
    const [allCrusts, setAllCrusts] = useState([])
    const [_, setRouter] = useRecoilState(recoilRouter.router)
    const [updateCrust, setUpdateCrust] = useRecoilState(recoilCrust.informationToUpdateCrust)
        const navigate = useNavigate();

    useEffect(() => {
        const dataAllCrusts = async () => { 
            try {
              const allCrusts = await CrustsApi.allCrusts()
              console.log(allCrusts.data);
              setAllCrusts(allCrusts.data)
            } catch (e) {
                navigate('/login-page')
                console.log(e);
            }
        }
        dataAllCrusts()
    }, [])

    const DeleteCrusts = async (CrustsId) => {
      try {
        await CrustsApi.deleteCrusts(CrustsId)
        const allCrusts = await CrustsApi.allCrusts()
        setAllCrusts(allCrusts.data)
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
            <Text>Crusts list :</Text>
              <TouchableOpacity  onPress={() => {
                navigate('/create-crusts')
                setUpdateCrust(item)
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
               data={allCrusts}
               style={{marginBottom: 500}}
               renderItem={({ item }) => (
            <View style={{ flex: 1, flexDirection: 'row'}} >
                   <TouchableOpacity onPress={() => {
                    navigate('/update-crusts')
                    setUpdateCrust(item)
                   }}>
                    <View style={styles.itemData}  >
                      <Text style={styles.contentName}>{item.name}</Text>
                      <Text style={styles.contentDescription}>{item.order_by}</Text>
                      <Text style={styles.contentDescription}>{item.active ? 'active' : 'inactive'}</Text>
                    </View>
                   </TouchableOpacity>
              <TouchableOpacity >
                  <Text style ={{textDecorationLine: 'underline', marginLeft: 10, color: 'red'}} onPress={() => DeleteCrusts(item._id)}>Delete</Text>
               </TouchableOpacity>
            </View>
        )} />
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
    flexDirection: 'row',
    borderBottomColor : 'black',
    borderBottomWidth: 1,
    paddingTop: 10,
  },
   itemMenu: {
    flex: 1,
    flexDirection: 'row',
    borderBottomColor : 'black',
    borderBottomWidth: 1,
  },
  contentName: {
    width: 170,
  },
  contentDescription: {
    width: 80,
  },
});

export default CrustsPage