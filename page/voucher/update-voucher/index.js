import { View, Text, Button, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import { useState } from 'react';
import { useRecoilState, useRecoilValue } from 'recoil';
import { recoilVoucher } from '../../../recoil/voucher.recoil';
import { VoucherApi } from '../../../apis/vocher-api';
import { recoilRouter } from '../../../recoil/router.recoil';
import { useNavigate } from 'react-router-native';

const UpdateVoucherPage = () => {
const [_,setRouter] = useRecoilState(recoilRouter.router)
const valueVoucher = useRecoilValue(recoilVoucher.informationToUpdateVoucher)
const [code, setCode] = useState(valueVoucher.code);
const [percent, setPercent] = useState(valueVoucher.percent);
const [expiration, setExpiration] = useState(valueVoucher.expiration);
const navigate = useNavigate();
  const handleChangeUpdate = async () => {
    const dataToUpdate = {code,percent, expiration};
    console.log(dataToUpdate);
    try {
      const update = await VoucherApi.updateVoucher(dataToUpdate)
      console.log(update);
      setInformationVoucher(update.data)
    } catch (err) {
      navigate('/')
      console.log(err);
      return
    }
  };

  return (
    <View style={styles.container}>
       <TouchableOpacity onPress={() => navigate('/voucher-list')}>
                  <Text style ={{textDecorationLine: 'underline'}}>{'<--'} Back</Text>
       </TouchableOpacity>
       <Text style={{fontSize: 25}}>Update Vouchers:</Text>
       <Text style={styles.label}>Code:</Text>
      <TextInput
        style={styles.input}
        value={code}
        onChangeText={(text) => setCode(text)}
        placeholder="Enter your name"
        placeholderTextColor="#888"
        autoCapitalize="words"
      />
      <Text style={styles.label}>Percent:</Text>
      <TextInput
        style={styles.input}
        value={percent}
        onChangeText={(text) => setPercent(text)}
        placeholder="Enter your name"
        placeholderTextColor="#888"
        autoCapitalize="words"
      />

      <Text style={styles.label}>Expiration:</Text>
      <TextInput
        style={styles.input}
        value={expiration}
        onChangeText={(text) => setExpiration(text)}
        placeholder="Enter your name"
        placeholderTextColor="#888"
        autoCapitalize="words"
      />
      <TouchableOpacity style={styles.changeInfoButton} onPress={handleChangeUpdate}>
        <Text style={styles.buttonText}>Change Information</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    paddingTop: 40,
    width: 400,
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
  },
  changeImageButton: {
    position: 'absolute',
    bottom: -5,
    right: 0,
    backgroundColor: '#fff',
    borderRadius: 15,
    padding: 5,
  },
  changeImageIcon: {
    width: 20,
    height: 20,
  },
  label: {
    fontSize: 16,
    marginTop: 5,
    alignSelf: 'flex-start',
    color: '#333',
  },
  input: {
    width: 350,
    height: 40,
    borderBottomWidth: 1,
    borderBottomColor: 'black',
    marginBottom: 10,
    paddingLeft: 10,
    borderRadius: 5,
    backgroundColor: '#fff',
  },
  changeInfoButton: {
    backgroundColor: '#4caf50',
    padding: 10,
    alignItems: 'center',
    borderRadius: 5,
    marginTop: 10,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
  },
});

export default UpdateVoucherPage