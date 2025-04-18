import { View, Text, StyleSheet, ScrollView, Image, TouchableOpacity } from 'react-native';
import { data } from '../data';
import { Link } from 'expo-router';

export default function Home() {
  const featuredProducts = data.products.slice(0, 6);

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Bem-vindo à nossa Loja!</Text>
        <Text style={styles.subtitle}>Confira nossos produtos em destaque</Text>
      </View>

      <View style={styles.productsContainer}>
        {featuredProducts.map((product) => (
          <Link key={product.id} href={`/product/${product.id}`} asChild>
            <TouchableOpacity style={styles.cardProduto}>
              <Image source={{ uri: product.image }} style={styles.imagemProduto} />
              <View style={styles.infoProduto}>
                <Text style={styles.titleProduto}>{product.title}</Text>
                <Text style={styles.precoProduto}>R$ {product.price.toFixed(2)}</Text>
              </View>
            </TouchableOpacity>
          </Link>
        ))}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    padding: 20,
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 16,
    color: '#666',
  },
  productsContainer: {
    padding: 10,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  cardProduto: {
    width: '48%',
    marginBottom: 15,
    borderRadius: 10,
    overflow: 'hidden',
    backgroundColor: '#f5f5f5',
  },
  imagemProduto: {
    width: '100%',
    height: 150,
  },
  infoProduto: {
    padding: 10,
  },
  titleProduto: {
    fontSize: 14,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  precoProduto: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#007AFF',
  },
  categoriesSection: {
    padding: 20,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 15,
  },
  categoriesContainer: {
    gap: 15,
  },
  categoryCard: {
    borderRadius: 10,
    overflow: 'hidden',
    backgroundColor: '#f5f5f5',
  },
  categoryImage: {
    width: '100%',
    height: 100,
  },
  categoryTitle: {
    padding: 10,
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
