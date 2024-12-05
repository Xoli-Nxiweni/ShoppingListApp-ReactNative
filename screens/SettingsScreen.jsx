// import React, { useState } from 'react';
// import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Switch } from 'react-native';
// import { 
//   Bell, 
//   Moon, 
//   Sun, 
//   Lock, 
//   User, 
//   ChevronRight, 
//   Shield, 
//   Palette, 
//   Languages, 
//   LogOut 
// } from 'lucide-react-native';

// const SettingsScreen = () => {
//   // State for various settings
//   const [darkMode, setDarkMode] = useState(false);
//   const [notifications, setNotifications] = useState(true);
//   const [biometricLogin, setBiometricLogin] = useState(false);

//   // Settings section component
//   const SettingsSection = ({ title, children }) => (
//     <View style={styles.settingsSection}>
//       <Text style={styles.sectionTitle}>{title}</Text>
//       {children}
//     </View>
//   );

//   // Settings item component
//   const SettingsItem = ({ 
//     icon: Icon, 
//     title, 
//     subtitle, 
//     onPress, 
//     rightContent 
//   }) => (
//     <TouchableOpacity 
//       style={styles.settingsItem} 
//       onPress={onPress}
//     >
//       <View style={styles.settingsItemLeft}>
//         <View style={styles.iconContainer}>
//           <Icon color="#666" size={20} />
//         </View>
//         <View>
//           <Text style={styles.settingsItemTitle}>{title}</Text>
//           {subtitle && <Text style={styles.settingsItemSubtitle}>{subtitle}</Text>}
//         </View>
//       </View>
//       {rightContent ? (
//         rightContent
//       ) : (
//         <ChevronRight color="#999" size={20} />
//       )}
//     </TouchableOpacity>
//   );

//   return (
//     <ScrollView 
//       style={[
//         styles.container, 
//         { backgroundColor: darkMode ? '#121212' : '#fff' }
//       ]}
//       contentContainerStyle={styles.contentContainer}
//     >
//       <Text 
//         style={[
//           styles.pageTitle, 
//           { color: darkMode ? '#fff' : '#000' }
//         ]}
//       >
//         Settings
//       </Text>

//       <SettingsSection title="Appearance">
//         <SettingsItem
//           icon={Palette}
//           title="Dark Mode"
//           subtitle="Customize your app's look"
//           rightContent={
//             <Switch
//               value={darkMode}
//               onValueChange={setDarkMode}
//               trackColor={{ false: '#767577', true: '#81b0ff' }}
//               thumbColor={darkMode ? '#f5dd4b' : '#f4f3f4'}
//             />
//           }
//         />
//       </SettingsSection>

//       <SettingsSection title="Preferences">
//         <SettingsItem
//           icon={Bell}
//           title="Notifications"
//           rightContent={
//             <Switch
//               value={notifications}
//               onValueChange={setNotifications}
//               trackColor={{ false: '#767577', true: '#81b0ff' }}
//               thumbColor={notifications ? '#f5dd4b' : '#f4f3f4'}
//             />
//           }
//         />
//         <SettingsItem
//           icon={Languages}
//           title="Language"
//           subtitle="English (US)"
//           onPress={() => {/* Navigate to language selection */}}
//         />
//       </SettingsSection>

//       <SettingsSection title="Security">
//         <SettingsItem
//           icon={Lock}
//           title="Biometric Login"
//           subtitle="Use fingerprint or face ID"
//           rightContent={
//             <Switch
//               value={biometricLogin}
//               onValueChange={setBiometricLogin}
//               trackColor={{ false: '#767577', true: '#81b0ff' }}
//               thumbColor={biometricLogin ? '#f5dd4b' : '#f4f3f4'}
//             />
//           }
//         />
//         <SettingsItem
//           icon={Shield}
//           title="Privacy Settings"
//           onPress={() => {/* Navigate to privacy settings */}}
//         />
//       </SettingsSection>

