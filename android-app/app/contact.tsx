import { Linking, Pressable, ScrollView, StyleSheet, Text, View } from "react-native";

const GREEN = "#174C3C";
const PHONE = "8530046800";
const EMAIL = "sachrenhospital@gmail.com";
const ADDRESS = "Virar West, Maharashtra, India";

export default function ContactScreen() {
  const open = (url: string) => Linking.openURL(url);
  return (
    <ScrollView contentContainerStyle={styles.page}>
      <Text style={styles.heading}>Contact & appointments</Text>
      <Text style={styles.body}>Contact the hospital to ask about doctor availability, appointment timings and services.</Text>
      <View style={styles.card}>
        <Text style={styles.label}>PHONE</Text>
        <Text style={styles.value}>+91 85300 46800</Text>
        <Pressable style={styles.button} onPress={() => open(`tel:${PHONE}`)} accessibilityRole="button"><Text style={styles.buttonText}>Call hospital</Text></Pressable>
        <Pressable style={styles.secondary} onPress={() => open(`mailto:${EMAIL}`)} accessibilityRole="button"><Text style={styles.secondaryText}>Email hospital</Text></Pressable>
        <Text style={styles.label}>LOCATION</Text>
        <Text style={styles.value}>{ADDRESS}</Text>
        <Pressable style={styles.secondary} onPress={() => open("https://www.google.com/maps/search/?api=1&query=Sachren+Hospital+Virar+West")} accessibilityRole="button"><Text style={styles.secondaryText}>Open directions</Text></Pressable>
      </View>
      <Text style={styles.small}>Please verify contact details and address with the hospital before publishing. Sending an enquiry does not confirm an appointment.</Text>
    </ScrollView>
  );
}
const styles = StyleSheet.create({
  page: { padding: 20, gap: 14 },
  heading: { fontSize: 28, color: GREEN, fontWeight: "800" },
  body: { color: "#4D5A51", fontSize: 15, lineHeight: 23 },
  card: { backgroundColor: "#FFFFFF", borderWidth: 1, borderColor: "#E0E7DF", borderRadius: 16, padding: 18, gap: 12 },
  label: { color: "#657067", fontSize: 11, fontWeight: "800", letterSpacing: 1.5, marginTop: 4 },
  value: { color: GREEN, fontSize: 17, fontWeight: "700" },
  button: { backgroundColor: GREEN, padding: 14, borderRadius: 12, alignItems: "center" },
  buttonText: { color: "#FFFFFF", fontWeight: "700" },
  secondary: { borderWidth: 1, borderColor: GREEN, padding: 13, borderRadius: 12, alignItems: "center" },
  secondaryText: { color: GREEN, fontWeight: "700" },
  small: { color: "#6A726B", fontSize: 12, lineHeight: 18 },
});
