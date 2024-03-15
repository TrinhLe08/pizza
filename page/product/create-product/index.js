import React, { useState } from 'react';
import { View, Text, Button, StyleSheet, TextInput, TouchableOpacity, KeyboardAvoidingView, ScrollView } from 'react-native';
import { useRecoilState } from 'recoil';
import { ProductApi } from '../../../apis/product-api';
import { recoilRouter } from '../../../recoil/router.recoil';
import { useNavigate } from 'react-router-native';

const CreateProductPage = () => {
const [name, setName] = useState('');
const [slug, setSlug] = useState('');
const [imagePath, setImagePath] = useState('');
const [description, setDescription] = useState('');
const [basePrice, setBasePrice] = useState('');
const [salePercent, setSalePercent] = useState('');
const [metaTitle, setMetaTitle] = useState('');
const [metaDescription, setMetaDescription] = useState('');
const [metaKeywords, setMetaKeywords] = useState('');
const [active, setActive] = useState(true);
const [_, setRouter] = useRecoilState(recoilRouter.router)
    const navigate = useNavigate();

  const createProduct = async () => {
    const informationToCreateProduct = {
             name,
             slug,
             image_path: "",
             description,
             type: 'PRODUCT',
             base_price: basePrice,
             sale_percent: salePercent,
             meta_title: metaTitle,
             meta_description: metaDescription,
             meta_keywords: metaKeywords,
             active: true,
             category: "657d9c0a1fd0b0204fcb85bb",
             discount: "657d9c0a1fd0b0204fcb85bb",
        }
    console.log(informationToCreateProduct);
    try {
        const create = await ProductApi.createProduct(informationToCreateProduct)
        console.log(create);
        return
    } catch (err) {
        console.log(err);
        navigate('/')
        return
    }
  }

  return (
    <KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : "height"} style={{ flex: 1 }}>
    <ScrollView style={styles.container}>
       <TouchableOpacity onPress={() => navigate('/product-list')}>
                  <Text style ={{textDecorationLine: 'underline'}}>{'<--'} Back</Text>
       </TouchableOpacity>
     <Text style={{fontSize: 25}}>Create products :</Text>
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
        <Text>Price:</Text>
        <TextInput
          style={styles.input}
          value={basePrice}
          onChangeText={text => setBasePrice(text)}
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
        <Text>Meta Title:</Text>
        <TextInput
          style={styles.input}
          value={metaTitle}
          onChangeText={text => setMetaTitle(text)}
        />
      </View>
        <View>
        <Text>Meta Description:</Text>
        <TextInput
          style={styles.input}
          value={metaDescription}
          onChangeText={text => setMetaDescription(text)}
        />
      </View>
              <View>
        <Text>Meta Keywords:</Text>
        <TextInput
          style={styles.input}
          value={metaKeywords}
          onChangeText={text => setMetaKeywords(text)}
        />
      </View>
      <Button title="Save" onPress={() => createProduct()} />
    </ScrollView>
    </KeyboardAvoidingView>
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

export default CreateProductPage