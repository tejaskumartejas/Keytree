import { Linking, Pressable, ScrollView, StyleSheet, Text, View } from "react-native";

const GREEN = "#174C3C";
const PHONE = "8530046800";

function ServiceCard({ title, description }: { title: string; description: string }) {
  return <View style={styles.card}><Text style={styles.cardTitle}>{title}</Text><Text style={styles.body}>{description}</Text></View>;
}

export default function TreatmentsScreen() {
  return (
    <ScrollView contentContainerStyle={styles.page}>
      <Text style={styles.heading}>Treatments & services</Text>
      <Text style={styles.body}>Use this page to explore service areas. Contact the hospital to confirm current availability, eligibility, costs and clinical advice.</Text>
      <ServiceCard title="IVF & fertility care" description="Ask the hospital about fertility consultations, available services and the next steps for an appointment." />
      <ServiceCard title="Orthopaedics" description="Ask about bone and joint care, available specialists and consultation timings." />
      <Pressable style={styles.button} onPress={() => Linking.openURL(`tel:${PHONE}`)} accessibilityRole="button">
        <Text style={styles.buttonText}>Enquire about a service</Text>
      </Pressable>
      <Text style={styles.small}>Information is general and does not replace advice from a qualified healthcare professional.</Text>
    </ScrollView>
  );
}
const styles = StyleSheet.create({
  page: { padding: 20, gap: 14 },
  heading: { fontSize: 28, color: GREEN, fontWeight: "800" },
  body: { color: "#4D5A51", fontSize: 15, lineHeight: 23 },
  card: { padding: 18, borderRadius: 16, backgroundColor: "#FFFFFF", borderWidth: 1, borderColor: "#E0E7DF", gap: 8 },
  cardTitle: { fontSize: 18, color: GREEN, fontWeight: "800" },
  button: { backgroundColor: GREEN, padding: 15, alignItems: "center", borderRadius: 12 },
  buttonText: { color: "#FFFFFF", fontWeight: "700" },
  small: { color: "#6A726B", fontSize: 12, lineHeight: 18 },
});
