import { View, Text, StyleSheet, FlatList, Image, TouchableOpacity } from 'react-native';
import { data } from '../../data';
import { Link } from 'expo-router';

export default function Categories() {
  return (
    <View style={styles.container}>
      <FlatList
        data={data.categories}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <Link href={`/categories/${item.id}`} asChild>
            <TouchableOpacity style={styles.categoryCard}>
              <Image source={{ uri: item.cover }} style={styles.categoryImage} />
              <Text style={styles.categoryTitle}>{item.title}</Text>
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
  listContainer: {
    padding: 10,
  },
  categoryCard: {
    marginBottom: 20,
    borderRadius: 10,
    overflow: 'hidden',
    backgroundColor: '#f5f5f5',
  },
  categoryImage: {
    width: '100%',
    height: 150,
  },
  categoryTitle: {
    padding: 15,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
}); 