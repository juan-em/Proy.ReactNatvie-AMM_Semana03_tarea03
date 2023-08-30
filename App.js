import { StyleSheet, Text, View, Image, ImageBackground } from 'react-native';
import { Col, Row, Grid } from 'react-native-easy-grid';

export default function App() {
  return (
    <ImageBackground
      source={{ uri: "https://www.solofondos.com/wp-content/uploads/2018/08/pexels-photo-2486168.jpeg" }}
      style={styles.backgroundImage}
    >
      <View style={styles.container}>
      <View style={styles.top}>
        <View style={styles.profileimage}>
          <Image 
            source={{ uri: 'https://i.pinimg.com/564x/03/d0/66/03d06604e352f8cd1918aadfed3f88f6.jpg' }} 
            style={{ width: '100%', height: '100%', borderRadius: 100 }} />
        </View>
        <Text style={styles.name}>J-E-M</Text>
      </View>
      <View style={styles.bottom}>
        <Grid>
          <Col style={{ marginRight: 5 }}>
            <Image 
              source={{ uri: 'https://www.laguiadelvaron.com/wp-content/uploads/2019/03/336d42530f2c1bbf42137b9115609ab5.jpg' }} 
              style={styles.images} />
          </Col>
          <Col style={{ marginLeft: 2.5 }}>
            <Row style={{ marginBottom: 5 }}>
              <Image 
                source={{ uri: 'https://tipsparatuviaje.com/wp-content/uploads/2019/02/mujer-en-paris-364x205.jpg' }} 
                style={styles.images} />
            </Row>
            <Row style={{ marginBottom: 5 }}>
              <Image 
                source={{ uri: 'https://res.cloudinary.com/worldpackers/image/upload/c_fill,f_auto,q_auto,w_1024/v1/guides/article_cover/i0yglttqqmdoq0ditcc1' }} 
                style={styles.images} />
            </Row>
            <Row>
              <Image 
              source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7dmmKoBVM-L5QVRHM3NWUZck2YI-QqgWqwQ&usqp=CAU' }} 
              style={styles.images} />
            </Row>
          </Col>
        </Grid>
      </View>
    </View>

    </ImageBackground>
    
  );
}

const styles = StyleSheet.create({
  
  container: {
    flex: 1,
  },
  backgroundImage: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
  },
  top: {
    height: '45%',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'transparent' 
  },
  bottom: {
    height: '55%',
    backgroundColor: 'transparent', 
    padding: 5
  },
  profileimage: {
    width: 140,
    height: 140,
    borderRadius: 100,
    borderWidth: 4,
    borderColor: '#fff',
    backgroundColor: '#eee',
    alignItems: 'center',
    justifyContent: 'center'
  },
  name: {
    marginTop: 10,
    fontSize: 20,
    fontWeight: 'bold',
    color: '#FFFFFF'
  },
  
  images: {
    width: '100%', 
    height: '100%', 
    resizeMode: 'cover' 
  }
});
