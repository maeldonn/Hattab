import React from "react";
import { Image, StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Call from "../Components/Call";
import Message from "../Components/Message";

class Navigation extends React.Component {
  render() {
    const Tab = createBottomTabNavigator();
    return (
      <NavigationContainer>
        <Tab.Navigator
          tabBarOptions={{
            activeBackgroundColor: "#DDDDDD", // Couleur d'arrière-plan de l'onglet sélectionné
            inactiveBackgroundColor: "#FFFFFF", // Couleur d'arrière-plan des onglets non sélectionnés
            showLabel: false, // On masque les titres
            showIcon: true,
          }}
        >
          <Tab.Screen
            name="Call"
            component={Call}
            options={{
              title: "Appeler",
              tabBarIcon: () => (
                <Image
                  source={require("../Images/ic_phone.png")}
                  style={styles.icon}
                />
              ),
            }}
          />
          <Tab.Screen
            name="Message"
            component={Message}
            options={{
              title: "Envoyer un message",
              tabBarIcon: () => (
                <Image
                  source={require("../Images/ic_message.png")}
                  style={styles.icon}
                />
              ),
            }}
          />
        </Tab.Navigator>
      </NavigationContainer>
    );
  }
}

const styles = StyleSheet.create({
  icon: {
    width: 30,
    height: 30,
  },
});

export default Navigation;
