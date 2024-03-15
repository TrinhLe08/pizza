import React, { useState } from 'react';
import { View, Text, Button, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import { CrustsApi } from '../../../apis/crust-api';
import { useNavigate } from 'react-router-native';

const CreateCrustsPage = () => {
  const [code, setcode] = useState('');
  const [name, setName] = useState('');
  const [name_vi, setName_vi] = useState('');
  const [description, setDescription] = useState('');
  const [description_vi, setDescription_vi] = useState('');
  const navigate = useNavigate();

  const createCrusts = async () => {
    const informationToCreateCrusts = {
        code, name, name_vi, description, description_vi, active: true, order_by: '0',
    }

    console.log(informationToCreateCrusts);
    try {
        const create = await CrustsApi.createCrusts(informationToCreateCrusts)
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
       <TouchableOpacity onPress={() => {
        navigate('/crusts-list')
       }}>
                  <Text style ={{textDecorationLine: 'underline'}}>{'<--'} Back</Text>
       </TouchableOpacity>
     <Text style={{fontSize: 25}}>Create Crusts :</Text>
      <View>
        <Text>Code:</Text>
        <TextInput
          style={styles.input}
          value={code}
          onChangeText={text => setcode(text)}
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
          onChangeText={text => setName_vi(text)}
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
      <Button title="Save" onPress={() => createCrusts()} />
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

export default CreateCrustsPage