import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";

export default function RootLayout() {
  return (
    <>
      <StatusBar style="dark" />
      <Stack screenOptions={{
        headerStyle: { backgroundColor: "#F5F2E9" },
        headerTintColor: "#174C3C",
        headerTitleStyle: { fontWeight: "700" },
        contentStyle: { backgroundColor: "#F8F8F4" },
      }}>
        <Stack.Screen name="index" options={{ title: "Sachren Hospital" }} />
        <Stack.Screen name="doctors" options={{ title: "Find a Doctor" }} />
        <Stack.Screen name="treatments" options={{ title: "Treatments" }} />
        <Stack.Screen name="contact" options={{ title: "Contact & Appointments" }} />
      </Stack>
    </>
  );
}
