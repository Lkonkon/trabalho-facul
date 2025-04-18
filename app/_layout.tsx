import { Tabs } from 'expo-router';
import { FontAwesome } from '@expo/vector-icons';

export default function Layout() {
  return (
    <Tabs screenOptions={{
      tabBarActiveTintColor: '#007AFF',
      tabBarInactiveTintColor: '#8E8E93',
    }}>
      <Tabs.Screen
        name="index"
        options={{
          headerShown: false,
          title: 'Início',
          tabBarIcon: ({ color }: { color: string }) => <FontAwesome name="home" size={24} color={color} />,
        }}
      />
      <Tabs.Screen
        name="categories"
        options={{
          headerShown: false,
          title: 'Categorias',
          tabBarIcon: ({ color }: { color: string }) => <FontAwesome name="list" size={24} color={color} />,
        }}
      />
      <Tabs.Screen
        name="about"
        options={{
          headerShown: true,
          title: 'Sobre',
          tabBarIcon: ({ color }: { color: string }) => <FontAwesome name="user" size={24} color={color} />,
        }}
      />
      <Tabs.Screen
        name="product"
        options={{
          href: null,
        }}
      />
    </Tabs>
  );
}
