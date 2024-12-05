import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Switch } from 'react-native';
import { 
  Bell, 
  Moon, 
  Sun, 
  Lock, 
  User, 
  ChevronRight, 
  Shield, 
  Palette, 
  Languages, 
  LogOut 
} from 'lucide-react-native';

const SettingsScreen = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [notifications, setNotifications] = useState(true);
  const [biometricLogin, setBiometricLogin] = useState(false);

  const SettingsSection = ({ title, children }) => (
    <View style={styles.settingsSection}>
      <Text style={styles.sectionTitle}>{title}</Text>
      {children}
    </View>
  );

  const SettingsItem = ({ icon: Icon, title, subtitle, onPress, rightContent }) => (
    <TouchableOpacity style={styles.settingsItem} onPress={onPress}>
      <View style={styles.settingsItemLeft}>
        <View style={styles.iconContainer}>
          <Icon color={darkMode ? '#a8d0e6' : '#666'} size={20} />
        </View>
        <View>
          <Text style={[styles.settingsItemTitle, { color: darkMode ? '#fff' : '#333' }]}>{title}</Text>
          {subtitle && <Text style={[styles.settingsItemSubtitle, { color: darkMode ? '#aaa' : '#666' }]}>{subtitle}</Text>}
        </View>
      </View>
      {rightContent ? (
        rightContent
      ) : (
        <ChevronRight color={darkMode ? '#a8d0e6' : '#999'} size={20} />
      )}
    </TouchableOpacity>
  );

  return (
    <ScrollView
      style={[styles.container, { backgroundColor: darkMode ? '#0f2027' : '#f5f5f5' }]}
      contentContainerStyle={styles.contentContainer}
    >
      <Text style={[styles.pageTitle, { color: darkMode ? '#fff' : '#333' }]}>Settings</Text>

      <SettingsSection title="Appearance">
        <SettingsItem
          icon={Palette}
          title="Dark Mode"
          subtitle="Customize your app's look"
          rightContent={
            <Switch
              value={darkMode}
              onValueChange={setDarkMode}
              trackColor={{ false: '#767577', true: '#00b4d8' }}
              thumbColor={darkMode ? '#f5dd4b' : '#f4f3f4'}
            />
          }
        />
      </SettingsSection>

      <SettingsSection title="Preferences">
        <SettingsItem
          icon={Bell}
          title="Notifications"
          rightContent={
            <Switch
              value={notifications}
              onValueChange={setNotifications}
              trackColor={{ false: '#767577', true: '#00b4d8' }}
              thumbColor={notifications ? '#f5dd4b' : '#f4f3f4'}
            />
          }
        />
        <SettingsItem
          icon={Languages}
          title="Language"
          subtitle="English (US)"
          onPress={() => {/* Navigate to language selection */}}
        />
      </SettingsSection>

      <SettingsSection title="Security">
        <SettingsItem
          icon={Lock}
          title="Biometric Login"
          subtitle="Use fingerprint or face ID"
          rightContent={
            <Switch
              value={biometricLogin}
              onValueChange={setBiometricLogin}
              trackColor={{ false: '#767577', true: '#00b4d8' }}
              thumbColor={biometricLogin ? '#f5dd4b' : '#f4f3f4'}
            />
          }
        />
        <SettingsItem
          icon={Shield}
          title="Privacy Settings"
          onPress={() => {/* Navigate to privacy settings */}}
        />
      </SettingsSection>
    </ScrollView>
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
  settingsSection: {
    marginBottom: 25,
    backgroundColor: '#203a43',
    borderRadius: 12,
    padding: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 5,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#a8d0e6',
    marginBottom: 10,
  },
  settingsItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#2c5364',
  },
  settingsItemLeft: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  iconContainer: {
    marginRight: 15,
    width: 35,
    alignItems: 'center',
  },
  settingsItemTitle: {
    fontSize: 16,
    fontWeight: '500',
  },
  settingsItemSubtitle: {
    fontSize: 14,
  },
});

export default SettingsScreen;
