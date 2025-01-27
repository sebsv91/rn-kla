import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, useWindowDimensions } from 'react-native';

export default function App() {

  // get device dimension
  const { width } = useWindowDimensions();

  // device dimension
  const isMobile = width < 600; 
  const isTablet = width >= 600 && width < 1024; 
  const isDesktop = width >= 1024; 


  return (
   /*
    <View style={styles.desktopContainer}>

      <Image source={require('./assets/king_logo.png')} style={styles.desktopBackgroundImage}></Image>

      <View style={styles.desktopContentContainer}>

        <View style={styles.desktopToolContainer}>
            <Image source={require('./assets/toolImage.png')} style={styles.desktopToolImage}></Image>
        </View>

        <View>
        
          <Image source={require('./assets/klaLogo.png')} style={styles.desktopImage}></Image>

            <View style={styles.desktopTextContainer}>

              <Text style={styles.desktopHeader}>EN MANTENIMIENTO{"\n"}</Text>

              <Text style={styles.desktopText}>Estamos mejorando la app.{"\n"}¡Volveremos pronto!</Text>

            </View>

        </View>


      </View>

      <StatusBar style="auto" />

    </View>
    */

    // tablet estructure
    
    <View style={styles.tabletContainer}>

    <Image source={require('./assets/king_logo.png')} style={styles.tabletBackgroundImage}></Image>

    <View style={styles.tabletContentContainer}>

      <View style={styles.tabletLogoContainer}>
          <Image source={require('./assets/klaLogo.png')} style={styles.tabletImage}></Image>
      </View>

      <View>


          <View style={styles.tabletElementsContainer}>

            <Image source={require('./assets/toolImage.png')} style={styles.tabletToolImage}></Image>

            <View style={styles.tabletTextContainer}>
              <Text style={styles.tabletHeader}>EN MANTENIMIENTO{"\n"}</Text>
              <Text style={styles.tabletText}>Estamos mejorando la app.{"\n"}¡Volveremos pronto!</Text>
            </View>

          </View>

      </View>


    </View>

    <StatusBar style="auto" />

  </View>











  );
}


const styles = StyleSheet.create({

  // Desktop styles
  desktopContainer: {
    flex: 1,
    backgroundColor: '#1E1E1E',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 0,
    margin: 0
  },


  desktopBackgroundImage: {
    width: 654,
    height: 900,
    position: 'absolute',
    left: 0,
  },

  desktopContentContainer: {
    display: 'flex',
    flexDirection: 'row',
  },

  desktopImage: {
    width: 330,
    height: 80,
  },

  desktopTextContainer: {
    marginTop: 50,
  },

  desktopHeader: {
    color: '#F2F2F2',
    fontSize: 28,
    fontWeight: 500,
    letterSpacing: 2.5,
    paddingLeft: 30,
    paddingBottom: 15,

  },

  desktopText: {
    color: 'rgba(255, 255, 255, 0.6)',
    fontSize: 22,
    fontWeight: 600,
    paddingLeft: 30,
  },

  desktopToolContainer: {
    borderRightWidth: 1,
    borderRightColor: '#fff',
  },

  desktopToolImage: {
    width: 256,
    height: 220,
    marginRight: 30,
  },


  // tablet styles

  text: {
    fontFamily: 'DrukTextWide-Bold',
  },

  tabletContainer: {
    flex: 1,
    backgroundColor: '#1E1E1E',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 0,
    margin: 0,
  },

  tabletBackgroundImage: {
    width: 654,
    height: 900,
    position: 'absolute',
    
  },

  tabletContentContainer: {
  },

  tabletElementsContainer: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignItems: 'center',
  },

  tabletImage: {
    width: 330,
    height: 80,
  },


  tabletHeader: {
    color: '#F2F2F2',
    fontSize: 28,
    fontWeight: 500,
    letterSpacing: 2.5,
    paddingLeft: 30,
    paddingBottom: 15,

  },

  tabletText: {
    color: 'rgba(255, 255, 255, 0.6)',
    fontSize: 22,
    fontWeight: 600,
    paddingLeft: 30,
  },

  tabletLogoContainer: {
      alignItems: 'center',
      marginBottom: 50,
  },

  tabletToolImage: {
    width: 189,
    height: 163,
    marginRight: 30,
  },


  tabletTextContainer: {
    borderLeftWidth: 1,
    borderColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',

  },


  

  // mobile styles
  mobileContainer: {
    backgroundColor: 'purple',
    flexDirection: 'column-reverse'
  },


});