//       <SettingsSection title="Account">
//         <SettingsItem
//           icon={User}
//           title="Profile"
//           subtitle="Manage your profile"
//         //   onPress={() => {/* Navigate to profile */}}
//         />
//         <SettingsItem
//           icon={LogOut}
//           title="Logout"
//         //   onPress={() => {/* Logout logic */}}
//         />
//       </SettingsSection>
//     </ScrollView>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//   },
//   contentContainer: {
//     padding: 20,
//   },
//   pageTitle: {
//     fontSize: 28,
//     fontWeight: 'bold',
//     marginBottom: 20,
//   },
//   settingsSection: {
//     marginBottom: 25,
//     backgroundColor: '#f9f9f9',
//     borderRadius: 12,
//     padding: 15,
//   },
//   sectionTitle: {
//     fontSize: 16,
//     fontWeight: 'bold',
//     color: '#666',
//     marginBottom: 10,
//   },
//   settingsItem: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     alignItems: 'center',
//     paddingVertical: 12,
//     borderBottomWidth: 1,
//     borderBottomColor: '#eee',
//   },
//   settingsItemLeft: {
//     flexDirection: 'row',
//     alignItems: 'center',
//   },
//   iconContainer: {
//     marginRight: 15,
//     width: 35,
//     alignItems: 'center',
//   },
//   settingsItemTitle: {
//     fontSize: 16,
//     fontWeight: '500',
//   },
//   settingsItemSubtitle: {
//     fontSize: 14,
//     color: '#888',
//   },
// });

// export default SettingsScreen;

// import React, { useState } from 'react';
// import {
//   View,
//   Text,
//   StyleSheet,
//   ScrollView,
//   TouchableOpacity,
//   Switch,
// } from 'react-native';
// import {
//   Bell,
//   Moon,
//   Sun,
//   Lock,
//   User,
//   ChevronRight,
//   Shield,
//   Palette,
//   Languages,
//   LogOut,
// } from 'lucide-react-native';

// const SettingsScreen = () => {
//   const [darkMode, setDarkMode] = useState(false);
//   const [notifications, setNotifications] = useState(true);
//   const [biometricLogin, setBiometricLogin] = useState(false);

//   const SettingsSection = ({ title, children }) => (
//     <View style={[styles.sectionContainer, darkMode && styles.darkSection]}>
//       <Text style={[styles.sectionTitle, darkMode && styles.darkText]}>
//         {title}
//       </Text>
//       {children}
//     </View>
//   );

//   const SettingsItem = ({
//     icon: Icon,
//     title,
//     subtitle,
//     onPress,
//     rightContent,
//   }) => (
//     <TouchableOpacity
//       style={styles.settingsItem}
//       onPress={onPress}
//       activeOpacity={0.7}
//     >
//       <View style={styles.itemLeft}>
//         <View style={styles.iconContainer}>
//           <Icon color={darkMode ? '#aaa' : '#666'} size={20} />
//         </View>
//         <View>
//           <Text
//             style={[styles.itemTitle, darkMode && styles.darkText]}
//           >
//             {title}
//           </Text>
//           {subtitle && (
//             <Text
//               style={[styles.itemSubtitle, darkMode && styles.darkSubtitle]}
//             >
//               {subtitle}
//             </Text>
//           )}
//         </View>
//       </View>
//       {rightContent ? (
//         rightContent
//       ) : (
//         <ChevronRight color={darkMode ? '#777' : '#999'} size={20} />
//       )}
//     </TouchableOpacity>
//   );

//   return (
//     <ScrollView
//       style={[
//         styles.container,
//         { backgroundColor: darkMode ? '#121212' : '#f5f5f5' },
//       ]}
//       contentContainerStyle={styles.contentContainer}
//     >
//       <Text
//         style={[
//           styles.pageTitle,
//           { color: darkMode ? '#fff' : '#000' },
//         ]}
//       >
//         Settings
//       </Text>

//       <SettingsSection title="Appearance">
//         <SettingsItem
//           icon={Palette}
//           title="Dark Mode"
//           subtitle="Customize your app's look"
//           rightContent={
//             <Switch
//               value={darkMode}
//               onValueChange={setDarkMode}
//               trackColor={{ false: '#767577', true: '#81b0ff' }}
//               thumbColor={darkMode ? '#f5dd4b' : '#f4f3f4'}
//             />
//           }
//         />
//       </SettingsSection>

//       <SettingsSection title="Preferences">
//         <SettingsItem
//           icon={Bell}
//           title="Notifications"
//           rightContent={
//             <Switch
//               value={notifications}
//               onValueChange={setNotifications}
//               trackColor={{ false: '#767577', true: '#81b0ff' }}
//               thumbColor={notifications ? '#f5dd4b' : '#f4f3f4'}
//             />
//           }
//         />
//         <SettingsItem
//           icon={Languages}
//           title="Language"
//           subtitle="English (US)"
//           onPress={() => {
//             /* Navigate to language settings */
//           }}
//         />
//       </SettingsSection>

