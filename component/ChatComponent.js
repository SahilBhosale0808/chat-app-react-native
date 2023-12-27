import { View, Text, Pressable } from "react-native";
import React, { useLayoutEffect } from "react";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { styles } from "../utils/styles";

const ChatComponent = ({ item }) => {
  const navigation = useNavigation();

  useLayoutEffect(() => {
    if (!item.messages || item.messages.length === 0) {
      return;
    }
  }, [item.messages]);

  const handleNavigation = () => {
    navigation.navigate("Messaging", {
      id: item.id,
      name: item.name,
    });
  };

  return (
    <Pressable
      style={styles.cchat}
      onPress={handleNavigation}
      accessibilityRole="button"
    >
      
      <Ionicons
        name="person-circle-outline"
        size={45}
        color="black"
        style={styles.cavatar}
      />

      <View style={styles.crightContainer}>
        <View>
          <Text style={styles.cusername}>{item.name}</Text>

          <Text style={styles.cmessage}>
            {/* Access last message directly */}
            {item.messages[item.messages.length - 1]?.text ??
              "Tap to start chatting"}
          </Text>
        </View>
        <View>
          <Text style={styles.ctime}>
            {item.messages[item.messages.length - 1]?.time ?? "now"}
          </Text>
        </View>
      </View>
    </Pressable>
  );
};

export default ChatComponent;
