import React, { useState } from 'react';
import { View, Text, Button, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import { SizesApi } from '../../../apis/size-api';
import { useNavigate } from 'react-router-native';

const CreateSizesPage = () => {
  const [code, setcode] = useState('');
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const navigate = useNavigate();

  const createSizes = async () => {
    const informationToCreateSizes = {
        code, name, description, active: true, order_by: '0',
    }
    console.log(informationToCreateSizes);
    try {
        const create = await SizesApi.createSizes(informationToCreateSizes)
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
         <TouchableOpacity onPress={() => navigate('/size-list')}>
                  <Text style ={{textDecorationLine: 'underline'}}>{'<--'} Back</Text>
       </TouchableOpacity>
     <Text style={{fontSize: 25}}>Create Sizes :</Text>
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
        <Text>Description:</Text>
        <TextInput
          style={styles.input}
          value={description}
          onChangeText={text => setDescription(text)}
          secureTextEntry
        />
      </View>
      <Button title="Save" onPress={() => createSizes()} />
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



export default CreateSizesPage