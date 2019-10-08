/**
 * Copyright 2016 Google Inc. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
*/

// DO NOT EDIT THIS GENERATED OUTPUT DIRECTLY!
// This file should be overwritten as part of your build process.
// If you need to extend the behavior of the generated service worker, the best approach is to write
// additional code and include it using the importScripts option:
//   https://github.com/GoogleChrome/sw-precache#importscripts-arraystring
//
// Alternatively, it's possible to make changes to the underlying template file and then use that as the
// new base for generating output, via the templateFilePath option:
//   https://github.com/GoogleChrome/sw-precache#templatefilepath-string
//
// If you go that route, make sure that whenever you update your sw-precache dependency, you reconcile any
// changes made to this original template file with your modified copy.

// This generated service worker JavaScript will precache your site's resources.
// The code needs to be saved in a .js file at the top-level of your site, and registered
// from your pages in order to be used. See
// https://github.com/googlechrome/sw-precache/blob/master/demo/app/js/service-worker-registration.js
// for an example of how you can register this script and handle various service worker events.

/* eslint-env worker, serviceworker */
/* eslint-disable indent, no-unused-vars, no-multiple-empty-lines, max-nested-callbacks, space-before-function-paren, quotes, comma-spacing */
'use strict';

var precacheConfig = [["/2018/06/05/SpringBoot/01快速上手SpringBoot/快速上手SpringBoot/0.6294533078536897.png","a724f5cf771caa97858ab840de7a52be"],["/2018/06/05/SpringBoot/01快速上手SpringBoot/快速上手SpringBoot/gouJianXiangMu.jpg","236efb206e931619f6a02c7ced6883cf"],["/2018/06/05/SpringBoot/01快速上手SpringBoot/快速上手SpringBoot/ideahot.jpg","32e8db9988e538aa1fd06c89e95b13be"],["/2018/06/05/SpringBoot/01快速上手SpringBoot/快速上手SpringBoot/index.html","099d9bdbfdb861c20ece3c35289ef86a"],["/2018/06/05/SpringBoot/01快速上手SpringBoot/快速上手SpringBoot/mulujiegou.jpg","11da6405d38b4bde98ddeedb992aa91e"],["/2018/06/05/SpringBoot/01快速上手SpringBoot/快速上手SpringBoot/top.jpg","3fc8df58abf68773a73a96dcea807d6f"],["/2018/06/06/SpringBoot/02web开发实战/web开发实战/findAllStudent.jpg","764e34935492f514af9da309664f7360"],["/2018/06/06/SpringBoot/02web开发实战/web开发实战/findStudent.jpg","314e07b67d470e50b074944a31c2bb65"],["/2018/06/06/SpringBoot/02web开发实战/web开发实战/getDetails.jpg","12551bf4891b653a2e8588a3e91ed17e"],["/2018/06/06/SpringBoot/02web开发实战/web开发实战/index.html","244d393e2edf83fa54c1b4911fb23305"],["/2018/06/06/SpringBoot/02web开发实战/web开发实战/top.jpg","3150294395859dc16f37faeaec16f8ed"],["/2018/06/06/SpringBoot/02web开发实战/web开发实战/top.png","1a6fe876abdcced77ab808493493bd5c"],["/2018/06/06/SpringBoot/02web开发实战/web开发实战/valid.jpg","28768117767667765305151957f9b9f5"],["/2018/06/07/SpringBoot/03SpringDataJPA使用/SpringDataJPA使用/findAllByPassword.jpg","bbc266206d0c78ab4a654159e14d30e2"],["/2018/06/07/SpringBoot/03SpringDataJPA使用/SpringDataJPA使用/index.html","4b32fb90fa7722844bbf9b69714b6283"],["/2018/06/07/SpringBoot/03SpringDataJPA使用/SpringDataJPA使用/many-to-many.png","0c44a91da6b713da64519e1a7138019e"],["/2018/06/07/SpringBoot/03SpringDataJPA使用/SpringDataJPA使用/save.jpg","bb62f9d7f0301530b6bca08fb240ad28"],["/2018/06/07/SpringBoot/03SpringDataJPA使用/SpringDataJPA使用/top.jpg","750c6e95b48b6a2a85dc8c6d7449ec0e"],["/2018/06/07/SpringBoot/03SpringDataJPA使用/SpringDataJPA使用/top.png","b10dcb549350b830353996726e312b0a"],["/2018/06/08/SpringBoot/04SpringBoot集成Thymeleaf/SpringBoot集成Thymeleaf/01.png","68874eb03732a1c919e1b1507205b967"],["/2018/06/08/SpringBoot/04SpringBoot集成Thymeleaf/SpringBoot集成Thymeleaf/02.png","b0d94f20f5a3f8daaad360a7e0b60239"],["/2018/06/08/SpringBoot/04SpringBoot集成Thymeleaf/SpringBoot集成Thymeleaf/03.png","c384cff3283a1c527ce29a8d9b426985"],["/2018/06/08/SpringBoot/04SpringBoot集成Thymeleaf/SpringBoot集成Thymeleaf/index.html","02c119a9efc93c739b0e79bf5e18de8e"],["/2018/06/08/SpringBoot/04SpringBoot集成Thymeleaf/SpringBoot集成Thymeleaf/top.png","1bc377d57494a8dfffd6265d2cb9f1b5"],["/2018/06/09/SpringBoot/05SpringBoot集成MyBatis/SpringBoot集成MyBatis/idea.png","8128b07de8ab2a768536aace1f3e0c87"],["/2018/06/09/SpringBoot/05SpringBoot集成MyBatis/SpringBoot集成MyBatis/index.html","6fbf5fcc25cba8baf99a69a9db3a74eb"],["/2018/06/09/SpringBoot/05SpringBoot集成MyBatis/SpringBoot集成MyBatis/top.jpg","a62a105d84b24f7aacac0e5355ad1245"],["/2018/06/10/SpringBoot/06SpringBoot集成RabbitMQ/SpringBoot集成RabbitMQ/1972176598.png","81fe6d1c8002f7d78fa0978d96c06811"],["/2018/06/10/SpringBoot/06SpringBoot集成RabbitMQ/SpringBoot集成RabbitMQ/2.png","02a8f35c4b9b047bc6766af3f06d9b50"],["/2018/06/10/SpringBoot/06SpringBoot集成RabbitMQ/SpringBoot集成RabbitMQ/2014-2-21-9-54-26.png","40f9c6d5a2151439385d40cc7d99fe5c"],["/2018/06/10/SpringBoot/06SpringBoot集成RabbitMQ/SpringBoot集成RabbitMQ/2014-2-21-9-55-20.png","a28fb616e374f694a81bf44491c729ff"],["/2018/06/10/SpringBoot/06SpringBoot集成RabbitMQ/SpringBoot集成RabbitMQ/2014-2-21-9-57-37.png","4813eaedd8138a100a5c5dcf3edfa6e4"],["/2018/06/10/SpringBoot/06SpringBoot集成RabbitMQ/SpringBoot集成RabbitMQ/9323193930.png","988126c51d85e733f3fcd7bd7f20ff8f"],["/2018/06/10/SpringBoot/06SpringBoot集成RabbitMQ/SpringBoot集成RabbitMQ/erlang.png","81c848aca624c77a84e24487a8b15fc3"],["/2018/06/10/SpringBoot/06SpringBoot集成RabbitMQ/SpringBoot集成RabbitMQ/hello-world-example-routing.png","9f4731146188c74708edf77c431465be"],["/2018/06/10/SpringBoot/06SpringBoot集成RabbitMQ/SpringBoot集成RabbitMQ/index.html","a7b72e9163b93fa3665c1636a8342203"],["/2018/06/10/SpringBoot/06SpringBoot集成RabbitMQ/SpringBoot集成RabbitMQ/top.jpg","40f9e59e04e30bfcb474bbe7d54226a6"],["/2019/07/05/dubble/ApacheDubbo/1.png","7cf47573f94a677c6c4824dbb8a7c3a9"],["/2019/07/05/dubble/ApacheDubbo/12.png","48947b8165573db617057e4626fd4f9c"],["/2019/07/05/dubble/ApacheDubbo/13.png","7ed440b1ec0d2586cfa2ccd9b16c57ac"],["/2019/07/05/dubble/ApacheDubbo/14.png","0a0b56ac897d92716255463dad846ec8"],["/2019/07/05/dubble/ApacheDubbo/15.png","218f8b25433e6eb5efb5bad6abc23bfc"],["/2019/07/05/dubble/ApacheDubbo/16.png","e13d2ca201f995335167ef3f137294ce"],["/2019/07/05/dubble/ApacheDubbo/17.png","de82a54026cf52b0d99f17e6d3ba760f"],["/2019/07/05/dubble/ApacheDubbo/18.png","447b3874ec3e607a1da126abace48ff4"],["/2019/07/05/dubble/ApacheDubbo/19.png","78fcfce68b24909cfb8df1b7dfb21088"],["/2019/07/05/dubble/ApacheDubbo/2.png","7db06f5c49c6c27e1752e6ae3017ddc3"],["/2019/07/05/dubble/ApacheDubbo/20.png","4261dfb4fc102a637480083e7301ec88"],["/2019/07/05/dubble/ApacheDubbo/3.png","94caf14426b2e67bf922416c1ee9b74d"],["/2019/07/05/dubble/ApacheDubbo/4.png","c28456d3fed6409e359b419d7967e093"],["/2019/07/05/dubble/ApacheDubbo/5.png","d43e01056c12cbd6d3dbec8dfc6c1542"],["/2019/07/05/dubble/ApacheDubbo/6.png","b9fd0188137c4e27d0bf58f6d81988ec"],["/2019/07/05/dubble/ApacheDubbo/7.png","f8a8c32959430998d32ca6cfe2df662f"],["/2019/07/05/dubble/ApacheDubbo/8.png","4ca276957f710101482f5cc38fd7ce20"],["/2019/07/05/dubble/ApacheDubbo/9.png","f29055626fadc8859cfcf59cc86e6528"],["/2019/07/05/dubble/ApacheDubbo/index.html","a5de3dcd4dfdd2e32355ef83d4ca0322"],["/2019/07/05/dubble/ApacheDubbo/top.jpg","ced1f1cb3f02fe2d67e77f2d9ee33ab7"],["/2019/07/06/gitee/hexo-gitee搭建个人博客/01.png","f316641f6872ea8c9fc721338282ecb2"],["/2019/07/06/gitee/hexo-gitee搭建个人博客/02.png","7dd8954a789aeceec708565362eac211"],["/2019/07/06/gitee/hexo-gitee搭建个人博客/03.png","9f2e883c4d4289503d19a95d368b1cc7"],["/2019/07/06/gitee/hexo-gitee搭建个人博客/04.png","e875635dba806cc6b75cec12f5fb1d88"],["/2019/07/06/gitee/hexo-gitee搭建个人博客/05.png","18d4473b64ae4a8c1db27f75d1ab7c56"],["/2019/07/06/gitee/hexo-gitee搭建个人博客/06.png","9ecf5793283612af9556e24cd5fcd7ea"],["/2019/07/06/gitee/hexo-gitee搭建个人博客/07.png","e218007b397c58f278a127a3902a0cdc"],["/2019/07/06/gitee/hexo-gitee搭建个人博客/bizhi.jpg","461348ef0c51dd0774072cb051630082"],["/2019/07/06/gitee/hexo-gitee搭建个人博客/head.jpg","2c22ecc83eb39edfbee97349d61d3c5a"],["/2019/07/06/gitee/hexo-gitee搭建个人博客/index.html","72b798b9ac100c49945b0c1f0c579733"],["/2019/07/06/gitee/hexo-gitee搭建个人博客/index.jpg","8ec93388e356de05763392e27ae6fea0"],["/2019/07/06/gitee/hexo-gitee搭建个人博客/timg.jpg","06868fc6d756bb4c3a9497206343c947"],["/2019/07/06/gitee/hexo-gitee搭建个人博客/top.jpg","bee4985884e90096c1cf6257ee7eb53d"],["/2019/07/06/gitee/hexo-gitee搭建个人博客/top1.jpg","2565c8d06e593e4a7c357307f25c72ca"],["/2019/07/08/mysql/MySQL中DCL相关语句的使用/index.html","63ddff168f0f258db4b866e01370e1b5"],["/2019/07/08/mysql/MySQL中DCL相关语句的使用/top.jpg","a790b518f16066441bb4a8aa6e8f821c"],["/2019/07/08/mysql/MySQL中的事物/index.html","93f4030e8a17e10e6b426d8a31d125e9"],["/2019/07/09/javaSE/类加载器/index.html","1315d616f079f0407e48d56934a6cc80"],["/2019/07/09/javaSE/类加载器/top.gif","f8125845a83c7a4e5640729fbe060678"],["/2019/07/09/javaSE/类加载器/类加载器.png","83a854f2396880b27bf811de64261295"],["/2019/07/09/javaSE/类加载器/类加载器机制.png","baa6b8a11c8e40206af37ffc24176645"],["/2019/07/11/mysql/01-mysql优化-建表的原则/index.html","8caabff84b94c305f7f07696156377f2"],["/2019/07/11/mysql/01-mysql优化-建表的原则/top.jpg","c959887f9fa36c2657efd5065bc3ffd1"],["/2019/07/13/SpringBoot/SpringBoot2.0/SpringBoot2.0/01.png","4f425cda0ca77c8a963752bacb5629dd"],["/2019/07/13/SpringBoot/SpringBoot2.0/SpringBoot2.0/02.png","c99b684664d6f4cdae87e7ced9ede70f"],["/2019/07/13/SpringBoot/SpringBoot2.0/SpringBoot2.0/03.png","79215d2c04a65aae5c84ed174f875181"],["/2019/07/13/SpringBoot/SpringBoot2.0/SpringBoot2.0/04.png","ba2b83d5de55931675596e5bb3d90b0a"],["/2019/07/13/SpringBoot/SpringBoot2.0/SpringBoot2.0/05.png","3665c6c0d50eed6aa2f0002546d62efa"],["/2019/07/13/SpringBoot/SpringBoot2.0/SpringBoot2.0/06.png","d02c844bd834eca71dd20cebb5af40dd"],["/2019/07/13/SpringBoot/SpringBoot2.0/SpringBoot2.0/07.png","e7afcd92f58134ef3fe89b0b501d8440"],["/2019/07/13/SpringBoot/SpringBoot2.0/SpringBoot2.0/08.png","a1d9a28c5a90ac49447c2e1f0ae5ca10"],["/2019/07/13/SpringBoot/SpringBoot2.0/SpringBoot2.0/09.png","5a60fdea815fa26b4d55348d949fc409"],["/2019/07/13/SpringBoot/SpringBoot2.0/SpringBoot2.0/10.png","5406a3498e9865dd318793eb3b933edc"],["/2019/07/13/SpringBoot/SpringBoot2.0/SpringBoot2.0/11.png","815ed281fcb3f7f1639f47186aa993a9"],["/2019/07/13/SpringBoot/SpringBoot2.0/SpringBoot2.0/index.html","88a59dff12679973a1a8083b153baf67"],["/2019/07/13/SpringBoot/SpringBoot2.0/SpringBoot2.0/top.jpg","4c50aa9d0b1883670f90a4472a8e8b9d"],["/2019/07/13/SpringBoot/SpringDataJpa/SpringDataJpa01/01.png","e942efcc4676b37fead043d0d6444f50"],["/2019/07/13/SpringBoot/SpringDataJpa/SpringDataJpa01/02.png","d83a26d5af882dd9fef5a4207b204f72"],["/2019/07/13/SpringBoot/SpringDataJpa/SpringDataJpa01/03.png","ad2370a947953bce53f068c78846d351"],["/2019/07/13/SpringBoot/SpringDataJpa/SpringDataJpa01/05.png","2ccaf2081e276c6f9df40e56252c0146"],["/2019/07/13/SpringBoot/SpringDataJpa/SpringDataJpa01/06.png","1cc14c063816c5d41357b99c9624fa8c"],["/2019/07/13/SpringBoot/SpringDataJpa/SpringDataJpa01/07.png","f23cd3a37d4d89b4963807104ae03e46"],["/2019/07/13/SpringBoot/SpringDataJpa/SpringDataJpa01/08.png","04a27003ad83090f152fcdf98c0ed251"],["/2019/07/13/SpringBoot/SpringDataJpa/SpringDataJpa01/09.png","b9f1eda805e6318c10d86f2d66481542"],["/2019/07/13/SpringBoot/SpringDataJpa/SpringDataJpa01/10.png","b79d614c3551d04bf472b7b2c991283c"],["/2019/07/13/SpringBoot/SpringDataJpa/SpringDataJpa01/11.png","950ecae63f3bc65e4ccce614f1dfecee"],["/2019/07/13/SpringBoot/SpringDataJpa/SpringDataJpa01/12.png","42a8ca5d967bbba4a3159d865eef8581"],["/2019/07/13/SpringBoot/SpringDataJpa/SpringDataJpa01/13.png","9ffb5e6d5cbc0c1a2b0aa909882d0893"],["/2019/07/13/SpringBoot/SpringDataJpa/SpringDataJpa01/14.png","57cbff87f7ce9f218ec94792a218b9d6"],["/2019/07/13/SpringBoot/SpringDataJpa/SpringDataJpa01/15.png","44a7247f6acd49893a6885d489dd5bbd"],["/2019/07/13/SpringBoot/SpringDataJpa/SpringDataJpa01/16.png","a0a371d8d17c18c8c752d09df2883bf1"],["/2019/07/13/SpringBoot/SpringDataJpa/SpringDataJpa01/index.html","f18cc74b2db0856ff17fe3f15f6edb61"],["/2019/07/13/SpringBoot/SpringDataJpa/SpringDataJpa01/top.gif","231ee558490db633e7d5cdaa63207671"],["/2019/07/13/SpringBoot/SpringDataJpa/SpringDataJpa01/top.jpg","0c38ef0989306b839ffcb7b1cc9b9f6f"],["/2019/07/13/SpringBoot/SpringDataJpa/SpringDataJpa02/01.png","b76d52162046c3aef086fa292146b277"],["/2019/07/13/SpringBoot/SpringDataJpa/SpringDataJpa02/02.png","1ced90926dda182d9859cfa70ef65f05"],["/2019/07/13/SpringBoot/SpringDataJpa/SpringDataJpa02/03.png","d02872c9ee92ea991ef8b41e29f11c25"],["/2019/07/13/SpringBoot/SpringDataJpa/SpringDataJpa02/04.png","51bf8f7a14f7e8de1d3cf472ce9263d4"],["/2019/07/13/SpringBoot/SpringDataJpa/SpringDataJpa02/05.png","120ba7db69d3b7f10d84590297397989"],["/2019/07/13/SpringBoot/SpringDataJpa/SpringDataJpa02/06.png","5942549cb9f06e967345c80f27b8fca0"],["/2019/07/13/SpringBoot/SpringDataJpa/SpringDataJpa02/07.png","a33a9a32472e9c6ac8a9c52839027ec2"],["/2019/07/13/SpringBoot/SpringDataJpa/SpringDataJpa02/08.png","b5e3f9aa4c49b8d8b3d0a30180fa5b8b"],["/2019/07/13/SpringBoot/SpringDataJpa/SpringDataJpa02/09.png","7fcab9cc6fae4788f24a99782be73507"],["/2019/07/13/SpringBoot/SpringDataJpa/SpringDataJpa02/10.png","c0f914f3a16df0945a7e62919bd8d54e"],["/2019/07/13/SpringBoot/SpringDataJpa/SpringDataJpa02/11.png","4df647c5349b0251101efd46a7b6bb82"],["/2019/07/13/SpringBoot/SpringDataJpa/SpringDataJpa02/12.png","d6a4e7825fe650a3c66155f839943d05"],["/2019/07/13/SpringBoot/SpringDataJpa/SpringDataJpa02/13.png","2c3e0bf6f00f7f86e331568b4c47b585"],["/2019/07/13/SpringBoot/SpringDataJpa/SpringDataJpa02/14.png","23a78f93958ad43b680580cd92c2a051"],["/2019/07/13/SpringBoot/SpringDataJpa/SpringDataJpa02/15.png","3aa9dee8190a5727e5d7f017d9acef3d"],["/2019/07/13/SpringBoot/SpringDataJpa/SpringDataJpa02/16.png","0b7fd1a0deb41c8fc7e3f7de2d49d090"],["/2019/07/13/SpringBoot/SpringDataJpa/SpringDataJpa02/17.png","3d28b94c8ae57e96d46a9b033a89bf2c"],["/2019/07/13/SpringBoot/SpringDataJpa/SpringDataJpa02/18.png","aacf867397fa6ed75ed74632c191f3f8"],["/2019/07/13/SpringBoot/SpringDataJpa/SpringDataJpa02/19.png","e0b4e6117511958360d56e35d75431e7"],["/2019/07/13/SpringBoot/SpringDataJpa/SpringDataJpa02/20.png","16a8c74acaaf42a66437b7f578695693"],["/2019/07/13/SpringBoot/SpringDataJpa/SpringDataJpa02/index.html","7c4d219a4d515f33a7d73a8900dacb85"],["/2019/07/13/SpringBoot/SpringDataJpa/SpringDataJpa02/top.gif","aeb4090deceb6e99bb385797523a6d31"],["/2019/07/13/SpringBoot/SpringDataJpa/SpringDataJpa02/top.png","c798b439feeafa4641885ee7ff2053e5"],["/2019/07/13/SpringBoot/SpringDataJpa/SpringDataJpa03/01.png","4012c3e6360594fbb660cb514e59f03a"],["/2019/07/13/SpringBoot/SpringDataJpa/SpringDataJpa03/02.png","ffd1e6e5fc776d750ab7afa30c4b9a5c"],["/2019/07/13/SpringBoot/SpringDataJpa/SpringDataJpa03/03.png","ebcc8a405c1466464f9bfa77a6a34fda"],["/2019/07/13/SpringBoot/SpringDataJpa/SpringDataJpa03/04.png","78da9662eb664031a89754924286aba7"],["/2019/07/13/SpringBoot/SpringDataJpa/SpringDataJpa03/05.png","87b658b568fee5569635a3910e79d03a"],["/2019/07/13/SpringBoot/SpringDataJpa/SpringDataJpa03/06.png","94d3335c13b8fda872dc2fd8c2be7d07"],["/2019/07/13/SpringBoot/SpringDataJpa/SpringDataJpa03/07.png","8c62331957a5531e813e58bf3907cda7"],["/2019/07/13/SpringBoot/SpringDataJpa/SpringDataJpa03/08.png","af960ce6d5e1351d8d388a1e3ebac2ae"],["/2019/07/13/SpringBoot/SpringDataJpa/SpringDataJpa03/09.png","b97ddf7fd5ca6e9845391a9e37823397"],["/2019/07/13/SpringBoot/SpringDataJpa/SpringDataJpa03/10.png","2df3887d6586f4ce219b650325d26a29"],["/2019/07/13/SpringBoot/SpringDataJpa/SpringDataJpa03/11.png","ae3ba83d6746ff72d050054a3003fd2d"],["/2019/07/13/SpringBoot/SpringDataJpa/SpringDataJpa03/12.png","aee70bc38e6c6b41b69f7e6b3cc2ea41"],["/2019/07/13/SpringBoot/SpringDataJpa/SpringDataJpa03/13.png","621b181b9b3e580ae69067501dd9c3e1"],["/2019/07/13/SpringBoot/SpringDataJpa/SpringDataJpa03/14.png","00b3433b8fbe86d6b97b5f4e502a06fc"],["/2019/07/13/SpringBoot/SpringDataJpa/SpringDataJpa03/15.png","14300d85c0356dbeef89635f4ae5eb66"],["/2019/07/13/SpringBoot/SpringDataJpa/SpringDataJpa03/16.png","1ba0b957fc56bc22e91220b961ed83ed"],["/2019/07/13/SpringBoot/SpringDataJpa/SpringDataJpa03/index.html","ba2332ad77816e8c09171e899255182f"],["/2019/07/13/SpringBoot/SpringDataJpa/SpringDataJpa03/top.gif","d7af4b6eaf6ee16d6b32506ef277da66"],["/2019/07/13/SpringBoot/SpringDataJpa/SpringDataJpa03/top.jpg","28f037f25e306383dcc1eadafabd9d65"],["/2019/07/13/docker/docker/1-1.png","78cbf7b6765b8342645dffd291ddf6e5"],["/2019/07/13/docker/docker/1-2.png","880c9439a3927ebd4214802345596523"],["/2019/07/13/docker/docker/1-3.png","4f013603ffadcf5c8fd63d928143c811"],["/2019/07/13/docker/docker/9_1.png","ef4342104ee7fbfebab79875f75c8b6a"],["/2019/07/13/docker/docker/9_10.png","416bbf8cca7045e4a2699a0dbf61dcb2"],["/2019/07/13/docker/docker/9_11.png","69c0acfd52be68a24ec891f2408b73c9"],["/2019/07/13/docker/docker/9_12.png","afa26627a3e2e381b674ba7cc2bcc4be"],["/2019/07/13/docker/docker/9_17.png","b7af28d4603d6fb47d35c1902fe167d3"],["/2019/07/13/docker/docker/9_2.png","0945758d50aa67a62d5d8345ba534154"],["/2019/07/13/docker/docker/9_21.png","a889e2e7568e0b5507dd9bc6267f6452"],["/2019/07/13/docker/docker/9_22.png","433e71127b001abc9874a395c24398ae"],["/2019/07/13/docker/docker/9_23.png","3ef591f8c2df34fbded7c92854887a21"],["/2019/07/13/docker/docker/9_3.png","4bb580ca956219cd086ad0f54e4d45f2"],["/2019/07/13/docker/docker/9_4.png","c486198a6bb201a90882f5779842e018"],["/2019/07/13/docker/docker/9_5.png","bd240f8561d0f8cbcf3d162342393953"],["/2019/07/13/docker/docker/9_6.png","9dc7ae3cb4a42aece5ca99596f5e2ad2"],["/2019/07/13/docker/docker/9_7.png","af939c946934cfe4a39aa03b7e689ca6"],["/2019/07/13/docker/docker/9_8.png","82088e9b8c3ecb90d87433297bb66caf"],["/2019/07/13/docker/docker/9_81.png","be0271515afa0b6254f378ffe743c8d2"],["/2019/07/13/docker/docker/9_86.png","d03315aa06d048de0acefa866d5b8d9c"],["/2019/07/13/docker/docker/9_9.png","8b728f4e425a8650ed9ca97db0e46ca9"],["/2019/07/13/docker/docker/index.html","15e4f99174846fb5616d08f2e5bcec1b"],["/2019/07/13/docker/docker/top.jpg","8a0fa59101bdfbd17b25f0b60cbdc85e"],["/2019/07/16/问题/UriIsNotRegistered/01.png","1d9e7014fb08566c9e8c17740c76667c"],["/2019/07/16/问题/UriIsNotRegistered/02.png","7165579def142200f1348de01839b125"],["/2019/07/16/问题/UriIsNotRegistered/index.html","f6b3d42dd338ccefca7078ef17ccf1d1"],["/2019/07/16/问题/UriIsNotRegistered/top.jpg","4359dff8de68c64e992383d3933d020e"],["/2019/08/05/IDEA/热部署/1.png","3210063b61d78d9ae1970808629c33e8"],["/2019/08/05/IDEA/热部署/2.png","bb01eb8319cd2e9a0f948c5497ec3fcc"],["/2019/08/05/IDEA/热部署/3.png","27e4cfe7d674024619f85c15ca5692a0"],["/2019/08/05/IDEA/热部署/4.png","6ec19d45f3f83f9256fa902e99f7614d"],["/2019/08/05/IDEA/热部署/5.png","0899be718b815d30c7a1ccf0358715b5"],["/2019/08/05/IDEA/热部署/index.html","f0d9fcff2fc48f728cf875c4bb89eac0"],["/2019/08/12/问题/maven不显示插件/01.png","2d43c8beae2c3413e431cd9ba042cdfc"],["/2019/08/12/问题/maven不显示插件/index.html","e0684260f3027f9818c97502ed1e8134"],["/2019/08/12/问题/maven不显示插件/top.jpg","e3c5b48ffc56bc30d0dc89d8e22fe375"],["/2019/08/26/maven/修改maven默认仓库/1.png","ed425e4e6a8e7168a8e059f67aa9a191"],["/2019/08/26/maven/修改maven默认仓库/2.png","2b4e1d00c1cecbc33a0f25d190b29264"],["/2019/08/26/maven/修改maven默认仓库/index.html","711451277a9fe340f08c36e72c47ffce"],["/2019/08/26/maven/修改maven默认仓库/top.jpg","e70cc6d661af434a19769530340236bd"],["/2019/08/27/maven/常见的maven依赖/index.html","9bfa2d97d842e7324c12e13c1f0607f4"],["/2019/08/27/maven/常见的maven依赖/top.jpg","1643040c0d4c820a9c342af90ba489a9"],["/2019/08/27/问题/maven依赖报错解决方案/1.png","6f95c50c02f7108f15174ecbb5ffe89a"],["/2019/08/27/问题/maven依赖报错解决方案/index.html","24a45a50cf2a4af180912ce6db289d11"],["/2019/08/27/问题/maven依赖报错解决方案/top.gif","e502c6c7d41ed87e8102302ebddee5d1"],["/2019/08/27/问题/maven依赖报错解决方案/top.jpg","52b58cf38a9fa3b68854b665163a5899"],["/2019/08/27/问题/springMVC拦截器拦截静态资源问题/1.png","e703df3f8cc87bca31beb7ab5375026c"],["/2019/08/27/问题/springMVC拦截器拦截静态资源问题/2.png","e40ce5d9cecb71ecdc71a29ba22a8cad"],["/2019/08/27/问题/springMVC拦截器拦截静态资源问题/3.png","f8229c62cec9cec6fe59a8e9bd382eaa"],["/2019/08/27/问题/springMVC拦截器拦截静态资源问题/4.png","1c9b59c8f3efa3dc86f07ca152bbae5d"],["/2019/08/27/问题/springMVC拦截器拦截静态资源问题/5.png","25ee7ade0262737a727cac273a339546"],["/2019/08/27/问题/springMVC拦截器拦截静态资源问题/index.html","b3673b35cb10c1ae51f9f5fa75e45096"],["/2019/08/27/问题/springMVC拦截器拦截静态资源问题/top.jpg","68536122cdfe6a00498f6cbe5dfe9f1e"],["/2019/08/28/linux/关闭Centos7的防火墙/index.html","ce5f013f6f9f615889f00896551c8e82"],["/2019/08/28/linux/关闭Centos7的防火墙/top.jpg","daf421c502f913faa2319adb5688c5c0"],["/2019/08/28/linux/初始化Centos部署环境/index.html","8e35ccba5f2f7ccf8260e9ef5c8678c8"],["/2019/08/28/linux/初始化Centos部署环境/top.jpg","77c962dfe79fbfca73a4d5f078e24e1d"],["/2019/08/28/前端/Jquery分页插件的使用/index.html","042c8ecfd96ec18a667d0aee8a9fc1d9"],["/2019/10/08/理财/01.工作前五年决定你的一生之基金读后感/index.html","f287bf1ba60962146bc1772e84ade259"],["/2019/10/08/理财/01.工作前五年决定你的一生之基金读后感/top.jpg","0ef413d51545a522073983c52635bd14"],["/2019/10/08/简历/简历 - 副本/index.html","e751a86386125a6738c0408a1b8605cd"],["/2019/10/08/简历/简历-精简版/619265ebf38b40c4872ba5ee3793b672_th.png","04cc8d47cfab817d11fed21a2b6573e1"],["/2019/10/08/简历/简历-精简版/index.html","acceb237c206ab27b075ec34e2d2fb35"],["/2019/10/08/简历/简历-精简版/me.jpg","9aebff78c725c7533ce6b2c1199827b6"],["/2019/10/08/简历/简历-精简版/me2.jpg","ae52df136f21c47dfa888bff9c745061"],["/archives/2018/06/index.html","97c5796beed216302cff48389dd42ff1"],["/archives/2018/index.html","38683123184b7f4cf492af32a18a402b"],["/archives/2019/07/index.html","06b714c89e3ed8ac9d28956a4c83c5d4"],["/archives/2019/07/page/2/index.html","74e0009194eaf0db6488bb46a035f7fe"],["/archives/2019/08/index.html","d79fbbf887c4279f01aad84d0aece95b"],["/archives/2019/10/index.html","e8708ef70274913fcb14496117f1a3d1"],["/archives/2019/index.html","03c1b35e7ed96fca7f1bbc9eedaa5162"],["/archives/2019/page/2/index.html","f7494f2868134eaf3dc1739c03964e38"],["/archives/2019/page/3/index.html","67171b524656b294bd8dc3c25e112e7f"],["/archives/index.html","1e22a0e7b75d4f07118ff3d524151bed"],["/archives/page/2/index.html","f3376989a003e8f0f440002e5f260064"],["/archives/page/3/index.html","2fd8fe5afcadbda907cf5772d69e73fa"],["/categories/Docker/index.html","559145437f4be3f6ba94bdc215b69edc"],["/categories/Java核心/index.html","0346c4435bd7de7aec05eff5c6756c08"],["/categories/gitee/index.html","a6a14109214bc85c68b5a7155a59264a"],["/categories/idea/index.html","c483ff2694a541c5c0748a32d8cb7aca"],["/categories/index.html","6400a61a6115696a531badb44d935372"],["/categories/linux/index.html","869b9daeb53cd9ab79f03468cfbc1393"],["/categories/maven/index.html","a2f4aea37c21168bca35837666298e8c"],["/categories/前端/index.html","cea014ec2361c2706acba05739bdde3d"],["/categories/开发中遇到的问题/index.html","a61d3532d54d1a646f9d83e5d03c291d"],["/categories/微服务/index.html","12a2a561877fe82e809699c4d8e307e4"],["/categories/数据库/index.html","e428a063b427b1dc324d29a8d8132295"],["/categories/框架/index.html","0e726e8d15e97b153ac12b0fe7c17682"],["/categories/理财/index.html","f495a9cef452a743545dfd5068a0403c"],["/css/index.css","11ef5ffb125e80d7cd97262f7190e30d"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/img/404.jpg","23cf82ba04680b72d5616d74aa3f5550"],["/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["/img/alipay.jpg","9d7d25339256096f77b7a3634bcd6e33"],["/img/avatar.png","9eee8b7f139e0b0ddad209d66d3577a3"],["/img/comment_bg.png","04208f25e34b8f29f072efbb2e212c86"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/wechat.jpg","67599109276ad864d53e34817dbc0d72"],["/index.html","42855e0e172261b9171bc260d7fca474"],["/js/activate-power-mode.js","2345780cb71f6e17a20d9ca2283accda"],["/js/baidupush.js","7d26211fa55bebac2e0c0abeee05a267"],["/js/main.js","f19089ca2f58a7e91ba218b2cfb77d99"],["/js/nightshift.js","e498a040e1746e95b5ed33b9d41618f7"],["/js/runtimeshow.js","6bc5dc7652b39605152475b840e88899"],["/js/search/algolia.js","db2e58114adef0dfd2f2d0a246b50ef4"],["/js/search/local-search.js","e7bab78aa2b388479ea96bb0b04b6834"],["/js/third-party/anime.min.js","9b4bbe6deb700e1c3606eab732f5eea5"],["/js/third-party/canvas-ribbon.js","6ca731e8db63562c0dd6461eabbd65d7"],["/js/third-party/fireworks.js","080fdfcacffc6828826484645140af50"],["/js/third-party/jquery.fancybox.min.js","3c9fa1c1199cd4f874d855ecb1641335"],["/js/third-party/jquery.min.js","c9f5aeeca3ad37bf2aa006139b935f0a"],["/js/third-party/piao.js","d7a4ef27420717adccfca1c1287f8c44"],["/js/tw_cn.js","fbc127c110435085bde10997850bbc55"],["/js/utils.js","816e7d34d69996e6a4f0b92a81c16cca"],["/page/2/index.html","7b24bcc314a102285cc7a409275d280a"],["/page/3/index.html","25384f0782322ae01b4449d1cda2a78b"],["/tags/Centos7/index.html","1943d8dbc942138e96006a71888aaeb5"],["/tags/Docker/index.html","979dc43d14a19827f612858a98f5f42c"],["/tags/Dubble/index.html","174de0cb77277349fa4dc4ef567e34ab"],["/tags/MySQL/index.html","598d852b86d45086ac94c60ecd746bbf"],["/tags/SpringBoot/index.html","e15825ad8fb6b8ba10bc5d46c5f379a6"],["/tags/SpringBoot2-0/index.html","9898cb418595245180537f848c1368ca"],["/tags/SpringDataJPA/index.html","f0bea844d2e990e3a6eb19434c0568da"],["/tags/Zookeeper/index.html","892a067dd65e2b2984e8b0edf2dce9f9"],["/tags/gitee/index.html","5e56a6bcd71f1246bd14371929aad78a"],["/tags/idea/index.html","a913f01b07b06996d110bc64ac59364a"],["/tags/index.html","7407ab084605b317b2af29866c06a51e"],["/tags/java核心/index.html","368aa61a4eb9034ef3bea144cb63c452"],["/tags/jquery/index.html","549de14cc0ebdbb184eb36ff1edfbfbf"],["/tags/maven/index.html","86ef35ade030e420703b9db5bc4eeff9"],["/tags/springmvc/index.html","f11b752aaf8de92b638369999ddfc656"],["/tags/博客搭建/index.html","7d421ad0bf98b3df76c5e4a102e234a5"],["/tags/基金/index.html","2a847d2f3994bc1fb02f2ac14c2df3b6"],["/tags/开发中遇到的问题/index.html","5bf796b5a6e55c6a8997d30d2c3959ff"],["/tags/数据库/index.html","2147ce3f311946087f2bdfd2a0859f45"],["/tags/数据库优化/index.html","71e8546da9ba6fa0bb1178b640a7f0f7"]];
var cacheName = 'sw-precache-v3--' + (self.registration ? self.registration.scope : '');


var ignoreUrlParametersMatching = [/^utm_/];



var addDirectoryIndex = function (originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
      url.pathname += index;
    }
    return url.toString();
  };

var cleanResponse = function (originalResponse) {
    // If this is not a redirected response, then we don't have to do anything.
    if (!originalResponse.redirected) {
      return Promise.resolve(originalResponse);
    }

    // Firefox 50 and below doesn't support the Response.body stream, so we may
    // need to read the entire body to memory as a Blob.
    var bodyPromise = 'body' in originalResponse ?
      Promise.resolve(originalResponse.body) :
      originalResponse.blob();

    return bodyPromise.then(function(body) {
      // new Response() is happy when passed either a stream or a Blob.
      return new Response(body, {
        headers: originalResponse.headers,
        status: originalResponse.status,
        statusText: originalResponse.statusText
      });
    });
  };

var createCacheKey = function (originalUrl, paramName, paramValue,
                           dontCacheBustUrlsMatching) {
    // Create a new URL object to avoid modifying originalUrl.
    var url = new URL(originalUrl);

    // If dontCacheBustUrlsMatching is not set, or if we don't have a match,
    // then add in the extra cache-busting URL parameter.
    if (!dontCacheBustUrlsMatching ||
        !(url.pathname.match(dontCacheBustUrlsMatching))) {
      url.search += (url.search ? '&' : '') +
        encodeURIComponent(paramName) + '=' + encodeURIComponent(paramValue);
    }

    return url.toString();
  };

var isPathWhitelisted = function (whitelist, absoluteUrlString) {
    // If the whitelist is empty, then consider all URLs to be whitelisted.
    if (whitelist.length === 0) {
      return true;
    }

    // Otherwise compare each path regex to the path of the URL passed in.
    var path = (new URL(absoluteUrlString)).pathname;
    return whitelist.some(function(whitelistedPathRegex) {
      return path.match(whitelistedPathRegex);
    });
  };

var stripIgnoredUrlParameters = function (originalUrl,
    ignoreUrlParametersMatching) {
    var url = new URL(originalUrl);
    // Remove the hash; see https://github.com/GoogleChrome/sw-precache/issues/290
    url.hash = '';

    url.search = url.search.slice(1) // Exclude initial '?'
      .split('&') // Split into an array of 'key=value' strings
      .map(function(kv) {
        return kv.split('='); // Split each 'key=value' string into a [key, value] array
      })
      .filter(function(kv) {
        return ignoreUrlParametersMatching.every(function(ignoredRegex) {
          return !ignoredRegex.test(kv[0]); // Return true iff the key doesn't match any of the regexes.
        });
      })
      .map(function(kv) {
        return kv.join('='); // Join each [key, value] array into a 'key=value' string
      })
      .join('&'); // Join the array of 'key=value' strings into a string with '&' in between each

    return url.toString();
  };


var hashParamName = '_sw-precache';
var urlsToCacheKeys = new Map(
  precacheConfig.map(function(item) {
    var relativeUrl = item[0];
    var hash = item[1];
    var absoluteUrl = new URL(relativeUrl, self.location);
    var cacheKey = createCacheKey(absoluteUrl, hashParamName, hash, false);
    return [absoluteUrl.toString(), cacheKey];
  })
);

function setOfCachedUrls(cache) {
  return cache.keys().then(function(requests) {
    return requests.map(function(request) {
      return request.url;
    });
  }).then(function(urls) {
    return new Set(urls);
  });
}

self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return setOfCachedUrls(cache).then(function(cachedUrls) {
        return Promise.all(
          Array.from(urlsToCacheKeys.values()).map(function(cacheKey) {
            // If we don't have a key matching url in the cache already, add it.
            if (!cachedUrls.has(cacheKey)) {
              var request = new Request(cacheKey, {credentials: 'same-origin'});
              return fetch(request).then(function(response) {
                // Bail out of installation unless we get back a 200 OK for
                // every request.
                if (!response.ok) {
                  throw new Error('Request for ' + cacheKey + ' returned a ' +
                    'response with status ' + response.status);
                }

                return cleanResponse(response).then(function(responseToCache) {
                  return cache.put(cacheKey, responseToCache);
                });
              });
            }
          })
        );
      });
    }).then(function() {
      
      // Force the SW to transition from installing -> active state
      return self.skipWaiting();
      
    })
  );
});

