import { View, Text, Button, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import { useState } from 'react';
import { useRecoilState, useRecoilValue } from 'recoil';
import { recoilProduct } from '../../../recoil/product.recoil';
import { ProductApi } from '../../../apis/product-api';
import { recoilRouter } from '../../../recoil/router.recoil';
import { useNavigate } from 'react-router-native';

const UpdateProductPage = () => {
const [_,setRouter] = useRecoilState(recoilRouter.router)
const valueProduct = useRecoilValue(recoilProduct.informationToUpdateProduct)
const [name, setName] = useState(valueProduct.name);
const [meta_title, setmeta_title] = useState(valueProduct.meta_title);
const [slug, setSlug] = useState(valueProduct.slug);
const [description, setDescription] = useState(valueProduct.description);
const [basePrice, setBasePrice] = useState(valueProduct.base_price);
const [salePercent, setSalePercent] = useState(valueProduct.sale_percent);
const [metaTitle, setMetaTitle] = useState(valueProduct.meta_title);
const [metaDescription, setMetaDescription] = useState(valueProduct.meta_description);
const [metaKeywords, setMetaKeywords] = useState(valueProduct.meta_keywords);
    const navigate = useNavigate();

  const handleChangeUpdate = async () => {
    const dataToUpdate = { slug, name,
       description, base_price : basePrice, image_path: valueProduct.image_path, type: 'PRODUCT',
       active: true, sale_percent: salePercent, meta_title, 
       meta_description: metaDescription, meta_keywords: metaKeywords, category : valueProduct.category, discount: valueProduct.discount};
    console.log(dataToUpdate);
    try {
      const update = await ProductApi.updateProduct(dataToUpdate, valueProduct._id)
    } catch (err) {
      navigate('/')
      console.log(err);
      return
    }
  };

  return (
    <View style={styles.container}>
       <TouchableOpacity onPress={() => navigate('/product-list')}>
                  <Text style ={{textDecorationLine: 'underline'}}>{'<--'} Back</Text>
       </TouchableOpacity>
       <Text style={{fontSize: 25}}>Update products:</Text>
             <Text style={styles.label}>Slug:</Text>
      <TextInput
        style={styles.input}
        value={slug}
        onChangeText={(text) => setSlug(text)}
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
      
      <Text style={styles.label}>Base price:</Text>
      <TextInput
        style={styles.input}
        value={basePrice.toString()}
        onChangeText={(text) => setBasePrice(text)}
        placeholderTextColor="#888"
      />

      <Text style={styles.label}>Sale percent:</Text>
      <TextInput
        style={styles.input}
        value={salePercent.toString()}
        onChangeText={(text) => setSalePercent(text)}
        placeholderTextColor="#888"
      />

      <Text style={styles.label}>Meta title:</Text>
      <TextInput
        style={styles.input}
        value={meta_title}
        onChangeText={(text) => setmeta_title(text)}
        placeholderTextColor="#888"
        autoCapitalize="words"
      />

      <Text style={styles.label}>Meta Description:</Text>
      <TextInput
        style={styles.input}
        value={metaDescription}
        onChangeText={(text) => setMetaDescription(text)}
        placeholderTextColor="#888"
      />

      <Text style={styles.label}>Meta Keywords:</Text>
      <TextInput
        style={styles.input}
        value={metaKeywords}
        onChangeText={(text) => setMetaKeywords(text)}
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


export default UpdateProductPage