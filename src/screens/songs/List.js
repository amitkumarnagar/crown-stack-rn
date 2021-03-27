import React from 'react';
import { FlatList, View, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Loader, Song } from '../../components';

const URL = 'https://itunes.apple.com/search?term=Michael+jackson';

const List = () => {
  const [songList, setSongList] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(false);
  const [isRefreshing, setIsRefreshing] = React.useState(false);

  const navigation = useNavigation();

  const fetchSongList = async () => {
    try {
      setIsLoading(true);
      const response = await fetch(URL);
      const responseJson = await response.json();
      setSongList(responseJson?.results);
      setIsRefreshing(false);
    } catch (e) {
      console.log(e);
    } finally {
      setIsLoading(false);
    }
  };

  React.useEffect(() => {
    fetchSongList();
  }, []);

  const navigateToDetails = details => {
    navigation.navigate('SongDetails', { details });
  };

  const onRefreshList = () => {
    setIsRefreshing(true);
    fetchSongList();
  };

  const renderSong = ({ item }) => (
    <Song {...item} onPress={() => navigateToDetails(item)} />
  );

  const ItemSeparator = () => <View style={styles.separator} />;

  return (
    <View style={styles.container}>
      <Loader isLoading={isLoading} />
      <FlatList
        data={songList}
        renderItem={renderSong}
        keyExtractor={(item, index) => `${item?.trackId}-${index}`}
        ItemSeparatorComponent={ItemSeparator}
        refreshing={isRefreshing}
        onRefresh={onRefreshList}
        initialNumToRender={5}
        maxToRenderPerBatch={5}
        removeClippedSubviews
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  separator: {
    height: 0.5,
    width: '100%',
    backgroundColor: '#000'
  }
});

export default List;
