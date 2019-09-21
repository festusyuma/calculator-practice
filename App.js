/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {StyleSheet, View, Text, Button, TouchableOpacity} from 'react-native';

/*class Greetings extends Component {
  constructor() {
    super();
    this.state = {name: 'ddd'};
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({name: 'festus'});
    }, 5000);
  }

  render() {
    return <Text style={styles.text}>Hello {this.state.name}</Text>;
  }
}*/

export default class App extends Component {
  /*constructor() {
    super();
    this.state = {name: ''};
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.half}>
          <TextInput
            placeholder="Username"
            style={styles.formInput}
            onChangeText={name => {
              this.setState({name});
            }}
            value={this.state.name}
          />
          <TextInput
            type="Password"
            placeholder="Password"
            style={styles.formInput}
          />
        </View>
        <View style={styles.half2}>
          <Greetings />
          <View style={styles.half21}>
            <Text style={styles.text}>Welcome {this.state.name}</Text>
          </View>
          <View style={styles.half22}>
            <Text style={styles.text}>Static Text two</Text>
          </View>
        </View>
      </View>
    );
  }*/

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.calculation}></View>
        <View style={styles.result}></View>
        <View style={styles.buttons}>
          <View style={styles.numbers}>
            <View style={styles.numbersRow}>
              <TouchableOpacity style={styles.button}>
                <Text style={styles.buttonText}>7</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.button}>
                <Text style={styles.buttonText}>8</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.button}>
                <Text style={styles.buttonText}>9</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.numbersRow}>
              <TouchableOpacity style={styles.button}>
                <Text style={styles.buttonText}>4</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.button}>
                <Text style={styles.buttonText}>5</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.button}>
                <Text style={styles.buttonText}>6</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.numbersRow}>
              <TouchableOpacity style={styles.button}>
                <Text style={styles.buttonText}>1</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.button}>
                <Text style={styles.buttonText}>2</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.button}>
                <Text style={styles.buttonText}>3</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.numbersRow}>
              <TouchableOpacity style={styles.button}>
                <Text style={styles.buttonText}>.</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.button}>
                <Text style={styles.buttonText}>0</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.button}>
                <Text style={styles.buttonText}> </Text>
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.operations}>
            <TouchableOpacity style={styles.button}>
              <Text style={styles.buttonText}>&divide;</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button}>
              <Text style={styles.buttonText}>&times;</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button}>
              <Text style={styles.buttonText}>-</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button}>
              <Text style={styles.buttonText}>+</Text>
            </TouchableOpacity>
            <TouchableOpacity style={[styles.button, styles.calculateBtn]}>
              <Text style={styles.buttonText}>=</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }
}

/*const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
  },
  half: {
    flex: 2,
    // backgroundColor: 'blue',
    // justifyContent: 'center',
    // alignItems: 'center'
  },
  formInput: {
    borderBottomColor: '#0000000b',
    borderBottomWidth: 2.5,
    margin: 10,
  },
  half2: {
    flex: 1,
    backgroundColor: '#000000',
    flexDirection: 'row',
  },
  half21: {
    flex: 1,
    backgroundColor: 'yellow',
  },
  half22: {
    flex: 1,
    backgroundColor: 'red',
  },
  text: {
    color: 'white',
    fontSize: 25,
  },
});*/

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  calculation: {
    flex: 2,
    backgroundColor: '#2b2b2b',
  },
  result: {
    flex: 1,
    backgroundColor: '#1d1d1d',
  },
  buttons: {
    flex: 7,
    flexDirection: 'row',
  },
  numbers: {
    flex: 3,
    backgroundColor: '#000000',
  },
  operations: {
    flex: 1,
    backgroundColor: '#2b2b2b',
  },
  numbersRow: {
    flex: 1,
    flexDirection: 'row',
  },
  button: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    color: '#ffffff',
    fontSize: 25,
  },
  calculateBtn: {
    backgroundColor: '#ff0344',
  },
});
