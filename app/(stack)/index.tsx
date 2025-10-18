import { Link } from "expo-router";
import { View, Text, StyleSheet } from "react-native";

export default function PostsScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>My Blog</Text>
      <Link href="/(stack)/details" style={styles.link}>
        Go to Post Details
      </Link>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", alignItems: "center" },
  title: { fontSize: 22, marginBottom: 10 },
  link: { fontSize: 18, color: "blue" },
});
