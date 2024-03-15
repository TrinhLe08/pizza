import { useState, useEffect } from 'react';
import { View, Text, Button, StyleSheet, TextInput, TouchableOpacity, FlatList, Image } from 'react-native'; 
import { VoucherApi } from '../../../apis/vocher-api';
import { recoilVoucher } from '../../../recoil/voucher.recoil';
import { useRecoilState } from 'recoil';
import { recoilRouter } from '../../../recoil/router.recoil';
import { useNavigate } from 'react-router-native';

const VouchertPage = () => {
    const [allVouchert, setAllVouchert] = useState([])
    const [valueVouchert, setValueVoucher] = useRecoilState(recoilVoucher.informationToUpdateVoucher)
    const [_, setRouter] = useRecoilState(recoilRouter.router)
    const navigate = useNavigate();

    useEffect(() => {
        const dataAllVouchert = async () => { 
            try {
              const allVouchert = await VoucherApi.allVoucher()
              setAllVouchert(allVouchert.data)
            } catch (e) {
                console.log(e);
            }
        }
        dataAllVouchert()
    }, [])

    const DeleteVouchert = async (VouchertId) => {
      try {
        await VoucherApi.deleteVoucher(VouchertId)
        const allVouchert = await VoucherApi.allVoucher()
        setAllVouchert(allVouchert.data)
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
            <Text>Vouchert list :</Text>
              <TouchableOpacity  onPress={() => navigate('/create-voucher')}>
                  <Text style ={{textDecorationLine: 'underline'}}>Create +</Text>
               </TouchableOpacity>
            </View>
            <View style={styles.itemMenu}>
               <Text style={styles.contentName}>Code</Text>
               <Text style={styles.contentDescription}>Percent </Text>
               <Text style={styles.contentDescription}>Expiration </Text>
           </View>
          <FlatList
               data={[{
                code: '123',
                percent: '15',
                expiration: '11/11/2024'
               }]}
               style={{marginBottom: 600}}
               renderItem={({ item }) => (
            <View  style={{ flex: 1, flexDirection: 'row',}} >
                 <TouchableOpacity onPress={() => {
                  navigate('/update-voucher')
                   setValueVoucher(item)
                   return
                 }
                }>
                   <View style={styles.itemData}>
                       <Text style={styles.contentName}>{item.code}</Text>
                       <Text style={styles.contentDescription}>{item.percent}</Text>
                       <Text style={styles.contentDescription}>{item.expiration}</Text>
                   </View>
                 </TouchableOpacity>
              <TouchableOpacity >
                  <Text style ={{textDecorationLine: 'underline', marginLeft: 10, color: 'red'}} onPress={() => DeleteVouchert(item._id)}>Delete</Text>
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

export default VouchertPage