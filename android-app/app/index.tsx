import { Link } from "expo-router";
import { Linking, Pressable, ScrollView, StyleSheet, Text, View } from "react-native";

const GREEN = "#174C3C";
const PHONE = "8530046800";

function ActionCard({ title, detail, href }: { title: string; detail: string; href: "/doctors" | "/treatments" | "/contact" }) {
  return (
    <Link href={href} asChild>
      <Pressable style={styles.card} accessibilityRole="button">
        <Text style={styles.cardTitle}>{title}</Text>
        <Text style={styles.cardDetail}>{detail}</Text>
        <Text style={styles.cardLink}>Explore →</Text>
      </Pressable>
    </Link>
  );
}

export default function HomeScreen() {
  return (
    <ScrollView contentContainerStyle={styles.page}>
      <View style={styles.hero}>
        <Text style={styles.eyebrow}>WELCOME TO</Text>
        <Text style={styles.heading}>Sachren{"\n"}Hospital</Text>
        <Text style={styles.intro}>Care, guidance and information to help you plan your visit.</Text>
        <Pressable style={styles.primaryButton} onPress={() => Linking.openURL(`tel:${PHONE}`)} accessibilityRole="button">
          <Text style={styles.primaryText}>Call to enquire</Text>
        </Pressable>
        <Text style={styles.note}>Appointment requests are confirmed by hospital staff, not automatically by this app.</Text>
      </View>
      <Text style={styles.sectionTitle}>How can we help?</Text>
      <ActionCard title="Find a doctor" detail="Contact the hospital for current doctor and consultation details." href="/doctors" />
      <ActionCard title="Treatments & services" detail="Explore available services and ask the team for guidance." href="/treatments" />
      <ActionCard title="Appointments & contact" detail="Call, find directions or request an appointment." href="/contact" />
      <View style={styles.footer}>
        <Text style={styles.footerTitle}>Please note</Text>
        <Text style={styles.footerText}>This app provides general hospital information and is not an emergency service. For a medical emergency, contact local emergency services.</Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  page: { padding: 20, paddingBottom: 36, gap: 14 },
  hero: { backgroundColor: "#E8F0E8", borderRadius: 24, padding: 24, marginBottom: 8 },
  eyebrow: { color: GREEN, fontSize: 12, letterSpacing: 2, fontWeight: "800" },
  heading: { color: GREEN, fontSize: 38, fontWeight: "800", lineHeight: 43, marginTop: 10 },
  intro: { color: "#35483D", fontSize: 16, lineHeight: 23, marginTop: 12 },
  primaryButton: { backgroundColor: GREEN, padding: 15, borderRadius: 12, alignItems: "center", marginTop: 20 },
  primaryText: { color: "#FFFFFF", fontWeight: "700", fontSize: 16 },
  note: { color: "#46574D", fontSize: 12, lineHeight: 17, marginTop: 12 },
  sectionTitle: { color: GREEN, fontSize: 22, fontWeight: "800", marginTop: 8 },
  card: { backgroundColor: "#FFFFFF", borderColor: "#E0E7DF", borderWidth: 1, borderRadius: 16, padding: 18 },
  cardTitle: { color: GREEN, fontSize: 18, fontWeight: "800" },
  cardDetail: { color: "#56635B", fontSize: 14, lineHeight: 20, marginTop: 6 },
  cardLink: { color: GREEN, fontWeight: "800", marginTop: 12 },
  footer: { backgroundColor: "#F0EEE5", padding: 16, borderRadius: 14, marginTop: 8 },
  footerTitle: { color: "#3B463F", fontWeight: "800" },
  footerText: { color: "#535A54", fontSize: 13, lineHeight: 19, marginTop: 6 },
});
