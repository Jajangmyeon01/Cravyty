import {
  View,
  Text,
  TextInput,
  ScrollView,
  TouchableOpacity,
  Image,
  Modal,
} from 'react-native';
import React, { useState, useEffect } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { StatusBar } from 'expo-status-bar';
import Icon from 'react-native-vector-icons/Feather';
import Categories from '../components/categories';
import FeaturedRow from '../components/featuredRow';
import { featured } from '../constants/index.js';
import { useNavigation } from '@react-navigation/native';

const mapToGeneralCategory = (specificCategory = '') => {
  const normalized = specificCategory.toLowerCase();

  if (
    normalized.includes('burger') ||
    normalized.includes('sandwich')
  ) return 'Burgers';

  if (
    normalized.includes('drink') ||
    normalized.includes('beverage') ||
    normalized.includes('halo-halo')
  ) return 'Drinks';

  if (
    normalized.includes('dessert') ||
    normalized.includes('ice cream') ||
    normalized.includes('sweet')
  ) return 'Desserts';

  if (
    normalized.includes('meal') ||
    normalized.includes('chicken') ||
    normalized.includes('rice') ||
    normalized.includes('noodle') ||
    normalized.includes('bento') ||
    normalized.includes('platter') ||
    normalized.includes('lauriat') ||
    normalized.includes('siopao') ||
    normalized.includes('siomai') ||
    normalized.includes('beef') ||
    normalized.includes('bulgogi') ||
    normalized.includes('donburi') ||
    normalized.includes('seafood') ||
    normalized.includes('other')
  ) return 'Meals';

  return 'Meals';
};

