import { View, Text, StyleSheet } from "react-native";
import { useLocalSearchParams } from "expo-router";

export default function PostDetailScreen() {
  const { title, content } = useLocalSearchParams<{
    title: string;
    content: string;
  }>();

  return (
    <View style={styles.container}>
      <Text style={styles.h1}>{title}</Text>
      <Text style={styles.body}>{content}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16, gap: 12 },
  h1: { fontSize: 20, fontWeight: "700" },
  body: { fontSize: 16, lineHeight: 22 },
});
