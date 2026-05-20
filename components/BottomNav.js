import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

export default function FoodBottomNav({ currentTab, setCurrentTab, onBackToHome }) {
  const tabs = [
    { id: 'menu', label: 'فوڈ مینو', icon: 'restaurant_menu' },
    { id: 'orders', label: 'آرڈرز', icon: 'receipt_long' },
    { id: 'hospitality', label: 'ہوسپیٹلیٹی', icon: 'hotel' },
  ];

  return (
    <View style={{ flexDirection: 'row', backgroundColor: '#FFFFFF', borderTopWidth: 1, borderTopColor: '#E5E7EB', height: 60, alignItems: 'center', justifyContent: 'space-around', paddingBottom: 5 }}>
      {tabs.map((tab) => {
        const isActive = currentTab === tab.id;
        return (
          <TouchableOpacity 
            key={tab.id} 
            onClick={() => setCurrentTab(tab.id)}
            style={{ alignItems: 'center', justifyContent: 'center', flex: 1 }}
          >
            <MaterialIcons name={tab.icon} size={20} color={isActive ? '#0D47A1' : '#6B7280'} />
            <Text style={{ fontSize: 9, fontWeight: isActive ? '900' : 'bold', color: isActive ? '#0D47A1' : '#6B7280', marginTop: 2 }}>{tab.label}</Text>
          </TouchableOpacity>
        );
      })}

      {/* 🚀 ہوم ریپو پر واپس جانے کا بیک لنک بٹن */}
      <TouchableOpacity 
        onClick={onBackToHome}
        style={{ alignItems: 'center', justifyContent: 'center', flex: 1, borderLeftWidth: 1, borderLeftColor: '#F3F4F6' }}
      >
        <MaterialIcons name="grid_view" size={20} color="#DC2626" />
        <Text style={{ fontSize: 9, fontWeight: '900', color: '#DC2626', marginTop: 2 }}>ٹیزرو ہوم</Text>
      </TouchableOpacity>
    </View>
  );
}
