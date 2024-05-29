import { StyleSheet, View, Text, ScrollView, Image, TouchableOpacity } from 'react-native';
import ParallaxScrollView from '../../components/ParallaxScrollView';  // Certifique-se que este caminho está correto
import { ThemedText } from '../../components/ThemedText';  // Certifique-se que este caminho está correto

export default function MainScreen() {
  return (
    <ScrollView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.headerText}>Instaparaguai</Text>
      </View>

      {/* Feed de posts */}
      <View style={styles.postContainer}>
        {[...Array(6)].map((_, index) => (
          <View key={index} style={styles.post}>
            <Image
              source={require('../../assets/imagemPost/post1.jpg')}
              style={styles.postImage}
            />
            <View style={styles.postOverlay}>
              <TouchableOpacity style={styles.likeButton}>
                <Text style={styles.likeButtonText}>Like</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.commentButton}>
                <Text style={styles.commentButtonText}>Comment</Text>
              </TouchableOpacity>
            </View>
          </View>
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
    height: 60,
    backgroundColor: '#f3f6fa',
    justifyContent: 'center',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  headerText: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  postContainer: {
    padding: 8,
  },
  post: {
    marginBottom: 16,
  },
  postImage: {
    width: '100%',
    height: 300,
    resizeMode: 'cover',
    borderRadius: 8,
  },
  postOverlay: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 8,
  },
  likeButton: {
    backgroundColor: '#fd7e14',
    borderRadius: 8,
    padding: 8,
  },
  likeButtonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  commentButton: {
    backgroundColor: '#007bff',
    borderRadius: 8,
    padding: 8,
  },
  commentButtonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});
