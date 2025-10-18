import { Stack } from "expo-router";
import React from "react";

export default function StackLayout() {
  return (
    <Stack screenOptions={{ headerTitleAlign: "center" }}>
      <Stack.Screen name="index" options={{ title: "Posts" }} />
      <Stack.Screen name="details" options={{ title: "Post Details" }} />
    </Stack>
  );
}
