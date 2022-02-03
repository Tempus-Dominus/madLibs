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
        var today = new Date(),
        date = today.getMonth() + '/' + today.getDate() + '/' + today.getFullYear();
        super();
        this.state = {
            nameText: "",
            nounText: "",
            eventText: "",
            currentDate: date,

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
            <View style={styles.hallPassContainer}>
                <View style={styles.hallPassVertical}>
                    <Text style={styles.hallPassVerticalText}> Hall Pass</Text>
                </View>
                <View style={styles.hallPassHorizontal}>
                    <View style={styles.libTitle}>
                        <Text style={styles.libText}> Mad Libs</Text>
                    </View>
                    <View style={styles.libBody}>
                        <Text style={styles.libDate}> Date: <Text style={[{textDecorationLine: 'underline',}]}>{this.state.currentDate}</Text></Text>
                        <Text style={styles.libName}><View style={styles.underline}><Text style={styles.fillBlanks}>{this.state.nameText}</Text></View> is too cool</Text>
                        <Text style={[{fontSize: 10, marginLeft: 60,}]}>NAME</Text>
                        <Text style={styles.libNoun}>for <View style={styles.underline}><Text style={styles.fillBlanks}>{this.state.nounText}</Text></View> class.</Text>
                        <Text style={[{fontSize: 10, marginLeft: 90,}]}>NOUN</Text>
                        <Text style={styles.libEvent}>Instead, he/she will be</Text>
                        <Text style={styles.libEvent}>attending the <View style={styles.underline}><Text style={styles.fillBlanks}>{this.state.eventText}</Text></View></Text>
                        <Text style={[{fontSize: 10, marginLeft: 180,}]}>EVENT</Text>
                    </View>
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
    flex: 0,
    width: '30%',
    height: '100%',
    //borderWidth: 1,
    flexWrap: 'wrap',
    backgroundColor: '#fff',
    justifyContent: 'flex-end',
    },
  hallPassHorizontal: {
    flex: 1,
    flexDirection: 'column',
    //borderWidth: 1,
    backgroundColor: '#fff',
    justifyContent: 'flex-end',
    },
  libTitle: {
    width: '100%',
    height: '10%',
    //borderWidth: 1,
  },
  libText: {
    fontSize: 40,
    fontWeight: 'bold',
    justifyContent: 'center',
    textAlign: 'center',
  },
  libBody: {
    width: '100%',
    height: '90%',
    //borderWidth: 1,
  },
  libDate: {
    fontSize: 20,
    paddingTop: 20,
  },
  libName: {
    fontSize: 20,
    paddingTop: 35,
    paddingLeft: 20,
  },
  libNoun: {
    fontSize: 20,
    paddingTop: 35,
    paddingLeft: 20,
  },
  libEvent: {
    fontSize: 20,
    paddingTop: 35,
    paddingLeft: 20,
  },
  hallPassVerticalText: {
      transform: [{rotate: '-90deg'}],
      fontSize: 85,
      fontWeight: 'bold',
  },
  hallPassContainer: {
      flex: 1,
      borderWidth: 1,
      flexDirection: 'row',
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'flex-start',
  },
  underline: {
      borderBottomWidth: 1,
      borderBottomColor: 'black',
      width: 100,
  },
  fillBlanks: {
    textAlign: 'center',
    fontFamily: 'monospace',
    fontWeight: 'bold',
  },
});
