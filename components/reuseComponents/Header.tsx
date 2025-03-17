import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Platform, Image, StyleSheet } from 'react-native';
import { MaterialIcons, AntDesign, Feather } from '@expo/vector-icons';
import Logo from '../../assets/images/logo.png';
import Avatar from '../../assets/images/avatar.jpg';

const Header = () => {
  const isWeb = Platform.OS === 'web';
  const [selectedMode, setSelectedMode] = useState('Indoor AI');
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isLogoMenuOpen, setIsLogoMenuOpen] = useState(false);

  const toggleDropdown = () => setIsDropdownOpen(!isDropdownOpen);
  const toggleLogoMenu = () => setIsLogoMenuOpen(!isLogoMenuOpen);

  const handleSelectMode = (mode: string) => { 
    setSelectedMode(mode);
    setIsDropdownOpen(false);
  };  

  return (
    <View style={styles.container}>
      {/* Logo with Menu */}
      <TouchableOpacity onPress={toggleLogoMenu}>
        <Image source={Logo} style={styles.logo} />
      </TouchableOpacity>
      {isLogoMenuOpen && (
        <View style={styles.logoMenu}>
          <TouchableOpacity style={styles.menuItem}>
            <AntDesign name="left" size={20} color="black" />
            <Text style={styles.menuText}>Back</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.menuItem}>
            <Feather name="download" size={20} color="black" />
            <Text style={styles.menuText}>Export</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.menuItem}>
            <Feather name="share-2" size={20} color="black" />
            <Text style={styles.menuText}>Share</Text>
          </TouchableOpacity>
        </View>
      )}

      {/* Project Name (Web Only) */}
      {isWeb && <Text style={styles.projectName}>Project name</Text>}

      {/* Dropdown */}
      <View style={styles.dropdownContainer}>
        <TouchableOpacity style={styles.dropdownButton} onPress={toggleDropdown}>
          <Text style={styles.dropdownText}>{selectedMode}</Text>
          <MaterialIcons name={isDropdownOpen ? 'arrow-drop-up' : 'arrow-drop-down'} size={24} color="black" />
        </TouchableOpacity>
        {isDropdownOpen && (
          <View style={styles.dropdownList}>
            {['Indoor AI', 'Outdoor AI'].map((mode) => (
              <TouchableOpacity
                key={mode}
                onPress={() => handleSelectMode(mode)}
                style={[styles.dropdownItem, selectedMode === mode && styles.selectedItem]}
                disabled={selectedMode === mode}
              >
                <Text style={[styles.itemText, selectedMode === mode && styles.disabledText]}>{mode}</Text>
              </TouchableOpacity>
            ))}
          </View>
        )}
      </View>

      {/* Avatar */}
      <Image source={Avatar} style={styles.avatar} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    padding: 10,
    backgroundColor: 'white',
    borderBottomWidth: 1,
    borderColor: '#ddd',
    elevation: 3,
    paddingTop:15
  },
  logo: {
    width: 40,
    height: 40,
    borderRadius: 20,
  },
  logoMenu: {
    position: 'absolute',
    top: 50,
    left: 10,
    backgroundColor: 'white',
    borderRadius: 5,
    padding: 5,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 5,
    zIndex: 9999,
  },
  menuItem: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
  },
  menuText: {
    marginLeft: 10,
    fontSize: 16,
  },
  projectName: {
    fontSize: 16,
    fontWeight: 'bold',
    marginLeft: 10,
  },
  dropdownContainer: {
    flex: 1,
    alignItems: 'center',
  },
  dropdownButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: 150,
    padding: 10,
    backgroundColor: 'white',
    borderRadius: 5,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
  },
  dropdownList: {
    position: 'absolute',
    top: '100%',
    left: '50%',
    transform: [{ translateX: -75 }],
    width: 150,
    backgroundColor: 'white',
    borderRadius: 5,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 5,
    zIndex: 9999,
  },
  dropdownItem: {
    padding: 10,
    backgroundColor: 'white',
  },
  dropdownText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'black',
  },
  itemText: {
    fontSize: 16,
    color: 'black',
  },
  selectedItem: {
    backgroundColor: '#f5f5f5',
  },
  disabledText: {
    color: 'gray',
  },
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
  },
});

export default Header;