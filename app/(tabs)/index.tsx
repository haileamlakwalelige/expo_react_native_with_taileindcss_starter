/* eslint-disable import/no-unresolved */
import { Text, View, Linking, Pressable, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function HomeScreen() {
  return (
    <SafeAreaView className="flex-1 bg-black">
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        <View className="flex-1 justify-center px-6 py-10">
          <Text className="font-extrabold text-white text-4xl leading-tight mb-6">
            Building Digital{"\n"}Solutions That Drive{"\n"}Impact
          </Text>
          <Text className="text-base font-light text-gray-200 mb-8">
            Hi there!👋 I&apos;m <Text className="text-blue-600">Haileamlak Waleligne</Text>, a Full-Stack Developer. I specialize in building modern web and mobile applications using technologies like React.js, Next.js (both frontend & backend), React Native, Flutter, HTML, CSS, JavaScript, Tailwind CSS on the frontend — and Node.js, Express.js, and Next.js API routes on the backend. I&apos;m also a strong team player with excellent communication skills, always striving to collaborate effectively and deliver high-quality results.

          </Text>
          <View className="bg-gray-900 rounded-2xl p-6 shadow-lg w-full mb-4">
            <Text className="text-lg font-semibold text-white mb-4">
              Contact Information
            </Text>
            <View className="space-y-2">
              <Text className="text-gray-300">
                <Text className="font-semibold text-white">Email:</Text>{" "}
                haileopie22@gmail.com
              </Text>
              <Text className="text-gray-300">
                <Text className="font-semibold text-white">Phone:</Text> +251
                911 11 22 33
              </Text>
              <Text className="text-gray-300">
                <Text className="font-semibold text-white">WhatsApp:</Text> +251
                939 100 302
              </Text>
              <Text className="text-gray-300">
                <Text className="font-semibold text-white">Location:</Text>{" "}
                Addis Ababa, Ethiopia
              </Text>
              <Pressable
                onPress={() =>
                  Linking.openURL("https://linkedin.com/in/haileamlakwaleligne")
                }
              >
                <Text className="text-blue-400 underline">
                  LinkedIn: https://www.linkedin.com/in/haileamlak-waleligne/
                </Text>
              </Pressable>
              <Pressable
                onPress={() =>
                  Linking.openURL("https://github.com/haileamlakwalelige")
                }
              >
                <Text className="text-blue-400 underline">
                  GitHub: github.com/haileamlakwalelige
                </Text>
              </Pressable>
              <Pressable
                onPress={() => Linking.openURL("https://haileopia.vercel.app")}
              >
                <Text className="text-blue-400 underline">
                  Portfolio: haileopia.vercel.app
                </Text>
              </Pressable>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
