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
        votes: 10
    },
    {
        name: `Smartphone Samsung Galaxy S9 SM-G9600ZKKZTO 128GB Preto Tela 5.8" Câmera 12MP Android 8.0`,
        price: "R$ 2.989,00",
        image: `https://static.carrefour.com.br/medias/sys_master/images/images/h62/h0f/h00/h00/11180455559198.jpg`,
        site: "https://www.carrefour.com.br/Smartphone-Samsung-Galaxy-S9-SM-G9600ZKKZTO-128GB-Preto-Tela-5-8-Camera-12MP-Android-8-0/p/5285569?crfetp_rop=sem&crfetp_ed=google_dsa_lista&crfetp_ad=todos-os-produtos&crfetp_cnt=link_patrocinado&crfetp_trm=ecomm&utm_source=google_dsa_lista&utm_medium=sem&utm_campaign=todos-os-produtos&gclid=Cj0KCQjwkoDmBRCcARIsAG3xzl8TXtHnuqggiAfN0Q2cD4Q2TPChU_9njt4P_TEBjDbq48NsH-u5wgMaAre7EALw_wcB",
        description: `Procurando por um celular de qualidade e com multifunções? Então, sua busca acabou, pois você acabou de encontrar o Smartphone SM-G9600ZKKZTO Galaxy S9, da Samsung. Esse produto possui 128GB de memória interna, 4GB de memória RAM, tela Infinita de 5.8", resolução do vídeo UHD 4K, Super Slow Motion + 8MP frontal com Auto Focus, processador Octa-Core,  conecta-se via Wi-fi e Bluetooth e é Dual Chip.`,
        votes: 43
    },
    {
        name: `Smartphone Samsung Galaxy A30 Dual Tela 6.4 32Gb Sd 32Gb`,
        price: "R$ 1.599,90",
        image: `https://static.carrefour.com.br/medias/sys_master/images/images/ha8/h5d/h00/h00/13592782962718.jpg`,
        site: "https://www.carrefour.com.br/Smartphone-Samsung-Galaxy-A30-Dual-Tela-6-4-32Gb-Sd-32Gb/p/MV15529549?crfint=product|chaordic|novidades_que_chegaram_pra_voce|Samsung|MV15529549|2",
        description: `Tela: touchscreen capacitivo multitouch com proteção corning gorilla glass 3..modelo: sma305g/ds..polegadas: 6.4, 100,5 cm2 ( 84,9% da relação telaparacorpo)..bluetooth: 5.0, a2dp, le..wifi: 802.11 a/b/g/n/ac, dualband, wifi direct, hotspot..energia / voltagem: carregador: ac 100240v 50/60hz..conexões: usb tipoc , usb 2.0, jack audio 3.5mm..sistema operacional: android 9.0 (pie)..resolução: 1080 x 2340 pixels, taxa 19,5: 9 (403 ppi de densidade)..video: mpeg4, aac+, aaclc, amrnb, amrwb, divx, evrc, flac, h.263, h.264, h265/hevc, midi, mp3, opus, pc..cor: branco..chip: dual sim (nanosim, dual standby)..frequência 2g: gsm: 850/900/1800/1900 sim 1 & sim 2..frequência 3g: wcdma: 850/900/(1700/2100)/1900mhz..frequência 4g: lte: (20)800, (b5)850, (b8)900, (b4)1700/2100, (3)1800, (2)1900, (7)2600mhz..display: super amoled..câmera: traseira: 16mp + 5 mp com led flash video 1080p 30fps frontal 16mp..processador cpu: octacore exynos 7904 octa (14 nm) gpu malig71 mp2..memória: interna: 32gb/3gb ram suporta cartão microsd de até 512gb (incluído de 32gb)..conectividade: agps, glonass, bds, rádio fm..áudio: 3gp, 3g2, aac, avi, adts, awb, divx, flac, imy, mid, mkv, mp3, mpeg4, mxmf, ogg, ota, rtttl, rtx, w..sensor: impressão digital (montada na traseira), acelerômetro, proximidade, bússola..dimensões: celular: 158.5 x 74.7 x 7.7 mm embalagem: 50 x 85 x 170mm..peso: celular: 165g embalagem: 345g..bateria: não removível lipo 4000 mah..anatel: 0385041597`,
        votes: 64
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
