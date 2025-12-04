import { SafeAreaView } from "react-native-safe-area-context";
import "../global.css";
import { StatusBar } from "expo-status-bar";
import { Platform, View } from "react-native";
import { Stack } from "expo-router";
import Header from "../components/Header";

const isIOS = Platform.OS === "ios";

export default function RootLayout() {
	return (
		<>
			<StatusBar style="light" />
			<SafeAreaView className={`flex-1 bg-black ${isIOS ? "-mb-2" : "-mb-3"}`}>
				<Header />
				<View className="bg-black text-white">
					<Stack screenOptions={{ headerShown: false }} />
				</View>
			</SafeAreaView>
		</>
	);
}
