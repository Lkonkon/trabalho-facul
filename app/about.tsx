import { View, Text, StyleSheet} from 'react-native';

export default function About() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.name}>Andrei da Silva Souza</Text>
        <Text style={styles.course}>Engenharia de Software</Text>
        <Text style={styles.semester}>7º Semestre</Text>
      </View>

      <View style={styles.bioContainer}>
        <Text style={styles.bioTitle}>Sobre Mim</Text>
        <Text style={styles.bioText}>
          Tenho 22 anos, sou de Toledo - PR e estou cursando Engenharia de Software na FAG.
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
    padding: 20,
  },
  header: {
    alignItems: 'center',
    margin: 30,
    borderRadius: 10,
    backgroundColor: '#f5f5f5',
    padding: 20,
    width: '100%',
  },
  profileImage: {
    width: 150,
    height: 150,
    borderRadius: 75,
    marginBottom: 15,
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  course: {
    fontSize: 18,
    color: '#666',
    marginBottom: 5,
  },
  semester: {
    fontSize: 16,
    color: '#666',
  },
  bioContainer: {
    backgroundColor: '#f5f5f5',
    padding: 20,
    borderRadius: 10,
  },
  bioTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  bioText: {
    fontSize: 16,
    lineHeight: 24,
    color: '#333',
  },
}); 