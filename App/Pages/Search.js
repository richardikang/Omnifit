import { View,StyleSheet, Image } from "react-native"
import { Box, HStack, VStack, ScrollView, Text, Container } from "native-base"
import { Searchbar } from 'react-native-paper';
import { Icon } from "react-native-elements";

const Sauna = require("../Assets/sauna.png");
const Steam = require("../Assets/steam-room.png");
const Jacuzzi = require("../Assets/hot-tub.png");
const Cycling = require("../Assets/stationary-bike.png");
const Crossfit = require("../Assets/weightlifter-frontal-silhouette.png");
const Squash = require("../Assets/squash.png");
const Badminton = require("../Assets/badminton.png");
const Basketball = require("../Assets/basketball-hoop.png");
const Tennis = require("../Assets/tennis.png");
const Pingpong = require("../Assets/table-tennis.png");
const Volleyball = require("../Assets/volleyball.png");
const Boxing = require("../Assets/boxing.png");
const Martialarts = require("../Assets/opponent.png");
const Batting = require("../Assets/player.png");
const Dancing = require("../Assets/dancing.png");
const Aerobics = require("../Assets/class.png");
const Yoga = require("../Assets/meditation.png");
const Taichi = require("../Assets/tai-chi-chuan-silhouette.png");
const Billiard = require("../Assets/billiard.png");
const Bowling = require("../Assets/bowling-game.png");
const Iceskate = require("../Assets/ice-skate.png");
const Rollerskate = require("../Assets/rollerskate.png");

state = {
    search: '',
};

updateSearch = (search) => {
    this.setState({ search });
};


