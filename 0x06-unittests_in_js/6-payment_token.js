const getPaymentTokenFromAPI = (success) => {
  return new Promise((Resolve) => {
    if (success) Resolve({ data: 'Successful response from the API' });
  });
};

module.exports = getPaymentTokenFromAPI;
