const Post = require('./models/post');

const posts = [
    {
        name: `Notebook Acer Aspire 5 A515-51-51UX Intel Core i5 - 8GB 1TB 15,6” Windows 10`,
        price: "2.444,97",
        image: `https://a-static.mlcdn.com.br/618x463/notebook-acer-aspire-5-a515-51-51ux-intel-core-i5-8gb-1tb-156-windows-10/magazineluiza/220707900/ee712d3ece0dfe5a2e62e4884524c47e.jpg`,
        site: `https://www.magazineluiza.com.br/notebook-acer-aspire-5-a515-51-51ux-intel-core-i5-8gb-1tb-156-windows-10/p/220707900/in/note/`,
        description: `O Samsung Expert X30 é o notebook com processador Intel Core i5, memória RAM de 8GB, 1TB de HD, tela LED HD de 15,6" e sistema operacional Windows 10 Home. Voltado para pessoas dinâmicas que buscam um produto que ofereça alto desempenho aliado a um design moderno e elegante, e que conta com avançadas características de segurança.`,
        votes: 45,
        category: 'notebook'
    },
    {
        name: 'iPhone 7 Apple 3D Touch, iOS 11, Touch ID',
        description: `Apple: iPhone 7 Apple 3D Touch, iOS 11, Touch ID, Câm.12MP, Resistente à Água e Sistema de Alto-falantes Estéreo, 32GB, Preto Matte, Tela HD de 4,7"`,
        price: '2.535,55',
        image: `https://www.casasbahia-imagens.com.br/TelefoneseCelulares/Smartphones/iPhone/11526479/830716826/iphone-7-apple-3d-touch-ios-11-touch-id-cam-12mp-resistente-a-agua-e-sistema-de-alto-falantes-estereo-32gb-preto-matte-tela-hd-de-47-11526479.jpg`,
        site: 'https://www.casasbahia.com.br/TelefoneseCelulares/Smartphones/iPhone/iphone-7-apple-3d-touch-ios-11-touch-id-cam-12mp-resistente-a-agua-e-sistema-de-alto-falantes-estereo-32gb-preto-matte-tela-hd-de-47-11526479.html?gclid=CjwKCAjwmq3kBRB_EiwAJkNDp7rFSILzbsP1yheEoAUaCrZz2SXp9PLBuCHJTlZwAh7jLH66FoB4iBoCMX0QAvD_BwE&utm_medium=Cpc&utm_source=GP_PLA&IdSku=11526479&idLojista=10037&s_kwcid=AL!427!3!243930487418!!!g!433246525874!&utm_campaign=Tele_Apple_Shopping&ef_id=XFTd4AAAAFx3g1Kl:20190315160335:s',
        votes: 53,
        category: 'celular'
    },
    {
        name: "iPhone 8 Cinza Espacial, com Tela de 4,7”, 4G, 64 GB e Câmera de 12 MP",
        price: "2.878,29",
        image: "https://io.fastshop.com.br/wcsstore/FastShopCAS/imagens/_AE_Apple/AEMQ6G2BRACNZ/AEMQ6G2BRACNZ_PRD_447_1.jpg",
        site: "https://www.fastshop.com.br/web/p/d/AEMQ6G2BRACNZ_PRD/iphone-8-cinza-espacial-com-tela-de-47-4g-64-gb-e-camera-de-12-mp-mq6g2bra",
        description: "Design inovador, totalmente em vidro. A câmera que o mundo inteiro adora, ainda melhor. O chip mais poderoso e inteligente em qualquer smartphone. Recarga sem fio simples de verdade. E experiências de realidade aumentada envolventes como nunca. O iPhone 8 é brilhante. É uma nova geração do iPhone.",
        votes: 15,
        category: 'celular'
    },
    {
        name: `Smartphone Samsung Galaxy M10 32GB Dual Chip Android 8.1 Tela 6,2" Octa-Core 4G Câmera 13+5MP - Azul`,
        price: "809,10",
        image: `https://images-americanas.b2w.io/produtos/01/00/oferta/134253/7/134253775_1GG.jpg`,
        site: "https://www.americanas.com.br/produto/134253767?opn=YSMESP&loja=02&epar=bp_pl_00_go_pla_tel_smartphone_todas_geral_apostas&WT.srch=1&acc=e789ea56094489dffd798f86ff51c7a9&i=5612cbe46ed24cafb5cae011&o=5cd33d3d6c28a3cb50bdf36a&gclid=Cj0KCQjwuLPnBRDjARIsACDzGL2Xd1ovi23nIMjEYp087UuLfv6yOKNTaIbJFKQE_FhDljnSRnFiVGEaAh7FEALw_wcB",
        description: `Código	134253767
                    Código de barras	7892509108355, 7892509108256
                    NFC	Não
                    Conexões	Wi-Fi,3G,4G
                    Peso liq. aproximado do produto (Kg)	163g
                    Banda	B1(2100), B2(1900), B4(AWS), B5(850), B8(900)
                    Tipo de Tela	LCD TFT
                    Tipo de Chip	Nano Chip
                    Memória Ram	3GB
                    Referência do Modelo	Galaxy M10
                    Filmadora	Full HD
                    Cor - ficha técnica	Azul
                    Sistema Operacional	Android
                    Outros Recursos	null
                    Recursos de chamada	Viva Voz
                    Multichip	Dual Chip
                    Fabricante	Samsung
                    Versão S.O.	Android 8.1
                    Memória Interna	32GB
                    Expansivo até?	MicroSD até 512GB
                    Câmera Frontal	5MP
                    Dimensões do produto - cm (AxLxP)	15,5x7,5x0,7cm
                    SAC	4004-0000 (Capitais e grandes centros) ou 0800 124-421 (Demais cidades e regiões)
                    Processador	Octa-Core
                    Câmera Traseira	13 + 5MP (Dual Traseira)`,
        votes: 64,
        category: 'celular'
    },
    {
        name: `Tablet Samsung Galaxy Tab A 10.5 T595 - Preto`,
        price: "1.424,05",
        image: `https://images-submarino.b2w.io/produtos/01/00/item/133822/0/133822041_1GG.jpg`,
        site: `https://www.submarino.com.br/produto/133822041?WT.srch=1&acc=d47a04c6f99456bc289220d5d0ff208d&epar=bp_pl_00_go_g35174&gclid=CjwKCAjw8e7mBRBsEiwAPVxxiLSkR7deySFroGz7AmdwKX37olRtfCcyb4r0cKr4bm2G1K_2t4gcaxoCvvwQAvD_BwE&i=561e53416ed24cafb5322074&o=5bae44a2ebb19ac62cba431e&opn=XMLGOOGLE&sellerId=00776574000660`,
        description: `O Samsung Expert X30 é o notebook com processador Intel Core i5, memória RAM de 8GB, 1TB de HD, tela LED HD de 15,6" e sistema operacional Windows 10 Home. Voltado para pessoas dinâmicas que buscam um produto que ofereça alto desempenho aliado a um design moderno e elegante, e que conta com avançadas características de segurança.`,
        votes: 85,
        category: 'tablet'
    },
    {
        name: `Notebook Samsung Expert X30 Intel Core i5 - 8GB 1TB LED 15,6” Windows 10`,
        price: "2.491,47",
        image: `https://a-static.mlcdn.com.br/618x463/notebook-samsung-expert-x30-intel-core-i5-8gb-1tb-led-156-windows-10/magazineluiza/221031900/74a0733b0b83a5abeea7a92136908b76.jpg`,
        site: `https://www.magazineluiza.com.br/notebook-samsung-expert-x30-intel-core-i5-8gb-1tb-led-156-windows-10/p/221031900/in/ssex/?&utm_source=google&utm_medium=pla&utm_campaign=&partner_id=4651&seller_id=magazineluiza&product_group_id=515549405253&ad_group_id=66665424636&aw_viq=pla&gclid=CjwKCAjw8e7mBRBsEiwAPVxxiAsAc_JgvoPCdKMI2XbXD2Pptmfdi7dWZ_B9uZpyjU4ThXsZ2T0RMxoCTyIQAvD_BwE`,
        description: `O Samsung Expert X30 é o notebook com processador Intel Core i5, memória RAM de 8GB, 1TB de HD, tela LED HD de 15,6" e sistema operacional Windows 10 Home. Voltado para pessoas dinâmicas que buscam um produto que ofereça alto desempenho aliado a um design moderno e elegante, e que conta com avançadas características de segurança.`,
        votes: 23,
        category: 'notebook'
    },
    {
        name: `Smartphone Samsung Galaxy S9 SM-G9600ZKKZTO 128GB Preto Tela 5.8" Câmera 12MP Android 8.0`,
        price: "R2.989,00",
        image: `https://static.carrefour.com.br/medias/sys_master/images/images/h62/h0f/h00/h00/11180455559198.jpg`,
        site: "https://www.carrefour.com.br/Smartphone-Samsung-Galaxy-S9-SM-G9600ZKKZTO-128GB-Preto-Tela-5-8-Camera-12MP-Android-8-0/p/5285569?crfetp_rop=sem&crfetp_ed=google_dsa_lista&crfetp_ad=todos-os-produtos&crfetp_cnt=link_patrocinado&crfetp_trm=ecomm&utm_source=google_dsa_lista&utm_medium=sem&utm_campaign=todos-os-produtos&gclid=Cj0KCQjwkoDmBRCcARIsAG3xzl8TXtHnuqggiAfN0Q2cD4Q2TPChU_9njt4P_TEBjDbq48NsH-u5wgMaAre7EALw_wcB",
        description: `Procurando por um celular de qualidade e com multifunções? Então, sua busca acabou, pois você acabou de encontrar o Smartphone SM-G9600ZKKZTO Galaxy S9, da Samsung. Esse produto possui 128GB de memória interna, 4GB de memória RAM, tela Infinita de 5.8", resolução do vídeo UHD 4K, Super Slow Motion + 8MP frontal com Auto Focus, processador Octa-Core,  conecta-se via Wi-fi e Bluetooth e é Dual Chip.`,
        votes: 45,
        category: 'celular'
    },
    {
        name: `Tablet Samsung Galaxy Tab A SM-T385 16GB 4G Tela 8" Android Quad-Core - Preto`,
        price: "949,00",
        image: `https://images-submarino.b2w.io/produtos/01/00/item/132638/8/132638866_1GG.jpg`,
        site: `https://www.submarino.com.br/produto/132638866?DCSext.recom=RR_item_page.rr1-CategorySiloedViewCP&nm_origem=rec_item_page.rr1-CategorySiloedViewCP&nm_ranking_rec=2`,
        description: `O Samsung Expert X30 é o notebook com processador Intel Core i5, memória RAM de 8GB, 1TB de HD, tela LED HD de 15,6" e sistema operacional Windows 10 Home. Voltado para pessoas dinâmicas que buscam um produto que ofereça alto desempenho aliado a um design moderno e elegante, e que conta com avançadas características de segurança.`,
        votes: 15,
        category: 'tablet'
    },
    {
        name: `Moto G7 Play Dourado Motorola com Tela de 5,7", 4G, 32 GB e Câmera de 13 MP`,
        price: "849,06",
        image: `https://io.fastshop.com.br/wcsstore/FastShopCAS/imagens/_CL_Celular/MRXT19522DRD/MRXT19522DRD_PRD_447_1.jpg`,
        site: `https://www.fastshop.com.br/web/p/d/MRXT19522DRD_PRD/moto-g7-play-dourado-motorola-com-tela-de-57-4g-32-gb-e-camera-de-13-mp-xt1952-2`,
        description: `Sistema Operacional
                    Android Pie - 9.0

                    Tela
                    Tamanho: 5,7"
                    Material: IPS

                    Conectividade
                    4G 
                    Wi-Fi 802.11 a/b/g/n
                    EDGE 
                    GPRS 
                    Bluetooth 4.2

                    Capacidade
                    32GB * 
                    Extensão para Cartões de Memória: até 256GB
                    * Parte da memória interna já é utilizada pelo sistema operacional e aplicativos pré-instalados

                    Processador
                    Qualcomm Snapdragon 632 (SDM632)

                    Memória RAM
                    2GB

                    Câmera Traseira
                    13MP
                    Flash
                    Lente: 78º
                    Abertura: f/2.0

                    Câmera Frontal
                    8MP
                    Lente: 81º
                    Abertura: f/2.2

                    Filmadora 
                    HD+ - 720 x 1440 (720 x 1512 incluindo o notch)
                    `,
        votes: 28,
        category: 'celular'
    },
    {
        name: `Notebook Gamer Acer Intel Core i5-7300HQ 8GB 1TB Placa GTX1050 4GB Tela 15,6" Windows 10 Aspire Nitro 5 50U2`,
        price: "3.799,05",
        image: `https://static.carrefour.com.br/medias/sys_master/images/images/h53/hd3/h00/h00/11766346678302.jpg`,
        site: `https://www.carrefour.com.br/Notebook-Gamer-Acer-Intel-Core-i5-7300HQ-8GB-1TB-Placa-GTX1050-4GB-Tela-15-6-Windows-10-Aspire-Nitro-5-50U2/p/5464862?gclid=Cj0KCQjwuLPnBRDjARIsACDzGL1sgJeub79JdVUp1GxLEShGwOYj7Z1znfPly3IC4nZ-NkP6WBnZip8aArBeEALw_wcB&utm_source=google_pla_1p&utm_medium=sem&s_kwcid=AL!705!3!172008722110!!!g!297683871088!&ef_id=XL5hjQAAAEvAHDCs:20190528121806:s`,
        description: `Se você quer uma máquina veloz e poderosa para rodar os seus games, esse notebook Acer Aspire Nitro5 é o que você procura. Além de possuir uma tela com resolução Full HD, ele tem um processador original Intel Core i5 e 8 GB de RAM, para dar toda a velocidade que você precisa, e uma placa de vídeo NVIDIA GeForce 1050, com 4 GB de memória dedicada. Assim, você terá todo o poder necessário para deixar os seus games incríveis.`,
        votes: 33,
        category: 'notebook'
    },
    {
        name: `Notebook Positivo Motion Q232AP Intel Atom 2GB 32GB SSD Tela LCD 14” Windows 10 - Cinza`,
        price: "944,99",
        image: `https://images-americanas.b2w.io/produtos/01/00/image/134296/7/134296741_1GG.jpg`,
        site: `https://www.americanas.com.br/produto/134296732?epar=buscape&hl=lower&opn=YYNKZB&s_term=YYNKZB&voltagem=BIVOLT`,
        description: `O Notebook Motion Q232AP da Positivo oferece todos os recursos para executar as suas tarefas. Compacto, com design moderno e mais fino, bordas arredondadas e leve atenderá todas as expectativas. 
            Projetado com processador dual core Cherry Trail Z8350, processamento de vídeo integrado Intel® HD Graphics, placa de som integrada e sistema operacional Windows 10, tenha em suas mãos um computador veloz com alto desempenho para desenvolver os seus trabalhos sem desacelerar. `,
        votes: 40,
        category: 'notebook'
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
