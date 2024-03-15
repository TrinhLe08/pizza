import React, { useState } from 'react';
import { View, Text, Button, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import { useRecoilState } from 'recoil';
import { ProductApi } from '../../../apis/product-api';
import { recoilRouter } from '../../../recoil/router.recoil';
import { useNavigate } from 'react-router-native';

const CreateVoucherPage = () => {
const [code, setCode] = useState(10);
const [percent, setPercent] = useState(10);
const [expiration, setExpiration] = useState('');
    const navigate = useNavigate();

  const creatVoucher = async () => {
    const informationToCreatVoucher =  {code,percent, expiration}
    console.log(informationToCreatVoucher);
    try {
        const create = await ProductApi.creatVoucher(informationToCreatVoucher)
        console.log(create);
        return
    } catch (err) {
        navigate('/')
        console.log(err);
        return
    }
  }

  return (
    <View style={styles.container}>
       <TouchableOpacity onPress={() => navigate('/voucher-list')}>
                  <Text style ={{textDecorationLine: 'underline'}}>{'<--'} Back</Text>
       </TouchableOpacity>
     <Text style={{fontSize: 25}}>Create products :</Text>
<Text >Code:</Text>
      <TextInput
        style={styles.input}
        value={code}
        onChangeText={(text) => setCode(text)}
        placeholderTextColor="#888"
        autoCapitalize="words"
      />
      <Text >Percent:</Text>
      <TextInput
        style={styles.input}
        value={percent}
        onChangeText={(text) => setPercent(text)}
        placeholderTextColor="#888"
        autoCapitalize="words"
      />

      <Text >Expiration:</Text>
      <TextInput
        style={styles.input}
        value={expiration}
        onChangeText={(text) => setExpiration(text)}
        placeholderTextColor="#888"
        autoCapitalize="words"
      />
      <Button title="Save" onPress={() => creatVoucher()} />
    </View>
  );
}

const styles = StyleSheet.create({
    container : {
    flex: 1,
    flexDirection: 'column',
    marginTop: 100,
    flexWrap: 'wrap',
    gap: 10,
    },
    input:{
        width: 350,
         height: 35,
         padding: 2, 
         borderColor: 'gray', 
         borderWidth: 1, 
         borderRadius: 5 
        }
})
export default CreateVoucherPage