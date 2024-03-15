import React, { useState } from 'react';
import { View, Text, Button, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import { useRecoilState } from 'recoil';
import { categoriesApi } from '../../../apis/categories-api';
import { recoilRouter } from '../../../recoil/router.recoil';
import { useNavigate } from 'react-router-native';

const CreateCategoriesPage = () => {
  const [slug, setSlug] = useState('');
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [_, setRouter] = useRecoilState(recoilRouter.router)
const navigate = useNavigate();
  const createCategories = async () => {
    const informationToCreateCategories = {
        slug, name, description, active: true, order_by: '0', contain_single_items: true
    }
    console.log(informationToCreateCategories);
    try {
        const create = await categoriesApi.createCategories(informationToCreateCategories)
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
       <TouchableOpacity onPress={() => navigate('/categories-list')}>
                  <Text style ={{textDecorationLine: 'underline'}}>{'<--'} Back</Text>
       </TouchableOpacity>
     <Text style={{fontSize: 25}}>Create categories :</Text>
           <View>
        <Text>Slug:</Text>
        <TextInput
          style={styles.input}
          value={slug}
          onChangeText={text => setSlug(text)}
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
        />
      </View>
      <Button title="Save" onPress={() => createCategories()} />
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


export default CreateCategoriesPage