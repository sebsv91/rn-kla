import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  // Desktop styles
  desktopContainer: {
    flex: 1,
    backgroundColor: "#1E1E1E",
    alignItems: "center",
    justifyContent: "center",
    padding: 0,
    margin: 0,
    width: "100vw",
  },

  desktopBackgroundImage: {
    width: 654,
    height: 900,
    position: "absolute",
    zIndex: 2,
    left: 0,
  },

  desktopContentContainer: {
    display: "flex",
    flexDirection: "row",
  },

  desktopImage: {
    width: 330,
    height: 80,
  },

  desktopTextContainer: {
    marginTop: 50,
    zIndex: 1,
  },

  desktopHeader: {
    color: "#F2F2F2",
    fontSize: 28,
    fontWeight: 800,
    letterSpacing: 2.5,
    paddingLeft: 30,
    paddingBottom: 15,
  },

  desktopText: {
    color: "rgba(255, 255, 255, 0.6)",
    fontSize: 22,
    fontWeight: 600,
    paddingLeft: 30,
  },

  desktopToolContainer: {
    borderRightWidth: 1,
    borderRightColor: "#fff",
  },

  desktopToolImage: {
    width: 256,
    height: 220,
    marginRight: 30,
  },

  // tablet styles

  text: {
    fontFamily: "DrukTextWide-Bold",
  },

  tabletContainer: {
    flex: 1,
    backgroundColor: "#1E1E1E",
    alignItems: "center",
    justifyContent: "center",
    padding: 0,
    margin: 0,
    width: "100vw",
  },

  tabletBackgroundImage: {
    width: "100%",
    height: "100%",
    position: "absolute",
    zIndex: 2,
    justifyContent: "center",
  },

  tabletContentContainer: {},

  tabletElementsContainer: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    alignItems: "center",
  },

  tabletImage: {
    width: 330,
    height: 80,
  },

  tabletHeader: {
    color: "#F2F2F2",
    fontSize: 28,
    fontWeight: 800,
    letterSpacing: 2.5,
    paddingLeft: 30,
    paddingBottom: 15,
  },

  tabletText: {
    color: "rgba(255, 255, 255, 0.6)",
    fontSize: 22,
    fontWeight: 600,
    paddingLeft: 30,
  },

  tabletLogoContainer: {
    alignItems: "center",
    marginBottom: 50,
  },

  tabletToolImage: {
    width: 189,
    height: 163,
    marginRight: 30,
    zIndex: 1,
  },

  tabletTextContainer: {
    borderLeftWidth: 1,
    borderColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },

  // mobile styles

  text: {
    fontFamily: "DrukTextWide-Bold",
  },

  mobileContainer: {
    flex: 1,
    backgroundColor: "#1E1E1E",
    alignItems: "center",
    justifyContent: "center",
    padding: 0,
    margin: 0,
    width: "100vw",
  },

  mobileBackgroundImage: {
    width: "100%",
    height: "100%",
    position: "absolute",
    zIndex: 2,
    justifyContent: "center",
  },

  mobileElementsContainer: {
    display: "flex",
    flexDirection: "column",
    gap: 40,
    justifyContent: "center",
    alignItems: "center",
  },

  mobileImage: {
    width: 400,
    height: 180,
  },

  mobileHeader: {
    color: "#F2F2F2",
    fontSize: 28,
    fontWeight: 800,
    letterSpacing: 2.5,
    paddingLeft: 30,
    paddingBottom: 15,
  },

  mobileText: {
    color: "rgba(255, 255, 255, 0.6)",
    fontSize: 22,
    fontWeight: 600,
    paddingLeft: 30,
    textAlign: "center",
  },

  mobileLogoContainer: {
    alignItems: "center",
    marginBottom: 50,
  },

  mobileToolContainer: {
    alignItems: "center",
    width: "100%",
    borderBottomWidth: 1,
    borderColor: "#fff",
    padding: 30,
  },

  mobileToolImage: {
    width: 189,
    height: 163,
    marginRight: 30,
    margin: 20,
    zIndex: 1,
  },

  mobileTextContainer: {
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
  },
});
