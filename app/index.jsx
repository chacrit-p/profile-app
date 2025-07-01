import {
  Text,
  View,
  Image,
  Linking,
  TouchableOpacity,
  Alert,
} from "react-native";

export default function Profile() {
  const openURL = async (url) => {
    try {
      const supported = await Linking.canOpenURL(url);
      if (supported) {
        await Linking.openURL(url);
      } else {
        Alert.alert("ข้อผิดพลาด", `ไม่สามารถเปิด URL: ${url}`);
      }
    } catch (error) {
      Alert.alert("ข้อผิดพลาด", "เกิดปัญหาในการเปิด URL");
    }
  };

  const openGitHub = () => {
    openURL("https://github.com/chacrit-p");
  };

  const openFacebook = () => {
    const facebookUrl = "fb://profile/your.chacrit.p";
    const fallbackUrl = "https://www.facebook.com/your.chacrit.p/?locale=th_TH";

    Linking.canOpenURL(facebookUrl)
      .then((supported) => {
        if (supported) {
          return Linking.openURL(facebookUrl);
        } else {
          return Linking.openURL(fallbackUrl);
        }
      })
      .catch((err) => console.error("เกิดข้อผิดพลาด:", err));
  };

  const styles = {
    profileImage: {
      width: 160,
      height: 160,
      borderRadius: 80,
      marginLeft: "auto",
      marginRight: "auto",
      borderWidth: 3,
      borderColor: "#374151",
    },
    iconImage: {
      width: 20,
      height: 20,
    },
  };

  return (
    <View className="bg-gray-900 min-h-screen pt-4">
      <View className="container mx-auto py-12 px-6">
        <View className="mb-8">
          <View className="relative">
            <Image
              source={require("../assets/images/download.jpg")}
              style={styles.profileImage}
            />
          </View>
          <Text className="text-white text-2xl font-bold text-center mt-6">
            นาย ชาคริต พูลพิพิธ
          </Text>
          <Text className="text-gray-400 text-base text-center mt-2">
            653450507-9 • Computer Science • KKU
          </Text>
        </View>

        <View className="flex flex-row justify-center gap-4 mb-8">
          <TouchableOpacity
            className="bg-gray-800 px-4 py-3 rounded-lg flex flex-row items-center gap-3 border-t border-gray-700 shadow-md hover:bg-gray-700 transition-colors"
            onPress={openGitHub}
          >
            <Image
              style={styles.iconImage}
              source={require("../assets/images/github.svg")}
            />
            <Text className="text-gray-200 text-sm font-medium">GitHub</Text>
          </TouchableOpacity>

          <TouchableOpacity
            className="bg-gray-800 px-4 py-3 rounded-lg flex flex-row items-center gap-3 border-t border-gray-700 shadow-md  hover:bg-gray-700 transition-colors"
            onPress={openFacebook}
          >
            <Image
              style={styles.iconImage}
              source={require("../assets/images/facebook.webp")}
            />
            <Text className="text-gray-200 text-sm font-medium">
              Facebook
            </Text>
          </TouchableOpacity>
        </View>

        <View className="bg-gray-800 rounded-xl p-6 mb-6 border-t border-gray-700 shadow-md">
          <View className="flex flex-row items-center mb-4">
            <View className="w-1 h-6 bg-blue-500 rounded-full mr-3"></View>
            <Text className="text-white text-lg font-semibold">สกิลของฉัน</Text>
          </View>
          <View className="flex flex-row flex-wrap gap-2">
            {["HTML", "CSS", "JAVASCRIPT", "VUE3", "LARAVEL"].map(
              (skill, index) => (
                <View
                  key={index}
                  className="bg-blue-700 px-3 py-2 rounded-lg border-t border-blue-600 shadow-md"
                >
                  <Text className="text-blue-50 text-sm font-medium">
                    {skill}
                  </Text>
                </View>
              )
            )}
          </View>
        </View>

        <View className="bg-gray-800 rounded-xl p-6 border-t border-gray-700 shadow-md">
          <View className="flex flex-row items-center mb-4">
            <View className="w-1 h-6 bg-purple-500 rounded-full mr-3"></View>
            <Text className="text-white text-lg font-semibold">ความชอบ</Text>
          </View>
          <View className="flex flex-row gap-2">
            <View className="bg-purple-700 px-4 py-2 rounded-lg border border-purple-600">
              <Text className="text-purple-50 text-sm">🎵 ฟังเพลง</Text>
            </View>
            <View className="bg-purple-700 px-4 py-2 rounded-lg border border-purple-600">
              <Text className="text-purple-50 text-sm">🎮 เล่นเกม</Text>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
}