//       <SettingsSection title="Security">
//         <SettingsItem
//           icon={Lock}
//           title="Biometric Login"
//           subtitle="Use fingerprint or face ID"
//           rightContent={
//             <Switch
//               value={biometricLogin}
//               onValueChange={setBiometricLogin}
//               trackColor={{ false: '#767577', true: '#81b0ff' }}
//               thumbColor={biometricLogin ? '#f5dd4b' : '#f4f3f4'}
//             />
//           }
//         />
//         <SettingsItem
//           icon={Shield}
//           title="Privacy Settings"
//           onPress={() => {
//             /* Navigate to privacy settings */
//           }}
//         />
//       </SettingsSection>

//       <SettingsSection title="Account">
//         <SettingsItem
//           icon={User}
//           title="Profile"
//           subtitle="Manage your profile"
//           onPress={() => {
//             /* Navigate to profile */
//           }}
//         />
//         <SettingsItem
//           icon={LogOut}
//           title="Logout"
//           onPress={() => {
//             /* Handle logout */
//           }}
//           rightContent={
//             <View style={styles.logoutIcon}>
//               <LogOut color="#e74c3c" size={20} />
//             </View>
//           }
//         />
//       </SettingsSection>
//     </ScrollView>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//   },
//   contentContainer: {
//     padding: 20,
//   },
//   pageTitle: {
//     fontSize: 28,
//     fontWeight: 'bold',
//     marginBottom: 20,
//   },
//   sectionContainer: {
//     marginBottom: 25,
//     backgroundColor: '#fff',
//     borderRadius: 12,
//     padding: 15,
//     shadowColor: '#000',
//     shadowOffset: { width: 0, height: 1 },
//     shadowOpacity: 0.1,
//     shadowRadius: 4,
//     elevation: 3,
//   },
//   darkSection: {
//     backgroundColor: '#1e1e1e',
//   },
//   sectionTitle: {
//     fontSize: 16,
//     fontWeight: 'bold',
//     color: '#666',
//     marginBottom: 10,
//   },
//   darkText: {
//     color: '#fff',
//   },
//   darkSubtitle: {
//     color: '#aaa',
//   },
//   settingsItem: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     alignItems: 'center',
//     paddingVertical: 12,
//     borderBottomWidth: 1,
//     borderBottomColor: '#eee',
//   },
//   itemLeft: {
//     flexDirection: 'row',
//     alignItems: 'center',
//   },
//   iconContainer: {
//     marginRight: 15,
//     width: 35,
//     alignItems: 'center',
//   },
//   itemTitle: {
//     fontSize: 16,
//     fontWeight: '500',
//     color: '#333',
//   },
//   itemSubtitle: {
//     fontSize: 14,
//     color: '#888',
//   },
//   logoutIcon: {
//     marginLeft: 10,
//   },
// });

// export default SettingsScreen;

import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Switch,
  Modal,
  TextInput,
  Button,
  Alert,
} from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { Bell, Palette, Languages, ChevronRight, Mail, Info } from 'lucide-react-native';
import { toggleTheme } from '../Redux/ThemeSlice';

