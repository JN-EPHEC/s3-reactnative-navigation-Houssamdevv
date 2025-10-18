import { View, Text, StyleSheet } from "react-native";

export default function PostDetailScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Post Details</Text>
      <Text>This is where post details will appear!</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", alignItems: "center" },
  title: { fontSize: 22, marginBottom: 10 },
});
