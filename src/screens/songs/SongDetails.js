import React from 'react';
import PropTypes from 'prop-types';
import { Image, StyleSheet, Text, View } from 'react-native';
import { useRoute } from '@react-navigation/native';
import { millisToMinutesAndSeconds } from '../../utils';

const SongDetails = () => {
  const {
    params: { details }
  } = useRoute();
  const {
    artistName,
    artworkUrl100,
    trackName,
    collectionName,
    primaryGenreName,
    trackTimeMillis
  } = details;
  const duration = millisToMinutesAndSeconds(trackTimeMillis);
  return (
    <View style={styles.container}>
      <Image source={{ uri: artworkUrl100 }} style={styles.poster} />
      <Text style={styles.trackName}>{trackName}</Text>
      <View>
        <Text style={styles.value}>{collectionName}</Text>
        <Text>
          Artist: <Text style={styles.value}>{artistName}</Text>
        </Text>
        <Text>
          Genre: <Text style={styles.value}>{primaryGenreName}</Text>
        </Text>
        {!!trackTimeMillis && (
          <Text>
            Duration: <Text style={styles.value}>{`${duration}m`}</Text>
          </Text>
        )}
      </View>
    </View>
  );
};

SongDetails.defaultProps = {
  artistName: '',
  artworkUrl100: '',
  trackName: '',
  collectionName: '',
  primaryGenreName: '',
  trackTimeMillis: 0
};

SongDetails.propTypes = {
  artistName: PropTypes.string,
  artworkUrl100: PropTypes.string,
  trackName: PropTypes.string,
  collectionName: PropTypes.string,
  primaryGenreName: PropTypes.string,
  trackTimeMillis: PropTypes.number
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'flex-start',
    alignItems: 'center'
  },
  poster: {
    width: '100%',
    height: '50%'
  },
  trackName: {
    fontSize: 24,
    fontWeight: '700',
    textAlign: 'center',
    padding: 5
  },
  value: {
    fontWeight: 'bold'
  }
});

export default SongDetails;
