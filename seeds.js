const Post = require('./models/post');

const posts = [
    {
        name: `Notebook Acer Aspire 5 A515-51-51UX Intel Core i5 - 8GB 1TB 15,6” Windows 10`,
        price: "R$2.444,97",
        image: `https://a-static.mlcdn.com.br/618x463/notebook-acer-aspire-5-a515-51-51ux-intel-core-i5-8gb-1tb-156-windows-10/magazineluiza/220707900/ee712d3ece0dfe5a2e62e4884524c47e.jpg`,
        site: `https://www.magazineluiza.com.br/notebook-acer-aspire-5-a515-51-51ux-intel-core-i5-8gb-1tb-156-windows-10/p/220707900/in/note/`,
        description: `O Samsung Expert X30 é o notebook com processador Intel Core i5, memória RAM de 8GB, 1TB de HD, tela LED HD de 15,6" e sistema operacional Windows 10 Home. Voltado para pessoas dinâmicas que buscam um produto que ofereça alto desempenho aliado a um design moderno e elegante, e que conta com avançadas características de segurança.`,
        votes: 45,
        category: 'notebook'
    },
    {
        name: 'iPhone 7 Apple 3D Touch, iOS 11, Touch ID',
        description: `Apple: iPhone 7 Apple 3D Touch, iOS 11, Touch ID, Câm.12MP, Resistente à Água e Sistema de Alto-falantes Estéreo, 32GB, Preto Matte, Tela HD de 4,7"`,
        price: '2.249,10',
        image: `https://www.casasbahia-imagens.com.br/TelefoneseCelulares/Smartphones/iPhone/11526479/830716826/iphone-7-apple-3d-touch-ios-11-touch-id-cam-12mp-resistente-a-agua-e-sistema-de-alto-falantes-estereo-32gb-preto-matte-tela-hd-de-47-11526479.jpg`,
        site: 'https://www.casasbahia.com.br/TelefoneseCelulares/Smartphones/iPhone/iphone-7-apple-3d-touch-ios-11-touch-id-cam-12mp-resistente-a-agua-e-sistema-de-alto-falantes-estereo-32gb-preto-matte-tela-hd-de-47-11526479.html?gclid=CjwKCAjwmq3kBRB_EiwAJkNDp7rFSILzbsP1yheEoAUaCrZz2SXp9PLBuCHJTlZwAh7jLH66FoB4iBoCMX0QAvD_BwE&utm_medium=Cpc&utm_source=GP_PLA&IdSku=11526479&idLojista=10037&s_kwcid=AL!427!3!243930487418!!!g!433246525874!&utm_campaign=Tele_Apple_Shopping&ef_id=XFTd4AAAAFx3g1Kl:20190315160335:s',
        votes: 53,
        category: 'celular'
    },
    {
        name: "iPhone 8",
        price: "2.872,77",
        image: "https://www.pontofrio-imagens.com.br/TelefoneseCelulares/Smartphones/iPhone/13375270/990411514/iphone-8-apple-com-ios-11-camera-de-12-mp-resistente-a-agua-wi-fi-4g-lte-e-nfc-64gb-cinza-espacial-tela-hd-de-47-13375270.jpg",
        site: "https://www.pontofrio.com.br/TelefoneseCelulares/Smartphones/iPhone/iphone-8-apple-com-ios-11-camera-de-12-mp-resistente-a-agua-wi-fi-4g-lte-e-nfc-64gb-cinza-espacial-tela-hd-de-47-13375270.html?gclid=CjwKCAjwmq3kBRB_EiwAJkNDp4FqPec-qqa8FDHj8-sm7ak7_D4yQSrFtxb1Uyzp6nkHIl8MCt8ejRoCgOEQAvD_BwE&utm_medium=cpc&utm_source=gp_pla&IdSku=13375270&idLojista=16&s_kwcid=AL!427!3!239570166163!!!g!433246525874!&utm_campaign=Tele_Apple_Shopping&ef_id=XFTd4AAAAFx3g1Kl:20190315170321:s",
        description: "Apple com iOS 11, Câmera de 12 MP, Resistente à Água, Wi-Fi, 4G LTE e NFC, 64GB, Cinza-Espacial, Tela HD de 4,7\"",
        votes: 10,
        category: 'celular'
    },
    {
        name: `Smartphone Samsung Galaxy A30 Dual Tela 6.4 32Gb Sd 32Gb`,
        price: "R$ 1.599,90",
        image: `https://static.carrefour.com.br/medias/sys_master/images/images/ha8/h5d/h00/h00/13592782962718.jpg`,
        site: "https://www.carrefour.com.br/Smartphone-Samsung-Galaxy-A30-Dual-Tela-6-4-32Gb-Sd-32Gb/p/MV15529549?crfint=product|chaordic|novidades_que_chegaram_pra_voce|Samsung|MV15529549|2",
        description: `Tela: touchscreen capacitivo multitouch com proteção corning gorilla glass 3..modelo: sma305g/ds..polegadas: 6.4, 100,5 cm2 ( 84,9% da relação telaparacorpo)..bluetooth: 5.0, a2dp, le..wifi: 802.11 a/b/g/n/ac, dualband, wifi direct, hotspot..energia / voltagem: carregador: ac 100240v 50/60hz..conexões: usb tipoc , usb 2.0, jack audio 3.5mm..sistema operacional: android 9.0 (pie)..resolução: 1080 x 2340 pixels, taxa 19,5: 9 (403 ppi de densidade)..video: mpeg4, aac+, aaclc, amrnb, amrwb, divx, evrc, flac, h.263, h.264, h265/hevc, midi, mp3, opus, pc..cor: branco..chip: dual sim (nanosim, dual standby)..frequência 2g: gsm: 850/900/1800/1900 sim 1 & sim 2..frequência 3g: wcdma: 850/900/(1700/2100)/1900mhz..frequência 4g: lte: (20)800, (b5)850, (b8)900, (b4)1700/2100, (3)1800, (2)1900, (7)2600mhz..display: super amoled..câmera: traseira: 16mp + 5 mp com led flash video 1080p 30fps frontal 16mp..processador cpu: octacore exynos 7904 octa (14 nm) gpu malig71 mp2..memória: interna: 32gb/3gb ram suporta cartão microsd de até 512gb (incluído de 32gb)..conectividade: agps, glonass, bds, rádio fm..áudio: 3gp, 3g2, aac, avi, adts, awb, divx, flac, imy, mid, mkv, mp3, mpeg4, mxmf, ogg, ota, rtttl, rtx, w..sensor: impressão digital (montada na traseira), acelerômetro, proximidade, bússola..dimensões: celular: 158.5 x 74.7 x 7.7 mm embalagem: 50 x 85 x 170mm..peso: celular: 165g embalagem: 345g..bateria: não removível lipo 4000 mah..anatel: 0385041597`,
        votes: 64,
        category: 'celular'
    },
    {
        name: `Tablet Samsung Galaxy Tab A 10.5 T595 - Preto`,
        price: "R$1.499,00",
        image: `https://images-submarino.b2w.io/produtos/01/00/item/133822/0/133822041_1GG.jpg`,
        site: `https://www.submarino.com.br/produto/133822041?WT.srch=1&acc=d47a04c6f99456bc289220d5d0ff208d&epar=bp_pl_00_go_g35174&gclid=CjwKCAjw8e7mBRBsEiwAPVxxiLSkR7deySFroGz7AmdwKX37olRtfCcyb4r0cKr4bm2G1K_2t4gcaxoCvvwQAvD_BwE&i=561e53416ed24cafb5322074&o=5bae44a2ebb19ac62cba431e&opn=XMLGOOGLE&sellerId=00776574000660`,
        description: `O Samsung Expert X30 é o notebook com processador Intel Core i5, memória RAM de 8GB, 1TB de HD, tela LED HD de 15,6" e sistema operacional Windows 10 Home. Voltado para pessoas dinâmicas que buscam um produto que ofereça alto desempenho aliado a um design moderno e elegante, e que conta com avançadas características de segurança.`,
        votes: 85,
        category: 'tablet'
    },
    {
        name: `Notebook Samsung Expert X30 Intel Core i5 - 8GB 1TB LED 15,6” Windows 10`,
        price: "R$2.491,47",
        image: `https://a-static.mlcdn.com.br/618x463/notebook-samsung-expert-x30-intel-core-i5-8gb-1tb-led-156-windows-10/magazineluiza/221031900/74a0733b0b83a5abeea7a92136908b76.jpg`,
        site: `https://www.magazineluiza.com.br/notebook-samsung-expert-x30-intel-core-i5-8gb-1tb-led-156-windows-10/p/221031900/in/ssex/?&utm_source=google&utm_medium=pla&utm_campaign=&partner_id=4651&seller_id=magazineluiza&product_group_id=515549405253&ad_group_id=66665424636&aw_viq=pla&gclid=CjwKCAjw8e7mBRBsEiwAPVxxiAsAc_JgvoPCdKMI2XbXD2Pptmfdi7dWZ_B9uZpyjU4ThXsZ2T0RMxoCTyIQAvD_BwE`,
        description: `O Samsung Expert X30 é o notebook com processador Intel Core i5, memória RAM de 8GB, 1TB de HD, tela LED HD de 15,6" e sistema operacional Windows 10 Home. Voltado para pessoas dinâmicas que buscam um produto que ofereça alto desempenho aliado a um design moderno e elegante, e que conta com avançadas características de segurança.`,
        votes: 23,
        category: 'notebook'
    },
    {
        name: `Smartphone Samsung Galaxy S9 SM-G9600ZKKZTO 128GB Preto Tela 5.8" Câmera 12MP Android 8.0`,
        price: "R$ 2.989,00",
        image: `https://static.carrefour.com.br/medias/sys_master/images/images/h62/h0f/h00/h00/11180455559198.jpg`,
        site: "https://www.carrefour.com.br/Smartphone-Samsung-Galaxy-S9-SM-G9600ZKKZTO-128GB-Preto-Tela-5-8-Camera-12MP-Android-8-0/p/5285569?crfetp_rop=sem&crfetp_ed=google_dsa_lista&crfetp_ad=todos-os-produtos&crfetp_cnt=link_patrocinado&crfetp_trm=ecomm&utm_source=google_dsa_lista&utm_medium=sem&utm_campaign=todos-os-produtos&gclid=Cj0KCQjwkoDmBRCcARIsAG3xzl8TXtHnuqggiAfN0Q2cD4Q2TPChU_9njt4P_TEBjDbq48NsH-u5wgMaAre7EALw_wcB",
        description: `Procurando por um celular de qualidade e com multifunções? Então, sua busca acabou, pois você acabou de encontrar o Smartphone SM-G9600ZKKZTO Galaxy S9, da Samsung. Esse produto possui 128GB de memória interna, 4GB de memória RAM, tela Infinita de 5.8", resolução do vídeo UHD 4K, Super Slow Motion + 8MP frontal com Auto Focus, processador Octa-Core,  conecta-se via Wi-fi e Bluetooth e é Dual Chip.`,
        votes: 43,
        category: 'celular'
    },
    {
        name: `Tablet Samsung Galaxy Tab A SM-T385 16GB 4G Tela 8" Android Quad-Core - Preto`,
        price: "R$949,00",
        image: `https://images-submarino.b2w.io/produtos/01/00/item/132638/8/132638866_1GG.jpg`,
        site: `https://www.submarino.com.br/produto/132638866?DCSext.recom=RR_item_page.rr1-CategorySiloedViewCP&nm_origem=rec_item_page.rr1-CategorySiloedViewCP&nm_ranking_rec=2`,
        description: `O Samsung Expert X30 é o notebook com processador Intel Core i5, memória RAM de 8GB, 1TB de HD, tela LED HD de 15,6" e sistema operacional Windows 10 Home. Voltado para pessoas dinâmicas que buscam um produto que ofereça alto desempenho aliado a um design moderno e elegante, e que conta com avançadas características de segurança.`,
        votes: 15,
        category: 'tablet'
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
