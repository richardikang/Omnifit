import { Box, HStack, VStack } from "native-base";
import React from "react";
import { View, Text, Button, StyleSheet } from "react-native";
import {Icon} from "react-native-elements"

  
export default function Home() {

    return (
        <View>
            <HStack paddingTop="20">
                <Box paddingLeft="5">
                    <Icon 
                        name='wifi'
                        type='material-icons'
                        color='green'
                    />
                    <Text style={styles.wifi}>Online</Text>
                </Box>
                <Box justifyContent="center" paddingLeft="70">
                    <Text style={styles.virtual}>Virtual Card</Text>
                </Box>
            </HStack>
            <VStack>
                <Box shadow="7" margin="60" alignItems="center" width="275" height="200" marginTop="75" rounded="lg" _dark={{
                    backgroundColor: "gray.100"
                }}>
                    <Box alignItems="center" backgroundColor="blue.500" width="272" height="150" rounded="md" shadow="5" padding="2">
                        <Text style={{marginTop: 50, color: "white", fontSize: 25, fontWeight: "bold"}}>OmnyFit Unlimited</Text>
                    </Box>
                    <Box backgroundColor="red.500" width="275" height="47" alignItems="center" rounded="sm">
                        <Text style={{marginTop: 10, color: "white"}}>Press to use card</Text>
                    </Box>
                </Box>
            </VStack>
            <HStack>
                <VStack>
                    <Text style={styles.name}>Jane Doe</Text>
                    <Text style={styles.subheading}>OmnyFit Unlimited</Text>
                    <Text style={styles.subheading}>User ID</Text>
                    <HStack marginTop="1" marginLeft="4">
                        <Button style={styles.button} title="Active" />
                        <Text style={styles.date}>From 01.01.2024</Text>
                    </HStack>
                </VStack>
                <Box flex="3" width="0.1" marginLeft="8">
                    <Icon
                        name='user'
                        type='font-awesome'
                        size={110} 
                        color={'black'}              
                    />
                </Box>
            </HStack>  
        </View>
    )
}

const styles = StyleSheet.create({
    wifi: {
        color: "green"
    },

    virtual: {
        fontSize: 25, 
        fontWeight: "bold"
    },

    name: {
        marginLeft: 17, 
        fontSize: 30, 
        fontWeight: "bold"
    },
    subheading: {
        marginTop: 5,
        marginLeft: 18
    },
    date: {
        marginTop: 20,
        marginLeft: 2
    },
    button: {
       borderRadius: 15,
    }
});

