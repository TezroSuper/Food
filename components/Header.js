import React from 'react';
import { View, Text, TextInput, Image, TouchableOpacity } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

export default function FoodHeader() {
  return (
    <View style={{ backgroundColor: '#fff', borderBottomWidth: 1, borderBottomColor: '#E5E7EB', padding: 12, paddingTop: 40 }}>
      {/* ٹاپ رو: لوگو اور کارٹ */}
      <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 10 }}>
        <View style={{ flexDirection: 'row', alignItems: 'center', gap: 6 }}>
          <Image 
            source={require('../assets/logo.png')} 
            style={{ height: 32, width: 80, resizeMode: 'contain' }} 
          />
          <View style={{ backgroundColor: '#0D47A1', paddingHorizontal: 6, paddingVertical: 2 }}>
            <Text style={{ color: '#fff', fontSize: 8, fontWeight: '900', textTransform: 'uppercase' }}>FOOD</Text>
          </View>
        </View>

        <TouchableOpacity style={{ position: 'relative', padding: 4 }}>
          <MaterialIcons name="shopping-bag" size={22} color="#1F2937" />
          <View style={{ position: 'absolute', top: 0, right: 0, backgroundColor: '#DC2626', borderRadius: 10, width: 14, height: 14, justifyContent: 'center', alignItems: 'center' }}>
            <Text style={{ color: '#fff', fontSize: 8, fontWeight: '900' }}>2</Text>
          </View>
        </TouchableOpacity>
      </View>

      {/* سرچ بار: جیومیٹرک لک */}
      <View style={{ flexDirection: 'row', gap: 8, marginTop: 4 }}>
        <View style={{ flex: 1, backgroundColor: '#F3F4F6', flexDirection: 'row', alignItems: 'center', paddingHorizontal: 10, height: 36, borderRadius: 8, borderWidth: 1, borderColor: 'transparent' }}>
          <MaterialIcons name="search" size={18} color="#9CA3AF" style={{ marginRight: 6 }} />
          <TextInput 
            placeholder="کھانا یا ریسٹورنٹ تلاش کریں..." 
            placeholderTextColor="#9CA3AF"
            style={{ flex: 1, fontSize: 11, fontWeight: 'bold', color: '#1F2937', textAlign: 'right' }}
          />
        </View>
        <TouchableOpacity style={{ backgroundColor: '#F3F4F6', width: 36, height: 36, justifyContent: 'center', alignItems: 'center', borderRadius: 8 }}>
          <MaterialIcons name="tune" size={18} color="#4B5563" />
        </TouchableOpacity>
      </View>
    </View>
  );
}
