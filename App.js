import { StatusBar } from 'expo-status-bar';
import { Component } from 'react';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

const MyStack = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen
                    name="Home"
                    Component={HomeScreen}
                    options={{ title: 'Home' }}
                />

                <Stack.Screen
                    name="Profile"
                    Component={ProfileScreen}
                    options={{ title: 'Profile' }}
                />
            </Stack.Navigator>
        </NavigationContainer>
        )
}

export default class App extends Component {
    constructor() {
        super();
        this.state = {
            usernameText: "",
        }
    }

    HomeScreen = ({ navigation, route }) => {
        let name;

        return (
            <View style={styles.container}>
                <TextInput
                    style={styles.textInput}
                    value={name}
                    placeholder={"User Name"}
                    onChangeText={newName => { name = newName; this.setState({ usernameText: name }) }}
                />
                <Button
                    title="Go to Profile"
                    onPress={() => { navigation.navigate('Profile', { profileName: name }) }}
                    />

                <StatusBar style="auto" />
            </View>
        )
    }

    ProfileScreen = ({ navigation, route }) => {

        return (
            <View style={styles.container}>
                <Text>Welcome to the profile screen</Text>
                <Text> We received {route.params.profileName} from Home.</Text>
                <Text> This is the name from the state variable: {this.state.usernameText}</Text>
                <StatusBar style="auto" />
            </View>
        )
    }

    render() {
        
        return (
            <NavigationContainer>
                <Stack.Navigator>
                    <Stack.Screen
                        name="Home"
                        component={this.HomeScreen}
                        options={{ title: 'Home' }}
                    />

                    <Stack.Screen
                        name="Profile"
                        component={this.ProfileScreen}
                        options={{ title: 'Profile' }}
                    />
                </Stack.Navigator>
            </NavigationContainer>
        );
    }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    },
  textInput: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
});
