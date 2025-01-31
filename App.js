import { StatusBar } from "expo-status-bar";
import { Text, View, Image, useWindowDimensions } from "react-native";
import { styles } from "./Styles";

export default function App() {
  const { width } = useWindowDimensions();

  const BREAKPOINTS = {
    MOBILE: 480,
    TABLET: 768,
    DESKTOP: 1024,
  };

  const isMobile = width < BREAKPOINTS.TABLET;
  const isTablet = width >= BREAKPOINTS.TABLET && width < BREAKPOINTS.DESKTOP;
  const isDesktop = width >= BREAKPOINTS.DESKTOP;

  return (
    <View style={styles.container}>
      <Image
        source={require("./assets/king_logo.png")}
        style={
          isDesktop
            ? styles.desktopBackgroundImage
            : isTablet
            ? styles.tabletBackgroundImage
            : styles.mobileBackgroundImage
        }
      />

      {isDesktop ? (
        // Layout Desktop
        <View style={styles.desktopContainer}>
          <View style={styles.desktopContentContainer}>
            <View style={styles.desktopToolContainer}>
              <Image
                source={require("./assets/toolImage.png")}
                style={styles.desktopToolImage}
              />
            </View>

            <View>
              <Image
                source={require("./assets/klaLogo.png")}
                style={styles.desktopImage}
              />
              <View style={styles.desktopTextContainer}>
                <Text style={styles.desktopHeader}>EN MANTENIMIENTO{"\n"}</Text>
                <Text style={styles.desktopText}>
                  Estamos mejorando la app.{"\n"}¡Volveremos pronto!
                </Text>
              </View>
            </View>
          </View>
        </View>
      ) : isTablet ? (
        // Layout Tablet (o móvil si width < 768)
        <View style={styles.tabletContainer}>
          <View style={styles.tabletContentContainer}>
            <View style={styles.tabletLogoContainer}>
              <Image
                source={require("./assets/klaLogo.png")}
                style={styles.tabletImage}
              />
            </View>

            <View>
              <View style={styles.tabletElementsContainer}>
                <Image
                  source={require("./assets/toolImage.png")}
                  style={styles.tabletToolImage}
                />
                <View style={styles.tabletTextContainer}>
                  <Text style={styles.tabletHeader}>
                    EN MANTENIMIENTO{"\n"}
                  </Text>
                  <Text style={styles.tabletText}>
                    Estamos mejorando la app.{"\n"}¡Volveremos pronto!
                  </Text>
                </View>
              </View>
            </View>
          </View>
        </View>
      ) : (
        // Layout movil (o móvil si width < 768)
        <View style={styles.mobileContainer}>
          <View style={styles.mobileContentContainer}>
            <View style={styles.mobileLogoContainer}>
              <Image
                source={require("./assets/klaLogo.png")}
                style={styles.mobileImage}
              />
            </View>

            <View>
              <View style={styles.mobileElementsContainer}>
                <View style={styles.mobileToolContainer}>
                  <Image
                    source={require("./assets/toolImage.png")}
                    style={styles.mobileToolImage}
                  />
                </View>
                <View style={styles.mobileTextContainer}>
                  <Text style={styles.mobileHeader}>
                    EN MANTENIMIENTO{"\n"}
                  </Text>
                  <Text style={styles.mobileText}>
                    Estamos mejorando la app.{"\n"}¡Volveremos pronto!
                  </Text>
                </View>
              </View>
            </View>
          </View>
        </View>
      )}
      <StatusBar style="auto" />
    </View>
  );
}
