import React from 'react';
import PropTypes from 'prop-types';
import { Image, View, Text, StyleSheet, TouchableOpacity } from 'react-native';

import { screenWidth } from '../utils/dimensions';
import { millisToMinutesAndSeconds } from '../utils';

const Song = ({
  artistName,
  artworkUrl60,
  trackName,
  collectionName,
  trackTimeMillis,
  onPress
}) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <Image
        source={{ uri: artworkUrl60, cache: 'default' }}
        width={80}
        height={80}
        style={styles.poster}
      />
      <View style={styles.detailsContainer}>
        <Text
          style={styles.title}
          numberOfLines={2}
          ellipsizeMode="tail"
          textBreakStrategy="highQuality"
        >
          {`${trackName}, ${collectionName}`}
        </Text>
        <View style={styles.artistContainer}>
          <Text>{artistName}</Text>
          {!!trackTimeMillis && (
            <Text>{`${millisToMinutesAndSeconds(trackTimeMillis)}m`}</Text>
          )}
          <View />
        </View>
      </View>
    </TouchableOpacity>
  );
};

Song.defaultProps = {
  artistName: '',
  artworkUrl60: '',
  trackName: '',
  collectionName: '',
  trackTimeMillis: 0
};

Song.propTypes = {
  artistName: PropTypes.string,
  artworkUrl60: PropTypes.string,
  trackName: PropTypes.string,
  collectionName: PropTypes.string,
  trackTimeMillis: PropTypes.number,
  onPress: PropTypes.func.isRequired
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    padding: 10
  },
  detailsContainer: {
    padding: 10
  },
  artistContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  poster: {
    width: 80,
    height: 80,
    padding: 5
  },
  title: {
    paddingBottom: 5,
    width: screenWidth - 120,
    fontSize: 18
  }
});

export default Song;
