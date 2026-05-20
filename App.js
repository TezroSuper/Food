import React, { useState } from 'react';
import { StyleSheet, View, Text, ScrollView, Image, TouchableOpacity, Linking } from 'react-native';
import FoodHeader from './components/Header';
import FoodBottomNav from './components/BottomNav';
import RestaurantMenu from './components/RestaurantMenu';
import FoodCheckout from './components/Checkout';

export default function App() {
  const [screenState, setScreenState] = useState('home'); // home | menu | checkout

  const handleBackToHome = () => {
    Linking.openURL('http://localhost:5173').catch(err => 
      alert('مرکزی ہوم ایپ گیٹ وے اوپن کیا جا رہا ہے...')
    );
  };

  // 1️⃣ اگر یوزر ریسٹورنٹ مینو پر ہو
  if (screenState === 'menu') {
    return (
      <RestaurantMenu 
        onBack={() => setScreenState('home')} 
        onGoToCheckout={() => setScreenState('checkout')} 
      />
    );
  }

  // 2️⃣ اگر یوزر چیک آؤٹ اسکرین پر ہو
  if (screenState === 'checkout') {
    return (
      <FoodCheckout 
        onBackToHome={() => {
          alert('🎉 آرڈر کامیابی سے بک ہو گیا!');
          setScreenState('home');
        }} 
      />
    );
  }

  // 3️⃣ ڈیفالٹ مرکزی ہوم مینو اسکرین
  return (
    <View style={styles.container}>
      <FoodHeader />

      <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
        <View style={styles.promoBanner}>
          <Text style={styles.promoText}>ٹیزرو فوڈ ڈیلز: والٹ سے پیمنٹ پر 20% ڈسکاؤنٹ! 🍔</Text>
        </View>

        <Text style={styles.sectionTitle}>مقبول کیٹیگریز (Popular Categories)</Text>
        <ScrollView horizontal showsHorizontalScrollIndicator={false} style={{ flexDirection: 'row-reverse', marginBottom: 20 }}>
          <View style={styles.squareCategoryCard}>
            <Image source={require('./assets/butans/food-delevry.jpg')} style={styles.cardImage} />
            <Text style={styles.cardText}>فاسٹ فوڈ</Text>
          </View>
          <View style={styles.squareCategoryCard}>
            <Image source={require('./assets/butans/grocery.jpg')} style={styles.cardImage} />
            <Text style={styles.cardText}>دیسی کھانے</Text>
          </View>
          <View style={styles.squareCategoryCard}>
            <Image source={require('./assets/butans/hotel-room.jpg')} style={styles.cardImage} />
            <Text style={styles.cardText}>ہوسپیٹلیٹی</Text>
          </View>
        </ScrollView>

        <Text style={styles.sectionTitle}>قریبی ریسٹورینٹس (Top Restaurants)</Text>

        {/* ریسٹورنٹ کارڈ پر کلک کرنے سے مینو اسکرین اوپن ہوگی */}
        <TouchableOpacity onClick={() => setScreenState('menu')} style={styles.restaurantCard}>
          <View style={styles.imagePlaceholder}>
            <Text style={{ fontSize: 10, fontWeight: 'bold', color: '#6B7280' }}>Tezro Premium Kitchen (مینو کھولنے کے لیے کلک کریں)</Text>
          </View>
          <View style={styles.cardDetails}>
            <View style={{ flexDirection: 'row-reverse', justifyContent: 'space-between', alignItems: 'center' }}>
              <Text style={{ fontSize: 12, fontWeight: '900', color: '#1F2937' }}>ٹیزرو پریمیم کچن</Text>
              <Text style={{ fontSize: 10, fontWeight: '900', color: '#0D47A1' }}>⭐ 4.8</Text>
            </View>
            <Text style={{ fontSize: 9, fontWeight: 'bold', color: '#6B7280', textAlign: 'right', marginTop: 2 }}>بریانی، کڑاہی، فاسٹ فوڈ • 25 منٹ</Text>
          </View>
        </TouchableOpacity>

      </ScrollView>

      <FoodBottomNav 
        currentTab="menu" 
        setCurrentTab={(tab) => { if(tab === 'hospitality') alert('ہوسپیٹلیٹی پینل لوڈ ہو رہا ہے...'); }} 
        onBackToHome={handleBackToHome} 
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#F9FAFB' },
  content: { flex: 1, padding: 14 },
  promoBanner: { backgroundColor: '#0A192F', padding: 10, borderRadius: 8, marginBottom: 15 },
  promoText: { color: '#fff', fontSize: 10, fontWeight: '900', textAlign: 'center' },
  sectionTitle: { fontSize: 11, fontWeight: '900', color: '#1F2937', marginBottom: 10, borderRightWidth: 3, borderRightColor: '#0D47A1', paddingRight: 6 },
  squareCategoryCard: { width: 85, height: 85, backgroundColor: '#fff', borderWidth: 1, borderColor: '#E5E7EB', borderRadius: 12, padding: 6, alignItems: 'center', justifyContent: 'space-between', marginLeft: 10 },
  cardImage: { width: '100%', height: '70%', resizeMode: 'contain' },
  cardText: { fontSize: 9, fontWeight: '900', color: '#374151' },
  restaurantCard: { backgroundColor: '#fff', borderWidth: 1, borderColor: '#E5E7EB', borderRadius: 12, overflow: 'hidden', marginBottom: 15 },
  imagePlaceholder: { width: '100%', height: 120, backgroundColor: '#E5E7EB', justifyContent: 'center', alignItems: 'center' },
  cardDetails: { padding: 10 }
});
