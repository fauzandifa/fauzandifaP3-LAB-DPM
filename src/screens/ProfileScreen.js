import React, { useEffect, useState } from "react";
import { ScrollView, View, StyleSheet } from "react-native";
import Header from "../components/Header";
import Card from "../components/Card";

const ProfileScreen = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    console.log("Fetching user data...");
    // Simulasi API call dengan data pengguna yang berbeda
    setTimeout(() => {
      setUsers([
        {
          name: "Jane Smith",
          bio: "Tech Enthusiast and Software Engineer.",
          image: "https://randomuser.me/api/portraits/women/44.jpg",
          email: "jane.smith@example.com",
          location: "New York, USA",
        },
        {
          name: "John Doe",
          bio: "A passionate developer.",
          image: "https://randomuser.me/api/portraits/men/32.jpg",
          email: "john.doe@example.com",
          location: "Los Angeles, USA",
        },
        {
          name: "Emily Davis",
          bio: "UX Designer & Coffee Lover.",
          image: "https://randomuser.me/api/portraits/women/45.jpg",
          email: "emily.davis@example.com",
          location: "Chicago, USA",
        },
        {
          name: "Michael Brown",
          bio: "Entrepreneur & Innovator.",
          image: "https://randomuser.me/api/portraits/men/46.jpg",
          email: "michael.brown@example.com",
          location: "Houston, USA",
        },
        {
          name: "Sarah Wilson",
          bio: "Data Scientist exploring the world of big data.",
          image: "https://randomuser.me/api/portraits/women/47.jpg",
          email: "sarah.wilson@example.com",
          location: "Seattle, USA",
        },
        {
          name: "James Wilson",
          bio: "Full-stack Developer & Open Source Contributor.",
          image: "https://randomuser.me/api/portraits/men/48.jpg",
          email: "james.wilson@example.com",
          location: "San Francisco, USA",
        },
      ]);
    }, 2000);
  }, []);

  return (
    <View style={styles.container}>
      <Header title="Data Pengguna " />
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        {users.map((user, index) => (
          <Card key={index} user={user} />
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollContainer: {
    paddingTop: 20,
    alignItems: "center",
  },
});

export default ProfileScreen;
