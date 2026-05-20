import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

export default function FoodCheckout({ onBackToHome }) {
  return (
    <View style={styles.container}>
      {/* ٹاپ بار */}
      <View style={styles.topBar}>
        <Text style={styles.topTitle}>چیک آؤٹ (Checkout)</Text>
      </View>

      <ScrollView style={{ flex: 1, padding: 14 }} showsVerticalScrollIndicator={false}>
        
        {/* 📍 ڈلیوری ایڈریس فریم */}
        <View style={styles.sectionBox}>
          <View style={styles.boxHeader}>
            <MaterialIcons name="location_on" size={16} color="#0D47A1" />
            <Text style={styles.boxTitle}>ڈلیوری ایڈریس (Delivery Location)</Text>
          </View>
          <Text style={styles.boxBody}>لاہور کینٹ، ہاؤس نمبر 4-بی، گلی نمبر 2 (موجودہ لوکیشن)</Text>
        </View>

        {/* 🧾 بل بریک ڈاؤن */}
        <View style={styles.sectionBox}>
          <View style={styles.boxHeader}>
            <MaterialIcons name="receipt" size={16} color="#0D47A1" />
            <Text style={styles.boxTitle}>بل کی تفصیلات (Bill Summary)</Text>
          </View>
          
          <View style={styles.billRow}>
            <Text style={styles.billLabel}>آئٹمز کا ٹوٹل</Text>
            <Text style={styles.billValue}>Rs. 1,130.00</Text>
          </View>
          <View style={styles.billRow}>
            <Text style={styles.billLabel}>ڈلیوری چارجز</Text>
            <Text style={styles.billValue}>Rs. 60.00</Text>
          </View>
          <View style={styles.billRow}>
            <Text style={styles.billLabel}>ٹیزرو والٹ ڈسکاؤنٹ (20%)</Text>
            <Text style={[styles.billValue, { color: '#10B981' }]}>- Rs. 226.00</Text>
          </View>
          <View style={[styles.billRow, { borderTopWidth: 1, borderTopColor: '#F3F4F6', paddingTop: 6, marginTop: 4 }]}>
            <Text style={[styles.billLabel, { fontWeight: '900', color: '#1F2937' }]}>ٹوٹل قابل ادائیگی</Text>
            <Text style={[styles.billValue, { fontWeight: '900', color: '#0D47A1', fontSize: 12 }]}>Rs. 964.00</Text>
          </View>
        </View>

        {/* 💳 گیٹ وے انٹیگریشن اسٹیٹس */}
        <View style={styles.bankStatusBox}>
          <MaterialIcons name="offline_pin" size={18} color="#0D47A1" />
          <View style={{ flex: 1, paddingRight: 8 }}>
            <Text style={{ fontSize: 9, fontWeight: '900', color: '#1F2937', textAlign: 'right' }}>ٹیزرو ڈیجیٹل بینک لائیو</Text>
            <Text style={{ fontSize: 7, fontWeight: 'bold', color: '#6B7280', textAlign: 'right', marginTop: 1 }}>آرڈر کنفرم ہوتے ہی رقم آٹو ڈیڈکٹ ہو جائے گی</Text>
          </View>
        </View>

      </ScrollView>

      {/* ⚡ آرڈر پلیسمنٹ بٹن */}
      <View style={{ padding: 14, backgroundColor: '#fff', borderTopWidth: 1, borderTopColor: '#E5E7EB' }}>
        <TouchableOpacity onClick={onBackToHome} style={styles.orderBtn}>
          <MaterialIcons name="flash_on" size={16} color="#fff" />
          <Text style={styles.orderBtnText}>آرڈر کنفرم کریں (PLACE ORDER)</Text>
        </TouchableOpacity>
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#F9FAFB' },
  topBar: { padding: 12, paddingTop: 40, backgroundColor: '#fff', borderBottomWidth: 1, borderBottomColor: '#E5E7EB', alignItems: 'center' },
  topTitle: { fontSize: 12, fontWeight: '900', color: '#1F2937' },
  sectionBox: { backgroundColor: '#fff', borderWidth: 1, borderColor: '#E5E7EB', borderRadius: 12, padding: 12, marginBottom: 12 },
  boxHeader: { flexDirection: 'row-reverse', alignItems: 'center', gap: 6, marginBottom: 8, borderBottomWidth: 1, borderBottomColor: '#F3F4F6', paddingBottom: 6 },
  boxTitle: { fontSize: 9.5, fontWeight: '900', color: '#374151' },
  boxBody: { fontSize: 9, fontWeight: 'bold', color: '#4B5563', textAlign: 'right', leading: 14 },
  billRow: { flexDirection: 'row-reverse', justifyContent: 'space-between', alignItems: 'center', marginBottom: 4 },
  billLabel: { fontSize: 9, fontWeight: 'bold', color: '#6B7280' },
  billValue: { fontSize: 9.5, fontWeight: '900', color: '#374151', fontFamily: 'mono' },
  bankStatusBox: { backgroundColor: '#EFF6FF', borderHorizontalWidth: 1, borderVerticalWidth: 1, borderColor: '#BFDBFE', borderRadius: 12, padding: 10, flexDirection: 'row-reverse', alignItems: 'center', marginBottom: 12 },
  orderBtn: { backgroundColor: '#0A192F', flexDirection: 'row', justifyContent: 'center', alignItems: 'center', gap: 6, height: 44, borderRadius: 12 },
  orderBtnText: { color: '#fff', fontSize: 11, fontWeight: '900', letterSpacing: 0.5 }
});
