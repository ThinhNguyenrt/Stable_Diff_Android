import React, { useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";
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
    <View style={{ padding: 20, alignItems: "center" }}>
      {/* Vòng tròn chọn màu */}
      <View style={{ flexDirection: "row", marginBottom: 10 }}>
        {colors.map((color, index) => (
          <TouchableOpacity
            key={index}
            style={{
              width: 30,
              height: 30,
              borderRadius: 15,
              backgroundColor: color,
              margin: 5,
              borderWidth: selectedColor === color ? 2 : 0,
              borderColor: "gray",
            }}
            onPress={() => {
              setSelectedColor(color);
              setHSL(chroma(color).hsl());
            }}
          />
        ))}
      </View>

      {/* Hue Slider */}
      <Text>Hue</Text>
      <ColorSlider
        value={hsl[0]}
        minValue={0}
        maxValue={360}
        onChange={(val) => updateColor(val, hsl[1], hsl[2])}
        colorGradient={["#ff0000", "#ff7f00", "#ffff00", "#00ff00", "#0000ff", "#4b0082", "#9400d3"]}
      />

      {/* Saturation Slider */}
      <Text>Saturation</Text>
      <ColorSlider
        value={hsl[1] * 100}
        minValue={0}
        maxValue={100}
        onChange={(val) => updateColor(hsl[0], val / 100, hsl[2])}
        colorGradient={["#bbb", selectedColor]}
      />

      {/* Lightness Slider */}
      <Text>Lightness</Text>
      <ColorSlider
        value={hsl[2] * 100}
        minValue={0}
        maxValue={100}
        onChange={(val) => updateColor(hsl[0], hsl[1], val / 100)}
        colorGradient={["black", selectedColor, "white"]}
      />

      {/* Hiển thị màu được chọn */}
      <View
        style={{
          width: 100,
          height: 100,
          borderRadius: 50,
          backgroundColor: selectedColor,
          marginTop: 20,
          borderWidth: 2,
          borderColor: "black",
        }}
      />
    </View>
  );
};

export default ColorPicker;
