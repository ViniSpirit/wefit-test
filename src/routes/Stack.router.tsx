import {
  createNativeStackNavigator,
  NativeStackScreenProps,
} from "@react-navigation/native-stack"
import { Text } from "react-native"
import BackHeader from "../components/BackHeader"
import { Repository } from "../context/RepositoryContext"
import Details from "../screens/Details"
import theme from "../theme"
import BottomRouter from "./Bottom.router"

export type StackRootParamList = {
  BottomRouter: undefined
  Details: Repository
}

export type NavigationProps = NativeStackScreenProps<
  StackRootParamList,
  "Details",
  "BottomRouter"
>

const Stack = createNativeStackNavigator<StackRootParamList>()

export default function StackRouter() {
  return (
    <Stack.Navigator
      initialRouteName="BottomRouter"
      screenOptions={{
        header: ({ navigation, options }) => (
          <BackHeader navigation={navigation} title={options.title} />
        ),
      }}
    >
      <Stack.Screen
        name="BottomRouter"
        component={BottomRouter}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Details"
        component={Details}
        options={{
          headerStyle: {
            backgroundColor: theme.colors.BLACK,
          },
          headerTintColor: theme.colors.WHITE,
          title: "Detalhes",
        }}
      />
    </Stack.Navigator>
  )
}
