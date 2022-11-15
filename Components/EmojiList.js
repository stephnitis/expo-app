import {useState} from 'react';
import {StyleSheet, FlatList, Image, Platform, Pressable} from 'react-native';

export default function EmojiList({ onSelect, onCloseModal }) {
  const [emoji] = useState([
    require('../assets/images/vecteezy_cute-dinosaur-character-holding-flowers_8481275_959.png'),
    require('../assets/images/vecteezy_christmas-elements-collection-illustration-designed-with_10882947_431.png'),
    require('../assets/images/icons8-cheese-48.png'),
    require('../assets/images/icons8-pokeball-48.png'),
    require('../assets/images/icons8-salami-pizza-100.png'),
    require('../assets/images/icons8-popcorn-time-50.png'),
  ]);

  return (
    <FlatList
      horizontal
      showsHorizontalScrollIndicator={Platform.OS === 'web' ? true : false}
      data={emoji}
      contentContainerStyle={styles.listContainer}
      renderItem={({ item, index }) => {
        return (
          <Pressable
            onPress={() => {
              onSelect(item);
              onCloseModal();
            }}>
              <Image source={item} key={index} style={styles.image} />
          </Pressable>
        );
      }}
    />
  );
}

const styles = StyleSheet.create({
  listContainer: {
    borderTopRightRadius: 10,
    borderTopLeftRadius: 10,
    paddingHorizontal: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  image: {
    width: 100,
    height: 100,
    marginRight: 20,
  },
});