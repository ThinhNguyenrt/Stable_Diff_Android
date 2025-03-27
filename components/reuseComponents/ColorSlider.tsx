import React, { useState, useEffect } from "react";
import { View, PanResponder, StyleSheet } from "react-native";
import { LinearGradient } from "expo-linear-gradient"

interface ColorSlideProps {
  value: number;
  minValue?: number;
  maxValue?: number;
  onChange: (value: number) => void;
  colorGradient: string[];
}

const ColorSlider: React.FC<ColorSlideProps> = ({ value, minValue = 0, maxValue = 100, onChange, colorGradient }) => {
  const [position, setPosition] = useState(0);
  const barWidth = 250;
  
  // Calculate thumb position based on value
  useEffect(() => {
    const calculatedPosition = ((value - minValue) / (maxValue - minValue)) * barWidth;
    setPosition(calculatedPosition);
  }, [value, minValue, maxValue, barWidth]);

  const panResponder = PanResponder.create({
    onStartShouldSetPanResponder: () => true,
    onPanResponderMove: (evt, gestureState) => {
      const newPosition = Math.min(Math.max(0, position + gestureState.dx), barWidth);
      const newValue = minValue + (newPosition / barWidth) * (maxValue - minValue);
      setPosition(newPosition);
      onChange(newValue);
    },
    onPanResponderGrant: () => {},
    onPanResponderRelease: () => {},
  });

  return (
    <View style={styles.container}>
      <View style={styles.track}>
        <LinearGradient
          colors={colorGradient}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 0 }}
          style={styles.gradient}
        />
      </View>
      <View
        style={[styles.thumb, { left: position }]}
        {...panResponder.panHandlers}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 270,
    height: 20,
    justifyContent: "center",
    position: "relative",
  },
  track: {
    height: 20,
    borderRadius: 10,
    flexDirection: "row",
    overflow: "hidden",
  },
  gradient: {
    width: "100%",
    height: "100%",
  },
  thumb: {
    width: 20,
    height: 20,
    borderRadius: 10,
    backgroundColor: "white",
    position: "absolute",
    top: 0,
    borderWidth: 2,
    borderColor: "white",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 3,
    elevation: 3,
  },
});

export default ColorSlider;
