import { View, Text, Button, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import { useState } from 'react';
import { SizesApi } from '../../../apis/size-api';
import { useRecoilState, useRecoilValue } from 'recoil';
import { recoilRouter } from '../../../recoil/router.recoil';
import { recoilSizes } from '../../../recoil/size.recoil';
import { useNavigate } from 'react-router-native';

const UpdateSizesPage = () => {
  const valueToUpdate = useRecoilValue(recoilSizes.ifnormationToUpdateSizes)
  const [code, setCode] = useState(valueToUpdate.code);
  const [name, setName] = useState(valueToUpdate.name);
  const [description, setDescription] = useState(valueToUpdate.description);
  const [order_by, setorder_by] = useState(valueToUpdate.order_by);
  const [informationUser, setInformationSizes] = useState({})
  const [_, setRouter] = useRecoilState(recoilRouter.router)
      const navigate = useNavigate();

  const handleChangeUpdate = async () => {
    const dataToUpdate = { code, name, description, order_by, active: true, order_by: "0"};
    console.log(valueToUpdate._id);
    console.log(dataToUpdate);
    try {
      const update = await SizesApi.updateSizes(dataToUpdate, valueToUpdate._id)
      console.log(update);
      setInformationSizes(update.data)
    } catch (err) {
      navigate('/')
      console.log(err);
      return
    }
  };

  return (
    <View style={styles.container}>
         <TouchableOpacity onPress={() => navigate('/size-list')}>
                  <Text style ={{textDecorationLine: 'underline'}}>{'<--'} Back</Text>
       </TouchableOpacity>
       <Text style={{fontSize: 25}}>Update Sizes:</Text>
             <Text style={styles.label}>Code:</Text>
      <TextInput
        style={styles.input}
        value={code}
        onChangeText={(text) => setCode(text)}
        placeholderTextColor="#888"
        autoCapitalize="words"
      />
      <Text style={styles.label}>Name:</Text>
      <TextInput
        style={styles.input}
        value={name}
        onChangeText={(text) => setName(text)}
        placeholderTextColor="#888"
        autoCapitalize="words"
      />

      <Text style={styles.label}>Description:</Text>
      <TextInput
        style={styles.input}
        value={description}
        onChangeText={(text) => setDescription(text)}
        placeholderTextColor="#888"
      />
    
      <Text style={styles.label}>Order by:</Text>
      <TextInput
        style={styles.input}
        value={order_by}
        onChangeText={(text) => setorder_by(text)}
        placeholderTextColor="#888"
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

export default UpdateSizesPage