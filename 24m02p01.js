// ==UserScript==
// @name         Highlight Yandex Ads
// @namespace    https://github.com/1-Mysty-1/hya
// @version      24m02p01
// @description  Highlight Ads in Yandex Search
// @description:ru Подсветка рекламы при выдаче результатов
// @license      MIT
// @author       Mysty
// @match        https://yandex.ru/*
// @match        https://ya.ru/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=yandex.ru
// @grant        none
// ==/UserScript==

(function () {
    'use strict';
    var spans = document.getElementsByTagName("span");
    var classElements = document.getElementsByClassName("KZJmITygmS");

    function highlightAd(element) {
        if (element.innerText.trim() === "Реклама") {
            element.style.fontWeight = 'bold';
            element.style.color = 'red';
            element.style.textAlign = 'right';
            var layer1 = element.parentElement;
            var layer2 = layer1.parentElement;
            var container = layer2.parentElement;
            container.style.border = '2pt groove red';
        }
    }

    for (var i = 0; i < spans.length; i++) {
        highlightAd(spans[i]);
    }

    for (var j = 0; j < classElements.length; j++) {
        highlightAd(classElements[j]);
    }
})();
