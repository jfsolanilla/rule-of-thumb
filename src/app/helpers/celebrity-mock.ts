import { Celebrity } from "../core/interfaces/celebrity";

export const celebritiesList = [
  {
    category: '',
    closingTime: '2021-02-08',
    description: 'Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Etiam aliquet eu dui ut iaculis',
    id: 1,
    imageLink: 'https://media.gettyimages.com/photos/pope-francis-visits-the-saint-louis-hospital-on-november-21-2019-in-picture-id1183683145?s=2048x2048',
    isHeader: true,
    moreInfoLink: 'https://en.wikipedia.org/wiki/Pope_Francis',
    name: 'Pope Francis',
    timeInCategory: ''
  },
  {
    category: 'Entertainment',
    description: 'Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Etiam aliquet eu dui ut iaculis',
    id: 2,
    imageLink: 'https://media.gettyimages.com/photos/kanye-west-attends-jim-moore-book-event-at-ralph-lauren-chicago-on-picture-id1178693040?s=2048x2048',
    isHeader: false,
    name: 'Kanye West',
    numberOfDislikes: 36,
    numberOfLikes: 64,
    timeInCategory: '2020-10-10'
  },
  {
    category: 'Business',
    description: 'Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Etiam aliquet eu dui ut iaculis',
    id: 3,
    imageLink: 'https://media.gettyimages.com/photos/founder-and-ceo-of-facebook-mark-zuckerber-gives-his-speach-during-picture-id511574484?s=2048x2048',
    isHeader: false,
    name: 'Mark Zuckerberg',
    numberOfDislikes: 64,
    numberOfLikes: 36,
    timeInCategory: '2020-12-10'
  },
  {
    category: 'Politics',
    description: 'Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Etiam aliquet eu dui ut iaculis',
    id: 4,
    imageLink: 'https://media.gettyimages.com/photos/president-of-argentina-cristina-fernandez-de-kirchner-speaks-during-a-picture-id456427826?s=2048x2048',
    isHeader: false,
    name: 'Cristina Fernández de Kirchner',
    numberOfDislikes: 64,
    numberOfLikes: 36,
    timeInCategory: '2020-12-10'
  },
  {
    category: 'Entertainment',
    description: 'Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Etiam aliquet eu dui ut iaculis',
    id: 5,
    imageLink: 'https://media.gettyimages.com/photos/malala-yousafzai-opens-the-new-library-of-birmingham-at-centenary-on-picture-id179408665?s=2048x2048',
    isHeader: false,
    name: 'Malala Yousafzai',
    numberOfDislikes: 36,
    numberOfLikes: 64,
    timeInCategory: '2020-12-10'
  }
 ] as Celebrity[];