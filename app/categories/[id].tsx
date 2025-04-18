import { View, Text, StyleSheet, FlatList, Image, TouchableOpacity } from 'react-native';
import { data } from '../../data';
import { useLocalSearchParams, Link } from 'expo-router';

export default function CategoryProducts() {
  const { id } = useLocalSearchParams();
  const categoryId = Number(id);
  
  const category = data.categories.find(cat => cat.id === categoryId);
  const products = data.products.filter(prod => prod.idCategory === categoryId);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.categoryTitle}>{category?.title}</Text>
      </View>
      
      <FlatList
        data={products}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <Link href={`/product/${item.id}`} asChild>
            <TouchableOpacity style={styles.productCard}>
              <Image source={{ uri: item.image }} style={styles.productImage} />
              <View style={styles.productInfo}>
                <Text style={styles.productTitle}>{item.title}</Text>
                <Text style={styles.productDescription}>{item.description}</Text>
                <Text style={styles.productPrice}>R$ {item.price.toFixed(2)}</Text>
              </View>
            </TouchableOpacity>
          </Link>
        )}
        contentContainerStyle={styles.listContainer}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    padding: 20,
    backgroundColor: '#f5f5f5',
    alignItems: 'center',
  },
  categoryTitle: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  listContainer: {
    padding: 10,
  },
  productCard: {
    flexDirection: 'row',
    marginBottom: 15,
    backgroundColor: '#f5f5f5',
    borderRadius: 10,
    overflow: 'hidden',
  },
  productImage: {
    width: 100,
    height: 100,
  },
  productInfo: {
    flex: 1,
    padding: 10,
  },
  productTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  productDescription: {
    fontSize: 14,
    color: '#666',
    marginBottom: 5,
  },
  productPrice: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#007AFF',
  },
}); 