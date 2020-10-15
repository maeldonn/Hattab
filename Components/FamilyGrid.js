import React from 'react';
import {
  StyleSheet,
  View,
  Image,
  SafeAreaView,
  Dimensions,
  StatusBar,
} from 'react-native';
import PropTypes from 'prop-types';
import { NUM1, NUM2, NUM3, NUM4 } from 'react-native-dotenv';

import FamilyIcon from './FamilyIcon';

// eslint-disable-next-line react/prefer-stateless-function
class FamilyGrid extends React.Component {
  render() {
    const { type } = this.props;
    return (
      <SafeAreaView style={styles.main_container}>
        <StatusBar barStyle="dark-content" />
        <View style={styles.logo_container}>
          <Image
            source={require('../Images/ic_logo.png')}
            style={styles.logo}
          />
        </View>
        <View style={styles.grid}>
          <View style={styles.first_row}>
            <FamilyIcon
              image={require('../Images/ic_user.png')} // Replace path
              number={NUM1}
              name="User 1" // Replace name
              type={type}
            />
            <FamilyIcon
              image={require('../Images/ic_user.png')} // Replace path
              number={NUM2}
              name="User 2" // Replace name
              type={type}
            />
          </View>
          <View style={styles.second_row}>
            <FamilyIcon
              image={require('../Images/ic_user.png')} // Replace path
              number={NUM3}
              name="User 3" // Replace name
              type={type}
            />
            <FamilyIcon
              image={require('../Images/ic_user.png')} // Replace path
              number={NUM4}
              name="User 4" // Replace name
              type={type}
            />
          </View>
        </View>
      </SafeAreaView>
    );
  }
}

FamilyGrid.propTypes = {
  type: PropTypes.string.isRequired,
};

const styles = StyleSheet.create({
  main_container: { flex: 1 },
  logo_container: { flex: 1, alignItems: 'center' },
  logo: {
    width: Dimensions.get('window').width - 20,
    height: Dimensions.get('window').height / 5,
    marginTop: 10,
    resizeMode: 'contain',
  },
  grid: { flex: 4, justifyContent: 'space-around' },
  first_row: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  second_row: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
});

export default FamilyGrid;
