const Post = require('./models/post');

const data = [
    {
        name: 'iPhone 8 64GB Cinza Espacial Tela 4.7"',
        description: `Some quick example text to build on the card title and make up the bulk of the card's content.`,
        price: '2000',
        votes: 53,
        image: 'https://source.unsplash.com/A6JxK37IlPo'
    }
];

function seedDB() {
    // remove all posts
    Post.deleteMany({}, (err) => {
        if(err) {
            console.log('Error trying to remove the posts');
            console.log(err);
        } 

        // Loop throuth the array and for each element create a new post
        data.forEach((seed) => {
            Post.create(seed, (err, post) => {
                if(err) {
                    console.log('Error trying to create a new post');
                    console.log(err);
                } else {
                    console.log('Post successfully createded!');
                }
            });
        });
    });
}

module.exports = seedDB;
