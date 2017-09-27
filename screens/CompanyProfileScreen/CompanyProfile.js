import React from 'react'
import {
  Text,
  Dimensions,
  PixelRatio,
  StyleSheet,
  View,
  WebView,
  Platform,
} from 'react-native'
import PropTypes from 'prop-types'
import { object, string } from 'utilities'
import { Colors } from 'constants'

import { CardContentImage } from '@components'

const { width, height } = Dimensions.get( 'window' )
const calHeight = {
  height: PixelRatio.roundToNearestPixel(
    Dimensions.get( 'window' ).width / ( 16 / 9 )
  ),
}

const styles = StyleSheet.create( {
  companyProfileSection: {
    borderBottomWidth: 1,
    borderColor: '#ddd',
  },
  container: {
    backgroundColor: '#fff',
    flexDirection: 'column',
    padding: 0,
    // width: width,
  },
  containerStyle: {
    backgroundColor: 'transparent',
    flexDirection: 'column',
    minWidth: 12,
    paddingBottom: 30,
    paddingLeft: 20,
    paddingRight: 20,
    paddingTop: 30,
  },
  slideVideo: {
    // alignItems: 'center',
    backgroundColor: 'black',
    flex: 1,
    justifyContent: 'flex-start',
    width: width * 1,
  },
  rowDescription: {
    flexDirection: 'row',
  },
  descriptionText: {
    fontSize: 13,
    lineHeight: 20,
    textAlign: 'justify',
    color: Colors.textDescription,
  },
  rowTitle: {
    flexDirection: 'row',
    marginBottom: 14,
  },
  titleText: {
    fontSize: 14,
    fontWeight: 'bold',
  },
} )

const CompanyProfileScreen = ( {
  companyProfile: { description, imgUrl, title },
  setAlready,
  ready,
} ) => {
  const embedVideoLink = () => {
    return 'https://www.youtube.com/embed/xnBc6Ahl_TQ?version=3&enablejsapi=1&rel=0&autoplay=1&showinfo=0&controls=1&modestbranding=0&'
  }

  const onNavigationStateChangeAndroid = navState => {
    console.log( navState.loading )
    // console.log( navLoading )
    if ( !navState.loading ) {
      setAlready()
      console.log( 'ready', ready )
    }
  }

  const onNavigationStateChange = navState => {
    console.log( navState.loading )
    // console.log( navLoading )
  }

  const generateJSCode = () => {
    let jsCode =
      'document.getElementById("content").innerHTML = "HTML Times clicked";'
    return jsCode
  }

  console.log( 'ready', ready )
  return (
    <View style={styles.container}>
      <View style={styles.slideVideo}>
        {Platform.OS === 'ios'
          ? <WebView
            source={{
              html: `<div id="yt-player"></div>
                <script src="http://www.youtube.com/player_api"></script>
                <script>
                
                // create youtube player
                var player;
                function onYouTubePlayerAPIReady(){
                    player = new YT.Player('yt-player',{
                      height: "${ height * 0.35 }",
                      width: "100%",
                        videoId:'Ez80dRRUo8A',
                        playerVars: { 
                          controls: 0, 
                          rel:0, modestbranding:0, html5:1, showinfo:0, playsinline: 1,
                          autoplay: 0
                          },
                        events:{
                            'onReady':onPlayerReady,
                            'onStateChange':onPlayerStateChange
                        }
                    });
                }

                // autoplay video
                function onPlayerReady(event){
                     event.target.playVideo();
          
                }

                // when video ends
                function onPlayerStateChange(event) {
                    if(event.data === 0 && $("#autoplayCB").is(':checked')) {
                        // window.location="/nextvideo.htm";
                    }
                }

                </script>
                `,
            }}
            javaScriptEnabled={true}
            // javaScriptEnabledAndroid={true}
            onNavigationStateChange={onNavigationStateChange}
            automaticallyAdjustContentInsets={false}
            scalesPageToFit={true}
            allowsInlineMediaPlayback={true}
            mediaPlaybackRequiresUserAction={false}
            style={{
              // alignItems: 'center',
              margin: 0,
              padding: 0,
              // justifyContent: 'space-between',
              // alignItems: 'center',
              backgroundColor: 'black',
              height: height * 0.35,
              // justifyContent: 'center',
              width: width * 1,
            }}
          />
          : <WebView
            source={require( '../../assets/htmls/youtube.html' )}
            // source={{
            //   html: '<div id="yt-player">gggg</div>',
            // }}
            style={{
              margin: 0,
              padding: 0,
              // justifyContent: 'space-between',
              // alignItems: 'center',
              backgroundColor: 'black',
              height: height * 0.35,
              // justifyContent: 'center',
              width: width * 1,
            }}
            // injectedJavaScript={
            //   'function myfunc() { alert(document.getElementById("yt").src= "http://www.youtube.com/embed/xnBc6Ahl_TQ?rel=0&amp;autoplay=1&showinfo=0&controls=0&autohide=0") };myfunc();'
            // }
            //startInLoadingState={true}
            javaScriptEnabled={true}
            javaScriptEnabledAndroid={true}
            automaticallyAdjustContentInsets={false}
            scalesPageToFit={true}
            allowsInlineMediaPlayback={true}
            mediaPlaybackRequiresUserAction={false}
          />}
      </View>
      <View style={styles.containerStyle}>
        <View style={styles.rowTitle}>
          <Text style={styles.titleText}>
            {title}
          </Text>
        </View>
        <View style={styles.rowDescription}>
          <Text style={styles.descriptionText}>
            {description}
          </Text>
        </View>
      </View>
    </View>
  )
}
CompanyProfileScreen.propTypes = {
  companyProfile: PropTypes.shape( {
    description: PropTypes.string.isRequired,
    imgUrl: PropTypes.string,
    title: PropTypes.string.isRequired,
  } ),
}

export default CompanyProfileScreen