export default function HomeScreen() {
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredDishes, setFilteredDishes] = useState([]);
  const [priceFilter, setPriceFilter] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [modalVisible, setModalVisible] = useState(false);
  const navigation = useNavigation();

  const allDishes = featured.flatMap(feature =>
    feature.restaurants.flatMap(restaurant =>
      restaurant.dishes.map(dish => ({
        ...dish,
        restaurantName: restaurant.name,
        originalCategory: dish.category || 'Uncategorized',
        category: mapToGeneralCategory(dish.category),
      }))
    )
  );

  useEffect(() => {
    const query = searchQuery.trim().toLowerCase();
    const maxPrice = parseFloat(priceFilter);
    let results = allDishes;

    if (query.length > 0) {
      results = results.filter(dish =>
        dish.name.toLowerCase().includes(query) ||
        dish.restaurantName.toLowerCase().includes(query) ||
        dish.price.toString().startsWith(query)
      );
    }

    if (selectedCategory !== 'All') {
      results = results.filter(dish => dish.category === selectedCategory);
    }

    if (!isNaN(maxPrice)) {
      results = results.filter(dish => dish.price <= maxPrice);
    }

    setFilteredDishes(results);
  }, [searchQuery, priceFilter, selectedCategory]);

  const resetFilters = () => {
    setSearchQuery('');
    setPriceFilter('');
    setSelectedCategory('All');
  };

  const showResults =
    searchQuery.trim().length > 0 ||
    priceFilter.trim().length > 0 ||
    selectedCategory !== 'All';

  return (
    <SafeAreaView className="bg-white flex-1">
      <StatusBar barStyle="dark-content" />

      <View className="flex-row items-center justify-between px-4 pb-2">
        <TouchableOpacity onPress={resetFilters}>
          <Text className="text-xl font-bold text-yellow-500">Explore Foods</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setModalVisible(true)} className="p-3 rounded-full">
          <Icon name="filter" size={25} strokeWidth={2.5} color="#fbbf24" />
        </TouchableOpacity>
      </View>

      {/* Modal */}
      <Modal visible={modalVisible} animationType="slide" onRequestClose={() => setModalVisible(false)}>
        <SafeAreaView className="flex-1 bg-white p-4">
          <TouchableOpacity onPress={() => setModalVisible(false)} className="flex-row items-center mb-4">
            <Icon name="arrow-left" size={20} color="#fbbf24" />
            <Text className="ml-2 text-yellow-500 font-semibold">Back</Text>
          </TouchableOpacity>

          <Text className="text-lg font-bold mb-4">Search & Filters</Text>

          <View className="flex-row items-center border border-gray-300 rounded-full px-4 py-2 mb-4">
            <Icon name="search" size={20} color="#fbbf24" />
            <TextInput
              placeholder="Search food, restaurant, or price..."
              value={searchQuery}
              onChangeText={setSearchQuery}
              className="ml-2 flex-1"
            />
          </View>

          <TextInput
            placeholder="Max Price (optional)"
            keyboardType="numeric"
            value={priceFilter}
            onChangeText={setPriceFilter}
            className="border border-gray-300 rounded-full px-4 py-2 mb-4"
          />

          <Text className="font-semibold mb-2">Select Category:</Text>
          <ScrollView horizontal showsHorizontalScrollIndicator={false} className="mb-4" contentContainerStyle={{ paddingHorizontal: 10 }}>
            {['All', 'Meals', 'Burgers', 'Drinks', 'Desserts'].map((category, index) => {
              const isSelected = selectedCategory === category;
              return (
                <View key={index} style={{ marginRight: 10 }}>
                <TouchableOpacity
                  onPress={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-full justify-center items-center ${
                    isSelected ? 'bg-yellow-400' : 'bg-gray-200'
                  }`}
                  style={{ maxHeight: 40 }}
                >
                  <Text
                    className={`text-sm font-medium ${
                      isSelected ? 'text-white' : 'text-gray-700'
                    }`}
                    numberOfLines={1}
                  >
                    {category}
                  </Text>
                </TouchableOpacity>      
                </View>
              );
            })}
          </ScrollView>

          <TouchableOpacity
            onPress={() => setModalVisible(false)}
            className="mt-auto bg-yellow-400 py-3 rounded-full"
          >
            <Text className="text-center text-white font-bold text-lg">Apply Filters</Text>
          </TouchableOpacity>
        </SafeAreaView>
      </Modal>

      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{ paddingBottom: 100 }}>
        {showResults ? (
          <View className="px-4">
            {/* Updated here: Go back to filters instead of resetting */}
            <TouchableOpacity onPress={() => setModalVisible(true)} className="flex-row items-center mb-2">
              <Icon name="arrow-left" size={18} color="#fbbf24" />
              <Text className="ml-2 text-yellow-500 font-semibold">Back to Search & Filters</Text>
            </TouchableOpacity>

            <Text className="text-lg font-bold mb-2">Search Results</Text>
            {filteredDishes.length > 0 ? (
              filteredDishes.map((dish, index) => (
                <TouchableOpacity
                  key={index}
                  onPress={() => navigation.navigate('FoodDetails', dish)}
                  className="flex-row items-center bg-white p-3 mb-2 rounded-xl shadow"
                >
                  <Image source={dish.image} className="w-20 h-20 rounded-lg" />
                  <View className="ml-4 flex-1">
                    <Text className="text-lg font-semibold">{dish.name}</Text>
                    <Text className="text-sm text-gray-500">{dish.description}</Text>
                    <Text className="text-sm text-gray-700 mt-1">₱{dish.price}</Text>
                    <Text className="text-xs text-gray-400 italic mt-0.5">From {dish.restaurantName}</Text>
                    <Text className="text-xs text-gray-400 mt-0.5">Category: {dish.category}</Text>
                  </View>
                </TouchableOpacity>
              ))
            ) : (
              <Text className="text-gray-500">No matching results.</Text>
            )}
          </View>
        ) : (
          <>
            <Categories selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory} />
            <View className="mt-5">
              {featured.map((item, index) => (
                <FeaturedRow
                  key={index}
                  title={item.title}
                  restaurants={item.restaurants}
                  description={item.description}
                />
              ))}
            </View>
          </>
        )}
      </ScrollView>
    </SafeAreaView>
  );
}
