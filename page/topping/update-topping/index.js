import { View, Text, Button, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import { useState } from 'react';
import { ToppingsApi } from '../../../apis/topping-api';
import { useRecoilState, useRecoilValue } from 'recoil';
import { recoilRouter } from '../../../recoil/router.recoil';
import { recoilToppings } from '../../../recoil/topping.recoil';
import { useNavigate } from 'react-router-native';

const UpdateToppingsPage = () => {
  const valueToUpdate = useRecoilValue(recoilToppings.informationToUpdateToppings)
  const [value, setvalue] = useState(valueToUpdate.value);
  const [name, setName] = useState(valueToUpdate.name);
  const [name_v, setName_v] = useState(valueToUpdate.name_vi);
  const [description, setDescription] = useState(valueToUpdate.description);
  const [description_v, setDescription_v] = useState(valueToUpdate.description_vi);
  const [order_by, setorder_by] = useState(valueToUpdate.order_by);
  const [informationUser, setInformationToppings] = useState({})
  const [_, setRouter] = useRecoilState(recoilRouter.router)
      const navigate = useNavigate();


  const handleChangeUpdate = async () => {
    const dataToUpdate = { value, name, name_v, description, description_v, order_by, active: true };
    console.log(valueToUpdate._id);
    try {
      const update = await ToppingsApi.updateToppings(dataToUpdate, valueToUpdate._id)
      console.log(update);
      setInformationToppings(update.data)
    } catch (err) {
      navigate('/')
      console.log(err);
      return
    }
  };

  return (
    <View style={styles.container}>
             <TouchableOpacity onPress={() => navigate('/topping-list')}>
                  <Text style ={{textDecorationLine: 'underline'}}>{'<--'} Back</Text>
       </TouchableOpacity>
       <Text style={{fontSize: 25}}>Update Toppings:</Text>
             <Text style={styles.label}>Value:</Text>
      <TextInput
        style={styles.input}
        value={value}
        onChangeText={(text) => setvalue(text)}
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

            <Text style={styles.label}>Name Vi:</Text>
      <TextInput
        style={styles.input}
        value={name_v}
        onChangeText={(text) => setName_v(text)}
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
      
      <Text style={styles.label}>Description :</Text>
      <TextInput
        style={styles.input}
        value={description_v}
        onChangeText={(text) => setDescription_v(text)}
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


export default UpdateToppingsPage