const SettingsScreen = () => {
  const dispatch = useDispatch();
  const darkMode = useSelector((state) => state.theme.isDarkMode);

  const [notifications, setNotifications] = useState(true);
  const [isFeedbackModalVisible, setFeedbackModalVisible] = useState(false);
  const [feedbackText, setFeedbackText] = useState('');

  const SettingsSection = ({ title, children }) => (
    <View style={[styles.sectionContainer, darkMode && styles.darkSection]}>
      <Text style={[styles.sectionTitle, darkMode && styles.darkText]}>
        {title}
      </Text>
      {children}
    </View>
  );

  const SettingsItem = ({ icon: Icon, title, subtitle, onPress, rightContent }) => (
    <TouchableOpacity
      style={[styles.settingsItem, darkMode && styles.darkItem]}
      onPress={onPress}
      activeOpacity={0.7}
    >
      <View style={styles.itemLeft}>
        <View style={styles.iconContainer}>
          <Icon color={darkMode ? '#aaa' : '#666'} size={20} />
        </View>
        <View>
          <Text style={[styles.itemTitle, darkMode && styles.darkText]}>{title}</Text>
          {subtitle && (
            <Text style={[styles.itemSubtitle, darkMode && styles.darkSubtitle]}>
              {subtitle}
            </Text>
          )}
        </View>
      </View>
      {rightContent ? rightContent : <ChevronRight color="#999" size={20} />}
    </TouchableOpacity>
  );

  const handleSendFeedback = () => {
    if (feedbackText.trim() === '') {
      Alert.alert('Error', 'Feedback cannot be empty.');
      return;
    }
    Alert.alert('Feedback Sent', 'Thank you for your feedback!');
    setFeedbackText('');
    setFeedbackModalVisible(false);
  };

  return (
    <>
      <ScrollView
        style={[
          styles.container,
          { backgroundColor: darkMode ? '#121212' : '#f5f5f5' },
        ]}
        contentContainerStyle={styles.contentContainer}
      >
        <Text style={[styles.pageTitle, { color: darkMode ? '#fff' : '#000' }]}>
          Settings
        </Text>

        {/* Appearance Section */}
        <SettingsSection title="Appearance">
          <SettingsItem
            icon={Palette}
            title="Dark Mode"
            subtitle="Customize your app's look"
            rightContent={
              <Switch
                value={darkMode}
                onValueChange={() => dispatch(toggleTheme())}
                trackColor={{ false: '#767577', true: '#81b0ff' }}
                thumbColor={darkMode ? '#f5dd4b' : '#f4f3f4'}
              />
            }
          />
        </SettingsSection>

        {/* Preferences Section */}
        <SettingsSection title="Preferences">
          <SettingsItem
            icon={Bell}
            title="Notifications"
            rightContent={
              <Switch
                value={notifications}
                onValueChange={setNotifications}
                trackColor={{ false: '#767577', true: '#81b0ff' }}
                thumbColor={notifications ? '#f5dd4b' : '#f4f3f4'}
              />
            }
          />
          <SettingsItem
            icon={Languages}
            title="Language"
            subtitle="English (US)"
            onPress={() => {
              /* Navigate to language settings */
            }}
          />
        </SettingsSection>

        {/* About Section */}
        <SettingsSection title="About">
          <SettingsItem
            icon={Mail}
            title="Send Feedback"
            subtitle="We value your opinion"
            onPress={() => setFeedbackModalVisible(true)}
          />
          <SettingsItem
            icon={Info}
            title="App Version"
            subtitle="1.0.0"
            onPress={() => Alert.alert('App Version', 'You are using version 1.0.0')}
          />
        </SettingsSection>
      </ScrollView>

      {/* Feedback Modal */}
      <Modal
        animationType="slide"
        transparent={true}
        visible={isFeedbackModalVisible}
        onRequestClose={() => setFeedbackModalVisible(false)}
      >
        <View style={styles.modalOverlay}>
          <View style={[styles.modalContainer, darkMode && styles.darkModal]}>
            <Text style={[styles.modalTitle, darkMode && styles.darkText]}>
              Send Feedback
            </Text>
            <TextInput
              style={[
                styles.textArea,
                darkMode ? styles.darkTextArea : styles.lightTextArea,
              ]}
              multiline
              placeholder="Enter your feedback here..."
              placeholderTextColor={darkMode ? '#aaa' : '#666'}
              value={feedbackText}
              onChangeText={setFeedbackText}
            />
            <View style={styles.modalButtons}>
              <Button title="Cancel" color="#888" onPress={() => setFeedbackModalVisible(false)} />
              <Button title="Send" color="#007BFF" onPress={handleSendFeedback} />
            </View>
          </View>
        </View>
      </Modal>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  contentContainer: {
    padding: 20,
  },
  pageTitle: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  sectionContainer: {
    marginBottom: 25,
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  darkSection: {
    backgroundColor: '#1e1e1e',
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#666',
    marginBottom: 10,
  },
  darkText: {
    color: '#fff',
  },
  darkSubtitle: {
    color: '#aaa',
  },
  settingsItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  darkItem: {
    borderBottomColor: '#333',
  },
  itemLeft: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  iconContainer: {
    marginRight: 15,
    width: 35,
    alignItems: 'center',
  },
  itemTitle: {
    fontSize: 16,
    fontWeight: '500',
    color: '#333',
  },
  itemSubtitle: {
    fontSize: 14,
    color: '#888',
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContainer: {
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 10,
    width: '90%',
  },
  darkModal: {
    backgroundColor: '#1e1e1e',
  },
  modalTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 15,
  },
  textArea: {
    height: 100,
    textAlignVertical: 'top',
    padding: 10,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#ddd',
    marginBottom: 15,
  },
  darkTextArea: {
    backgroundColor: '#2e2e2e',
    color: '#fff',
  },
  lightTextArea: {
    backgroundColor: '#f9f9f9',
    color: '#333',
  },
  modalButtons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});

export default SettingsScreen;
