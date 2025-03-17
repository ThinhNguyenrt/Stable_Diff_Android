import React from "react";
import { View } from "react-native";
import { Button, Text } from "react-native-paper";

const ReferenceImageUploader = () => {
  return (
    <View style={{ alignItems: "center", marginBottom: 16 }}>
      <Text variant="titleMedium">Reference Image</Text>
      <Button mode="outlined" style={{ marginTop: 8 }}>
        Choose Image
      </Button>
      <Text style={{ fontSize: 12, color: "gray", marginTop: 4 }}>
        Match the content from your own image
      </Text>
    </View>
  );
};

export default ReferenceImageUploader;