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

var precacheConfig = [["/2016/10/10/理财/02.定投6年，以亏损收场，她到底做错了什么/index.html","9a8c2cd4fd90546c4a002e6f0ac96e4a"],["/2018/06/05/SpringBoot/快速上手SpringBoot1.X/index.html","2a8ff8320f94ba409823f023e89d8786"],["/2018/06/06/SpringBoot/SpringBoot1.X入门/index.html","0edbac4314b2671afca466f975e6fcdc"],["/2018/06/07/SpringBoot/SpringBoot1.X集成SpringDataJPA/index.html","f9b72bbb8c95d3667c9ae79462d639ad"],["/2018/06/08/SpringBoot/SpringBoot1.X集成Thymeleaf/index.html","d4b250ee0b6610294ab4f90a02d1edb5"],["/2018/06/09/SpringBoot/SpringBoot1.X集成MyBatis/index.html","f7c9e31ae3bbe45f493a1d7c01dec9f5"],["/2018/06/10/SpringBoot/SpringBoot1.X集成RabbitMQ/index.html","ca576df68fb0d239b4aa714cf6ee9c0b"],["/2019/07/05/dubble/ApacheDubbo/index.html","57d8a17eff635d7de13e8333dacd8586"],["/2019/07/06/gitee/hexo-gitee搭建个人博客/index.html","d89ecab60e524926d51d69e052b6f03a"],["/2019/07/08/mysql/MySQL中DCL相关语句的使用/index.html","3aa9b036dbfe6466f224bb122cfec796"],["/2019/07/08/mysql/MySQL中的事物/index.html","1da4fae26951e4374be7b100eeb54511"],["/2019/07/09/javaSE/类加载器/index.html","0e4b00c6ab83865c4208f5e166dce0f9"],["/2019/07/11/mysql/Mysql中的DDL语句/index.html","aa3cc9cf77f2090c940096177f9e1dae"],["/2019/07/13/SpringBoot/SpringBoot2.X快速上手/index.html","2797ceabfb0ef531c5a9b8eeb04060e0"],["/2019/07/13/SpringBoot/SpringBoot2.X集成SpringDataJPA(一)/index.html","75100280a433568c22492d44e54c7a18"],["/2019/07/13/SpringBoot/SpringBoot2.X集成SpringDataJPA(三)/index.html","8dfc3dbd3c1949b33753485d86aa3cf7"],["/2019/07/13/SpringBoot/SpringBoot2.X集成SpringDataJPA(二)/index.html","4d26426d0ec1a73f3956e0d03b297d6a"],["/2019/07/13/docker/docker/index.html","9abc9883b1754e278d03b12f86dfb015"],["/2019/07/16/问题/UriIsNotRegistered/index.html","afd38997cced925c647bdb02dfa7aa51"],["/2019/08/05/IDEA/热部署/index.html","adffbe5e99316ca0843a958291a4ef5b"],["/2019/08/12/问题/maven不显示插件/index.html","638d29f031810e0c3148369c0d5e73b5"],["/2019/08/26/maven/修改maven默认仓库/index.html","e58412b6df18e6b8b25041df04c49f69"],["/2019/08/27/maven/常见的maven依赖/index.html","3517a32612234df68db9e517af53930c"],["/2019/08/27/问题/maven依赖报错解决方案/index.html","07f1e11305fd25f5cf2a46e73f1722cb"],["/2019/08/27/问题/springMVC拦截器拦截静态资源问题/index.html","492849b1876d279f1c80f60277048434"],["/2019/08/28/linux/关闭Centos7的防火墙/index.html","5b547ce2839429d6b856eb65c804daed"],["/2019/08/28/linux/初始化Centos部署环境/index.html","8c87208575f57c3bdf3bb18b3462599d"],["/2019/08/28/前端/Jquery分页插件的使用/index.html","833a6cd4b0309de11888ec9a8db5bc8c"],["/2019/10/08/理财/01.工作前五年决定你的一生之基金读后感/index.html","745f9d314786f588080c537cf2f86c15"],["/2019/10/08/简历/简历-精简版/index.html","aa5afa6462308fccd199bd9e36b26787"],["/2019/10/10/理财/03.货币基金的挑选/index.html","573b2c4af01ee4fc854c7e074e905901"],["/2019/10/11/理财/04.债券基金的挑选/index.html","5dc4b64e10f7141a1ee707b9a32564fc"],["/2019/10/11/理财/05.混合基金的挑选/index.html","0519f9a79ea3d3959ff97757c8b56321"],["/2019/10/12/理财/06.指数基金的挑选/index.html","ada75ae6b08a5e8971409be111d8d19b"],["/2019/11/17/IDEA/修改Idea快捷键DoubleShift/index.html","f59c0e6b37e6f350618d00fbef9bce93"],["/2019/12/07/工具/七牛云存储使用/index.html","3b25993b301155513444026222e09a1c"],["/2019/12/08/工具/定时任务组件Quartz/index.html","852098d3f4a4bf809b0cc26b8df87f57"],["/2019/12/19/SpringCloud/SpringCloud-Security/index.html","2780c442d44b0e64666cfeaac2177f16"],["/2020/01/06/linux/固定Centos7虚拟机中的IP地址/index.html","c30b2d46e1c022972866d6d342a79c36"],["/2020/01/07/工具/lombok中关于log4j2日志的配置/index.html","f9e7220a935b197353687d281516fe55"],["/2020/01/09/gitee/重装系统后配置gitee与博客/index.html","69c0539984c5bc4d589544c98e7d0417"],["/2020/01/12/linux/linux基本命令/index.html","bdb23b7f57a764a39822bcd4c7dd72ce"],["/2020/01/14/spring/Spring01入门和配置信息/index.html","ea5070ae2e9255bec3a90130f199f6a5"],["/2020/01/16/spring/Spring02连接池&注解开发&集成Junit/index.html","095a0a5d4b85e2b133a9485b7000ef96"],["/2020/02/13/IDEA/IDEA破解/index.html","1d265a4964e6c26ba26819a89d974dd7"],["/2020/03/01/工具/FastDFS/index.html","7debebe9706dbbfbd0aba4079ce5ead3"],["/2020/03/09/gitee/使用git提交作业/index.html","882d97bd2c13dc74c292fa37837aad08"],["/2020/03/17/SpringBoot/SpringBoot2.X进阶/index.html","42a3bbf680a723bf5bd21ab14147cdf6"],["/2020/03/18/面试题/web核心面试题/index.html","908520d10832cbe0d2138799bc7f8ae9"],["/404.html","3e9794e63aca296df3a1a99c091c8508"],["/archives/2016/10/index.html","6a19307120957383d16391041d0660cd"],["/archives/2016/index.html","b4bda679de848aea0520beb0b98c0287"],["/archives/2018/06/index.html","c56ef94abb2776fd4c93eaa0e98e68fe"],["/archives/2018/index.html","8f694657dfdffa19a79a9f0ed6e56457"],["/archives/2019/07/index.html","73394ff9740b753cc44fa14a5da275ad"],["/archives/2019/07/page/2/index.html","1f073869aafd3c7ba4e104827a169f7a"],["/archives/2019/08/index.html","917229357c9b100e1257c2c0c762a45d"],["/archives/2019/10/index.html","bab670b67c90a6b87f8a486721b4fbf0"],["/archives/2019/11/index.html","64956d434fed6afee8cb46b882d2bba3"],["/archives/2019/12/index.html","a82b2db92d83613950481110f551c4c5"],["/archives/2019/index.html","2d031980960c9422802c6d44aeaf7bcc"],["/archives/2019/page/2/index.html","9687f7ed46a6f1c555f893dada7746ff"],["/archives/2019/page/3/index.html","69b710389fffc565ffd74cd77ae26775"],["/archives/2019/page/4/index.html","d8481876f83b7975c56425cd8a2427b2"],["/archives/2020/01/index.html","5aa77a4f8ec9be867fe700e52172076a"],["/archives/2020/02/index.html","afee005a2e9eae55c59ca0a6bdd7b749"],["/archives/2020/03/index.html","b147d2ecfe60ffbf9af85372c452e762"],["/archives/2020/index.html","7f2d324cea8e7a8a55cb43f42a96c1d9"],["/archives/2020/page/2/index.html","6d90373cc38e7b754b229091305f6764"],["/archives/index.html","f1997b9aa68126d8b22d5437784d5e57"],["/archives/page/2/index.html","4637691eda9cb8283894190eac1f6e4d"],["/archives/page/3/index.html","1a107bc1ce01fc7bfd6f559202374794"],["/archives/page/4/index.html","34de0ac56759eebe6dbf57689dc432e8"],["/archives/page/5/index.html","9df93b53bd3a5ede8c467c6a719a7644"],["/categories/Docker/index.html","280d0c2ab0facf5a48b018dd9aaad035"],["/categories/Java核心/index.html","ad469f5e29ade9d74daeca76b844f09f"],["/categories/gitee/index.html","504d0f97270521b8b5502f31709ae31b"],["/categories/idea/index.html","03af9ff235b3ea958b967d5572fad4a9"],["/categories/index.html","8ee5431df9f0227e1c6651182074c3c1"],["/categories/linux/index.html","2a0006236eb5d3270d1f9540f9853980"],["/categories/maven/index.html","f6e5d6f3603d96b5b9b9f4a13d6b2141"],["/categories/前端/index.html","fce4397b900034a32ce73c48a0478cf7"],["/categories/工具/index.html","2a97908035d124aa426e2c27a9d440b1"],["/categories/开发中遇到的问题/index.html","12b594ab037f528723013bb72a6b8076"],["/categories/微服务/index.html","ff3caa2ff051dd1617b6436fca00e3af"],["/categories/数据库/index.html","51af10a193b9129cfa47e23af1fb8613"],["/categories/框架/index.html","77152fbb760317e15e612c38a22636f0"],["/categories/框架/page/2/index.html","ba58f1efe6357616f9ca6b74c719ef89"],["/categories/理财/index.html","b35005c6ceff409f1d9c0ecabe9317a1"],["/categories/面试题/index.html","168988f354eb0ef882e242eb5085b810"],["/css/blog-encrypt.css","cfbaed9c8529698d4e7287bdd2b822bb"],["/css/index.css","441b52b20d60eeb3945a235fd03bb507"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["/img/avatar.png","c291715561b777d5601df42b8d8fc791"],["/img/comment_bg.png","34a79bf208a1c3bee9d6e491a00cd369"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/icp.png","6e26aed5ced63bc60524cc736611d39e"],["/img/index.jpg","dce4b2c6fe3c36d9c9e8059f64f4d506"],["/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["/img/post.jpg","8fb7d10986b67a1dcba885f50a5de3a9"],["/img/post_loadding.svg","2901bcb74c0f032ed139676618432304"],["/index.html","f3ccd9c590b5cc1ad9455dce1595febc"],["/js/main.js","48edda5e9ced4270307a1a4f4b38c1a2"],["/js/search/algolia.js","d50c62e5d368a89a795f652e8600dd8f"],["/js/search/local-search.js","18b9d95b794ba47ccc3c098898bbfc04"],["/js/third-party/ClickShowText.js","22f4c82da4faed04c79e61fcbbdf675c"],["/js/third-party/activate-power-mode.js","e8455f75769585811cd6b3220787d08e"],["/js/third-party/canvas-nest.js","bb643bd9c2ac59f6ce2a1251b8014624"],["/js/third-party/canvas-ribbon.js","f91a3ea9c8a24813daf9e1e94714863a"],["/js/third-party/click_heart.js","c2420dfec66aa5bad663e6c365a129c8"],["/js/third-party/fireworks.js","080fdfcacffc6828826484645140af50"],["/js/third-party/piao.js","6df6ba5f90c4dff026fc3eea73933e8b"],["/js/tw_cn.js","de2abf47a3e2ff88c167a78a3256a0cd"],["/js/utils.js","23b2d649db443d85eb9f99bd0aea196b"],["/lib/blog-encrypt.js","e2c1c183135d84c59f1872c81283d412"],["/lib/crypto-js.js","60ab5dbd46dfa34dfef3c1548a22a978"],["/page/2/index.html","1978402673f2fcd55d4415adf10c6f64"],["/page/3/index.html","514c76c1edbb6cc4b9ab719e3a976de2"],["/page/4/index.html","2d02b61502bdfe8c6517581ae1d29441"],["/page/5/index.html","010bf517005ff52dd844fefa6cc9d76a"],["/tags/Centos7/index.html","af92559ec9566f5681aab459818be156"],["/tags/Docker/index.html","b62ae431922a936813c62c0fc91885d9"],["/tags/Dubble/index.html","5aeeeaab10f82df1190d9af54d74ac17"],["/tags/MySQL/index.html","39ef994e089bfb3f033b84e1963220ab"],["/tags/Spring-Security/index.html","b0d3a458d87accf6123c02d81cd87197"],["/tags/SpringBoot/index.html","b165d7bacb12c9ec3a02ba876a3ad133"],["/tags/SpringBoot2-0/index.html","18a62b670c7019ac784ce4eab2b1cebc"],["/tags/SpringCloud/index.html","afb968b108b6217176d1a78f46027703"],["/tags/SpringDataJPA/index.html","4ab0c8b5d3acbaa4b96a5273643ee577"],["/tags/Zookeeper/index.html","1d24ec1f15168b60aece96aca664343e"],["/tags/gitee/index.html","97f6d17b0c1cb0e9f6ed51788f0485ea"],["/tags/idea/index.html","ded8fea43fa10494550a2df91e4e0384"],["/tags/index.html","12567b92f28c9d3722f470570dfbbcaf"],["/tags/java核心/index.html","3e6527ea515cfd996b6eae7968f76e6a"],["/tags/jquery/index.html","33438dceb0228a0a485974ffd546cdbc"],["/tags/linux/index.html","40b3f4e5c63814db9ec8af35ea7349c3"],["/tags/maven/index.html","a932af3ae5a09cf7c3661d1cd20f42c1"],["/tags/spring/index.html","f979825284d7a54137aa5440885e9614"],["/tags/springmvc/index.html","00baa7441ee3f2c19c48e2efd6a89edf"],["/tags/博客搭建/index.html","3033e52430560df80e1f93c8367d762a"],["/tags/基金/index.html","f0f35106a5499d55a6295858e86841c2"],["/tags/工具/index.html","a1e8b65418abe40a3166452110b093c5"],["/tags/开发中遇到的问题/index.html","bc2267cc6d81eb4162ea8dd4b1906324"],["/tags/数据库/index.html","656aae3a36df138a19476bc972c4f766"],["/tags/数据库优化/index.html","8a01c9fa070202390f7da2a3a133ecd9"],["/tags/日志/index.html","3c9222ccf5cc0ab886383d91e0b69d88"],["/tags/面试题/index.html","5b63e92b6b14365d79ce68a964b14fe2"]];
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




