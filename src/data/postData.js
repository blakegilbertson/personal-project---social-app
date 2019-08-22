const postData = [
  {
    postId: 567,
    user: 'Dave Jones',
    date: 'Saturday 28th @ 5pm',
    heading: 'Some heading for post',
    body: 'some text for the post',
    img: null,
    interactions: {
      likes: 23,
      liked: false,
      comments: {
        total: 3,
        content: [
          {
            id: 334,
            user: 'Sally',
            comment: 'I love this',
            likes: 2,
            datePosted: '30 minutes ago'
          },
          {
            id: 335,
            user: 'Dave',
            comment: 'Thanks Sal',
            likes: 1,
            datePosted: '2 hours ago'
          },
          {
            id: 336,
            user: 'John',
            comment: 'This is great',
            likes: 2, 
            datePosted: '8 days ago'
          }
        ],
        displayComments: false,
        displayAddComment: false,
      }
    }
  },
  {
    postId: 678,
    user: 'Jane',
    date: 'Wednesday 1st @ 3pm',
    heading: 'Some heading for post',
    body: 'some text for the post',
    img: 'https://www.visitkohrong.com/wp-content/uploads/2017/05/Sunset-on-Long-Beach-Koh-Rong-Island-in-Cambodia-4.jpg',
    interactions: {
      likes: 7,
      liked: true,
      comments: {
        total: 1,
        content: [
          {
            id: 678,
            user: 'Sally',
            comment: 'I love this',
            likes: 2,
            datePosted: '10 minutes ago'
          }
        ],
        displayComments: false,
        displayAddComment: false,
      }
    }
  },
  {
    postId: 345,
    user: 'Becky',
    date: 'Thurday 12th @ 11am',
    heading: 'Some heading for post',
    body: 'some text for the post',
    img: 'https://cdn-prod.medicalnewstoday.com/content/images/articles/322/322868/golden-retriever-puppy.jpg',
    interactions: {
      likes: 4,
      liked: false,
      comments: {
        total: 0,
        content: null,
        displayComments: false,
        displayAddComment: false,
      }
    }
  }
]

export default postData