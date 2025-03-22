import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const segments = [
  { color: "#FF4848", label: "Wall" },
  { color: "#39C4FF", label: "Floor" },
  { color: "#F97800", label: "Table" },
  { color: "#30F000", label: "Chair" },
  { color: "#FEF400", label: "Lighting" },
];

const SegmentPanel = () => {
  return (
    <View style={styles.container}>
      {segments.map((item, index) => (
        <TouchableOpacity key={index} style={styles.row} activeOpacity={0.6}>
          <View style={[styles.colorCircle, { backgroundColor: item.color }]} />
          <Text style={styles.text}>{item.label}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    bottom: 90,
    width: "40%",
    backgroundColor: "white",
    padding: 10,
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 5,
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 5,
  },
  colorCircle: {
    width: 24,
    height: 24,
    borderRadius: 12,
    marginRight: 10,
  },
  text: {
    fontSize: 16,
    fontWeight: "bold",
    color: "black",
  },
});

export default SegmentPanel;
