import * as React from 'react'
import { Container, Header, Body, Title, Content, Grid, Row, Col, Button, Icon, Text, Thumbnail, View } from 'native-base'

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
    loadWeather: weather.load(dispatch),
    reloadWeather: weather.reload(dispatch),
  }
}

type Props = {
  loading: boolean
  report: WeatherReport | null
  loadWeather (): void
  reloadWeather (): void
}

export class Main extends React.Component<Props> {
  componentDidMount () {
    this.props.loadWeather()
  }
  onPressReloadWeather () {
    this.props.reloadWeather()
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
      <Container>
        <Header>
          <Body>
            <Title>{ 'Weather' }</Title>
          </Body>
        </Header>
        <Content>
          <Grid>
            <Row style={{ marginTop: 10, alignItems: 'center' }}>
              <Col size={ 5 }>
                <Text style={{ textAlignVertical: 'center', textAlign: 'center' }}>今の天気</Text>
              </Col>
              <Col size={ 2 }>
                <Button
                  light
                  small
                  onPress={ () => this.onPressReloadWeather() }
                >
                  <Icon name="refresh" />
                </Button>
              </Col>
            </Row>
            <Row style={{ marginTop: 20, justifyContent: 'center' }}>
              <Col>
                {(() => {
                  return this.props.report ? (
                    <Thumbnail
                      square
                      large
                      source={{ uri: this.props.report.weather.image }}
                      style={{ marginLeft: 'auto', marginRight: 'auto' }}
                      />
                ) : null 
                })()}
              </Col>
            </Row>
            <Row>
              <Col>
                <Text style={{ textAlign: 'center' }}>{ message }</Text>
              </Col>
            </Row>
          </Grid>
        </Content>
      </Container>
    )
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(Main)
