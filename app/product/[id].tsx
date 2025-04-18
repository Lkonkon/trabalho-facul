import { View, Text, StyleSheet, Image, ScrollView } from 'react-native';
import { data } from '../../data';
import { useLocalSearchParams } from 'expo-router';

export default function ProductDetails() {
  const { id } = useLocalSearchParams();
  const productId = Number(id);
  
  const product = data.products.find(prod => prod.id === productId);
  const category = data.categories.find(cat => cat.id === product?.idCategory);

  if (!product) {
    return (
      <View style={styles.container}>
        <Text>Produto não encontrado</Text>
      </View>
    );
  }

  return (
    <ScrollView style={styles.container}>
      <Image source={{ uri: product.image }} style={styles.productImage} />
      
      <View style={styles.content}>
        <Text style={styles.category}>{category?.title}</Text>
        <Text style={styles.title}>{product.title}</Text>
        <Text style={styles.price}>R$ {product.price.toFixed(2)}</Text>
        
        <View style={styles.descriptionContainer}>
          <Text style={styles.descriptionTitle}>Descrição</Text>
          <Text style={styles.description}>{product.description}</Text>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  productImage: {
    width: '100%',
    height: 300,
  },
  content: {
    padding: 20,
  },
  category: {
    fontSize: 16,
    color: '#666',
    marginBottom: 5,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  price: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#007AFF',
    marginBottom: 20,
  },
  descriptionContainer: {
    backgroundColor: '#f5f5f5',
    padding: 15,
    borderRadius: 10,
  },
  descriptionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  description: {
    fontSize: 16,
    lineHeight: 24,
    color: '#333',
  },
}); 