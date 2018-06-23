import * as React from 'react'
import { StyleSheet, Text, View, Button } from 'react-native'

import { connect } from 'react-redux'
import { Dispatch } from 'redux';

import * as weather from '../../usecases/weather'
import { RootState } from '../../store/state';
import { WeatherReport } from '../../services/weather/weather-report';

function mapStateToProps (state: RootState) {
  return {
    loading: state.weather.loading,
    report: state.weather.report,
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
})

type Props = {
  loading: boolean
  report: WeatherReport | null
  fetchWeather (): void
}

export class Main extends React.Component<Props> {
  onPressFetchWeather () {
    this.props.fetchWeather()
  }
  render() {
    const message = this.props.loading ? (
      <Text>Loading</Text>
    ) : this.props.report ? (
      <Text>{ this.props.report.weather.main }</Text>
    ) : (
      <Text>ボタンを押して取得しよう</Text>
    )
    return (
      <View style={styles.container}>
        <View>{ message }</View>
        <Button
          onPress={ () => this.onPressFetchWeather() }
          title="天気を取得"
        />
      </View>
    )
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(Main)