export default function Search({navigation}) {
 
        const { search } = this.state;
  
        return(
            <View style={styles.container}>
                <Box marginTop="20">
                    <Text style={styles.facilities}>Facilities</Text>
                </Box>
                <HStack>    
                    <View style={styles.view}>
                        <Searchbar
                            placeholder="Search"
                            onChangeText={this.updateSearch}
                            value={search}
                            style={styles.searchbar}
                        />
                    </View>
                    <View style={styles.map}>
                        <Icon
                            name="room"
                            type="material-icons"
                            size={25}
                            color="red"
                            onPress={() => 
                                navigation.navigate("Facilities")
                            }
                        />
                        <Text>Map View</Text>
                    </View>
                </HStack>
                <View>
                    <Text style={styles.filter}>Filter By Amenity</Text>
                        <Container flex="1">
                            <ScrollView h="100">
                                <VStack>
                                    <HStack>
                                        <Box alignItems="center">
                                            <Icon
                                                name="fitness-center"
                                                type="material-icons"
                                                size={25}
                                            />
                                            <Text>Fitness</Text>
                                        </Box>
                                        <Box alignItems="center" marginLeft="5"> 
                                            <Icon
                                                name="pool"
                                                type="material-icons"
                                                size={25}
                                            />
                                            <Text>Swimming</Text>
                                            <Text>Pool</Text>
                                        </Box>
                                        <Box alignItems="center" marginLeft="5">
                                            <Image source={Sauna} style={styles.img2} />
                                            <Text>Sauna</Text>
                                        </Box>
                                        <Box alignItems="center" marginLeft="5">
                                            <Image source={Steam} style={styles.img2} /> 
                                            <Text>Steam</Text> 
                                            <Text>Room</Text>
                                        </Box>
                                    </HStack>
                                    <HStack>
                                        <Box alignItems="center" marginTop="5">
                                            <Image source={Jacuzzi} style={styles.img} /> 
                                            <Text>Jacuzzi</Text> 
                                        </Box>
                                        <Box alignItems="center" marginLeft="7" marginTop="5">
                                            <Image source={Cycling} style={styles.img} /> 
                                            <Text>Cycling</Text> 
                                        </Box>
                                        <Box alignItems="center" marginLeft="6" marginTop="5">
                                            <Image source={Crossfit} style={styles.img} /> 
                                            <Text>Crossfit</Text> 
                                        </Box>
                                        <Box alignItems="center" marginLeft="5" marginTop="5">
                                            <Image source={Squash} style={styles.img} /> 
                                            <Text>Squash</Text> 
                                        </Box>
                                    </HStack>
                                    <HStack>
                                        <Box alignItems="center" marginTop="6">
                                            <Image source={Badminton} style={styles.img2} /> 
                                            <Text>Badminton</Text> 
                                        </Box>
                                        <Box alignItems="center" marginLeft="5" marginTop="5">
                                            <Image source={Yoga} style={styles.img} /> 
                                            <Text>Yoga</Text>
                                        </Box>
                                        <Box alignItems="center" marginLeft="5" marginTop="5">
                                            <Image source={Taichi} style={styles.img} /> 
                                            <Text>Tai-chi</Text>
                                        </Box>
                                        <Box alignItems="center" marginLeft="5" marginTop="5">
                                            <Image source={Pingpong} style={styles.img} /> 
                                            <Text>Ping-Pong</Text> 
                                        </Box>
                                    </HStack>
                                    <HStack>
                                        <Box alignItems="center" marginTop="5">
                                            <Image source={Volleyball} style={styles.img} /> 
                                            <Text>Volleyball</Text> 
                                        </Box>
                                        <Box alignItems="center" marginLeft="5" marginTop="5">
                                            <Image source={Boxing} style={styles.img} /> 
                                            <Text>Boxing</Text> 
                                        </Box>
                                        <Box alignItems="center" marginLeft="5" marginTop="5">
                                            <Image source={Martialarts} style={styles.img} /> 
                                            <Text>Martial</Text> 
                                            <Text>Arts</Text>
                                        </Box>
                                        <Box alignItems="center" marginLeft="5" marginTop="5">
                                            <Image source={Batting} style={styles.img} /> 
                                            <Text>Batting</Text> 
                                            <Text>Cage</Text>
                                        </Box>
                                    </HStack>
                                    <HStack>
                                        <Box alignItems="center" marginTop="5">
                                            <Image source={Dancing} style={styles.img2} /> 
                                            <Text>Dancing</Text>
                                        </Box>
                                        <Box alignItems="center" marginLeft="5" marginTop="5">
                                            <Image source={Aerobics} style={styles.img2} /> 
                                            <Text>Aerobics</Text>
                                        </Box>
                                        <Box alignItems="center"  marginLeft="5" marginTop="5">
                                            <Image source={Basketball} style={styles.img} /> 
                                            <Text>Basket</Text> 
                                            <Text>Ball</Text>
                                        </Box>
                                        <Box alignItems="center" marginLeft="5" marginTop="5">
                                            <Image source={Tennis} style={styles.img} /> 
                                            <Text>Tennis</Text> 
                                        </Box>
                                    </HStack>
                                    <HStack>
                                        <Box alignItems="center" marginTop="5">
                                            <Image source={Billiard} style={styles.img} /> 
                                            <Text>Billiard</Text>
                                        </Box>
                                        <Box alignItems="center" marginLeft="5" marginTop="5">
                                            <Image source={Bowling} style={styles.img} /> 
                                            <Text>Bowling</Text> 
                                        </Box>
                                        <Box alignItems="center" marginLeft="5" marginTop="5">
                                            <Image source={Iceskate} style={styles.img} /> 
                                            <Text>Ice</Text>
                                            <Text>Skating</Text>
                                        </Box>
                                        <Box alignItems="center" marginLeft="5" marginTop="5">
                                            <Image source={Rollerskate} style={styles.img} /> 
                                            <Text>Roller</Text>
                                            <Text>Skating</Text>
                                        </Box>
                                    </HStack>
                                </VStack>
                            </ScrollView>
                        </Container>   
                    </View>
                </View>
            ) 
        }

const styles = StyleSheet.create({
    container: {
        alignItems: "center",
    },

    view: {
        paddingTop: 20,
        width: "80%",
        alignContent: "center"
    },

    facilities: {
        fontWeight: "bold", 
        fontSize: 26,
        paddingTop: 5
    },

    map: {
        paddingHorizontal: 5,
        paddingVertical: 23
    },

    filter: {
        paddingHorizontal: 20
    },

    scroll: {
        flex: 1,
        padding: 40,
        paddingEnd: 20,
        paddingBottom: 50
    },

    amenity: {
        alignItems: "center"
    },

    img: {
        width: 30,
        height: 30,
    },

    img2: {
        width: 25,
        height: 25,
    }

})