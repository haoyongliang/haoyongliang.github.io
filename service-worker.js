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

var precacheConfig = [["F:/blog/public/2018/06/05/SpringBoot/01快速上手SpringBoot/快速上手SpringBoot/0.6294533078536897.png","a724f5cf771caa97858ab840de7a52be"],["F:/blog/public/2018/06/05/SpringBoot/01快速上手SpringBoot/快速上手SpringBoot/gouJianXiangMu.jpg","236efb206e931619f6a02c7ced6883cf"],["F:/blog/public/2018/06/05/SpringBoot/01快速上手SpringBoot/快速上手SpringBoot/ideahot.jpg","32e8db9988e538aa1fd06c89e95b13be"],["F:/blog/public/2018/06/05/SpringBoot/01快速上手SpringBoot/快速上手SpringBoot/index.html","a39c03de35fae3032669eb29fa5f7c08"],["F:/blog/public/2018/06/05/SpringBoot/01快速上手SpringBoot/快速上手SpringBoot/mulujiegou.jpg","11da6405d38b4bde98ddeedb992aa91e"],["F:/blog/public/2018/06/05/SpringBoot/01快速上手SpringBoot/快速上手SpringBoot/top.jpg","3fc8df58abf68773a73a96dcea807d6f"],["F:/blog/public/2018/06/06/SpringBoot/02web开发实战/web开发实战/findAllStudent.jpg","764e34935492f514af9da309664f7360"],["F:/blog/public/2018/06/06/SpringBoot/02web开发实战/web开发实战/findStudent.jpg","314e07b67d470e50b074944a31c2bb65"],["F:/blog/public/2018/06/06/SpringBoot/02web开发实战/web开发实战/getDetails.jpg","12551bf4891b653a2e8588a3e91ed17e"],["F:/blog/public/2018/06/06/SpringBoot/02web开发实战/web开发实战/index.html","f7772c9c9dd4743ecf9eae52b0db6a4e"],["F:/blog/public/2018/06/06/SpringBoot/02web开发实战/web开发实战/top.png","1a6fe876abdcced77ab808493493bd5c"],["F:/blog/public/2018/06/06/SpringBoot/02web开发实战/web开发实战/valid.jpg","28768117767667765305151957f9b9f5"],["F:/blog/public/2018/06/07/SpringBoot/03SpringDataJPA使用/SpringDataJPA使用/findAllByPassword.jpg","bbc266206d0c78ab4a654159e14d30e2"],["F:/blog/public/2018/06/07/SpringBoot/03SpringDataJPA使用/SpringDataJPA使用/index.html","ee1f64b9a5a77d88cb51e316964431cd"],["F:/blog/public/2018/06/07/SpringBoot/03SpringDataJPA使用/SpringDataJPA使用/many-to-many.png","0c44a91da6b713da64519e1a7138019e"],["F:/blog/public/2018/06/07/SpringBoot/03SpringDataJPA使用/SpringDataJPA使用/save.jpg","bb62f9d7f0301530b6bca08fb240ad28"],["F:/blog/public/2018/06/07/SpringBoot/03SpringDataJPA使用/SpringDataJPA使用/top.png","b10dcb549350b830353996726e312b0a"],["F:/blog/public/2019/07/05/dubble/ApacheDubbo/1.png","7cf47573f94a677c6c4824dbb8a7c3a9"],["F:/blog/public/2019/07/05/dubble/ApacheDubbo/12.png","48947b8165573db617057e4626fd4f9c"],["F:/blog/public/2019/07/05/dubble/ApacheDubbo/13.png","7ed440b1ec0d2586cfa2ccd9b16c57ac"],["F:/blog/public/2019/07/05/dubble/ApacheDubbo/14.png","0a0b56ac897d92716255463dad846ec8"],["F:/blog/public/2019/07/05/dubble/ApacheDubbo/15.png","218f8b25433e6eb5efb5bad6abc23bfc"],["F:/blog/public/2019/07/05/dubble/ApacheDubbo/16.png","e13d2ca201f995335167ef3f137294ce"],["F:/blog/public/2019/07/05/dubble/ApacheDubbo/17.png","de82a54026cf52b0d99f17e6d3ba760f"],["F:/blog/public/2019/07/05/dubble/ApacheDubbo/18.png","447b3874ec3e607a1da126abace48ff4"],["F:/blog/public/2019/07/05/dubble/ApacheDubbo/19.png","78fcfce68b24909cfb8df1b7dfb21088"],["F:/blog/public/2019/07/05/dubble/ApacheDubbo/2.png","7db06f5c49c6c27e1752e6ae3017ddc3"],["F:/blog/public/2019/07/05/dubble/ApacheDubbo/20.png","4261dfb4fc102a637480083e7301ec88"],["F:/blog/public/2019/07/05/dubble/ApacheDubbo/3.png","94caf14426b2e67bf922416c1ee9b74d"],["F:/blog/public/2019/07/05/dubble/ApacheDubbo/4.png","c28456d3fed6409e359b419d7967e093"],["F:/blog/public/2019/07/05/dubble/ApacheDubbo/5.png","d43e01056c12cbd6d3dbec8dfc6c1542"],["F:/blog/public/2019/07/05/dubble/ApacheDubbo/6.png","b9fd0188137c4e27d0bf58f6d81988ec"],["F:/blog/public/2019/07/05/dubble/ApacheDubbo/7.png","f8a8c32959430998d32ca6cfe2df662f"],["F:/blog/public/2019/07/05/dubble/ApacheDubbo/8.png","4ca276957f710101482f5cc38fd7ce20"],["F:/blog/public/2019/07/05/dubble/ApacheDubbo/9.png","f29055626fadc8859cfcf59cc86e6528"],["F:/blog/public/2019/07/05/dubble/ApacheDubbo/index.html","c8aa50e9e7b27247858c1789bf6523cb"],["F:/blog/public/2019/07/06/gitee/hexo-gitee搭建个人博客/01.png","f316641f6872ea8c9fc721338282ecb2"],["F:/blog/public/2019/07/06/gitee/hexo-gitee搭建个人博客/02.png","7dd8954a789aeceec708565362eac211"],["F:/blog/public/2019/07/06/gitee/hexo-gitee搭建个人博客/03.png","9f2e883c4d4289503d19a95d368b1cc7"],["F:/blog/public/2019/07/06/gitee/hexo-gitee搭建个人博客/04.png","e875635dba806cc6b75cec12f5fb1d88"],["F:/blog/public/2019/07/06/gitee/hexo-gitee搭建个人博客/05.png","18d4473b64ae4a8c1db27f75d1ab7c56"],["F:/blog/public/2019/07/06/gitee/hexo-gitee搭建个人博客/06.png","9ecf5793283612af9556e24cd5fcd7ea"],["F:/blog/public/2019/07/06/gitee/hexo-gitee搭建个人博客/07.png","e218007b397c58f278a127a3902a0cdc"],["F:/blog/public/2019/07/06/gitee/hexo-gitee搭建个人博客/head.jpg","2c22ecc83eb39edfbee97349d61d3c5a"],["F:/blog/public/2019/07/06/gitee/hexo-gitee搭建个人博客/index.html","8e25d605fb8a2c778d58c74e2c9f491f"],["F:/blog/public/2019/07/06/gitee/hexo-gitee搭建个人博客/timg.jpg","06868fc6d756bb4c3a9497206343c947"],["F:/blog/public/2019/07/06/gitee/hexo-gitee搭建个人博客/top.jpg","bee4985884e90096c1cf6257ee7eb53d"],["F:/blog/public/2019/07/08/mysql/MySQL中DCL相关语句的使用/index.html","38c08e0902f074715f13eadba4cffc64"],["F:/blog/public/archives/2018/06/index.html","3749fa3cd6117b55c874c2319807eed0"],["F:/blog/public/archives/2018/index.html","adba07ba512d3c1d0024e537c14f5c8e"],["F:/blog/public/archives/2019/07/index.html","7c4291e1ae6e3182f3b3eb44dfb0319f"],["F:/blog/public/archives/2019/index.html","aa96060d5dacba217802b5b0336b6163"],["F:/blog/public/archives/index.html","0774e41c09ae8ef08193b6ed44d85a34"],["F:/blog/public/categories/gitee/index.html","824aa75a60e5698f6a6b05155e13d269"],["F:/blog/public/categories/index.html","14eb7afee5e81fa81b6e9387fe9555ef"],["F:/blog/public/categories/微服务/index.html","8cee48efc43efa1dbfb73130b52c72c2"],["F:/blog/public/categories/数据库/index.html","ea02670e059b16fbaded6194ab92adb5"],["F:/blog/public/categories/框架/index.html","d0776db2f280d6ed38941607651de12d"],["F:/blog/public/css/index.css","11ef5ffb125e80d7cd97262f7190e30d"],["F:/blog/public/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["F:/blog/public/img/404.jpg","23cf82ba04680b72d5616d74aa3f5550"],["F:/blog/public/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["F:/blog/public/img/alipay.jpg","9d7d25339256096f77b7a3634bcd6e33"],["F:/blog/public/img/avatar.png","9eee8b7f139e0b0ddad209d66d3577a3"],["F:/blog/public/img/comment_bg.png","04208f25e34b8f29f072efbb2e212c86"],["F:/blog/public/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["F:/blog/public/img/wechat.jpg","67599109276ad864d53e34817dbc0d72"],["F:/blog/public/index.html","bea328b638b411449b8ba23159891da6"],["F:/blog/public/js/activate-power-mode.js","2345780cb71f6e17a20d9ca2283accda"],["F:/blog/public/js/baidupush.js","7d26211fa55bebac2e0c0abeee05a267"],["F:/blog/public/js/main.js","f19089ca2f58a7e91ba218b2cfb77d99"],["F:/blog/public/js/nightshift.js","e498a040e1746e95b5ed33b9d41618f7"],["F:/blog/public/js/runtimeshow.js","6bc5dc7652b39605152475b840e88899"],["F:/blog/public/js/search/algolia.js","db2e58114adef0dfd2f2d0a246b50ef4"],["F:/blog/public/js/search/local-search.js","e7bab78aa2b388479ea96bb0b04b6834"],["F:/blog/public/js/third-party/anime.min.js","9b4bbe6deb700e1c3606eab732f5eea5"],["F:/blog/public/js/third-party/canvas-ribbon.js","6ca731e8db63562c0dd6461eabbd65d7"],["F:/blog/public/js/third-party/fireworks.js","080fdfcacffc6828826484645140af50"],["F:/blog/public/js/third-party/jquery.fancybox.min.js","3c9fa1c1199cd4f874d855ecb1641335"],["F:/blog/public/js/third-party/jquery.min.js","c9f5aeeca3ad37bf2aa006139b935f0a"],["F:/blog/public/js/third-party/piao.js","d7a4ef27420717adccfca1c1287f8c44"],["F:/blog/public/js/tw_cn.js","fbc127c110435085bde10997850bbc55"],["F:/blog/public/js/utils.js","816e7d34d69996e6a4f0b92a81c16cca"],["F:/blog/public/tags/Dubble/index.html","814596034e9e247f81d72b041befb2b3"],["F:/blog/public/tags/MySQL/index.html","89785d26ec4ff0f3ef30a0d7a2f3fe39"],["F:/blog/public/tags/SpringBoot/index.html","ba62dcee6f3e31ec5296f9a10af86f7f"],["F:/blog/public/tags/Zookeeper/index.html","476f27e209a7885924e8192ef9c393f4"],["F:/blog/public/tags/gitee/index.html","fe187564c84714aca22e5c1e12827c51"],["F:/blog/public/tags/index.html","4c052d6f7caffd56bb2a292b53f713d1"],["F:/blog/public/tags/博客搭建/index.html","e5981f4de3a0ef4d9d21aebc1f3b58a1"],["F:/blog/public/tags/数据库/index.html","91f3c6425beca33817cf18d17bd931b1"]];
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







