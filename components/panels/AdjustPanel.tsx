import React, { useState } from 'react';
import { View, StyleSheet, TouchableOpacity, Text, Image } from 'react-native';
import SlideBar from '../reuseComponents/SlideBar';
import ColorPicker from '../reuseComponents/ColorPicker';
const AdjustPanel: React.FC = () => {
  const [selected, setSelected] = useState<'brightness' | 'hsl'>('brightness');
  const [brightness, setBrightness] = useState(50);
  const [shadows, setShadows] = useState(50);

  return (
    <View style={styles.container}>
      {selected === 'brightness' && (
        <View style={styles.brightnessContainer}>
          <SlideBar label="Highlights" minimumValue={0} maximumValue={100} initialValue={brightness} onValueChange={setBrightness} />
          <SlideBar label="Shadows" minimumValue={0} maximumValue={100} initialValue={shadows} onValueChange={setShadows} />
        </View>
      )}
      {selected === 'hsl' && (
        <View style={styles.hslContainer}>
          <ColorPicker/>
        </View>
      )}

      <View style={styles.toggleContainer}>
        <TouchableOpacity
          style={[styles.toggleButton, styles.leftButton, selected === 'brightness' && styles.selectedButton]}
          onPress={() => setSelected('brightness')}>
          <Image source={require('../../assets/images/brightness.png')} style={[styles.icon, selected === 'brightness' && styles.selectedIcon]} />
          <Text style={[styles.text, selected === 'brightness' && styles.selectedText]}>Brightness</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.toggleButton, styles.rightButton, selected === 'hsl' && styles.selectedButton]}
          onPress={() => setSelected('hsl')}>
          <Image source={require('../../assets/images/hsl.png')} style={[styles.icon, selected === 'hsl' && styles.selectedIcon]} />
          <Text style={[styles.text, selected === 'hsl' && styles.selectedText]}>HSL</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    bottom: 90,
    position: "absolute",
  },
  brightnessContainer: {
    backgroundColor: 'white',
    padding: 15,
    borderRadius: 10,
    marginBottom: 20,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 5,
  },
  hslContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  hslText: {
    fontSize: 16,
    color: '#333',
  },
  toggleContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    width: "100%",
    alignSelf: "center",
    backgroundColor: 'white',
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 5,
    overflow: "hidden", // Tránh bị thay đổi khi hover hoặc nhấn vào
  },  
  toggleButton: {
    width: "50%", // Đảm bảo hai nút có chiều rộng bằng nhau
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
  },  
  leftButton: {
    borderTopLeftRadius: 10,
    borderBottomLeftRadius: 10,
    borderRightWidth: 1,
    borderRightColor: '#D9D9D9',
  },
  rightButton: {
    borderTopRightRadius: 10,
    borderBottomRightRadius: 10,
  },
  selectedButton: {
    backgroundColor: '#D9D9D9',
  },
  icon: {
    width: 24,
    height: 24,
    tintColor: '#808080',
    marginRight: 8,
  },
  selectedIcon: {
    tintColor: 'black',
  },
  text: {
    color: '#808080',
  },
  selectedText: {
    color: 'black',
  },
});

export default AdjustPanel;
