import React from "react";
import { View, PanResponder } from "react-native";

interface ColorSlideProps {
  value: number;
  minValue?: number;
  maxValue?: number;
  onChange: (value: number) => void;
  colorGradient: string[]; // Mảng màu gradient
}

const ColorSlider: React.FC<ColorSlideProps> = ({ value, minValue = 0, maxValue = 100, onChange, colorGradient }) => {
  const barWidth = 250;

  const panResponder = PanResponder.create({
    onStartShouldSetPanResponder: () => true,
    onPanResponderMove: (evt, gestureState) => {
      let newValue = Math.min(Math.max(minValue, (gestureState.dx / barWidth) * (maxValue - minValue)), maxValue);
      onChange(newValue);
    },
  });

  return (
    <View
      style={{
        width: barWidth,
        height: 20,
        borderRadius: 10,
        backgroundColor: "gray",
        flexDirection: "row",
        overflow: "hidden",
      }}
      {...panResponder.panHandlers}
    >
      {colorGradient.map((color, index) => (
        <View key={index} style={{ flex: 1, backgroundColor: color }} />
      ))}
    </View>
  );
};

export default ColorSlider;