self.addEventListener('activate', function(event) {
  var setOfExpectedUrls = new Set(urlsToCacheKeys.values());

  event.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return cache.keys().then(function(existingRequests) {
        return Promise.all(
          existingRequests.map(function(existingRequest) {
            if (!setOfExpectedUrls.has(existingRequest.url)) {
              return cache.delete(existingRequest);
            }
          })
        );
      });
    }).then(function() {
      
      return self.clients.claim();
      
    })
  );
});


self.addEventListener('fetch', function(event) {
  if (event.request.method === 'GET') {
    // Should we call event.respondWith() inside this fetch event handler?
    // This needs to be determined synchronously, which will give other fetch
    // handlers a chance to handle the request if need be.
    var shouldRespond;

    // First, remove all the ignored parameters and hash fragment, and see if we
    // have that URL in our cache. If so, great! shouldRespond will be true.
    var url = stripIgnoredUrlParameters(event.request.url, ignoreUrlParametersMatching);
    shouldRespond = urlsToCacheKeys.has(url);

    // If shouldRespond is false, check again, this time with 'index.html'
    // (or whatever the directoryIndex option is set to) at the end.
    var directoryIndex = 'index.html';
    if (!shouldRespond && directoryIndex) {
      url = addDirectoryIndex(url, directoryIndex);
      shouldRespond = urlsToCacheKeys.has(url);
    }

    // If shouldRespond is still false, check to see if this is a navigation
    // request, and if so, whether the URL matches navigateFallbackWhitelist.
    var navigateFallback = '';
    if (!shouldRespond &&
        navigateFallback &&
        (event.request.mode === 'navigate') &&
        isPathWhitelisted([], event.request.url)) {
      url = new URL(navigateFallback, self.location).toString();
      shouldRespond = urlsToCacheKeys.has(url);
    }

    // If shouldRespond was set to true at any point, then call
    // event.respondWith(), using the appropriate cache key.
    if (shouldRespond) {
      event.respondWith(
        caches.open(cacheName).then(function(cache) {
          return cache.match(urlsToCacheKeys.get(url)).then(function(response) {
            if (response) {
              return response;
            }
            throw Error('The cached response that was expected is missing.');
          });
        }).catch(function(e) {
          // Fall back to just fetch()ing the request if some unexpected error
          // prevented the cached response from being valid.
          console.warn('Couldn\'t serve response for "%s" from cache: %O', event.request.url, e);
          return fetch(event.request);
        })
      );
    }
  }
});


