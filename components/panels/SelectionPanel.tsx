import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native';
import SlideBar from '../reuseComponents/SlideBar';
import BrushPlus from '../../assets/images/brushPlus.jpg';
import BrushMinus from '../../assets/images/brushMinus.jpg';

const SelectionPanel = () => {
  const [selectedMode, setSelectedMode] = useState("plus"); // "plus" hoặc "minus"
  const [size, setSize] = useState(40); // Giá trị size

  return (
    <View style={styles.container}>
      {/* Mode Selection */}
      <View style={styles.modeRow}>
        <Text style={styles.label}>Mode</Text>
        <View style={styles.modeContainer}>
          {/* Brush Plus Button */}
          <TouchableOpacity
            style={[
              styles.modeButton,
              selectedMode === "plus" && styles.selectedButton,
            ]}
            onPress={() => setSelectedMode("plus")}
          >
            <Image source={BrushPlus} style={styles.icon} />
          </TouchableOpacity>

          {/* Brush Minus Button */}
          <TouchableOpacity
            style={[
              styles.modeButton,
              selectedMode === "minus" && styles.selectedButton,
            ]}
            onPress={() => setSelectedMode("minus")}
          >
            <Image source={BrushMinus} style={styles.icon} />
          </TouchableOpacity>
        </View>
      </View>

      {/* Luôn hiển thị Slider */}
      <View style={styles.sliderContainer}>
        <SlideBar
          label="Size"
          minimumValue={10}
          maximumValue={100}
          initialValue={size}
          fixedPoint={0}
          step={1}
          isPercent={false}
          onValueChange={(value) => setSize(value)}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    bottom: 90,
    backgroundColor: "white",
    padding: 16,
    borderRadius: 10,
    width: "85%",
    elevation: 5,
  },
  label: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 8,
  },
  modeRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 12,
  },
  modeContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#F7F7F7",
    padding: 4,
    borderRadius: 10,
    width: "80%",
  },
  modeButton: {
    width: "50%",
    aspectRatio: 2,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 6,
  },
  selectedButton: {
    backgroundColor: "white",
  },
  icon: {
    width: 24,
    height: 24,
  },
  sliderContainer: {
    alignItems: "center",
  },
});

export default SelectionPanel;
