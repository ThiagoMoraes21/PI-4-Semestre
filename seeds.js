const Post = require('./models/post');

const data = [
    {
        name: 'iPhone 7 Apple 3D Touch, iOS 11, Touch ID',
        description: `Apple: iPhone 7 Apple 3D Touch, iOS 11, Touch ID, Câm.12MP, Resistente à Água e Sistema de Alto-falantes Estéreo, 32GB, Preto Matte, Tela HD de 4,7"`,
        price: '2.249,10',
        votes: 53,
        image: 'https://www.casasbahia-imagens.com.br/TelefoneseCelulares/Smartphones/iPhone/11526479/830716826/iphone-7-apple-3d-touch-ios-11-touch-id-cam-12mp-resistente-a-agua-e-sistema-de-alto-falantes-estereo-32gb-preto-matte-tela-hd-de-47-11526479.jpg',
        link: 'https://www.casasbahia.com.br/TelefoneseCelulares/Smartphones/iPhone/iphone-7-apple-3d-touch-ios-11-touch-id-cam-12mp-resistente-a-agua-e-sistema-de-alto-falantes-estereo-32gb-preto-matte-tela-hd-de-47-11526479.html?gclid=CjwKCAjwmq3kBRB_EiwAJkNDp7rFSILzbsP1yheEoAUaCrZz2SXp9PLBuCHJTlZwAh7jLH66FoB4iBoCMX0QAvD_BwE&utm_medium=Cpc&utm_source=GP_PLA&IdSku=11526479&idLojista=10037&s_kwcid=AL!427!3!243930487418!!!g!433246525874!&utm_campaign=Tele_Apple_Shopping&ef_id=XFTd4AAAAFx3g1Kl:20190315160335:s'
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
