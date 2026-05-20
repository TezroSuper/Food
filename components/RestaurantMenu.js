import React from 'react';
import { View, Text, ScrollView, TouchableOpacity, StyleSheet } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

export default function RestaurantMenu({ onBack, onGoToCheckout }) {
  const foodItems = [
    { id: 1, name: 'ٹیزرو رائل چکن بریانی', price: 'Rs. 380', desc: 'زعفرانی چاول، پریمیم چکن چنکس اور خاص دیسی مصالحہ جات' },
    { id: 2, name: 'چکن کڑاہی (ہاف)', price: 'Rs. 750', desc: 'مکھن اور دیسی گھی میں تیار کردہ، 2 خمیری روٹیوں کے ساتھ' },
    { id: 3, name: 'ٹیزرو کرسپی چکن برگر', price: 'Rs. 290', desc: 'پریمیم زنگر فلیٹ، ہاؤس سوس اور فریش لیٹس' },
  ];

  return (
    <View style={styles.container}>
      {/* ٹاپ بار */}
      <View style={styles.topBar}>
        <TouchableOpacity onClick={onBack} style={styles.backBtn}>
          <MaterialIcons name="arrow_forward" size={20} color="#1F2937" />
        </TouchableOpacity>
        <Text style={styles.topTitle}>ٹیزرو پریمیم کچن</Text>
        <View style={{ width: 32 }} />
      </View>

      <ScrollView style={{ flex: 1, padding: 14 }} showsVerticalScrollIndicator={false}>
        <Text style={styles.sectionTitle}>مقبول ڈشز (Popular Items)</Text>

        {/* ڈشز لسٹ گریڈ */}
        {foodItems.map(item => (
          <View key={item.id} style={styles.foodCard}>
            <View style={styles.cardDetails}>
              <Text style={styles.foodName}>{item.name}</Text>
              <Text style={styles.foodDesc}>{item.desc}</Text>
              <Text style={styles.foodPrice}>{item.price}</Text>
            </View>
            {/* ایڈ بٹن */}
            <TouchableOpacity style={styles.addBtn}>
              <Text style={styles.addBtnText}>ADD +</Text>
            </TouchableOpacity>
          </View>
        ))}
      </ScrollView>

      {/* باٹم فلوٹنگ بار: کارٹ الرٹ */}
      <View style={styles.cartBar}>
        <View style={{ alignItems: 'right' }}>
          <Text style={{ color: '#fff', fontSize: 10, fontWeight: '900' }}>2 Items | Rs. 1,130</Text>
          <Text style={{ color: '#93C5FD', fontSize: 7, fontWeight: 'bold' }}>ٹیزرو بینک ڈسکاؤنٹ لاگو ہے</Text>
        </View>
        <TouchableOpacity onClick={onGoToCheckout} style={styles.viewCartBtn}>
          <Text style={styles.viewCartText}>کارٹ دیکھیں (VIEW CART)</Text>
          <MaterialIcons name="shopping_cart" size={14} color="#0D47A1" />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#F9FAFB' },
  topBar: { flexDirection: 'row-reverse', justifyContent: 'space-between', alignItems: 'center', padding: 12, paddingTop: 40, backgroundColor: '#fff', borderBottomWidth: 1, borderBottomColor: '#E5E7EB' },
  backBtn: { width: 32, height: 32, justifyContent: 'center', alignItems: 'center', backgroundColor: '#F3F4F6', borderRadius: 8 },
  topTitle: { fontSize: 12, fontWeight: '900', color: '#1F2937' },
  sectionTitle: { fontSize: 11, fontWeight: '900', color: '#1F2937', marginBottom: 12, borderRightWidth: 3, borderRightColor: '#0D47A1', paddingRight: 6 },
  foodCard: { backgroundColor: '#fff', borderWidth: 1, borderColor: '#E5E7EB', borderRadius: 12, padding: 12, marginBottom: 10, flexDirection: 'row-reverse', justifyContent: 'space-between', alignItems: 'center' },
  cardDetails: { flex: 1, paddingRight: 8, alignItems: 'right' },
  foodName: { fontSize: 10.5, fontWeight: '900', color: '#1F2937', textAlign: 'right' },
  foodDesc: { fontSize: 8, fontWeight: 'bold', color: '#6B7280', textAlign: 'right', marginTop: 2, leading: 12 },
  foodPrice: { fontSize: 10, fontWeight: '900', color: '#0D47A1', marginTop: 4, fontFamily: 'mono' },
  addBtn: { borderWidth: 1, borderColor: '#0D47A1', paddingHorizontal: 12, paddingVertical: 6, borderRadius: 8, backgroundColor: '#EFF6FF' },
  addBtnText: { fontSize: 9, fontWeight: '900', color: '#0D47A1' },
  cartBar: { backgroundColor: '#0A192F', padding: 14, flexDirection: 'row-reverse', justifyContent: 'space-between', alignItems: 'center', borderTopLeftRadius: 16, borderTopRightRadius: 16 },
  viewCartBtn: { backgroundColor: '#fff', flexDirection: 'row', alignItems: 'center', gap: 6, paddingHorizontal: 12, paddingVertical: 8, borderRadius: 8 },
  viewCartText: { color: '#0D47A1', fontSize: 9, fontWeight: '900' }
});
