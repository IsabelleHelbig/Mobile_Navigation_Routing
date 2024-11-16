// displays name of app, my name, current date
import React from 'react';
import {Text, View, Button, StyleSheet} from 'react-native';
import MainLayout from '../layouts/MainLayout';

function AboutScreen({navigation}: {navigation: any}): React.JSX.Element {
  return (
    <MainLayout>
      <View style={styles.container}>
        <View style={styles.content}>
          <Text style={styles.header}>Navigation App : Lab 5</Text>
          <Text style={styles.main}>Isabelle Helbig</Text>
          <Text style={styles.main}>November 16, 2024</Text>
        </View>
        <View style={styles.button}>
          <Button
            title="Go to Home"
            onPress={() => navigation.navigate('Home')}
          />
        </View>
      </View>
    </MainLayout>
  );
}
const styles = StyleSheet.create({
  header: {fontSize: 30},
  main: {margin: 5},
  button: {
    justifyContent: 'flex-end',
  },
  container: {
    flex: 1,
  },
  content: {
    flex: 1,
  },
});
export default AboutScreen;
