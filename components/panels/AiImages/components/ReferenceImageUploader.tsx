import React from "react";
import { View, Button, TouchableOpacity, StyleSheet } from "react-native";
import { Icon, Text } from "react-native-paper";

const ReferenceImageUploader = () => {
  return (
    <View style={{ marginBottom: 16 }}>
      <Text
        variant="titleMedium"
        style={{ marginBottom: 8, fontSize: 25, paddingTop: 20 }}
      >
        Reference Image
      </Text>
      <View style={{ flex: 1, flexDirection: "row" }}>
        <View style={{ flex: 1 / 3, justifyContent: "center", alignItems: "center" }}>
          <Icon source="upload" size={70} color="gray" />
        </View>
        <View style={{ flex: 2 / 3 }}>
          <TouchableOpacity
            style={styles.button}
            // onPress={() => alert("Choose Image")}
          >
            <Text style={styles.buttonText}>Choose Image</Text>
          </TouchableOpacity>
          <Text style={{ fontSize: 13, color: "black", marginTop: 4, marginLeft: 15, marginRight: 15, textAlign: "center" }}>
            Match the content from your own image
          </Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: "#e9e9e9", // Màu nền nút
    borderColor: "black",
    paddingVertical: 10, // Khoảng cách trên/dưới của nút
    paddingHorizontal: 20, // Khoảng cách trái/phải của nút
    borderRadius: 8, // Bo góc cho nút
    justifyContent: "center",
    alignItems: "center",
    marginTop: 8,
    marginLeft: 10,
    marginRight: 10,
  },
  buttonText: {
    color: "black", // Màu chữ
    fontSize: 15,
    fontWeight: "bold",
  },
});

export default ReferenceImageUploader;
