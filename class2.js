// Example of a class with a callback function
class EventHandler {
    constructor(callback) {
      // The constructor takes a callback function
      this.callback = callback;
      this.events = [];
    }
  
    // Method to add an event
    addEvent(eventName) {
      this.events.push(eventName);
      // Invoke the callback function with the updated list of events
      this.callback(this.events);
    }
  }
  
  // Usage
  const myEventHandler = new EventHandler((events) => {
    console.log('Updated events:', events);
  });
  
  myEventHandler.addEvent('click'); // Output: Updated events: [ 'click' ]
  myEventHandler.addEvent('hover'); // Output: Updated events: [ 'click', 'hover' ]
  