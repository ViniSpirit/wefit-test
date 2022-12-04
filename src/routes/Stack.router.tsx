import { createNativeStackNavigator } from "@react-navigation/native-stack"
import Details from "../screens/Details"
import theme from "../theme"
import BottomRouter from "./Bottom.router"

const Stack = createNativeStackNavigator()

export default function StackRouter() {
  return (
    <Stack.Navigator initialRouteName="BottomRouter">
      <Stack.Screen
        name="BottomRouter"
        component={BottomRouter}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Detalhes"
        component={Details}
        options={{
          headerStyle: {
            backgroundColor: theme.colors.BLACK,
          },
          headerTintColor: theme.colors.WHITE,
        }}
      />
    </Stack.Navigator>
  )
}
