import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";

const Card = ({ user }) => {
  return (
    <View style={[styles.cardContainer, styles.shadow]}>
      {/* User Image */}
      <Image source={{ uri: user.image }} style={styles.userImage} />
      {/* User Name */}
      <Text style={styles.userName}>{user.name}</Text>
      {/* User Bio */}
      <Text style={styles.userBio}>{user.bio}</Text>
      {/* Additional User Info */}
      <View style={styles.infoContainer}>
        {user.email ? (
          <Text style={styles.infoText}>Email: {user.email}</Text>
        ) : null}
        {user.location ? (
          <Text style={styles.infoText}>Location: {user.location}</Text>
        ) : null}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    width: "90%",
    padding: 15,
    borderRadius: 10,
    backgroundColor: "#060278",
    marginVertical: 10,
  },
  shadow: {
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 6,
    elevation: 10,
  },
  userImage: {
    width: 80,
    height: 80,
    borderRadius: 40,
    alignSelf: "center",
    marginBottom: 10,
  },
  userName: {
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 5,
    color: "white",
  },
  userBio: {
    fontSize: 14,
    textAlign: "center",
    marginBottom: 10,
    color: "white",
  },
  infoContainer: {
    marginTop: 5,
  },
  infoText: {
    fontSize: 12,
    textAlign: "center",
    marginBottom: 3,
    color: "white",
  },
});

export default Card;
