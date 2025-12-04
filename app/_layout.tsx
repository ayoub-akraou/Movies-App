import { SafeAreaView } from "react-native-safe-area-context";
import "../global.css";
import { StatusBar } from "expo-status-bar";
import { Platform } from "react-native";
import { Menu } from "lucide-react-native";
const isIOS = Platform.OS === "ios";

export default function RootLayout() {
	return (
		<SafeAreaView className={`flex-1 bg-emerald-400 ${isIOS ? "-mb-2" : "-mb-3"}`}>
			<Menu />
			<StatusBar />
		</SafeAreaView>
	);
}
