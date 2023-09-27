const createTrip = async (req, res) => {
    try {
      const { tripName, destination, startDate, endDate } = req.body;
      const userId = req.user._id;
  
      const trip = new Trip({
        tripName,
        destination,
        startDate,
        endDate,
        user: userId,
      });
  
      const result = await trip.save();
      res.status(201).json(result);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Could not create trip' });
    }
  };
  
module.exports={
    createTrip,
}