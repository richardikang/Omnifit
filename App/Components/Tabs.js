import { Icon } from "react-native-elements"
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "../Pages/Home";
import Search from "../Pages/Search"
import { View } from "react-native";

const Tab = createBottomTabNavigator();

export default function Tabs() {

    
    return (
            <Tab.Navigator>
                <Tab.Screen
                name="Home"
                component={Home}
                options={{
                    tabBarIcon: ({focused})=>{
                        return (
                            <View style={{alignItems: "center", justifyContent: "center"}}>
                                <Icon name="address-card" type="font-awesome" size={35} color={focused ? "#16247d": "#111"} />
                                <Text>Virtual Card</Text>
                            </View>
                        )
                    }
                }}
                />
            </Tab.Navigator>
        // <Container>

        //             <Icon
        //                 name='address-card'
        //                 type='font-awesome'
        //                 size={35}               
        //             />
        //             <Text>Virtual Card</Text>
        //         </Box>
        //         <Box marginLeft="10">
        //             <Icon
        //                 name='search'
        //                 type='font-awesome'
        //                 size={35}
        //                 onPress={() => navigation.navigate("Search")}               
        //             />
        //             <Text>Search</Text>
        //         </Box>
        //         <Box marginLeft="10">
        //             <Icon
        //                 name='fitness-center'
        //                 type='material-icons'
        //                 size={36}               
        //             />
        //             <Text>Workout</Text>
        //         </Box>
        //         <Box marginLeft="10">
        //             <Icon
        //                 name='more-horiz'
        //                 type='material-icons'
        //                 size={35}               
        //             />
        //             <Text>More</Text>
        //         </Box>

        // </Container>
    )
}