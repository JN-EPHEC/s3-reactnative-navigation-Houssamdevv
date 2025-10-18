import { View, Text, Pressable, StyleSheet } from "react-native";
import { router } from "expo-router";

const POSTS = [
  { title: "React Native is Awesome", content: "Lorem ipsum about RN…" },
  { title: "State Management Tips", content: "Redux? Zustand? Context?…" },
  { title: "UI Design Principles", content: "Hierarchy, spacing, contrast…" },
  { title: "Navigation Best Practices", content: "Stacks, Tabs, Drawers…" },
];

export default function PostListScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.h1}>My Blog</Text>
      {POSTS.map((p) => (
        <Pressable
          key={p.title}
          style={styles.item}
          onPress={() =>
            router.push({
              pathname: "/screens/PostDetailScreen",
              params: { title: p.title, content: p.content },
            })
          }
        >
          <Text style={styles.link}>{p.title}</Text>
        </Pressable>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16, gap: 12 },
  h1: { fontSize: 22, fontWeight: "700", marginBottom: 8 },
  item: { paddingVertical: 12 },
  link: { color: "#2563eb", fontSize: 16 },
});
