// ...existing code...
import { useRouter } from "expo-router";
import { useEffect } from "react";
import { View, Text, InteractionManager } from "react-native";

export default function Index() {
  const router = useRouter();

  useEffect(() => {
    let mounted = true;
    const maxAttempts = 8;

    const sleep = (ms: number) => new Promise((r) => setTimeout(r, ms));

    const tryReplace = async (attempt = 0) => {
      if (!mounted) return;
      try {
        router.replace("/(tabs)/home");
      } catch (err: unknown) {
        if (!mounted) return;
        if (attempt >= maxAttempts) {
          console.error("Impossible de rediriger après plusieurs tentatives:", err);
          return;
        }
        // backoff simple puis nouvelle tentative
        await sleep(100 * (attempt + 1));
        return tryReplace(attempt + 1);
      }
    };

    const run = () => {
      // Attendre la fin des interactions native (sécurise le montage du Root Layout)
      if (InteractionManager?.runAfterInteractions) {
        InteractionManager.runAfterInteractions(() => {
          if (mounted) tryReplace();
        });
      } else {
        // fallback web / sécurisé
        setTimeout(() => {
          if (mounted) tryReplace();
        }, 50);
      }
    };

    run();

    return () => {
      mounted = false;
    };
  }, [router]);

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Chargement...</Text>
    </View>
  );
}
// ...existing code...