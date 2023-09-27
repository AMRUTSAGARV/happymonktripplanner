import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Button } from 'react-native';

const fetchTrips = async () => {
    try {

      const tripsData = [
        {
          id: '1',
          tripName: 'Trip 1',
          destination: 'Destination 1',
          startDate: '2023-09-01',
          endDate: '2023-09-10',
        },
        {
          id: '2',
          tripName: 'Trip 2',
          destination: 'Destination 2',
          startDate: '2023-10-01',
          endDate: '2023-10-15',
        },
      ];
      return tripsData;
    } catch (error) {
      console.error('Error fetching trips', error);
      return [];
    }
  };

const Home = ({ navigation }) => {
  
    const [trips, setTrips] = useState([]);

    useEffect(() => {
      async function loadTrips() {
        const tripsData = await fetchTrips();
        setTrips(tripsData);
      }
      loadTrips();
    }, []);
    return (
        <View style={styles.container}>
     <View style={styles.header}>
        <Text style={styles.headerText}>Welcome to the Home Page!</Text>
        <Button
          title="Logout"
          onPress={() => {
            navigation.navigate('Login');
          }}
        />
      </View>

  
      <ScrollView>
        {trips.map((trip) => (
          <TouchableOpacity
            key={trip.id}
            style={styles.card}
            onPress={() => {
            navigation.navigate('TripDetails', { trip });
            }}
          >
            <View style={styles.cardContent}>
              <Text style={styles.cardTitle}>{trip.tripName}</Text>
              <Text style={styles.cardText}>Destination: {trip.destination}</Text>
              <Text style={styles.cardText}>
                Dates: {trip.startDate} - {trip.endDate}
              </Text>
            </View>
          </TouchableOpacity>
        ))}
      </ScrollView>
  
      <TouchableOpacity
        style={styles.fab}
        onPress={() => {
          navigation.navigate('CreateTrip');
        }}
      >
        <Text style={styles.fabText}>+</Text>
      </TouchableOpacity>
      </View>
  );
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#f2f2f2',
    },
    header: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      backgroundColor: '#007AFF', 
      padding: 16,
    },
    headerText: {
      fontSize: 20,
      color: 'white',
      fontWeight: 'bold', 
    },
    card: {
      margin: 10,
      backgroundColor: 'white',
      borderWidth: 1,
      borderColor: '#ddd',
      borderRadius: 5,
      elevation: 3,
    },
    cardContent: {
      padding: 15,
    },
    cardTitle: {
      fontSize: 18,
      fontWeight: 'bold',
      color: '#333', 
    },
    cardText: {
      fontSize: 16,
      color: '#666', 
    },
    fab: {
      position: 'absolute',
      margin: 16,
      right: 0,
      bottom: 0,
      backgroundColor: '#007AFF', 
      width: 56,
      height: 56,
      borderRadius: 28,
      alignItems: 'center',
      justifyContent: 'center',
      elevation: 4,
    },
    fabText: {
      fontSize: 32,
      color: 'white', 
    },
  });
export default Home;
