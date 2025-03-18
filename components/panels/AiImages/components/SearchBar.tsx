import React, { useState } from "react";
import { TextInput, View, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";

const SearchBar = () => {
  const [searchText, setSearchText] = useState("");

  return (
    <View style={styles.container}>
      <Ionicons name="search" size={20} color="gray" style={styles.icon} />
      <TextInput
        style={styles.input}
        placeholder="Search"
        value={searchText}
        onChangeText={setSearchText}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#f0f0f0",
    borderRadius: 10,
    paddingHorizontal: 10,
    height: 50,
  },
  icon: {
    marginRight: 8,
    color: "black",
  },
  input: {
    flex: 1,
    fontSize: 16,
  },
});

export default SearchBar;

