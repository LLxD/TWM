import { StyleSheet, Text, View, Image } from "react-native"
import React from "react"

const Profile = () => {
  return (
    <View style={styles.container}>
      <Image source="https://i.pravatar.cc/300" style={styles.img} />
      <Text style={styles.text}>Random User</Text>
    </View>
  )
}

export default Profile

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#111",
    alignItems: "center",
    justifyContent: "center"
  },
  img: {
    height: 150,
    width: 150,
    borderRadius: 150
  },
  text: {
    color: "#fff",
    margin: 20,
    fontSize: 20,
    fontFamily: "Ubuntu"
  }
})
