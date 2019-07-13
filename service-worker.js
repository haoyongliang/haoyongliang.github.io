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

var precacheConfig = [["F:/blog/public/2018/06/05/SpringBoot/01快速上手SpringBoot/快速上手SpringBoot/0.6294533078536897.png","a724f5cf771caa97858ab840de7a52be"],["F:/blog/public/2018/06/05/SpringBoot/01快速上手SpringBoot/快速上手SpringBoot/gouJianXiangMu.jpg","236efb206e931619f6a02c7ced6883cf"],["F:/blog/public/2018/06/05/SpringBoot/01快速上手SpringBoot/快速上手SpringBoot/ideahot.jpg","32e8db9988e538aa1fd06c89e95b13be"],["F:/blog/public/2018/06/05/SpringBoot/01快速上手SpringBoot/快速上手SpringBoot/index.html","5c85c650b81a694b66121c4835b9b218"],["F:/blog/public/2018/06/05/SpringBoot/01快速上手SpringBoot/快速上手SpringBoot/mulujiegou.jpg","11da6405d38b4bde98ddeedb992aa91e"],["F:/blog/public/2018/06/05/SpringBoot/01快速上手SpringBoot/快速上手SpringBoot/top.jpg","3fc8df58abf68773a73a96dcea807d6f"],["F:/blog/public/2018/06/06/SpringBoot/02web开发实战/web开发实战/findAllStudent.jpg","764e34935492f514af9da309664f7360"],["F:/blog/public/2018/06/06/SpringBoot/02web开发实战/web开发实战/findStudent.jpg","314e07b67d470e50b074944a31c2bb65"],["F:/blog/public/2018/06/06/SpringBoot/02web开发实战/web开发实战/getDetails.jpg","12551bf4891b653a2e8588a3e91ed17e"],["F:/blog/public/2018/06/06/SpringBoot/02web开发实战/web开发实战/index.html","6544d10bc79a46af29ea0abcea3ba1fc"],["F:/blog/public/2018/06/06/SpringBoot/02web开发实战/web开发实战/top.jpg","3150294395859dc16f37faeaec16f8ed"],["F:/blog/public/2018/06/06/SpringBoot/02web开发实战/web开发实战/top.png","1a6fe876abdcced77ab808493493bd5c"],["F:/blog/public/2018/06/06/SpringBoot/02web开发实战/web开发实战/valid.jpg","28768117767667765305151957f9b9f5"],["F:/blog/public/2018/06/07/SpringBoot/03SpringDataJPA使用/SpringDataJPA使用/findAllByPassword.jpg","bbc266206d0c78ab4a654159e14d30e2"],["F:/blog/public/2018/06/07/SpringBoot/03SpringDataJPA使用/SpringDataJPA使用/index.html","3a8c4c4c22839d6232d2575caaefe73b"],["F:/blog/public/2018/06/07/SpringBoot/03SpringDataJPA使用/SpringDataJPA使用/many-to-many.png","0c44a91da6b713da64519e1a7138019e"],["F:/blog/public/2018/06/07/SpringBoot/03SpringDataJPA使用/SpringDataJPA使用/save.jpg","bb62f9d7f0301530b6bca08fb240ad28"],["F:/blog/public/2018/06/07/SpringBoot/03SpringDataJPA使用/SpringDataJPA使用/top.jpg","750c6e95b48b6a2a85dc8c6d7449ec0e"],["F:/blog/public/2018/06/07/SpringBoot/03SpringDataJPA使用/SpringDataJPA使用/top.png","b10dcb549350b830353996726e312b0a"],["F:/blog/public/2018/06/08/SpringBoot/04SpringBoot集成Thymeleaf/SpringBoot集成Thymeleaf/01.png","68874eb03732a1c919e1b1507205b967"],["F:/blog/public/2018/06/08/SpringBoot/04SpringBoot集成Thymeleaf/SpringBoot集成Thymeleaf/02.png","b0d94f20f5a3f8daaad360a7e0b60239"],["F:/blog/public/2018/06/08/SpringBoot/04SpringBoot集成Thymeleaf/SpringBoot集成Thymeleaf/03.png","c384cff3283a1c527ce29a8d9b426985"],["F:/blog/public/2018/06/08/SpringBoot/04SpringBoot集成Thymeleaf/SpringBoot集成Thymeleaf/index.html","3af1e7377db8fffe0a5ec1f91479a6a9"],["F:/blog/public/2018/06/08/SpringBoot/04SpringBoot集成Thymeleaf/SpringBoot集成Thymeleaf/top.png","1bc377d57494a8dfffd6265d2cb9f1b5"],["F:/blog/public/2018/06/09/SpringBoot/05SpringBoot集成MyBatis/SpringBoot集成MyBatis/idea.png","8128b07de8ab2a768536aace1f3e0c87"],["F:/blog/public/2018/06/09/SpringBoot/05SpringBoot集成MyBatis/SpringBoot集成MyBatis/index.html","3fd3911d467e6d2610aa3a54c469b3b0"],["F:/blog/public/2018/06/09/SpringBoot/05SpringBoot集成MyBatis/SpringBoot集成MyBatis/top.jpg","a62a105d84b24f7aacac0e5355ad1245"],["F:/blog/public/2018/06/10/SpringBoot/06SpringBoot集成RabbitMQ/SpringBoot集成RabbitMQ/1972176598.png","81fe6d1c8002f7d78fa0978d96c06811"],["F:/blog/public/2018/06/10/SpringBoot/06SpringBoot集成RabbitMQ/SpringBoot集成RabbitMQ/2.png","02a8f35c4b9b047bc6766af3f06d9b50"],["F:/blog/public/2018/06/10/SpringBoot/06SpringBoot集成RabbitMQ/SpringBoot集成RabbitMQ/2014-2-21-9-54-26.png","40f9c6d5a2151439385d40cc7d99fe5c"],["F:/blog/public/2018/06/10/SpringBoot/06SpringBoot集成RabbitMQ/SpringBoot集成RabbitMQ/2014-2-21-9-55-20.png","a28fb616e374f694a81bf44491c729ff"],["F:/blog/public/2018/06/10/SpringBoot/06SpringBoot集成RabbitMQ/SpringBoot集成RabbitMQ/2014-2-21-9-57-37.png","4813eaedd8138a100a5c5dcf3edfa6e4"],["F:/blog/public/2018/06/10/SpringBoot/06SpringBoot集成RabbitMQ/SpringBoot集成RabbitMQ/9323193930.png","988126c51d85e733f3fcd7bd7f20ff8f"],["F:/blog/public/2018/06/10/SpringBoot/06SpringBoot集成RabbitMQ/SpringBoot集成RabbitMQ/erlang.png","81c848aca624c77a84e24487a8b15fc3"],["F:/blog/public/2018/06/10/SpringBoot/06SpringBoot集成RabbitMQ/SpringBoot集成RabbitMQ/hello-world-example-routing.png","9f4731146188c74708edf77c431465be"],["F:/blog/public/2018/06/10/SpringBoot/06SpringBoot集成RabbitMQ/SpringBoot集成RabbitMQ/index.html","bca8e35be50e0d3e8c7d59b6520a0fa4"],["F:/blog/public/2018/06/10/SpringBoot/06SpringBoot集成RabbitMQ/SpringBoot集成RabbitMQ/top.jpg","40f9e59e04e30bfcb474bbe7d54226a6"],["F:/blog/public/2019/07/05/dubble/ApacheDubbo/1.png","7cf47573f94a677c6c4824dbb8a7c3a9"],["F:/blog/public/2019/07/05/dubble/ApacheDubbo/12.png","48947b8165573db617057e4626fd4f9c"],["F:/blog/public/2019/07/05/dubble/ApacheDubbo/13.png","7ed440b1ec0d2586cfa2ccd9b16c57ac"],["F:/blog/public/2019/07/05/dubble/ApacheDubbo/14.png","0a0b56ac897d92716255463dad846ec8"],["F:/blog/public/2019/07/05/dubble/ApacheDubbo/15.png","218f8b25433e6eb5efb5bad6abc23bfc"],["F:/blog/public/2019/07/05/dubble/ApacheDubbo/16.png","e13d2ca201f995335167ef3f137294ce"],["F:/blog/public/2019/07/05/dubble/ApacheDubbo/17.png","de82a54026cf52b0d99f17e6d3ba760f"],["F:/blog/public/2019/07/05/dubble/ApacheDubbo/18.png","447b3874ec3e607a1da126abace48ff4"],["F:/blog/public/2019/07/05/dubble/ApacheDubbo/19.png","78fcfce68b24909cfb8df1b7dfb21088"],["F:/blog/public/2019/07/05/dubble/ApacheDubbo/2.png","7db06f5c49c6c27e1752e6ae3017ddc3"],["F:/blog/public/2019/07/05/dubble/ApacheDubbo/20.png","4261dfb4fc102a637480083e7301ec88"],["F:/blog/public/2019/07/05/dubble/ApacheDubbo/3.png","94caf14426b2e67bf922416c1ee9b74d"],["F:/blog/public/2019/07/05/dubble/ApacheDubbo/4.png","c28456d3fed6409e359b419d7967e093"],["F:/blog/public/2019/07/05/dubble/ApacheDubbo/5.png","d43e01056c12cbd6d3dbec8dfc6c1542"],["F:/blog/public/2019/07/05/dubble/ApacheDubbo/6.png","b9fd0188137c4e27d0bf58f6d81988ec"],["F:/blog/public/2019/07/05/dubble/ApacheDubbo/7.png","f8a8c32959430998d32ca6cfe2df662f"],["F:/blog/public/2019/07/05/dubble/ApacheDubbo/8.png","4ca276957f710101482f5cc38fd7ce20"],["F:/blog/public/2019/07/05/dubble/ApacheDubbo/9.png","f29055626fadc8859cfcf59cc86e6528"],["F:/blog/public/2019/07/05/dubble/ApacheDubbo/index.html","56d57a0bc335a1278f884fbf70b17b7e"],["F:/blog/public/2019/07/05/dubble/ApacheDubbo/top.jpg","ced1f1cb3f02fe2d67e77f2d9ee33ab7"],["F:/blog/public/2019/07/06/gitee/hexo-gitee搭建个人博客/01.png","f316641f6872ea8c9fc721338282ecb2"],["F:/blog/public/2019/07/06/gitee/hexo-gitee搭建个人博客/02.png","7dd8954a789aeceec708565362eac211"],["F:/blog/public/2019/07/06/gitee/hexo-gitee搭建个人博客/03.png","9f2e883c4d4289503d19a95d368b1cc7"],["F:/blog/public/2019/07/06/gitee/hexo-gitee搭建个人博客/04.png","e875635dba806cc6b75cec12f5fb1d88"],["F:/blog/public/2019/07/06/gitee/hexo-gitee搭建个人博客/05.png","18d4473b64ae4a8c1db27f75d1ab7c56"],["F:/blog/public/2019/07/06/gitee/hexo-gitee搭建个人博客/06.png","9ecf5793283612af9556e24cd5fcd7ea"],["F:/blog/public/2019/07/06/gitee/hexo-gitee搭建个人博客/07.png","e218007b397c58f278a127a3902a0cdc"],["F:/blog/public/2019/07/06/gitee/hexo-gitee搭建个人博客/bizhi.jpg","461348ef0c51dd0774072cb051630082"],["F:/blog/public/2019/07/06/gitee/hexo-gitee搭建个人博客/head.jpg","2c22ecc83eb39edfbee97349d61d3c5a"],["F:/blog/public/2019/07/06/gitee/hexo-gitee搭建个人博客/index.html","ab18cc978ca826ed264ff43ce3c8e2d0"],["F:/blog/public/2019/07/06/gitee/hexo-gitee搭建个人博客/timg.jpg","06868fc6d756bb4c3a9497206343c947"],["F:/blog/public/2019/07/06/gitee/hexo-gitee搭建个人博客/top.jpg","bee4985884e90096c1cf6257ee7eb53d"],["F:/blog/public/2019/07/06/gitee/hexo-gitee搭建个人博客/top1.jpg","2565c8d06e593e4a7c357307f25c72ca"],["F:/blog/public/2019/07/08/mysql/MySQL中DCL相关语句的使用/index.html","beb5b87459423dc4f1a48cff5d6b828e"],["F:/blog/public/2019/07/08/mysql/MySQL中DCL相关语句的使用/top.jpg","a790b518f16066441bb4a8aa6e8f821c"],["F:/blog/public/2019/07/08/mysql/MySQL中的事物/index.html","0baf160a041bf3b7489006117c115b69"],["F:/blog/public/2019/07/09/javaSE/类加载器/index.html","31a85efcdefa8265c67f9190a4a8212d"],["F:/blog/public/2019/07/09/javaSE/类加载器/top.gif","f8125845a83c7a4e5640729fbe060678"],["F:/blog/public/2019/07/09/javaSE/类加载器/类加载器.png","83a854f2396880b27bf811de64261295"],["F:/blog/public/2019/07/09/javaSE/类加载器/类加载器机制.png","baa6b8a11c8e40206af37ffc24176645"],["F:/blog/public/2019/07/11/mysql/01-mysql优化-建表的原则/index.html","d4a64c6ee246efbcdcd8243a66c7fb4f"],["F:/blog/public/2019/07/11/mysql/01-mysql优化-建表的原则/top.jpg","c959887f9fa36c2657efd5065bc3ffd1"],["F:/blog/public/2019/07/13/SpringBoot/SpringBoot2.0/SpringBoot2.0/01.png","4f425cda0ca77c8a963752bacb5629dd"],["F:/blog/public/2019/07/13/SpringBoot/SpringBoot2.0/SpringBoot2.0/02.png","c99b684664d6f4cdae87e7ced9ede70f"],["F:/blog/public/2019/07/13/SpringBoot/SpringBoot2.0/SpringBoot2.0/03.png","79215d2c04a65aae5c84ed174f875181"],["F:/blog/public/2019/07/13/SpringBoot/SpringBoot2.0/SpringBoot2.0/04.png","ba2b83d5de55931675596e5bb3d90b0a"],["F:/blog/public/2019/07/13/SpringBoot/SpringBoot2.0/SpringBoot2.0/05.png","3665c6c0d50eed6aa2f0002546d62efa"],["F:/blog/public/2019/07/13/SpringBoot/SpringBoot2.0/SpringBoot2.0/06.png","d02c844bd834eca71dd20cebb5af40dd"],["F:/blog/public/2019/07/13/SpringBoot/SpringBoot2.0/SpringBoot2.0/07.png","e7afcd92f58134ef3fe89b0b501d8440"],["F:/blog/public/2019/07/13/SpringBoot/SpringBoot2.0/SpringBoot2.0/08.png","a1d9a28c5a90ac49447c2e1f0ae5ca10"],["F:/blog/public/2019/07/13/SpringBoot/SpringBoot2.0/SpringBoot2.0/09.png","5a60fdea815fa26b4d55348d949fc409"],["F:/blog/public/2019/07/13/SpringBoot/SpringBoot2.0/SpringBoot2.0/10.png","5406a3498e9865dd318793eb3b933edc"],["F:/blog/public/2019/07/13/SpringBoot/SpringBoot2.0/SpringBoot2.0/11.png","815ed281fcb3f7f1639f47186aa993a9"],["F:/blog/public/2019/07/13/SpringBoot/SpringBoot2.0/SpringBoot2.0/index.html","062c876fea52468d6e80107f12362dc8"],["F:/blog/public/2019/07/13/SpringBoot/SpringBoot2.0/SpringBoot2.0/top.jpg","4c50aa9d0b1883670f90a4472a8e8b9d"],["F:/blog/public/2019/07/13/SpringBoot/SpringDataJpa/SpringDataJpa01/01.png","e942efcc4676b37fead043d0d6444f50"],["F:/blog/public/2019/07/13/SpringBoot/SpringDataJpa/SpringDataJpa01/02.png","d83a26d5af882dd9fef5a4207b204f72"],["F:/blog/public/2019/07/13/SpringBoot/SpringDataJpa/SpringDataJpa01/03.png","ad2370a947953bce53f068c78846d351"],["F:/blog/public/2019/07/13/SpringBoot/SpringDataJpa/SpringDataJpa01/05.png","2ccaf2081e276c6f9df40e56252c0146"],["F:/blog/public/2019/07/13/SpringBoot/SpringDataJpa/SpringDataJpa01/06.png","1cc14c063816c5d41357b99c9624fa8c"],["F:/blog/public/2019/07/13/SpringBoot/SpringDataJpa/SpringDataJpa01/07.png","f23cd3a37d4d89b4963807104ae03e46"],["F:/blog/public/2019/07/13/SpringBoot/SpringDataJpa/SpringDataJpa01/08.png","04a27003ad83090f152fcdf98c0ed251"],["F:/blog/public/2019/07/13/SpringBoot/SpringDataJpa/SpringDataJpa01/09.png","b9f1eda805e6318c10d86f2d66481542"],["F:/blog/public/2019/07/13/SpringBoot/SpringDataJpa/SpringDataJpa01/10.png","b79d614c3551d04bf472b7b2c991283c"],["F:/blog/public/2019/07/13/SpringBoot/SpringDataJpa/SpringDataJpa01/11.png","950ecae63f3bc65e4ccce614f1dfecee"],["F:/blog/public/2019/07/13/SpringBoot/SpringDataJpa/SpringDataJpa01/12.png","42a8ca5d967bbba4a3159d865eef8581"],["F:/blog/public/2019/07/13/SpringBoot/SpringDataJpa/SpringDataJpa01/13.png","9ffb5e6d5cbc0c1a2b0aa909882d0893"],["F:/blog/public/2019/07/13/SpringBoot/SpringDataJpa/SpringDataJpa01/14.png","57cbff87f7ce9f218ec94792a218b9d6"],["F:/blog/public/2019/07/13/SpringBoot/SpringDataJpa/SpringDataJpa01/15.png","44a7247f6acd49893a6885d489dd5bbd"],["F:/blog/public/2019/07/13/SpringBoot/SpringDataJpa/SpringDataJpa01/16.png","a0a371d8d17c18c8c752d09df2883bf1"],["F:/blog/public/2019/07/13/SpringBoot/SpringDataJpa/SpringDataJpa01/index.html","df2b2999e4668be2f2c5057d6a2dea06"],["F:/blog/public/2019/07/13/SpringBoot/SpringDataJpa/SpringDataJpa01/top.gif","231ee558490db633e7d5cdaa63207671"],["F:/blog/public/2019/07/13/SpringBoot/SpringDataJpa/SpringDataJpa01/top.jpg","0c38ef0989306b839ffcb7b1cc9b9f6f"],["F:/blog/public/2019/07/13/SpringBoot/SpringDataJpa/SpringDataJpa02/01.png","b76d52162046c3aef086fa292146b277"],["F:/blog/public/2019/07/13/SpringBoot/SpringDataJpa/SpringDataJpa02/02.png","1ced90926dda182d9859cfa70ef65f05"],["F:/blog/public/2019/07/13/SpringBoot/SpringDataJpa/SpringDataJpa02/03.png","d02872c9ee92ea991ef8b41e29f11c25"],["F:/blog/public/2019/07/13/SpringBoot/SpringDataJpa/SpringDataJpa02/04.png","51bf8f7a14f7e8de1d3cf472ce9263d4"],["F:/blog/public/2019/07/13/SpringBoot/SpringDataJpa/SpringDataJpa02/05.png","120ba7db69d3b7f10d84590297397989"],["F:/blog/public/2019/07/13/SpringBoot/SpringDataJpa/SpringDataJpa02/06.png","5942549cb9f06e967345c80f27b8fca0"],["F:/blog/public/2019/07/13/SpringBoot/SpringDataJpa/SpringDataJpa02/07.png","a33a9a32472e9c6ac8a9c52839027ec2"],["F:/blog/public/2019/07/13/SpringBoot/SpringDataJpa/SpringDataJpa02/08.png","b5e3f9aa4c49b8d8b3d0a30180fa5b8b"],["F:/blog/public/2019/07/13/SpringBoot/SpringDataJpa/SpringDataJpa02/09.png","7fcab9cc6fae4788f24a99782be73507"],["F:/blog/public/2019/07/13/SpringBoot/SpringDataJpa/SpringDataJpa02/10.png","c0f914f3a16df0945a7e62919bd8d54e"],["F:/blog/public/2019/07/13/SpringBoot/SpringDataJpa/SpringDataJpa02/11.png","4df647c5349b0251101efd46a7b6bb82"],["F:/blog/public/2019/07/13/SpringBoot/SpringDataJpa/SpringDataJpa02/12.png","d6a4e7825fe650a3c66155f839943d05"],["F:/blog/public/2019/07/13/SpringBoot/SpringDataJpa/SpringDataJpa02/13.png","2c3e0bf6f00f7f86e331568b4c47b585"],["F:/blog/public/2019/07/13/SpringBoot/SpringDataJpa/SpringDataJpa02/14.png","23a78f93958ad43b680580cd92c2a051"],["F:/blog/public/2019/07/13/SpringBoot/SpringDataJpa/SpringDataJpa02/15.png","3aa9dee8190a5727e5d7f017d9acef3d"],["F:/blog/public/2019/07/13/SpringBoot/SpringDataJpa/SpringDataJpa02/16.png","0b7fd1a0deb41c8fc7e3f7de2d49d090"],["F:/blog/public/2019/07/13/SpringBoot/SpringDataJpa/SpringDataJpa02/17.png","3d28b94c8ae57e96d46a9b033a89bf2c"],["F:/blog/public/2019/07/13/SpringBoot/SpringDataJpa/SpringDataJpa02/18.png","aacf867397fa6ed75ed74632c191f3f8"],["F:/blog/public/2019/07/13/SpringBoot/SpringDataJpa/SpringDataJpa02/19.png","e0b4e6117511958360d56e35d75431e7"],["F:/blog/public/2019/07/13/SpringBoot/SpringDataJpa/SpringDataJpa02/20.png","16a8c74acaaf42a66437b7f578695693"],["F:/blog/public/2019/07/13/SpringBoot/SpringDataJpa/SpringDataJpa02/index.html","7a4f5473e44d520241b2beee6be3944c"],["F:/blog/public/2019/07/13/SpringBoot/SpringDataJpa/SpringDataJpa02/top.gif","aeb4090deceb6e99bb385797523a6d31"],["F:/blog/public/2019/07/13/SpringBoot/SpringDataJpa/SpringDataJpa02/top.png","c798b439feeafa4641885ee7ff2053e5"],["F:/blog/public/2019/07/13/SpringBoot/SpringDataJpa/SpringDataJpa03/01.png","4012c3e6360594fbb660cb514e59f03a"],["F:/blog/public/2019/07/13/SpringBoot/SpringDataJpa/SpringDataJpa03/02.png","ffd1e6e5fc776d750ab7afa30c4b9a5c"],["F:/blog/public/2019/07/13/SpringBoot/SpringDataJpa/SpringDataJpa03/03.png","ebcc8a405c1466464f9bfa77a6a34fda"],["F:/blog/public/2019/07/13/SpringBoot/SpringDataJpa/SpringDataJpa03/04.png","78da9662eb664031a89754924286aba7"],["F:/blog/public/2019/07/13/SpringBoot/SpringDataJpa/SpringDataJpa03/05.png","87b658b568fee5569635a3910e79d03a"],["F:/blog/public/2019/07/13/SpringBoot/SpringDataJpa/SpringDataJpa03/06.png","94d3335c13b8fda872dc2fd8c2be7d07"],["F:/blog/public/2019/07/13/SpringBoot/SpringDataJpa/SpringDataJpa03/07.png","8c62331957a5531e813e58bf3907cda7"],["F:/blog/public/2019/07/13/SpringBoot/SpringDataJpa/SpringDataJpa03/08.png","af960ce6d5e1351d8d388a1e3ebac2ae"],["F:/blog/public/2019/07/13/SpringBoot/SpringDataJpa/SpringDataJpa03/09.png","b97ddf7fd5ca6e9845391a9e37823397"],["F:/blog/public/2019/07/13/SpringBoot/SpringDataJpa/SpringDataJpa03/10.png","2df3887d6586f4ce219b650325d26a29"],["F:/blog/public/2019/07/13/SpringBoot/SpringDataJpa/SpringDataJpa03/11.png","ae3ba83d6746ff72d050054a3003fd2d"],["F:/blog/public/2019/07/13/SpringBoot/SpringDataJpa/SpringDataJpa03/12.png","aee70bc38e6c6b41b69f7e6b3cc2ea41"],["F:/blog/public/2019/07/13/SpringBoot/SpringDataJpa/SpringDataJpa03/13.png","621b181b9b3e580ae69067501dd9c3e1"],["F:/blog/public/2019/07/13/SpringBoot/SpringDataJpa/SpringDataJpa03/14.png","00b3433b8fbe86d6b97b5f4e502a06fc"],["F:/blog/public/2019/07/13/SpringBoot/SpringDataJpa/SpringDataJpa03/15.png","14300d85c0356dbeef89635f4ae5eb66"],["F:/blog/public/2019/07/13/SpringBoot/SpringDataJpa/SpringDataJpa03/16.png","1ba0b957fc56bc22e91220b961ed83ed"],["F:/blog/public/2019/07/13/SpringBoot/SpringDataJpa/SpringDataJpa03/index.html","643db7cdbfa02f62ac47bcb5993f9e22"],["F:/blog/public/2019/07/13/SpringBoot/SpringDataJpa/SpringDataJpa03/top.gif","d7af4b6eaf6ee16d6b32506ef277da66"],["F:/blog/public/2019/07/13/SpringBoot/SpringDataJpa/SpringDataJpa03/top.jpg","28f037f25e306383dcc1eadafabd9d65"],["F:/blog/public/2019/07/13/docker/docker/1-1.png","78cbf7b6765b8342645dffd291ddf6e5"],["F:/blog/public/2019/07/13/docker/docker/1-2.png","880c9439a3927ebd4214802345596523"],["F:/blog/public/2019/07/13/docker/docker/1-3.png","4f013603ffadcf5c8fd63d928143c811"],["F:/blog/public/2019/07/13/docker/docker/9_1.png","ef4342104ee7fbfebab79875f75c8b6a"],["F:/blog/public/2019/07/13/docker/docker/9_10.png","416bbf8cca7045e4a2699a0dbf61dcb2"],["F:/blog/public/2019/07/13/docker/docker/9_11.png","69c0acfd52be68a24ec891f2408b73c9"],["F:/blog/public/2019/07/13/docker/docker/9_12.png","afa26627a3e2e381b674ba7cc2bcc4be"],["F:/blog/public/2019/07/13/docker/docker/9_17.png","b7af28d4603d6fb47d35c1902fe167d3"],["F:/blog/public/2019/07/13/docker/docker/9_2.png","0945758d50aa67a62d5d8345ba534154"],["F:/blog/public/2019/07/13/docker/docker/9_21.png","a889e2e7568e0b5507dd9bc6267f6452"],["F:/blog/public/2019/07/13/docker/docker/9_22.png","433e71127b001abc9874a395c24398ae"],["F:/blog/public/2019/07/13/docker/docker/9_23.png","3ef591f8c2df34fbded7c92854887a21"],["F:/blog/public/2019/07/13/docker/docker/9_3.png","4bb580ca956219cd086ad0f54e4d45f2"],["F:/blog/public/2019/07/13/docker/docker/9_4.png","c486198a6bb201a90882f5779842e018"],["F:/blog/public/2019/07/13/docker/docker/9_5.png","bd240f8561d0f8cbcf3d162342393953"],["F:/blog/public/2019/07/13/docker/docker/9_6.png","9dc7ae3cb4a42aece5ca99596f5e2ad2"],["F:/blog/public/2019/07/13/docker/docker/9_7.png","af939c946934cfe4a39aa03b7e689ca6"],["F:/blog/public/2019/07/13/docker/docker/9_8.png","82088e9b8c3ecb90d87433297bb66caf"],["F:/blog/public/2019/07/13/docker/docker/9_81.png","be0271515afa0b6254f378ffe743c8d2"],["F:/blog/public/2019/07/13/docker/docker/9_86.png","d03315aa06d048de0acefa866d5b8d9c"],["F:/blog/public/2019/07/13/docker/docker/9_9.png","8b728f4e425a8650ed9ca97db0e46ca9"],["F:/blog/public/2019/07/13/docker/docker/index.html","6dbab4178d31b5b31b4969cfb53b3133"],["F:/blog/public/2019/07/13/docker/docker/top.jpg","71301ba9cb4f4a3e87d980f1abe4ac69"],["F:/blog/public/archives/2018/06/index.html","8fa26769035f06df644a3f748e666630"],["F:/blog/public/archives/2018/index.html","9605247ef05525b2c7f77e2c3bf0fe6c"],["F:/blog/public/archives/2019/07/index.html","e3b3259744d2a3cf29e46fe5d28f53e2"],["F:/blog/public/archives/2019/07/page/2/index.html","8558c6fe0ae8d16631aa712cad92fa36"],["F:/blog/public/archives/2019/index.html","4dbae80f827e9f1f736bd06f94de471f"],["F:/blog/public/archives/2019/page/2/index.html","cee6a3d9f244fc7927319e17cdc8c04b"],["F:/blog/public/archives/index.html","d0105fa74f1d89214e8bd3d4bad6f1e2"],["F:/blog/public/archives/page/2/index.html","a46bccb61a36a7f1ec3140c96ddb5185"],["F:/blog/public/categories/Docker/index.html","3deaa37fa66eb3655f09772726a5a125"],["F:/blog/public/categories/Java核心/index.html","749115a88bd513ac2cc60cd6f3607263"],["F:/blog/public/categories/gitee/index.html","0ae9bb3868f542ab1e9b88af09b79c3c"],["F:/blog/public/categories/index.html","694690759609c3ce56a70155940a2fd5"],["F:/blog/public/categories/微服务/index.html","62f489ebd60dd152526320bf88378f32"],["F:/blog/public/categories/数据库/index.html","bc5ebd491d1cdfb91c0c7b2f294d76cb"],["F:/blog/public/categories/框架/index.html","9349f70e2dc65cabfc92948542055bdd"],["F:/blog/public/css/index.css","11ef5ffb125e80d7cd97262f7190e30d"],["F:/blog/public/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["F:/blog/public/img/404.jpg","23cf82ba04680b72d5616d74aa3f5550"],["F:/blog/public/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["F:/blog/public/img/alipay.jpg","9d7d25339256096f77b7a3634bcd6e33"],["F:/blog/public/img/avatar.png","9eee8b7f139e0b0ddad209d66d3577a3"],["F:/blog/public/img/comment_bg.png","04208f25e34b8f29f072efbb2e212c86"],["F:/blog/public/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["F:/blog/public/img/wechat.jpg","67599109276ad864d53e34817dbc0d72"],["F:/blog/public/index.html","40d6954a61c4ea632eff97961a6f911d"],["F:/blog/public/js/activate-power-mode.js","2345780cb71f6e17a20d9ca2283accda"],["F:/blog/public/js/baidupush.js","7d26211fa55bebac2e0c0abeee05a267"],["F:/blog/public/js/main.js","f19089ca2f58a7e91ba218b2cfb77d99"],["F:/blog/public/js/nightshift.js","e498a040e1746e95b5ed33b9d41618f7"],["F:/blog/public/js/runtimeshow.js","6bc5dc7652b39605152475b840e88899"],["F:/blog/public/js/search/algolia.js","db2e58114adef0dfd2f2d0a246b50ef4"],["F:/blog/public/js/search/local-search.js","e7bab78aa2b388479ea96bb0b04b6834"],["F:/blog/public/js/third-party/anime.min.js","9b4bbe6deb700e1c3606eab732f5eea5"],["F:/blog/public/js/third-party/canvas-ribbon.js","6ca731e8db63562c0dd6461eabbd65d7"],["F:/blog/public/js/third-party/fireworks.js","080fdfcacffc6828826484645140af50"],["F:/blog/public/js/third-party/jquery.fancybox.min.js","3c9fa1c1199cd4f874d855ecb1641335"],["F:/blog/public/js/third-party/jquery.min.js","c9f5aeeca3ad37bf2aa006139b935f0a"],["F:/blog/public/js/third-party/piao.js","d7a4ef27420717adccfca1c1287f8c44"],["F:/blog/public/js/tw_cn.js","fbc127c110435085bde10997850bbc55"],["F:/blog/public/js/utils.js","816e7d34d69996e6a4f0b92a81c16cca"],["F:/blog/public/page/2/index.html","5bb9df5c17dbda84636bcc4de1c3a381"],["F:/blog/public/tags/Docker/index.html","7e77af14663ff85d6da5e6c7f7aeef45"],["F:/blog/public/tags/Dubble/index.html","ac59b37ba60322ca0251e26f1149c51d"],["F:/blog/public/tags/MySQL/index.html","9783c859c3cc77aa7046eed4407178c2"],["F:/blog/public/tags/SpringBoot/index.html","cc6c5c7269c62710bda40af496bdf6c2"],["F:/blog/public/tags/SpringBoot2-0/index.html","6cf7e9c35be77bdf0f5a0dabeb14fc54"],["F:/blog/public/tags/SpringDataJPA/index.html","9cda0281bd90bd916ccaad79452c6d8b"],["F:/blog/public/tags/Zookeeper/index.html","16e0c1031234d5a55e11c7537deca4b1"],["F:/blog/public/tags/gitee/index.html","914b61f58f2e85c28ef47921b29e7584"],["F:/blog/public/tags/index.html","f9be59b04d827e9a59f6d31ab841b875"],["F:/blog/public/tags/java核心/index.html","6b3cf305a78cb36de75f14b4d9538565"],["F:/blog/public/tags/博客搭建/index.html","12fb4222b3f0def8866fec0849068588"],["F:/blog/public/tags/数据库/index.html","5c8c02cd6c788d47ee8b1693d1279b5b"],["F:/blog/public/tags/数据库优化/index.html","7e523d96f94fea4994c21b44cca00525"]];
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







