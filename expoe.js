// Function to return a promise that resolves after t1 seconds
function promiseAfterT1(t1) {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(`Resolved after ${t1} seconds`);
      }, t1 * 1000);
    });
  }
  
  // Function to return a promise that resolves after t2 seconds
  function promiseAfterT2(t2) {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(`Resolved after ${t2} seconds`);
      }, t2 * 1000);
    });
  }
  
  // Function to return a promise that resolves after t3 seconds
  function promiseAfterT3(t3) {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(`Resolved after ${t3} seconds`);
      }, t3 * 1000);
    });
  }
  
  // Function to wait for all 3 promises to resolve using Promise.all and return the time in milliseconds it takes to complete the entire operation
  function waitForAllPromises(t1, t2, t3) {
    const start = Date.now();
    return Promise.all([
      promiseAfterT1(t1),
      promiseAfterT2(t2),
      promiseAfterT3(t3)
    ]).then(() => {
      const end = Date.now();
      return end - start;
    });
  }
  