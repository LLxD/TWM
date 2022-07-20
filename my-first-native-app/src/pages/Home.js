import React from "react"
import { StatusBar } from "expo-status-bar"
import { Button, StyleSheet, Text, View } from "react-native"
const Home = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>
        Testing fast refresh!
        <br /> Now with navigation!
      </Text>
      <Button
        onPress={() => navigation.navigate("Profile")}
        title="Check user profile"
      ></Button>
      <StatusBar style="auto" />
    </View>
  )
}

export default Home

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#111",
    alignItems: "center",
    justifyContent: "center"
  },
  text: {
    color: "#fff",
    margin: 20,
    fontSize: 20,
    fontFamily: "Ubuntu"
  }
})
