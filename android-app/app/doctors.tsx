import { Linking, Pressable, ScrollView, StyleSheet, Text, View } from "react-native";

const GREEN = "#174C3C";
const PHONE = "8530046800";

export default function DoctorsScreen() {
  return (
    <ScrollView contentContainerStyle={styles.page}>
      <Text style={styles.heading}>Find a doctor</Text>
      <Text style={styles.body}>Contact the hospital to confirm which doctors are available, their qualifications, specialities and consultation timings. We have not filled this screen with unverified doctor details.</Text>
      <View style={styles.card}>
        <Text style={styles.cardTitle}>Ask about a consultation</Text>
        <Text style={styles.body}>The hospital team can help you check the appropriate department and current availability.</Text>
        <Pressable style={styles.button} onPress={() => Linking.openURL(`tel:${PHONE}`)} accessibilityRole="button">
          <Text style={styles.buttonText}>Call hospital</Text>
        </Pressable>
      </View>
    </ScrollView>
  );
}
const styles = StyleSheet.create({
  page: { padding: 20, gap: 16 },
  heading: { fontSize: 28, color: GREEN, fontWeight: "800" },
  body: { color: "#4D5A51", fontSize: 15, lineHeight: 23 },
  card: { padding: 18, borderRadius: 16, backgroundColor: "#FFFFFF", borderWidth: 1, borderColor: "#E0E7DF", gap: 10 },
  cardTitle: { fontSize: 18, color: GREEN, fontWeight: "800" },
  button: { backgroundColor: GREEN, padding: 14, alignItems: "center", borderRadius: 12, marginTop: 4 },
  buttonText: { color: "#FFFFFF", fontWeight: "700" },
});
