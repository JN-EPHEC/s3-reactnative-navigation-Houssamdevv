// ...existing code...
import { useRouter } from "expo-router";
import { useEffect } from "react";
import { View, Text, InteractionManager, Platform } from "react-native";

export default function Index() {
  const router = useRouter();

  useEffect(() => {
    let mounted = true;
    const maxAttempts = 8;

    const sleep = (ms: number) => new Promise((r) => setTimeout(r, ms));

    const tryReplace = async (attempt = 0) => {
      if (!mounted) return;
      try {
        router.replace("/screens/PostListScreen");
      } catch (err: unknown) {
        if (!mounted) return;
        if (attempt >= maxAttempts) {
          console.error("Impossible de rediriger après plusieurs tentatives:", err);
          return;
        }
        // Backoff simple
        await sleep(100 * (attempt + 1));
        return tryReplace(attempt + 1);
      }
    };

    // Sur native, attendre la fin des interactions aide à s'assurer que la Root Layout est montée.
    // Sur web, runAfterInteractions fonctionne aussi ; sinon on tombe sur setTimeout minimal.
    const run = () => {
      if (InteractionManager && InteractionManager.runAfterInteractions) {
        InteractionManager.runAfterInteractions(() => {
          if (mounted) tryReplace();
        });
      } else {
        // fallback (shouldn't être nécessaire mais sécurise l'exécution sur web)
        setTimeout(() => {
          if (mounted) tryReplace();
        }, 50);
      }
    };

    // Lancer la tentative
    run();

    return () => {
      mounted = false;
    };
  }, [router]);

  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Chargement...</Text>
    </View>
  );
}
// ...existing code...