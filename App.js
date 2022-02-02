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
                    name="Hallpass"
                    Component={ProfileScreen}
                    options={{ title: 'Hallpass' }}
                />
            </Stack.Navigator>
        </NavigationContainer>
        )
}

export default class App extends Component {
    constructor() {
        super();
        this.state = {
            nameText: "",
            nounText: "",
            eventText: "",
        }
    }

    HomeScreen = ({ navigation, route }) => {
        let name;
        let noun;
        let userEvent;

        return (
            <View style={styles.container}>
                <TextInput
                    style={styles.textInput}
                    value={name}
                    placeholder={"Name"}
                    onChangeText={newName => { name = newName; this.setState({ nameText: name }) }}
                />
                <TextInput
                    style={styles.textInput}
                    value={noun}
                    placeholder={"Noun"}
                    onChangeText={newNoun => { noun = newNoun; this.setState({ nounText: noun }) }}
                />
                <TextInput
                    style={styles.textInput}
                    value={userEvent}
                    placeholder={"An Event"}
                    onChangeText={newUserEvent => { userEvent = newUserEvent; this.setState({ eventText: userEvent }) }}
                />
                <Button
                    title="Make my hall pass"
                    onPress={() => { navigation.navigate('Hallpass', { profileName: name }) }}
                    />

                <StatusBar style="auto" />
            </View>
        )
    }

    ProfileScreen = ({ navigation, route }) => {

        return (
            <View style={styles.container}>
                <View style={styles.container}>
                    <Text style={styles.hallPassVertical}> Hall Pass</Text>
                </View>
                <View style={styles.container}>
                    <Text> We received {route.params.profileName} from Home.</Text>
                    <Text> This is the name from the state variable: {this.state.usernameText}</Text>
                </View>
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
                        name="Hallpass"
                        component={this.ProfileScreen}
                        options={{ title: 'Hallpass' }}
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
    width: 300,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
  hallPassVertical: {
      transform: [{rotate: '270deg'}],
      fontSize: 75,
      fontWeight: 'bold',
      flex: 1,
      flexDirection: 'column',
  },
});
