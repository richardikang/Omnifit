import { View, Text } from "react-native";
import Map from '../Components/Map';
import { Button } from "react-native-elements";

export default function MapView({navigation}) {
    return (
        <View>
            <View>
                <Button 
                title="Back"
                onPress={() => 
                navigation.navigate("Search")  
                }
                style={{borderColor: "blue"}} />
            </View>
            <Map />
        </View>
    )
}