import * as React from 'react'
import { StyleSheet, Text, View, Button } from 'react-native'

import { connect } from 'react-redux'
import { Dispatch } from 'redux';

import * as weather from '../../usecases/weather'
import { RootState } from '../../store/state';

function mapStateToProps (state: RootState) {
  console.log(state)
  return {
  }
}

function mapDispatchToProps (dispatch: Dispatch) {
  return {
    fetchWeather () {
      weather.fetch(dispatch)
    }
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export class Main extends React.Component {
  onPressFetchWeather () {

  }
  render() {
    return (
      <View style={styles.container}>
        <Text>Open up App.js to start working on your app!</Text>
        <Text>Changes you make will automatically reload.</Text>
        <Text>Shake your phone to open the developer menu.</Text>
        <Button
          onPress={ this.onPressFetchWeather }
          title="天気を取得"
        />
      </View>
    )
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(Main)