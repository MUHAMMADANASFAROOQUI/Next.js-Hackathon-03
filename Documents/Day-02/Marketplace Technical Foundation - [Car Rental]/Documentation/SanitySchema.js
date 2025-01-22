// Rental Car Schema
export const carSchema = {
    name: 'vehicle',
    type: 'document',
    fields: [
      { name: 'name', type: 'string', title: 'Car Name' },
      { name: 'price', type: 'number', title: 'Price per Day' },
      { name: 'location', type: 'string', title: 'Location' },
      { name: 'image', type: 'string', title: 'Image'},
      { name: 'description', type: 'text', title: 'Description'},
      { name: 'availability', type: 'boolean', title: 'Availability' },
      { name: 'features', type: 'array', of: [{ type: 'string' }], title: 'Features' }
    ]
  };
  
  // Booking Schema
  export const bookingSchema = {
    name: 'booking',
    type: 'document',
    fields: [
      { name: 'userId', type: 'string', title: 'User ID' },
      { name: 'carId', type: 'string', title: 'Car ID' },
      { name: 'rentalDuration', type: 'string', title: 'Rental Duration' },
      { name: 'totalPrice', type: 'number', title: 'Total Price' },
      { name: 'status', type: 'string', title: 'Status', options: { list: ['Pending', 'Confirmed', 'Completed'] } }
    ]
  };
  
  // Location Schema
  export const locationSchema = {
    name: 'location',
    type: 'document',
    fields: [
      { name: 'carId', type: 'string', title: 'Car ID' },
      { name: 'location', type: 'string', title: 'Location' },
      { name: 'timestamp', type: 'datetime', title: 'Timestamp' }
    ]
  };
  
  // Payment Schema
  export const paymentSchema = {
    name: 'payment',
    type: 'document',
    fields: [
      { name: 'bookingId', type: 'string', title: 'Booking ID' },
      { name: 'paymentMethod', type: 'string', title: 'Payment Method' },
      { name: 'amount', type: 'number', title: 'Amount' },
      { name: 'status', type: 'string', title: 'Status', options: { list: ['Pending', 'Completed', 'Failed'] } }
    ]
  };
  