// *** Start of auto-included sw-toolbox code. ***
/* 
 Copyright 2016 Google Inc. All Rights Reserved.

 Licensed under the Apache License, Version 2.0 (the "License");
 you may not use this file except in compliance with the License.
 You may obtain a copy of the License at

     http://www.apache.org/licenses/LICENSE-2.0

 Unless required by applicable law or agreed to in writing, software
 distributed under the License is distributed on an "AS IS" BASIS,
 WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 See the License for the specific language governing permissions and
 limitations under the License.
*/!function(e){if("object"==typeof exports&&"undefined"!=typeof module)module.exports=e();else if("function"==typeof define&&define.amd)define([],e);else{var t;t="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:this,t.toolbox=e()}}(function(){return function e(t,n,r){function o(c,s){if(!n[c]){if(!t[c]){var a="function"==typeof require&&require;if(!s&&a)return a(c,!0);if(i)return i(c,!0);var u=new Error("Cannot find module '"+c+"'");throw u.code="MODULE_NOT_FOUND",u}var f=n[c]={exports:{}};t[c][0].call(f.exports,function(e){var n=t[c][1][e];return o(n?n:e)},f,f.exports,e,t,n,r)}return n[c].exports}for(var i="function"==typeof require&&require,c=0;c<r.length;c++)o(r[c]);return o}({1:[function(e,t,n){"use strict";function r(e,t){t=t||{};var n=t.debug||m.debug;n&&console.log("[sw-toolbox] "+e)}function o(e){var t;return e&&e.cache&&(t=e.cache.name),t=t||m.cache.name,caches.open(t)}function i(e,t){t=t||{};var n=t.successResponses||m.successResponses;return fetch(e.clone()).then(function(r){return"GET"===e.method&&n.test(r.status)&&o(t).then(function(n){n.put(e,r).then(function(){var r=t.cache||m.cache;(r.maxEntries||r.maxAgeSeconds)&&r.name&&c(e,n,r)})}),r.clone()})}function c(e,t,n){var r=s.bind(null,e,t,n);d=d?d.then(r):r()}function s(e,t,n){var o=e.url,i=n.maxAgeSeconds,c=n.maxEntries,s=n.name,a=Date.now();return r("Updating LRU order for "+o+". Max entries is "+c+", max age is "+i),g.getDb(s).then(function(e){return g.setTimestampForUrl(e,o,a)}).then(function(e){return g.expireEntries(e,c,i,a)}).then(function(e){r("Successfully updated IDB.");var n=e.map(function(e){return t.delete(e)});return Promise.all(n).then(function(){r("Done with cache cleanup.")})}).catch(function(e){r(e)})}function a(e,t,n){return r("Renaming cache: ["+e+"] to ["+t+"]",n),caches.delete(t).then(function(){return Promise.all([caches.open(e),caches.open(t)]).then(function(t){var n=t[0],r=t[1];return n.keys().then(function(e){return Promise.all(e.map(function(e){return n.match(e).then(function(t){return r.put(e,t)})}))}).then(function(){return caches.delete(e)})})})}function u(e,t){return o(t).then(function(t){return t.add(e)})}function f(e,t){return o(t).then(function(t){return t.delete(e)})}function h(e){e instanceof Promise||p(e),m.preCacheItems=m.preCacheItems.concat(e)}function p(e){var t=Array.isArray(e);if(t&&e.forEach(function(e){"string"==typeof e||e instanceof Request||(t=!1)}),!t)throw new TypeError("The precache method expects either an array of strings and/or Requests or a Promise that resolves to an array of strings and/or Requests.");return e}function l(e,t,n){if(!e)return!1;if(t){var r=e.headers.get("date");if(r){var o=new Date(r);if(o.getTime()+1e3*t<n)return!1}}return!0}var d,m=e("./options"),g=e("./idb-cache-expiration");t.exports={debug:r,fetchAndCache:i,openCache:o,renameCache:a,cache:u,uncache:f,precache:h,validatePrecacheInput:p,isResponseFresh:l}},{"./idb-cache-expiration":2,"./options":4}],2:[function(e,t,n){"use strict";function r(e){return new Promise(function(t,n){var r=indexedDB.open(u+e,f);r.onupgradeneeded=function(){var e=r.result.createObjectStore(h,{keyPath:p});e.createIndex(l,l,{unique:!1})},r.onsuccess=function(){t(r.result)},r.onerror=function(){n(r.error)}})}function o(e){return e in d||(d[e]=r(e)),d[e]}function i(e,t,n){return new Promise(function(r,o){var i=e.transaction(h,"readwrite"),c=i.objectStore(h);c.put({url:t,timestamp:n}),i.oncomplete=function(){r(e)},i.onabort=function(){o(i.error)}})}function c(e,t,n){return t?new Promise(function(r,o){var i=1e3*t,c=[],s=e.transaction(h,"readwrite"),a=s.objectStore(h),u=a.index(l);u.openCursor().onsuccess=function(e){var t=e.target.result;if(t&&n-i>t.value[l]){var r=t.value[p];c.push(r),a.delete(r),t.continue()}},s.oncomplete=function(){r(c)},s.onabort=o}):Promise.resolve([])}function s(e,t){return t?new Promise(function(n,r){var o=[],i=e.transaction(h,"readwrite"),c=i.objectStore(h),s=c.index(l),a=s.count();s.count().onsuccess=function(){var e=a.result;e>t&&(s.openCursor().onsuccess=function(n){var r=n.target.result;if(r){var i=r.value[p];o.push(i),c.delete(i),e-o.length>t&&r.continue()}})},i.oncomplete=function(){n(o)},i.onabort=r}):Promise.resolve([])}function a(e,t,n,r){return c(e,n,r).then(function(n){return s(e,t).then(function(e){return n.concat(e)})})}var u="sw-toolbox-",f=1,h="store",p="url",l="timestamp",d={};t.exports={getDb:o,setTimestampForUrl:i,expireEntries:a}},{}],3:[function(e,t,n){"use strict";function r(e){var t=a.match(e.request);t?e.respondWith(t(e.request)):a.default&&"GET"===e.request.method&&0===e.request.url.indexOf("http")&&e.respondWith(a.default(e.request))}function o(e){s.debug("activate event fired");var t=u.cache.name+"$$$inactive$$$";e.waitUntil(s.renameCache(t,u.cache.name))}function i(e){return e.reduce(function(e,t){return e.concat(t)},[])}function c(e){var t=u.cache.name+"$$$inactive$$$";s.debug("install event fired"),s.debug("creating cache ["+t+"]"),e.waitUntil(s.openCache({cache:{name:t}}).then(function(e){return Promise.all(u.preCacheItems).then(i).then(s.validatePrecacheInput).then(function(t){return s.debug("preCache list: "+(t.join(", ")||"(none)")),e.addAll(t)})}))}e("serviceworker-cache-polyfill");var s=e("./helpers"),a=e("./router"),u=e("./options");t.exports={fetchListener:r,activateListener:o,installListener:c}},{"./helpers":1,"./options":4,"./router":6,"serviceworker-cache-polyfill":16}],4:[function(e,t,n){"use strict";var r;r=self.registration?self.registration.scope:self.scope||new URL("./",self.location).href,t.exports={cache:{name:"$$$toolbox-cache$$$"+r+"$$$",maxAgeSeconds:null,maxEntries:null},debug:!1,networkTimeoutSeconds:null,preCacheItems:[],successResponses:/^0|([123]\d\d)|(40[14567])|410$/}},{}],5:[function(e,t,n){"use strict";var r=new URL("./",self.location),o=r.pathname,i=e("path-to-regexp"),c=function(e,t,n,r){t instanceof RegExp?this.fullUrlRegExp=t:(0!==t.indexOf("/")&&(t=o+t),this.keys=[],this.regexp=i(t,this.keys)),this.method=e,this.options=r,this.handler=n};c.prototype.makeHandler=function(e){var t;if(this.regexp){var n=this.regexp.exec(e);t={},this.keys.forEach(function(e,r){t[e.name]=n[r+1]})}return function(e){return this.handler(e,t,this.options)}.bind(this)},t.exports=c},{"path-to-regexp":15}],6:[function(e,t,n){"use strict";function r(e){return e.replace(/[-\/\\^$*+?.()|[\]{}]/g,"\\$&")}var o=e("./route"),i=e("./helpers"),c=function(e,t){for(var n=e.entries(),r=n.next(),o=[];!r.done;){var i=new RegExp(r.value[0]);i.test(t)&&o.push(r.value[1]),r=n.next()}return o},s=function(){this.routes=new Map,this.routes.set(RegExp,new Map),this.default=null};["get","post","put","delete","head","any"].forEach(function(e){s.prototype[e]=function(t,n,r){return this.add(e,t,n,r)}}),s.prototype.add=function(e,t,n,c){c=c||{};var s;t instanceof RegExp?s=RegExp:(s=c.origin||self.location.origin,s=s instanceof RegExp?s.source:r(s)),e=e.toLowerCase();var a=new o(e,t,n,c);this.routes.has(s)||this.routes.set(s,new Map);var u=this.routes.get(s);u.has(e)||u.set(e,new Map);var f=u.get(e),h=a.regexp||a.fullUrlRegExp;f.has(h.source)&&i.debug('"'+t+'" resolves to same regex as existing route.'),f.set(h.source,a)},s.prototype.matchMethod=function(e,t){var n=new URL(t),r=n.origin,o=n.pathname;return this._match(e,c(this.routes,r),o)||this._match(e,[this.routes.get(RegExp)],t)},s.prototype._match=function(e,t,n){if(0===t.length)return null;for(var r=0;r<t.length;r++){var o=t[r],i=o&&o.get(e.toLowerCase());if(i){var s=c(i,n);if(s.length>0)return s[0].makeHandler(n)}}return null},s.prototype.match=function(e){return this.matchMethod(e.method,e.url)||this.matchMethod("any",e.url)},t.exports=new s},{"./helpers":1,"./route":5}],7:[function(e,t,n){"use strict";function r(e,t,n){return n=n||{},i.debug("Strategy: cache first ["+e.url+"]",n),i.openCache(n).then(function(t){return t.match(e).then(function(t){var r=n.cache||o.cache,c=Date.now();return i.isResponseFresh(t,r.maxAgeSeconds,c)?t:i.fetchAndCache(e,n)})})}var o=e("../options"),i=e("../helpers");t.exports=r},{"../helpers":1,"../options":4}],8:[function(e,t,n){"use strict";function r(e,t,n){return n=n||{},i.debug("Strategy: cache only ["+e.url+"]",n),i.openCache(n).then(function(t){return t.match(e).then(function(e){var t=n.cache||o.cache,r=Date.now();if(i.isResponseFresh(e,t.maxAgeSeconds,r))return e})})}var o=e("../options"),i=e("../helpers");t.exports=r},{"../helpers":1,"../options":4}],9:[function(e,t,n){"use strict";function r(e,t,n){return o.debug("Strategy: fastest ["+e.url+"]",n),new Promise(function(r,c){var s=!1,a=[],u=function(e){a.push(e.toString()),s?c(new Error('Both cache and network failed: "'+a.join('", "')+'"')):s=!0},f=function(e){e instanceof Response?r(e):u("No result returned")};o.fetchAndCache(e.clone(),n).then(f,u),i(e,t,n).then(f,u)})}var o=e("../helpers"),i=e("./cacheOnly");t.exports=r},{"../helpers":1,"./cacheOnly":8}],10:[function(e,t,n){t.exports={networkOnly:e("./networkOnly"),networkFirst:e("./networkFirst"),cacheOnly:e("./cacheOnly"),cacheFirst:e("./cacheFirst"),fastest:e("./fastest")}},{"./cacheFirst":7,"./cacheOnly":8,"./fastest":9,"./networkFirst":11,"./networkOnly":12}],11:[function(e,t,n){"use strict";function r(e,t,n){n=n||{};var r=n.successResponses||o.successResponses,c=n.networkTimeoutSeconds||o.networkTimeoutSeconds;return i.debug("Strategy: network first ["+e.url+"]",n),i.openCache(n).then(function(t){var s,a,u=[];if(c){var f=new Promise(function(r){s=setTimeout(function(){t.match(e).then(function(e){var t=n.cache||o.cache,c=Date.now(),s=t.maxAgeSeconds;i.isResponseFresh(e,s,c)&&r(e)})},1e3*c)});u.push(f)}var h=i.fetchAndCache(e,n).then(function(e){if(s&&clearTimeout(s),r.test(e.status))return e;throw i.debug("Response was an HTTP error: "+e.statusText,n),a=e,new Error("Bad response")}).catch(function(r){return i.debug("Network or response error, fallback to cache ["+e.url+"]",n),t.match(e).then(function(e){if(e)return e;if(a)return a;throw r})});return u.push(h),Promise.race(u)})}var o=e("../options"),i=e("../helpers");t.exports=r},{"../helpers":1,"../options":4}],12:[function(e,t,n){"use strict";function r(e,t,n){return o.debug("Strategy: network only ["+e.url+"]",n),fetch(e)}var o=e("../helpers");t.exports=r},{"../helpers":1}],13:[function(e,t,n){"use strict";var r=e("./options"),o=e("./router"),i=e("./helpers"),c=e("./strategies"),s=e("./listeners");i.debug("Service Worker Toolbox is loading"),self.addEventListener("install",s.installListener),self.addEventListener("activate",s.activateListener),self.addEventListener("fetch",s.fetchListener),t.exports={networkOnly:c.networkOnly,networkFirst:c.networkFirst,cacheOnly:c.cacheOnly,cacheFirst:c.cacheFirst,fastest:c.fastest,router:o,options:r,cache:i.cache,uncache:i.uncache,precache:i.precache}},{"./helpers":1,"./listeners":3,"./options":4,"./router":6,"./strategies":10}],14:[function(e,t,n){t.exports=Array.isArray||function(e){return"[object Array]"==Object.prototype.toString.call(e)}},{}],15:[function(e,t,n){function r(e,t){for(var n,r=[],o=0,i=0,c="",s=t&&t.delimiter||"/";null!=(n=x.exec(e));){var f=n[0],h=n[1],p=n.index;if(c+=e.slice(i,p),i=p+f.length,h)c+=h[1];else{var l=e[i],d=n[2],m=n[3],g=n[4],v=n[5],w=n[6],y=n[7];c&&(r.push(c),c="");var b=null!=d&&null!=l&&l!==d,E="+"===w||"*"===w,R="?"===w||"*"===w,k=n[2]||s,$=g||v;r.push({name:m||o++,prefix:d||"",delimiter:k,optional:R,repeat:E,partial:b,asterisk:!!y,pattern:$?u($):y?".*":"[^"+a(k)+"]+?"})}}return i<e.length&&(c+=e.substr(i)),c&&r.push(c),r}function o(e,t){return s(r(e,t))}function i(e){return encodeURI(e).replace(/[\/?#]/g,function(e){return"%"+e.charCodeAt(0).toString(16).toUpperCase()})}function c(e){return encodeURI(e).replace(/[?#]/g,function(e){return"%"+e.charCodeAt(0).toString(16).toUpperCase()})}function s(e){for(var t=new Array(e.length),n=0;n<e.length;n++)"object"==typeof e[n]&&(t[n]=new RegExp("^(?:"+e[n].pattern+")$"));return function(n,r){for(var o="",s=n||{},a=r||{},u=a.pretty?i:encodeURIComponent,f=0;f<e.length;f++){var h=e[f];if("string"!=typeof h){var p,l=s[h.name];if(null==l){if(h.optional){h.partial&&(o+=h.prefix);continue}throw new TypeError('Expected "'+h.name+'" to be defined')}if(v(l)){if(!h.repeat)throw new TypeError('Expected "'+h.name+'" to not repeat, but received `'+JSON.stringify(l)+"`");if(0===l.length){if(h.optional)continue;throw new TypeError('Expected "'+h.name+'" to not be empty')}for(var d=0;d<l.length;d++){if(p=u(l[d]),!t[f].test(p))throw new TypeError('Expected all "'+h.name+'" to match "'+h.pattern+'", but received `'+JSON.stringify(p)+"`");o+=(0===d?h.prefix:h.delimiter)+p}}else{if(p=h.asterisk?c(l):u(l),!t[f].test(p))throw new TypeError('Expected "'+h.name+'" to match "'+h.pattern+'", but received "'+p+'"');o+=h.prefix+p}}else o+=h}return o}}function a(e){return e.replace(/([.+*?=^!:${}()[\]|\/\\])/g,"\\$1")}function u(e){return e.replace(/([=!:$\/()])/g,"\\$1")}function f(e,t){return e.keys=t,e}function h(e){return e.sensitive?"":"i"}function p(e,t){var n=e.source.match(/\((?!\?)/g);if(n)for(var r=0;r<n.length;r++)t.push({name:r,prefix:null,delimiter:null,optional:!1,repeat:!1,partial:!1,asterisk:!1,pattern:null});return f(e,t)}function l(e,t,n){for(var r=[],o=0;o<e.length;o++)r.push(g(e[o],t,n).source);var i=new RegExp("(?:"+r.join("|")+")",h(n));return f(i,t)}function d(e,t,n){return m(r(e,n),t,n)}function m(e,t,n){v(t)||(n=t||n,t=[]),n=n||{};for(var r=n.strict,o=n.end!==!1,i="",c=0;c<e.length;c++){var s=e[c];if("string"==typeof s)i+=a(s);else{var u=a(s.prefix),p="(?:"+s.pattern+")";t.push(s),s.repeat&&(p+="(?:"+u+p+")*"),p=s.optional?s.partial?u+"("+p+")?":"(?:"+u+"("+p+"))?":u+"("+p+")",i+=p}}var l=a(n.delimiter||"/"),d=i.slice(-l.length)===l;return r||(i=(d?i.slice(0,-l.length):i)+"(?:"+l+"(?=$))?"),i+=o?"$":r&&d?"":"(?="+l+"|$)",f(new RegExp("^"+i,h(n)),t)}function g(e,t,n){return v(t)||(n=t||n,t=[]),n=n||{},e instanceof RegExp?p(e,t):v(e)?l(e,t,n):d(e,t,n)}var v=e("isarray");t.exports=g,t.exports.parse=r,t.exports.compile=o,t.exports.tokensToFunction=s,t.exports.tokensToRegExp=m;var x=new RegExp(["(\\\\.)","([\\/.])?(?:(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?|(\\*))"].join("|"),"g")},{isarray:14}],16:[function(e,t,n){!function(){var e=Cache.prototype.addAll,t=navigator.userAgent.match(/(Firefox|Chrome)\/(\d+\.)/);if(t)var n=t[1],r=parseInt(t[2]);e&&(!t||"Firefox"===n&&r>=46||"Chrome"===n&&r>=50)||(Cache.prototype.addAll=function(e){function t(e){this.name="NetworkError",this.code=19,this.message=e}var n=this;return t.prototype=Object.create(Error.prototype),Promise.resolve().then(function(){if(arguments.length<1)throw new TypeError;return e=e.map(function(e){return e instanceof Request?e:String(e)}),Promise.all(e.map(function(e){"string"==typeof e&&(e=new Request(e));var n=new URL(e.url).protocol;if("http:"!==n&&"https:"!==n)throw new t("Invalid scheme");return fetch(e.clone())}))}).then(function(r){if(r.some(function(e){return!e.ok}))throw new t("Incorrect response status");return Promise.all(r.map(function(t,r){return n.put(e[r],t)}))}).then(function(){})},Cache.prototype.add=function(e){return this.addAll([e])})}()},{}]},{},[13])(13)});


// *** End of auto-included sw-toolbox code. ***



// Runtime cache configuration, using the sw-toolbox library.

toolbox.router.get("/*", toolbox.cacheFirst, {"origin":"https://haoyongliang.gitee.io/"});




