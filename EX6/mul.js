class mul {
    static multiply(A, B) {
     
      if (typeof A !== 'number' || typeof B !== 'number') {
        throw new Error('Both A and B must be numbers.');
      }
      
      return A * B;
    }
  }
  
  module.exports = mul;
  
 
  