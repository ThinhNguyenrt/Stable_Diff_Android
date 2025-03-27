import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import chroma from "chroma-js";
import ColorSlider from "../reuseComponents/ColorSlider";

const colors = ["#FF4136", "#FF851B", "#FFDC00", "#2ECC40", "#7FDBFF", "#0074D9", "#B10DC9", "#F012BE"];

const ColorPicker = () => {
  const [selectedColor, setSelectedColor] = useState(colors[0]);
  const [hsl, setHSL] = useState(chroma(selectedColor).hsl());

  const updateColor = (h: number, s: number, l: number) => {
    const newColor = chroma.hsl(h, s, l).hex();
    setHSL([h, s, l]);
    setSelectedColor(newColor);
  };  

  return (
    <View style={styles.container}>
      {/* Color selection circles */}
      <View style={styles.colorCirclesContainer}>
        {colors.map((color, index) => (
          <TouchableOpacity
            key={index}
            style={[
              styles.colorCircle,
              { backgroundColor: color },
              selectedColor === color && styles.selectedColorCircle
            ]}
            onPress={() => {
              setSelectedColor(color);
              setHSL(chroma(color).hsl());
            }}
          />
        ))}
      </View>

      {/* Hue Slider */}
      <View style={styles.sliderContainer}>
        <Text style={styles.sliderLabel}>Hue</Text>
        <View style={styles.sliderRow}>
          <ColorSlider
            value={hsl[0]}
            minValue={0}
            maxValue={360}
            onChange={(val) => updateColor(val, hsl[1], hsl[2])}
            colorGradient={["#ff0000", "#ff7f00", "#ffff00", "#00ff00", "#0000ff", "#4b0082", "#9400d3"]}
          />
          <View style={styles.valueContainer}>
            <Text style={styles.valueText}>{Math.round(hsl[0])}</Text>
          </View>
        </View>
      </View>

      {/* Saturation Slider */}
      <View style={styles.sliderContainer}>
        <Text style={styles.sliderLabel}>Saturation</Text>
        <View style={styles.sliderRow}>
          <ColorSlider
            value={hsl[1] * 100}
            minValue={0}
            maxValue={100}
            onChange={(val) => updateColor(hsl[0], val / 100, hsl[2])}
            colorGradient={["#bbb", selectedColor]}
          />
          <View style={styles.valueContainer}>
            <Text style={styles.valueText}>+{Math.round(hsl[1] * 100)}</Text>
          </View>
        </View>
      </View>

      {/* Lightness Slider */}
      <View style={styles.sliderContainer}>
        <Text style={styles.sliderLabel}>Lightness</Text>
        <View style={styles.sliderRow}>
          <ColorSlider
            value={hsl[2] * 100}
            minValue={0}
            maxValue={100}
            onChange={(val) => updateColor(hsl[0], hsl[1], val / 100)}
            colorGradient={["black", selectedColor, "white"]}
          />
          <View style={styles.valueContainer}>
            <Text style={styles.valueText}>{Math.round(hsl[2] * 100)}</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
    alignItems: "center",
    width: "100%",
    borderWidth: 1,
    borderColor: "#e0e0e0",
    borderRadius: 10,
    backgroundColor: "white"
  },
  colorCirclesContainer: {
    flexDirection: "row",
    marginBottom: 20,
    justifyContent: "center"
  },
  colorCircle: {
    width: 30,
    height: 30,
    borderRadius: 15,
    margin: 5,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
    elevation: 3
  },
  selectedColorCircle: {
    borderWidth: 2,
    borderColor: "#555"
  },
  sliderContainer: {
    width: "100%",
    marginBottom: 15
  },
  sliderLabel: {
    fontSize: 16,
    fontWeight: "500",
    marginBottom: 5
  },
  sliderRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between"
  },
  valueContainer: {
    backgroundColor: "#f5f5f5",
    borderRadius: 15,
    paddingHorizontal: 10,
    paddingVertical: 5,
    marginLeft: 10,
    minWidth: 40,
    alignItems: "center"
  },
  valueText: {
    fontSize: 14,
    fontWeight: "500"
  }
});

export default ColorPicker;
