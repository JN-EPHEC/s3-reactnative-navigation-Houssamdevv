// ...existing code...
import React from "react";
import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    // initialRouteName doit être le nom de la route basée sur l'arborescence des fichiers
    // ici on demande d'ouvrir automatiquement screens/PostListScreen au démarrage.
    <Stack initialRouteName="screens/PostListScreen" />
  );
}
// ...existing code...