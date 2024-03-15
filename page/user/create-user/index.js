import React, { useState } from 'react';
import { View, Text, Button, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import { usersApi } from '../../../apis/user-api';
import { useRecoilState } from 'recoil';
import { recoilRouter } from '../../../recoil/router.recoil';
import { useNavigate } from 'react-router-native';

const CreateUserPage = () => {
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [email, setEmail] = useState('');
    const navigate = useNavigate();

  const createUser = async () => {
    const informationToCreateUsser = {
        name, password, mobile: phoneNumber, email
    }
    console.log(informationToCreateUsser);
    try {
        const create = await usersApi.createUser(informationToCreateUsser)
        console.log(create);
        navigate('/users-list')
        return
    } catch (err) {
        navigate('/')
        console.log(err);
        return
    }
  }

  return (
    <View style={styles.container}>
          <TouchableOpacity onPress={() => navigate('/users-list')}>
                  <Text style ={{textDecorationLine: 'underline'}}>{'<--'} Back</Text>
               </TouchableOpacity>
     <Text style={{fontSize: 25}}>Create user:</Text>
      <View>
        <Text>Name:</Text>
        <TextInput
          style={styles.input}
          value={name}
          onChangeText={text => setName(text)}
        />
      </View>
      <View>
        <Text>Password:</Text>
        <TextInput
          style={styles.input}
          value={password}
          onChangeText={text => setPassword(text)}
          secureTextEntry
        />
      </View>
      <View>
        <Text>Phone Number:</Text>
        <TextInput
          style={styles.input}
          value={phoneNumber}
          onChangeText={text => setPhoneNumber(text)}
        />
      </View>
      <View>
        <Text>Email:</Text>
        <TextInput
          style={styles.input}
          value={email}
          onChangeText={text => setEmail(text)}
        />
      </View>
      <Button title="Save" onPress={() => createUser()} />
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


export default CreateUserPage