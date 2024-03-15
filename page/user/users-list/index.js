import { useState, useEffect } from 'react';
import { useRecoilState, useRecoilValue } from 'recoil';
import { View, Text, Button, StyleSheet, TextInput, TouchableOpacity, FlatList, Image } from 'react-native'; 
import { usersApi } from '../../../apis/user-api';
import { recoilUser } from '../../../recoil/user.recoil';
import { recoilRouter } from '../../../recoil/router.recoil';
import { useNavigate } from 'react-router-native';

const UserListPage = () => {
    const [allUser, setAllUser] = useState([])
    const [dataUser, setDataUser] = useRecoilState(recoilUser.informationToUpdateUser)
    const [_, setRouter] = useRecoilState(recoilRouter.router)
    const [informationUser, setInformationUser] = useRecoilState(recoilUser.informationToUpdateUser)
    const navigate = useNavigate();

    useEffect(() => {
        const dataAllUser = async () => { 
            try {
              const allUser = await usersApi.allUser()
              setAllUser(allUser.data)
            } catch (e) {
                console.log(e);
            }
        }
        dataAllUser()
    }, [])

    const DeleteUser = async (userId) => {
      try {
        await usersApi.deleteUser(userId)
        const allUser = await usersApi.allUser()
        setAllUser(allUser.data)
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
            <Text>User list : </Text>
              <TouchableOpacity onPress={() => navigate('/create-user')}>
                  <Text style ={{textDecorationLine: 'underline'}}>Create +</Text>
               </TouchableOpacity>
            </View>
            <View style={styles.itemMenu}>
               <Text style={styles.contentName}>Name</Text>
               <Text style={styles.contentEmail}>Email</Text>
               <Text style={styles.contentMobile}>Phone</Text>
           </View>
          <FlatList
               data={[
    { id: 1, name: 'John Doe', email: 'john.doe@example.com', mobile: '123-456-7890' },
    { id: 2, name: 'Jane Smith', email: 'jane.smith@example.com', mobile: '987-654-3210' },
  ]}
               style={{marginBottom: 500}}
               renderItem={({ item }) => (
                <View style={{ flex: 1, flexDirection: 'row',}} >  
            <TouchableOpacity onPress={() => {
                 navigate('/update-user')
                 setInformationUser(item)
               }}>
                        <View style={styles.itemData}>
                          <Text style={styles.contentName}>{item.name}</Text>
                          <Text style={styles.contentEmail}>{item.email}</Text>
                          <Text style={styles.contentMobile}>{item.mobile}</Text>
                        </View>
                       </TouchableOpacity>
                <Text style={{textDecorationLine: 'underline', marginLeft: 10, color: 'red', paddingTop: 15}} onPress={() => DeleteUser(item._id)}>Delete</Text>
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
    width: 320,
    flexDirection: 'row',
    borderBottomColor : 'black',
    borderBottomWidth: 1,
    paddingBottom: 10,
    paddingTop: 10,
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
  contentEmail: {
    width: 110,
  },
  contentMobile: {
     width: 80,
  }
});

export default UserListPage