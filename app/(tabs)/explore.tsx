import { StyleSheet, View, Text, ScrollView, Image, TouchableOpacity } from 'react-native';
import ParallaxScrollView from '../../components/ParallaxScrollView';  // Certifique-se que este caminho está correto
import { ThemedText } from '../../components/ThemedText';  // Certifique-se que este caminho está correto

export default function UserProfileScreen() {
  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: 'black', dark: '#000' }}
      headerImage={
        <View style={styles.headerPlaceholder}>
          <Text style={styles.headerText}>Perfil</Text>
        </View>
      }>
      <View style={styles.profileContainer}>
        <View style={styles.profilePicturePlaceholder}>
          <Text style={styles.profilePictureText}>SS</Text>
        </View>
        <Text style={styles.profilePictureText}>Saul Schandeski</Text>

        <View style={styles.statsContainer}>
          <View style={styles.statItem}>
            <Text style={styles.statNumber}>200</Text>
            <Text style={styles.statLabel}>Postagens</Text>
          </View>
          <View style={styles.statItem}>
            <Text style={styles.statNumber}>10k</Text>
            <Text style={styles.statLabel}>Seguidores</Text>
          </View>
          <View style={styles.statItem}>
            <Text style={styles.statNumber}>500</Text>
            <Text style={styles.statLabel}>Seguindo</Text>
          </View>
        </View>
        </View>
        <Text style={styles.userBio}>
          Cursando Engenharia de Software, FAG
          {'\n'} 21y.
          {'\n'}🌍 Campo Bonito, PR
        </Text>
    
        <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.editProfileButton}>
          <Text style={styles.editProfileText}> Editar Perfil</Text>
        </TouchableOpacity>
        </View>

        <View style={styles.rowContainer}>
        {/* Contêineres superiores */}
        <View style={styles.row}>
          <Image source={require('../../assets/imagemPost/post1.jpg')} style={styles.postImage} />
          <Image source={require('../../assets/imagemPost/post2.jpg')} style={styles.postImage} />
          <Image source={require('../../assets/imagemPost/post3.jpg')} style={styles.postImage} />
        </View>
        
        {/* Contêineres inferiores */}
        <View style={styles.row}>
          <Image source={require('../../assets/imagemPost/post4.jpg')} style={styles.postImage} />
          <Image source={require('../../assets/imagemPost/post5.jpg')} style={styles.postImage} />
          <Image source={require('../../assets/imagemPost/post6.jpg')} style={styles.postImage} />
        </View>
      </View>
      
    </ParallaxScrollView>
  );
}
const styles = StyleSheet.create({
  headerPlaceholder: {
    height: 60,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'black',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 8,
  },
  headerText: {
    fontSize: 20,
    fontWeight: 'bold',
    color:"white"
  },
  rowContainer: {
    padding: 8,
  },
  profileContainer: {
    alignItems: 'center',
    padding: 16,
    gap: 8,
  },
  column: {
    flex: 1,
    width: '25%',
  },
  profilePicturePlaceholder: {
    height: 100,
    width: 100,
    borderRadius: 50,
    backgroundColor: '#ccc',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 16,
    borderWidth: 2,
    borderColor: 'red',
  },
  profilePictureText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
    
  },
  statsContainer: {
    marginTop: -40,
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
    marginBottom: 16,
  },
  statItem: {
    alignItems: 'center',
  },
  statNumber: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'black',
  },
  statLabel: {
    fontSize: 14,
    color: 'black',
  },
  userBio: {
    marginTop: -25,
    textAlign: 'center',
    color: 'black',
    marginVertical: 8,
  },
  editProfileButton: {
    borderWidth: 1,
    borderColor: 'black',
    borderRadius: 5,
    paddingHorizontal: 8, // Reduzindo o padding horizontal
    paddingVertical: 4, // Reduzindo o padding vertical
    marginVertical: 10,
    width: '28%',
    alignItems:'center',
    alignContent: 'center',
  },
  editProfileText: {
    fontSize: 14,
    color: 'black',
  },
  
  postsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 8,
  },
  postsGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  postPlaceholder: {
    width: '32%',
    height: 120,
    backgroundColor: 'black',
    marginBottom: 8,
  },
  buttonContainer: {
    alignItems: 'center', // Centraliza o botão horizontalmente
  },
  postImage: {
    width: '30%',
    height: 120,
    borderWidth: 1,
    borderColor: 'black',
    borderRadius: 5,
    aspectRatio: 1, // Mantém a altura igual à largura
  },
});
