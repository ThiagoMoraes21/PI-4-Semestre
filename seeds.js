const Post = require('./models/post');

const posts = [
    {
        name: 'iPhone 7 Apple 3D Touch, iOS 11, Touch ID',
        description: `Apple: iPhone 7 Apple 3D Touch, iOS 11, Touch ID, Câm.12MP, Resistente à Água e Sistema de Alto-falantes Estéreo, 32GB, Preto Matte, Tela HD de 4,7"`,
        price: '2.249,10',
        votes: 53,
        image: `https://www.casasbahia-imagens.com.br/TelefoneseCelulares/Smartphones/iPhone/11526479/830716826/iphone-7-apple-3d-touch-ios-11-touch-id-cam-12mp-resistente-a-agua-e-sistema-de-alto-falantes-estereo-32gb-preto-matte-tela-hd-de-47-11526479.jpg`,
        //image: '../../img/img-1.jpg',
        site: 'https://www.casasbahia.com.br/TelefoneseCelulares/Smartphones/iPhone/iphone-7-apple-3d-touch-ios-11-touch-id-cam-12mp-resistente-a-agua-e-sistema-de-alto-falantes-estereo-32gb-preto-matte-tela-hd-de-47-11526479.html?gclid=CjwKCAjwmq3kBRB_EiwAJkNDp7rFSILzbsP1yheEoAUaCrZz2SXp9PLBuCHJTlZwAh7jLH66FoB4iBoCMX0QAvD_BwE&utm_medium=Cpc&utm_source=GP_PLA&IdSku=11526479&idLojista=10037&s_kwcid=AL!427!3!243930487418!!!g!433246525874!&utm_campaign=Tele_Apple_Shopping&ef_id=XFTd4AAAAFx3g1Kl:20190315160335:s'
    },
    {
        name: "iPhone 8",
        price: "2.872,77",
        image: "https://www.pontofrio-imagens.com.br/TelefoneseCelulares/Smartphones/iPhone/13375270/990411514/iphone-8-apple-com-ios-11-camera-de-12-mp-resistente-a-agua-wi-fi-4g-lte-e-nfc-64gb-cinza-espacial-tela-hd-de-47-13375270.jpg",
        //image: '../../img/img-2.jpg',
        site: "https://www.pontofrio.com.br/TelefoneseCelulares/Smartphones/iPhone/iphone-8-apple-com-ios-11-camera-de-12-mp-resistente-a-agua-wi-fi-4g-lte-e-nfc-64gb-cinza-espacial-tela-hd-de-47-13375270.html?gclid=CjwKCAjwmq3kBRB_EiwAJkNDp4FqPec-qqa8FDHj8-sm7ak7_D4yQSrFtxb1Uyzp6nkHIl8MCt8ejRoCgOEQAvD_BwE&utm_medium=cpc&utm_source=gp_pla&IdSku=13375270&idLojista=16&s_kwcid=AL!427!3!239570166163!!!g!433246525874!&utm_campaign=Tele_Apple_Shopping&ef_id=XFTd4AAAAFx3g1Kl:20190315170321:s",
        description: "Apple com iOS 11, Câmera de 12 MP, Resistente à Água, Wi-Fi, 4G LTE e NFC, 64GB, Cinza-Espacial, Tela HD de 4,7\"",
        votes: 0
    }
];

async function seedDB() {
    try {
        // remove all posts in the feed
        await Post.deleteMany({}); 

        // Loop throuth the array and for each element create a new post
        for(let post of posts) {
            let newPost = await Post.create(post);
            newPost.save();
        }
    } 
    catch(err) {  
        console.log(err);
    }
}

module.exports = seedDB;
