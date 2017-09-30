import React from 'react'
import {
  Text,
  Dimensions,
  StyleSheet,
  View,
  WebView,
  Platform,
} from 'react-native'
import PropTypes from 'prop-types'
import { object, string, url } from 'utilities'
import { Colors } from 'constants'

const { width, height } = Dimensions.get( 'window' )

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
  companyProfile: { description, urls, title },
} ) => {
  const videoId = () => {
    const video = object.getFirstByKey( {
      item: urls,
      key: 'videos',
    } )
    return url.getYoutubeId( video )
  }

  return (
    <View style={styles.container}>
      <View style={styles.slideVideo}>
        {Platform.OS === 'ios'
          ? <WebView
            source={{
              html: `<div id="yt-player"></div>
                <script src="http://www.youtube.com/player_api"></script>
                <script>
                
                var player;
                function onYouTubePlayerAPIReady(){
                    player = new YT.Player('yt-player',{
                      height: "${ height * 0.35 }",
                      width: "100%",
                        videoId: "${ videoId() }",
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
            automaticallyAdjustContentInsets={false}
            scalesPageToFit={true}
            allowsInlineMediaPlayback={true}
            mediaPlaybackRequiresUserAction={false}
            style={{
              margin: 0,
              padding: 0,
              backgroundColor: 'black',
              height: height * 0.35,
              width: width * 1,
            }}
          />
          : <WebView
            source={require( '../../assets/htmls/companyProfile.html' )}
            style={{
              margin: 0,
              padding: 0,
              backgroundColor: 'black',
              height: height * 0.35,
              width: width * 1,
            }}
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
