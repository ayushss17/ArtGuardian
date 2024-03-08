const mockDatabase = {
    arts: [
      {
        id:'65b5eca5925a7f4fbedb2658',
        artist:'John Constable',
        title:"The Hay Wain",
        bigtitle:"The painting depicts a rural scene in the Stour Valley in Suffolk, Eng…",
        price:2,
        type:"Landscape",
        Link1:"https://i.imgur.com/s6Wjk5z.jpg",
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
  