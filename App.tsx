import { StatusBar } from 'expo-status-bar';
import "@/global.css";
import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { AppNavigator } from '@/app/navigations';
import { persistor, store } from "@/store/store";
import { Provider } from 'react-redux';
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { PersistGate } from 'redux-persist/integration/react';
import { GluestackUIProvider } from './components/ui/gluestack-ui-provider';

export default function App() {
  return (
    <Provider store={store}>
      <GestureHandlerRootView>
        <GluestackUIProvider mode='light'>
          <PersistGate loading={null} persistor={persistor}>
            <StatusBar style="auto" />
            <NavigationContainer>
              <AppNavigator />
            </NavigationContainer>
          </PersistGate>
        </GluestackUIProvider>
      </GestureHandlerRootView>
    </Provider>
  );
}
