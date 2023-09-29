class UberPriceCalculator {
    constructor(baseFare, ratePerMile, ratePerMinute) {
      this.baseFare = baseFare;
      this.ratePerMile = ratePerMile;
      this.ratePerMinute = ratePerMinute;
    }
  
    calculatePrice(distanceInMiles, durationInMinutes) {
      const fare = this.baseFare + distanceInMiles * this.ratePerMile + durationInMinutes * this.ratePerMinute;
      return fare.toFixed(2); // Round to two decimal places for cents
    }
  }
  
  // Example usage:
  
  const calculator = new UberPriceCalculator(2.0, 1.5, 0.3); // Define base fare, rate per mile, and rate per minute
  
  const distance = 5; // Distance in miles
  const duration = 15; // Duration in minutes
  
  const estimatedPrice = calculator.calculatePrice(distance, duration);
  console.log(`Estimated Uber Price: $${estimatedPrice}`);
  