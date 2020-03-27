
const mock = {
  stories: [
    {
      _id: '1',
      authorName: 'Your Stories',
      authorPhoto: require('../../assets/gabriel.jpeg'),
    },
    {
      _id: '2',
      authorName: 'camila',
      authorPhoto: require('../../assets/camila.jpg'),
    },
    {
      _id: '3',
      authorName: 'edward',
      authorPhoto: require('../../assets/edward.jpg'),
    },
    {
      _id: '4',
      authorName: 'josh',
      authorPhoto: require('../../assets/josh.jpg'),
    },
    {
      _id: '5',
      authorName: 'diego',
      authorPhoto: require('../../assets/diego.jpg'),
    },
    {
      _id: '6',
      authorName: 'rafaela',
      authorPhoto: require('../../assets/rafaela.jpg'),
    },
    {
      _id: '7',
      authorName: 'mark_z',
      authorPhoto: require('../../assets/defaultprofile.png'),
    },
    {
      _id: '8',
      authorName: 'robert',
      authorPhoto: require('../../assets/defaultprofile.png'),
    },
    {
      _id: '9',
      authorName: 'daniela',
      authorPhoto: require('../../assets/defaultprofile.png'),
    },
    {
      _id: '10',
      authorName: 'marcelo',
      authorPhoto: require('../../assets/defaultprofile.png'),
    },
  ],
  posts: [
    {
      '_id': '1',
      author: 'gabrielsiilva',
      authorPhoto: require('../../assets/gabriel.jpeg'),
      place: 'Campina Grande, PB - Brazil',
      description: 'always learning!! 🚀',
      hashtags: 'react_native',
      image: require('../../assets/campinagrande.jpg'),
      likes: 412
    },
    {
      '_id': '2',
      author: 'daniela',
      authorPhoto: require('../../assets/daniela.jpg'),
      place: 'Paris',
      description: `🍀🍀`,
      hashtags: 'photo',
      image: require('../../assets/daniela.jpg'),
      likes: 504
    },
    {
      '_id': '3',
      author: 'rebeca',
      authorPhoto: require('../../assets/rebeca.jpg'),
      place: 'Brazil',
      description: '🙏🙏',
      hashtags: 'rio',
      image: require('../../assets/christ-the-redeemer.jpg'),
      likes: 442
    },
    {
      '_id': '4',
      author: 'jhon',
      authorPhoto: require('../../assets/jhon.jpg'),
      place: 'New York',
      description: 'so beautiful!!! 😍😍😍',
      hashtags: 'times_square',
      image: require('../../assets/times-square.jpg'),
      likes: 332
    },
    {
      '_id': '5',
      author: 'gabriel',
      authorPhoto: require('../../assets/gabriel.jpeg'),
      place: 'Canada',
      description: 'my beatyful description 🚀',
      hashtags: 'learning',
      image: require('../../assets/vancouver.jpg'),
      likes: 412
    },
    {
      '_id': '6',
      author: 'jhon',
      authorPhoto: require('../../assets/jhon.jpg'),
      place: 'New York',
      description: '🌑🌑',
      hashtags: 'likes',
      image: require('../../assets/post1.jpeg'),
      likes: 332
    },
    {
      '_id': '7',
      author: 'rebeca',
      authorPhoto: require('../../assets/rebeca.jpg'),
      place: 'Portugal',
      description: '⭐',
      hashtags: 'sky',
      image: require('../../assets/post2.jpg'),
      likes: 442
    },
    {
      '_id': '8',
      author: 'daniela',
      authorPhoto: require('../../assets/daniela.jpg'),
      place: 'Paris',
      description: `🍀🍀`,
      hashtags: 'merci 😊',
      image: require('../../assets/eifell-tower.jpg'),
      likes: 504
    },
  ],
  directs: [
    {
      '_id': '1',
      authorName: 'josh',
      authorPhoto: require('../../assets/josh.jpg'),
      lastMessage: 'hey man 😄',
      messageTime: '20m'
    },
    {
      '_id': '2',
      authorName: 'alex',
      authorPhoto: require('../../assets/jhon.jpg'),
      lastMessage: '😑😑😑😑😑',
      messageTime: '42m'
    },
    {
      '_id': '3',
      authorName: 'camila',
      authorPhoto: require('../../assets/camila.jpg'),
      lastMessage: '🙄 amazing!!!',
      messageTime: '50m'
    },
    {
      '_id': '4',
      authorName: 'sam',
      authorPhoto: require('../../assets/rafaela.jpg'),
      lastMessage: '🚀🚀 keep learning!!',
      messageTime: '51m'
    },
    {
      '_id': '5',
      authorName: 'alan',
      authorPhoto: require('../../assets/rebeca.jpg'),
      lastMessage: 'bye!! ✋🏼',
      messageTime: '1w'
    },
    {
      '_id': '6',
      authorName: 'mary',
      authorPhoto: require('../../assets/defaultprofile.png'),
      lastMessage: 'hey man 😄',
      messageTime: '2w'
    },
    {
      '_id': '7',
      authorName: 'alisson',
      authorPhoto: require('../../assets/defaultprofile.png'),
      lastMessage: '😑😑😑😑😑',
      messageTime: '2w'
    },
    {
      '_id': '8',
      authorName: 'jhon',
      authorPhoto: require('../../assets/defaultprofile.png'),
      lastMessage: '🙄 amazing!!!',
      messageTime: '4w'
    },
    {
      '_id': '9',
      authorName: 'eduard',
      authorPhoto: require('../../assets/defaultprofile.png'),
      lastMessage: '🚀🚀 keep learning!!',
      messageTime: '11w'
    },
    {
      '_id': '10',
      authorName: 'raquel',
      authorPhoto: require('../../assets/defaultprofile.png'),
      lastMessage: 'bye!! ✋🏼',
      messageTime: '12w'
    }
  ],
  activities: {
    week: [
      {
        '_id': '1',
        'userPhoto': require('../../assets/josh.jpg'),
        'userName': 'josh',
        'acitivityTime': '1d',
        picture: require('../../assets/post3.jpg')
      },
      {
        '_id': '2',
        'userPhoto': require('../../assets/diego.jpg'),
        'userName': 'diego',
        'acitivityTime': '4d',
        picture: require('../../assets/post7.jpg')
      },
      {
        '_id': '3',
        'userPhoto': require('../../assets/camila.jpg'),
        'userName': 'camila',
        'acitivityTime': '5d',
        picture: require('../../assets/post4.jpg')
      },
      {
        '_id': '4',
        'userPhoto': require('../../assets/rafaela.jpg'),
        'userName': 'rafaela',
        'acitivityTime': '6d',
        picture: require('../../assets/post1.jpeg')
      }
    ],
    month: [
      {
        '_id': '1',
        'userPhoto': require('../../assets/defaultprofile.png'),
        'userName': 'robert',
        'acitivityTime': '1w',
        picture: require('../../assets/eifell-tower.jpg')
      },
      {
        '_id': '2',
        'userPhoto': require('../../assets/defaultprofile.png'),
        'userName': 'ronald',
        'acitivityTime': '2w',
        picture: require('../../assets/post2.jpg')
      },
      {
        '_id': '3',
        'userPhoto': require('../../assets/defaultprofile.png'),
        'userName': 'camila',
        'acitivityTime': '4w',
        picture: require('../../assets/post9.jpg')
      },
      {
        '_id': '4',
        'userPhoto': require('../../assets/defaultprofile.png'),
        'userName': 'marcia',
        'acitivityTime': '4w',
        picture: require('../../assets/vancouver.jpg')
      },
      {
        '_id': '5',
        'userPhoto': require('../../assets/defaultprofile.png'),
        'userName': 'luciana',
        'acitivityTime': '1w',
        picture: require('../../assets/post2.jpg')
      },
      {
        '_id': '6',
        'userPhoto': require('../../assets/defaultprofile.png'),
        'userName': 'diego',
        'acitivityTime': '2w',
        picture: require('../../assets/paris.jpg')
      },
      {
        '_id': '7',
        'userPhoto': require('../../assets/defaultprofile.png'),
        'userName': 'pablo',
        'acitivityTime': '4w',
        picture: require('../../assets/christ-the-redeemer.jpg')
      },
      {
        '_id': '8',
        'userPhoto': require('../../assets/defaultprofile.png'),
        'userName': 'mark_z',
        'acitivityTime': '4w',
        picture: require('../../assets/vancouver.jpg')
      }
    ]
  },
  profilePosts: [
    {
      '_id': '1',
      'photo': require('../../assets/campinagrande.jpg')
    },
    {
      '_id': '2',
      'photo': require('../../assets/post5.jpg')
    },
    {
      '_id': '3',
      'photo': require('../../assets/post1.jpeg')
    },
    {
      '_id': '4',
      'photo': require('../../assets/post2.jpg')
    },
    {
      '_id': '5',
      'photo': require('../../assets/post4.jpg')
    },
    {
      '_id': '6',
      'photo': require('../../assets/post9.jpg')
    },
    {
      '_id': '7',
      'photo': require('../../assets/post3.jpg')
    },
    {
      '_id': '8',
      'photo': require('../../assets/post6.jpg')
    },
    {
      '_id': '9',
      'photo': require('../../assets/post8.jpg')
    },
    {
      '_id': '10',
      'photo': require('../../assets/post7.jpg')
    },
    {
      '_id': '11',
      'photo': require('../../assets/vancouver.jpg')
    },
    {
      '_id': '12',
      'photo': require('../../assets/eifell-tower.jpg')
    },
  ]
}

module.exports = mock;