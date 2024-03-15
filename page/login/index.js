import React, { useEffect, useRef, useState } from 'react';
import { View, Text, Button, StyleSheet, TextInput, TouchableOpacity, Image } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { loginApi } from '../../apis/login-api';
import { useRecoilState } from 'recoil';
import { recoilRouter } from '../../recoil/router.recoil';
import { useNavigate } from 'react-router-native';

const LoginPage = () => {
  const [userMail, setUserMail]= useState('admin@gmail.com');
  const [userPassword, setUserPassword] = useState('Abc@12345');
  const [myInformation, setMyInformation] = useState({})
  const [_, setRouter] = useRecoilState(recoilRouter.router)
    const navigate = useNavigate();

  const loginUser = async () => {
   try {
    if (userMail === '' || userPassword === '' ){
     console.log('Not enough information');
     return
    } else {
      const informationUser = {
       email : userMail, password : userPassword
      }
      const Login = await loginApi.logiUsers(informationUser)
      if (Login.data.access_token) {
        await AsyncStorage.setItem('authorization', Login.data.access_token);
        // setRouter('statistical-page')
        navigate('/statistical-page')
      } else {
        return
      }
    }
  } catch (err) {
    console.log(err);
    return
  }
  }
  return (
    <View style={styles.container}>
    <View  style={styles.main}>
         <Image
        source={{ uri: 'https://static.vecteezy.com/system/resources/previews/006/208/325/non_2x/hand-drawn-pizza-doodle-free-vector.jpg' }} // Đường dẫn URL tới hình ảnh trên mạng
        style={{ width: 100, height: 100}}
      />
      <Text >
        WELCOME
      </Text>
       <TextInput
          style={styles.input}
          onChangeText={(text) => setUserMail(text)}
          placeholder="Mail"
          value="admin@gmail.com"
          autoCapitalize="none"
          keyboardType="email-address"
        />
        <TextInput
          style={styles.input}
          onChangeText={(text) => setUserPassword(text)}
          placeholder="Password"
          value="Abc@12345"
          secureTextEntry
        />
     <TouchableOpacity onPress={() => loginUser()}>
      <Text style ={{textDecorationLine: 'underline'}}>Login</Text>
     </TouchableOpacity>

    </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 100,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    gap: 10
  },
  main : {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    gap: 10
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    width: 250,
    height: 40,
    borderColor: 'black',
    borderWidth: 1,
    borderRadius: 10,
    padding: 5,
  }
});

export default LoginPage;
