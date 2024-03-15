import React, { useState } from 'react';
import { View, Text, Button, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import { ToppingsApi } from '../../../apis/topping-api';
import { useRecoilState } from 'recoil';
import { recoilRouter } from '../../../recoil/router.recoil';
import { useNavigate } from 'react-router-native';

const CreateToppingsPage = () => {
  const [value, setvalue] = useState('');
  const [name, setName] = useState('');
  const [name_vi, setname_vi] = useState('');
  const [description, setDescription] = useState('');
  const [description_vi, setDescription_vi] = useState('');
  const navigate = useNavigate();

  const createToppings = async () => {
    const informationToCreateToppings = {
        value, name, name_vi, description, description_vi, active: true, order_by: '0',
    }
    console.log(informationToCreateToppings);
    try {
        const create = await ToppingsApi.createToppings(informationToCreateToppings)
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
         <TouchableOpacity onPress={() => navigate('/topping-list')}>
                  <Text style ={{textDecorationLine: 'underline'}}>{'<--'} Back</Text>
       </TouchableOpacity>
     <Text style={{fontSize: 25}}>Create Toppings :</Text>
           <View>
        <Text>Value:</Text>
        <TextInput
          style={styles.input}
          value={value}
          onChangeText={text => setvalue(text)}
        />
      </View>
      <View>
        <Text>Name:</Text>
        <TextInput
          style={styles.input}
          value={name}
          onChangeText={text => setName(text)}
        />
      </View>
       <View>
        <Text>Name Vi:</Text>
        <TextInput
          style={styles.input}
          value={name_vi}
          onChangeText={text => setname_vi(text)}
        />
      </View>
      <View>
        <Text>Description:</Text>
        <TextInput
          style={styles.input}
          value={description}
          onChangeText={text => setDescription(text)}
        />
      </View>
     <View>
        <Text>Description Vi:</Text>
        <TextInput
          style={styles.input}
          value={description_vi}
          onChangeText={text => setDescription_vi(text)}
        />
      </View>
      <Button title="Save" onPress={() => createToppings()} />
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

export default CreateToppingsPage