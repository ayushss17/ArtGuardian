const mockDatabase = {
    arts: [
      {
        id: 1,
        title: 'Artwork 1',
        description: 'Description for Artwork 1',
        price: 100,
        artistAddress: '0x23F1836Cde233911610ae3746Fe8a0895D6B8806',
      },
      {
        id: 2,
        title: 'Artwork 2',
        description: 'Description for Artwork 2',
        price: 200,
        artistAddress: '0x987654321fedcba987654321fedcba9876543210',
      },
      // Add more mock art data as needed
    ],
    wallets: [
      {
        publicAddress: '0x123456789abcdef123456789abcdef123456789a',
      },
      {
        publicAddress: '0x987654321fedcba987654321fedcba9876543210',
      },
      // Add more mock wallet data as needed
    ],
  };
  
  module.exports = mockDatabase;
  