import { View, Text } from "react-native";

export default function ProfileScreen() {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Name: John Doe</Text>
      <Text>Username: @johndoe</Text>
    </View>
  );
}
