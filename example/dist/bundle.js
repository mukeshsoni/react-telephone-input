require=(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
var css = ".react-tel-input {\n  position: relative;\n  width: 200px;\n}\n.react-tel-input .flag {\n  width: 16px;\n  height: 11px;\n}\n.react-tel-input .ad {\n  background-position: -16px 0;\n}\n.react-tel-input .ae {\n  background-position: -32px 0;\n}\n.react-tel-input .af {\n  background-position: -48px 0;\n}\n.react-tel-input .ag {\n  background-position: -64px 0;\n}\n.react-tel-input .ai {\n  background-position: -80px 0;\n}\n.react-tel-input .al {\n  background-position: -96px 0;\n}\n.react-tel-input .am {\n  background-position: -112px 0;\n}\n.react-tel-input .ao {\n  background-position: -128px 0;\n}\n.react-tel-input .ar {\n  background-position: -144px 0;\n}\n.react-tel-input .as {\n  background-position: -160px 0;\n}\n.react-tel-input .at {\n  background-position: -176px 0;\n}\n.react-tel-input .au {\n  background-position: -192px 0;\n}\n.react-tel-input .aw {\n  background-position: -208px 0;\n}\n.react-tel-input .az {\n  background-position: -224px 0;\n}\n.react-tel-input .ba {\n  background-position: -240px 0;\n}\n.react-tel-input .bb {\n  background-position: 0 -11px;\n}\n.react-tel-input .bd {\n  background-position: -16px -11px;\n}\n.react-tel-input .be {\n  background-position: -32px -11px;\n}\n.react-tel-input .bf {\n  background-position: -48px -11px;\n}\n.react-tel-input .bg {\n  background-position: -64px -11px;\n}\n.react-tel-input .bh {\n  background-position: -80px -11px;\n}\n.react-tel-input .bi {\n  background-position: -96px -11px;\n}\n.react-tel-input .bj {\n  background-position: -112px -11px;\n}\n.react-tel-input .bm {\n  background-position: -128px -11px;\n}\n.react-tel-input .bn {\n  background-position: -144px -11px;\n}\n.react-tel-input .bo {\n  background-position: -160px -11px;\n}\n.react-tel-input .br {\n  background-position: -176px -11px;\n}\n.react-tel-input .bs {\n  background-position: -192px -11px;\n}\n.react-tel-input .bt {\n  background-position: -208px -11px;\n}\n.react-tel-input .bw {\n  background-position: -224px -11px;\n}\n.react-tel-input .by {\n  background-position: -240px -11px;\n}\n.react-tel-input .bz {\n  background-position: 0 -22px;\n}\n.react-tel-input .ca {\n  background-position: -16px -22px;\n}\n.react-tel-input .cd {\n  background-position: -32px -22px;\n}\n.react-tel-input .cf {\n  background-position: -48px -22px;\n}\n.react-tel-input .cg {\n  background-position: -64px -22px;\n}\n.react-tel-input .ch {\n  background-position: -80px -22px;\n}\n.react-tel-input .ci {\n  background-position: -96px -22px;\n}\n.react-tel-input .ck {\n  background-position: -112px -22px;\n}\n.react-tel-input .cl {\n  background-position: -128px -22px;\n}\n.react-tel-input .cm {\n  background-position: -144px -22px;\n}\n.react-tel-input .cn {\n  background-position: -160px -22px;\n}\n.react-tel-input .co {\n  background-position: -176px -22px;\n}\n.react-tel-input .cr {\n  background-position: -192px -22px;\n}\n.react-tel-input .cu {\n  background-position: -208px -22px;\n}\n.react-tel-input .cv {\n  background-position: -224px -22px;\n}\n.react-tel-input .cw {\n  background-position: -240px -22px;\n}\n.react-tel-input .cy {\n  background-position: 0 -33px;\n}\n.react-tel-input .cz {\n  background-position: -16px -33px;\n}\n.react-tel-input .de {\n  background-position: -32px -33px;\n}\n.react-tel-input .dj {\n  background-position: -48px -33px;\n}\n.react-tel-input .dk {\n  background-position: -64px -33px;\n}\n.react-tel-input .dm {\n  background-position: -80px -33px;\n}\n.react-tel-input .do {\n  background-position: -96px -33px;\n}\n.react-tel-input .dz {\n  background-position: -112px -33px;\n}\n.react-tel-input .ec {\n  background-position: -128px -33px;\n}\n.react-tel-input .ee {\n  background-position: -144px -33px;\n}\n.react-tel-input .eg {\n  background-position: -160px -33px;\n}\n.react-tel-input .er {\n  background-position: -176px -33px;\n}\n.react-tel-input .es {\n  background-position: -192px -33px;\n}\n.react-tel-input .et {\n  background-position: -208px -33px;\n}\n.react-tel-input .fi {\n  background-position: -224px -33px;\n}\n.react-tel-input .fj {\n  background-position: -240px -33px;\n}\n.react-tel-input .fk {\n  background-position: 0 -44px;\n}\n.react-tel-input .fm {\n  background-position: -16px -44px;\n}\n.react-tel-input .fo {\n  background-position: -32px -44px;\n}\n.react-tel-input .fr,\n.react-tel-input .bl,\n.react-tel-input .mf {\n  background-position: -48px -44px;\n}\n.react-tel-input .ga {\n  background-position: -64px -44px;\n}\n.react-tel-input .gb {\n  background-position: -80px -44px;\n}\n.react-tel-input .gd {\n  background-position: -96px -44px;\n}\n.react-tel-input .ge {\n  background-position: -112px -44px;\n}\n.react-tel-input .gf {\n  background-position: -128px -44px;\n}\n.react-tel-input .gh {\n  background-position: -144px -44px;\n}\n.react-tel-input .gi {\n  background-position: -160px -44px;\n}\n.react-tel-input .gl {\n  background-position: -176px -44px;\n}\n.react-tel-input .gm {\n  background-position: -192px -44px;\n}\n.react-tel-input .gn {\n  background-position: -208px -44px;\n}\n.react-tel-input .gp {\n  background-position: -224px -44px;\n}\n.react-tel-input .gq {\n  background-position: -240px -44px;\n}\n.react-tel-input .gr {\n  background-position: 0 -55px;\n}\n.react-tel-input .gt {\n  background-position: -16px -55px;\n}\n.react-tel-input .gu {\n  background-position: -32px -55px;\n}\n.react-tel-input .gw {\n  background-position: -48px -55px;\n}\n.react-tel-input .gy {\n  background-position: -64px -55px;\n}\n.react-tel-input .hk {\n  background-position: -80px -55px;\n}\n.react-tel-input .hn {\n  background-position: -96px -55px;\n}\n.react-tel-input .hr {\n  background-position: -112px -55px;\n}\n.react-tel-input .ht {\n  background-position: -128px -55px;\n}\n.react-tel-input .hu {\n  background-position: -144px -55px;\n}\n.react-tel-input .id {\n  background-position: -160px -55px;\n}\n.react-tel-input .ie {\n  background-position: -176px -55px;\n}\n.react-tel-input .il {\n  background-position: -192px -55px;\n}\n.react-tel-input .in {\n  background-position: -208px -55px;\n}\n.react-tel-input .io {\n  background-position: -224px -55px;\n}\n.react-tel-input .iq {\n  background-position: -240px -55px;\n}\n.react-tel-input .ir {\n  background-position: 0 -66px;\n}\n.react-tel-input .is {\n  background-position: -16px -66px;\n}\n.react-tel-input .it {\n  background-position: -32px -66px;\n}\n.react-tel-input .jm {\n  background-position: -48px -66px;\n}\n.react-tel-input .jo {\n  background-position: -64px -66px;\n}\n.react-tel-input .jp {\n  background-position: -80px -66px;\n}\n.react-tel-input .ke {\n  background-position: -96px -66px;\n}\n.react-tel-input .kg {\n  background-position: -112px -66px;\n}\n.react-tel-input .kh {\n  background-position: -128px -66px;\n}\n.react-tel-input .ki {\n  background-position: -144px -66px;\n}\n.react-tel-input .km {\n  background-position: -160px -66px;\n}\n.react-tel-input .kn {\n  background-position: -176px -66px;\n}\n.react-tel-input .kp {\n  background-position: -192px -66px;\n}\n.react-tel-input .kr {\n  background-position: -208px -66px;\n}\n.react-tel-input .kw {\n  background-position: -224px -66px;\n}\n.react-tel-input .ky {\n  background-position: -240px -66px;\n}\n.react-tel-input .kz {\n  background-position: 0 -77px;\n}\n.react-tel-input .la {\n  background-position: -16px -77px;\n}\n.react-tel-input .lb {\n  background-position: -32px -77px;\n}\n.react-tel-input .lc {\n  background-position: -48px -77px;\n}\n.react-tel-input .li {\n  background-position: -64px -77px;\n}\n.react-tel-input .lk {\n  background-position: -80px -77px;\n}\n.react-tel-input .lr {\n  background-position: -96px -77px;\n}\n.react-tel-input .ls {\n  background-position: -112px -77px;\n}\n.react-tel-input .lt {\n  background-position: -128px -77px;\n}\n.react-tel-input .lu {\n  background-position: -144px -77px;\n}\n.react-tel-input .lv {\n  background-position: -160px -77px;\n}\n.react-tel-input .ly {\n  background-position: -176px -77px;\n}\n.react-tel-input .ma {\n  background-position: -192px -77px;\n}\n.react-tel-input .mc {\n  background-position: -208px -77px;\n}\n.react-tel-input .md {\n  background-position: -224px -77px;\n}\n.react-tel-input .me {\n  background-position: -112px -154px;\n  height: 12px;\n}\n.react-tel-input .mg {\n  background-position: 0 -88px;\n}\n.react-tel-input .mh {\n  background-position: -16px -88px;\n}\n.react-tel-input .mk {\n  background-position: -32px -88px;\n}\n.react-tel-input .ml {\n  background-position: -48px -88px;\n}\n.react-tel-input .mm {\n  background-position: -64px -88px;\n}\n.react-tel-input .mn {\n  background-position: -80px -88px;\n}\n.react-tel-input .mo {\n  background-position: -96px -88px;\n}\n.react-tel-input .mp {\n  background-position: -112px -88px;\n}\n.react-tel-input .mq {\n  background-position: -128px -88px;\n}\n.react-tel-input .mr {\n  background-position: -144px -88px;\n}\n.react-tel-input .ms {\n  background-position: -160px -88px;\n}\n.react-tel-input .mt {\n  background-position: -176px -88px;\n}\n.react-tel-input .mu {\n  background-position: -192px -88px;\n}\n.react-tel-input .mv {\n  background-position: -208px -88px;\n}\n.react-tel-input .mw {\n  background-position: -224px -88px;\n}\n.react-tel-input .mx {\n  background-position: -240px -88px;\n}\n.react-tel-input .my {\n  background-position: 0 -99px;\n}\n.react-tel-input .mz {\n  background-position: -16px -99px;\n}\n.react-tel-input .na {\n  background-position: -32px -99px;\n}\n.react-tel-input .nc {\n  background-position: -48px -99px;\n}\n.react-tel-input .ne {\n  background-position: -64px -99px;\n}\n.react-tel-input .nf {\n  background-position: -80px -99px;\n}\n.react-tel-input .ng {\n  background-position: -96px -99px;\n}\n.react-tel-input .ni {\n  background-position: -112px -99px;\n}\n.react-tel-input .nl,\n.react-tel-input .bq {\n  background-position: -128px -99px;\n}\n.react-tel-input .no {\n  background-position: -144px -99px;\n}\n.react-tel-input .np {\n  background-position: -160px -99px;\n}\n.react-tel-input .nr {\n  background-position: -176px -99px;\n}\n.react-tel-input .nu {\n  background-position: -192px -99px;\n}\n.react-tel-input .nz {\n  background-position: -208px -99px;\n}\n.react-tel-input .om {\n  background-position: -224px -99px;\n}\n.react-tel-input .pa {\n  background-position: -240px -99px;\n}\n.react-tel-input .pe {\n  background-position: 0 -110px;\n}\n.react-tel-input .pf {\n  background-position: -16px -110px;\n}\n.react-tel-input .pg {\n  background-position: -32px -110px;\n}\n.react-tel-input .ph {\n  background-position: -48px -110px;\n}\n.react-tel-input .pk {\n  background-position: -64px -110px;\n}\n.react-tel-input .pl {\n  background-position: -80px -110px;\n}\n.react-tel-input .pm {\n  background-position: -96px -110px;\n}\n.react-tel-input .pr {\n  background-position: -112px -110px;\n}\n.react-tel-input .ps {\n  background-position: -128px -110px;\n}\n.react-tel-input .pt {\n  background-position: -144px -110px;\n}\n.react-tel-input .pw {\n  background-position: -160px -110px;\n}\n.react-tel-input .py {\n  background-position: -176px -110px;\n}\n.react-tel-input .qa {\n  background-position: -192px -110px;\n}\n.react-tel-input .re {\n  background-position: -208px -110px;\n}\n.react-tel-input .ro {\n  background-position: -224px -110px;\n}\n.react-tel-input .rs {\n  background-position: -240px -110px;\n}\n.react-tel-input .ru {\n  background-position: 0 -121px;\n}\n.react-tel-input .rw {\n  background-position: -16px -121px;\n}\n.react-tel-input .sa {\n  background-position: -32px -121px;\n}\n.react-tel-input .sb {\n  background-position: -48px -121px;\n}\n.react-tel-input .sc {\n  background-position: -64px -121px;\n}\n.react-tel-input .sd {\n  background-position: -80px -121px;\n}\n.react-tel-input .se {\n  background-position: -96px -121px;\n}\n.react-tel-input .sg {\n  background-position: -112px -121px;\n}\n.react-tel-input .sh {\n  background-position: -128px -121px;\n}\n.react-tel-input .si {\n  background-position: -144px -121px;\n}\n.react-tel-input .sk {\n  background-position: -160px -121px;\n}\n.react-tel-input .sl {\n  background-position: -176px -121px;\n}\n.react-tel-input .sm {\n  background-position: -192px -121px;\n}\n.react-tel-input .sn {\n  background-position: -208px -121px;\n}\n.react-tel-input .so {\n  background-position: -224px -121px;\n}\n.react-tel-input .sr {\n  background-position: -240px -121px;\n}\n.react-tel-input .ss {\n  background-position: 0 -132px;\n}\n.react-tel-input .st {\n  background-position: -16px -132px;\n}\n.react-tel-input .sv {\n  background-position: -32px -132px;\n}\n.react-tel-input .sx {\n  background-position: -48px -132px;\n}\n.react-tel-input .sy {\n  background-position: -64px -132px;\n}\n.react-tel-input .sz {\n  background-position: -80px -132px;\n}\n.react-tel-input .tc {\n  background-position: -96px -132px;\n}\n.react-tel-input .td {\n  background-position: -112px -132px;\n}\n.react-tel-input .tg {\n  background-position: -128px -132px;\n}\n.react-tel-input .th {\n  background-position: -144px -132px;\n}\n.react-tel-input .tj {\n  background-position: -160px -132px;\n}\n.react-tel-input .tk {\n  background-position: -176px -132px;\n}\n.react-tel-input .tl {\n  background-position: -192px -132px;\n}\n.react-tel-input .tm {\n  background-position: -208px -132px;\n}\n.react-tel-input .tn {\n  background-position: -224px -132px;\n}\n.react-tel-input .to {\n  background-position: -240px -132px;\n}\n.react-tel-input .tr {\n  background-position: 0 -143px;\n}\n.react-tel-input .tt {\n  background-position: -16px -143px;\n}\n.react-tel-input .tv {\n  background-position: -32px -143px;\n}\n.react-tel-input .tw {\n  background-position: -48px -143px;\n}\n.react-tel-input .tz {\n  background-position: -64px -143px;\n}\n.react-tel-input .ua {\n  background-position: -80px -143px;\n}\n.react-tel-input .ug {\n  background-position: -96px -143px;\n}\n.react-tel-input .us {\n  background-position: -112px -143px;\n}\n.react-tel-input .uy {\n  background-position: -128px -143px;\n}\n.react-tel-input .uz {\n  background-position: -144px -143px;\n}\n.react-tel-input .va {\n  background-position: -160px -143px;\n}\n.react-tel-input .vc {\n  background-position: -176px -143px;\n}\n.react-tel-input .ve {\n  background-position: -192px -143px;\n}\n.react-tel-input .vg {\n  background-position: -208px -143px;\n}\n.react-tel-input .vi {\n  background-position: -224px -143px;\n}\n.react-tel-input .vn {\n  background-position: -240px -143px;\n}\n.react-tel-input .vu {\n  background-position: 0 -154px;\n}\n.react-tel-input .wf {\n  background-position: -16px -154px;\n}\n.react-tel-input .ws {\n  background-position: -32px -154px;\n}\n.react-tel-input .ye {\n  background-position: -48px -154px;\n}\n.react-tel-input .za {\n  background-position: -64px -154px;\n}\n.react-tel-input .zm {\n  background-position: -80px -154px;\n}\n.react-tel-input .zw {\n  background-position: -96px -154px;\n}\n.react-tel-input * {\n  box-sizing: border-box;\n  -moz-box-sizing: border-box;\n}\n.react-tel-input .hide {\n  display: none;\n}\n.react-tel-input .v-hide {\n  visibility: hidden;\n}\n.react-tel-input input[type=text],\n.react-tel-input input[type=tel] {\n  position: relative;\n  z-index: 0;\n  margin-top: 0 !important;\n  margin-bottom: 0 !important;\n  padding-left: 44px;\n  margin-left: 0;\n  background: #FFFFFF;\n  border: 1px solid #CACACA;\n  border-radius: 3px;\n  box-shadow: 0 1px 2px #E3E3E3 inset;\n  line-height: 25px;\n  height: 28px;\n  width: 100%;\n}\n.react-tel-input input[type=text]:focus,\n.react-tel-input input[type=tel]:focus {\n  border-color: #42bdff;\n  border-left-color: #cacaca;\n}\n.react-tel-input input[type=text].invalid-number,\n.react-tel-input input[type=tel].invalid-number {\n  border: 1px solid #d79f9f;\n  background-color: #FAF0F0;\n  border-left-color: #cacaca;\n}\n.react-tel-input input[type=text].invalid-number:focus,\n.react-tel-input input[type=tel].invalid-number:focus {\n  border: 1px solid #d79f9f;\n  border-left-color: #cacaca;\n  background-color: #FAF0F0;\n}\n.react-tel-input .flag-dropdown {\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  padding: 0;\n  background-color: #eaeaea;\n  border: 1px solid #cacaca;\n  border-radius: 3px 0 0 3px;\n}\n.react-tel-input .flag-dropdown.open-dropdown {\n  background: #fff;\n  border-bottom: 0;\n  border-radius: 3px 0 0 0;\n}\n.react-tel-input .flag-dropdown.open-dropdown .selected-flag {\n  background: #fff;\n  border-radius: 3px 0 0 0;\n}\n.react-tel-input .flag-dropdown:hover {\n  cursor: pointer;\n}\n.react-tel-input .flag-dropdown:hover .selected-flag {\n  background-color: #fff;\n}\n.react-tel-input input[disabled] + .flag-dropdown:hover {\n  cursor: default;\n}\n.react-tel-input input[disabled] + .flag-dropdown:hover .selected-flag {\n  background-color: transparent;\n}\n.react-tel-input .selected-flag {\n  z-index: 13;\n  position: relative;\n  width: 38px;\n  height: 26px;\n  padding: 0 0 0 8px;\n  border-radius: 3px 0 0 3px;\n}\n.react-tel-input .selected-flag .flag {\n  position: absolute;\n  top: 50%;\n  margin-top: -5px;\n}\n.react-tel-input .selected-flag .arrow {\n  position: relative;\n  top: 50%;\n  margin-top: -2px;\n  left: 20px;\n  width: 0;\n  height: 0;\n  border-left: 3px solid transparent;\n  border-right: 3px solid transparent;\n  border-top: 4px solid #555;\n}\n.react-tel-input .selected-flag .arrow.up {\n  border-top: none;\n  border-bottom: 4px solid #555;\n}\n.react-tel-input .country-list {\n  list-style: none;\n  position: absolute;\n  z-index: 2;\n  padding: 0;\n  margin: -1px 0 0 -1px;\n  box-shadow: 1px 1px 4px rgba(0, 0, 0, 0.2);\n  background-color: white;\n  border: 1px solid #ccc;\n  width: 400px;\n  max-height: 200px;\n  overflow-y: scroll;\n  border-radius: 0 0 3px 3px;\n  top: 26px;\n}\n.react-tel-input .country-list .flag {\n  display: inline-block;\n}\n.react-tel-input .country-list .divider {\n  padding-bottom: 5px;\n  margin-bottom: 5px;\n  border-bottom: 1px solid #ccc;\n}\n.react-tel-input .country-list .country {\n  padding: 5px 10px;\n}\n.react-tel-input .country-list .country .dial-code {\n  color: #999;\n}\n.react-tel-input .country-list .country:hover {\n  background-color: #e8f7fe;\n}\n.react-tel-input .country-list .country.highlight {\n  background-color: #c7e2f1;\n}\n.react-tel-input .country-list .flag {\n  margin-right: 6px;\n  margin-top: 2px;\n}\n.react-tel-input .country-list .country-name {\n  margin-right: 6px;\n}\n";(require('lessify'))(css); module.exports = css;
},{"lessify":3}],2:[function(require,module,exports){
module.exports = function (css, customDocument) {
  var doc = customDocument || document;
  if (doc.createStyleSheet) {
    var sheet = doc.createStyleSheet()
    sheet.cssText = css;
    return sheet.ownerNode;
  } else {
    var head = doc.getElementsByTagName('head')[0],
        style = doc.createElement('style');

    style.type = 'text/css';

    if (style.styleSheet) {
      style.styleSheet.cssText = css;
    } else {
      style.appendChild(doc.createTextNode(css));
    }

    head.appendChild(style);
    return style;
  }
};

module.exports.byUrl = function(url) {
  if (document.createStyleSheet) {
    return document.createStyleSheet(url).ownerNode;
  } else {
    var head = document.getElementsByTagName('head')[0],
        link = document.createElement('link');

    link.rel = 'stylesheet';
    link.href = url;

    head.appendChild(link);
    return link;
  }
};

},{}],3:[function(require,module,exports){
module.exports = require('cssify');

},{"cssify":2}],4:[function(require,module,exports){
var baseSlice = require('../internal/baseSlice'),
    isIterateeCall = require('../internal/isIterateeCall');

/**
 * Creates a slice of `array` with `n` elements dropped from the beginning.
 *
 * @static
 * @memberOf _
 * @category Array
 * @param {Array} array The array to query.
 * @param {number} [n=1] The number of elements to drop.
 * @param- {Object} [guard] Enables use as a callback for functions like `_.map`.
 * @returns {Array} Returns the slice of `array`.
 * @example
 *
 * _.drop([1, 2, 3]);
 * // => [2, 3]
 *
 * _.drop([1, 2, 3], 2);
 * // => [3]
 *
 * _.drop([1, 2, 3], 5);
 * // => []
 *
 * _.drop([1, 2, 3], 0);
 * // => [1, 2, 3]
 */
function drop(array, n, guard) {
  var length = array ? array.length : 0;
  if (!length) {
    return [];
  }
  if (guard ? isIterateeCall(array, n, guard) : n == null) {
    n = 1;
  }
  return baseSlice(array, n < 0 ? 0 : n);
}

module.exports = drop;

},{"../internal/baseSlice":41,"../internal/isIterateeCall":60}],5:[function(require,module,exports){
var createFindIndex = require('../internal/createFindIndex');

/**
 * This method is like `_.find` except that it returns the index of the first
 * element `predicate` returns truthy for instead of the element itself.
 *
 * If a property name is provided for `predicate` the created `_.property`
 * style callback returns the property value of the given element.
 *
 * If a value is also provided for `thisArg` the created `_.matchesProperty`
 * style callback returns `true` for elements that have a matching property
 * value, else `false`.
 *
 * If an object is provided for `predicate` the created `_.matches` style
 * callback returns `true` for elements that have the properties of the given
 * object, else `false`.
 *
 * @static
 * @memberOf _
 * @category Array
 * @param {Array} array The array to search.
 * @param {Function|Object|string} [predicate=_.identity] The function invoked
 *  per iteration.
 * @param {*} [thisArg] The `this` binding of `predicate`.
 * @returns {number} Returns the index of the found element, else `-1`.
 * @example
 *
 * var users = [
 *   { 'user': 'barney',  'active': false },
 *   { 'user': 'fred',    'active': false },
 *   { 'user': 'pebbles', 'active': true }
 * ];
 *
 * _.findIndex(users, function(chr) {
 *   return chr.user == 'barney';
 * });
 * // => 0
 *
 * // using the `_.matches` callback shorthand
 * _.findIndex(users, { 'user': 'fred', 'active': false });
 * // => 1
 *
 * // using the `_.matchesProperty` callback shorthand
 * _.findIndex(users, 'active', false);
 * // => 0
 *
 * // using the `_.property` callback shorthand
 * _.findIndex(users, 'active');
 * // => 2
 */
var findIndex = createFindIndex();

module.exports = findIndex;

},{"../internal/createFindIndex":50}],6:[function(require,module,exports){
/**
 * Gets the first element of `array`.
 *
 * @static
 * @memberOf _
 * @alias head
 * @category Array
 * @param {Array} array The array to query.
 * @returns {*} Returns the first element of `array`.
 * @example
 *
 * _.first([1, 2, 3]);
 * // => 1
 *
 * _.first([]);
 * // => undefined
 */
function first(array) {
  return array ? array[0] : undefined;
}

module.exports = first;

},{}],7:[function(require,module,exports){
/**
 * Gets the last element of `array`.
 *
 * @static
 * @memberOf _
 * @category Array
 * @param {Array} array The array to query.
 * @returns {*} Returns the last element of `array`.
 * @example
 *
 * _.last([1, 2, 3]);
 * // => 3
 */
function last(array) {
  var length = array ? array.length : 0;
  return length ? array[length - 1] : undefined;
}

module.exports = last;

},{}],8:[function(require,module,exports){
var drop = require('./drop');

/**
 * Gets all but the first element of `array`.
 *
 * @static
 * @memberOf _
 * @alias tail
 * @category Array
 * @param {Array} array The array to query.
 * @returns {Array} Returns the slice of `array`.
 * @example
 *
 * _.rest([1, 2, 3]);
 * // => [2, 3]
 */
function rest(array) {
  return drop(array, 1);
}

module.exports = rest;

},{"./drop":4}],9:[function(require,module,exports){
module.exports = require('./some');

},{"./some":15}],10:[function(require,module,exports){
var arrayFilter = require('../internal/arrayFilter'),
    baseCallback = require('../internal/baseCallback'),
    baseFilter = require('../internal/baseFilter'),
    isArray = require('../lang/isArray');

/**
 * Iterates over elements of `collection`, returning an array of all elements
 * `predicate` returns truthy for. The predicate is bound to `thisArg` and
 * invoked with three arguments: (value, index|key, collection).
 *
 * If a property name is provided for `predicate` the created `_.property`
 * style callback returns the property value of the given element.
 *
 * If a value is also provided for `thisArg` the created `_.matchesProperty`
 * style callback returns `true` for elements that have a matching property
 * value, else `false`.
 *
 * If an object is provided for `predicate` the created `_.matches` style
 * callback returns `true` for elements that have the properties of the given
 * object, else `false`.
 *
 * @static
 * @memberOf _
 * @alias select
 * @category Collection
 * @param {Array|Object|string} collection The collection to iterate over.
 * @param {Function|Object|string} [predicate=_.identity] The function invoked
 *  per iteration.
 * @param {*} [thisArg] The `this` binding of `predicate`.
 * @returns {Array} Returns the new filtered array.
 * @example
 *
 * _.filter([4, 5, 6], function(n) {
 *   return n % 2 == 0;
 * });
 * // => [4, 6]
 *
 * var users = [
 *   { 'user': 'barney', 'age': 36, 'active': true },
 *   { 'user': 'fred',   'age': 40, 'active': false }
 * ];
 *
 * // using the `_.matches` callback shorthand
 * _.pluck(_.filter(users, { 'age': 36, 'active': true }), 'user');
 * // => ['barney']
 *
 * // using the `_.matchesProperty` callback shorthand
 * _.pluck(_.filter(users, 'active', false), 'user');
 * // => ['fred']
 *
 * // using the `_.property` callback shorthand
 * _.pluck(_.filter(users, 'active'), 'user');
 * // => ['barney']
 */
function filter(collection, predicate, thisArg) {
  var func = isArray(collection) ? arrayFilter : baseFilter;
  predicate = baseCallback(predicate, thisArg, 3);
  return func(collection, predicate);
}

module.exports = filter;

},{"../internal/arrayFilter":20,"../internal/baseCallback":24,"../internal/baseFilter":26,"../lang/isArray":76}],11:[function(require,module,exports){
var baseEach = require('../internal/baseEach'),
    createFind = require('../internal/createFind');

/**
 * Iterates over elements of `collection`, returning the first element
 * `predicate` returns truthy for. The predicate is bound to `thisArg` and
 * invoked with three arguments: (value, index|key, collection).
 *
 * If a property name is provided for `predicate` the created `_.property`
 * style callback returns the property value of the given element.
 *
 * If a value is also provided for `thisArg` the created `_.matchesProperty`
 * style callback returns `true` for elements that have a matching property
 * value, else `false`.
 *
 * If an object is provided for `predicate` the created `_.matches` style
 * callback returns `true` for elements that have the properties of the given
 * object, else `false`.
 *
 * @static
 * @memberOf _
 * @alias detect
 * @category Collection
 * @param {Array|Object|string} collection The collection to search.
 * @param {Function|Object|string} [predicate=_.identity] The function invoked
 *  per iteration.
 * @param {*} [thisArg] The `this` binding of `predicate`.
 * @returns {*} Returns the matched element, else `undefined`.
 * @example
 *
 * var users = [
 *   { 'user': 'barney',  'age': 36, 'active': true },
 *   { 'user': 'fred',    'age': 40, 'active': false },
 *   { 'user': 'pebbles', 'age': 1,  'active': true }
 * ];
 *
 * _.result(_.find(users, function(chr) {
 *   return chr.age < 40;
 * }), 'user');
 * // => 'barney'
 *
 * // using the `_.matches` callback shorthand
 * _.result(_.find(users, { 'age': 1, 'active': true }), 'user');
 * // => 'pebbles'
 *
 * // using the `_.matchesProperty` callback shorthand
 * _.result(_.find(users, 'active', false), 'user');
 * // => 'fred'
 *
 * // using the `_.property` callback shorthand
 * _.result(_.find(users, 'active'), 'user');
 * // => 'barney'
 */
var find = createFind(baseEach);

module.exports = find;

},{"../internal/baseEach":25,"../internal/createFind":49}],12:[function(require,module,exports){
var baseMatches = require('../internal/baseMatches'),
    find = require('./find');

/**
 * Performs a deep comparison between each element in `collection` and the
 * source object, returning the first element that has equivalent property
 * values.
 *
 * **Note:** This method supports comparing arrays, booleans, `Date` objects,
 * numbers, `Object` objects, regexes, and strings. Objects are compared by
 * their own, not inherited, enumerable properties. For comparing a single
 * own or inherited property value see `_.matchesProperty`.
 *
 * @static
 * @memberOf _
 * @category Collection
 * @param {Array|Object|string} collection The collection to search.
 * @param {Object} source The object of property values to match.
 * @returns {*} Returns the matched element, else `undefined`.
 * @example
 *
 * var users = [
 *   { 'user': 'barney', 'age': 36, 'active': true },
 *   { 'user': 'fred',   'age': 40, 'active': false }
 * ];
 *
 * _.result(_.findWhere(users, { 'age': 36, 'active': true }), 'user');
 * // => 'barney'
 *
 * _.result(_.findWhere(users, { 'age': 40, 'active': false }), 'user');
 * // => 'fred'
 */
function findWhere(collection, source) {
  return find(collection, baseMatches(source));
}

module.exports = findWhere;

},{"../internal/baseMatches":36,"./find":11}],13:[function(require,module,exports){
var arrayMap = require('../internal/arrayMap'),
    baseCallback = require('../internal/baseCallback'),
    baseMap = require('../internal/baseMap'),
    isArray = require('../lang/isArray');

/**
 * Creates an array of values by running each element in `collection` through
 * `iteratee`. The `iteratee` is bound to `thisArg` and invoked with three
 * arguments: (value, index|key, collection).
 *
 * If a property name is provided for `iteratee` the created `_.property`
 * style callback returns the property value of the given element.
 *
 * If a value is also provided for `thisArg` the created `_.matchesProperty`
 * style callback returns `true` for elements that have a matching property
 * value, else `false`.
 *
 * If an object is provided for `iteratee` the created `_.matches` style
 * callback returns `true` for elements that have the properties of the given
 * object, else `false`.
 *
 * Many lodash methods are guarded to work as iteratees for methods like
 * `_.every`, `_.filter`, `_.map`, `_.mapValues`, `_.reject`, and `_.some`.
 *
 * The guarded methods are:
 * `ary`, `callback`, `chunk`, `clone`, `create`, `curry`, `curryRight`,
 * `drop`, `dropRight`, `every`, `fill`, `flatten`, `invert`, `max`, `min`,
 * `parseInt`, `slice`, `sortBy`, `take`, `takeRight`, `template`, `trim`,
 * `trimLeft`, `trimRight`, `trunc`, `random`, `range`, `sample`, `some`,
 * `sum`, `uniq`, and `words`
 *
 * @static
 * @memberOf _
 * @alias collect
 * @category Collection
 * @param {Array|Object|string} collection The collection to iterate over.
 * @param {Function|Object|string} [iteratee=_.identity] The function invoked
 *  per iteration.
 * @param {*} [thisArg] The `this` binding of `iteratee`.
 * @returns {Array} Returns the new mapped array.
 * @example
 *
 * function timesThree(n) {
 *   return n * 3;
 * }
 *
 * _.map([1, 2], timesThree);
 * // => [3, 6]
 *
 * _.map({ 'a': 1, 'b': 2 }, timesThree);
 * // => [3, 6] (iteration order is not guaranteed)
 *
 * var users = [
 *   { 'user': 'barney' },
 *   { 'user': 'fred' }
 * ];
 *
 * // using the `_.property` callback shorthand
 * _.map(users, 'user');
 * // => ['barney', 'fred']
 */
function map(collection, iteratee, thisArg) {
  var func = isArray(collection) ? arrayMap : baseMap;
  iteratee = baseCallback(iteratee, thisArg, 3);
  return func(collection, iteratee);
}

module.exports = map;

},{"../internal/arrayMap":21,"../internal/baseCallback":24,"../internal/baseMap":35,"../lang/isArray":76}],14:[function(require,module,exports){
var arrayReduce = require('../internal/arrayReduce'),
    baseEach = require('../internal/baseEach'),
    createReduce = require('../internal/createReduce');

/**
 * Reduces `collection` to a value which is the accumulated result of running
 * each element in `collection` through `iteratee`, where each successive
 * invocation is supplied the return value of the previous. If `accumulator`
 * is not provided the first element of `collection` is used as the initial
 * value. The `iteratee` is bound to `thisArg` and invoked with four arguments:
 * (accumulator, value, index|key, collection).
 *
 * Many lodash methods are guarded to work as iteratees for methods like
 * `_.reduce`, `_.reduceRight`, and `_.transform`.
 *
 * The guarded methods are:
 * `assign`, `defaults`, `includes`, `merge`, `sortByAll`, and `sortByOrder`
 *
 * @static
 * @memberOf _
 * @alias foldl, inject
 * @category Collection
 * @param {Array|Object|string} collection The collection to iterate over.
 * @param {Function} [iteratee=_.identity] The function invoked per iteration.
 * @param {*} [accumulator] The initial value.
 * @param {*} [thisArg] The `this` binding of `iteratee`.
 * @returns {*} Returns the accumulated value.
 * @example
 *
 * _.reduce([1, 2], function(total, n) {
 *   return total + n;
 * });
 * // => 3
 *
 * _.reduce({ 'a': 1, 'b': 2 }, function(result, n, key) {
 *   result[key] = n * 3;
 *   return result;
 * }, {});
 * // => { 'a': 3, 'b': 6 } (iteration order is not guaranteed)
 */
var reduce = createReduce(arrayReduce, baseEach);

module.exports = reduce;

},{"../internal/arrayReduce":22,"../internal/baseEach":25,"../internal/createReduce":51}],15:[function(require,module,exports){
var arraySome = require('../internal/arraySome'),
    baseCallback = require('../internal/baseCallback'),
    baseSome = require('../internal/baseSome'),
    isArray = require('../lang/isArray'),
    isIterateeCall = require('../internal/isIterateeCall');

/**
 * Checks if `predicate` returns truthy for **any** element of `collection`.
 * The function returns as soon as it finds a passing value and does not iterate
 * over the entire collection. The predicate is bound to `thisArg` and invoked
 * with three arguments: (value, index|key, collection).
 *
 * If a property name is provided for `predicate` the created `_.property`
 * style callback returns the property value of the given element.
 *
 * If a value is also provided for `thisArg` the created `_.matchesProperty`
 * style callback returns `true` for elements that have a matching property
 * value, else `false`.
 *
 * If an object is provided for `predicate` the created `_.matches` style
 * callback returns `true` for elements that have the properties of the given
 * object, else `false`.
 *
 * @static
 * @memberOf _
 * @alias any
 * @category Collection
 * @param {Array|Object|string} collection The collection to iterate over.
 * @param {Function|Object|string} [predicate=_.identity] The function invoked
 *  per iteration.
 * @param {*} [thisArg] The `this` binding of `predicate`.
 * @returns {boolean} Returns `true` if any element passes the predicate check,
 *  else `false`.
 * @example
 *
 * _.some([null, 0, 'yes', false], Boolean);
 * // => true
 *
 * var users = [
 *   { 'user': 'barney', 'active': true },
 *   { 'user': 'fred',   'active': false }
 * ];
 *
 * // using the `_.matches` callback shorthand
 * _.some(users, { 'user': 'barney', 'active': false });
 * // => false
 *
 * // using the `_.matchesProperty` callback shorthand
 * _.some(users, 'active', false);
 * // => true
 *
 * // using the `_.property` callback shorthand
 * _.some(users, 'active');
 * // => true
 */
function some(collection, predicate, thisArg) {
  var func = isArray(collection) ? arraySome : baseSome;
  if (thisArg && isIterateeCall(collection, predicate, thisArg)) {
    predicate = null;
  }
  if (typeof predicate != 'function' || thisArg !== undefined) {
    predicate = baseCallback(predicate, thisArg, 3);
  }
  return func(collection, predicate);
}

module.exports = some;

},{"../internal/arraySome":23,"../internal/baseCallback":24,"../internal/baseSome":42,"../internal/isIterateeCall":60,"../lang/isArray":76}],16:[function(require,module,exports){
var getNative = require('../internal/getNative');

/* Native method references for those with the same name as other `lodash` methods. */
var nativeNow = getNative(Date, 'now');

/**
 * Gets the number of milliseconds that have elapsed since the Unix epoch
 * (1 January 1970 00:00:00 UTC).
 *
 * @static
 * @memberOf _
 * @category Date
 * @example
 *
 * _.defer(function(stamp) {
 *   console.log(_.now() - stamp);
 * }, _.now());
 * // => logs the number of milliseconds it took for the deferred function to be invoked
 */
var now = nativeNow || function() {
  return new Date().getTime();
};

module.exports = now;

},{"../internal/getNative":57}],17:[function(require,module,exports){
var isObject = require('../lang/isObject'),
    now = require('../date/now');

/** Used as the `TypeError` message for "Functions" methods. */
var FUNC_ERROR_TEXT = 'Expected a function';

/* Native method references for those with the same name as other `lodash` methods. */
var nativeMax = Math.max;

/**
 * Creates a debounced function that delays invoking `func` until after `wait`
 * milliseconds have elapsed since the last time the debounced function was
 * invoked. The debounced function comes with a `cancel` method to cancel
 * delayed invocations. Provide an options object to indicate that `func`
 * should be invoked on the leading and/or trailing edge of the `wait` timeout.
 * Subsequent calls to the debounced function return the result of the last
 * `func` invocation.
 *
 * **Note:** If `leading` and `trailing` options are `true`, `func` is invoked
 * on the trailing edge of the timeout only if the the debounced function is
 * invoked more than once during the `wait` timeout.
 *
 * See [David Corbacho's article](http://drupalmotion.com/article/debounce-and-throttle-visual-explanation)
 * for details over the differences between `_.debounce` and `_.throttle`.
 *
 * @static
 * @memberOf _
 * @category Function
 * @param {Function} func The function to debounce.
 * @param {number} [wait=0] The number of milliseconds to delay.
 * @param {Object} [options] The options object.
 * @param {boolean} [options.leading=false] Specify invoking on the leading
 *  edge of the timeout.
 * @param {number} [options.maxWait] The maximum time `func` is allowed to be
 *  delayed before it is invoked.
 * @param {boolean} [options.trailing=true] Specify invoking on the trailing
 *  edge of the timeout.
 * @returns {Function} Returns the new debounced function.
 * @example
 *
 * // avoid costly calculations while the window size is in flux
 * jQuery(window).on('resize', _.debounce(calculateLayout, 150));
 *
 * // invoke `sendMail` when the click event is fired, debouncing subsequent calls
 * jQuery('#postbox').on('click', _.debounce(sendMail, 300, {
 *   'leading': true,
 *   'trailing': false
 * }));
 *
 * // ensure `batchLog` is invoked once after 1 second of debounced calls
 * var source = new EventSource('/stream');
 * jQuery(source).on('message', _.debounce(batchLog, 250, {
 *   'maxWait': 1000
 * }));
 *
 * // cancel a debounced call
 * var todoChanges = _.debounce(batchLog, 1000);
 * Object.observe(models.todo, todoChanges);
 *
 * Object.observe(models, function(changes) {
 *   if (_.find(changes, { 'user': 'todo', 'type': 'delete'})) {
 *     todoChanges.cancel();
 *   }
 * }, ['delete']);
 *
 * // ...at some point `models.todo` is changed
 * models.todo.completed = true;
 *
 * // ...before 1 second has passed `models.todo` is deleted
 * // which cancels the debounced `todoChanges` call
 * delete models.todo;
 */
function debounce(func, wait, options) {
  var args,
      maxTimeoutId,
      result,
      stamp,
      thisArg,
      timeoutId,
      trailingCall,
      lastCalled = 0,
      maxWait = false,
      trailing = true;

  if (typeof func != 'function') {
    throw new TypeError(FUNC_ERROR_TEXT);
  }
  wait = wait < 0 ? 0 : (+wait || 0);
  if (options === true) {
    var leading = true;
    trailing = false;
  } else if (isObject(options)) {
    leading = options.leading;
    maxWait = 'maxWait' in options && nativeMax(+options.maxWait || 0, wait);
    trailing = 'trailing' in options ? options.trailing : trailing;
  }

  function cancel() {
    if (timeoutId) {
      clearTimeout(timeoutId);
    }
    if (maxTimeoutId) {
      clearTimeout(maxTimeoutId);
    }
    maxTimeoutId = timeoutId = trailingCall = undefined;
  }

  function delayed() {
    var remaining = wait - (now() - stamp);
    if (remaining <= 0 || remaining > wait) {
      if (maxTimeoutId) {
        clearTimeout(maxTimeoutId);
      }
      var isCalled = trailingCall;
      maxTimeoutId = timeoutId = trailingCall = undefined;
      if (isCalled) {
        lastCalled = now();
        result = func.apply(thisArg, args);
        if (!timeoutId && !maxTimeoutId) {
          args = thisArg = null;
        }
      }
    } else {
      timeoutId = setTimeout(delayed, remaining);
    }
  }

  function maxDelayed() {
    if (timeoutId) {
      clearTimeout(timeoutId);
    }
    maxTimeoutId = timeoutId = trailingCall = undefined;
    if (trailing || (maxWait !== wait)) {
      lastCalled = now();
      result = func.apply(thisArg, args);
      if (!timeoutId && !maxTimeoutId) {
        args = thisArg = null;
      }
    }
  }

  function debounced() {
    args = arguments;
    stamp = now();
    thisArg = this;
    trailingCall = trailing && (timeoutId || !leading);

    if (maxWait === false) {
      var leadingCall = leading && !timeoutId;
    } else {
      if (!maxTimeoutId && !leading) {
        lastCalled = stamp;
      }
      var remaining = maxWait - (stamp - lastCalled),
          isCalled = remaining <= 0 || remaining > maxWait;

      if (isCalled) {
        if (maxTimeoutId) {
          maxTimeoutId = clearTimeout(maxTimeoutId);
        }
        lastCalled = stamp;
        result = func.apply(thisArg, args);
      }
      else if (!maxTimeoutId) {
        maxTimeoutId = setTimeout(maxDelayed, remaining);
      }
    }
    if (isCalled && timeoutId) {
      timeoutId = clearTimeout(timeoutId);
    }
    else if (!timeoutId && wait !== maxWait) {
      timeoutId = setTimeout(delayed, wait);
    }
    if (leadingCall) {
      isCalled = true;
      result = func.apply(thisArg, args);
    }
    if (isCalled && !timeoutId && !maxTimeoutId) {
      args = thisArg = null;
    }
    return result;
  }
  debounced.cancel = cancel;
  return debounced;
}

module.exports = debounce;

},{"../date/now":16,"../lang/isObject":78}],18:[function(require,module,exports){
var MapCache = require('../internal/MapCache');

/** Used as the `TypeError` message for "Functions" methods. */
var FUNC_ERROR_TEXT = 'Expected a function';

/**
 * Creates a function that memoizes the result of `func`. If `resolver` is
 * provided it determines the cache key for storing the result based on the
 * arguments provided to the memoized function. By default, the first argument
 * provided to the memoized function is coerced to a string and used as the
 * cache key. The `func` is invoked with the `this` binding of the memoized
 * function.
 *
 * **Note:** The cache is exposed as the `cache` property on the memoized
 * function. Its creation may be customized by replacing the `_.memoize.Cache`
 * constructor with one whose instances implement the [`Map`](https://people.mozilla.org/~jorendorff/es6-draft.html#sec-properties-of-the-map-prototype-object)
 * method interface of `get`, `has`, and `set`.
 *
 * @static
 * @memberOf _
 * @category Function
 * @param {Function} func The function to have its output memoized.
 * @param {Function} [resolver] The function to resolve the cache key.
 * @returns {Function} Returns the new memoizing function.
 * @example
 *
 * var upperCase = _.memoize(function(string) {
 *   return string.toUpperCase();
 * });
 *
 * upperCase('fred');
 * // => 'FRED'
 *
 * // modifying the result cache
 * upperCase.cache.set('fred', 'BARNEY');
 * upperCase('fred');
 * // => 'BARNEY'
 *
 * // replacing `_.memoize.Cache`
 * var object = { 'user': 'fred' };
 * var other = { 'user': 'barney' };
 * var identity = _.memoize(_.identity);
 *
 * identity(object);
 * // => { 'user': 'fred' }
 * identity(other);
 * // => { 'user': 'fred' }
 *
 * _.memoize.Cache = WeakMap;
 * var identity = _.memoize(_.identity);
 *
 * identity(object);
 * // => { 'user': 'fred' }
 * identity(other);
 * // => { 'user': 'barney' }
 */
function memoize(func, resolver) {
  if (typeof func != 'function' || (resolver && typeof resolver != 'function')) {
    throw new TypeError(FUNC_ERROR_TEXT);
  }
  var memoized = function() {
    var args = arguments,
        key = resolver ? resolver.apply(this, args) : args[0],
        cache = memoized.cache;

    if (cache.has(key)) {
      return cache.get(key);
    }
    var result = func.apply(this, args);
    memoized.cache = cache.set(key, result);
    return result;
  };
  memoized.cache = new memoize.Cache;
  return memoized;
}

// Assign cache to `_.memoize`.
memoize.Cache = MapCache;

module.exports = memoize;

},{"../internal/MapCache":19}],19:[function(require,module,exports){
var mapDelete = require('./mapDelete'),
    mapGet = require('./mapGet'),
    mapHas = require('./mapHas'),
    mapSet = require('./mapSet');

/**
 * Creates a cache object to store key/value pairs.
 *
 * @private
 * @static
 * @name Cache
 * @memberOf _.memoize
 */
function MapCache() {
  this.__data__ = {};
}

// Add functions to the `Map` cache.
MapCache.prototype['delete'] = mapDelete;
MapCache.prototype.get = mapGet;
MapCache.prototype.has = mapHas;
MapCache.prototype.set = mapSet;

module.exports = MapCache;

},{"./mapDelete":66,"./mapGet":67,"./mapHas":68,"./mapSet":69}],20:[function(require,module,exports){
/**
 * A specialized version of `_.filter` for arrays without support for callback
 * shorthands and `this` binding.
 *
 * @private
 * @param {Array} array The array to iterate over.
 * @param {Function} predicate The function invoked per iteration.
 * @returns {Array} Returns the new filtered array.
 */
function arrayFilter(array, predicate) {
  var index = -1,
      length = array.length,
      resIndex = -1,
      result = [];

  while (++index < length) {
    var value = array[index];
    if (predicate(value, index, array)) {
      result[++resIndex] = value;
    }
  }
  return result;
}

module.exports = arrayFilter;

},{}],21:[function(require,module,exports){
/**
 * A specialized version of `_.map` for arrays without support for callback
 * shorthands and `this` binding.
 *
 * @private
 * @param {Array} array The array to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns the new mapped array.
 */
function arrayMap(array, iteratee) {
  var index = -1,
      length = array.length,
      result = Array(length);

  while (++index < length) {
    result[index] = iteratee(array[index], index, array);
  }
  return result;
}

module.exports = arrayMap;

},{}],22:[function(require,module,exports){
/**
 * A specialized version of `_.reduce` for arrays without support for callback
 * shorthands and `this` binding.
 *
 * @private
 * @param {Array} array The array to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @param {*} [accumulator] The initial value.
 * @param {boolean} [initFromArray] Specify using the first element of `array`
 *  as the initial value.
 * @returns {*} Returns the accumulated value.
 */
function arrayReduce(array, iteratee, accumulator, initFromArray) {
  var index = -1,
      length = array.length;

  if (initFromArray && length) {
    accumulator = array[++index];
  }
  while (++index < length) {
    accumulator = iteratee(accumulator, array[index], index, array);
  }
  return accumulator;
}

module.exports = arrayReduce;

},{}],23:[function(require,module,exports){
/**
 * A specialized version of `_.some` for arrays without support for callback
 * shorthands and `this` binding.
 *
 * @private
 * @param {Array} array The array to iterate over.
 * @param {Function} predicate The function invoked per iteration.
 * @returns {boolean} Returns `true` if any element passes the predicate check,
 *  else `false`.
 */
function arraySome(array, predicate) {
  var index = -1,
      length = array.length;

  while (++index < length) {
    if (predicate(array[index], index, array)) {
      return true;
    }
  }
  return false;
}

module.exports = arraySome;

},{}],24:[function(require,module,exports){
var baseMatches = require('./baseMatches'),
    baseMatchesProperty = require('./baseMatchesProperty'),
    bindCallback = require('./bindCallback'),
    identity = require('../utility/identity'),
    property = require('../utility/property');

/**
 * The base implementation of `_.callback` which supports specifying the
 * number of arguments to provide to `func`.
 *
 * @private
 * @param {*} [func=_.identity] The value to convert to a callback.
 * @param {*} [thisArg] The `this` binding of `func`.
 * @param {number} [argCount] The number of arguments to provide to `func`.
 * @returns {Function} Returns the callback.
 */
function baseCallback(func, thisArg, argCount) {
  var type = typeof func;
  if (type == 'function') {
    return thisArg === undefined
      ? func
      : bindCallback(func, thisArg, argCount);
  }
  if (func == null) {
    return identity;
  }
  if (type == 'object') {
    return baseMatches(func);
  }
  return thisArg === undefined
    ? property(func)
    : baseMatchesProperty(func, thisArg);
}

module.exports = baseCallback;

},{"../utility/identity":86,"../utility/property":87,"./baseMatches":36,"./baseMatchesProperty":37,"./bindCallback":44}],25:[function(require,module,exports){
var baseForOwn = require('./baseForOwn'),
    createBaseEach = require('./createBaseEach');

/**
 * The base implementation of `_.forEach` without support for callback
 * shorthands and `this` binding.
 *
 * @private
 * @param {Array|Object|string} collection The collection to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array|Object|string} Returns `collection`.
 */
var baseEach = createBaseEach(baseForOwn);

module.exports = baseEach;

},{"./baseForOwn":30,"./createBaseEach":47}],26:[function(require,module,exports){
var baseEach = require('./baseEach');

/**
 * The base implementation of `_.filter` without support for callback
 * shorthands and `this` binding.
 *
 * @private
 * @param {Array|Object|string} collection The collection to iterate over.
 * @param {Function} predicate The function invoked per iteration.
 * @returns {Array} Returns the new filtered array.
 */
function baseFilter(collection, predicate) {
  var result = [];
  baseEach(collection, function(value, index, collection) {
    if (predicate(value, index, collection)) {
      result.push(value);
    }
  });
  return result;
}

module.exports = baseFilter;

},{"./baseEach":25}],27:[function(require,module,exports){
/**
 * The base implementation of `_.find`, `_.findLast`, `_.findKey`, and `_.findLastKey`,
 * without support for callback shorthands and `this` binding, which iterates
 * over `collection` using the provided `eachFunc`.
 *
 * @private
 * @param {Array|Object|string} collection The collection to search.
 * @param {Function} predicate The function invoked per iteration.
 * @param {Function} eachFunc The function to iterate over `collection`.
 * @param {boolean} [retKey] Specify returning the key of the found element
 *  instead of the element itself.
 * @returns {*} Returns the found element or its key, else `undefined`.
 */
function baseFind(collection, predicate, eachFunc, retKey) {
  var result;
  eachFunc(collection, function(value, key, collection) {
    if (predicate(value, key, collection)) {
      result = retKey ? key : value;
      return false;
    }
  });
  return result;
}

module.exports = baseFind;

},{}],28:[function(require,module,exports){
/**
 * The base implementation of `_.findIndex` and `_.findLastIndex` without
 * support for callback shorthands and `this` binding.
 *
 * @private
 * @param {Array} array The array to search.
 * @param {Function} predicate The function invoked per iteration.
 * @param {boolean} [fromRight] Specify iterating from right to left.
 * @returns {number} Returns the index of the matched value, else `-1`.
 */
function baseFindIndex(array, predicate, fromRight) {
  var length = array.length,
      index = fromRight ? length : -1;

  while ((fromRight ? index-- : ++index < length)) {
    if (predicate(array[index], index, array)) {
      return index;
    }
  }
  return -1;
}

module.exports = baseFindIndex;

},{}],29:[function(require,module,exports){
var createBaseFor = require('./createBaseFor');

/**
 * The base implementation of `baseForIn` and `baseForOwn` which iterates
 * over `object` properties returned by `keysFunc` invoking `iteratee` for
 * each property. Iteratee functions may exit iteration early by explicitly
 * returning `false`.
 *
 * @private
 * @param {Object} object The object to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @param {Function} keysFunc The function to get the keys of `object`.
 * @returns {Object} Returns `object`.
 */
var baseFor = createBaseFor();

module.exports = baseFor;

},{"./createBaseFor":48}],30:[function(require,module,exports){
var baseFor = require('./baseFor'),
    keys = require('../object/keys');

/**
 * The base implementation of `_.forOwn` without support for callback
 * shorthands and `this` binding.
 *
 * @private
 * @param {Object} object The object to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Object} Returns `object`.
 */
function baseForOwn(object, iteratee) {
  return baseFor(object, iteratee, keys);
}

module.exports = baseForOwn;

},{"../object/keys":80,"./baseFor":29}],31:[function(require,module,exports){
var toObject = require('./toObject');

/**
 * The base implementation of `get` without support for string paths
 * and default values.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {Array} path The path of the property to get.
 * @param {string} [pathKey] The key representation of path.
 * @returns {*} Returns the resolved value.
 */
function baseGet(object, path, pathKey) {
  if (object == null) {
    return;
  }
  if (pathKey !== undefined && pathKey in toObject(object)) {
    path = [pathKey];
  }
  var index = 0,
      length = path.length;

  while (object != null && index < length) {
    object = object[path[index++]];
  }
  return (index && index == length) ? object : undefined;
}

module.exports = baseGet;

},{"./toObject":71}],32:[function(require,module,exports){
var baseIsEqualDeep = require('./baseIsEqualDeep'),
    isObject = require('../lang/isObject'),
    isObjectLike = require('./isObjectLike');

/**
 * The base implementation of `_.isEqual` without support for `this` binding
 * `customizer` functions.
 *
 * @private
 * @param {*} value The value to compare.
 * @param {*} other The other value to compare.
 * @param {Function} [customizer] The function to customize comparing values.
 * @param {boolean} [isLoose] Specify performing partial comparisons.
 * @param {Array} [stackA] Tracks traversed `value` objects.
 * @param {Array} [stackB] Tracks traversed `other` objects.
 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
 */
function baseIsEqual(value, other, customizer, isLoose, stackA, stackB) {
  if (value === other) {
    return true;
  }
  if (value == null || other == null || (!isObject(value) && !isObjectLike(other))) {
    return value !== value && other !== other;
  }
  return baseIsEqualDeep(value, other, baseIsEqual, customizer, isLoose, stackA, stackB);
}

module.exports = baseIsEqual;

},{"../lang/isObject":78,"./baseIsEqualDeep":33,"./isObjectLike":63}],33:[function(require,module,exports){
var equalArrays = require('./equalArrays'),
    equalByTag = require('./equalByTag'),
    equalObjects = require('./equalObjects'),
    isArray = require('../lang/isArray'),
    isTypedArray = require('../lang/isTypedArray');

/** `Object#toString` result references. */
var argsTag = '[object Arguments]',
    arrayTag = '[object Array]',
    objectTag = '[object Object]';

/** Used for native method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Used to resolve the [`toStringTag`](https://people.mozilla.org/~jorendorff/es6-draft.html#sec-object.prototype.tostring)
 * of values.
 */
var objToString = objectProto.toString;

/**
 * A specialized version of `baseIsEqual` for arrays and objects which performs
 * deep comparisons and tracks traversed objects enabling objects with circular
 * references to be compared.
 *
 * @private
 * @param {Object} object The object to compare.
 * @param {Object} other The other object to compare.
 * @param {Function} equalFunc The function to determine equivalents of values.
 * @param {Function} [customizer] The function to customize comparing objects.
 * @param {boolean} [isLoose] Specify performing partial comparisons.
 * @param {Array} [stackA=[]] Tracks traversed `value` objects.
 * @param {Array} [stackB=[]] Tracks traversed `other` objects.
 * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
 */
function baseIsEqualDeep(object, other, equalFunc, customizer, isLoose, stackA, stackB) {
  var objIsArr = isArray(object),
      othIsArr = isArray(other),
      objTag = arrayTag,
      othTag = arrayTag;

  if (!objIsArr) {
    objTag = objToString.call(object);
    if (objTag == argsTag) {
      objTag = objectTag;
    } else if (objTag != objectTag) {
      objIsArr = isTypedArray(object);
    }
  }
  if (!othIsArr) {
    othTag = objToString.call(other);
    if (othTag == argsTag) {
      othTag = objectTag;
    } else if (othTag != objectTag) {
      othIsArr = isTypedArray(other);
    }
  }
  var objIsObj = objTag == objectTag,
      othIsObj = othTag == objectTag,
      isSameTag = objTag == othTag;

  if (isSameTag && !(objIsArr || objIsObj)) {
    return equalByTag(object, other, objTag);
  }
  if (!isLoose) {
    var objIsWrapped = objIsObj && hasOwnProperty.call(object, '__wrapped__'),
        othIsWrapped = othIsObj && hasOwnProperty.call(other, '__wrapped__');

    if (objIsWrapped || othIsWrapped) {
      return equalFunc(objIsWrapped ? object.value() : object, othIsWrapped ? other.value() : other, customizer, isLoose, stackA, stackB);
    }
  }
  if (!isSameTag) {
    return false;
  }
  // Assume cyclic values are equal.
  // For more information on detecting circular references see https://es5.github.io/#JO.
  stackA || (stackA = []);
  stackB || (stackB = []);

  var length = stackA.length;
  while (length--) {
    if (stackA[length] == object) {
      return stackB[length] == other;
    }
  }
  // Add `object` and `other` to the stack of traversed objects.
  stackA.push(object);
  stackB.push(other);

  var result = (objIsArr ? equalArrays : equalObjects)(object, other, equalFunc, customizer, isLoose, stackA, stackB);

  stackA.pop();
  stackB.pop();

  return result;
}

module.exports = baseIsEqualDeep;

},{"../lang/isArray":76,"../lang/isTypedArray":79,"./equalArrays":52,"./equalByTag":53,"./equalObjects":54}],34:[function(require,module,exports){
var baseIsEqual = require('./baseIsEqual'),
    toObject = require('./toObject');

/**
 * The base implementation of `_.isMatch` without support for callback
 * shorthands and `this` binding.
 *
 * @private
 * @param {Object} object The object to inspect.
 * @param {Array} matchData The propery names, values, and compare flags to match.
 * @param {Function} [customizer] The function to customize comparing objects.
 * @returns {boolean} Returns `true` if `object` is a match, else `false`.
 */
function baseIsMatch(object, matchData, customizer) {
  var index = matchData.length,
      length = index,
      noCustomizer = !customizer;

  if (object == null) {
    return !length;
  }
  object = toObject(object);
  while (index--) {
    var data = matchData[index];
    if ((noCustomizer && data[2])
          ? data[1] !== object[data[0]]
          : !(data[0] in object)
        ) {
      return false;
    }
  }
  while (++index < length) {
    data = matchData[index];
    var key = data[0],
        objValue = object[key],
        srcValue = data[1];

    if (noCustomizer && data[2]) {
      if (objValue === undefined && !(key in object)) {
        return false;
      }
    } else {
      var result = customizer ? customizer(objValue, srcValue, key) : undefined;
      if (!(result === undefined ? baseIsEqual(srcValue, objValue, customizer, true) : result)) {
        return false;
      }
    }
  }
  return true;
}

module.exports = baseIsMatch;

},{"./baseIsEqual":32,"./toObject":71}],35:[function(require,module,exports){
var baseEach = require('./baseEach'),
    isArrayLike = require('./isArrayLike');

/**
 * The base implementation of `_.map` without support for callback shorthands
 * and `this` binding.
 *
 * @private
 * @param {Array|Object|string} collection The collection to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns the new mapped array.
 */
function baseMap(collection, iteratee) {
  var index = -1,
      result = isArrayLike(collection) ? Array(collection.length) : [];

  baseEach(collection, function(value, key, collection) {
    result[++index] = iteratee(value, key, collection);
  });
  return result;
}

module.exports = baseMap;

},{"./baseEach":25,"./isArrayLike":58}],36:[function(require,module,exports){
var baseIsMatch = require('./baseIsMatch'),
    getMatchData = require('./getMatchData'),
    toObject = require('./toObject');

/**
 * The base implementation of `_.matches` which does not clone `source`.
 *
 * @private
 * @param {Object} source The object of property values to match.
 * @returns {Function} Returns the new function.
 */
function baseMatches(source) {
  var matchData = getMatchData(source);
  if (matchData.length == 1 && matchData[0][2]) {
    var key = matchData[0][0],
        value = matchData[0][1];

    return function(object) {
      if (object == null) {
        return false;
      }
      return object[key] === value && (value !== undefined || (key in toObject(object)));
    };
  }
  return function(object) {
    return baseIsMatch(object, matchData);
  };
}

module.exports = baseMatches;

},{"./baseIsMatch":34,"./getMatchData":56,"./toObject":71}],37:[function(require,module,exports){
var baseGet = require('./baseGet'),
    baseIsEqual = require('./baseIsEqual'),
    baseSlice = require('./baseSlice'),
    isArray = require('../lang/isArray'),
    isKey = require('./isKey'),
    isStrictComparable = require('./isStrictComparable'),
    last = require('../array/last'),
    toObject = require('./toObject'),
    toPath = require('./toPath');

/**
 * The base implementation of `_.matchesProperty` which does not clone `srcValue`.
 *
 * @private
 * @param {string} path The path of the property to get.
 * @param {*} srcValue The value to compare.
 * @returns {Function} Returns the new function.
 */
function baseMatchesProperty(path, srcValue) {
  var isArr = isArray(path),
      isCommon = isKey(path) && isStrictComparable(srcValue),
      pathKey = (path + '');

  path = toPath(path);
  return function(object) {
    if (object == null) {
      return false;
    }
    var key = pathKey;
    object = toObject(object);
    if ((isArr || !isCommon) && !(key in object)) {
      object = path.length == 1 ? object : baseGet(object, baseSlice(path, 0, -1));
      if (object == null) {
        return false;
      }
      key = last(path);
      object = toObject(object);
    }
    return object[key] === srcValue
      ? (srcValue !== undefined || (key in object))
      : baseIsEqual(srcValue, object[key], undefined, true);
  };
}

module.exports = baseMatchesProperty;

},{"../array/last":7,"../lang/isArray":76,"./baseGet":31,"./baseIsEqual":32,"./baseSlice":41,"./isKey":61,"./isStrictComparable":65,"./toObject":71,"./toPath":72}],38:[function(require,module,exports){
/**
 * The base implementation of `_.property` without support for deep paths.
 *
 * @private
 * @param {string} key The key of the property to get.
 * @returns {Function} Returns the new function.
 */
function baseProperty(key) {
  return function(object) {
    return object == null ? undefined : object[key];
  };
}

module.exports = baseProperty;

},{}],39:[function(require,module,exports){
var baseGet = require('./baseGet'),
    toPath = require('./toPath');

/**
 * A specialized version of `baseProperty` which supports deep paths.
 *
 * @private
 * @param {Array|string} path The path of the property to get.
 * @returns {Function} Returns the new function.
 */
function basePropertyDeep(path) {
  var pathKey = (path + '');
  path = toPath(path);
  return function(object) {
    return baseGet(object, path, pathKey);
  };
}

module.exports = basePropertyDeep;

},{"./baseGet":31,"./toPath":72}],40:[function(require,module,exports){
/**
 * The base implementation of `_.reduce` and `_.reduceRight` without support
 * for callback shorthands and `this` binding, which iterates over `collection`
 * using the provided `eachFunc`.
 *
 * @private
 * @param {Array|Object|string} collection The collection to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @param {*} accumulator The initial value.
 * @param {boolean} initFromCollection Specify using the first or last element
 *  of `collection` as the initial value.
 * @param {Function} eachFunc The function to iterate over `collection`.
 * @returns {*} Returns the accumulated value.
 */
function baseReduce(collection, iteratee, accumulator, initFromCollection, eachFunc) {
  eachFunc(collection, function(value, index, collection) {
    accumulator = initFromCollection
      ? (initFromCollection = false, value)
      : iteratee(accumulator, value, index, collection);
  });
  return accumulator;
}

module.exports = baseReduce;

},{}],41:[function(require,module,exports){
/**
 * The base implementation of `_.slice` without an iteratee call guard.
 *
 * @private
 * @param {Array} array The array to slice.
 * @param {number} [start=0] The start position.
 * @param {number} [end=array.length] The end position.
 * @returns {Array} Returns the slice of `array`.
 */
function baseSlice(array, start, end) {
  var index = -1,
      length = array.length;

  start = start == null ? 0 : (+start || 0);
  if (start < 0) {
    start = -start > length ? 0 : (length + start);
  }
  end = (end === undefined || end > length) ? length : (+end || 0);
  if (end < 0) {
    end += length;
  }
  length = start > end ? 0 : ((end - start) >>> 0);
  start >>>= 0;

  var result = Array(length);
  while (++index < length) {
    result[index] = array[index + start];
  }
  return result;
}

module.exports = baseSlice;

},{}],42:[function(require,module,exports){
var baseEach = require('./baseEach');

/**
 * The base implementation of `_.some` without support for callback shorthands
 * and `this` binding.
 *
 * @private
 * @param {Array|Object|string} collection The collection to iterate over.
 * @param {Function} predicate The function invoked per iteration.
 * @returns {boolean} Returns `true` if any element passes the predicate check,
 *  else `false`.
 */
function baseSome(collection, predicate) {
  var result;

  baseEach(collection, function(value, index, collection) {
    result = predicate(value, index, collection);
    return !result;
  });
  return !!result;
}

module.exports = baseSome;

},{"./baseEach":25}],43:[function(require,module,exports){
/**
 * Converts `value` to a string if it's not one. An empty string is returned
 * for `null` or `undefined` values.
 *
 * @private
 * @param {*} value The value to process.
 * @returns {string} Returns the string.
 */
function baseToString(value) {
  if (typeof value == 'string') {
    return value;
  }
  return value == null ? '' : (value + '');
}

module.exports = baseToString;

},{}],44:[function(require,module,exports){
var identity = require('../utility/identity');

/**
 * A specialized version of `baseCallback` which only supports `this` binding
 * and specifying the number of arguments to provide to `func`.
 *
 * @private
 * @param {Function} func The function to bind.
 * @param {*} thisArg The `this` binding of `func`.
 * @param {number} [argCount] The number of arguments to provide to `func`.
 * @returns {Function} Returns the callback.
 */
function bindCallback(func, thisArg, argCount) {
  if (typeof func != 'function') {
    return identity;
  }
  if (thisArg === undefined) {
    return func;
  }
  switch (argCount) {
    case 1: return function(value) {
      return func.call(thisArg, value);
    };
    case 3: return function(value, index, collection) {
      return func.call(thisArg, value, index, collection);
    };
    case 4: return function(accumulator, value, index, collection) {
      return func.call(thisArg, accumulator, value, index, collection);
    };
    case 5: return function(value, other, key, object, source) {
      return func.call(thisArg, value, other, key, object, source);
    };
  }
  return function() {
    return func.apply(thisArg, arguments);
  };
}

module.exports = bindCallback;

},{"../utility/identity":86}],45:[function(require,module,exports){
/**
 * Used by `_.trim` and `_.trimLeft` to get the index of the first character
 * of `string` that is not found in `chars`.
 *
 * @private
 * @param {string} string The string to inspect.
 * @param {string} chars The characters to find.
 * @returns {number} Returns the index of the first character not found in `chars`.
 */
function charsLeftIndex(string, chars) {
  var index = -1,
      length = string.length;

  while (++index < length && chars.indexOf(string.charAt(index)) > -1) {}
  return index;
}

module.exports = charsLeftIndex;

},{}],46:[function(require,module,exports){
/**
 * Used by `_.trim` and `_.trimRight` to get the index of the last character
 * of `string` that is not found in `chars`.
 *
 * @private
 * @param {string} string The string to inspect.
 * @param {string} chars The characters to find.
 * @returns {number} Returns the index of the last character not found in `chars`.
 */
function charsRightIndex(string, chars) {
  var index = string.length;

  while (index-- && chars.indexOf(string.charAt(index)) > -1) {}
  return index;
}

module.exports = charsRightIndex;

},{}],47:[function(require,module,exports){
var getLength = require('./getLength'),
    isLength = require('./isLength'),
    toObject = require('./toObject');

/**
 * Creates a `baseEach` or `baseEachRight` function.
 *
 * @private
 * @param {Function} eachFunc The function to iterate over a collection.
 * @param {boolean} [fromRight] Specify iterating from right to left.
 * @returns {Function} Returns the new base function.
 */
function createBaseEach(eachFunc, fromRight) {
  return function(collection, iteratee) {
    var length = collection ? getLength(collection) : 0;
    if (!isLength(length)) {
      return eachFunc(collection, iteratee);
    }
    var index = fromRight ? length : -1,
        iterable = toObject(collection);

    while ((fromRight ? index-- : ++index < length)) {
      if (iteratee(iterable[index], index, iterable) === false) {
        break;
      }
    }
    return collection;
  };
}

module.exports = createBaseEach;

},{"./getLength":55,"./isLength":62,"./toObject":71}],48:[function(require,module,exports){
var toObject = require('./toObject');

/**
 * Creates a base function for `_.forIn` or `_.forInRight`.
 *
 * @private
 * @param {boolean} [fromRight] Specify iterating from right to left.
 * @returns {Function} Returns the new base function.
 */
function createBaseFor(fromRight) {
  return function(object, iteratee, keysFunc) {
    var iterable = toObject(object),
        props = keysFunc(object),
        length = props.length,
        index = fromRight ? length : -1;

    while ((fromRight ? index-- : ++index < length)) {
      var key = props[index];
      if (iteratee(iterable[key], key, iterable) === false) {
        break;
      }
    }
    return object;
  };
}

module.exports = createBaseFor;

},{"./toObject":71}],49:[function(require,module,exports){
var baseCallback = require('./baseCallback'),
    baseFind = require('./baseFind'),
    baseFindIndex = require('./baseFindIndex'),
    isArray = require('../lang/isArray');

/**
 * Creates a `_.find` or `_.findLast` function.
 *
 * @private
 * @param {Function} eachFunc The function to iterate over a collection.
 * @param {boolean} [fromRight] Specify iterating from right to left.
 * @returns {Function} Returns the new find function.
 */
function createFind(eachFunc, fromRight) {
  return function(collection, predicate, thisArg) {
    predicate = baseCallback(predicate, thisArg, 3);
    if (isArray(collection)) {
      var index = baseFindIndex(collection, predicate, fromRight);
      return index > -1 ? collection[index] : undefined;
    }
    return baseFind(collection, predicate, eachFunc);
  };
}

module.exports = createFind;

},{"../lang/isArray":76,"./baseCallback":24,"./baseFind":27,"./baseFindIndex":28}],50:[function(require,module,exports){
var baseCallback = require('./baseCallback'),
    baseFindIndex = require('./baseFindIndex');

/**
 * Creates a `_.findIndex` or `_.findLastIndex` function.
 *
 * @private
 * @param {boolean} [fromRight] Specify iterating from right to left.
 * @returns {Function} Returns the new find function.
 */
function createFindIndex(fromRight) {
  return function(array, predicate, thisArg) {
    if (!(array && array.length)) {
      return -1;
    }
    predicate = baseCallback(predicate, thisArg, 3);
    return baseFindIndex(array, predicate, fromRight);
  };
}

module.exports = createFindIndex;

},{"./baseCallback":24,"./baseFindIndex":28}],51:[function(require,module,exports){
var baseCallback = require('./baseCallback'),
    baseReduce = require('./baseReduce'),
    isArray = require('../lang/isArray');

/**
 * Creates a function for `_.reduce` or `_.reduceRight`.
 *
 * @private
 * @param {Function} arrayFunc The function to iterate over an array.
 * @param {Function} eachFunc The function to iterate over a collection.
 * @returns {Function} Returns the new each function.
 */
function createReduce(arrayFunc, eachFunc) {
  return function(collection, iteratee, accumulator, thisArg) {
    var initFromArray = arguments.length < 3;
    return (typeof iteratee == 'function' && thisArg === undefined && isArray(collection))
      ? arrayFunc(collection, iteratee, accumulator, initFromArray)
      : baseReduce(collection, baseCallback(iteratee, thisArg, 4), accumulator, initFromArray, eachFunc);
  };
}

module.exports = createReduce;

},{"../lang/isArray":76,"./baseCallback":24,"./baseReduce":40}],52:[function(require,module,exports){
var arraySome = require('./arraySome');

/**
 * A specialized version of `baseIsEqualDeep` for arrays with support for
 * partial deep comparisons.
 *
 * @private
 * @param {Array} array The array to compare.
 * @param {Array} other The other array to compare.
 * @param {Function} equalFunc The function to determine equivalents of values.
 * @param {Function} [customizer] The function to customize comparing arrays.
 * @param {boolean} [isLoose] Specify performing partial comparisons.
 * @param {Array} [stackA] Tracks traversed `value` objects.
 * @param {Array} [stackB] Tracks traversed `other` objects.
 * @returns {boolean} Returns `true` if the arrays are equivalent, else `false`.
 */
function equalArrays(array, other, equalFunc, customizer, isLoose, stackA, stackB) {
  var index = -1,
      arrLength = array.length,
      othLength = other.length;

  if (arrLength != othLength && !(isLoose && othLength > arrLength)) {
    return false;
  }
  // Ignore non-index properties.
  while (++index < arrLength) {
    var arrValue = array[index],
        othValue = other[index],
        result = customizer ? customizer(isLoose ? othValue : arrValue, isLoose ? arrValue : othValue, index) : undefined;

    if (result !== undefined) {
      if (result) {
        continue;
      }
      return false;
    }
    // Recursively compare arrays (susceptible to call stack limits).
    if (isLoose) {
      if (!arraySome(other, function(othValue) {
            return arrValue === othValue || equalFunc(arrValue, othValue, customizer, isLoose, stackA, stackB);
          })) {
        return false;
      }
    } else if (!(arrValue === othValue || equalFunc(arrValue, othValue, customizer, isLoose, stackA, stackB))) {
      return false;
    }
  }
  return true;
}

module.exports = equalArrays;

},{"./arraySome":23}],53:[function(require,module,exports){
/** `Object#toString` result references. */
var boolTag = '[object Boolean]',
    dateTag = '[object Date]',
    errorTag = '[object Error]',
    numberTag = '[object Number]',
    regexpTag = '[object RegExp]',
    stringTag = '[object String]';

/**
 * A specialized version of `baseIsEqualDeep` for comparing objects of
 * the same `toStringTag`.
 *
 * **Note:** This function only supports comparing values with tags of
 * `Boolean`, `Date`, `Error`, `Number`, `RegExp`, or `String`.
 *
 * @private
 * @param {Object} value The object to compare.
 * @param {Object} other The other object to compare.
 * @param {string} tag The `toStringTag` of the objects to compare.
 * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
 */
function equalByTag(object, other, tag) {
  switch (tag) {
    case boolTag:
    case dateTag:
      // Coerce dates and booleans to numbers, dates to milliseconds and booleans
      // to `1` or `0` treating invalid dates coerced to `NaN` as not equal.
      return +object == +other;

    case errorTag:
      return object.name == other.name && object.message == other.message;

    case numberTag:
      // Treat `NaN` vs. `NaN` as equal.
      return (object != +object)
        ? other != +other
        : object == +other;

    case regexpTag:
    case stringTag:
      // Coerce regexes to strings and treat strings primitives and string
      // objects as equal. See https://es5.github.io/#x15.10.6.4 for more details.
      return object == (other + '');
  }
  return false;
}

module.exports = equalByTag;

},{}],54:[function(require,module,exports){
var keys = require('../object/keys');

/** Used for native method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * A specialized version of `baseIsEqualDeep` for objects with support for
 * partial deep comparisons.
 *
 * @private
 * @param {Object} object The object to compare.
 * @param {Object} other The other object to compare.
 * @param {Function} equalFunc The function to determine equivalents of values.
 * @param {Function} [customizer] The function to customize comparing values.
 * @param {boolean} [isLoose] Specify performing partial comparisons.
 * @param {Array} [stackA] Tracks traversed `value` objects.
 * @param {Array} [stackB] Tracks traversed `other` objects.
 * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
 */
function equalObjects(object, other, equalFunc, customizer, isLoose, stackA, stackB) {
  var objProps = keys(object),
      objLength = objProps.length,
      othProps = keys(other),
      othLength = othProps.length;

  if (objLength != othLength && !isLoose) {
    return false;
  }
  var index = objLength;
  while (index--) {
    var key = objProps[index];
    if (!(isLoose ? key in other : hasOwnProperty.call(other, key))) {
      return false;
    }
  }
  var skipCtor = isLoose;
  while (++index < objLength) {
    key = objProps[index];
    var objValue = object[key],
        othValue = other[key],
        result = customizer ? customizer(isLoose ? othValue : objValue, isLoose? objValue : othValue, key) : undefined;

    // Recursively compare objects (susceptible to call stack limits).
    if (!(result === undefined ? equalFunc(objValue, othValue, customizer, isLoose, stackA, stackB) : result)) {
      return false;
    }
    skipCtor || (skipCtor = key == 'constructor');
  }
  if (!skipCtor) {
    var objCtor = object.constructor,
        othCtor = other.constructor;

    // Non `Object` object instances with different constructors are not equal.
    if (objCtor != othCtor &&
        ('constructor' in object && 'constructor' in other) &&
        !(typeof objCtor == 'function' && objCtor instanceof objCtor &&
          typeof othCtor == 'function' && othCtor instanceof othCtor)) {
      return false;
    }
  }
  return true;
}

module.exports = equalObjects;

},{"../object/keys":80}],55:[function(require,module,exports){
var baseProperty = require('./baseProperty');

/**
 * Gets the "length" property value of `object`.
 *
 * **Note:** This function is used to avoid a [JIT bug](https://bugs.webkit.org/show_bug.cgi?id=142792)
 * that affects Safari on at least iOS 8.1-8.3 ARM64.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {*} Returns the "length" value.
 */
var getLength = baseProperty('length');

module.exports = getLength;

},{"./baseProperty":38}],56:[function(require,module,exports){
var isStrictComparable = require('./isStrictComparable'),
    pairs = require('../object/pairs');

/**
 * Gets the propery names, values, and compare flags of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the match data of `object`.
 */
function getMatchData(object) {
  var result = pairs(object),
      length = result.length;

  while (length--) {
    result[length][2] = isStrictComparable(result[length][1]);
  }
  return result;
}

module.exports = getMatchData;

},{"../object/pairs":82,"./isStrictComparable":65}],57:[function(require,module,exports){
var isNative = require('../lang/isNative');

/**
 * Gets the native function at `key` of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {string} key The key of the method to get.
 * @returns {*} Returns the function if it's native, else `undefined`.
 */
function getNative(object, key) {
  var value = object == null ? undefined : object[key];
  return isNative(value) ? value : undefined;
}

module.exports = getNative;

},{"../lang/isNative":77}],58:[function(require,module,exports){
var getLength = require('./getLength'),
    isLength = require('./isLength');

/**
 * Checks if `value` is array-like.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is array-like, else `false`.
 */
function isArrayLike(value) {
  return value != null && isLength(getLength(value));
}

module.exports = isArrayLike;

},{"./getLength":55,"./isLength":62}],59:[function(require,module,exports){
/** Used to detect unsigned integer values. */
var reIsUint = /^\d+$/;

/**
 * Used as the [maximum length](https://people.mozilla.org/~jorendorff/es6-draft.html#sec-number.max_safe_integer)
 * of an array-like value.
 */
var MAX_SAFE_INTEGER = 9007199254740991;

/**
 * Checks if `value` is a valid array-like index.
 *
 * @private
 * @param {*} value The value to check.
 * @param {number} [length=MAX_SAFE_INTEGER] The upper bounds of a valid index.
 * @returns {boolean} Returns `true` if `value` is a valid index, else `false`.
 */
function isIndex(value, length) {
  value = (typeof value == 'number' || reIsUint.test(value)) ? +value : -1;
  length = length == null ? MAX_SAFE_INTEGER : length;
  return value > -1 && value % 1 == 0 && value < length;
}

module.exports = isIndex;

},{}],60:[function(require,module,exports){
var isArrayLike = require('./isArrayLike'),
    isIndex = require('./isIndex'),
    isObject = require('../lang/isObject');

/**
 * Checks if the provided arguments are from an iteratee call.
 *
 * @private
 * @param {*} value The potential iteratee value argument.
 * @param {*} index The potential iteratee index or key argument.
 * @param {*} object The potential iteratee object argument.
 * @returns {boolean} Returns `true` if the arguments are from an iteratee call, else `false`.
 */
function isIterateeCall(value, index, object) {
  if (!isObject(object)) {
    return false;
  }
  var type = typeof index;
  if (type == 'number'
      ? (isArrayLike(object) && isIndex(index, object.length))
      : (type == 'string' && index in object)) {
    var other = object[index];
    return value === value ? (value === other) : (other !== other);
  }
  return false;
}

module.exports = isIterateeCall;

},{"../lang/isObject":78,"./isArrayLike":58,"./isIndex":59}],61:[function(require,module,exports){
var isArray = require('../lang/isArray'),
    toObject = require('./toObject');

/** Used to match property names within property paths. */
var reIsDeepProp = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\n\\]|\\.)*?\1)\]/,
    reIsPlainProp = /^\w*$/;

/**
 * Checks if `value` is a property name and not a property path.
 *
 * @private
 * @param {*} value The value to check.
 * @param {Object} [object] The object to query keys on.
 * @returns {boolean} Returns `true` if `value` is a property name, else `false`.
 */
function isKey(value, object) {
  var type = typeof value;
  if ((type == 'string' && reIsPlainProp.test(value)) || type == 'number') {
    return true;
  }
  if (isArray(value)) {
    return false;
  }
  var result = !reIsDeepProp.test(value);
  return result || (object != null && value in toObject(object));
}

module.exports = isKey;

},{"../lang/isArray":76,"./toObject":71}],62:[function(require,module,exports){
/**
 * Used as the [maximum length](https://people.mozilla.org/~jorendorff/es6-draft.html#sec-number.max_safe_integer)
 * of an array-like value.
 */
var MAX_SAFE_INTEGER = 9007199254740991;

/**
 * Checks if `value` is a valid array-like length.
 *
 * **Note:** This function is based on [`ToLength`](https://people.mozilla.org/~jorendorff/es6-draft.html#sec-tolength).
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a valid length, else `false`.
 */
function isLength(value) {
  return typeof value == 'number' && value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER;
}

module.exports = isLength;

},{}],63:[function(require,module,exports){
/**
 * Checks if `value` is object-like.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
 */
function isObjectLike(value) {
  return !!value && typeof value == 'object';
}

module.exports = isObjectLike;

},{}],64:[function(require,module,exports){
/**
 * Used by `trimmedLeftIndex` and `trimmedRightIndex` to determine if a
 * character code is whitespace.
 *
 * @private
 * @param {number} charCode The character code to inspect.
 * @returns {boolean} Returns `true` if `charCode` is whitespace, else `false`.
 */
function isSpace(charCode) {
  return ((charCode <= 160 && (charCode >= 9 && charCode <= 13) || charCode == 32 || charCode == 160) || charCode == 5760 || charCode == 6158 ||
    (charCode >= 8192 && (charCode <= 8202 || charCode == 8232 || charCode == 8233 || charCode == 8239 || charCode == 8287 || charCode == 12288 || charCode == 65279)));
}

module.exports = isSpace;

},{}],65:[function(require,module,exports){
var isObject = require('../lang/isObject');

/**
 * Checks if `value` is suitable for strict equality comparisons, i.e. `===`.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` if suitable for strict
 *  equality comparisons, else `false`.
 */
function isStrictComparable(value) {
  return value === value && !isObject(value);
}

module.exports = isStrictComparable;

},{"../lang/isObject":78}],66:[function(require,module,exports){
/**
 * Removes `key` and its value from the cache.
 *
 * @private
 * @name delete
 * @memberOf _.memoize.Cache
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed successfully, else `false`.
 */
function mapDelete(key) {
  return this.has(key) && delete this.__data__[key];
}

module.exports = mapDelete;

},{}],67:[function(require,module,exports){
/**
 * Gets the cached value for `key`.
 *
 * @private
 * @name get
 * @memberOf _.memoize.Cache
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the cached value.
 */
function mapGet(key) {
  return key == '__proto__' ? undefined : this.__data__[key];
}

module.exports = mapGet;

},{}],68:[function(require,module,exports){
/** Used for native method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Checks if a cached value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf _.memoize.Cache
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function mapHas(key) {
  return key != '__proto__' && hasOwnProperty.call(this.__data__, key);
}

module.exports = mapHas;

},{}],69:[function(require,module,exports){
/**
 * Sets `value` to `key` of the cache.
 *
 * @private
 * @name set
 * @memberOf _.memoize.Cache
 * @param {string} key The key of the value to cache.
 * @param {*} value The value to cache.
 * @returns {Object} Returns the cache object.
 */
function mapSet(key, value) {
  if (key != '__proto__') {
    this.__data__[key] = value;
  }
  return this;
}

module.exports = mapSet;

},{}],70:[function(require,module,exports){
var isArguments = require('../lang/isArguments'),
    isArray = require('../lang/isArray'),
    isIndex = require('./isIndex'),
    isLength = require('./isLength'),
    keysIn = require('../object/keysIn');

/** Used for native method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * A fallback implementation of `Object.keys` which creates an array of the
 * own enumerable property names of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 */
function shimKeys(object) {
  var props = keysIn(object),
      propsLength = props.length,
      length = propsLength && object.length;

  var allowIndexes = !!length && isLength(length) &&
    (isArray(object) || isArguments(object));

  var index = -1,
      result = [];

  while (++index < propsLength) {
    var key = props[index];
    if ((allowIndexes && isIndex(key, length)) || hasOwnProperty.call(object, key)) {
      result.push(key);
    }
  }
  return result;
}

module.exports = shimKeys;

},{"../lang/isArguments":75,"../lang/isArray":76,"../object/keysIn":81,"./isIndex":59,"./isLength":62}],71:[function(require,module,exports){
var isObject = require('../lang/isObject');

/**
 * Converts `value` to an object if it's not one.
 *
 * @private
 * @param {*} value The value to process.
 * @returns {Object} Returns the object.
 */
function toObject(value) {
  return isObject(value) ? value : Object(value);
}

module.exports = toObject;

},{"../lang/isObject":78}],72:[function(require,module,exports){
var baseToString = require('./baseToString'),
    isArray = require('../lang/isArray');

/** Used to match property names within property paths. */
var rePropName = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\n\\]|\\.)*?)\2)\]/g;

/** Used to match backslashes in property paths. */
var reEscapeChar = /\\(\\)?/g;

/**
 * Converts `value` to property path array if it's not one.
 *
 * @private
 * @param {*} value The value to process.
 * @returns {Array} Returns the property path array.
 */
function toPath(value) {
  if (isArray(value)) {
    return value;
  }
  var result = [];
  baseToString(value).replace(rePropName, function(match, number, quote, string) {
    result.push(quote ? string.replace(reEscapeChar, '$1') : (number || match));
  });
  return result;
}

module.exports = toPath;

},{"../lang/isArray":76,"./baseToString":43}],73:[function(require,module,exports){
var isSpace = require('./isSpace');

/**
 * Used by `_.trim` and `_.trimLeft` to get the index of the first non-whitespace
 * character of `string`.
 *
 * @private
 * @param {string} string The string to inspect.
 * @returns {number} Returns the index of the first non-whitespace character.
 */
function trimmedLeftIndex(string) {
  var index = -1,
      length = string.length;

  while (++index < length && isSpace(string.charCodeAt(index))) {}
  return index;
}

module.exports = trimmedLeftIndex;

},{"./isSpace":64}],74:[function(require,module,exports){
var isSpace = require('./isSpace');

/**
 * Used by `_.trim` and `_.trimRight` to get the index of the last non-whitespace
 * character of `string`.
 *
 * @private
 * @param {string} string The string to inspect.
 * @returns {number} Returns the index of the last non-whitespace character.
 */
function trimmedRightIndex(string) {
  var index = string.length;

  while (index-- && isSpace(string.charCodeAt(index))) {}
  return index;
}

module.exports = trimmedRightIndex;

},{"./isSpace":64}],75:[function(require,module,exports){
var isArrayLike = require('../internal/isArrayLike'),
    isObjectLike = require('../internal/isObjectLike');

/** `Object#toString` result references. */
var argsTag = '[object Arguments]';

/** Used for native method references. */
var objectProto = Object.prototype;

/**
 * Used to resolve the [`toStringTag`](https://people.mozilla.org/~jorendorff/es6-draft.html#sec-object.prototype.tostring)
 * of values.
 */
var objToString = objectProto.toString;

/**
 * Checks if `value` is classified as an `arguments` object.
 *
 * @static
 * @memberOf _
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is correctly classified, else `false`.
 * @example
 *
 * _.isArguments(function() { return arguments; }());
 * // => true
 *
 * _.isArguments([1, 2, 3]);
 * // => false
 */
function isArguments(value) {
  return isObjectLike(value) && isArrayLike(value) && objToString.call(value) == argsTag;
}

module.exports = isArguments;

},{"../internal/isArrayLike":58,"../internal/isObjectLike":63}],76:[function(require,module,exports){
var getNative = require('../internal/getNative'),
    isLength = require('../internal/isLength'),
    isObjectLike = require('../internal/isObjectLike');

/** `Object#toString` result references. */
var arrayTag = '[object Array]';

/** Used for native method references. */
var objectProto = Object.prototype;

/**
 * Used to resolve the [`toStringTag`](https://people.mozilla.org/~jorendorff/es6-draft.html#sec-object.prototype.tostring)
 * of values.
 */
var objToString = objectProto.toString;

/* Native method references for those with the same name as other `lodash` methods. */
var nativeIsArray = getNative(Array, 'isArray');

/**
 * Checks if `value` is classified as an `Array` object.
 *
 * @static
 * @memberOf _
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is correctly classified, else `false`.
 * @example
 *
 * _.isArray([1, 2, 3]);
 * // => true
 *
 * _.isArray(function() { return arguments; }());
 * // => false
 */
var isArray = nativeIsArray || function(value) {
  return isObjectLike(value) && isLength(value.length) && objToString.call(value) == arrayTag;
};

module.exports = isArray;

},{"../internal/getNative":57,"../internal/isLength":62,"../internal/isObjectLike":63}],77:[function(require,module,exports){
var escapeRegExp = require('../string/escapeRegExp'),
    isObjectLike = require('../internal/isObjectLike');

/** `Object#toString` result references. */
var funcTag = '[object Function]';

/** Used to detect host constructors (Safari > 5). */
var reIsHostCtor = /^\[object .+?Constructor\]$/;

/** Used for native method references. */
var objectProto = Object.prototype;

/** Used to resolve the decompiled source of functions. */
var fnToString = Function.prototype.toString;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Used to resolve the [`toStringTag`](https://people.mozilla.org/~jorendorff/es6-draft.html#sec-object.prototype.tostring)
 * of values.
 */
var objToString = objectProto.toString;

/** Used to detect if a method is native. */
var reIsNative = RegExp('^' +
  escapeRegExp(fnToString.call(hasOwnProperty))
  .replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, '$1.*?') + '$'
);

/**
 * Checks if `value` is a native function.
 *
 * @static
 * @memberOf _
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a native function, else `false`.
 * @example
 *
 * _.isNative(Array.prototype.push);
 * // => true
 *
 * _.isNative(_);
 * // => false
 */
function isNative(value) {
  if (value == null) {
    return false;
  }
  if (objToString.call(value) == funcTag) {
    return reIsNative.test(fnToString.call(value));
  }
  return isObjectLike(value) && reIsHostCtor.test(value);
}

module.exports = isNative;

},{"../internal/isObjectLike":63,"../string/escapeRegExp":83}],78:[function(require,module,exports){
/**
 * Checks if `value` is the [language type](https://es5.github.io/#x8) of `Object`.
 * (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
 *
 * @static
 * @memberOf _
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
 * @example
 *
 * _.isObject({});
 * // => true
 *
 * _.isObject([1, 2, 3]);
 * // => true
 *
 * _.isObject(1);
 * // => false
 */
function isObject(value) {
  // Avoid a V8 JIT bug in Chrome 19-20.
  // See https://code.google.com/p/v8/issues/detail?id=2291 for more details.
  var type = typeof value;
  return !!value && (type == 'object' || type == 'function');
}

module.exports = isObject;

},{}],79:[function(require,module,exports){
var isLength = require('../internal/isLength'),
    isObjectLike = require('../internal/isObjectLike');

/** `Object#toString` result references. */
var argsTag = '[object Arguments]',
    arrayTag = '[object Array]',
    boolTag = '[object Boolean]',
    dateTag = '[object Date]',
    errorTag = '[object Error]',
    funcTag = '[object Function]',
    mapTag = '[object Map]',
    numberTag = '[object Number]',
    objectTag = '[object Object]',
    regexpTag = '[object RegExp]',
    setTag = '[object Set]',
    stringTag = '[object String]',
    weakMapTag = '[object WeakMap]';

var arrayBufferTag = '[object ArrayBuffer]',
    float32Tag = '[object Float32Array]',
    float64Tag = '[object Float64Array]',
    int8Tag = '[object Int8Array]',
    int16Tag = '[object Int16Array]',
    int32Tag = '[object Int32Array]',
    uint8Tag = '[object Uint8Array]',
    uint8ClampedTag = '[object Uint8ClampedArray]',
    uint16Tag = '[object Uint16Array]',
    uint32Tag = '[object Uint32Array]';

/** Used to identify `toStringTag` values of typed arrays. */
var typedArrayTags = {};
typedArrayTags[float32Tag] = typedArrayTags[float64Tag] =
typedArrayTags[int8Tag] = typedArrayTags[int16Tag] =
typedArrayTags[int32Tag] = typedArrayTags[uint8Tag] =
typedArrayTags[uint8ClampedTag] = typedArrayTags[uint16Tag] =
typedArrayTags[uint32Tag] = true;
typedArrayTags[argsTag] = typedArrayTags[arrayTag] =
typedArrayTags[arrayBufferTag] = typedArrayTags[boolTag] =
typedArrayTags[dateTag] = typedArrayTags[errorTag] =
typedArrayTags[funcTag] = typedArrayTags[mapTag] =
typedArrayTags[numberTag] = typedArrayTags[objectTag] =
typedArrayTags[regexpTag] = typedArrayTags[setTag] =
typedArrayTags[stringTag] = typedArrayTags[weakMapTag] = false;

/** Used for native method references. */
var objectProto = Object.prototype;

/**
 * Used to resolve the [`toStringTag`](https://people.mozilla.org/~jorendorff/es6-draft.html#sec-object.prototype.tostring)
 * of values.
 */
var objToString = objectProto.toString;

/**
 * Checks if `value` is classified as a typed array.
 *
 * @static
 * @memberOf _
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is correctly classified, else `false`.
 * @example
 *
 * _.isTypedArray(new Uint8Array);
 * // => true
 *
 * _.isTypedArray([]);
 * // => false
 */
function isTypedArray(value) {
  return isObjectLike(value) && isLength(value.length) && !!typedArrayTags[objToString.call(value)];
}

module.exports = isTypedArray;

},{"../internal/isLength":62,"../internal/isObjectLike":63}],80:[function(require,module,exports){
var getNative = require('../internal/getNative'),
    isArrayLike = require('../internal/isArrayLike'),
    isObject = require('../lang/isObject'),
    shimKeys = require('../internal/shimKeys');

/* Native method references for those with the same name as other `lodash` methods. */
var nativeKeys = getNative(Object, 'keys');

/**
 * Creates an array of the own enumerable property names of `object`.
 *
 * **Note:** Non-object values are coerced to objects. See the
 * [ES spec](https://people.mozilla.org/~jorendorff/es6-draft.html#sec-object.keys)
 * for more details.
 *
 * @static
 * @memberOf _
 * @category Object
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 * @example
 *
 * function Foo() {
 *   this.a = 1;
 *   this.b = 2;
 * }
 *
 * Foo.prototype.c = 3;
 *
 * _.keys(new Foo);
 * // => ['a', 'b'] (iteration order is not guaranteed)
 *
 * _.keys('hi');
 * // => ['0', '1']
 */
var keys = !nativeKeys ? shimKeys : function(object) {
  var Ctor = object == null ? null : object.constructor;
  if ((typeof Ctor == 'function' && Ctor.prototype === object) ||
      (typeof object != 'function' && isArrayLike(object))) {
    return shimKeys(object);
  }
  return isObject(object) ? nativeKeys(object) : [];
};

module.exports = keys;

},{"../internal/getNative":57,"../internal/isArrayLike":58,"../internal/shimKeys":70,"../lang/isObject":78}],81:[function(require,module,exports){
var isArguments = require('../lang/isArguments'),
    isArray = require('../lang/isArray'),
    isIndex = require('../internal/isIndex'),
    isLength = require('../internal/isLength'),
    isObject = require('../lang/isObject');

/** Used for native method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Creates an array of the own and inherited enumerable property names of `object`.
 *
 * **Note:** Non-object values are coerced to objects.
 *
 * @static
 * @memberOf _
 * @category Object
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 * @example
 *
 * function Foo() {
 *   this.a = 1;
 *   this.b = 2;
 * }
 *
 * Foo.prototype.c = 3;
 *
 * _.keysIn(new Foo);
 * // => ['a', 'b', 'c'] (iteration order is not guaranteed)
 */
function keysIn(object) {
  if (object == null) {
    return [];
  }
  if (!isObject(object)) {
    object = Object(object);
  }
  var length = object.length;
  length = (length && isLength(length) &&
    (isArray(object) || isArguments(object)) && length) || 0;

  var Ctor = object.constructor,
      index = -1,
      isProto = typeof Ctor == 'function' && Ctor.prototype === object,
      result = Array(length),
      skipIndexes = length > 0;

  while (++index < length) {
    result[index] = (index + '');
  }
  for (var key in object) {
    if (!(skipIndexes && isIndex(key, length)) &&
        !(key == 'constructor' && (isProto || !hasOwnProperty.call(object, key)))) {
      result.push(key);
    }
  }
  return result;
}

module.exports = keysIn;

},{"../internal/isIndex":59,"../internal/isLength":62,"../lang/isArguments":75,"../lang/isArray":76,"../lang/isObject":78}],82:[function(require,module,exports){
var keys = require('./keys'),
    toObject = require('../internal/toObject');

/**
 * Creates a two dimensional array of the key-value pairs for `object`,
 * e.g. `[[key1, value1], [key2, value2]]`.
 *
 * @static
 * @memberOf _
 * @category Object
 * @param {Object} object The object to query.
 * @returns {Array} Returns the new array of key-value pairs.
 * @example
 *
 * _.pairs({ 'barney': 36, 'fred': 40 });
 * // => [['barney', 36], ['fred', 40]] (iteration order is not guaranteed)
 */
function pairs(object) {
  object = toObject(object);

  var index = -1,
      props = keys(object),
      length = props.length,
      result = Array(length);

  while (++index < length) {
    var key = props[index];
    result[index] = [key, object[key]];
  }
  return result;
}

module.exports = pairs;

},{"../internal/toObject":71,"./keys":80}],83:[function(require,module,exports){
var baseToString = require('../internal/baseToString');

/**
 * Used to match `RegExp` [special characters](http://www.regular-expressions.info/characters.html#special).
 * In addition to special characters the forward slash is escaped to allow for
 * easier `eval` use and `Function` compilation.
 */
var reRegExpChars = /[.*+?^${}()|[\]\/\\]/g,
    reHasRegExpChars = RegExp(reRegExpChars.source);

/**
 * Escapes the `RegExp` special characters "\", "/", "^", "$", ".", "|", "?",
 * "*", "+", "(", ")", "[", "]", "{" and "}" in `string`.
 *
 * @static
 * @memberOf _
 * @category String
 * @param {string} [string=''] The string to escape.
 * @returns {string} Returns the escaped string.
 * @example
 *
 * _.escapeRegExp('[lodash](https://lodash.com/)');
 * // => '\[lodash\]\(https:\/\/lodash\.com\/\)'
 */
function escapeRegExp(string) {
  string = baseToString(string);
  return (string && reHasRegExpChars.test(string))
    ? string.replace(reRegExpChars, '\\$&')
    : string;
}

module.exports = escapeRegExp;

},{"../internal/baseToString":43}],84:[function(require,module,exports){
var baseToString = require('../internal/baseToString');

/* Native method references for those with the same name as other `lodash` methods. */
var nativeMin = Math.min;

/**
 * Checks if `string` starts with the given target string.
 *
 * @static
 * @memberOf _
 * @category String
 * @param {string} [string=''] The string to search.
 * @param {string} [target] The string to search for.
 * @param {number} [position=0] The position to search from.
 * @returns {boolean} Returns `true` if `string` starts with `target`, else `false`.
 * @example
 *
 * _.startsWith('abc', 'a');
 * // => true
 *
 * _.startsWith('abc', 'b');
 * // => false
 *
 * _.startsWith('abc', 'b', 1);
 * // => true
 */
function startsWith(string, target, position) {
  string = baseToString(string);
  position = position == null
    ? 0
    : nativeMin(position < 0 ? 0 : (+position || 0), string.length);

  return string.lastIndexOf(target, position) == position;
}

module.exports = startsWith;

},{"../internal/baseToString":43}],85:[function(require,module,exports){
var baseToString = require('../internal/baseToString'),
    charsLeftIndex = require('../internal/charsLeftIndex'),
    charsRightIndex = require('../internal/charsRightIndex'),
    isIterateeCall = require('../internal/isIterateeCall'),
    trimmedLeftIndex = require('../internal/trimmedLeftIndex'),
    trimmedRightIndex = require('../internal/trimmedRightIndex');

/**
 * Removes leading and trailing whitespace or specified characters from `string`.
 *
 * @static
 * @memberOf _
 * @category String
 * @param {string} [string=''] The string to trim.
 * @param {string} [chars=whitespace] The characters to trim.
 * @param- {Object} [guard] Enables use as a callback for functions like `_.map`.
 * @returns {string} Returns the trimmed string.
 * @example
 *
 * _.trim('  abc  ');
 * // => 'abc'
 *
 * _.trim('-_-abc-_-', '_-');
 * // => 'abc'
 *
 * _.map(['  foo  ', '  bar  '], _.trim);
 * // => ['foo', 'bar']
 */
function trim(string, chars, guard) {
  var value = string;
  string = baseToString(string);
  if (!string) {
    return string;
  }
  if (guard ? isIterateeCall(value, chars, guard) : chars == null) {
    return string.slice(trimmedLeftIndex(string), trimmedRightIndex(string) + 1);
  }
  chars = (chars + '');
  return string.slice(charsLeftIndex(string, chars), charsRightIndex(string, chars) + 1);
}

module.exports = trim;

},{"../internal/baseToString":43,"../internal/charsLeftIndex":45,"../internal/charsRightIndex":46,"../internal/isIterateeCall":60,"../internal/trimmedLeftIndex":73,"../internal/trimmedRightIndex":74}],86:[function(require,module,exports){
/**
 * This method returns the first argument provided to it.
 *
 * @static
 * @memberOf _
 * @category Utility
 * @param {*} value Any value.
 * @returns {*} Returns `value`.
 * @example
 *
 * var object = { 'user': 'fred' };
 *
 * _.identity(object) === object;
 * // => true
 */
function identity(value) {
  return value;
}

module.exports = identity;

},{}],87:[function(require,module,exports){
var baseProperty = require('../internal/baseProperty'),
    basePropertyDeep = require('../internal/basePropertyDeep'),
    isKey = require('../internal/isKey');

/**
 * Creates a function that returns the property value at `path` on a
 * given object.
 *
 * @static
 * @memberOf _
 * @category Utility
 * @param {Array|string} path The path of the property to get.
 * @returns {Function} Returns the new function.
 * @example
 *
 * var objects = [
 *   { 'a': { 'b': { 'c': 2 } } },
 *   { 'a': { 'b': { 'c': 1 } } }
 * ];
 *
 * _.map(objects, _.property('a.b.c'));
 * // => [2, 1]
 *
 * _.pluck(_.sortBy(objects, _.property(['a', 'b', 'c'])), 'a.b.c');
 * // => [1, 2]
 */
function property(path) {
  return isKey(path) ? baseProperty(path) : basePropertyDeep(path);
}

module.exports = property;

},{"../internal/baseProperty":38,"../internal/basePropertyDeep":39,"../internal/isKey":61}],88:[function(require,module,exports){
'use strict';

// So each country array has the following information:
// [
//    Country name,
//    iso2 code,
//    International dial code,
//    Format (if available),
//    Order (if >1 country with same dial code),
//    Area codes (if >1 country with same dial code)
// ]
var allCountries = [['Afghanistan (‫افغانستان‬‎)', 'af', '93'], ['Albania (Shqipëri)', 'al', '355'], ['Algeria (‫الجزائر‬‎)', 'dz', '213'], ['American Samoa', 'as', '1684'], ['Andorra', 'ad', '376'], ['Angola', 'ao', '244'], ['Anguilla', 'ai', '1264'], ['Antigua and Barbuda', 'ag', '1268'], ['Argentina', 'ar', '54'], ['Armenia (Հայաստան)', 'am', '374'], ['Aruba', 'aw', '297'], ['Australia', 'au', '61', '+.. ... ... ...'], ['Austria (Österreich)', 'at', '43'], ['Azerbaijan (Azərbaycan)', 'az', '994'], ['Bahamas', 'bs', '1242'], ['Bahrain (‫البحرين‬‎)', 'bh', '973'], ['Bangladesh (বাংলাদেশ)', 'bd', '880'], ['Barbados', 'bb', '1246'], ['Belarus (Беларусь)', 'by', '375'], ['Belgium (België)', 'be', '32', '+.. ... .. .. ..'], ['Belize', 'bz', '501'], ['Benin (Bénin)', 'bj', '229'], ['Bermuda', 'bm', '1441'], ['Bhutan (འབྲུག)', 'bt', '975'], ['Bolivia', 'bo', '591'], ['Bosnia and Herzegovina (Босна и Херцеговина)', 'ba', '387'], ['Botswana', 'bw', '267'], ['Brazil (Brasil)', 'br', '55'], ['British Indian Ocean Territory', 'io', '246'], ['British Virgin Islands', 'vg', '1284'], ['Brunei', 'bn', '673'], ['Bulgaria (България)', 'bg', '359'], ['Burkina Faso', 'bf', '226'], ['Burundi (Uburundi)', 'bi', '257'], ['Cambodia (កម្ពុជា)', 'kh', '855'], ['Cameroon (Cameroun)', 'cm', '237'], ['Canada', 'ca', '1', '+. (...) ...-....', 1, ['204', '236', '249', '250', '289', '306', '343', '365', '387', '403', '416', '418', '431', '437', '438', '450', '506', '514', '519', '548', '579', '581', '587', '604', '613', '639', '647', '672', '705', '709', '742', '778', '780', '782', '807', '819', '825', '867', '873', '902', '905']], ['Cape Verde (Kabu Verdi)', 'cv', '238'], ['Caribbean Netherlands', 'bq', '599', '', 1], ['Cayman Islands', 'ky', '1345'], ['Central African Republic (République centrafricaine)', 'cf', '236'], ['Chad (Tchad)', 'td', '235'], ['Chile', 'cl', '56'], ['China (中国)', 'cn', '86', '+.. ..-........'], ['Colombia', 'co', '57'], ['Comoros (‫جزر القمر‬‎)', 'km', '269'], ['Congo (DRC) (Jamhuri ya Kidemokrasia ya Kongo)', 'cd', '243'], ['Congo (Republic) (Congo-Brazzaville)', 'cg', '242'], ['Cook Islands', 'ck', '682'], ['Costa Rica', 'cr', '506', '+... ....-....'], ['Côte d’Ivoire', 'ci', '225'], ['Croatia (Hrvatska)', 'hr', '385'], ['Cuba', 'cu', '53'], ['Curaçao', 'cw', '599', '', 0], ['Cyprus (Κύπρος)', 'cy', '357'], ['Czech Republic (Česká republika)', 'cz', '420'], ['Denmark (Danmark)', 'dk', '45', '+.. .. .. .. ..'], ['Djibouti', 'dj', '253'], ['Dominica', 'dm', '1767'], ['Dominican Republic (República Dominicana)', 'do', '1', '', 2, ['809', '829', '849']], ['Ecuador', 'ec', '593'], ['Egypt (‫مصر‬‎)', 'eg', '20'], ['El Salvador', 'sv', '503', '+... ....-....'], ['Equatorial Guinea (Guinea Ecuatorial)', 'gq', '240'], ['Eritrea', 'er', '291'], ['Estonia (Eesti)', 'ee', '372'], ['Ethiopia', 'et', '251'], ['Falkland Islands (Islas Malvinas)', 'fk', '500'], ['Faroe Islands (Føroyar)', 'fo', '298'], ['Fiji', 'fj', '679'], ['Finland (Suomi)', 'fi', '358', '+... .. ... .. ..'], ['France', 'fr', '33', '+.. . .. .. .. ..'], ['French Guiana (Guyane française)', 'gf', '594'], ['French Polynesia (Polynésie française)', 'pf', '689'], ['Gabon', 'ga', '241'], ['Gambia', 'gm', '220'], ['Georgia (საქართველო)', 'ge', '995'], ['Germany (Deutschland)', 'de', '49', '+.. ... .......'], ['Ghana (Gaana)', 'gh', '233'], ['Gibraltar', 'gi', '350'], ['Greece (Ελλάδα)', 'gr', '30'], ['Greenland (Kalaallit Nunaat)', 'gl', '299'], ['Grenada', 'gd', '1473'], ['Guadeloupe', 'gp', '590', '', 0], ['Guam', 'gu', '1671'], ['Guatemala', 'gt', '502', '+... ....-....'], ['Guinea (Guinée)', 'gn', '224'], ['Guinea-Bissau (Guiné Bissau)', 'gw', '245'], ['Guyana', 'gy', '592'], ['Haiti', 'ht', '509', '+... ....-....'], ['Honduras', 'hn', '504'], ['Hong Kong (香港)', 'hk', '852', '+... .... ....'], ['Hungary (Magyarország)', 'hu', '36'], ['Iceland (Ísland)', 'is', '354', '+... ... ....'], ['India (भारत)', 'in', '91', '+.. .....-.....'], ['Indonesia', 'id', '62'], ['Iran (‫ایران‬‎)', 'ir', '98'], ['Iraq (‫العراق‬‎)', 'iq', '964'], ['Ireland', 'ie', '353', '+... .. .......'], ['Israel (‫ישראל‬‎)', 'il', '972'], ['Italy (Italia)', 'it', '39', '+.. ... ......', 0], ['Jamaica', 'jm', '1876'], ['Japan (日本)', 'jp', '81', '+.. ... .. ....'], ['Jordan (‫الأردن‬‎)', 'jo', '962'], ['Kazakhstan (Казахстан)', 'kz', '7', '+. ... ...-..-..', 1], ['Kenya', 'ke', '254'], ['Kiribati', 'ki', '686'], ['Kuwait (‫الكويت‬‎)', 'kw', '965'], ['Kyrgyzstan (Кыргызстан)', 'kg', '996'], ['Laos (ລາວ)', 'la', '856'], ['Latvia (Latvija)', 'lv', '371'], ['Lebanon (‫لبنان‬‎)', 'lb', '961'], ['Lesotho', 'ls', '266'], ['Liberia', 'lr', '231'], ['Libya (‫ليبيا‬‎)', 'ly', '218'], ['Liechtenstein', 'li', '423'], ['Lithuania (Lietuva)', 'lt', '370'], ['Luxembourg', 'lu', '352'], ['Macau (澳門)', 'mo', '853'], ['Macedonia (FYROM) (Македонија)', 'mk', '389'], ['Madagascar (Madagasikara)', 'mg', '261'], ['Malawi', 'mw', '265'], ['Malaysia', 'my', '60', '+.. ..-....-....'], ['Maldives', 'mv', '960'], ['Mali', 'ml', '223'], ['Malta', 'mt', '356'], ['Marshall Islands', 'mh', '692'], ['Martinique', 'mq', '596'], ['Mauritania (‫موريتانيا‬‎)', 'mr', '222'], ['Mauritius (Moris)', 'mu', '230'], ['Mexico (México)', 'mx', '52'], ['Micronesia', 'fm', '691'], ['Moldova (Republica Moldova)', 'md', '373'], ['Monaco', 'mc', '377'], ['Mongolia (Монгол)', 'mn', '976'], ['Montenegro (Crna Gora)', 'me', '382'], ['Montserrat', 'ms', '1664'], ['Morocco (‫المغرب‬‎)', 'ma', '212'], ['Mozambique (Moçambique)', 'mz', '258'], ['Myanmar (Burma) (မြန်မာ)', 'mm', '95'], ['Namibia (Namibië)', 'na', '264'], ['Nauru', 'nr', '674'], ['Nepal (नेपाल)', 'np', '977'], ['Netherlands (Nederland)', 'nl', '31', '+.. .. ........'], ['New Caledonia (Nouvelle-Calédonie)', 'nc', '687'], ['New Zealand', 'nz', '64', '+.. ...-...-....'], ['Nicaragua', 'ni', '505'], ['Niger (Nijar)', 'ne', '227'], ['Nigeria', 'ng', '234'], ['Niue', 'nu', '683'], ['Norfolk Island', 'nf', '672'], ['North Korea (조선 민주주의 인민 공화국)', 'kp', '850'], ['Northern Mariana Islands', 'mp', '1670'], ['Norway (Norge)', 'no', '47', '+.. ... .. ...'], ['Oman (‫عُمان‬‎)', 'om', '968'], ['Pakistan (‫پاکستان‬‎)', 'pk', '92', '+.. ...-.......'], ['Palau', 'pw', '680'], ['Palestine (‫فلسطين‬‎)', 'ps', '970'], ['Panama (Panamá)', 'pa', '507'], ['Papua New Guinea', 'pg', '675'], ['Paraguay', 'py', '595'], ['Peru (Perú)', 'pe', '51'], ['Philippines', 'ph', '63', '+.. ... ....'], ['Poland (Polska)', 'pl', '48', '+.. ...-...-...'], ['Portugal', 'pt', '351'], ['Puerto Rico', 'pr', '1', '', 3, ['787', '939']], ['Qatar (‫قطر‬‎)', 'qa', '974'], ['Réunion (La Réunion)', 're', '262'], ['Romania (România)', 'ro', '40'], ['Russia (Россия)', 'ru', '7', '+. ... ...-..-..', 0], ['Rwanda', 'rw', '250'], ['Saint Barthélemy (Saint-Barthélemy)', 'bl', '590', '', 1], ['Saint Helena', 'sh', '290'], ['Saint Kitts and Nevis', 'kn', '1869'], ['Saint Lucia', 'lc', '1758'], ['Saint Martin (Saint-Martin (partie française))', 'mf', '590', '', 2], ['Saint Pierre and Miquelon (Saint-Pierre-et-Miquelon)', 'pm', '508'], ['Saint Vincent and the Grenadines', 'vc', '1784'], ['Samoa', 'ws', '685'], ['San Marino', 'sm', '378'], ['São Tomé and Príncipe (São Tomé e Príncipe)', 'st', '239'], ['Saudi Arabia (‫المملكة العربية السعودية‬‎)', 'sa', '966'], ['Senegal (Sénégal)', 'sn', '221'], ['Serbia (Србија)', 'rs', '381'], ['Seychelles', 'sc', '248'], ['Sierra Leone', 'sl', '232'], ['Singapore', 'sg', '65', '+.. ....-....'], ['Sint Maarten', 'sx', '1721'], ['Slovakia (Slovensko)', 'sk', '421'], ['Slovenia (Slovenija)', 'si', '386'], ['Solomon Islands', 'sb', '677'], ['Somalia (Soomaaliya)', 'so', '252'], ['South Africa', 'za', '27'], ['South Korea (대한민국)', 'kr', '82'], ['South Sudan (‫جنوب السودان‬‎)', 'ss', '211'], ['Spain (España)', 'es', '34', '+.. ... ... ...'], ['Sri Lanka (ශ්‍රී ලංකාව)', 'lk', '94'], ['Sudan (‫السودان‬‎)', 'sd', '249'], ['Suriname', 'sr', '597'], ['Swaziland', 'sz', '268'], ['Sweden (Sverige)', 'se', '46', '+.. .. ... .. ..'], ['Switzerland (Schweiz)', 'ch', '41', '+.. .. ... .. ..'], ['Syria (‫سوريا‬‎)', 'sy', '963'], ['Taiwan (台灣)', 'tw', '886'], ['Tajikistan', 'tj', '992'], ['Tanzania', 'tz', '255'], ['Thailand (ไทย)', 'th', '66'], ['Timor-Leste', 'tl', '670'], ['Togo', 'tg', '228'], ['Tokelau', 'tk', '690'], ['Tonga', 'to', '676'], ['Trinidad and Tobago', 'tt', '1868'], ['Tunisia (‫تونس‬‎)', 'tn', '216'], ['Turkey (Türkiye)', 'tr', '90', '+.. ... ... .. ..'], ['Turkmenistan', 'tm', '993'], ['Turks and Caicos Islands', 'tc', '1649'], ['Tuvalu', 'tv', '688'], ['U.S. Virgin Islands', 'vi', '1340'], ['Uganda', 'ug', '256'], ['Ukraine (Україна)', 'ua', '380'], ['United Arab Emirates (‫الإمارات العربية المتحدة‬‎)', 'ae', '971'], ['United Kingdom', 'gb', '44', '+.. .... ......'], ['United States', 'us', '1', '+. (...) ...-....', 0], ['Uruguay', 'uy', '598'], ['Uzbekistan (Oʻzbekiston)', 'uz', '998'], ['Vanuatu', 'vu', '678'], ['Vatican City (Città del Vaticano)', 'va', '39', '+.. .. .... ....', 1], ['Venezuela', 've', '58'], ['Vietnam (Việt Nam)', 'vn', '84'], ['Wallis and Futuna', 'wf', '681'], ['Yemen (‫اليمن‬‎)', 'ye', '967'], ['Zambia', 'zm', '260'], ['Zimbabwe', 'zw', '263']];

// we will build this in the loop below
var allCountryCodes = {};
var addCountryCode = function addCountryCode(iso2, dialCode, priority) {
  if (!(dialCode in allCountryCodes)) {
    allCountryCodes[dialCode] = [];
  }
  var index = priority || 0;
  allCountryCodes[dialCode][index] = iso2;
};

// loop over all of the countries above
// allCountries2 = _.map(allCountries, function(country) {
//   return {
//     name: country[0],
//     iso2: country[1],
//     dialCode: country[2],
//     format: country[3],
//     hasAreaCodes: country.length > 4
//   }
// });

for (var i = 0; i < allCountries.length; i++) {
  // countries
  var c = allCountries[i];
  allCountries[i] = {
    name: c[0],
    iso2: c[1],
    dialCode: c[2],
    priority: c[4] || 0
  };
  // format
  if (c[3]) {
    allCountries[i].format = c[3];
  }

  // area codes
  if (c[5]) {
    allCountries[i].hasAreaCodes = true;
    for (var j = 0; j < c[5].length; j++) {
      // full dial code is country code + dial code
      var dialCode = c[2] + c[5][j];
      addCountryCode(c[1], dialCode);
    }
  }

  // dial codes
  addCountryCode(c[1], c[2], c[4]);
}

module.exports = {
  allCountries: allCountries,
  allCountryCodes: allCountryCodes
};

},{}],"react-telephone-input":[function(require,module,exports){
'use strict';

function _toConsumableArray(arr) {
    if (Array.isArray(arr)) {
        for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) arr2[i] = arr[i];return arr2;
    } else {
        return Array.from(arr);
    }
}

// TODO - fix the onlyContries props. Currently expects that as an array of country object, but users should be able to send in array of country isos

var some = require('lodash/collection/some');
var findWhere = require('lodash/collection/findWhere');
var reduce = require('lodash/collection/reduce');
var map = require('lodash/collection/map');
var filter = require('lodash/collection/filter');
var any = require('lodash/collection/any');
var findIndex = require('lodash/array/findIndex');
var first = require('lodash/array/first');
var rest = require('lodash/array/rest');
var debounce = require('lodash/function/debounce');
var memoize = require('lodash/function/memoize');
// import lodash string methods
var trim = require('lodash/string/trim');
var startsWith = require('lodash/string/startsWith');

var React = require('react');
var onClickOutside = require('react-onclickoutside');
var classNames = require('classnames');
var countryData = require('./country_data');
var allCountries = countryData.allCountries;

require('../less/default.less');

if (typeof document !== 'undefined') {
    var isModernBrowser = Boolean(document.createElement('input').setSelectionRange);
} else {
    var isModernBrowser = true;
}

var keys = {
    UP: 38,
    DOWN: 40,
    RIGHT: 39,
    LEFT: 37,
    ENTER: 13,
    ESC: 27,
    PLUS: 43,
    A: 65,
    Z: 90,
    SPACE: 32
};

function isNumberValid(inputNumber) {
    var countries = countryData.allCountries;
    return some(countries, function (country) {
        return startsWith(inputNumber, country.dialCode) || startsWith(country.dialCode, inputNumber);
    });
}

var ReactTelephoneInput = React.createClass({
    displayName: 'ReactTelephoneInput',

    mixins: [onClickOutside],
    getInitialState: function getInitialState() {
        var inputNumber = this.props.value || '';
        var selectedCountryGuess = this.guessSelectedCountry(inputNumber.replace(/\D/g, ''));
        var selectedCountryGuessIndex = findIndex(allCountries, selectedCountryGuess);
        var formattedNumber = this.formatNumber(inputNumber.replace(/\D/g, ''), selectedCountryGuess ? selectedCountryGuess.format : null);
        var preferredCountries = [];

        preferredCountries = filter(allCountries, function (country) {
            return any(this.props.preferredCountries, function (preferredCountry) {
                return preferredCountry === country.iso2;
            });
        }, this);

        return {
            preferredCountries: preferredCountries,
            selectedCountry: selectedCountryGuess,
            highlightCountryIndex: selectedCountryGuessIndex,
            formattedNumber: formattedNumber,
            showDropDown: false,
            queryString: '',
            freezeSelection: false,
            debouncedQueryStingSearcher: debounce(this.searchCountry, 100)
        };
    },
    propTypes: {
        value: React.PropTypes.string,
        autoFormat: React.PropTypes.bool,
        defaultCountry: React.PropTypes.string,
        onlyCountries: React.PropTypes.arrayOf(React.PropTypes.object),
        preferredCountries: React.PropTypes.arrayOf(React.PropTypes.object),
        onChange: React.PropTypes.func,
        onEnterKeyPress: React.PropTypes.func
    },
    getDefaultProps: function getDefaultProps() {
        return {
            value: '',
            autoFormat: true,
            onlyCountries: allCountries,
            defaultCountry: allCountries[0].iso2,
            isValid: isNumberValid,
            flagsImagePath: 'flags.png',
            onEnterKeyPress: function onEnterKeyPress() {}
        };
    },
    getNumber: function getNumber() {
        return this.state.formattedNumber !== '+' ? this.state.formattedNumber : '';
    },
    getValue: function getValue() {
        return this.getNumber();
    },
    setFlagPathForFlagCssClass: function setFlagPathForFlagCssClass() {
        var node = document.createElement('style');
        node.innerHTML = '.flag{background:url(' + this.props.flagsImagePath + ')';
        document.body.appendChild(node);
    },
    componentDidMount: function componentDidMount() {
        document.addEventListener('keydown', this.handleKeydown);

        this._cursorToEnd();
        this.setFlagPathForFlagCssClass();
        if (typeof this.props.onChange === 'function') {
            this.props.onChange(this.state.formattedNumber);
        }
    },
    componentWillUnmount: function componentWillUnmount() {
        document.removeEventListener('keydown', this.handleKeydown);
    },
    scrollTo: function scrollTo(country, middle) {
        if (!country) {
            return;
        }

        var container = this.refs.flagDropdownList.getDOMNode();

        if (!container) {
            return;
        }

        var containerHeight = container.offsetHeight;
        var containerOffset = container.getBoundingClientRect();
        var containerTop = containerOffset.top + document.body.scrollTop;
        var containerBottom = containerTop + containerHeight;

        var element = country;
        var elementOffset = element.getBoundingClientRect();

        var elementHeight = element.offsetHeight;
        var elementTop = elementOffset.top + document.body.scrollTop;
        var elementBottom = elementTop + elementHeight;
        var newScrollTop = elementTop - containerTop + container.scrollTop;
        var middleOffset = containerHeight / 2 - elementHeight / 2;

        if (elementTop < containerTop) {
            // scroll up
            if (middle) {
                newScrollTop -= middleOffset;
            }
            container.scrollTop = newScrollTop;
        } else if (elementBottom > containerBottom) {
            // scroll down
            if (middle) {
                newScrollTop += middleOffset;
            }
            var heightDifference = containerHeight - elementHeight;
            container.scrollTop = newScrollTop - heightDifference;
        }
    },
    formatNumber: function formatNumber(text, pattern) {
        if (!text || text.length === 0) {
            return '+';
        }

        // for all strings with length less than 3, just return it (1, 2 etc.)
        // also return the same text if the selected country has no fixed format
        if (text && text.length < 2 || !pattern || !this.props.autoFormat) {
            return '+' + text;
        }

        var formattedObject = reduce(pattern, function (acc, character) {
            if (acc.remainingText.length === 0) {
                return acc;
            }

            if (character !== '.') {
                return {
                    formattedText: acc.formattedText + character,
                    remainingText: acc.remainingText
                };
            }

            return {
                formattedText: acc.formattedText + first(acc.remainingText),
                remainingText: rest(acc.remainingText)
            };
        }, { formattedText: '', remainingText: text.split('') });
        return formattedObject.formattedText + formattedObject.remainingText.join('');
    },

    // put the cursor to the end of the input (usually after a focus event)
    _cursorToEnd: function _cursorToEnd() {
        var input = this.refs.numberInput.getDOMNode();
        input.focus();
        if (isModernBrowser) {
            var len = input.value.length;
            input.setSelectionRange(len, len);
        }
    },
    // memoize results based on the first 5/6 characters. That is all that matters
    guessSelectedCountry: memoize(function (inputNumber) {
        var secondBestGuess = findWhere(allCountries, { iso2: this.props.defaultCountry }) || this.props.onlyCountries[0];
        if (trim(inputNumber) !== '') {
            var bestGuess = reduce(this.props.onlyCountries, function (selectedCountry, country) {
                if (startsWith(inputNumber, country.dialCode)) {
                    if (country.dialCode.length > selectedCountry.dialCode.length) {
                        return country;
                    }
                    if (country.dialCode.length === selectedCountry.dialCode.length && country.priority < selectedCountry.priority) {
                        return country;
                    }
                }

                return selectedCountry;
            }, { dialCode: '', priority: 10001 }, this);
        } else {
            return secondBestGuess;
        }

        if (!bestGuess.name) {
            return secondBestGuess;
        }

        return bestGuess;
    }),
    getElement: function getElement(index) {
        return this.refs['flag_no_' + index].getDOMNode();
    },
    handleFlagDropdownClick: function handleFlagDropdownClick() {
        var _this = this;

        // need to put the highlight on the current selected country if the dropdown is going to open up
        this.setState({
            showDropDown: !this.state.showDropDown,
            highlightCountry: findWhere(this.props.onlyCountries, this.state.selectedCountry),
            highlightCountryIndex: findIndex(this.props.onlyCountries, this.state.selectedCountry)
        }, function () {
            // only need to scrool if the dropdown list is alive
            if (_this.state.showDropDown) {
                _this.scrollTo(_this.getElement(_this.state.highlightCountryIndex + _this.state.preferredCountries.length));
            }
        });
    },
    handleInput: function handleInput(event) {
        var formattedNumber = '+',
            newSelectedCountry = this.state.selectedCountry,
            freezeSelection = this.state.freezeSelection;

        // if the input is the same as before, must be some special key like enter etc.
        if (event.target.value === this.state.formattedNumber) {
            return;
        }

        // ie hack
        if (event.preventDefault) {
            event.preventDefault();
        } else {
            event.returnValue = false;
        }

        if (event.target.value.length > 0) {
            // before entering the number in new format, lets check if the dial code now matches some other country
            var inputNumber = event.target.value.replace(/\D/g, '');

            // we don't need to send the whole number to guess the country... only the first 6 characters are enough
            // the guess country function can then use memoization much more effectively since the set of input it gets has drastically reduced
            if (!this.state.freezeSelection || this.state.selectedCountry.dialCode.length > inputNumber.length) {
                newSelectedCountry = this.guessSelectedCountry(inputNumber.substring(0, 6));
                freezeSelection = false;
            }
            // let us remove all non numerals from the input
            formattedNumber = this.formatNumber(inputNumber, newSelectedCountry.format);
        }

        var caretPosition = event.target.selectionStart;
        var oldFormattedText = this.state.formattedNumber;
        var diff = formattedNumber.length - oldFormattedText.length;

        this.setState({
            formattedNumber: formattedNumber,
            freezeSelection: freezeSelection,
            selectedCountry: newSelectedCountry.dialCode.length > 0 ? newSelectedCountry : this.state.selectedCountry
        }, function () {
            if (isModernBrowser) {
                if (diff > 0) {
                    caretPosition = caretPosition - diff;
                }

                if (caretPosition > 0 && oldFormattedText.length >= formattedNumber.length) {
                    this.refs.numberInput.getDOMNode().setSelectionRange(caretPosition, caretPosition);
                }
            }

            if (this.props.onChange) {
                this.props.onChange(this.state.formattedNumber);
            }
        });
    },
    handleInputClick: function handleInputClick() {
        this.setState({ showDropDown: false });
    },
    handleFlagItemClick: function handleFlagItemClick(country) {
        var currentSelectedCountry = this.state.selectedCountry;
        var nextSelectedCountry = findWhere(this.props.onlyCountries, country);

        // tiny optimization
        if (currentSelectedCountry.iso2 !== nextSelectedCountry.iso2) {
            // TODO - the below replacement is a bug. It will replace stuff from middle too
            var newNumber = this.state.formattedNumber.replace(currentSelectedCountry.dialCode, nextSelectedCountry.dialCode);
            var formattedNumber = this.formatNumber(newNumber.replace(/\D/g, ''), nextSelectedCountry.format);

            this.setState({
                showDropDown: false,
                selectedCountry: nextSelectedCountry,
                freezeSelection: true,
                formattedNumber: formattedNumber
            }, function () {
                this._cursorToEnd();
                if (this.props.onChange) {
                    this.props.onChange(formattedNumber);
                }
            });
        }
    },
    handleInputFocus: function handleInputFocus() {
        // if the input is blank, insert dial code of the selected country
        if (this.refs.numberInput.getDOMNode().value === '+') {
            this.setState({ formattedNumber: '+' + this.state.selectedCountry.dialCode });
        }
    },
    _getHighlightCountryIndex: function _getHighlightCountryIndex(direction) {
        // had to write own function because underscore does not have findIndex. lodash has it
        var highlightCountryIndex = this.state.highlightCountryIndex + direction;

        if (highlightCountryIndex < 0 || highlightCountryIndex >= this.props.onlyCountries.length + this.state.preferredCountries.length) {
            return highlightCountryIndex - direction;
        }

        return highlightCountryIndex;
    },
    // memoize search results... caching all the way
    _searchCountry: memoize(function (queryString) {
        if (!queryString || queryString.length === 0) {
            return null;
        }
        // don't include the preferred countries in search
        var probableCountries = filter(this.props.onlyCountries, function (country) {
            return startsWith(country.name.toLowerCase(), queryString.toLowerCase());
        }, this);
        return probableCountries[0];
    }),
    searchCountry: function searchCountry() {
        var probableCandidate = this._searchCountry(this.state.queryString) || this.props.onlyCountries[0];
        var probableCandidateIndex = findIndex(this.props.onlyCountries, probableCandidate) + this.state.preferredCountries.length;

        this.scrollTo(this.getElement(probableCandidateIndex), true);

        this.setState({
            queryString: '',
            highlightCountryIndex: probableCandidateIndex
        });
    },
    handleKeydown: function handleKeydown(event) {
        if (!this.state.showDropDown) {
            return;
        }

        // ie hack
        if (event.preventDefault) {
            event.preventDefault();
        } else {
            event.returnValue = false;
        }

        function _moveHighlight(direction) {
            var _this2 = this;

            this.setState({
                highlightCountryIndex: this._getHighlightCountryIndex(direction)
            }, function () {
                _this2.scrollTo(_this2.getElement(_this2.state.highlightCountryIndex), true);
            });
        }

        switch (event.which) {
            case keys.DOWN:
                _moveHighlight(1);
                break;
            case keys.UP:
                _moveHighlight(-1);
                break;
            case keys.ENTER:
                this.handleFlagItemClick(this.props.onlyCountries[this.state.highlightCountryIndex], event);
                break;
            case keys.ESC:
                this.setState({ showDropDown: false }, this._cursorToEnd);
                break;
            default:
                if (event.which >= keys.A && event.which <= keys.Z || event.which === keys.SPACE) {
                    this.setState({ queryString: this.state.queryString + String.fromCharCode(event.which) }, this.state.debouncedQueryStingSearcher);
                }
        }
    },
    handleInputKeyDown: function handleInputKeyDown(event) {
        if (event.which === keys.ENTER) {
            this.props.onEnterKeyPress(event);
        }
    },
    handleClickOutside: function handleClickOutside() {
        if (this.state.showDropDown) {
            this.setState({
                showDropDown: false
            });
        }
    },
    getCountryDropDownList: function getCountryDropDownList() {

        var countryDropDownList = map([this.state.preferredCountries].concat(_toConsumableArray(this.props.onlyCountries)), function (country, index) {
            var itemClasses = classNames({
                country: true,
                preferred: country.iso2 === 'us' || country.iso2 === 'gb',
                active: country.iso2 === 'us',
                highlight: this.state.highlightCountryIndex === index
            });

            return React.createElement('li', {
                ref: 'flag_no_' + index,
                key: 'flag_no_' + index,
                'data-flag-key': 'flag_no_' + index,
                className: itemClasses,
                'data-dial-code': '1',
                'data-country-code': country.iso2,
                onClick: this.handleFlagItemClick.bind(this, country) }, React.createElement('div', { className: 'flag ' + country.iso2 }), React.createElement('span', { className: 'country-name' }, country.name), React.createElement('span', { className: 'dial-code' }, '+' + country.dialCode));
        }, this);

        var dashedLi = React.createElement('li', { key: 'dashes', className: 'divider' });
        // let's insert a dashed line in between preffered countries and the rest
        countryDropDownList.splice(this.state.preferredCountries.length, 0, dashedLi);

        var dropDownClasses = classNames({
            'country-list': true,
            'hide': !this.state.showDropDown
        });
        return React.createElement('ul', { ref: 'flagDropdownList', className: dropDownClasses }, countryDropDownList);
    },
    render: function render() {
        var arrowClasses = classNames({
            'arrow': true,
            'up': this.state.showDropDown
        });
        var inputClasses = classNames({
            'form-control': true,
            'invalid-number': !this.props.isValid(this.state.formattedNumber.replace(/\D/g, ''))
        });

        var flagViewClasses = classNames({
            'flag-dropdown': true,
            'open-dropdown': this.state.showDropDown
        });

        return React.createElement('div', { className: 'react-tel-input' }, React.createElement('input', {
            onChange: this.handleInput,
            onClick: this.handleInputClick,
            onFocus: this.handleInputFocus,
            onKeyDown: this.handleInputKeyDown,
            value: this.state.formattedNumber,
            ref: 'numberInput',
            type: 'tel',
            className: inputClasses,
            placeholder: '+1 (702) 123-4567' }), React.createElement('div', { ref: 'flagDropDownButton', className: flagViewClasses, onKeyDown: this.handleKeydown }, React.createElement('div', { ref: 'selectedFlag', onClick: this.handleFlagDropdownClick, className: 'selected-flag', title: this.state.selectedCountry.name + ': + ' + this.state.selectedCountry.dialCode }, React.createElement('div', { className: 'flag ' + this.state.selectedCountry.iso2 }, React.createElement('div', { className: arrowClasses }))), this.state.showDropDown ? this.getCountryDropDownList() : ''));
    }
});

module.exports = ReactTelephoneInput;

},{"../less/default.less":1,"./country_data":88,"classnames":undefined,"lodash/array/findIndex":5,"lodash/array/first":6,"lodash/array/rest":8,"lodash/collection/any":9,"lodash/collection/filter":10,"lodash/collection/findWhere":12,"lodash/collection/map":13,"lodash/collection/reduce":14,"lodash/collection/some":15,"lodash/function/debounce":17,"lodash/function/memoize":18,"lodash/string/startsWith":84,"lodash/string/trim":85,"react":undefined,"react-onclickoutside":undefined}]},{},[])
//# sourceMappingURL=data:application/json;charset:utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9yZWFjdC1jb21wb25lbnQtZ3VscC10YXNrcy9ub2RlX21vZHVsZXMvYnJvd3NlcmlmeS9ub2RlX21vZHVsZXMvYnJvd3Nlci1wYWNrL19wcmVsdWRlLmpzIiwibGVzcy9kZWZhdWx0Lmxlc3MiLCJub2RlX21vZHVsZXMvbGVzc2lmeS9ub2RlX21vZHVsZXMvY3NzaWZ5L2Jyb3dzZXIuanMiLCJub2RlX21vZHVsZXMvbGVzc2lmeS90cmFuc2Zvcm0uanMiLCJub2RlX21vZHVsZXMvbG9kYXNoL2FycmF5L2Ryb3AuanMiLCJub2RlX21vZHVsZXMvbG9kYXNoL2FycmF5L2ZpbmRJbmRleC5qcyIsIm5vZGVfbW9kdWxlcy9sb2Rhc2gvYXJyYXkvZmlyc3QuanMiLCJub2RlX21vZHVsZXMvbG9kYXNoL2FycmF5L2xhc3QuanMiLCJub2RlX21vZHVsZXMvbG9kYXNoL2FycmF5L3Jlc3QuanMiLCJub2RlX21vZHVsZXMvbG9kYXNoL2NvbGxlY3Rpb24vYW55LmpzIiwibm9kZV9tb2R1bGVzL2xvZGFzaC9jb2xsZWN0aW9uL2ZpbHRlci5qcyIsIm5vZGVfbW9kdWxlcy9sb2Rhc2gvY29sbGVjdGlvbi9maW5kLmpzIiwibm9kZV9tb2R1bGVzL2xvZGFzaC9jb2xsZWN0aW9uL2ZpbmRXaGVyZS5qcyIsIm5vZGVfbW9kdWxlcy9sb2Rhc2gvY29sbGVjdGlvbi9tYXAuanMiLCJub2RlX21vZHVsZXMvbG9kYXNoL2NvbGxlY3Rpb24vcmVkdWNlLmpzIiwibm9kZV9tb2R1bGVzL2xvZGFzaC9jb2xsZWN0aW9uL3NvbWUuanMiLCJub2RlX21vZHVsZXMvbG9kYXNoL2RhdGUvbm93LmpzIiwibm9kZV9tb2R1bGVzL2xvZGFzaC9mdW5jdGlvbi9kZWJvdW5jZS5qcyIsIm5vZGVfbW9kdWxlcy9sb2Rhc2gvZnVuY3Rpb24vbWVtb2l6ZS5qcyIsIm5vZGVfbW9kdWxlcy9sb2Rhc2gvaW50ZXJuYWwvTWFwQ2FjaGUuanMiLCJub2RlX21vZHVsZXMvbG9kYXNoL2ludGVybmFsL2FycmF5RmlsdGVyLmpzIiwibm9kZV9tb2R1bGVzL2xvZGFzaC9pbnRlcm5hbC9hcnJheU1hcC5qcyIsIm5vZGVfbW9kdWxlcy9sb2Rhc2gvaW50ZXJuYWwvYXJyYXlSZWR1Y2UuanMiLCJub2RlX21vZHVsZXMvbG9kYXNoL2ludGVybmFsL2FycmF5U29tZS5qcyIsIm5vZGVfbW9kdWxlcy9sb2Rhc2gvaW50ZXJuYWwvYmFzZUNhbGxiYWNrLmpzIiwibm9kZV9tb2R1bGVzL2xvZGFzaC9pbnRlcm5hbC9iYXNlRWFjaC5qcyIsIm5vZGVfbW9kdWxlcy9sb2Rhc2gvaW50ZXJuYWwvYmFzZUZpbHRlci5qcyIsIm5vZGVfbW9kdWxlcy9sb2Rhc2gvaW50ZXJuYWwvYmFzZUZpbmQuanMiLCJub2RlX21vZHVsZXMvbG9kYXNoL2ludGVybmFsL2Jhc2VGaW5kSW5kZXguanMiLCJub2RlX21vZHVsZXMvbG9kYXNoL2ludGVybmFsL2Jhc2VGb3IuanMiLCJub2RlX21vZHVsZXMvbG9kYXNoL2ludGVybmFsL2Jhc2VGb3JPd24uanMiLCJub2RlX21vZHVsZXMvbG9kYXNoL2ludGVybmFsL2Jhc2VHZXQuanMiLCJub2RlX21vZHVsZXMvbG9kYXNoL2ludGVybmFsL2Jhc2VJc0VxdWFsLmpzIiwibm9kZV9tb2R1bGVzL2xvZGFzaC9pbnRlcm5hbC9iYXNlSXNFcXVhbERlZXAuanMiLCJub2RlX21vZHVsZXMvbG9kYXNoL2ludGVybmFsL2Jhc2VJc01hdGNoLmpzIiwibm9kZV9tb2R1bGVzL2xvZGFzaC9pbnRlcm5hbC9iYXNlTWFwLmpzIiwibm9kZV9tb2R1bGVzL2xvZGFzaC9pbnRlcm5hbC9iYXNlTWF0Y2hlcy5qcyIsIm5vZGVfbW9kdWxlcy9sb2Rhc2gvaW50ZXJuYWwvYmFzZU1hdGNoZXNQcm9wZXJ0eS5qcyIsIm5vZGVfbW9kdWxlcy9sb2Rhc2gvaW50ZXJuYWwvYmFzZVByb3BlcnR5LmpzIiwibm9kZV9tb2R1bGVzL2xvZGFzaC9pbnRlcm5hbC9iYXNlUHJvcGVydHlEZWVwLmpzIiwibm9kZV9tb2R1bGVzL2xvZGFzaC9pbnRlcm5hbC9iYXNlUmVkdWNlLmpzIiwibm9kZV9tb2R1bGVzL2xvZGFzaC9pbnRlcm5hbC9iYXNlU2xpY2UuanMiLCJub2RlX21vZHVsZXMvbG9kYXNoL2ludGVybmFsL2Jhc2VTb21lLmpzIiwibm9kZV9tb2R1bGVzL2xvZGFzaC9pbnRlcm5hbC9iYXNlVG9TdHJpbmcuanMiLCJub2RlX21vZHVsZXMvbG9kYXNoL2ludGVybmFsL2JpbmRDYWxsYmFjay5qcyIsIm5vZGVfbW9kdWxlcy9sb2Rhc2gvaW50ZXJuYWwvY2hhcnNMZWZ0SW5kZXguanMiLCJub2RlX21vZHVsZXMvbG9kYXNoL2ludGVybmFsL2NoYXJzUmlnaHRJbmRleC5qcyIsIm5vZGVfbW9kdWxlcy9sb2Rhc2gvaW50ZXJuYWwvY3JlYXRlQmFzZUVhY2guanMiLCJub2RlX21vZHVsZXMvbG9kYXNoL2ludGVybmFsL2NyZWF0ZUJhc2VGb3IuanMiLCJub2RlX21vZHVsZXMvbG9kYXNoL2ludGVybmFsL2NyZWF0ZUZpbmQuanMiLCJub2RlX21vZHVsZXMvbG9kYXNoL2ludGVybmFsL2NyZWF0ZUZpbmRJbmRleC5qcyIsIm5vZGVfbW9kdWxlcy9sb2Rhc2gvaW50ZXJuYWwvY3JlYXRlUmVkdWNlLmpzIiwibm9kZV9tb2R1bGVzL2xvZGFzaC9pbnRlcm5hbC9lcXVhbEFycmF5cy5qcyIsIm5vZGVfbW9kdWxlcy9sb2Rhc2gvaW50ZXJuYWwvZXF1YWxCeVRhZy5qcyIsIm5vZGVfbW9kdWxlcy9sb2Rhc2gvaW50ZXJuYWwvZXF1YWxPYmplY3RzLmpzIiwibm9kZV9tb2R1bGVzL2xvZGFzaC9pbnRlcm5hbC9nZXRMZW5ndGguanMiLCJub2RlX21vZHVsZXMvbG9kYXNoL2ludGVybmFsL2dldE1hdGNoRGF0YS5qcyIsIm5vZGVfbW9kdWxlcy9sb2Rhc2gvaW50ZXJuYWwvZ2V0TmF0aXZlLmpzIiwibm9kZV9tb2R1bGVzL2xvZGFzaC9pbnRlcm5hbC9pc0FycmF5TGlrZS5qcyIsIm5vZGVfbW9kdWxlcy9sb2Rhc2gvaW50ZXJuYWwvaXNJbmRleC5qcyIsIm5vZGVfbW9kdWxlcy9sb2Rhc2gvaW50ZXJuYWwvaXNJdGVyYXRlZUNhbGwuanMiLCJub2RlX21vZHVsZXMvbG9kYXNoL2ludGVybmFsL2lzS2V5LmpzIiwibm9kZV9tb2R1bGVzL2xvZGFzaC9pbnRlcm5hbC9pc0xlbmd0aC5qcyIsIm5vZGVfbW9kdWxlcy9sb2Rhc2gvaW50ZXJuYWwvaXNPYmplY3RMaWtlLmpzIiwibm9kZV9tb2R1bGVzL2xvZGFzaC9pbnRlcm5hbC9pc1NwYWNlLmpzIiwibm9kZV9tb2R1bGVzL2xvZGFzaC9pbnRlcm5hbC9pc1N0cmljdENvbXBhcmFibGUuanMiLCJub2RlX21vZHVsZXMvbG9kYXNoL2ludGVybmFsL21hcERlbGV0ZS5qcyIsIm5vZGVfbW9kdWxlcy9sb2Rhc2gvaW50ZXJuYWwvbWFwR2V0LmpzIiwibm9kZV9tb2R1bGVzL2xvZGFzaC9pbnRlcm5hbC9tYXBIYXMuanMiLCJub2RlX21vZHVsZXMvbG9kYXNoL2ludGVybmFsL21hcFNldC5qcyIsIm5vZGVfbW9kdWxlcy9sb2Rhc2gvaW50ZXJuYWwvc2hpbUtleXMuanMiLCJub2RlX21vZHVsZXMvbG9kYXNoL2ludGVybmFsL3RvT2JqZWN0LmpzIiwibm9kZV9tb2R1bGVzL2xvZGFzaC9pbnRlcm5hbC90b1BhdGguanMiLCJub2RlX21vZHVsZXMvbG9kYXNoL2ludGVybmFsL3RyaW1tZWRMZWZ0SW5kZXguanMiLCJub2RlX21vZHVsZXMvbG9kYXNoL2ludGVybmFsL3RyaW1tZWRSaWdodEluZGV4LmpzIiwibm9kZV9tb2R1bGVzL2xvZGFzaC9sYW5nL2lzQXJndW1lbnRzLmpzIiwibm9kZV9tb2R1bGVzL2xvZGFzaC9sYW5nL2lzQXJyYXkuanMiLCJub2RlX21vZHVsZXMvbG9kYXNoL2xhbmcvaXNOYXRpdmUuanMiLCJub2RlX21vZHVsZXMvbG9kYXNoL2xhbmcvaXNPYmplY3QuanMiLCJub2RlX21vZHVsZXMvbG9kYXNoL2xhbmcvaXNUeXBlZEFycmF5LmpzIiwibm9kZV9tb2R1bGVzL2xvZGFzaC9vYmplY3Qva2V5cy5qcyIsIm5vZGVfbW9kdWxlcy9sb2Rhc2gvb2JqZWN0L2tleXNJbi5qcyIsIm5vZGVfbW9kdWxlcy9sb2Rhc2gvb2JqZWN0L3BhaXJzLmpzIiwibm9kZV9tb2R1bGVzL2xvZGFzaC9zdHJpbmcvZXNjYXBlUmVnRXhwLmpzIiwibm9kZV9tb2R1bGVzL2xvZGFzaC9zdHJpbmcvc3RhcnRzV2l0aC5qcyIsIm5vZGVfbW9kdWxlcy9sb2Rhc2gvc3RyaW5nL3RyaW0uanMiLCJub2RlX21vZHVsZXMvbG9kYXNoL3V0aWxpdHkvaWRlbnRpdHkuanMiLCJub2RlX21vZHVsZXMvbG9kYXNoL3V0aWxpdHkvcHJvcGVydHkuanMiLCIvVXNlcnMvbXVrZXNoL0RvY3VtZW50cy9wcm9qZWN0cy9yZWFjdC10ZWxlcGhvbmUtaW5wdXQvc3JjL2NvdW50cnlfZGF0YS5qcyIsIi9Vc2Vycy9tdWtlc2gvRG9jdW1lbnRzL3Byb2plY3RzL3JlYWN0LXRlbGVwaG9uZS1pbnB1dC9zcmMvaW5kZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUNBQTs7QUNBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3JDQTtBQUNBOztBQ0RBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3ZDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDckRBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDdEJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDbkJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3JCQTtBQUNBOztBQ0RBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDN0RBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN4REE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNyQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3BFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzNDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ25FQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN4QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUMzTEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2hGQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN4QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN6QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDckJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUMxQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3ZCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDbkNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2ZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDdEJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDekJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN2QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2pCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDakJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUM3QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUM1QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDdEdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDcERBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN2QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDOUJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzdDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDZEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNuQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDeEJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNoQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3ZCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2hCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN2Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDbEJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNqQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUMvQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDM0JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDekJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3JCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3RCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNuREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDaERBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDbkVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2ZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3JCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2hCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNmQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN4QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUM1QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUM1QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3BCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNaQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDZEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDZkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2RBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNkQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDcEJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2xCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDekNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNkQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzVCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ25CQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNsQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDcENBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDeENBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3pEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzVCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDMUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzdDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2hFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNqQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2hDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNwQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDMUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNwQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUMvQkEsWUFBWSxDQUFDOzs7Ozs7Ozs7OztBQVdiLElBQUksWUFBWSxHQUFHLENBQ2YsQ0FDRSw0QkFBNEIsRUFDNUIsSUFBSSxFQUNKLElBQUksQ0FDTCxFQUNE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UyxFQUFDLGVBQWUsRUFBQyxLQUFLLEVBQUssSUFBSSxDQUFDLEtBQUssQ0FBQyxlQUFlLENBQUMsSUFBSSxHQUFBLE1BQUEsR0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDLGVBQWUsQ0FBQyxRQUFRLEVBQUEsRUFDeEssS0FBQSxDQUFBLGFBQUEsQ0FxQkEsS0FBSyxFQUNMLEVBdEJLLFNBQVMsRUFBQSxPQUFBLEdBQVUsSUFBSSxDQUFDLEtBQUssQ0FBQyxlQUFlLENBQUMsSUFBSSxFQUFBLEVBQ25ELEtBQUEsQ0FBQSxhQUFBLENBQUEsS0FBQSxFQUFBLEVBQUssU0FBUyxFQUFFLFlBQVksRUFBQSxDQUFRLENBQ2xDLENBQ0osRUFDTCxJQUFJLENBQUMsS0FBSyxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUMsc0JBQXNCLEVBQUUsR0FBRyxFQUFFLENBQzNELENBQ0osQ0FDUjtLQUNMO0NBQ0osQ0FBQyxDQUFDOztBQUVILE1BQU0sQ0FBQyxPQUFPLEdBQUcsbUJBQW1CLENBQUMiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dmFyIGY9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKTt0aHJvdyBmLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsZn12YXIgbD1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwobC5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxsLGwuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pIiwidmFyIGNzcyA9IFwiLnJlYWN0LXRlbC1pbnB1dCB7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICB3aWR0aDogMjAwcHg7XFxufVxcbi5yZWFjdC10ZWwtaW5wdXQgLmZsYWcge1xcbiAgd2lkdGg6IDE2cHg7XFxuICBoZWlnaHQ6IDExcHg7XFxufVxcbi5yZWFjdC10ZWwtaW5wdXQgLmFkIHtcXG4gIGJhY2tncm91bmQtcG9zaXRpb246IC0xNnB4IDA7XFxufVxcbi5yZWFjdC10ZWwtaW5wdXQgLmFlIHtcXG4gIGJhY2tncm91bmQtcG9zaXRpb246IC0zMnB4IDA7XFxufVxcbi5yZWFjdC10ZWwtaW5wdXQgLmFmIHtcXG4gIGJhY2tncm91bmQtcG9zaXRpb246IC00OHB4IDA7XFxufVxcbi5yZWFjdC10ZWwtaW5wdXQgLmFnIHtcXG4gIGJhY2tncm91bmQtcG9zaXRpb246IC02NHB4IDA7XFxufVxcbi5yZWFjdC10ZWwtaW5wdXQgLmFpIHtcXG4gIGJhY2tncm91bmQtcG9zaXRpb246IC04MHB4IDA7XFxufVxcbi5yZWFjdC10ZWwtaW5wdXQgLmFsIHtcXG4gIGJhY2tncm91bmQtcG9zaXRpb246IC05NnB4IDA7XFxufVxcbi5yZWFjdC10ZWwtaW5wdXQgLmFtIHtcXG4gIGJhY2tncm91bmQtcG9zaXRpb246IC0xMTJweCAwO1xcbn1cXG4ucmVhY3QtdGVsLWlucHV0IC5hbyB7XFxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAtMTI4cHggMDtcXG59XFxuLnJlYWN0LXRlbC1pbnB1dCAuYXIge1xcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogLTE0NHB4IDA7XFxufVxcbi5yZWFjdC10ZWwtaW5wdXQgLmFzIHtcXG4gIGJhY2tncm91bmQtcG9zaXRpb246IC0xNjBweCAwO1xcbn1cXG4ucmVhY3QtdGVsLWlucHV0IC5hdCB7XFxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAtMTc2cHggMDtcXG59XFxuLnJlYWN0LXRlbC1pbnB1dCAuYXUge1xcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogLTE5MnB4IDA7XFxufVxcbi5yZWFjdC10ZWwtaW5wdXQgLmF3IHtcXG4gIGJhY2tncm91bmQtcG9zaXRpb246IC0yMDhweCAwO1xcbn1cXG4ucmVhY3QtdGVsLWlucHV0IC5heiB7XFxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAtMjI0cHggMDtcXG59XFxuLnJlYWN0LXRlbC1pbnB1dCAuYmEge1xcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogLTI0MHB4IDA7XFxufVxcbi5yZWFjdC10ZWwtaW5wdXQgLmJiIHtcXG4gIGJhY2tncm91bmQtcG9zaXRpb246IDAgLTExcHg7XFxufVxcbi5yZWFjdC10ZWwtaW5wdXQgLmJkIHtcXG4gIGJhY2tncm91bmQtcG9zaXRpb246IC0xNnB4IC0xMXB4O1xcbn1cXG4ucmVhY3QtdGVsLWlucHV0IC5iZSB7XFxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAtMzJweCAtMTFweDtcXG59XFxuLnJlYWN0LXRlbC1pbnB1dCAuYmYge1xcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogLTQ4cHggLTExcHg7XFxufVxcbi5yZWFjdC10ZWwtaW5wdXQgLmJnIHtcXG4gIGJhY2tncm91bmQtcG9zaXRpb246IC02NHB4IC0xMXB4O1xcbn1cXG4ucmVhY3QtdGVsLWlucHV0IC5iaCB7XFxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAtODBweCAtMTFweDtcXG59XFxuLnJlYWN0LXRlbC1pbnB1dCAuYmkge1xcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogLTk2cHggLTExcHg7XFxufVxcbi5yZWFjdC10ZWwtaW5wdXQgLmJqIHtcXG4gIGJhY2tncm91bmQtcG9zaXRpb246IC0xMTJweCAtMTFweDtcXG59XFxuLnJlYWN0LXRlbC1pbnB1dCAuYm0ge1xcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogLTEyOHB4IC0xMXB4O1xcbn1cXG4ucmVhY3QtdGVsLWlucHV0IC5ibiB7XFxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAtMTQ0cHggLTExcHg7XFxufVxcbi5yZWFjdC10ZWwtaW5wdXQgLmJvIHtcXG4gIGJhY2tncm91bmQtcG9zaXRpb246IC0xNjBweCAtMTFweDtcXG59XFxuLnJlYWN0LXRlbC1pbnB1dCAuYnIge1xcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogLTE3NnB4IC0xMXB4O1xcbn1cXG4ucmVhY3QtdGVsLWlucHV0IC5icyB7XFxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAtMTkycHggLTExcHg7XFxufVxcbi5yZWFjdC10ZWwtaW5wdXQgLmJ0IHtcXG4gIGJhY2tncm91bmQtcG9zaXRpb246IC0yMDhweCAtMTFweDtcXG59XFxuLnJlYWN0LXRlbC1pbnB1dCAuYncge1xcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogLTIyNHB4IC0xMXB4O1xcbn1cXG4ucmVhY3QtdGVsLWlucHV0IC5ieSB7XFxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAtMjQwcHggLTExcHg7XFxufVxcbi5yZWFjdC10ZWwtaW5wdXQgLmJ6IHtcXG4gIGJhY2tncm91bmQtcG9zaXRpb246IDAgLTIycHg7XFxufVxcbi5yZWFjdC10ZWwtaW5wdXQgLmNhIHtcXG4gIGJhY2tncm91bmQtcG9zaXRpb246IC0xNnB4IC0yMnB4O1xcbn1cXG4ucmVhY3QtdGVsLWlucHV0IC5jZCB7XFxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAtMzJweCAtMjJweDtcXG59XFxuLnJlYWN0LXRlbC1pbnB1dCAuY2Yge1xcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogLTQ4cHggLTIycHg7XFxufVxcbi5yZWFjdC10ZWwtaW5wdXQgLmNnIHtcXG4gIGJhY2tncm91bmQtcG9zaXRpb246IC02NHB4IC0yMnB4O1xcbn1cXG4ucmVhY3QtdGVsLWlucHV0IC5jaCB7XFxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAtODBweCAtMjJweDtcXG59XFxuLnJlYWN0LXRlbC1pbnB1dCAuY2kge1xcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogLTk2cHggLTIycHg7XFxufVxcbi5yZWFjdC10ZWwtaW5wdXQgLmNrIHtcXG4gIGJhY2tncm91bmQtcG9zaXRpb246IC0xMTJweCAtMjJweDtcXG59XFxuLnJlYWN0LXRlbC1pbnB1dCAuY2wge1xcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogLTEyOHB4IC0yMnB4O1xcbn1cXG4ucmVhY3QtdGVsLWlucHV0IC5jbSB7XFxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAtMTQ0cHggLTIycHg7XFxufVxcbi5yZWFjdC10ZWwtaW5wdXQgLmNuIHtcXG4gIGJhY2tncm91bmQtcG9zaXRpb246IC0xNjBweCAtMjJweDtcXG59XFxuLnJlYWN0LXRlbC1pbnB1dCAuY28ge1xcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogLTE3NnB4IC0yMnB4O1xcbn1cXG4ucmVhY3QtdGVsLWlucHV0IC5jciB7XFxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAtMTkycHggLTIycHg7XFxufVxcbi5yZWFjdC10ZWwtaW5wdXQgLmN1IHtcXG4gIGJhY2tncm91bmQtcG9zaXRpb246IC0yMDhweCAtMjJweDtcXG59XFxuLnJlYWN0LXRlbC1pbnB1dCAuY3Yge1xcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogLTIyNHB4IC0yMnB4O1xcbn1cXG4ucmVhY3QtdGVsLWlucHV0IC5jdyB7XFxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAtMjQwcHggLTIycHg7XFxufVxcbi5yZWFjdC10ZWwtaW5wdXQgLmN5IHtcXG4gIGJhY2tncm91bmQtcG9zaXRpb246IDAgLTMzcHg7XFxufVxcbi5yZWFjdC10ZWwtaW5wdXQgLmN6IHtcXG4gIGJhY2tncm91bmQtcG9zaXRpb246IC0xNnB4IC0zM3B4O1xcbn1cXG4ucmVhY3QtdGVsLWlucHV0IC5kZSB7XFxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAtMzJweCAtMzNweDtcXG59XFxuLnJlYWN0LXRlbC1pbnB1dCAuZGoge1xcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogLTQ4cHggLTMzcHg7XFxufVxcbi5yZWFjdC10ZWwtaW5wdXQgLmRrIHtcXG4gIGJhY2tncm91bmQtcG9zaXRpb246IC02NHB4IC0zM3B4O1xcbn1cXG4ucmVhY3QtdGVsLWlucHV0IC5kbSB7XFxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAtODBweCAtMzNweDtcXG59XFxuLnJlYWN0LXRlbC1pbnB1dCAuZG8ge1xcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogLTk2cHggLTMzcHg7XFxufVxcbi5yZWFjdC10ZWwtaW5wdXQgLmR6IHtcXG4gIGJhY2tncm91bmQtcG9zaXRpb246IC0xMTJweCAtMzNweDtcXG59XFxuLnJlYWN0LXRlbC1pbnB1dCAuZWMge1xcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogLTEyOHB4IC0zM3B4O1xcbn1cXG4ucmVhY3QtdGVsLWlucHV0IC5lZSB7XFxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAtMTQ0cHggLTMzcHg7XFxufVxcbi5yZWFjdC10ZWwtaW5wdXQgLmVnIHtcXG4gIGJhY2tncm91bmQtcG9zaXRpb246IC0xNjBweCAtMzNweDtcXG59XFxuLnJlYWN0LXRlbC1pbnB1dCAuZXIge1xcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogLTE3NnB4IC0zM3B4O1xcbn1cXG4ucmVhY3QtdGVsLWlucHV0IC5lcyB7XFxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAtMTkycHggLTMzcHg7XFxufVxcbi5yZWFjdC10ZWwtaW5wdXQgLmV0IHtcXG4gIGJhY2tncm91bmQtcG9zaXRpb246IC0yMDhweCAtMzNweDtcXG59XFxuLnJlYWN0LXRlbC1pbnB1dCAuZmkge1xcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogLTIyNHB4IC0zM3B4O1xcbn1cXG4ucmVhY3QtdGVsLWlucHV0IC5maiB7XFxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAtMjQwcHggLTMzcHg7XFxufVxcbi5yZWFjdC10ZWwtaW5wdXQgLmZrIHtcXG4gIGJhY2tncm91bmQtcG9zaXRpb246IDAgLTQ0cHg7XFxufVxcbi5yZWFjdC10ZWwtaW5wdXQgLmZtIHtcXG4gIGJhY2tncm91bmQtcG9zaXRpb246IC0xNnB4IC00NHB4O1xcbn1cXG4ucmVhY3QtdGVsLWlucHV0IC5mbyB7XFxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAtMzJweCAtNDRweDtcXG59XFxuLnJlYWN0LXRlbC1pbnB1dCAuZnIsXFxuLnJlYWN0LXRlbC1pbnB1dCAuYmwsXFxuLnJlYWN0LXRlbC1pbnB1dCAubWYge1xcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogLTQ4cHggLTQ0cHg7XFxufVxcbi5yZWFjdC10ZWwtaW5wdXQgLmdhIHtcXG4gIGJhY2tncm91bmQtcG9zaXRpb246IC02NHB4IC00NHB4O1xcbn1cXG4ucmVhY3QtdGVsLWlucHV0IC5nYiB7XFxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAtODBweCAtNDRweDtcXG59XFxuLnJlYWN0LXRlbC1pbnB1dCAuZ2Qge1xcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogLTk2cHggLTQ0cHg7XFxufVxcbi5yZWFjdC10ZWwtaW5wdXQgLmdlIHtcXG4gIGJhY2tncm91bmQtcG9zaXRpb246IC0xMTJweCAtNDRweDtcXG59XFxuLnJlYWN0LXRlbC1pbnB1dCAuZ2Yge1xcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogLTEyOHB4IC00NHB4O1xcbn1cXG4ucmVhY3QtdGVsLWlucHV0IC5naCB7XFxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAtMTQ0cHggLTQ0cHg7XFxufVxcbi5yZWFjdC10ZWwtaW5wdXQgLmdpIHtcXG4gIGJhY2tncm91bmQtcG9zaXRpb246IC0xNjBweCAtNDRweDtcXG59XFxuLnJlYWN0LXRlbC1pbnB1dCAuZ2wge1xcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogLTE3NnB4IC00NHB4O1xcbn1cXG4ucmVhY3QtdGVsLWlucHV0IC5nbSB7XFxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAtMTkycHggLTQ0cHg7XFxufVxcbi5yZWFjdC10ZWwtaW5wdXQgLmduIHtcXG4gIGJhY2tncm91bmQtcG9zaXRpb246IC0yMDhweCAtNDRweDtcXG59XFxuLnJlYWN0LXRlbC1pbnB1dCAuZ3Age1xcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogLTIyNHB4IC00NHB4O1xcbn1cXG4ucmVhY3QtdGVsLWlucHV0IC5ncSB7XFxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAtMjQwcHggLTQ0cHg7XFxufVxcbi5yZWFjdC10ZWwtaW5wdXQgLmdyIHtcXG4gIGJhY2tncm91bmQtcG9zaXRpb246IDAgLTU1cHg7XFxufVxcbi5yZWFjdC10ZWwtaW5wdXQgLmd0IHtcXG4gIGJhY2tncm91bmQtcG9zaXRpb246IC0xNnB4IC01NXB4O1xcbn1cXG4ucmVhY3QtdGVsLWlucHV0IC5ndSB7XFxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAtMzJweCAtNTVweDtcXG59XFxuLnJlYWN0LXRlbC1pbnB1dCAuZ3cge1xcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogLTQ4cHggLTU1cHg7XFxufVxcbi5yZWFjdC10ZWwtaW5wdXQgLmd5IHtcXG4gIGJhY2tncm91bmQtcG9zaXRpb246IC02NHB4IC01NXB4O1xcbn1cXG4ucmVhY3QtdGVsLWlucHV0IC5oayB7XFxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAtODBweCAtNTVweDtcXG59XFxuLnJlYWN0LXRlbC1pbnB1dCAuaG4ge1xcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogLTk2cHggLTU1cHg7XFxufVxcbi5yZWFjdC10ZWwtaW5wdXQgLmhyIHtcXG4gIGJhY2tncm91bmQtcG9zaXRpb246IC0xMTJweCAtNTVweDtcXG59XFxuLnJlYWN0LXRlbC1pbnB1dCAuaHQge1xcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogLTEyOHB4IC01NXB4O1xcbn1cXG4ucmVhY3QtdGVsLWlucHV0IC5odSB7XFxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAtMTQ0cHggLTU1cHg7XFxufVxcbi5yZWFjdC10ZWwtaW5wdXQgLmlkIHtcXG4gIGJhY2tncm91bmQtcG9zaXRpb246IC0xNjBweCAtNTVweDtcXG59XFxuLnJlYWN0LXRlbC1pbnB1dCAuaWUge1xcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogLTE3NnB4IC01NXB4O1xcbn1cXG4ucmVhY3QtdGVsLWlucHV0IC5pbCB7XFxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAtMTkycHggLTU1cHg7XFxufVxcbi5yZWFjdC10ZWwtaW5wdXQgLmluIHtcXG4gIGJhY2tncm91bmQtcG9zaXRpb246IC0yMDhweCAtNTVweDtcXG59XFxuLnJlYWN0LXRlbC1pbnB1dCAuaW8ge1xcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogLTIyNHB4IC01NXB4O1xcbn1cXG4ucmVhY3QtdGVsLWlucHV0IC5pcSB7XFxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAtMjQwcHggLTU1cHg7XFxufVxcbi5yZWFjdC10ZWwtaW5wdXQgLmlyIHtcXG4gIGJhY2tncm91bmQtcG9zaXRpb246IDAgLTY2cHg7XFxufVxcbi5yZWFjdC10ZWwtaW5wdXQgLmlzIHtcXG4gIGJhY2tncm91bmQtcG9zaXRpb246IC0xNnB4IC02NnB4O1xcbn1cXG4ucmVhY3QtdGVsLWlucHV0IC5pdCB7XFxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAtMzJweCAtNjZweDtcXG59XFxuLnJlYWN0LXRlbC1pbnB1dCAuam0ge1xcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogLTQ4cHggLTY2cHg7XFxufVxcbi5yZWFjdC10ZWwtaW5wdXQgLmpvIHtcXG4gIGJhY2tncm91bmQtcG9zaXRpb246IC02NHB4IC02NnB4O1xcbn1cXG4ucmVhY3QtdGVsLWlucHV0IC5qcCB7XFxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAtODBweCAtNjZweDtcXG59XFxuLnJlYWN0LXRlbC1pbnB1dCAua2Uge1xcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogLTk2cHggLTY2cHg7XFxufVxcbi5yZWFjdC10ZWwtaW5wdXQgLmtnIHtcXG4gIGJhY2tncm91bmQtcG9zaXRpb246IC0xMTJweCAtNjZweDtcXG59XFxuLnJlYWN0LXRlbC1pbnB1dCAua2gge1xcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogLTEyOHB4IC02NnB4O1xcbn1cXG4ucmVhY3QtdGVsLWlucHV0IC5raSB7XFxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAtMTQ0cHggLTY2cHg7XFxufVxcbi5yZWFjdC10ZWwtaW5wdXQgLmttIHtcXG4gIGJhY2tncm91bmQtcG9zaXRpb246IC0xNjBweCAtNjZweDtcXG59XFxuLnJlYWN0LXRlbC1pbnB1dCAua24ge1xcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogLTE3NnB4IC02NnB4O1xcbn1cXG4ucmVhY3QtdGVsLWlucHV0IC5rcCB7XFxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAtMTkycHggLTY2cHg7XFxufVxcbi5yZWFjdC10ZWwtaW5wdXQgLmtyIHtcXG4gIGJhY2tncm91bmQtcG9zaXRpb246IC0yMDhweCAtNjZweDtcXG59XFxuLnJlYWN0LXRlbC1pbnB1dCAua3cge1xcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogLTIyNHB4IC02NnB4O1xcbn1cXG4ucmVhY3QtdGVsLWlucHV0IC5reSB7XFxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAtMjQwcHggLTY2cHg7XFxufVxcbi5yZWFjdC10ZWwtaW5wdXQgLmt6IHtcXG4gIGJhY2tncm91bmQtcG9zaXRpb246IDAgLTc3cHg7XFxufVxcbi5yZWFjdC10ZWwtaW5wdXQgLmxhIHtcXG4gIGJhY2tncm91bmQtcG9zaXRpb246IC0xNnB4IC03N3B4O1xcbn1cXG4ucmVhY3QtdGVsLWlucHV0IC5sYiB7XFxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAtMzJweCAtNzdweDtcXG59XFxuLnJlYWN0LXRlbC1pbnB1dCAubGMge1xcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogLTQ4cHggLTc3cHg7XFxufVxcbi5yZWFjdC10ZWwtaW5wdXQgLmxpIHtcXG4gIGJhY2tncm91bmQtcG9zaXRpb246IC02NHB4IC03N3B4O1xcbn1cXG4ucmVhY3QtdGVsLWlucHV0IC5sayB7XFxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAtODBweCAtNzdweDtcXG59XFxuLnJlYWN0LXRlbC1pbnB1dCAubHIge1xcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogLTk2cHggLTc3cHg7XFxufVxcbi5yZWFjdC10ZWwtaW5wdXQgLmxzIHtcXG4gIGJhY2tncm91bmQtcG9zaXRpb246IC0xMTJweCAtNzdweDtcXG59XFxuLnJlYWN0LXRlbC1pbnB1dCAubHQge1xcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogLTEyOHB4IC03N3B4O1xcbn1cXG4ucmVhY3QtdGVsLWlucHV0IC5sdSB7XFxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAtMTQ0cHggLTc3cHg7XFxufVxcbi5yZWFjdC10ZWwtaW5wdXQgLmx2IHtcXG4gIGJhY2tncm91bmQtcG9zaXRpb246IC0xNjBweCAtNzdweDtcXG59XFxuLnJlYWN0LXRlbC1pbnB1dCAubHkge1xcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogLTE3NnB4IC03N3B4O1xcbn1cXG4ucmVhY3QtdGVsLWlucHV0IC5tYSB7XFxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAtMTkycHggLTc3cHg7XFxufVxcbi5yZWFjdC10ZWwtaW5wdXQgLm1jIHtcXG4gIGJhY2tncm91bmQtcG9zaXRpb246IC0yMDhweCAtNzdweDtcXG59XFxuLnJlYWN0LXRlbC1pbnB1dCAubWQge1xcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogLTIyNHB4IC03N3B4O1xcbn1cXG4ucmVhY3QtdGVsLWlucHV0IC5tZSB7XFxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAtMTEycHggLTE1NHB4O1xcbiAgaGVpZ2h0OiAxMnB4O1xcbn1cXG4ucmVhY3QtdGVsLWlucHV0IC5tZyB7XFxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAwIC04OHB4O1xcbn1cXG4ucmVhY3QtdGVsLWlucHV0IC5taCB7XFxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAtMTZweCAtODhweDtcXG59XFxuLnJlYWN0LXRlbC1pbnB1dCAubWsge1xcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogLTMycHggLTg4cHg7XFxufVxcbi5yZWFjdC10ZWwtaW5wdXQgLm1sIHtcXG4gIGJhY2tncm91bmQtcG9zaXRpb246IC00OHB4IC04OHB4O1xcbn1cXG4ucmVhY3QtdGVsLWlucHV0IC5tbSB7XFxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAtNjRweCAtODhweDtcXG59XFxuLnJlYWN0LXRlbC1pbnB1dCAubW4ge1xcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogLTgwcHggLTg4cHg7XFxufVxcbi5yZWFjdC10ZWwtaW5wdXQgLm1vIHtcXG4gIGJhY2tncm91bmQtcG9zaXRpb246IC05NnB4IC04OHB4O1xcbn1cXG4ucmVhY3QtdGVsLWlucHV0IC5tcCB7XFxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAtMTEycHggLTg4cHg7XFxufVxcbi5yZWFjdC10ZWwtaW5wdXQgLm1xIHtcXG4gIGJhY2tncm91bmQtcG9zaXRpb246IC0xMjhweCAtODhweDtcXG59XFxuLnJlYWN0LXRlbC1pbnB1dCAubXIge1xcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogLTE0NHB4IC04OHB4O1xcbn1cXG4ucmVhY3QtdGVsLWlucHV0IC5tcyB7XFxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAtMTYwcHggLTg4cHg7XFxufVxcbi5yZWFjdC10ZWwtaW5wdXQgLm10IHtcXG4gIGJhY2tncm91bmQtcG9zaXRpb246IC0xNzZweCAtODhweDtcXG59XFxuLnJlYWN0LXRlbC1pbnB1dCAubXUge1xcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogLTE5MnB4IC04OHB4O1xcbn1cXG4ucmVhY3QtdGVsLWlucHV0IC5tdiB7XFxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAtMjA4cHggLTg4cHg7XFxufVxcbi5yZWFjdC10ZWwtaW5wdXQgLm13IHtcXG4gIGJhY2tncm91bmQtcG9zaXRpb246IC0yMjRweCAtODhweDtcXG59XFxuLnJlYWN0LXRlbC1pbnB1dCAubXgge1xcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogLTI0MHB4IC04OHB4O1xcbn1cXG4ucmVhY3QtdGVsLWlucHV0IC5teSB7XFxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAwIC05OXB4O1xcbn1cXG4ucmVhY3QtdGVsLWlucHV0IC5teiB7XFxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAtMTZweCAtOTlweDtcXG59XFxuLnJlYWN0LXRlbC1pbnB1dCAubmEge1xcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogLTMycHggLTk5cHg7XFxufVxcbi5yZWFjdC10ZWwtaW5wdXQgLm5jIHtcXG4gIGJhY2tncm91bmQtcG9zaXRpb246IC00OHB4IC05OXB4O1xcbn1cXG4ucmVhY3QtdGVsLWlucHV0IC5uZSB7XFxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAtNjRweCAtOTlweDtcXG59XFxuLnJlYWN0LXRlbC1pbnB1dCAubmYge1xcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogLTgwcHggLTk5cHg7XFxufVxcbi5yZWFjdC10ZWwtaW5wdXQgLm5nIHtcXG4gIGJhY2tncm91bmQtcG9zaXRpb246IC05NnB4IC05OXB4O1xcbn1cXG4ucmVhY3QtdGVsLWlucHV0IC5uaSB7XFxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAtMTEycHggLTk5cHg7XFxufVxcbi5yZWFjdC10ZWwtaW5wdXQgLm5sLFxcbi5yZWFjdC10ZWwtaW5wdXQgLmJxIHtcXG4gIGJhY2tncm91bmQtcG9zaXRpb246IC0xMjhweCAtOTlweDtcXG59XFxuLnJlYWN0LXRlbC1pbnB1dCAubm8ge1xcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogLTE0NHB4IC05OXB4O1xcbn1cXG4ucmVhY3QtdGVsLWlucHV0IC5ucCB7XFxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAtMTYwcHggLTk5cHg7XFxufVxcbi5yZWFjdC10ZWwtaW5wdXQgLm5yIHtcXG4gIGJhY2tncm91bmQtcG9zaXRpb246IC0xNzZweCAtOTlweDtcXG59XFxuLnJlYWN0LXRlbC1pbnB1dCAubnUge1xcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogLTE5MnB4IC05OXB4O1xcbn1cXG4ucmVhY3QtdGVsLWlucHV0IC5ueiB7XFxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAtMjA4cHggLTk5cHg7XFxufVxcbi5yZWFjdC10ZWwtaW5wdXQgLm9tIHtcXG4gIGJhY2tncm91bmQtcG9zaXRpb246IC0yMjRweCAtOTlweDtcXG59XFxuLnJlYWN0LXRlbC1pbnB1dCAucGEge1xcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogLTI0MHB4IC05OXB4O1xcbn1cXG4ucmVhY3QtdGVsLWlucHV0IC5wZSB7XFxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAwIC0xMTBweDtcXG59XFxuLnJlYWN0LXRlbC1pbnB1dCAucGYge1xcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogLTE2cHggLTExMHB4O1xcbn1cXG4ucmVhY3QtdGVsLWlucHV0IC5wZyB7XFxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAtMzJweCAtMTEwcHg7XFxufVxcbi5yZWFjdC10ZWwtaW5wdXQgLnBoIHtcXG4gIGJhY2tncm91bmQtcG9zaXRpb246IC00OHB4IC0xMTBweDtcXG59XFxuLnJlYWN0LXRlbC1pbnB1dCAucGsge1xcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogLTY0cHggLTExMHB4O1xcbn1cXG4ucmVhY3QtdGVsLWlucHV0IC5wbCB7XFxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAtODBweCAtMTEwcHg7XFxufVxcbi5yZWFjdC10ZWwtaW5wdXQgLnBtIHtcXG4gIGJhY2tncm91bmQtcG9zaXRpb246IC05NnB4IC0xMTBweDtcXG59XFxuLnJlYWN0LXRlbC1pbnB1dCAucHIge1xcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogLTExMnB4IC0xMTBweDtcXG59XFxuLnJlYWN0LXRlbC1pbnB1dCAucHMge1xcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogLTEyOHB4IC0xMTBweDtcXG59XFxuLnJlYWN0LXRlbC1pbnB1dCAucHQge1xcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogLTE0NHB4IC0xMTBweDtcXG59XFxuLnJlYWN0LXRlbC1pbnB1dCAucHcge1xcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogLTE2MHB4IC0xMTBweDtcXG59XFxuLnJlYWN0LXRlbC1pbnB1dCAucHkge1xcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogLTE3NnB4IC0xMTBweDtcXG59XFxuLnJlYWN0LXRlbC1pbnB1dCAucWEge1xcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogLTE5MnB4IC0xMTBweDtcXG59XFxuLnJlYWN0LXRlbC1pbnB1dCAucmUge1xcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogLTIwOHB4IC0xMTBweDtcXG59XFxuLnJlYWN0LXRlbC1pbnB1dCAucm8ge1xcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogLTIyNHB4IC0xMTBweDtcXG59XFxuLnJlYWN0LXRlbC1pbnB1dCAucnMge1xcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogLTI0MHB4IC0xMTBweDtcXG59XFxuLnJlYWN0LXRlbC1pbnB1dCAucnUge1xcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogMCAtMTIxcHg7XFxufVxcbi5yZWFjdC10ZWwtaW5wdXQgLnJ3IHtcXG4gIGJhY2tncm91bmQtcG9zaXRpb246IC0xNnB4IC0xMjFweDtcXG59XFxuLnJlYWN0LXRlbC1pbnB1dCAuc2Ege1xcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogLTMycHggLTEyMXB4O1xcbn1cXG4ucmVhY3QtdGVsLWlucHV0IC5zYiB7XFxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAtNDhweCAtMTIxcHg7XFxufVxcbi5yZWFjdC10ZWwtaW5wdXQgLnNjIHtcXG4gIGJhY2tncm91bmQtcG9zaXRpb246IC02NHB4IC0xMjFweDtcXG59XFxuLnJlYWN0LXRlbC1pbnB1dCAuc2Qge1xcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogLTgwcHggLTEyMXB4O1xcbn1cXG4ucmVhY3QtdGVsLWlucHV0IC5zZSB7XFxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAtOTZweCAtMTIxcHg7XFxufVxcbi5yZWFjdC10ZWwtaW5wdXQgLnNnIHtcXG4gIGJhY2tncm91bmQtcG9zaXRpb246IC0xMTJweCAtMTIxcHg7XFxufVxcbi5yZWFjdC10ZWwtaW5wdXQgLnNoIHtcXG4gIGJhY2tncm91bmQtcG9zaXRpb246IC0xMjhweCAtMTIxcHg7XFxufVxcbi5yZWFjdC10ZWwtaW5wdXQgLnNpIHtcXG4gIGJhY2tncm91bmQtcG9zaXRpb246IC0xNDRweCAtMTIxcHg7XFxufVxcbi5yZWFjdC10ZWwtaW5wdXQgLnNrIHtcXG4gIGJhY2tncm91bmQtcG9zaXRpb246IC0xNjBweCAtMTIxcHg7XFxufVxcbi5yZWFjdC10ZWwtaW5wdXQgLnNsIHtcXG4gIGJhY2tncm91bmQtcG9zaXRpb246IC0xNzZweCAtMTIxcHg7XFxufVxcbi5yZWFjdC10ZWwtaW5wdXQgLnNtIHtcXG4gIGJhY2tncm91bmQtcG9zaXRpb246IC0xOTJweCAtMTIxcHg7XFxufVxcbi5yZWFjdC10ZWwtaW5wdXQgLnNuIHtcXG4gIGJhY2tncm91bmQtcG9zaXRpb246IC0yMDhweCAtMTIxcHg7XFxufVxcbi5yZWFjdC10ZWwtaW5wdXQgLnNvIHtcXG4gIGJhY2tncm91bmQtcG9zaXRpb246IC0yMjRweCAtMTIxcHg7XFxufVxcbi5yZWFjdC10ZWwtaW5wdXQgLnNyIHtcXG4gIGJhY2tncm91bmQtcG9zaXRpb246IC0yNDBweCAtMTIxcHg7XFxufVxcbi5yZWFjdC10ZWwtaW5wdXQgLnNzIHtcXG4gIGJhY2tncm91bmQtcG9zaXRpb246IDAgLTEzMnB4O1xcbn1cXG4ucmVhY3QtdGVsLWlucHV0IC5zdCB7XFxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAtMTZweCAtMTMycHg7XFxufVxcbi5yZWFjdC10ZWwtaW5wdXQgLnN2IHtcXG4gIGJhY2tncm91bmQtcG9zaXRpb246IC0zMnB4IC0xMzJweDtcXG59XFxuLnJlYWN0LXRlbC1pbnB1dCAuc3gge1xcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogLTQ4cHggLTEzMnB4O1xcbn1cXG4ucmVhY3QtdGVsLWlucHV0IC5zeSB7XFxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAtNjRweCAtMTMycHg7XFxufVxcbi5yZWFjdC10ZWwtaW5wdXQgLnN6IHtcXG4gIGJhY2tncm91bmQtcG9zaXRpb246IC04MHB4IC0xMzJweDtcXG59XFxuLnJlYWN0LXRlbC1pbnB1dCAudGMge1xcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogLTk2cHggLTEzMnB4O1xcbn1cXG4ucmVhY3QtdGVsLWlucHV0IC50ZCB7XFxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAtMTEycHggLTEzMnB4O1xcbn1cXG4ucmVhY3QtdGVsLWlucHV0IC50ZyB7XFxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAtMTI4cHggLTEzMnB4O1xcbn1cXG4ucmVhY3QtdGVsLWlucHV0IC50aCB7XFxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAtMTQ0cHggLTEzMnB4O1xcbn1cXG4ucmVhY3QtdGVsLWlucHV0IC50aiB7XFxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAtMTYwcHggLTEzMnB4O1xcbn1cXG4ucmVhY3QtdGVsLWlucHV0IC50ayB7XFxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAtMTc2cHggLTEzMnB4O1xcbn1cXG4ucmVhY3QtdGVsLWlucHV0IC50bCB7XFxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAtMTkycHggLTEzMnB4O1xcbn1cXG4ucmVhY3QtdGVsLWlucHV0IC50bSB7XFxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAtMjA4cHggLTEzMnB4O1xcbn1cXG4ucmVhY3QtdGVsLWlucHV0IC50biB7XFxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAtMjI0cHggLTEzMnB4O1xcbn1cXG4ucmVhY3QtdGVsLWlucHV0IC50byB7XFxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAtMjQwcHggLTEzMnB4O1xcbn1cXG4ucmVhY3QtdGVsLWlucHV0IC50ciB7XFxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAwIC0xNDNweDtcXG59XFxuLnJlYWN0LXRlbC1pbnB1dCAudHQge1xcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogLTE2cHggLTE0M3B4O1xcbn1cXG4ucmVhY3QtdGVsLWlucHV0IC50diB7XFxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAtMzJweCAtMTQzcHg7XFxufVxcbi5yZWFjdC10ZWwtaW5wdXQgLnR3IHtcXG4gIGJhY2tncm91bmQtcG9zaXRpb246IC00OHB4IC0xNDNweDtcXG59XFxuLnJlYWN0LXRlbC1pbnB1dCAudHoge1xcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogLTY0cHggLTE0M3B4O1xcbn1cXG4ucmVhY3QtdGVsLWlucHV0IC51YSB7XFxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAtODBweCAtMTQzcHg7XFxufVxcbi5yZWFjdC10ZWwtaW5wdXQgLnVnIHtcXG4gIGJhY2tncm91bmQtcG9zaXRpb246IC05NnB4IC0xNDNweDtcXG59XFxuLnJlYWN0LXRlbC1pbnB1dCAudXMge1xcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogLTExMnB4IC0xNDNweDtcXG59XFxuLnJlYWN0LXRlbC1pbnB1dCAudXkge1xcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogLTEyOHB4IC0xNDNweDtcXG59XFxuLnJlYWN0LXRlbC1pbnB1dCAudXoge1xcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogLTE0NHB4IC0xNDNweDtcXG59XFxuLnJlYWN0LXRlbC1pbnB1dCAudmEge1xcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogLTE2MHB4IC0xNDNweDtcXG59XFxuLnJlYWN0LXRlbC1pbnB1dCAudmMge1xcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogLTE3NnB4IC0xNDNweDtcXG59XFxuLnJlYWN0LXRlbC1pbnB1dCAudmUge1xcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogLTE5MnB4IC0xNDNweDtcXG59XFxuLnJlYWN0LXRlbC1pbnB1dCAudmcge1xcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogLTIwOHB4IC0xNDNweDtcXG59XFxuLnJlYWN0LXRlbC1pbnB1dCAudmkge1xcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogLTIyNHB4IC0xNDNweDtcXG59XFxuLnJlYWN0LXRlbC1pbnB1dCAudm4ge1xcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogLTI0MHB4IC0xNDNweDtcXG59XFxuLnJlYWN0LXRlbC1pbnB1dCAudnUge1xcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogMCAtMTU0cHg7XFxufVxcbi5yZWFjdC10ZWwtaW5wdXQgLndmIHtcXG4gIGJhY2tncm91bmQtcG9zaXRpb246IC0xNnB4IC0xNTRweDtcXG59XFxuLnJlYWN0LXRlbC1pbnB1dCAud3Mge1xcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogLTMycHggLTE1NHB4O1xcbn1cXG4ucmVhY3QtdGVsLWlucHV0IC55ZSB7XFxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAtNDhweCAtMTU0cHg7XFxufVxcbi5yZWFjdC10ZWwtaW5wdXQgLnphIHtcXG4gIGJhY2tncm91bmQtcG9zaXRpb246IC02NHB4IC0xNTRweDtcXG59XFxuLnJlYWN0LXRlbC1pbnB1dCAuem0ge1xcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogLTgwcHggLTE1NHB4O1xcbn1cXG4ucmVhY3QtdGVsLWlucHV0IC56dyB7XFxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAtOTZweCAtMTU0cHg7XFxufVxcbi5yZWFjdC10ZWwtaW5wdXQgKiB7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgLW1vei1ib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbn1cXG4ucmVhY3QtdGVsLWlucHV0IC5oaWRlIHtcXG4gIGRpc3BsYXk6IG5vbmU7XFxufVxcbi5yZWFjdC10ZWwtaW5wdXQgLnYtaGlkZSB7XFxuICB2aXNpYmlsaXR5OiBoaWRkZW47XFxufVxcbi5yZWFjdC10ZWwtaW5wdXQgaW5wdXRbdHlwZT10ZXh0XSxcXG4ucmVhY3QtdGVsLWlucHV0IGlucHV0W3R5cGU9dGVsXSB7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICB6LWluZGV4OiAwO1xcbiAgbWFyZ2luLXRvcDogMCAhaW1wb3J0YW50O1xcbiAgbWFyZ2luLWJvdHRvbTogMCAhaW1wb3J0YW50O1xcbiAgcGFkZGluZy1sZWZ0OiA0NHB4O1xcbiAgbWFyZ2luLWxlZnQ6IDA7XFxuICBiYWNrZ3JvdW5kOiAjRkZGRkZGO1xcbiAgYm9yZGVyOiAxcHggc29saWQgI0NBQ0FDQTtcXG4gIGJvcmRlci1yYWRpdXM6IDNweDtcXG4gIGJveC1zaGFkb3c6IDAgMXB4IDJweCAjRTNFM0UzIGluc2V0O1xcbiAgbGluZS1oZWlnaHQ6IDI1cHg7XFxuICBoZWlnaHQ6IDI4cHg7XFxuICB3aWR0aDogMTAwJTtcXG59XFxuLnJlYWN0LXRlbC1pbnB1dCBpbnB1dFt0eXBlPXRleHRdOmZvY3VzLFxcbi5yZWFjdC10ZWwtaW5wdXQgaW5wdXRbdHlwZT10ZWxdOmZvY3VzIHtcXG4gIGJvcmRlci1jb2xvcjogIzQyYmRmZjtcXG4gIGJvcmRlci1sZWZ0LWNvbG9yOiAjY2FjYWNhO1xcbn1cXG4ucmVhY3QtdGVsLWlucHV0IGlucHV0W3R5cGU9dGV4dF0uaW52YWxpZC1udW1iZXIsXFxuLnJlYWN0LXRlbC1pbnB1dCBpbnB1dFt0eXBlPXRlbF0uaW52YWxpZC1udW1iZXIge1xcbiAgYm9yZGVyOiAxcHggc29saWQgI2Q3OWY5ZjtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNGQUYwRjA7XFxuICBib3JkZXItbGVmdC1jb2xvcjogI2NhY2FjYTtcXG59XFxuLnJlYWN0LXRlbC1pbnB1dCBpbnB1dFt0eXBlPXRleHRdLmludmFsaWQtbnVtYmVyOmZvY3VzLFxcbi5yZWFjdC10ZWwtaW5wdXQgaW5wdXRbdHlwZT10ZWxdLmludmFsaWQtbnVtYmVyOmZvY3VzIHtcXG4gIGJvcmRlcjogMXB4IHNvbGlkICNkNzlmOWY7XFxuICBib3JkZXItbGVmdC1jb2xvcjogI2NhY2FjYTtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNGQUYwRjA7XFxufVxcbi5yZWFjdC10ZWwtaW5wdXQgLmZsYWctZHJvcGRvd24ge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgdG9wOiAwO1xcbiAgYm90dG9tOiAwO1xcbiAgcGFkZGluZzogMDtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNlYWVhZWE7XFxuICBib3JkZXI6IDFweCBzb2xpZCAjY2FjYWNhO1xcbiAgYm9yZGVyLXJhZGl1czogM3B4IDAgMCAzcHg7XFxufVxcbi5yZWFjdC10ZWwtaW5wdXQgLmZsYWctZHJvcGRvd24ub3Blbi1kcm9wZG93biB7XFxuICBiYWNrZ3JvdW5kOiAjZmZmO1xcbiAgYm9yZGVyLWJvdHRvbTogMDtcXG4gIGJvcmRlci1yYWRpdXM6IDNweCAwIDAgMDtcXG59XFxuLnJlYWN0LXRlbC1pbnB1dCAuZmxhZy1kcm9wZG93bi5vcGVuLWRyb3Bkb3duIC5zZWxlY3RlZC1mbGFnIHtcXG4gIGJhY2tncm91bmQ6ICNmZmY7XFxuICBib3JkZXItcmFkaXVzOiAzcHggMCAwIDA7XFxufVxcbi5yZWFjdC10ZWwtaW5wdXQgLmZsYWctZHJvcGRvd246aG92ZXIge1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG4ucmVhY3QtdGVsLWlucHV0IC5mbGFnLWRyb3Bkb3duOmhvdmVyIC5zZWxlY3RlZC1mbGFnIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XFxufVxcbi5yZWFjdC10ZWwtaW5wdXQgaW5wdXRbZGlzYWJsZWRdICsgLmZsYWctZHJvcGRvd246aG92ZXIge1xcbiAgY3Vyc29yOiBkZWZhdWx0O1xcbn1cXG4ucmVhY3QtdGVsLWlucHV0IGlucHV0W2Rpc2FibGVkXSArIC5mbGFnLWRyb3Bkb3duOmhvdmVyIC5zZWxlY3RlZC1mbGFnIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcbn1cXG4ucmVhY3QtdGVsLWlucHV0IC5zZWxlY3RlZC1mbGFnIHtcXG4gIHotaW5kZXg6IDEzO1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgd2lkdGg6IDM4cHg7XFxuICBoZWlnaHQ6IDI2cHg7XFxuICBwYWRkaW5nOiAwIDAgMCA4cHg7XFxuICBib3JkZXItcmFkaXVzOiAzcHggMCAwIDNweDtcXG59XFxuLnJlYWN0LXRlbC1pbnB1dCAuc2VsZWN0ZWQtZmxhZyAuZmxhZyB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB0b3A6IDUwJTtcXG4gIG1hcmdpbi10b3A6IC01cHg7XFxufVxcbi5yZWFjdC10ZWwtaW5wdXQgLnNlbGVjdGVkLWZsYWcgLmFycm93IHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIHRvcDogNTAlO1xcbiAgbWFyZ2luLXRvcDogLTJweDtcXG4gIGxlZnQ6IDIwcHg7XFxuICB3aWR0aDogMDtcXG4gIGhlaWdodDogMDtcXG4gIGJvcmRlci1sZWZ0OiAzcHggc29saWQgdHJhbnNwYXJlbnQ7XFxuICBib3JkZXItcmlnaHQ6IDNweCBzb2xpZCB0cmFuc3BhcmVudDtcXG4gIGJvcmRlci10b3A6IDRweCBzb2xpZCAjNTU1O1xcbn1cXG4ucmVhY3QtdGVsLWlucHV0IC5zZWxlY3RlZC1mbGFnIC5hcnJvdy51cCB7XFxuICBib3JkZXItdG9wOiBub25lO1xcbiAgYm9yZGVyLWJvdHRvbTogNHB4IHNvbGlkICM1NTU7XFxufVxcbi5yZWFjdC10ZWwtaW5wdXQgLmNvdW50cnktbGlzdCB7XFxuICBsaXN0LXN0eWxlOiBub25lO1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgei1pbmRleDogMjtcXG4gIHBhZGRpbmc6IDA7XFxuICBtYXJnaW46IC0xcHggMCAwIC0xcHg7XFxuICBib3gtc2hhZG93OiAxcHggMXB4IDRweCByZ2JhKDAsIDAsIDAsIDAuMik7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gIGJvcmRlcjogMXB4IHNvbGlkICNjY2M7XFxuICB3aWR0aDogNDAwcHg7XFxuICBtYXgtaGVpZ2h0OiAyMDBweDtcXG4gIG92ZXJmbG93LXk6IHNjcm9sbDtcXG4gIGJvcmRlci1yYWRpdXM6IDAgMCAzcHggM3B4O1xcbiAgdG9wOiAyNnB4O1xcbn1cXG4ucmVhY3QtdGVsLWlucHV0IC5jb3VudHJ5LWxpc3QgLmZsYWcge1xcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbn1cXG4ucmVhY3QtdGVsLWlucHV0IC5jb3VudHJ5LWxpc3QgLmRpdmlkZXIge1xcbiAgcGFkZGluZy1ib3R0b206IDVweDtcXG4gIG1hcmdpbi1ib3R0b206IDVweDtcXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjY2NjO1xcbn1cXG4ucmVhY3QtdGVsLWlucHV0IC5jb3VudHJ5LWxpc3QgLmNvdW50cnkge1xcbiAgcGFkZGluZzogNXB4IDEwcHg7XFxufVxcbi5yZWFjdC10ZWwtaW5wdXQgLmNvdW50cnktbGlzdCAuY291bnRyeSAuZGlhbC1jb2RlIHtcXG4gIGNvbG9yOiAjOTk5O1xcbn1cXG4ucmVhY3QtdGVsLWlucHV0IC5jb3VudHJ5LWxpc3QgLmNvdW50cnk6aG92ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2U4ZjdmZTtcXG59XFxuLnJlYWN0LXRlbC1pbnB1dCAuY291bnRyeS1saXN0IC5jb3VudHJ5LmhpZ2hsaWdodCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjYzdlMmYxO1xcbn1cXG4ucmVhY3QtdGVsLWlucHV0IC5jb3VudHJ5LWxpc3QgLmZsYWcge1xcbiAgbWFyZ2luLXJpZ2h0OiA2cHg7XFxuICBtYXJnaW4tdG9wOiAycHg7XFxufVxcbi5yZWFjdC10ZWwtaW5wdXQgLmNvdW50cnktbGlzdCAuY291bnRyeS1uYW1lIHtcXG4gIG1hcmdpbi1yaWdodDogNnB4O1xcbn1cXG5cIjsocmVxdWlyZSgnbGVzc2lmeScpKShjc3MpOyBtb2R1bGUuZXhwb3J0cyA9IGNzczsiLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3MsIGN1c3RvbURvY3VtZW50KSB7XG4gIHZhciBkb2MgPSBjdXN0b21Eb2N1bWVudCB8fCBkb2N1bWVudDtcbiAgaWYgKGRvYy5jcmVhdGVTdHlsZVNoZWV0KSB7XG4gICAgdmFyIHNoZWV0ID0gZG9jLmNyZWF0ZVN0eWxlU2hlZXQoKVxuICAgIHNoZWV0LmNzc1RleHQgPSBjc3M7XG4gICAgcmV0dXJuIHNoZWV0Lm93bmVyTm9kZTtcbiAgfSBlbHNlIHtcbiAgICB2YXIgaGVhZCA9IGRvYy5nZXRFbGVtZW50c0J5VGFnTmFtZSgnaGVhZCcpWzBdLFxuICAgICAgICBzdHlsZSA9IGRvYy5jcmVhdGVFbGVtZW50KCdzdHlsZScpO1xuXG4gICAgc3R5bGUudHlwZSA9ICd0ZXh0L2Nzcyc7XG5cbiAgICBpZiAoc3R5bGUuc3R5bGVTaGVldCkge1xuICAgICAgc3R5bGUuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICAgIH0gZWxzZSB7XG4gICAgICBzdHlsZS5hcHBlbmRDaGlsZChkb2MuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gICAgfVxuXG4gICAgaGVhZC5hcHBlbmRDaGlsZChzdHlsZSk7XG4gICAgcmV0dXJuIHN0eWxlO1xuICB9XG59O1xuXG5tb2R1bGUuZXhwb3J0cy5ieVVybCA9IGZ1bmN0aW9uKHVybCkge1xuICBpZiAoZG9jdW1lbnQuY3JlYXRlU3R5bGVTaGVldCkge1xuICAgIHJldHVybiBkb2N1bWVudC5jcmVhdGVTdHlsZVNoZWV0KHVybCkub3duZXJOb2RlO1xuICB9IGVsc2Uge1xuICAgIHZhciBoZWFkID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ2hlYWQnKVswXSxcbiAgICAgICAgbGluayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpbmsnKTtcblxuICAgIGxpbmsucmVsID0gJ3N0eWxlc2hlZXQnO1xuICAgIGxpbmsuaHJlZiA9IHVybDtcblxuICAgIGhlYWQuYXBwZW5kQ2hpbGQobGluayk7XG4gICAgcmV0dXJuIGxpbms7XG4gIH1cbn07XG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJ2Nzc2lmeScpO1xuIiwidmFyIGJhc2VTbGljZSA9IHJlcXVpcmUoJy4uL2ludGVybmFsL2Jhc2VTbGljZScpLFxuICAgIGlzSXRlcmF0ZWVDYWxsID0gcmVxdWlyZSgnLi4vaW50ZXJuYWwvaXNJdGVyYXRlZUNhbGwnKTtcblxuLyoqXG4gKiBDcmVhdGVzIGEgc2xpY2Ugb2YgYGFycmF5YCB3aXRoIGBuYCBlbGVtZW50cyBkcm9wcGVkIGZyb20gdGhlIGJlZ2lubmluZy5cbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQGNhdGVnb3J5IEFycmF5XG4gKiBAcGFyYW0ge0FycmF5fSBhcnJheSBUaGUgYXJyYXkgdG8gcXVlcnkuXG4gKiBAcGFyYW0ge251bWJlcn0gW249MV0gVGhlIG51bWJlciBvZiBlbGVtZW50cyB0byBkcm9wLlxuICogQHBhcmFtLSB7T2JqZWN0fSBbZ3VhcmRdIEVuYWJsZXMgdXNlIGFzIGEgY2FsbGJhY2sgZm9yIGZ1bmN0aW9ucyBsaWtlIGBfLm1hcGAuXG4gKiBAcmV0dXJucyB7QXJyYXl9IFJldHVybnMgdGhlIHNsaWNlIG9mIGBhcnJheWAuXG4gKiBAZXhhbXBsZVxuICpcbiAqIF8uZHJvcChbMSwgMiwgM10pO1xuICogLy8gPT4gWzIsIDNdXG4gKlxuICogXy5kcm9wKFsxLCAyLCAzXSwgMik7XG4gKiAvLyA9PiBbM11cbiAqXG4gKiBfLmRyb3AoWzEsIDIsIDNdLCA1KTtcbiAqIC8vID0+IFtdXG4gKlxuICogXy5kcm9wKFsxLCAyLCAzXSwgMCk7XG4gKiAvLyA9PiBbMSwgMiwgM11cbiAqL1xuZnVuY3Rpb24gZHJvcChhcnJheSwgbiwgZ3VhcmQpIHtcbiAgdmFyIGxlbmd0aCA9IGFycmF5ID8gYXJyYXkubGVuZ3RoIDogMDtcbiAgaWYgKCFsZW5ndGgpIHtcbiAgICByZXR1cm4gW107XG4gIH1cbiAgaWYgKGd1YXJkID8gaXNJdGVyYXRlZUNhbGwoYXJyYXksIG4sIGd1YXJkKSA6IG4gPT0gbnVsbCkge1xuICAgIG4gPSAxO1xuICB9XG4gIHJldHVybiBiYXNlU2xpY2UoYXJyYXksIG4gPCAwID8gMCA6IG4pO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRyb3A7XG4iLCJ2YXIgY3JlYXRlRmluZEluZGV4ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWwvY3JlYXRlRmluZEluZGV4Jyk7XG5cbi8qKlxuICogVGhpcyBtZXRob2QgaXMgbGlrZSBgXy5maW5kYCBleGNlcHQgdGhhdCBpdCByZXR1cm5zIHRoZSBpbmRleCBvZiB0aGUgZmlyc3RcbiAqIGVsZW1lbnQgYHByZWRpY2F0ZWAgcmV0dXJucyB0cnV0aHkgZm9yIGluc3RlYWQgb2YgdGhlIGVsZW1lbnQgaXRzZWxmLlxuICpcbiAqIElmIGEgcHJvcGVydHkgbmFtZSBpcyBwcm92aWRlZCBmb3IgYHByZWRpY2F0ZWAgdGhlIGNyZWF0ZWQgYF8ucHJvcGVydHlgXG4gKiBzdHlsZSBjYWxsYmFjayByZXR1cm5zIHRoZSBwcm9wZXJ0eSB2YWx1ZSBvZiB0aGUgZ2l2ZW4gZWxlbWVudC5cbiAqXG4gKiBJZiBhIHZhbHVlIGlzIGFsc28gcHJvdmlkZWQgZm9yIGB0aGlzQXJnYCB0aGUgY3JlYXRlZCBgXy5tYXRjaGVzUHJvcGVydHlgXG4gKiBzdHlsZSBjYWxsYmFjayByZXR1cm5zIGB0cnVlYCBmb3IgZWxlbWVudHMgdGhhdCBoYXZlIGEgbWF0Y2hpbmcgcHJvcGVydHlcbiAqIHZhbHVlLCBlbHNlIGBmYWxzZWAuXG4gKlxuICogSWYgYW4gb2JqZWN0IGlzIHByb3ZpZGVkIGZvciBgcHJlZGljYXRlYCB0aGUgY3JlYXRlZCBgXy5tYXRjaGVzYCBzdHlsZVxuICogY2FsbGJhY2sgcmV0dXJucyBgdHJ1ZWAgZm9yIGVsZW1lbnRzIHRoYXQgaGF2ZSB0aGUgcHJvcGVydGllcyBvZiB0aGUgZ2l2ZW5cbiAqIG9iamVjdCwgZWxzZSBgZmFsc2VgLlxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAY2F0ZWdvcnkgQXJyYXlcbiAqIEBwYXJhbSB7QXJyYXl9IGFycmF5IFRoZSBhcnJheSB0byBzZWFyY2guXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufE9iamVjdHxzdHJpbmd9IFtwcmVkaWNhdGU9Xy5pZGVudGl0eV0gVGhlIGZ1bmN0aW9uIGludm9rZWRcbiAqICBwZXIgaXRlcmF0aW9uLlxuICogQHBhcmFtIHsqfSBbdGhpc0FyZ10gVGhlIGB0aGlzYCBiaW5kaW5nIG9mIGBwcmVkaWNhdGVgLlxuICogQHJldHVybnMge251bWJlcn0gUmV0dXJucyB0aGUgaW5kZXggb2YgdGhlIGZvdW5kIGVsZW1lbnQsIGVsc2UgYC0xYC5cbiAqIEBleGFtcGxlXG4gKlxuICogdmFyIHVzZXJzID0gW1xuICogICB7ICd1c2VyJzogJ2Jhcm5leScsICAnYWN0aXZlJzogZmFsc2UgfSxcbiAqICAgeyAndXNlcic6ICdmcmVkJywgICAgJ2FjdGl2ZSc6IGZhbHNlIH0sXG4gKiAgIHsgJ3VzZXInOiAncGViYmxlcycsICdhY3RpdmUnOiB0cnVlIH1cbiAqIF07XG4gKlxuICogXy5maW5kSW5kZXgodXNlcnMsIGZ1bmN0aW9uKGNocikge1xuICogICByZXR1cm4gY2hyLnVzZXIgPT0gJ2Jhcm5leSc7XG4gKiB9KTtcbiAqIC8vID0+IDBcbiAqXG4gKiAvLyB1c2luZyB0aGUgYF8ubWF0Y2hlc2AgY2FsbGJhY2sgc2hvcnRoYW5kXG4gKiBfLmZpbmRJbmRleCh1c2VycywgeyAndXNlcic6ICdmcmVkJywgJ2FjdGl2ZSc6IGZhbHNlIH0pO1xuICogLy8gPT4gMVxuICpcbiAqIC8vIHVzaW5nIHRoZSBgXy5tYXRjaGVzUHJvcGVydHlgIGNhbGxiYWNrIHNob3J0aGFuZFxuICogXy5maW5kSW5kZXgodXNlcnMsICdhY3RpdmUnLCBmYWxzZSk7XG4gKiAvLyA9PiAwXG4gKlxuICogLy8gdXNpbmcgdGhlIGBfLnByb3BlcnR5YCBjYWxsYmFjayBzaG9ydGhhbmRcbiAqIF8uZmluZEluZGV4KHVzZXJzLCAnYWN0aXZlJyk7XG4gKiAvLyA9PiAyXG4gKi9cbnZhciBmaW5kSW5kZXggPSBjcmVhdGVGaW5kSW5kZXgoKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmaW5kSW5kZXg7XG4iLCIvKipcbiAqIEdldHMgdGhlIGZpcnN0IGVsZW1lbnQgb2YgYGFycmF5YC5cbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQGFsaWFzIGhlYWRcbiAqIEBjYXRlZ29yeSBBcnJheVxuICogQHBhcmFtIHtBcnJheX0gYXJyYXkgVGhlIGFycmF5IHRvIHF1ZXJ5LlxuICogQHJldHVybnMgeyp9IFJldHVybnMgdGhlIGZpcnN0IGVsZW1lbnQgb2YgYGFycmF5YC5cbiAqIEBleGFtcGxlXG4gKlxuICogXy5maXJzdChbMSwgMiwgM10pO1xuICogLy8gPT4gMVxuICpcbiAqIF8uZmlyc3QoW10pO1xuICogLy8gPT4gdW5kZWZpbmVkXG4gKi9cbmZ1bmN0aW9uIGZpcnN0KGFycmF5KSB7XG4gIHJldHVybiBhcnJheSA/IGFycmF5WzBdIDogdW5kZWZpbmVkO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZpcnN0O1xuIiwiLyoqXG4gKiBHZXRzIHRoZSBsYXN0IGVsZW1lbnQgb2YgYGFycmF5YC5cbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQGNhdGVnb3J5IEFycmF5XG4gKiBAcGFyYW0ge0FycmF5fSBhcnJheSBUaGUgYXJyYXkgdG8gcXVlcnkuXG4gKiBAcmV0dXJucyB7Kn0gUmV0dXJucyB0aGUgbGFzdCBlbGVtZW50IG9mIGBhcnJheWAuXG4gKiBAZXhhbXBsZVxuICpcbiAqIF8ubGFzdChbMSwgMiwgM10pO1xuICogLy8gPT4gM1xuICovXG5mdW5jdGlvbiBsYXN0KGFycmF5KSB7XG4gIHZhciBsZW5ndGggPSBhcnJheSA/IGFycmF5Lmxlbmd0aCA6IDA7XG4gIHJldHVybiBsZW5ndGggPyBhcnJheVtsZW5ndGggLSAxXSA6IHVuZGVmaW5lZDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBsYXN0O1xuIiwidmFyIGRyb3AgPSByZXF1aXJlKCcuL2Ryb3AnKTtcblxuLyoqXG4gKiBHZXRzIGFsbCBidXQgdGhlIGZpcnN0IGVsZW1lbnQgb2YgYGFycmF5YC5cbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQGFsaWFzIHRhaWxcbiAqIEBjYXRlZ29yeSBBcnJheVxuICogQHBhcmFtIHtBcnJheX0gYXJyYXkgVGhlIGFycmF5IHRvIHF1ZXJ5LlxuICogQHJldHVybnMge0FycmF5fSBSZXR1cm5zIHRoZSBzbGljZSBvZiBgYXJyYXlgLlxuICogQGV4YW1wbGVcbiAqXG4gKiBfLnJlc3QoWzEsIDIsIDNdKTtcbiAqIC8vID0+IFsyLCAzXVxuICovXG5mdW5jdGlvbiByZXN0KGFycmF5KSB7XG4gIHJldHVybiBkcm9wKGFycmF5LCAxKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSByZXN0O1xuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL3NvbWUnKTtcbiIsInZhciBhcnJheUZpbHRlciA9IHJlcXVpcmUoJy4uL2ludGVybmFsL2FycmF5RmlsdGVyJyksXG4gICAgYmFzZUNhbGxiYWNrID0gcmVxdWlyZSgnLi4vaW50ZXJuYWwvYmFzZUNhbGxiYWNrJyksXG4gICAgYmFzZUZpbHRlciA9IHJlcXVpcmUoJy4uL2ludGVybmFsL2Jhc2VGaWx0ZXInKSxcbiAgICBpc0FycmF5ID0gcmVxdWlyZSgnLi4vbGFuZy9pc0FycmF5Jyk7XG5cbi8qKlxuICogSXRlcmF0ZXMgb3ZlciBlbGVtZW50cyBvZiBgY29sbGVjdGlvbmAsIHJldHVybmluZyBhbiBhcnJheSBvZiBhbGwgZWxlbWVudHNcbiAqIGBwcmVkaWNhdGVgIHJldHVybnMgdHJ1dGh5IGZvci4gVGhlIHByZWRpY2F0ZSBpcyBib3VuZCB0byBgdGhpc0FyZ2AgYW5kXG4gKiBpbnZva2VkIHdpdGggdGhyZWUgYXJndW1lbnRzOiAodmFsdWUsIGluZGV4fGtleSwgY29sbGVjdGlvbikuXG4gKlxuICogSWYgYSBwcm9wZXJ0eSBuYW1lIGlzIHByb3ZpZGVkIGZvciBgcHJlZGljYXRlYCB0aGUgY3JlYXRlZCBgXy5wcm9wZXJ0eWBcbiAqIHN0eWxlIGNhbGxiYWNrIHJldHVybnMgdGhlIHByb3BlcnR5IHZhbHVlIG9mIHRoZSBnaXZlbiBlbGVtZW50LlxuICpcbiAqIElmIGEgdmFsdWUgaXMgYWxzbyBwcm92aWRlZCBmb3IgYHRoaXNBcmdgIHRoZSBjcmVhdGVkIGBfLm1hdGNoZXNQcm9wZXJ0eWBcbiAqIHN0eWxlIGNhbGxiYWNrIHJldHVybnMgYHRydWVgIGZvciBlbGVtZW50cyB0aGF0IGhhdmUgYSBtYXRjaGluZyBwcm9wZXJ0eVxuICogdmFsdWUsIGVsc2UgYGZhbHNlYC5cbiAqXG4gKiBJZiBhbiBvYmplY3QgaXMgcHJvdmlkZWQgZm9yIGBwcmVkaWNhdGVgIHRoZSBjcmVhdGVkIGBfLm1hdGNoZXNgIHN0eWxlXG4gKiBjYWxsYmFjayByZXR1cm5zIGB0cnVlYCBmb3IgZWxlbWVudHMgdGhhdCBoYXZlIHRoZSBwcm9wZXJ0aWVzIG9mIHRoZSBnaXZlblxuICogb2JqZWN0LCBlbHNlIGBmYWxzZWAuXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBhbGlhcyBzZWxlY3RcbiAqIEBjYXRlZ29yeSBDb2xsZWN0aW9uXG4gKiBAcGFyYW0ge0FycmF5fE9iamVjdHxzdHJpbmd9IGNvbGxlY3Rpb24gVGhlIGNvbGxlY3Rpb24gdG8gaXRlcmF0ZSBvdmVyLlxuICogQHBhcmFtIHtGdW5jdGlvbnxPYmplY3R8c3RyaW5nfSBbcHJlZGljYXRlPV8uaWRlbnRpdHldIFRoZSBmdW5jdGlvbiBpbnZva2VkXG4gKiAgcGVyIGl0ZXJhdGlvbi5cbiAqIEBwYXJhbSB7Kn0gW3RoaXNBcmddIFRoZSBgdGhpc2AgYmluZGluZyBvZiBgcHJlZGljYXRlYC5cbiAqIEByZXR1cm5zIHtBcnJheX0gUmV0dXJucyB0aGUgbmV3IGZpbHRlcmVkIGFycmF5LlxuICogQGV4YW1wbGVcbiAqXG4gKiBfLmZpbHRlcihbNCwgNSwgNl0sIGZ1bmN0aW9uKG4pIHtcbiAqICAgcmV0dXJuIG4gJSAyID09IDA7XG4gKiB9KTtcbiAqIC8vID0+IFs0LCA2XVxuICpcbiAqIHZhciB1c2VycyA9IFtcbiAqICAgeyAndXNlcic6ICdiYXJuZXknLCAnYWdlJzogMzYsICdhY3RpdmUnOiB0cnVlIH0sXG4gKiAgIHsgJ3VzZXInOiAnZnJlZCcsICAgJ2FnZSc6IDQwLCAnYWN0aXZlJzogZmFsc2UgfVxuICogXTtcbiAqXG4gKiAvLyB1c2luZyB0aGUgYF8ubWF0Y2hlc2AgY2FsbGJhY2sgc2hvcnRoYW5kXG4gKiBfLnBsdWNrKF8uZmlsdGVyKHVzZXJzLCB7ICdhZ2UnOiAzNiwgJ2FjdGl2ZSc6IHRydWUgfSksICd1c2VyJyk7XG4gKiAvLyA9PiBbJ2Jhcm5leSddXG4gKlxuICogLy8gdXNpbmcgdGhlIGBfLm1hdGNoZXNQcm9wZXJ0eWAgY2FsbGJhY2sgc2hvcnRoYW5kXG4gKiBfLnBsdWNrKF8uZmlsdGVyKHVzZXJzLCAnYWN0aXZlJywgZmFsc2UpLCAndXNlcicpO1xuICogLy8gPT4gWydmcmVkJ11cbiAqXG4gKiAvLyB1c2luZyB0aGUgYF8ucHJvcGVydHlgIGNhbGxiYWNrIHNob3J0aGFuZFxuICogXy5wbHVjayhfLmZpbHRlcih1c2VycywgJ2FjdGl2ZScpLCAndXNlcicpO1xuICogLy8gPT4gWydiYXJuZXknXVxuICovXG5mdW5jdGlvbiBmaWx0ZXIoY29sbGVjdGlvbiwgcHJlZGljYXRlLCB0aGlzQXJnKSB7XG4gIHZhciBmdW5jID0gaXNBcnJheShjb2xsZWN0aW9uKSA/IGFycmF5RmlsdGVyIDogYmFzZUZpbHRlcjtcbiAgcHJlZGljYXRlID0gYmFzZUNhbGxiYWNrKHByZWRpY2F0ZSwgdGhpc0FyZywgMyk7XG4gIHJldHVybiBmdW5jKGNvbGxlY3Rpb24sIHByZWRpY2F0ZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZmlsdGVyO1xuIiwidmFyIGJhc2VFYWNoID0gcmVxdWlyZSgnLi4vaW50ZXJuYWwvYmFzZUVhY2gnKSxcbiAgICBjcmVhdGVGaW5kID0gcmVxdWlyZSgnLi4vaW50ZXJuYWwvY3JlYXRlRmluZCcpO1xuXG4vKipcbiAqIEl0ZXJhdGVzIG92ZXIgZWxlbWVudHMgb2YgYGNvbGxlY3Rpb25gLCByZXR1cm5pbmcgdGhlIGZpcnN0IGVsZW1lbnRcbiAqIGBwcmVkaWNhdGVgIHJldHVybnMgdHJ1dGh5IGZvci4gVGhlIHByZWRpY2F0ZSBpcyBib3VuZCB0byBgdGhpc0FyZ2AgYW5kXG4gKiBpbnZva2VkIHdpdGggdGhyZWUgYXJndW1lbnRzOiAodmFsdWUsIGluZGV4fGtleSwgY29sbGVjdGlvbikuXG4gKlxuICogSWYgYSBwcm9wZXJ0eSBuYW1lIGlzIHByb3ZpZGVkIGZvciBgcHJlZGljYXRlYCB0aGUgY3JlYXRlZCBgXy5wcm9wZXJ0eWBcbiAqIHN0eWxlIGNhbGxiYWNrIHJldHVybnMgdGhlIHByb3BlcnR5IHZhbHVlIG9mIHRoZSBnaXZlbiBlbGVtZW50LlxuICpcbiAqIElmIGEgdmFsdWUgaXMgYWxzbyBwcm92aWRlZCBmb3IgYHRoaXNBcmdgIHRoZSBjcmVhdGVkIGBfLm1hdGNoZXNQcm9wZXJ0eWBcbiAqIHN0eWxlIGNhbGxiYWNrIHJldHVybnMgYHRydWVgIGZvciBlbGVtZW50cyB0aGF0IGhhdmUgYSBtYXRjaGluZyBwcm9wZXJ0eVxuICogdmFsdWUsIGVsc2UgYGZhbHNlYC5cbiAqXG4gKiBJZiBhbiBvYmplY3QgaXMgcHJvdmlkZWQgZm9yIGBwcmVkaWNhdGVgIHRoZSBjcmVhdGVkIGBfLm1hdGNoZXNgIHN0eWxlXG4gKiBjYWxsYmFjayByZXR1cm5zIGB0cnVlYCBmb3IgZWxlbWVudHMgdGhhdCBoYXZlIHRoZSBwcm9wZXJ0aWVzIG9mIHRoZSBnaXZlblxuICogb2JqZWN0LCBlbHNlIGBmYWxzZWAuXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBhbGlhcyBkZXRlY3RcbiAqIEBjYXRlZ29yeSBDb2xsZWN0aW9uXG4gKiBAcGFyYW0ge0FycmF5fE9iamVjdHxzdHJpbmd9IGNvbGxlY3Rpb24gVGhlIGNvbGxlY3Rpb24gdG8gc2VhcmNoLlxuICogQHBhcmFtIHtGdW5jdGlvbnxPYmplY3R8c3RyaW5nfSBbcHJlZGljYXRlPV8uaWRlbnRpdHldIFRoZSBmdW5jdGlvbiBpbnZva2VkXG4gKiAgcGVyIGl0ZXJhdGlvbi5cbiAqIEBwYXJhbSB7Kn0gW3RoaXNBcmddIFRoZSBgdGhpc2AgYmluZGluZyBvZiBgcHJlZGljYXRlYC5cbiAqIEByZXR1cm5zIHsqfSBSZXR1cm5zIHRoZSBtYXRjaGVkIGVsZW1lbnQsIGVsc2UgYHVuZGVmaW5lZGAuXG4gKiBAZXhhbXBsZVxuICpcbiAqIHZhciB1c2VycyA9IFtcbiAqICAgeyAndXNlcic6ICdiYXJuZXknLCAgJ2FnZSc6IDM2LCAnYWN0aXZlJzogdHJ1ZSB9LFxuICogICB7ICd1c2VyJzogJ2ZyZWQnLCAgICAnYWdlJzogNDAsICdhY3RpdmUnOiBmYWxzZSB9LFxuICogICB7ICd1c2VyJzogJ3BlYmJsZXMnLCAnYWdlJzogMSwgICdhY3RpdmUnOiB0cnVlIH1cbiAqIF07XG4gKlxuICogXy5yZXN1bHQoXy5maW5kKHVzZXJzLCBmdW5jdGlvbihjaHIpIHtcbiAqICAgcmV0dXJuIGNoci5hZ2UgPCA0MDtcbiAqIH0pLCAndXNlcicpO1xuICogLy8gPT4gJ2Jhcm5leSdcbiAqXG4gKiAvLyB1c2luZyB0aGUgYF8ubWF0Y2hlc2AgY2FsbGJhY2sgc2hvcnRoYW5kXG4gKiBfLnJlc3VsdChfLmZpbmQodXNlcnMsIHsgJ2FnZSc6IDEsICdhY3RpdmUnOiB0cnVlIH0pLCAndXNlcicpO1xuICogLy8gPT4gJ3BlYmJsZXMnXG4gKlxuICogLy8gdXNpbmcgdGhlIGBfLm1hdGNoZXNQcm9wZXJ0eWAgY2FsbGJhY2sgc2hvcnRoYW5kXG4gKiBfLnJlc3VsdChfLmZpbmQodXNlcnMsICdhY3RpdmUnLCBmYWxzZSksICd1c2VyJyk7XG4gKiAvLyA9PiAnZnJlZCdcbiAqXG4gKiAvLyB1c2luZyB0aGUgYF8ucHJvcGVydHlgIGNhbGxiYWNrIHNob3J0aGFuZFxuICogXy5yZXN1bHQoXy5maW5kKHVzZXJzLCAnYWN0aXZlJyksICd1c2VyJyk7XG4gKiAvLyA9PiAnYmFybmV5J1xuICovXG52YXIgZmluZCA9IGNyZWF0ZUZpbmQoYmFzZUVhY2gpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZpbmQ7XG4iLCJ2YXIgYmFzZU1hdGNoZXMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbC9iYXNlTWF0Y2hlcycpLFxuICAgIGZpbmQgPSByZXF1aXJlKCcuL2ZpbmQnKTtcblxuLyoqXG4gKiBQZXJmb3JtcyBhIGRlZXAgY29tcGFyaXNvbiBiZXR3ZWVuIGVhY2ggZWxlbWVudCBpbiBgY29sbGVjdGlvbmAgYW5kIHRoZVxuICogc291cmNlIG9iamVjdCwgcmV0dXJuaW5nIHRoZSBmaXJzdCBlbGVtZW50IHRoYXQgaGFzIGVxdWl2YWxlbnQgcHJvcGVydHlcbiAqIHZhbHVlcy5cbiAqXG4gKiAqKk5vdGU6KiogVGhpcyBtZXRob2Qgc3VwcG9ydHMgY29tcGFyaW5nIGFycmF5cywgYm9vbGVhbnMsIGBEYXRlYCBvYmplY3RzLFxuICogbnVtYmVycywgYE9iamVjdGAgb2JqZWN0cywgcmVnZXhlcywgYW5kIHN0cmluZ3MuIE9iamVjdHMgYXJlIGNvbXBhcmVkIGJ5XG4gKiB0aGVpciBvd24sIG5vdCBpbmhlcml0ZWQsIGVudW1lcmFibGUgcHJvcGVydGllcy4gRm9yIGNvbXBhcmluZyBhIHNpbmdsZVxuICogb3duIG9yIGluaGVyaXRlZCBwcm9wZXJ0eSB2YWx1ZSBzZWUgYF8ubWF0Y2hlc1Byb3BlcnR5YC5cbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQGNhdGVnb3J5IENvbGxlY3Rpb25cbiAqIEBwYXJhbSB7QXJyYXl8T2JqZWN0fHN0cmluZ30gY29sbGVjdGlvbiBUaGUgY29sbGVjdGlvbiB0byBzZWFyY2guXG4gKiBAcGFyYW0ge09iamVjdH0gc291cmNlIFRoZSBvYmplY3Qgb2YgcHJvcGVydHkgdmFsdWVzIHRvIG1hdGNoLlxuICogQHJldHVybnMgeyp9IFJldHVybnMgdGhlIG1hdGNoZWQgZWxlbWVudCwgZWxzZSBgdW5kZWZpbmVkYC5cbiAqIEBleGFtcGxlXG4gKlxuICogdmFyIHVzZXJzID0gW1xuICogICB7ICd1c2VyJzogJ2Jhcm5leScsICdhZ2UnOiAzNiwgJ2FjdGl2ZSc6IHRydWUgfSxcbiAqICAgeyAndXNlcic6ICdmcmVkJywgICAnYWdlJzogNDAsICdhY3RpdmUnOiBmYWxzZSB9XG4gKiBdO1xuICpcbiAqIF8ucmVzdWx0KF8uZmluZFdoZXJlKHVzZXJzLCB7ICdhZ2UnOiAzNiwgJ2FjdGl2ZSc6IHRydWUgfSksICd1c2VyJyk7XG4gKiAvLyA9PiAnYmFybmV5J1xuICpcbiAqIF8ucmVzdWx0KF8uZmluZFdoZXJlKHVzZXJzLCB7ICdhZ2UnOiA0MCwgJ2FjdGl2ZSc6IGZhbHNlIH0pLCAndXNlcicpO1xuICogLy8gPT4gJ2ZyZWQnXG4gKi9cbmZ1bmN0aW9uIGZpbmRXaGVyZShjb2xsZWN0aW9uLCBzb3VyY2UpIHtcbiAgcmV0dXJuIGZpbmQoY29sbGVjdGlvbiwgYmFzZU1hdGNoZXMoc291cmNlKSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZmluZFdoZXJlO1xuIiwidmFyIGFycmF5TWFwID0gcmVxdWlyZSgnLi4vaW50ZXJuYWwvYXJyYXlNYXAnKSxcbiAgICBiYXNlQ2FsbGJhY2sgPSByZXF1aXJlKCcuLi9pbnRlcm5hbC9iYXNlQ2FsbGJhY2snKSxcbiAgICBiYXNlTWFwID0gcmVxdWlyZSgnLi4vaW50ZXJuYWwvYmFzZU1hcCcpLFxuICAgIGlzQXJyYXkgPSByZXF1aXJlKCcuLi9sYW5nL2lzQXJyYXknKTtcblxuLyoqXG4gKiBDcmVhdGVzIGFuIGFycmF5IG9mIHZhbHVlcyBieSBydW5uaW5nIGVhY2ggZWxlbWVudCBpbiBgY29sbGVjdGlvbmAgdGhyb3VnaFxuICogYGl0ZXJhdGVlYC4gVGhlIGBpdGVyYXRlZWAgaXMgYm91bmQgdG8gYHRoaXNBcmdgIGFuZCBpbnZva2VkIHdpdGggdGhyZWVcbiAqIGFyZ3VtZW50czogKHZhbHVlLCBpbmRleHxrZXksIGNvbGxlY3Rpb24pLlxuICpcbiAqIElmIGEgcHJvcGVydHkgbmFtZSBpcyBwcm92aWRlZCBmb3IgYGl0ZXJhdGVlYCB0aGUgY3JlYXRlZCBgXy5wcm9wZXJ0eWBcbiAqIHN0eWxlIGNhbGxiYWNrIHJldHVybnMgdGhlIHByb3BlcnR5IHZhbHVlIG9mIHRoZSBnaXZlbiBlbGVtZW50LlxuICpcbiAqIElmIGEgdmFsdWUgaXMgYWxzbyBwcm92aWRlZCBmb3IgYHRoaXNBcmdgIHRoZSBjcmVhdGVkIGBfLm1hdGNoZXNQcm9wZXJ0eWBcbiAqIHN0eWxlIGNhbGxiYWNrIHJldHVybnMgYHRydWVgIGZvciBlbGVtZW50cyB0aGF0IGhhdmUgYSBtYXRjaGluZyBwcm9wZXJ0eVxuICogdmFsdWUsIGVsc2UgYGZhbHNlYC5cbiAqXG4gKiBJZiBhbiBvYmplY3QgaXMgcHJvdmlkZWQgZm9yIGBpdGVyYXRlZWAgdGhlIGNyZWF0ZWQgYF8ubWF0Y2hlc2Agc3R5bGVcbiAqIGNhbGxiYWNrIHJldHVybnMgYHRydWVgIGZvciBlbGVtZW50cyB0aGF0IGhhdmUgdGhlIHByb3BlcnRpZXMgb2YgdGhlIGdpdmVuXG4gKiBvYmplY3QsIGVsc2UgYGZhbHNlYC5cbiAqXG4gKiBNYW55IGxvZGFzaCBtZXRob2RzIGFyZSBndWFyZGVkIHRvIHdvcmsgYXMgaXRlcmF0ZWVzIGZvciBtZXRob2RzIGxpa2VcbiAqIGBfLmV2ZXJ5YCwgYF8uZmlsdGVyYCwgYF8ubWFwYCwgYF8ubWFwVmFsdWVzYCwgYF8ucmVqZWN0YCwgYW5kIGBfLnNvbWVgLlxuICpcbiAqIFRoZSBndWFyZGVkIG1ldGhvZHMgYXJlOlxuICogYGFyeWAsIGBjYWxsYmFja2AsIGBjaHVua2AsIGBjbG9uZWAsIGBjcmVhdGVgLCBgY3VycnlgLCBgY3VycnlSaWdodGAsXG4gKiBgZHJvcGAsIGBkcm9wUmlnaHRgLCBgZXZlcnlgLCBgZmlsbGAsIGBmbGF0dGVuYCwgYGludmVydGAsIGBtYXhgLCBgbWluYCxcbiAqIGBwYXJzZUludGAsIGBzbGljZWAsIGBzb3J0QnlgLCBgdGFrZWAsIGB0YWtlUmlnaHRgLCBgdGVtcGxhdGVgLCBgdHJpbWAsXG4gKiBgdHJpbUxlZnRgLCBgdHJpbVJpZ2h0YCwgYHRydW5jYCwgYHJhbmRvbWAsIGByYW5nZWAsIGBzYW1wbGVgLCBgc29tZWAsXG4gKiBgc3VtYCwgYHVuaXFgLCBhbmQgYHdvcmRzYFxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAYWxpYXMgY29sbGVjdFxuICogQGNhdGVnb3J5IENvbGxlY3Rpb25cbiAqIEBwYXJhbSB7QXJyYXl8T2JqZWN0fHN0cmluZ30gY29sbGVjdGlvbiBUaGUgY29sbGVjdGlvbiB0byBpdGVyYXRlIG92ZXIuXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufE9iamVjdHxzdHJpbmd9IFtpdGVyYXRlZT1fLmlkZW50aXR5XSBUaGUgZnVuY3Rpb24gaW52b2tlZFxuICogIHBlciBpdGVyYXRpb24uXG4gKiBAcGFyYW0geyp9IFt0aGlzQXJnXSBUaGUgYHRoaXNgIGJpbmRpbmcgb2YgYGl0ZXJhdGVlYC5cbiAqIEByZXR1cm5zIHtBcnJheX0gUmV0dXJucyB0aGUgbmV3IG1hcHBlZCBhcnJheS5cbiAqIEBleGFtcGxlXG4gKlxuICogZnVuY3Rpb24gdGltZXNUaHJlZShuKSB7XG4gKiAgIHJldHVybiBuICogMztcbiAqIH1cbiAqXG4gKiBfLm1hcChbMSwgMl0sIHRpbWVzVGhyZWUpO1xuICogLy8gPT4gWzMsIDZdXG4gKlxuICogXy5tYXAoeyAnYSc6IDEsICdiJzogMiB9LCB0aW1lc1RocmVlKTtcbiAqIC8vID0+IFszLCA2XSAoaXRlcmF0aW9uIG9yZGVyIGlzIG5vdCBndWFyYW50ZWVkKVxuICpcbiAqIHZhciB1c2VycyA9IFtcbiAqICAgeyAndXNlcic6ICdiYXJuZXknIH0sXG4gKiAgIHsgJ3VzZXInOiAnZnJlZCcgfVxuICogXTtcbiAqXG4gKiAvLyB1c2luZyB0aGUgYF8ucHJvcGVydHlgIGNhbGxiYWNrIHNob3J0aGFuZFxuICogXy5tYXAodXNlcnMsICd1c2VyJyk7XG4gKiAvLyA9PiBbJ2Jhcm5leScsICdmcmVkJ11cbiAqL1xuZnVuY3Rpb24gbWFwKGNvbGxlY3Rpb24sIGl0ZXJhdGVlLCB0aGlzQXJnKSB7XG4gIHZhciBmdW5jID0gaXNBcnJheShjb2xsZWN0aW9uKSA/IGFycmF5TWFwIDogYmFzZU1hcDtcbiAgaXRlcmF0ZWUgPSBiYXNlQ2FsbGJhY2soaXRlcmF0ZWUsIHRoaXNBcmcsIDMpO1xuICByZXR1cm4gZnVuYyhjb2xsZWN0aW9uLCBpdGVyYXRlZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gbWFwO1xuIiwidmFyIGFycmF5UmVkdWNlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWwvYXJyYXlSZWR1Y2UnKSxcbiAgICBiYXNlRWFjaCA9IHJlcXVpcmUoJy4uL2ludGVybmFsL2Jhc2VFYWNoJyksXG4gICAgY3JlYXRlUmVkdWNlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWwvY3JlYXRlUmVkdWNlJyk7XG5cbi8qKlxuICogUmVkdWNlcyBgY29sbGVjdGlvbmAgdG8gYSB2YWx1ZSB3aGljaCBpcyB0aGUgYWNjdW11bGF0ZWQgcmVzdWx0IG9mIHJ1bm5pbmdcbiAqIGVhY2ggZWxlbWVudCBpbiBgY29sbGVjdGlvbmAgdGhyb3VnaCBgaXRlcmF0ZWVgLCB3aGVyZSBlYWNoIHN1Y2Nlc3NpdmVcbiAqIGludm9jYXRpb24gaXMgc3VwcGxpZWQgdGhlIHJldHVybiB2YWx1ZSBvZiB0aGUgcHJldmlvdXMuIElmIGBhY2N1bXVsYXRvcmBcbiAqIGlzIG5vdCBwcm92aWRlZCB0aGUgZmlyc3QgZWxlbWVudCBvZiBgY29sbGVjdGlvbmAgaXMgdXNlZCBhcyB0aGUgaW5pdGlhbFxuICogdmFsdWUuIFRoZSBgaXRlcmF0ZWVgIGlzIGJvdW5kIHRvIGB0aGlzQXJnYCBhbmQgaW52b2tlZCB3aXRoIGZvdXIgYXJndW1lbnRzOlxuICogKGFjY3VtdWxhdG9yLCB2YWx1ZSwgaW5kZXh8a2V5LCBjb2xsZWN0aW9uKS5cbiAqXG4gKiBNYW55IGxvZGFzaCBtZXRob2RzIGFyZSBndWFyZGVkIHRvIHdvcmsgYXMgaXRlcmF0ZWVzIGZvciBtZXRob2RzIGxpa2VcbiAqIGBfLnJlZHVjZWAsIGBfLnJlZHVjZVJpZ2h0YCwgYW5kIGBfLnRyYW5zZm9ybWAuXG4gKlxuICogVGhlIGd1YXJkZWQgbWV0aG9kcyBhcmU6XG4gKiBgYXNzaWduYCwgYGRlZmF1bHRzYCwgYGluY2x1ZGVzYCwgYG1lcmdlYCwgYHNvcnRCeUFsbGAsIGFuZCBgc29ydEJ5T3JkZXJgXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBhbGlhcyBmb2xkbCwgaW5qZWN0XG4gKiBAY2F0ZWdvcnkgQ29sbGVjdGlvblxuICogQHBhcmFtIHtBcnJheXxPYmplY3R8c3RyaW5nfSBjb2xsZWN0aW9uIFRoZSBjb2xsZWN0aW9uIHRvIGl0ZXJhdGUgb3Zlci5cbiAqIEBwYXJhbSB7RnVuY3Rpb259IFtpdGVyYXRlZT1fLmlkZW50aXR5XSBUaGUgZnVuY3Rpb24gaW52b2tlZCBwZXIgaXRlcmF0aW9uLlxuICogQHBhcmFtIHsqfSBbYWNjdW11bGF0b3JdIFRoZSBpbml0aWFsIHZhbHVlLlxuICogQHBhcmFtIHsqfSBbdGhpc0FyZ10gVGhlIGB0aGlzYCBiaW5kaW5nIG9mIGBpdGVyYXRlZWAuXG4gKiBAcmV0dXJucyB7Kn0gUmV0dXJucyB0aGUgYWNjdW11bGF0ZWQgdmFsdWUuXG4gKiBAZXhhbXBsZVxuICpcbiAqIF8ucmVkdWNlKFsxLCAyXSwgZnVuY3Rpb24odG90YWwsIG4pIHtcbiAqICAgcmV0dXJuIHRvdGFsICsgbjtcbiAqIH0pO1xuICogLy8gPT4gM1xuICpcbiAqIF8ucmVkdWNlKHsgJ2EnOiAxLCAnYic6IDIgfSwgZnVuY3Rpb24ocmVzdWx0LCBuLCBrZXkpIHtcbiAqICAgcmVzdWx0W2tleV0gPSBuICogMztcbiAqICAgcmV0dXJuIHJlc3VsdDtcbiAqIH0sIHt9KTtcbiAqIC8vID0+IHsgJ2EnOiAzLCAnYic6IDYgfSAoaXRlcmF0aW9uIG9yZGVyIGlzIG5vdCBndWFyYW50ZWVkKVxuICovXG52YXIgcmVkdWNlID0gY3JlYXRlUmVkdWNlKGFycmF5UmVkdWNlLCBiYXNlRWFjaCk7XG5cbm1vZHVsZS5leHBvcnRzID0gcmVkdWNlO1xuIiwidmFyIGFycmF5U29tZSA9IHJlcXVpcmUoJy4uL2ludGVybmFsL2FycmF5U29tZScpLFxuICAgIGJhc2VDYWxsYmFjayA9IHJlcXVpcmUoJy4uL2ludGVybmFsL2Jhc2VDYWxsYmFjaycpLFxuICAgIGJhc2VTb21lID0gcmVxdWlyZSgnLi4vaW50ZXJuYWwvYmFzZVNvbWUnKSxcbiAgICBpc0FycmF5ID0gcmVxdWlyZSgnLi4vbGFuZy9pc0FycmF5JyksXG4gICAgaXNJdGVyYXRlZUNhbGwgPSByZXF1aXJlKCcuLi9pbnRlcm5hbC9pc0l0ZXJhdGVlQ2FsbCcpO1xuXG4vKipcbiAqIENoZWNrcyBpZiBgcHJlZGljYXRlYCByZXR1cm5zIHRydXRoeSBmb3IgKiphbnkqKiBlbGVtZW50IG9mIGBjb2xsZWN0aW9uYC5cbiAqIFRoZSBmdW5jdGlvbiByZXR1cm5zIGFzIHNvb24gYXMgaXQgZmluZHMgYSBwYXNzaW5nIHZhbHVlIGFuZCBkb2VzIG5vdCBpdGVyYXRlXG4gKiBvdmVyIHRoZSBlbnRpcmUgY29sbGVjdGlvbi4gVGhlIHByZWRpY2F0ZSBpcyBib3VuZCB0byBgdGhpc0FyZ2AgYW5kIGludm9rZWRcbiAqIHdpdGggdGhyZWUgYXJndW1lbnRzOiAodmFsdWUsIGluZGV4fGtleSwgY29sbGVjdGlvbikuXG4gKlxuICogSWYgYSBwcm9wZXJ0eSBuYW1lIGlzIHByb3ZpZGVkIGZvciBgcHJlZGljYXRlYCB0aGUgY3JlYXRlZCBgXy5wcm9wZXJ0eWBcbiAqIHN0eWxlIGNhbGxiYWNrIHJldHVybnMgdGhlIHByb3BlcnR5IHZhbHVlIG9mIHRoZSBnaXZlbiBlbGVtZW50LlxuICpcbiAqIElmIGEgdmFsdWUgaXMgYWxzbyBwcm92aWRlZCBmb3IgYHRoaXNBcmdgIHRoZSBjcmVhdGVkIGBfLm1hdGNoZXNQcm9wZXJ0eWBcbiAqIHN0eWxlIGNhbGxiYWNrIHJldHVybnMgYHRydWVgIGZvciBlbGVtZW50cyB0aGF0IGhhdmUgYSBtYXRjaGluZyBwcm9wZXJ0eVxuICogdmFsdWUsIGVsc2UgYGZhbHNlYC5cbiAqXG4gKiBJZiBhbiBvYmplY3QgaXMgcHJvdmlkZWQgZm9yIGBwcmVkaWNhdGVgIHRoZSBjcmVhdGVkIGBfLm1hdGNoZXNgIHN0eWxlXG4gKiBjYWxsYmFjayByZXR1cm5zIGB0cnVlYCBmb3IgZWxlbWVudHMgdGhhdCBoYXZlIHRoZSBwcm9wZXJ0aWVzIG9mIHRoZSBnaXZlblxuICogb2JqZWN0LCBlbHNlIGBmYWxzZWAuXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBhbGlhcyBhbnlcbiAqIEBjYXRlZ29yeSBDb2xsZWN0aW9uXG4gKiBAcGFyYW0ge0FycmF5fE9iamVjdHxzdHJpbmd9IGNvbGxlY3Rpb24gVGhlIGNvbGxlY3Rpb24gdG8gaXRlcmF0ZSBvdmVyLlxuICogQHBhcmFtIHtGdW5jdGlvbnxPYmplY3R8c3RyaW5nfSBbcHJlZGljYXRlPV8uaWRlbnRpdHldIFRoZSBmdW5jdGlvbiBpbnZva2VkXG4gKiAgcGVyIGl0ZXJhdGlvbi5cbiAqIEBwYXJhbSB7Kn0gW3RoaXNBcmddIFRoZSBgdGhpc2AgYmluZGluZyBvZiBgcHJlZGljYXRlYC5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBhbnkgZWxlbWVudCBwYXNzZXMgdGhlIHByZWRpY2F0ZSBjaGVjayxcbiAqICBlbHNlIGBmYWxzZWAuXG4gKiBAZXhhbXBsZVxuICpcbiAqIF8uc29tZShbbnVsbCwgMCwgJ3llcycsIGZhbHNlXSwgQm9vbGVhbik7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogdmFyIHVzZXJzID0gW1xuICogICB7ICd1c2VyJzogJ2Jhcm5leScsICdhY3RpdmUnOiB0cnVlIH0sXG4gKiAgIHsgJ3VzZXInOiAnZnJlZCcsICAgJ2FjdGl2ZSc6IGZhbHNlIH1cbiAqIF07XG4gKlxuICogLy8gdXNpbmcgdGhlIGBfLm1hdGNoZXNgIGNhbGxiYWNrIHNob3J0aGFuZFxuICogXy5zb21lKHVzZXJzLCB7ICd1c2VyJzogJ2Jhcm5leScsICdhY3RpdmUnOiBmYWxzZSB9KTtcbiAqIC8vID0+IGZhbHNlXG4gKlxuICogLy8gdXNpbmcgdGhlIGBfLm1hdGNoZXNQcm9wZXJ0eWAgY2FsbGJhY2sgc2hvcnRoYW5kXG4gKiBfLnNvbWUodXNlcnMsICdhY3RpdmUnLCBmYWxzZSk7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogLy8gdXNpbmcgdGhlIGBfLnByb3BlcnR5YCBjYWxsYmFjayBzaG9ydGhhbmRcbiAqIF8uc29tZSh1c2VycywgJ2FjdGl2ZScpO1xuICogLy8gPT4gdHJ1ZVxuICovXG5mdW5jdGlvbiBzb21lKGNvbGxlY3Rpb24sIHByZWRpY2F0ZSwgdGhpc0FyZykge1xuICB2YXIgZnVuYyA9IGlzQXJyYXkoY29sbGVjdGlvbikgPyBhcnJheVNvbWUgOiBiYXNlU29tZTtcbiAgaWYgKHRoaXNBcmcgJiYgaXNJdGVyYXRlZUNhbGwoY29sbGVjdGlvbiwgcHJlZGljYXRlLCB0aGlzQXJnKSkge1xuICAgIHByZWRpY2F0ZSA9IG51bGw7XG4gIH1cbiAgaWYgKHR5cGVvZiBwcmVkaWNhdGUgIT0gJ2Z1bmN0aW9uJyB8fCB0aGlzQXJnICE9PSB1bmRlZmluZWQpIHtcbiAgICBwcmVkaWNhdGUgPSBiYXNlQ2FsbGJhY2socHJlZGljYXRlLCB0aGlzQXJnLCAzKTtcbiAgfVxuICByZXR1cm4gZnVuYyhjb2xsZWN0aW9uLCBwcmVkaWNhdGUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNvbWU7XG4iLCJ2YXIgZ2V0TmF0aXZlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWwvZ2V0TmF0aXZlJyk7XG5cbi8qIE5hdGl2ZSBtZXRob2QgcmVmZXJlbmNlcyBmb3IgdGhvc2Ugd2l0aCB0aGUgc2FtZSBuYW1lIGFzIG90aGVyIGBsb2Rhc2hgIG1ldGhvZHMuICovXG52YXIgbmF0aXZlTm93ID0gZ2V0TmF0aXZlKERhdGUsICdub3cnKTtcblxuLyoqXG4gKiBHZXRzIHRoZSBudW1iZXIgb2YgbWlsbGlzZWNvbmRzIHRoYXQgaGF2ZSBlbGFwc2VkIHNpbmNlIHRoZSBVbml4IGVwb2NoXG4gKiAoMSBKYW51YXJ5IDE5NzAgMDA6MDA6MDAgVVRDKS5cbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQGNhdGVnb3J5IERhdGVcbiAqIEBleGFtcGxlXG4gKlxuICogXy5kZWZlcihmdW5jdGlvbihzdGFtcCkge1xuICogICBjb25zb2xlLmxvZyhfLm5vdygpIC0gc3RhbXApO1xuICogfSwgXy5ub3coKSk7XG4gKiAvLyA9PiBsb2dzIHRoZSBudW1iZXIgb2YgbWlsbGlzZWNvbmRzIGl0IHRvb2sgZm9yIHRoZSBkZWZlcnJlZCBmdW5jdGlvbiB0byBiZSBpbnZva2VkXG4gKi9cbnZhciBub3cgPSBuYXRpdmVOb3cgfHwgZnVuY3Rpb24oKSB7XG4gIHJldHVybiBuZXcgRGF0ZSgpLmdldFRpbWUoKTtcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gbm93O1xuIiwidmFyIGlzT2JqZWN0ID0gcmVxdWlyZSgnLi4vbGFuZy9pc09iamVjdCcpLFxuICAgIG5vdyA9IHJlcXVpcmUoJy4uL2RhdGUvbm93Jyk7XG5cbi8qKiBVc2VkIGFzIHRoZSBgVHlwZUVycm9yYCBtZXNzYWdlIGZvciBcIkZ1bmN0aW9uc1wiIG1ldGhvZHMuICovXG52YXIgRlVOQ19FUlJPUl9URVhUID0gJ0V4cGVjdGVkIGEgZnVuY3Rpb24nO1xuXG4vKiBOYXRpdmUgbWV0aG9kIHJlZmVyZW5jZXMgZm9yIHRob3NlIHdpdGggdGhlIHNhbWUgbmFtZSBhcyBvdGhlciBgbG9kYXNoYCBtZXRob2RzLiAqL1xudmFyIG5hdGl2ZU1heCA9IE1hdGgubWF4O1xuXG4vKipcbiAqIENyZWF0ZXMgYSBkZWJvdW5jZWQgZnVuY3Rpb24gdGhhdCBkZWxheXMgaW52b2tpbmcgYGZ1bmNgIHVudGlsIGFmdGVyIGB3YWl0YFxuICogbWlsbGlzZWNvbmRzIGhhdmUgZWxhcHNlZCBzaW5jZSB0aGUgbGFzdCB0aW1lIHRoZSBkZWJvdW5jZWQgZnVuY3Rpb24gd2FzXG4gKiBpbnZva2VkLiBUaGUgZGVib3VuY2VkIGZ1bmN0aW9uIGNvbWVzIHdpdGggYSBgY2FuY2VsYCBtZXRob2QgdG8gY2FuY2VsXG4gKiBkZWxheWVkIGludm9jYXRpb25zLiBQcm92aWRlIGFuIG9wdGlvbnMgb2JqZWN0IHRvIGluZGljYXRlIHRoYXQgYGZ1bmNgXG4gKiBzaG91bGQgYmUgaW52b2tlZCBvbiB0aGUgbGVhZGluZyBhbmQvb3IgdHJhaWxpbmcgZWRnZSBvZiB0aGUgYHdhaXRgIHRpbWVvdXQuXG4gKiBTdWJzZXF1ZW50IGNhbGxzIHRvIHRoZSBkZWJvdW5jZWQgZnVuY3Rpb24gcmV0dXJuIHRoZSByZXN1bHQgb2YgdGhlIGxhc3RcbiAqIGBmdW5jYCBpbnZvY2F0aW9uLlxuICpcbiAqICoqTm90ZToqKiBJZiBgbGVhZGluZ2AgYW5kIGB0cmFpbGluZ2Agb3B0aW9ucyBhcmUgYHRydWVgLCBgZnVuY2AgaXMgaW52b2tlZFxuICogb24gdGhlIHRyYWlsaW5nIGVkZ2Ugb2YgdGhlIHRpbWVvdXQgb25seSBpZiB0aGUgdGhlIGRlYm91bmNlZCBmdW5jdGlvbiBpc1xuICogaW52b2tlZCBtb3JlIHRoYW4gb25jZSBkdXJpbmcgdGhlIGB3YWl0YCB0aW1lb3V0LlxuICpcbiAqIFNlZSBbRGF2aWQgQ29yYmFjaG8ncyBhcnRpY2xlXShodHRwOi8vZHJ1cGFsbW90aW9uLmNvbS9hcnRpY2xlL2RlYm91bmNlLWFuZC10aHJvdHRsZS12aXN1YWwtZXhwbGFuYXRpb24pXG4gKiBmb3IgZGV0YWlscyBvdmVyIHRoZSBkaWZmZXJlbmNlcyBiZXR3ZWVuIGBfLmRlYm91bmNlYCBhbmQgYF8udGhyb3R0bGVgLlxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAY2F0ZWdvcnkgRnVuY3Rpb25cbiAqIEBwYXJhbSB7RnVuY3Rpb259IGZ1bmMgVGhlIGZ1bmN0aW9uIHRvIGRlYm91bmNlLlxuICogQHBhcmFtIHtudW1iZXJ9IFt3YWl0PTBdIFRoZSBudW1iZXIgb2YgbWlsbGlzZWNvbmRzIHRvIGRlbGF5LlxuICogQHBhcmFtIHtPYmplY3R9IFtvcHRpb25zXSBUaGUgb3B0aW9ucyBvYmplY3QuXG4gKiBAcGFyYW0ge2Jvb2xlYW59IFtvcHRpb25zLmxlYWRpbmc9ZmFsc2VdIFNwZWNpZnkgaW52b2tpbmcgb24gdGhlIGxlYWRpbmdcbiAqICBlZGdlIG9mIHRoZSB0aW1lb3V0LlxuICogQHBhcmFtIHtudW1iZXJ9IFtvcHRpb25zLm1heFdhaXRdIFRoZSBtYXhpbXVtIHRpbWUgYGZ1bmNgIGlzIGFsbG93ZWQgdG8gYmVcbiAqICBkZWxheWVkIGJlZm9yZSBpdCBpcyBpbnZva2VkLlxuICogQHBhcmFtIHtib29sZWFufSBbb3B0aW9ucy50cmFpbGluZz10cnVlXSBTcGVjaWZ5IGludm9raW5nIG9uIHRoZSB0cmFpbGluZ1xuICogIGVkZ2Ugb2YgdGhlIHRpbWVvdXQuXG4gKiBAcmV0dXJucyB7RnVuY3Rpb259IFJldHVybnMgdGhlIG5ldyBkZWJvdW5jZWQgZnVuY3Rpb24uXG4gKiBAZXhhbXBsZVxuICpcbiAqIC8vIGF2b2lkIGNvc3RseSBjYWxjdWxhdGlvbnMgd2hpbGUgdGhlIHdpbmRvdyBzaXplIGlzIGluIGZsdXhcbiAqIGpRdWVyeSh3aW5kb3cpLm9uKCdyZXNpemUnLCBfLmRlYm91bmNlKGNhbGN1bGF0ZUxheW91dCwgMTUwKSk7XG4gKlxuICogLy8gaW52b2tlIGBzZW5kTWFpbGAgd2hlbiB0aGUgY2xpY2sgZXZlbnQgaXMgZmlyZWQsIGRlYm91bmNpbmcgc3Vic2VxdWVudCBjYWxsc1xuICogalF1ZXJ5KCcjcG9zdGJveCcpLm9uKCdjbGljaycsIF8uZGVib3VuY2Uoc2VuZE1haWwsIDMwMCwge1xuICogICAnbGVhZGluZyc6IHRydWUsXG4gKiAgICd0cmFpbGluZyc6IGZhbHNlXG4gKiB9KSk7XG4gKlxuICogLy8gZW5zdXJlIGBiYXRjaExvZ2AgaXMgaW52b2tlZCBvbmNlIGFmdGVyIDEgc2Vjb25kIG9mIGRlYm91bmNlZCBjYWxsc1xuICogdmFyIHNvdXJjZSA9IG5ldyBFdmVudFNvdXJjZSgnL3N0cmVhbScpO1xuICogalF1ZXJ5KHNvdXJjZSkub24oJ21lc3NhZ2UnLCBfLmRlYm91bmNlKGJhdGNoTG9nLCAyNTAsIHtcbiAqICAgJ21heFdhaXQnOiAxMDAwXG4gKiB9KSk7XG4gKlxuICogLy8gY2FuY2VsIGEgZGVib3VuY2VkIGNhbGxcbiAqIHZhciB0b2RvQ2hhbmdlcyA9IF8uZGVib3VuY2UoYmF0Y2hMb2csIDEwMDApO1xuICogT2JqZWN0Lm9ic2VydmUobW9kZWxzLnRvZG8sIHRvZG9DaGFuZ2VzKTtcbiAqXG4gKiBPYmplY3Qub2JzZXJ2ZShtb2RlbHMsIGZ1bmN0aW9uKGNoYW5nZXMpIHtcbiAqICAgaWYgKF8uZmluZChjaGFuZ2VzLCB7ICd1c2VyJzogJ3RvZG8nLCAndHlwZSc6ICdkZWxldGUnfSkpIHtcbiAqICAgICB0b2RvQ2hhbmdlcy5jYW5jZWwoKTtcbiAqICAgfVxuICogfSwgWydkZWxldGUnXSk7XG4gKlxuICogLy8gLi4uYXQgc29tZSBwb2ludCBgbW9kZWxzLnRvZG9gIGlzIGNoYW5nZWRcbiAqIG1vZGVscy50b2RvLmNvbXBsZXRlZCA9IHRydWU7XG4gKlxuICogLy8gLi4uYmVmb3JlIDEgc2Vjb25kIGhhcyBwYXNzZWQgYG1vZGVscy50b2RvYCBpcyBkZWxldGVkXG4gKiAvLyB3aGljaCBjYW5jZWxzIHRoZSBkZWJvdW5jZWQgYHRvZG9DaGFuZ2VzYCBjYWxsXG4gKiBkZWxldGUgbW9kZWxzLnRvZG87XG4gKi9cbmZ1bmN0aW9uIGRlYm91bmNlKGZ1bmMsIHdhaXQsIG9wdGlvbnMpIHtcbiAgdmFyIGFyZ3MsXG4gICAgICBtYXhUaW1lb3V0SWQsXG4gICAgICByZXN1bHQsXG4gICAgICBzdGFtcCxcbiAgICAgIHRoaXNBcmcsXG4gICAgICB0aW1lb3V0SWQsXG4gICAgICB0cmFpbGluZ0NhbGwsXG4gICAgICBsYXN0Q2FsbGVkID0gMCxcbiAgICAgIG1heFdhaXQgPSBmYWxzZSxcbiAgICAgIHRyYWlsaW5nID0gdHJ1ZTtcblxuICBpZiAodHlwZW9mIGZ1bmMgIT0gJ2Z1bmN0aW9uJykge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoRlVOQ19FUlJPUl9URVhUKTtcbiAgfVxuICB3YWl0ID0gd2FpdCA8IDAgPyAwIDogKCt3YWl0IHx8IDApO1xuICBpZiAob3B0aW9ucyA9PT0gdHJ1ZSkge1xuICAgIHZhciBsZWFkaW5nID0gdHJ1ZTtcbiAgICB0cmFpbGluZyA9IGZhbHNlO1xuICB9IGVsc2UgaWYgKGlzT2JqZWN0KG9wdGlvbnMpKSB7XG4gICAgbGVhZGluZyA9IG9wdGlvbnMubGVhZGluZztcbiAgICBtYXhXYWl0ID0gJ21heFdhaXQnIGluIG9wdGlvbnMgJiYgbmF0aXZlTWF4KCtvcHRpb25zLm1heFdhaXQgfHwgMCwgd2FpdCk7XG4gICAgdHJhaWxpbmcgPSAndHJhaWxpbmcnIGluIG9wdGlvbnMgPyBvcHRpb25zLnRyYWlsaW5nIDogdHJhaWxpbmc7XG4gIH1cblxuICBmdW5jdGlvbiBjYW5jZWwoKSB7XG4gICAgaWYgKHRpbWVvdXRJZCkge1xuICAgICAgY2xlYXJUaW1lb3V0KHRpbWVvdXRJZCk7XG4gICAgfVxuICAgIGlmIChtYXhUaW1lb3V0SWQpIHtcbiAgICAgIGNsZWFyVGltZW91dChtYXhUaW1lb3V0SWQpO1xuICAgIH1cbiAgICBtYXhUaW1lb3V0SWQgPSB0aW1lb3V0SWQgPSB0cmFpbGluZ0NhbGwgPSB1bmRlZmluZWQ7XG4gIH1cblxuICBmdW5jdGlvbiBkZWxheWVkKCkge1xuICAgIHZhciByZW1haW5pbmcgPSB3YWl0IC0gKG5vdygpIC0gc3RhbXApO1xuICAgIGlmIChyZW1haW5pbmcgPD0gMCB8fCByZW1haW5pbmcgPiB3YWl0KSB7XG4gICAgICBpZiAobWF4VGltZW91dElkKSB7XG4gICAgICAgIGNsZWFyVGltZW91dChtYXhUaW1lb3V0SWQpO1xuICAgICAgfVxuICAgICAgdmFyIGlzQ2FsbGVkID0gdHJhaWxpbmdDYWxsO1xuICAgICAgbWF4VGltZW91dElkID0gdGltZW91dElkID0gdHJhaWxpbmdDYWxsID0gdW5kZWZpbmVkO1xuICAgICAgaWYgKGlzQ2FsbGVkKSB7XG4gICAgICAgIGxhc3RDYWxsZWQgPSBub3coKTtcbiAgICAgICAgcmVzdWx0ID0gZnVuYy5hcHBseSh0aGlzQXJnLCBhcmdzKTtcbiAgICAgICAgaWYgKCF0aW1lb3V0SWQgJiYgIW1heFRpbWVvdXRJZCkge1xuICAgICAgICAgIGFyZ3MgPSB0aGlzQXJnID0gbnVsbDtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICB0aW1lb3V0SWQgPSBzZXRUaW1lb3V0KGRlbGF5ZWQsIHJlbWFpbmluZyk7XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gbWF4RGVsYXllZCgpIHtcbiAgICBpZiAodGltZW91dElkKSB7XG4gICAgICBjbGVhclRpbWVvdXQodGltZW91dElkKTtcbiAgICB9XG4gICAgbWF4VGltZW91dElkID0gdGltZW91dElkID0gdHJhaWxpbmdDYWxsID0gdW5kZWZpbmVkO1xuICAgIGlmICh0cmFpbGluZyB8fCAobWF4V2FpdCAhPT0gd2FpdCkpIHtcbiAgICAgIGxhc3RDYWxsZWQgPSBub3coKTtcbiAgICAgIHJlc3VsdCA9IGZ1bmMuYXBwbHkodGhpc0FyZywgYXJncyk7XG4gICAgICBpZiAoIXRpbWVvdXRJZCAmJiAhbWF4VGltZW91dElkKSB7XG4gICAgICAgIGFyZ3MgPSB0aGlzQXJnID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBkZWJvdW5jZWQoKSB7XG4gICAgYXJncyA9IGFyZ3VtZW50cztcbiAgICBzdGFtcCA9IG5vdygpO1xuICAgIHRoaXNBcmcgPSB0aGlzO1xuICAgIHRyYWlsaW5nQ2FsbCA9IHRyYWlsaW5nICYmICh0aW1lb3V0SWQgfHwgIWxlYWRpbmcpO1xuXG4gICAgaWYgKG1heFdhaXQgPT09IGZhbHNlKSB7XG4gICAgICB2YXIgbGVhZGluZ0NhbGwgPSBsZWFkaW5nICYmICF0aW1lb3V0SWQ7XG4gICAgfSBlbHNlIHtcbiAgICAgIGlmICghbWF4VGltZW91dElkICYmICFsZWFkaW5nKSB7XG4gICAgICAgIGxhc3RDYWxsZWQgPSBzdGFtcDtcbiAgICAgIH1cbiAgICAgIHZhciByZW1haW5pbmcgPSBtYXhXYWl0IC0gKHN0YW1wIC0gbGFzdENhbGxlZCksXG4gICAgICAgICAgaXNDYWxsZWQgPSByZW1haW5pbmcgPD0gMCB8fCByZW1haW5pbmcgPiBtYXhXYWl0O1xuXG4gICAgICBpZiAoaXNDYWxsZWQpIHtcbiAgICAgICAgaWYgKG1heFRpbWVvdXRJZCkge1xuICAgICAgICAgIG1heFRpbWVvdXRJZCA9IGNsZWFyVGltZW91dChtYXhUaW1lb3V0SWQpO1xuICAgICAgICB9XG4gICAgICAgIGxhc3RDYWxsZWQgPSBzdGFtcDtcbiAgICAgICAgcmVzdWx0ID0gZnVuYy5hcHBseSh0aGlzQXJnLCBhcmdzKTtcbiAgICAgIH1cbiAgICAgIGVsc2UgaWYgKCFtYXhUaW1lb3V0SWQpIHtcbiAgICAgICAgbWF4VGltZW91dElkID0gc2V0VGltZW91dChtYXhEZWxheWVkLCByZW1haW5pbmcpO1xuICAgICAgfVxuICAgIH1cbiAgICBpZiAoaXNDYWxsZWQgJiYgdGltZW91dElkKSB7XG4gICAgICB0aW1lb3V0SWQgPSBjbGVhclRpbWVvdXQodGltZW91dElkKTtcbiAgICB9XG4gICAgZWxzZSBpZiAoIXRpbWVvdXRJZCAmJiB3YWl0ICE9PSBtYXhXYWl0KSB7XG4gICAgICB0aW1lb3V0SWQgPSBzZXRUaW1lb3V0KGRlbGF5ZWQsIHdhaXQpO1xuICAgIH1cbiAgICBpZiAobGVhZGluZ0NhbGwpIHtcbiAgICAgIGlzQ2FsbGVkID0gdHJ1ZTtcbiAgICAgIHJlc3VsdCA9IGZ1bmMuYXBwbHkodGhpc0FyZywgYXJncyk7XG4gICAgfVxuICAgIGlmIChpc0NhbGxlZCAmJiAhdGltZW91dElkICYmICFtYXhUaW1lb3V0SWQpIHtcbiAgICAgIGFyZ3MgPSB0aGlzQXJnID0gbnVsbDtcbiAgICB9XG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfVxuICBkZWJvdW5jZWQuY2FuY2VsID0gY2FuY2VsO1xuICByZXR1cm4gZGVib3VuY2VkO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRlYm91bmNlO1xuIiwidmFyIE1hcENhY2hlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWwvTWFwQ2FjaGUnKTtcblxuLyoqIFVzZWQgYXMgdGhlIGBUeXBlRXJyb3JgIG1lc3NhZ2UgZm9yIFwiRnVuY3Rpb25zXCIgbWV0aG9kcy4gKi9cbnZhciBGVU5DX0VSUk9SX1RFWFQgPSAnRXhwZWN0ZWQgYSBmdW5jdGlvbic7XG5cbi8qKlxuICogQ3JlYXRlcyBhIGZ1bmN0aW9uIHRoYXQgbWVtb2l6ZXMgdGhlIHJlc3VsdCBvZiBgZnVuY2AuIElmIGByZXNvbHZlcmAgaXNcbiAqIHByb3ZpZGVkIGl0IGRldGVybWluZXMgdGhlIGNhY2hlIGtleSBmb3Igc3RvcmluZyB0aGUgcmVzdWx0IGJhc2VkIG9uIHRoZVxuICogYXJndW1lbnRzIHByb3ZpZGVkIHRvIHRoZSBtZW1vaXplZCBmdW5jdGlvbi4gQnkgZGVmYXVsdCwgdGhlIGZpcnN0IGFyZ3VtZW50XG4gKiBwcm92aWRlZCB0byB0aGUgbWVtb2l6ZWQgZnVuY3Rpb24gaXMgY29lcmNlZCB0byBhIHN0cmluZyBhbmQgdXNlZCBhcyB0aGVcbiAqIGNhY2hlIGtleS4gVGhlIGBmdW5jYCBpcyBpbnZva2VkIHdpdGggdGhlIGB0aGlzYCBiaW5kaW5nIG9mIHRoZSBtZW1vaXplZFxuICogZnVuY3Rpb24uXG4gKlxuICogKipOb3RlOioqIFRoZSBjYWNoZSBpcyBleHBvc2VkIGFzIHRoZSBgY2FjaGVgIHByb3BlcnR5IG9uIHRoZSBtZW1vaXplZFxuICogZnVuY3Rpb24uIEl0cyBjcmVhdGlvbiBtYXkgYmUgY3VzdG9taXplZCBieSByZXBsYWNpbmcgdGhlIGBfLm1lbW9pemUuQ2FjaGVgXG4gKiBjb25zdHJ1Y3RvciB3aXRoIG9uZSB3aG9zZSBpbnN0YW5jZXMgaW1wbGVtZW50IHRoZSBbYE1hcGBdKGh0dHBzOi8vcGVvcGxlLm1vemlsbGEub3JnL35qb3JlbmRvcmZmL2VzNi1kcmFmdC5odG1sI3NlYy1wcm9wZXJ0aWVzLW9mLXRoZS1tYXAtcHJvdG90eXBlLW9iamVjdClcbiAqIG1ldGhvZCBpbnRlcmZhY2Ugb2YgYGdldGAsIGBoYXNgLCBhbmQgYHNldGAuXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBjYXRlZ29yeSBGdW5jdGlvblxuICogQHBhcmFtIHtGdW5jdGlvbn0gZnVuYyBUaGUgZnVuY3Rpb24gdG8gaGF2ZSBpdHMgb3V0cHV0IG1lbW9pemVkLlxuICogQHBhcmFtIHtGdW5jdGlvbn0gW3Jlc29sdmVyXSBUaGUgZnVuY3Rpb24gdG8gcmVzb2x2ZSB0aGUgY2FjaGUga2V5LlxuICogQHJldHVybnMge0Z1bmN0aW9ufSBSZXR1cm5zIHRoZSBuZXcgbWVtb2l6aW5nIGZ1bmN0aW9uLlxuICogQGV4YW1wbGVcbiAqXG4gKiB2YXIgdXBwZXJDYXNlID0gXy5tZW1vaXplKGZ1bmN0aW9uKHN0cmluZykge1xuICogICByZXR1cm4gc3RyaW5nLnRvVXBwZXJDYXNlKCk7XG4gKiB9KTtcbiAqXG4gKiB1cHBlckNhc2UoJ2ZyZWQnKTtcbiAqIC8vID0+ICdGUkVEJ1xuICpcbiAqIC8vIG1vZGlmeWluZyB0aGUgcmVzdWx0IGNhY2hlXG4gKiB1cHBlckNhc2UuY2FjaGUuc2V0KCdmcmVkJywgJ0JBUk5FWScpO1xuICogdXBwZXJDYXNlKCdmcmVkJyk7XG4gKiAvLyA9PiAnQkFSTkVZJ1xuICpcbiAqIC8vIHJlcGxhY2luZyBgXy5tZW1vaXplLkNhY2hlYFxuICogdmFyIG9iamVjdCA9IHsgJ3VzZXInOiAnZnJlZCcgfTtcbiAqIHZhciBvdGhlciA9IHsgJ3VzZXInOiAnYmFybmV5JyB9O1xuICogdmFyIGlkZW50aXR5ID0gXy5tZW1vaXplKF8uaWRlbnRpdHkpO1xuICpcbiAqIGlkZW50aXR5KG9iamVjdCk7XG4gKiAvLyA9PiB7ICd1c2VyJzogJ2ZyZWQnIH1cbiAqIGlkZW50aXR5KG90aGVyKTtcbiAqIC8vID0+IHsgJ3VzZXInOiAnZnJlZCcgfVxuICpcbiAqIF8ubWVtb2l6ZS5DYWNoZSA9IFdlYWtNYXA7XG4gKiB2YXIgaWRlbnRpdHkgPSBfLm1lbW9pemUoXy5pZGVudGl0eSk7XG4gKlxuICogaWRlbnRpdHkob2JqZWN0KTtcbiAqIC8vID0+IHsgJ3VzZXInOiAnZnJlZCcgfVxuICogaWRlbnRpdHkob3RoZXIpO1xuICogLy8gPT4geyAndXNlcic6ICdiYXJuZXknIH1cbiAqL1xuZnVuY3Rpb24gbWVtb2l6ZShmdW5jLCByZXNvbHZlcikge1xuICBpZiAodHlwZW9mIGZ1bmMgIT0gJ2Z1bmN0aW9uJyB8fCAocmVzb2x2ZXIgJiYgdHlwZW9mIHJlc29sdmVyICE9ICdmdW5jdGlvbicpKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcihGVU5DX0VSUk9SX1RFWFQpO1xuICB9XG4gIHZhciBtZW1vaXplZCA9IGZ1bmN0aW9uKCkge1xuICAgIHZhciBhcmdzID0gYXJndW1lbnRzLFxuICAgICAgICBrZXkgPSByZXNvbHZlciA/IHJlc29sdmVyLmFwcGx5KHRoaXMsIGFyZ3MpIDogYXJnc1swXSxcbiAgICAgICAgY2FjaGUgPSBtZW1vaXplZC5jYWNoZTtcblxuICAgIGlmIChjYWNoZS5oYXMoa2V5KSkge1xuICAgICAgcmV0dXJuIGNhY2hlLmdldChrZXkpO1xuICAgIH1cbiAgICB2YXIgcmVzdWx0ID0gZnVuYy5hcHBseSh0aGlzLCBhcmdzKTtcbiAgICBtZW1vaXplZC5jYWNoZSA9IGNhY2hlLnNldChrZXksIHJlc3VsdCk7XG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfTtcbiAgbWVtb2l6ZWQuY2FjaGUgPSBuZXcgbWVtb2l6ZS5DYWNoZTtcbiAgcmV0dXJuIG1lbW9pemVkO1xufVxuXG4vLyBBc3NpZ24gY2FjaGUgdG8gYF8ubWVtb2l6ZWAuXG5tZW1vaXplLkNhY2hlID0gTWFwQ2FjaGU7XG5cbm1vZHVsZS5leHBvcnRzID0gbWVtb2l6ZTtcbiIsInZhciBtYXBEZWxldGUgPSByZXF1aXJlKCcuL21hcERlbGV0ZScpLFxuICAgIG1hcEdldCA9IHJlcXVpcmUoJy4vbWFwR2V0JyksXG4gICAgbWFwSGFzID0gcmVxdWlyZSgnLi9tYXBIYXMnKSxcbiAgICBtYXBTZXQgPSByZXF1aXJlKCcuL21hcFNldCcpO1xuXG4vKipcbiAqIENyZWF0ZXMgYSBjYWNoZSBvYmplY3QgdG8gc3RvcmUga2V5L3ZhbHVlIHBhaXJzLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAc3RhdGljXG4gKiBAbmFtZSBDYWNoZVxuICogQG1lbWJlck9mIF8ubWVtb2l6ZVxuICovXG5mdW5jdGlvbiBNYXBDYWNoZSgpIHtcbiAgdGhpcy5fX2RhdGFfXyA9IHt9O1xufVxuXG4vLyBBZGQgZnVuY3Rpb25zIHRvIHRoZSBgTWFwYCBjYWNoZS5cbk1hcENhY2hlLnByb3RvdHlwZVsnZGVsZXRlJ10gPSBtYXBEZWxldGU7XG5NYXBDYWNoZS5wcm90b3R5cGUuZ2V0ID0gbWFwR2V0O1xuTWFwQ2FjaGUucHJvdG90eXBlLmhhcyA9IG1hcEhhcztcbk1hcENhY2hlLnByb3RvdHlwZS5zZXQgPSBtYXBTZXQ7XG5cbm1vZHVsZS5leHBvcnRzID0gTWFwQ2FjaGU7XG4iLCIvKipcbiAqIEEgc3BlY2lhbGl6ZWQgdmVyc2lvbiBvZiBgXy5maWx0ZXJgIGZvciBhcnJheXMgd2l0aG91dCBzdXBwb3J0IGZvciBjYWxsYmFja1xuICogc2hvcnRoYW5kcyBhbmQgYHRoaXNgIGJpbmRpbmcuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7QXJyYXl9IGFycmF5IFRoZSBhcnJheSB0byBpdGVyYXRlIG92ZXIuXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBwcmVkaWNhdGUgVGhlIGZ1bmN0aW9uIGludm9rZWQgcGVyIGl0ZXJhdGlvbi5cbiAqIEByZXR1cm5zIHtBcnJheX0gUmV0dXJucyB0aGUgbmV3IGZpbHRlcmVkIGFycmF5LlxuICovXG5mdW5jdGlvbiBhcnJheUZpbHRlcihhcnJheSwgcHJlZGljYXRlKSB7XG4gIHZhciBpbmRleCA9IC0xLFxuICAgICAgbGVuZ3RoID0gYXJyYXkubGVuZ3RoLFxuICAgICAgcmVzSW5kZXggPSAtMSxcbiAgICAgIHJlc3VsdCA9IFtdO1xuXG4gIHdoaWxlICgrK2luZGV4IDwgbGVuZ3RoKSB7XG4gICAgdmFyIHZhbHVlID0gYXJyYXlbaW5kZXhdO1xuICAgIGlmIChwcmVkaWNhdGUodmFsdWUsIGluZGV4LCBhcnJheSkpIHtcbiAgICAgIHJlc3VsdFsrK3Jlc0luZGV4XSA9IHZhbHVlO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGFycmF5RmlsdGVyO1xuIiwiLyoqXG4gKiBBIHNwZWNpYWxpemVkIHZlcnNpb24gb2YgYF8ubWFwYCBmb3IgYXJyYXlzIHdpdGhvdXQgc3VwcG9ydCBmb3IgY2FsbGJhY2tcbiAqIHNob3J0aGFuZHMgYW5kIGB0aGlzYCBiaW5kaW5nLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge0FycmF5fSBhcnJheSBUaGUgYXJyYXkgdG8gaXRlcmF0ZSBvdmVyLlxuICogQHBhcmFtIHtGdW5jdGlvbn0gaXRlcmF0ZWUgVGhlIGZ1bmN0aW9uIGludm9rZWQgcGVyIGl0ZXJhdGlvbi5cbiAqIEByZXR1cm5zIHtBcnJheX0gUmV0dXJucyB0aGUgbmV3IG1hcHBlZCBhcnJheS5cbiAqL1xuZnVuY3Rpb24gYXJyYXlNYXAoYXJyYXksIGl0ZXJhdGVlKSB7XG4gIHZhciBpbmRleCA9IC0xLFxuICAgICAgbGVuZ3RoID0gYXJyYXkubGVuZ3RoLFxuICAgICAgcmVzdWx0ID0gQXJyYXkobGVuZ3RoKTtcblxuICB3aGlsZSAoKytpbmRleCA8IGxlbmd0aCkge1xuICAgIHJlc3VsdFtpbmRleF0gPSBpdGVyYXRlZShhcnJheVtpbmRleF0sIGluZGV4LCBhcnJheSk7XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBhcnJheU1hcDtcbiIsIi8qKlxuICogQSBzcGVjaWFsaXplZCB2ZXJzaW9uIG9mIGBfLnJlZHVjZWAgZm9yIGFycmF5cyB3aXRob3V0IHN1cHBvcnQgZm9yIGNhbGxiYWNrXG4gKiBzaG9ydGhhbmRzIGFuZCBgdGhpc2AgYmluZGluZy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtBcnJheX0gYXJyYXkgVGhlIGFycmF5IHRvIGl0ZXJhdGUgb3Zlci5cbiAqIEBwYXJhbSB7RnVuY3Rpb259IGl0ZXJhdGVlIFRoZSBmdW5jdGlvbiBpbnZva2VkIHBlciBpdGVyYXRpb24uXG4gKiBAcGFyYW0geyp9IFthY2N1bXVsYXRvcl0gVGhlIGluaXRpYWwgdmFsdWUuXG4gKiBAcGFyYW0ge2Jvb2xlYW59IFtpbml0RnJvbUFycmF5XSBTcGVjaWZ5IHVzaW5nIHRoZSBmaXJzdCBlbGVtZW50IG9mIGBhcnJheWBcbiAqICBhcyB0aGUgaW5pdGlhbCB2YWx1ZS5cbiAqIEByZXR1cm5zIHsqfSBSZXR1cm5zIHRoZSBhY2N1bXVsYXRlZCB2YWx1ZS5cbiAqL1xuZnVuY3Rpb24gYXJyYXlSZWR1Y2UoYXJyYXksIGl0ZXJhdGVlLCBhY2N1bXVsYXRvciwgaW5pdEZyb21BcnJheSkge1xuICB2YXIgaW5kZXggPSAtMSxcbiAgICAgIGxlbmd0aCA9IGFycmF5Lmxlbmd0aDtcblxuICBpZiAoaW5pdEZyb21BcnJheSAmJiBsZW5ndGgpIHtcbiAgICBhY2N1bXVsYXRvciA9IGFycmF5WysraW5kZXhdO1xuICB9XG4gIHdoaWxlICgrK2luZGV4IDwgbGVuZ3RoKSB7XG4gICAgYWNjdW11bGF0b3IgPSBpdGVyYXRlZShhY2N1bXVsYXRvciwgYXJyYXlbaW5kZXhdLCBpbmRleCwgYXJyYXkpO1xuICB9XG4gIHJldHVybiBhY2N1bXVsYXRvcjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBhcnJheVJlZHVjZTtcbiIsIi8qKlxuICogQSBzcGVjaWFsaXplZCB2ZXJzaW9uIG9mIGBfLnNvbWVgIGZvciBhcnJheXMgd2l0aG91dCBzdXBwb3J0IGZvciBjYWxsYmFja1xuICogc2hvcnRoYW5kcyBhbmQgYHRoaXNgIGJpbmRpbmcuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7QXJyYXl9IGFycmF5IFRoZSBhcnJheSB0byBpdGVyYXRlIG92ZXIuXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBwcmVkaWNhdGUgVGhlIGZ1bmN0aW9uIGludm9rZWQgcGVyIGl0ZXJhdGlvbi5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBhbnkgZWxlbWVudCBwYXNzZXMgdGhlIHByZWRpY2F0ZSBjaGVjayxcbiAqICBlbHNlIGBmYWxzZWAuXG4gKi9cbmZ1bmN0aW9uIGFycmF5U29tZShhcnJheSwgcHJlZGljYXRlKSB7XG4gIHZhciBpbmRleCA9IC0xLFxuICAgICAgbGVuZ3RoID0gYXJyYXkubGVuZ3RoO1xuXG4gIHdoaWxlICgrK2luZGV4IDwgbGVuZ3RoKSB7XG4gICAgaWYgKHByZWRpY2F0ZShhcnJheVtpbmRleF0sIGluZGV4LCBhcnJheSkpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgfVxuICByZXR1cm4gZmFsc2U7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gYXJyYXlTb21lO1xuIiwidmFyIGJhc2VNYXRjaGVzID0gcmVxdWlyZSgnLi9iYXNlTWF0Y2hlcycpLFxuICAgIGJhc2VNYXRjaGVzUHJvcGVydHkgPSByZXF1aXJlKCcuL2Jhc2VNYXRjaGVzUHJvcGVydHknKSxcbiAgICBiaW5kQ2FsbGJhY2sgPSByZXF1aXJlKCcuL2JpbmRDYWxsYmFjaycpLFxuICAgIGlkZW50aXR5ID0gcmVxdWlyZSgnLi4vdXRpbGl0eS9pZGVudGl0eScpLFxuICAgIHByb3BlcnR5ID0gcmVxdWlyZSgnLi4vdXRpbGl0eS9wcm9wZXJ0eScpO1xuXG4vKipcbiAqIFRoZSBiYXNlIGltcGxlbWVudGF0aW9uIG9mIGBfLmNhbGxiYWNrYCB3aGljaCBzdXBwb3J0cyBzcGVjaWZ5aW5nIHRoZVxuICogbnVtYmVyIG9mIGFyZ3VtZW50cyB0byBwcm92aWRlIHRvIGBmdW5jYC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHsqfSBbZnVuYz1fLmlkZW50aXR5XSBUaGUgdmFsdWUgdG8gY29udmVydCB0byBhIGNhbGxiYWNrLlxuICogQHBhcmFtIHsqfSBbdGhpc0FyZ10gVGhlIGB0aGlzYCBiaW5kaW5nIG9mIGBmdW5jYC5cbiAqIEBwYXJhbSB7bnVtYmVyfSBbYXJnQ291bnRdIFRoZSBudW1iZXIgb2YgYXJndW1lbnRzIHRvIHByb3ZpZGUgdG8gYGZ1bmNgLlxuICogQHJldHVybnMge0Z1bmN0aW9ufSBSZXR1cm5zIHRoZSBjYWxsYmFjay5cbiAqL1xuZnVuY3Rpb24gYmFzZUNhbGxiYWNrKGZ1bmMsIHRoaXNBcmcsIGFyZ0NvdW50KSB7XG4gIHZhciB0eXBlID0gdHlwZW9mIGZ1bmM7XG4gIGlmICh0eXBlID09ICdmdW5jdGlvbicpIHtcbiAgICByZXR1cm4gdGhpc0FyZyA9PT0gdW5kZWZpbmVkXG4gICAgICA/IGZ1bmNcbiAgICAgIDogYmluZENhbGxiYWNrKGZ1bmMsIHRoaXNBcmcsIGFyZ0NvdW50KTtcbiAgfVxuICBpZiAoZnVuYyA9PSBudWxsKSB7XG4gICAgcmV0dXJuIGlkZW50aXR5O1xuICB9XG4gIGlmICh0eXBlID09ICdvYmplY3QnKSB7XG4gICAgcmV0dXJuIGJhc2VNYXRjaGVzKGZ1bmMpO1xuICB9XG4gIHJldHVybiB0aGlzQXJnID09PSB1bmRlZmluZWRcbiAgICA/IHByb3BlcnR5KGZ1bmMpXG4gICAgOiBiYXNlTWF0Y2hlc1Byb3BlcnR5KGZ1bmMsIHRoaXNBcmcpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGJhc2VDYWxsYmFjaztcbiIsInZhciBiYXNlRm9yT3duID0gcmVxdWlyZSgnLi9iYXNlRm9yT3duJyksXG4gICAgY3JlYXRlQmFzZUVhY2ggPSByZXF1aXJlKCcuL2NyZWF0ZUJhc2VFYWNoJyk7XG5cbi8qKlxuICogVGhlIGJhc2UgaW1wbGVtZW50YXRpb24gb2YgYF8uZm9yRWFjaGAgd2l0aG91dCBzdXBwb3J0IGZvciBjYWxsYmFja1xuICogc2hvcnRoYW5kcyBhbmQgYHRoaXNgIGJpbmRpbmcuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7QXJyYXl8T2JqZWN0fHN0cmluZ30gY29sbGVjdGlvbiBUaGUgY29sbGVjdGlvbiB0byBpdGVyYXRlIG92ZXIuXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBpdGVyYXRlZSBUaGUgZnVuY3Rpb24gaW52b2tlZCBwZXIgaXRlcmF0aW9uLlxuICogQHJldHVybnMge0FycmF5fE9iamVjdHxzdHJpbmd9IFJldHVybnMgYGNvbGxlY3Rpb25gLlxuICovXG52YXIgYmFzZUVhY2ggPSBjcmVhdGVCYXNlRWFjaChiYXNlRm9yT3duKTtcblxubW9kdWxlLmV4cG9ydHMgPSBiYXNlRWFjaDtcbiIsInZhciBiYXNlRWFjaCA9IHJlcXVpcmUoJy4vYmFzZUVhY2gnKTtcblxuLyoqXG4gKiBUaGUgYmFzZSBpbXBsZW1lbnRhdGlvbiBvZiBgXy5maWx0ZXJgIHdpdGhvdXQgc3VwcG9ydCBmb3IgY2FsbGJhY2tcbiAqIHNob3J0aGFuZHMgYW5kIGB0aGlzYCBiaW5kaW5nLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge0FycmF5fE9iamVjdHxzdHJpbmd9IGNvbGxlY3Rpb24gVGhlIGNvbGxlY3Rpb24gdG8gaXRlcmF0ZSBvdmVyLlxuICogQHBhcmFtIHtGdW5jdGlvbn0gcHJlZGljYXRlIFRoZSBmdW5jdGlvbiBpbnZva2VkIHBlciBpdGVyYXRpb24uXG4gKiBAcmV0dXJucyB7QXJyYXl9IFJldHVybnMgdGhlIG5ldyBmaWx0ZXJlZCBhcnJheS5cbiAqL1xuZnVuY3Rpb24gYmFzZUZpbHRlcihjb2xsZWN0aW9uLCBwcmVkaWNhdGUpIHtcbiAgdmFyIHJlc3VsdCA9IFtdO1xuICBiYXNlRWFjaChjb2xsZWN0aW9uLCBmdW5jdGlvbih2YWx1ZSwgaW5kZXgsIGNvbGxlY3Rpb24pIHtcbiAgICBpZiAocHJlZGljYXRlKHZhbHVlLCBpbmRleCwgY29sbGVjdGlvbikpIHtcbiAgICAgIHJlc3VsdC5wdXNoKHZhbHVlKTtcbiAgICB9XG4gIH0pO1xuICByZXR1cm4gcmVzdWx0O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGJhc2VGaWx0ZXI7XG4iLCIvKipcbiAqIFRoZSBiYXNlIGltcGxlbWVudGF0aW9uIG9mIGBfLmZpbmRgLCBgXy5maW5kTGFzdGAsIGBfLmZpbmRLZXlgLCBhbmQgYF8uZmluZExhc3RLZXlgLFxuICogd2l0aG91dCBzdXBwb3J0IGZvciBjYWxsYmFjayBzaG9ydGhhbmRzIGFuZCBgdGhpc2AgYmluZGluZywgd2hpY2ggaXRlcmF0ZXNcbiAqIG92ZXIgYGNvbGxlY3Rpb25gIHVzaW5nIHRoZSBwcm92aWRlZCBgZWFjaEZ1bmNgLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge0FycmF5fE9iamVjdHxzdHJpbmd9IGNvbGxlY3Rpb24gVGhlIGNvbGxlY3Rpb24gdG8gc2VhcmNoLlxuICogQHBhcmFtIHtGdW5jdGlvbn0gcHJlZGljYXRlIFRoZSBmdW5jdGlvbiBpbnZva2VkIHBlciBpdGVyYXRpb24uXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBlYWNoRnVuYyBUaGUgZnVuY3Rpb24gdG8gaXRlcmF0ZSBvdmVyIGBjb2xsZWN0aW9uYC5cbiAqIEBwYXJhbSB7Ym9vbGVhbn0gW3JldEtleV0gU3BlY2lmeSByZXR1cm5pbmcgdGhlIGtleSBvZiB0aGUgZm91bmQgZWxlbWVudFxuICogIGluc3RlYWQgb2YgdGhlIGVsZW1lbnQgaXRzZWxmLlxuICogQHJldHVybnMgeyp9IFJldHVybnMgdGhlIGZvdW5kIGVsZW1lbnQgb3IgaXRzIGtleSwgZWxzZSBgdW5kZWZpbmVkYC5cbiAqL1xuZnVuY3Rpb24gYmFzZUZpbmQoY29sbGVjdGlvbiwgcHJlZGljYXRlLCBlYWNoRnVuYywgcmV0S2V5KSB7XG4gIHZhciByZXN1bHQ7XG4gIGVhY2hGdW5jKGNvbGxlY3Rpb24sIGZ1bmN0aW9uKHZhbHVlLCBrZXksIGNvbGxlY3Rpb24pIHtcbiAgICBpZiAocHJlZGljYXRlKHZhbHVlLCBrZXksIGNvbGxlY3Rpb24pKSB7XG4gICAgICByZXN1bHQgPSByZXRLZXkgPyBrZXkgOiB2YWx1ZTtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gIH0pO1xuICByZXR1cm4gcmVzdWx0O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGJhc2VGaW5kO1xuIiwiLyoqXG4gKiBUaGUgYmFzZSBpbXBsZW1lbnRhdGlvbiBvZiBgXy5maW5kSW5kZXhgIGFuZCBgXy5maW5kTGFzdEluZGV4YCB3aXRob3V0XG4gKiBzdXBwb3J0IGZvciBjYWxsYmFjayBzaG9ydGhhbmRzIGFuZCBgdGhpc2AgYmluZGluZy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtBcnJheX0gYXJyYXkgVGhlIGFycmF5IHRvIHNlYXJjaC5cbiAqIEBwYXJhbSB7RnVuY3Rpb259IHByZWRpY2F0ZSBUaGUgZnVuY3Rpb24gaW52b2tlZCBwZXIgaXRlcmF0aW9uLlxuICogQHBhcmFtIHtib29sZWFufSBbZnJvbVJpZ2h0XSBTcGVjaWZ5IGl0ZXJhdGluZyBmcm9tIHJpZ2h0IHRvIGxlZnQuXG4gKiBAcmV0dXJucyB7bnVtYmVyfSBSZXR1cm5zIHRoZSBpbmRleCBvZiB0aGUgbWF0Y2hlZCB2YWx1ZSwgZWxzZSBgLTFgLlxuICovXG5mdW5jdGlvbiBiYXNlRmluZEluZGV4KGFycmF5LCBwcmVkaWNhdGUsIGZyb21SaWdodCkge1xuICB2YXIgbGVuZ3RoID0gYXJyYXkubGVuZ3RoLFxuICAgICAgaW5kZXggPSBmcm9tUmlnaHQgPyBsZW5ndGggOiAtMTtcblxuICB3aGlsZSAoKGZyb21SaWdodCA/IGluZGV4LS0gOiArK2luZGV4IDwgbGVuZ3RoKSkge1xuICAgIGlmIChwcmVkaWNhdGUoYXJyYXlbaW5kZXhdLCBpbmRleCwgYXJyYXkpKSB7XG4gICAgICByZXR1cm4gaW5kZXg7XG4gICAgfVxuICB9XG4gIHJldHVybiAtMTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBiYXNlRmluZEluZGV4O1xuIiwidmFyIGNyZWF0ZUJhc2VGb3IgPSByZXF1aXJlKCcuL2NyZWF0ZUJhc2VGb3InKTtcblxuLyoqXG4gKiBUaGUgYmFzZSBpbXBsZW1lbnRhdGlvbiBvZiBgYmFzZUZvckluYCBhbmQgYGJhc2VGb3JPd25gIHdoaWNoIGl0ZXJhdGVzXG4gKiBvdmVyIGBvYmplY3RgIHByb3BlcnRpZXMgcmV0dXJuZWQgYnkgYGtleXNGdW5jYCBpbnZva2luZyBgaXRlcmF0ZWVgIGZvclxuICogZWFjaCBwcm9wZXJ0eS4gSXRlcmF0ZWUgZnVuY3Rpb25zIG1heSBleGl0IGl0ZXJhdGlvbiBlYXJseSBieSBleHBsaWNpdGx5XG4gKiByZXR1cm5pbmcgYGZhbHNlYC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtPYmplY3R9IG9iamVjdCBUaGUgb2JqZWN0IHRvIGl0ZXJhdGUgb3Zlci5cbiAqIEBwYXJhbSB7RnVuY3Rpb259IGl0ZXJhdGVlIFRoZSBmdW5jdGlvbiBpbnZva2VkIHBlciBpdGVyYXRpb24uXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBrZXlzRnVuYyBUaGUgZnVuY3Rpb24gdG8gZ2V0IHRoZSBrZXlzIG9mIGBvYmplY3RgLlxuICogQHJldHVybnMge09iamVjdH0gUmV0dXJucyBgb2JqZWN0YC5cbiAqL1xudmFyIGJhc2VGb3IgPSBjcmVhdGVCYXNlRm9yKCk7XG5cbm1vZHVsZS5leHBvcnRzID0gYmFzZUZvcjtcbiIsInZhciBiYXNlRm9yID0gcmVxdWlyZSgnLi9iYXNlRm9yJyksXG4gICAga2V5cyA9IHJlcXVpcmUoJy4uL29iamVjdC9rZXlzJyk7XG5cbi8qKlxuICogVGhlIGJhc2UgaW1wbGVtZW50YXRpb24gb2YgYF8uZm9yT3duYCB3aXRob3V0IHN1cHBvcnQgZm9yIGNhbGxiYWNrXG4gKiBzaG9ydGhhbmRzIGFuZCBgdGhpc2AgYmluZGluZy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtPYmplY3R9IG9iamVjdCBUaGUgb2JqZWN0IHRvIGl0ZXJhdGUgb3Zlci5cbiAqIEBwYXJhbSB7RnVuY3Rpb259IGl0ZXJhdGVlIFRoZSBmdW5jdGlvbiBpbnZva2VkIHBlciBpdGVyYXRpb24uXG4gKiBAcmV0dXJucyB7T2JqZWN0fSBSZXR1cm5zIGBvYmplY3RgLlxuICovXG5mdW5jdGlvbiBiYXNlRm9yT3duKG9iamVjdCwgaXRlcmF0ZWUpIHtcbiAgcmV0dXJuIGJhc2VGb3Iob2JqZWN0LCBpdGVyYXRlZSwga2V5cyk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gYmFzZUZvck93bjtcbiIsInZhciB0b09iamVjdCA9IHJlcXVpcmUoJy4vdG9PYmplY3QnKTtcblxuLyoqXG4gKiBUaGUgYmFzZSBpbXBsZW1lbnRhdGlvbiBvZiBgZ2V0YCB3aXRob3V0IHN1cHBvcnQgZm9yIHN0cmluZyBwYXRoc1xuICogYW5kIGRlZmF1bHQgdmFsdWVzLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge09iamVjdH0gb2JqZWN0IFRoZSBvYmplY3QgdG8gcXVlcnkuXG4gKiBAcGFyYW0ge0FycmF5fSBwYXRoIFRoZSBwYXRoIG9mIHRoZSBwcm9wZXJ0eSB0byBnZXQuXG4gKiBAcGFyYW0ge3N0cmluZ30gW3BhdGhLZXldIFRoZSBrZXkgcmVwcmVzZW50YXRpb24gb2YgcGF0aC5cbiAqIEByZXR1cm5zIHsqfSBSZXR1cm5zIHRoZSByZXNvbHZlZCB2YWx1ZS5cbiAqL1xuZnVuY3Rpb24gYmFzZUdldChvYmplY3QsIHBhdGgsIHBhdGhLZXkpIHtcbiAgaWYgKG9iamVjdCA9PSBudWxsKSB7XG4gICAgcmV0dXJuO1xuICB9XG4gIGlmIChwYXRoS2V5ICE9PSB1bmRlZmluZWQgJiYgcGF0aEtleSBpbiB0b09iamVjdChvYmplY3QpKSB7XG4gICAgcGF0aCA9IFtwYXRoS2V5XTtcbiAgfVxuICB2YXIgaW5kZXggPSAwLFxuICAgICAgbGVuZ3RoID0gcGF0aC5sZW5ndGg7XG5cbiAgd2hpbGUgKG9iamVjdCAhPSBudWxsICYmIGluZGV4IDwgbGVuZ3RoKSB7XG4gICAgb2JqZWN0ID0gb2JqZWN0W3BhdGhbaW5kZXgrK11dO1xuICB9XG4gIHJldHVybiAoaW5kZXggJiYgaW5kZXggPT0gbGVuZ3RoKSA/IG9iamVjdCA6IHVuZGVmaW5lZDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBiYXNlR2V0O1xuIiwidmFyIGJhc2VJc0VxdWFsRGVlcCA9IHJlcXVpcmUoJy4vYmFzZUlzRXF1YWxEZWVwJyksXG4gICAgaXNPYmplY3QgPSByZXF1aXJlKCcuLi9sYW5nL2lzT2JqZWN0JyksXG4gICAgaXNPYmplY3RMaWtlID0gcmVxdWlyZSgnLi9pc09iamVjdExpa2UnKTtcblxuLyoqXG4gKiBUaGUgYmFzZSBpbXBsZW1lbnRhdGlvbiBvZiBgXy5pc0VxdWFsYCB3aXRob3V0IHN1cHBvcnQgZm9yIGB0aGlzYCBiaW5kaW5nXG4gKiBgY3VzdG9taXplcmAgZnVuY3Rpb25zLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjb21wYXJlLlxuICogQHBhcmFtIHsqfSBvdGhlciBUaGUgb3RoZXIgdmFsdWUgdG8gY29tcGFyZS5cbiAqIEBwYXJhbSB7RnVuY3Rpb259IFtjdXN0b21pemVyXSBUaGUgZnVuY3Rpb24gdG8gY3VzdG9taXplIGNvbXBhcmluZyB2YWx1ZXMuXG4gKiBAcGFyYW0ge2Jvb2xlYW59IFtpc0xvb3NlXSBTcGVjaWZ5IHBlcmZvcm1pbmcgcGFydGlhbCBjb21wYXJpc29ucy5cbiAqIEBwYXJhbSB7QXJyYXl9IFtzdGFja0FdIFRyYWNrcyB0cmF2ZXJzZWQgYHZhbHVlYCBvYmplY3RzLlxuICogQHBhcmFtIHtBcnJheX0gW3N0YWNrQl0gVHJhY2tzIHRyYXZlcnNlZCBgb3RoZXJgIG9iamVjdHMuXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgdGhlIHZhbHVlcyBhcmUgZXF1aXZhbGVudCwgZWxzZSBgZmFsc2VgLlxuICovXG5mdW5jdGlvbiBiYXNlSXNFcXVhbCh2YWx1ZSwgb3RoZXIsIGN1c3RvbWl6ZXIsIGlzTG9vc2UsIHN0YWNrQSwgc3RhY2tCKSB7XG4gIGlmICh2YWx1ZSA9PT0gb3RoZXIpIHtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuICBpZiAodmFsdWUgPT0gbnVsbCB8fCBvdGhlciA9PSBudWxsIHx8ICghaXNPYmplY3QodmFsdWUpICYmICFpc09iamVjdExpa2Uob3RoZXIpKSkge1xuICAgIHJldHVybiB2YWx1ZSAhPT0gdmFsdWUgJiYgb3RoZXIgIT09IG90aGVyO1xuICB9XG4gIHJldHVybiBiYXNlSXNFcXVhbERlZXAodmFsdWUsIG90aGVyLCBiYXNlSXNFcXVhbCwgY3VzdG9taXplciwgaXNMb29zZSwgc3RhY2tBLCBzdGFja0IpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGJhc2VJc0VxdWFsO1xuIiwidmFyIGVxdWFsQXJyYXlzID0gcmVxdWlyZSgnLi9lcXVhbEFycmF5cycpLFxuICAgIGVxdWFsQnlUYWcgPSByZXF1aXJlKCcuL2VxdWFsQnlUYWcnKSxcbiAgICBlcXVhbE9iamVjdHMgPSByZXF1aXJlKCcuL2VxdWFsT2JqZWN0cycpLFxuICAgIGlzQXJyYXkgPSByZXF1aXJlKCcuLi9sYW5nL2lzQXJyYXknKSxcbiAgICBpc1R5cGVkQXJyYXkgPSByZXF1aXJlKCcuLi9sYW5nL2lzVHlwZWRBcnJheScpO1xuXG4vKiogYE9iamVjdCN0b1N0cmluZ2AgcmVzdWx0IHJlZmVyZW5jZXMuICovXG52YXIgYXJnc1RhZyA9ICdbb2JqZWN0IEFyZ3VtZW50c10nLFxuICAgIGFycmF5VGFnID0gJ1tvYmplY3QgQXJyYXldJyxcbiAgICBvYmplY3RUYWcgPSAnW29iamVjdCBPYmplY3RdJztcblxuLyoqIFVzZWQgZm9yIG5hdGl2ZSBtZXRob2QgcmVmZXJlbmNlcy4gKi9cbnZhciBvYmplY3RQcm90byA9IE9iamVjdC5wcm90b3R5cGU7XG5cbi8qKiBVc2VkIHRvIGNoZWNrIG9iamVjdHMgZm9yIG93biBwcm9wZXJ0aWVzLiAqL1xudmFyIGhhc093blByb3BlcnR5ID0gb2JqZWN0UHJvdG8uaGFzT3duUHJvcGVydHk7XG5cbi8qKlxuICogVXNlZCB0byByZXNvbHZlIHRoZSBbYHRvU3RyaW5nVGFnYF0oaHR0cHM6Ly9wZW9wbGUubW96aWxsYS5vcmcvfmpvcmVuZG9yZmYvZXM2LWRyYWZ0Lmh0bWwjc2VjLW9iamVjdC5wcm90b3R5cGUudG9zdHJpbmcpXG4gKiBvZiB2YWx1ZXMuXG4gKi9cbnZhciBvYmpUb1N0cmluZyA9IG9iamVjdFByb3RvLnRvU3RyaW5nO1xuXG4vKipcbiAqIEEgc3BlY2lhbGl6ZWQgdmVyc2lvbiBvZiBgYmFzZUlzRXF1YWxgIGZvciBhcnJheXMgYW5kIG9iamVjdHMgd2hpY2ggcGVyZm9ybXNcbiAqIGRlZXAgY29tcGFyaXNvbnMgYW5kIHRyYWNrcyB0cmF2ZXJzZWQgb2JqZWN0cyBlbmFibGluZyBvYmplY3RzIHdpdGggY2lyY3VsYXJcbiAqIHJlZmVyZW5jZXMgdG8gYmUgY29tcGFyZWQuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7T2JqZWN0fSBvYmplY3QgVGhlIG9iamVjdCB0byBjb21wYXJlLlxuICogQHBhcmFtIHtPYmplY3R9IG90aGVyIFRoZSBvdGhlciBvYmplY3QgdG8gY29tcGFyZS5cbiAqIEBwYXJhbSB7RnVuY3Rpb259IGVxdWFsRnVuYyBUaGUgZnVuY3Rpb24gdG8gZGV0ZXJtaW5lIGVxdWl2YWxlbnRzIG9mIHZhbHVlcy5cbiAqIEBwYXJhbSB7RnVuY3Rpb259IFtjdXN0b21pemVyXSBUaGUgZnVuY3Rpb24gdG8gY3VzdG9taXplIGNvbXBhcmluZyBvYmplY3RzLlxuICogQHBhcmFtIHtib29sZWFufSBbaXNMb29zZV0gU3BlY2lmeSBwZXJmb3JtaW5nIHBhcnRpYWwgY29tcGFyaXNvbnMuXG4gKiBAcGFyYW0ge0FycmF5fSBbc3RhY2tBPVtdXSBUcmFja3MgdHJhdmVyc2VkIGB2YWx1ZWAgb2JqZWN0cy5cbiAqIEBwYXJhbSB7QXJyYXl9IFtzdGFja0I9W11dIFRyYWNrcyB0cmF2ZXJzZWQgYG90aGVyYCBvYmplY3RzLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIHRoZSBvYmplY3RzIGFyZSBlcXVpdmFsZW50LCBlbHNlIGBmYWxzZWAuXG4gKi9cbmZ1bmN0aW9uIGJhc2VJc0VxdWFsRGVlcChvYmplY3QsIG90aGVyLCBlcXVhbEZ1bmMsIGN1c3RvbWl6ZXIsIGlzTG9vc2UsIHN0YWNrQSwgc3RhY2tCKSB7XG4gIHZhciBvYmpJc0FyciA9IGlzQXJyYXkob2JqZWN0KSxcbiAgICAgIG90aElzQXJyID0gaXNBcnJheShvdGhlciksXG4gICAgICBvYmpUYWcgPSBhcnJheVRhZyxcbiAgICAgIG90aFRhZyA9IGFycmF5VGFnO1xuXG4gIGlmICghb2JqSXNBcnIpIHtcbiAgICBvYmpUYWcgPSBvYmpUb1N0cmluZy5jYWxsKG9iamVjdCk7XG4gICAgaWYgKG9ialRhZyA9PSBhcmdzVGFnKSB7XG4gICAgICBvYmpUYWcgPSBvYmplY3RUYWc7XG4gICAgfSBlbHNlIGlmIChvYmpUYWcgIT0gb2JqZWN0VGFnKSB7XG4gICAgICBvYmpJc0FyciA9IGlzVHlwZWRBcnJheShvYmplY3QpO1xuICAgIH1cbiAgfVxuICBpZiAoIW90aElzQXJyKSB7XG4gICAgb3RoVGFnID0gb2JqVG9TdHJpbmcuY2FsbChvdGhlcik7XG4gICAgaWYgKG90aFRhZyA9PSBhcmdzVGFnKSB7XG4gICAgICBvdGhUYWcgPSBvYmplY3RUYWc7XG4gICAgfSBlbHNlIGlmIChvdGhUYWcgIT0gb2JqZWN0VGFnKSB7XG4gICAgICBvdGhJc0FyciA9IGlzVHlwZWRBcnJheShvdGhlcik7XG4gICAgfVxuICB9XG4gIHZhciBvYmpJc09iaiA9IG9ialRhZyA9PSBvYmplY3RUYWcsXG4gICAgICBvdGhJc09iaiA9IG90aFRhZyA9PSBvYmplY3RUYWcsXG4gICAgICBpc1NhbWVUYWcgPSBvYmpUYWcgPT0gb3RoVGFnO1xuXG4gIGlmIChpc1NhbWVUYWcgJiYgIShvYmpJc0FyciB8fCBvYmpJc09iaikpIHtcbiAgICByZXR1cm4gZXF1YWxCeVRhZyhvYmplY3QsIG90aGVyLCBvYmpUYWcpO1xuICB9XG4gIGlmICghaXNMb29zZSkge1xuICAgIHZhciBvYmpJc1dyYXBwZWQgPSBvYmpJc09iaiAmJiBoYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgJ19fd3JhcHBlZF9fJyksXG4gICAgICAgIG90aElzV3JhcHBlZCA9IG90aElzT2JqICYmIGhhc093blByb3BlcnR5LmNhbGwob3RoZXIsICdfX3dyYXBwZWRfXycpO1xuXG4gICAgaWYgKG9iaklzV3JhcHBlZCB8fCBvdGhJc1dyYXBwZWQpIHtcbiAgICAgIHJldHVybiBlcXVhbEZ1bmMob2JqSXNXcmFwcGVkID8gb2JqZWN0LnZhbHVlKCkgOiBvYmplY3QsIG90aElzV3JhcHBlZCA/IG90aGVyLnZhbHVlKCkgOiBvdGhlciwgY3VzdG9taXplciwgaXNMb29zZSwgc3RhY2tBLCBzdGFja0IpO1xuICAgIH1cbiAgfVxuICBpZiAoIWlzU2FtZVRhZykge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICAvLyBBc3N1bWUgY3ljbGljIHZhbHVlcyBhcmUgZXF1YWwuXG4gIC8vIEZvciBtb3JlIGluZm9ybWF0aW9uIG9uIGRldGVjdGluZyBjaXJjdWxhciByZWZlcmVuY2VzIHNlZSBodHRwczovL2VzNS5naXRodWIuaW8vI0pPLlxuICBzdGFja0EgfHwgKHN0YWNrQSA9IFtdKTtcbiAgc3RhY2tCIHx8IChzdGFja0IgPSBbXSk7XG5cbiAgdmFyIGxlbmd0aCA9IHN0YWNrQS5sZW5ndGg7XG4gIHdoaWxlIChsZW5ndGgtLSkge1xuICAgIGlmIChzdGFja0FbbGVuZ3RoXSA9PSBvYmplY3QpIHtcbiAgICAgIHJldHVybiBzdGFja0JbbGVuZ3RoXSA9PSBvdGhlcjtcbiAgICB9XG4gIH1cbiAgLy8gQWRkIGBvYmplY3RgIGFuZCBgb3RoZXJgIHRvIHRoZSBzdGFjayBvZiB0cmF2ZXJzZWQgb2JqZWN0cy5cbiAgc3RhY2tBLnB1c2gob2JqZWN0KTtcbiAgc3RhY2tCLnB1c2gob3RoZXIpO1xuXG4gIHZhciByZXN1bHQgPSAob2JqSXNBcnIgPyBlcXVhbEFycmF5cyA6IGVxdWFsT2JqZWN0cykob2JqZWN0LCBvdGhlciwgZXF1YWxGdW5jLCBjdXN0b21pemVyLCBpc0xvb3NlLCBzdGFja0EsIHN0YWNrQik7XG5cbiAgc3RhY2tBLnBvcCgpO1xuICBzdGFja0IucG9wKCk7XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBiYXNlSXNFcXVhbERlZXA7XG4iLCJ2YXIgYmFzZUlzRXF1YWwgPSByZXF1aXJlKCcuL2Jhc2VJc0VxdWFsJyksXG4gICAgdG9PYmplY3QgPSByZXF1aXJlKCcuL3RvT2JqZWN0Jyk7XG5cbi8qKlxuICogVGhlIGJhc2UgaW1wbGVtZW50YXRpb24gb2YgYF8uaXNNYXRjaGAgd2l0aG91dCBzdXBwb3J0IGZvciBjYWxsYmFja1xuICogc2hvcnRoYW5kcyBhbmQgYHRoaXNgIGJpbmRpbmcuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7T2JqZWN0fSBvYmplY3QgVGhlIG9iamVjdCB0byBpbnNwZWN0LlxuICogQHBhcmFtIHtBcnJheX0gbWF0Y2hEYXRhIFRoZSBwcm9wZXJ5IG5hbWVzLCB2YWx1ZXMsIGFuZCBjb21wYXJlIGZsYWdzIHRvIG1hdGNoLlxuICogQHBhcmFtIHtGdW5jdGlvbn0gW2N1c3RvbWl6ZXJdIFRoZSBmdW5jdGlvbiB0byBjdXN0b21pemUgY29tcGFyaW5nIG9iamVjdHMuXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYG9iamVjdGAgaXMgYSBtYXRjaCwgZWxzZSBgZmFsc2VgLlxuICovXG5mdW5jdGlvbiBiYXNlSXNNYXRjaChvYmplY3QsIG1hdGNoRGF0YSwgY3VzdG9taXplcikge1xuICB2YXIgaW5kZXggPSBtYXRjaERhdGEubGVuZ3RoLFxuICAgICAgbGVuZ3RoID0gaW5kZXgsXG4gICAgICBub0N1c3RvbWl6ZXIgPSAhY3VzdG9taXplcjtcblxuICBpZiAob2JqZWN0ID09IG51bGwpIHtcbiAgICByZXR1cm4gIWxlbmd0aDtcbiAgfVxuICBvYmplY3QgPSB0b09iamVjdChvYmplY3QpO1xuICB3aGlsZSAoaW5kZXgtLSkge1xuICAgIHZhciBkYXRhID0gbWF0Y2hEYXRhW2luZGV4XTtcbiAgICBpZiAoKG5vQ3VzdG9taXplciAmJiBkYXRhWzJdKVxuICAgICAgICAgID8gZGF0YVsxXSAhPT0gb2JqZWN0W2RhdGFbMF1dXG4gICAgICAgICAgOiAhKGRhdGFbMF0gaW4gb2JqZWN0KVxuICAgICAgICApIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gIH1cbiAgd2hpbGUgKCsraW5kZXggPCBsZW5ndGgpIHtcbiAgICBkYXRhID0gbWF0Y2hEYXRhW2luZGV4XTtcbiAgICB2YXIga2V5ID0gZGF0YVswXSxcbiAgICAgICAgb2JqVmFsdWUgPSBvYmplY3Rba2V5XSxcbiAgICAgICAgc3JjVmFsdWUgPSBkYXRhWzFdO1xuXG4gICAgaWYgKG5vQ3VzdG9taXplciAmJiBkYXRhWzJdKSB7XG4gICAgICBpZiAob2JqVmFsdWUgPT09IHVuZGVmaW5lZCAmJiAhKGtleSBpbiBvYmplY3QpKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHJlc3VsdCA9IGN1c3RvbWl6ZXIgPyBjdXN0b21pemVyKG9ialZhbHVlLCBzcmNWYWx1ZSwga2V5KSA6IHVuZGVmaW5lZDtcbiAgICAgIGlmICghKHJlc3VsdCA9PT0gdW5kZWZpbmVkID8gYmFzZUlzRXF1YWwoc3JjVmFsdWUsIG9ialZhbHVlLCBjdXN0b21pemVyLCB0cnVlKSA6IHJlc3VsdCkpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuICAgIH1cbiAgfVxuICByZXR1cm4gdHJ1ZTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBiYXNlSXNNYXRjaDtcbiIsInZhciBiYXNlRWFjaCA9IHJlcXVpcmUoJy4vYmFzZUVhY2gnKSxcbiAgICBpc0FycmF5TGlrZSA9IHJlcXVpcmUoJy4vaXNBcnJheUxpa2UnKTtcblxuLyoqXG4gKiBUaGUgYmFzZSBpbXBsZW1lbnRhdGlvbiBvZiBgXy5tYXBgIHdpdGhvdXQgc3VwcG9ydCBmb3IgY2FsbGJhY2sgc2hvcnRoYW5kc1xuICogYW5kIGB0aGlzYCBiaW5kaW5nLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge0FycmF5fE9iamVjdHxzdHJpbmd9IGNvbGxlY3Rpb24gVGhlIGNvbGxlY3Rpb24gdG8gaXRlcmF0ZSBvdmVyLlxuICogQHBhcmFtIHtGdW5jdGlvbn0gaXRlcmF0ZWUgVGhlIGZ1bmN0aW9uIGludm9rZWQgcGVyIGl0ZXJhdGlvbi5cbiAqIEByZXR1cm5zIHtBcnJheX0gUmV0dXJucyB0aGUgbmV3IG1hcHBlZCBhcnJheS5cbiAqL1xuZnVuY3Rpb24gYmFzZU1hcChjb2xsZWN0aW9uLCBpdGVyYXRlZSkge1xuICB2YXIgaW5kZXggPSAtMSxcbiAgICAgIHJlc3VsdCA9IGlzQXJyYXlMaWtlKGNvbGxlY3Rpb24pID8gQXJyYXkoY29sbGVjdGlvbi5sZW5ndGgpIDogW107XG5cbiAgYmFzZUVhY2goY29sbGVjdGlvbiwgZnVuY3Rpb24odmFsdWUsIGtleSwgY29sbGVjdGlvbikge1xuICAgIHJlc3VsdFsrK2luZGV4XSA9IGl0ZXJhdGVlKHZhbHVlLCBrZXksIGNvbGxlY3Rpb24pO1xuICB9KTtcbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBiYXNlTWFwO1xuIiwidmFyIGJhc2VJc01hdGNoID0gcmVxdWlyZSgnLi9iYXNlSXNNYXRjaCcpLFxuICAgIGdldE1hdGNoRGF0YSA9IHJlcXVpcmUoJy4vZ2V0TWF0Y2hEYXRhJyksXG4gICAgdG9PYmplY3QgPSByZXF1aXJlKCcuL3RvT2JqZWN0Jyk7XG5cbi8qKlxuICogVGhlIGJhc2UgaW1wbGVtZW50YXRpb24gb2YgYF8ubWF0Y2hlc2Agd2hpY2ggZG9lcyBub3QgY2xvbmUgYHNvdXJjZWAuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7T2JqZWN0fSBzb3VyY2UgVGhlIG9iamVjdCBvZiBwcm9wZXJ0eSB2YWx1ZXMgdG8gbWF0Y2guXG4gKiBAcmV0dXJucyB7RnVuY3Rpb259IFJldHVybnMgdGhlIG5ldyBmdW5jdGlvbi5cbiAqL1xuZnVuY3Rpb24gYmFzZU1hdGNoZXMoc291cmNlKSB7XG4gIHZhciBtYXRjaERhdGEgPSBnZXRNYXRjaERhdGEoc291cmNlKTtcbiAgaWYgKG1hdGNoRGF0YS5sZW5ndGggPT0gMSAmJiBtYXRjaERhdGFbMF1bMl0pIHtcbiAgICB2YXIga2V5ID0gbWF0Y2hEYXRhWzBdWzBdLFxuICAgICAgICB2YWx1ZSA9IG1hdGNoRGF0YVswXVsxXTtcblxuICAgIHJldHVybiBmdW5jdGlvbihvYmplY3QpIHtcbiAgICAgIGlmIChvYmplY3QgPT0gbnVsbCkge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9XG4gICAgICByZXR1cm4gb2JqZWN0W2tleV0gPT09IHZhbHVlICYmICh2YWx1ZSAhPT0gdW5kZWZpbmVkIHx8IChrZXkgaW4gdG9PYmplY3Qob2JqZWN0KSkpO1xuICAgIH07XG4gIH1cbiAgcmV0dXJuIGZ1bmN0aW9uKG9iamVjdCkge1xuICAgIHJldHVybiBiYXNlSXNNYXRjaChvYmplY3QsIG1hdGNoRGF0YSk7XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gYmFzZU1hdGNoZXM7XG4iLCJ2YXIgYmFzZUdldCA9IHJlcXVpcmUoJy4vYmFzZUdldCcpLFxuICAgIGJhc2VJc0VxdWFsID0gcmVxdWlyZSgnLi9iYXNlSXNFcXVhbCcpLFxuICAgIGJhc2VTbGljZSA9IHJlcXVpcmUoJy4vYmFzZVNsaWNlJyksXG4gICAgaXNBcnJheSA9IHJlcXVpcmUoJy4uL2xhbmcvaXNBcnJheScpLFxuICAgIGlzS2V5ID0gcmVxdWlyZSgnLi9pc0tleScpLFxuICAgIGlzU3RyaWN0Q29tcGFyYWJsZSA9IHJlcXVpcmUoJy4vaXNTdHJpY3RDb21wYXJhYmxlJyksXG4gICAgbGFzdCA9IHJlcXVpcmUoJy4uL2FycmF5L2xhc3QnKSxcbiAgICB0b09iamVjdCA9IHJlcXVpcmUoJy4vdG9PYmplY3QnKSxcbiAgICB0b1BhdGggPSByZXF1aXJlKCcuL3RvUGF0aCcpO1xuXG4vKipcbiAqIFRoZSBiYXNlIGltcGxlbWVudGF0aW9uIG9mIGBfLm1hdGNoZXNQcm9wZXJ0eWAgd2hpY2ggZG9lcyBub3QgY2xvbmUgYHNyY1ZhbHVlYC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtzdHJpbmd9IHBhdGggVGhlIHBhdGggb2YgdGhlIHByb3BlcnR5IHRvIGdldC5cbiAqIEBwYXJhbSB7Kn0gc3JjVmFsdWUgVGhlIHZhbHVlIHRvIGNvbXBhcmUuXG4gKiBAcmV0dXJucyB7RnVuY3Rpb259IFJldHVybnMgdGhlIG5ldyBmdW5jdGlvbi5cbiAqL1xuZnVuY3Rpb24gYmFzZU1hdGNoZXNQcm9wZXJ0eShwYXRoLCBzcmNWYWx1ZSkge1xuICB2YXIgaXNBcnIgPSBpc0FycmF5KHBhdGgpLFxuICAgICAgaXNDb21tb24gPSBpc0tleShwYXRoKSAmJiBpc1N0cmljdENvbXBhcmFibGUoc3JjVmFsdWUpLFxuICAgICAgcGF0aEtleSA9IChwYXRoICsgJycpO1xuXG4gIHBhdGggPSB0b1BhdGgocGF0aCk7XG4gIHJldHVybiBmdW5jdGlvbihvYmplY3QpIHtcbiAgICBpZiAob2JqZWN0ID09IG51bGwpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgdmFyIGtleSA9IHBhdGhLZXk7XG4gICAgb2JqZWN0ID0gdG9PYmplY3Qob2JqZWN0KTtcbiAgICBpZiAoKGlzQXJyIHx8ICFpc0NvbW1vbikgJiYgIShrZXkgaW4gb2JqZWN0KSkge1xuICAgICAgb2JqZWN0ID0gcGF0aC5sZW5ndGggPT0gMSA/IG9iamVjdCA6IGJhc2VHZXQob2JqZWN0LCBiYXNlU2xpY2UocGF0aCwgMCwgLTEpKTtcbiAgICAgIGlmIChvYmplY3QgPT0gbnVsbCkge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9XG4gICAgICBrZXkgPSBsYXN0KHBhdGgpO1xuICAgICAgb2JqZWN0ID0gdG9PYmplY3Qob2JqZWN0KTtcbiAgICB9XG4gICAgcmV0dXJuIG9iamVjdFtrZXldID09PSBzcmNWYWx1ZVxuICAgICAgPyAoc3JjVmFsdWUgIT09IHVuZGVmaW5lZCB8fCAoa2V5IGluIG9iamVjdCkpXG4gICAgICA6IGJhc2VJc0VxdWFsKHNyY1ZhbHVlLCBvYmplY3Rba2V5XSwgdW5kZWZpbmVkLCB0cnVlKTtcbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBiYXNlTWF0Y2hlc1Byb3BlcnR5O1xuIiwiLyoqXG4gKiBUaGUgYmFzZSBpbXBsZW1lbnRhdGlvbiBvZiBgXy5wcm9wZXJ0eWAgd2l0aG91dCBzdXBwb3J0IGZvciBkZWVwIHBhdGhzLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge3N0cmluZ30ga2V5IFRoZSBrZXkgb2YgdGhlIHByb3BlcnR5IHRvIGdldC5cbiAqIEByZXR1cm5zIHtGdW5jdGlvbn0gUmV0dXJucyB0aGUgbmV3IGZ1bmN0aW9uLlxuICovXG5mdW5jdGlvbiBiYXNlUHJvcGVydHkoa2V5KSB7XG4gIHJldHVybiBmdW5jdGlvbihvYmplY3QpIHtcbiAgICByZXR1cm4gb2JqZWN0ID09IG51bGwgPyB1bmRlZmluZWQgOiBvYmplY3Rba2V5XTtcbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBiYXNlUHJvcGVydHk7XG4iLCJ2YXIgYmFzZUdldCA9IHJlcXVpcmUoJy4vYmFzZUdldCcpLFxuICAgIHRvUGF0aCA9IHJlcXVpcmUoJy4vdG9QYXRoJyk7XG5cbi8qKlxuICogQSBzcGVjaWFsaXplZCB2ZXJzaW9uIG9mIGBiYXNlUHJvcGVydHlgIHdoaWNoIHN1cHBvcnRzIGRlZXAgcGF0aHMuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7QXJyYXl8c3RyaW5nfSBwYXRoIFRoZSBwYXRoIG9mIHRoZSBwcm9wZXJ0eSB0byBnZXQuXG4gKiBAcmV0dXJucyB7RnVuY3Rpb259IFJldHVybnMgdGhlIG5ldyBmdW5jdGlvbi5cbiAqL1xuZnVuY3Rpb24gYmFzZVByb3BlcnR5RGVlcChwYXRoKSB7XG4gIHZhciBwYXRoS2V5ID0gKHBhdGggKyAnJyk7XG4gIHBhdGggPSB0b1BhdGgocGF0aCk7XG4gIHJldHVybiBmdW5jdGlvbihvYmplY3QpIHtcbiAgICByZXR1cm4gYmFzZUdldChvYmplY3QsIHBhdGgsIHBhdGhLZXkpO1xuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGJhc2VQcm9wZXJ0eURlZXA7XG4iLCIvKipcbiAqIFRoZSBiYXNlIGltcGxlbWVudGF0aW9uIG9mIGBfLnJlZHVjZWAgYW5kIGBfLnJlZHVjZVJpZ2h0YCB3aXRob3V0IHN1cHBvcnRcbiAqIGZvciBjYWxsYmFjayBzaG9ydGhhbmRzIGFuZCBgdGhpc2AgYmluZGluZywgd2hpY2ggaXRlcmF0ZXMgb3ZlciBgY29sbGVjdGlvbmBcbiAqIHVzaW5nIHRoZSBwcm92aWRlZCBgZWFjaEZ1bmNgLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge0FycmF5fE9iamVjdHxzdHJpbmd9IGNvbGxlY3Rpb24gVGhlIGNvbGxlY3Rpb24gdG8gaXRlcmF0ZSBvdmVyLlxuICogQHBhcmFtIHtGdW5jdGlvbn0gaXRlcmF0ZWUgVGhlIGZ1bmN0aW9uIGludm9rZWQgcGVyIGl0ZXJhdGlvbi5cbiAqIEBwYXJhbSB7Kn0gYWNjdW11bGF0b3IgVGhlIGluaXRpYWwgdmFsdWUuXG4gKiBAcGFyYW0ge2Jvb2xlYW59IGluaXRGcm9tQ29sbGVjdGlvbiBTcGVjaWZ5IHVzaW5nIHRoZSBmaXJzdCBvciBsYXN0IGVsZW1lbnRcbiAqICBvZiBgY29sbGVjdGlvbmAgYXMgdGhlIGluaXRpYWwgdmFsdWUuXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBlYWNoRnVuYyBUaGUgZnVuY3Rpb24gdG8gaXRlcmF0ZSBvdmVyIGBjb2xsZWN0aW9uYC5cbiAqIEByZXR1cm5zIHsqfSBSZXR1cm5zIHRoZSBhY2N1bXVsYXRlZCB2YWx1ZS5cbiAqL1xuZnVuY3Rpb24gYmFzZVJlZHVjZShjb2xsZWN0aW9uLCBpdGVyYXRlZSwgYWNjdW11bGF0b3IsIGluaXRGcm9tQ29sbGVjdGlvbiwgZWFjaEZ1bmMpIHtcbiAgZWFjaEZ1bmMoY29sbGVjdGlvbiwgZnVuY3Rpb24odmFsdWUsIGluZGV4LCBjb2xsZWN0aW9uKSB7XG4gICAgYWNjdW11bGF0b3IgPSBpbml0RnJvbUNvbGxlY3Rpb25cbiAgICAgID8gKGluaXRGcm9tQ29sbGVjdGlvbiA9IGZhbHNlLCB2YWx1ZSlcbiAgICAgIDogaXRlcmF0ZWUoYWNjdW11bGF0b3IsIHZhbHVlLCBpbmRleCwgY29sbGVjdGlvbik7XG4gIH0pO1xuICByZXR1cm4gYWNjdW11bGF0b3I7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gYmFzZVJlZHVjZTtcbiIsIi8qKlxuICogVGhlIGJhc2UgaW1wbGVtZW50YXRpb24gb2YgYF8uc2xpY2VgIHdpdGhvdXQgYW4gaXRlcmF0ZWUgY2FsbCBndWFyZC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtBcnJheX0gYXJyYXkgVGhlIGFycmF5IHRvIHNsaWNlLlxuICogQHBhcmFtIHtudW1iZXJ9IFtzdGFydD0wXSBUaGUgc3RhcnQgcG9zaXRpb24uXG4gKiBAcGFyYW0ge251bWJlcn0gW2VuZD1hcnJheS5sZW5ndGhdIFRoZSBlbmQgcG9zaXRpb24uXG4gKiBAcmV0dXJucyB7QXJyYXl9IFJldHVybnMgdGhlIHNsaWNlIG9mIGBhcnJheWAuXG4gKi9cbmZ1bmN0aW9uIGJhc2VTbGljZShhcnJheSwgc3RhcnQsIGVuZCkge1xuICB2YXIgaW5kZXggPSAtMSxcbiAgICAgIGxlbmd0aCA9IGFycmF5Lmxlbmd0aDtcblxuICBzdGFydCA9IHN0YXJ0ID09IG51bGwgPyAwIDogKCtzdGFydCB8fCAwKTtcbiAgaWYgKHN0YXJ0IDwgMCkge1xuICAgIHN0YXJ0ID0gLXN0YXJ0ID4gbGVuZ3RoID8gMCA6IChsZW5ndGggKyBzdGFydCk7XG4gIH1cbiAgZW5kID0gKGVuZCA9PT0gdW5kZWZpbmVkIHx8IGVuZCA+IGxlbmd0aCkgPyBsZW5ndGggOiAoK2VuZCB8fCAwKTtcbiAgaWYgKGVuZCA8IDApIHtcbiAgICBlbmQgKz0gbGVuZ3RoO1xuICB9XG4gIGxlbmd0aCA9IHN0YXJ0ID4gZW5kID8gMCA6ICgoZW5kIC0gc3RhcnQpID4+PiAwKTtcbiAgc3RhcnQgPj4+PSAwO1xuXG4gIHZhciByZXN1bHQgPSBBcnJheShsZW5ndGgpO1xuICB3aGlsZSAoKytpbmRleCA8IGxlbmd0aCkge1xuICAgIHJlc3VsdFtpbmRleF0gPSBhcnJheVtpbmRleCArIHN0YXJ0XTtcbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGJhc2VTbGljZTtcbiIsInZhciBiYXNlRWFjaCA9IHJlcXVpcmUoJy4vYmFzZUVhY2gnKTtcblxuLyoqXG4gKiBUaGUgYmFzZSBpbXBsZW1lbnRhdGlvbiBvZiBgXy5zb21lYCB3aXRob3V0IHN1cHBvcnQgZm9yIGNhbGxiYWNrIHNob3J0aGFuZHNcbiAqIGFuZCBgdGhpc2AgYmluZGluZy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtBcnJheXxPYmplY3R8c3RyaW5nfSBjb2xsZWN0aW9uIFRoZSBjb2xsZWN0aW9uIHRvIGl0ZXJhdGUgb3Zlci5cbiAqIEBwYXJhbSB7RnVuY3Rpb259IHByZWRpY2F0ZSBUaGUgZnVuY3Rpb24gaW52b2tlZCBwZXIgaXRlcmF0aW9uLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGFueSBlbGVtZW50IHBhc3NlcyB0aGUgcHJlZGljYXRlIGNoZWNrLFxuICogIGVsc2UgYGZhbHNlYC5cbiAqL1xuZnVuY3Rpb24gYmFzZVNvbWUoY29sbGVjdGlvbiwgcHJlZGljYXRlKSB7XG4gIHZhciByZXN1bHQ7XG5cbiAgYmFzZUVhY2goY29sbGVjdGlvbiwgZnVuY3Rpb24odmFsdWUsIGluZGV4LCBjb2xsZWN0aW9uKSB7XG4gICAgcmVzdWx0ID0gcHJlZGljYXRlKHZhbHVlLCBpbmRleCwgY29sbGVjdGlvbik7XG4gICAgcmV0dXJuICFyZXN1bHQ7XG4gIH0pO1xuICByZXR1cm4gISFyZXN1bHQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gYmFzZVNvbWU7XG4iLCIvKipcbiAqIENvbnZlcnRzIGB2YWx1ZWAgdG8gYSBzdHJpbmcgaWYgaXQncyBub3Qgb25lLiBBbiBlbXB0eSBzdHJpbmcgaXMgcmV0dXJuZWRcbiAqIGZvciBgbnVsbGAgb3IgYHVuZGVmaW5lZGAgdmFsdWVzLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBwcm9jZXNzLlxuICogQHJldHVybnMge3N0cmluZ30gUmV0dXJucyB0aGUgc3RyaW5nLlxuICovXG5mdW5jdGlvbiBiYXNlVG9TdHJpbmcodmFsdWUpIHtcbiAgaWYgKHR5cGVvZiB2YWx1ZSA9PSAnc3RyaW5nJykge1xuICAgIHJldHVybiB2YWx1ZTtcbiAgfVxuICByZXR1cm4gdmFsdWUgPT0gbnVsbCA/ICcnIDogKHZhbHVlICsgJycpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGJhc2VUb1N0cmluZztcbiIsInZhciBpZGVudGl0eSA9IHJlcXVpcmUoJy4uL3V0aWxpdHkvaWRlbnRpdHknKTtcblxuLyoqXG4gKiBBIHNwZWNpYWxpemVkIHZlcnNpb24gb2YgYGJhc2VDYWxsYmFja2Agd2hpY2ggb25seSBzdXBwb3J0cyBgdGhpc2AgYmluZGluZ1xuICogYW5kIHNwZWNpZnlpbmcgdGhlIG51bWJlciBvZiBhcmd1bWVudHMgdG8gcHJvdmlkZSB0byBgZnVuY2AuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7RnVuY3Rpb259IGZ1bmMgVGhlIGZ1bmN0aW9uIHRvIGJpbmQuXG4gKiBAcGFyYW0geyp9IHRoaXNBcmcgVGhlIGB0aGlzYCBiaW5kaW5nIG9mIGBmdW5jYC5cbiAqIEBwYXJhbSB7bnVtYmVyfSBbYXJnQ291bnRdIFRoZSBudW1iZXIgb2YgYXJndW1lbnRzIHRvIHByb3ZpZGUgdG8gYGZ1bmNgLlxuICogQHJldHVybnMge0Z1bmN0aW9ufSBSZXR1cm5zIHRoZSBjYWxsYmFjay5cbiAqL1xuZnVuY3Rpb24gYmluZENhbGxiYWNrKGZ1bmMsIHRoaXNBcmcsIGFyZ0NvdW50KSB7XG4gIGlmICh0eXBlb2YgZnVuYyAhPSAnZnVuY3Rpb24nKSB7XG4gICAgcmV0dXJuIGlkZW50aXR5O1xuICB9XG4gIGlmICh0aGlzQXJnID09PSB1bmRlZmluZWQpIHtcbiAgICByZXR1cm4gZnVuYztcbiAgfVxuICBzd2l0Y2ggKGFyZ0NvdW50KSB7XG4gICAgY2FzZSAxOiByZXR1cm4gZnVuY3Rpb24odmFsdWUpIHtcbiAgICAgIHJldHVybiBmdW5jLmNhbGwodGhpc0FyZywgdmFsdWUpO1xuICAgIH07XG4gICAgY2FzZSAzOiByZXR1cm4gZnVuY3Rpb24odmFsdWUsIGluZGV4LCBjb2xsZWN0aW9uKSB7XG4gICAgICByZXR1cm4gZnVuYy5jYWxsKHRoaXNBcmcsIHZhbHVlLCBpbmRleCwgY29sbGVjdGlvbik7XG4gICAgfTtcbiAgICBjYXNlIDQ6IHJldHVybiBmdW5jdGlvbihhY2N1bXVsYXRvciwgdmFsdWUsIGluZGV4LCBjb2xsZWN0aW9uKSB7XG4gICAgICByZXR1cm4gZnVuYy5jYWxsKHRoaXNBcmcsIGFjY3VtdWxhdG9yLCB2YWx1ZSwgaW5kZXgsIGNvbGxlY3Rpb24pO1xuICAgIH07XG4gICAgY2FzZSA1OiByZXR1cm4gZnVuY3Rpb24odmFsdWUsIG90aGVyLCBrZXksIG9iamVjdCwgc291cmNlKSB7XG4gICAgICByZXR1cm4gZnVuYy5jYWxsKHRoaXNBcmcsIHZhbHVlLCBvdGhlciwga2V5LCBvYmplY3QsIHNvdXJjZSk7XG4gICAgfTtcbiAgfVxuICByZXR1cm4gZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIGZ1bmMuYXBwbHkodGhpc0FyZywgYXJndW1lbnRzKTtcbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBiaW5kQ2FsbGJhY2s7XG4iLCIvKipcbiAqIFVzZWQgYnkgYF8udHJpbWAgYW5kIGBfLnRyaW1MZWZ0YCB0byBnZXQgdGhlIGluZGV4IG9mIHRoZSBmaXJzdCBjaGFyYWN0ZXJcbiAqIG9mIGBzdHJpbmdgIHRoYXQgaXMgbm90IGZvdW5kIGluIGBjaGFyc2AuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7c3RyaW5nfSBzdHJpbmcgVGhlIHN0cmluZyB0byBpbnNwZWN0LlxuICogQHBhcmFtIHtzdHJpbmd9IGNoYXJzIFRoZSBjaGFyYWN0ZXJzIHRvIGZpbmQuXG4gKiBAcmV0dXJucyB7bnVtYmVyfSBSZXR1cm5zIHRoZSBpbmRleCBvZiB0aGUgZmlyc3QgY2hhcmFjdGVyIG5vdCBmb3VuZCBpbiBgY2hhcnNgLlxuICovXG5mdW5jdGlvbiBjaGFyc0xlZnRJbmRleChzdHJpbmcsIGNoYXJzKSB7XG4gIHZhciBpbmRleCA9IC0xLFxuICAgICAgbGVuZ3RoID0gc3RyaW5nLmxlbmd0aDtcblxuICB3aGlsZSAoKytpbmRleCA8IGxlbmd0aCAmJiBjaGFycy5pbmRleE9mKHN0cmluZy5jaGFyQXQoaW5kZXgpKSA+IC0xKSB7fVxuICByZXR1cm4gaW5kZXg7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gY2hhcnNMZWZ0SW5kZXg7XG4iLCIvKipcbiAqIFVzZWQgYnkgYF8udHJpbWAgYW5kIGBfLnRyaW1SaWdodGAgdG8gZ2V0IHRoZSBpbmRleCBvZiB0aGUgbGFzdCBjaGFyYWN0ZXJcbiAqIG9mIGBzdHJpbmdgIHRoYXQgaXMgbm90IGZvdW5kIGluIGBjaGFyc2AuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7c3RyaW5nfSBzdHJpbmcgVGhlIHN0cmluZyB0byBpbnNwZWN0LlxuICogQHBhcmFtIHtzdHJpbmd9IGNoYXJzIFRoZSBjaGFyYWN0ZXJzIHRvIGZpbmQuXG4gKiBAcmV0dXJucyB7bnVtYmVyfSBSZXR1cm5zIHRoZSBpbmRleCBvZiB0aGUgbGFzdCBjaGFyYWN0ZXIgbm90IGZvdW5kIGluIGBjaGFyc2AuXG4gKi9cbmZ1bmN0aW9uIGNoYXJzUmlnaHRJbmRleChzdHJpbmcsIGNoYXJzKSB7XG4gIHZhciBpbmRleCA9IHN0cmluZy5sZW5ndGg7XG5cbiAgd2hpbGUgKGluZGV4LS0gJiYgY2hhcnMuaW5kZXhPZihzdHJpbmcuY2hhckF0KGluZGV4KSkgPiAtMSkge31cbiAgcmV0dXJuIGluZGV4O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGNoYXJzUmlnaHRJbmRleDtcbiIsInZhciBnZXRMZW5ndGggPSByZXF1aXJlKCcuL2dldExlbmd0aCcpLFxuICAgIGlzTGVuZ3RoID0gcmVxdWlyZSgnLi9pc0xlbmd0aCcpLFxuICAgIHRvT2JqZWN0ID0gcmVxdWlyZSgnLi90b09iamVjdCcpO1xuXG4vKipcbiAqIENyZWF0ZXMgYSBgYmFzZUVhY2hgIG9yIGBiYXNlRWFjaFJpZ2h0YCBmdW5jdGlvbi5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtGdW5jdGlvbn0gZWFjaEZ1bmMgVGhlIGZ1bmN0aW9uIHRvIGl0ZXJhdGUgb3ZlciBhIGNvbGxlY3Rpb24uXG4gKiBAcGFyYW0ge2Jvb2xlYW59IFtmcm9tUmlnaHRdIFNwZWNpZnkgaXRlcmF0aW5nIGZyb20gcmlnaHQgdG8gbGVmdC5cbiAqIEByZXR1cm5zIHtGdW5jdGlvbn0gUmV0dXJucyB0aGUgbmV3IGJhc2UgZnVuY3Rpb24uXG4gKi9cbmZ1bmN0aW9uIGNyZWF0ZUJhc2VFYWNoKGVhY2hGdW5jLCBmcm9tUmlnaHQpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uKGNvbGxlY3Rpb24sIGl0ZXJhdGVlKSB7XG4gICAgdmFyIGxlbmd0aCA9IGNvbGxlY3Rpb24gPyBnZXRMZW5ndGgoY29sbGVjdGlvbikgOiAwO1xuICAgIGlmICghaXNMZW5ndGgobGVuZ3RoKSkge1xuICAgICAgcmV0dXJuIGVhY2hGdW5jKGNvbGxlY3Rpb24sIGl0ZXJhdGVlKTtcbiAgICB9XG4gICAgdmFyIGluZGV4ID0gZnJvbVJpZ2h0ID8gbGVuZ3RoIDogLTEsXG4gICAgICAgIGl0ZXJhYmxlID0gdG9PYmplY3QoY29sbGVjdGlvbik7XG5cbiAgICB3aGlsZSAoKGZyb21SaWdodCA/IGluZGV4LS0gOiArK2luZGV4IDwgbGVuZ3RoKSkge1xuICAgICAgaWYgKGl0ZXJhdGVlKGl0ZXJhYmxlW2luZGV4XSwgaW5kZXgsIGl0ZXJhYmxlKSA9PT0gZmFsc2UpIHtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBjb2xsZWN0aW9uO1xuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGNyZWF0ZUJhc2VFYWNoO1xuIiwidmFyIHRvT2JqZWN0ID0gcmVxdWlyZSgnLi90b09iamVjdCcpO1xuXG4vKipcbiAqIENyZWF0ZXMgYSBiYXNlIGZ1bmN0aW9uIGZvciBgXy5mb3JJbmAgb3IgYF8uZm9ySW5SaWdodGAuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7Ym9vbGVhbn0gW2Zyb21SaWdodF0gU3BlY2lmeSBpdGVyYXRpbmcgZnJvbSByaWdodCB0byBsZWZ0LlxuICogQHJldHVybnMge0Z1bmN0aW9ufSBSZXR1cm5zIHRoZSBuZXcgYmFzZSBmdW5jdGlvbi5cbiAqL1xuZnVuY3Rpb24gY3JlYXRlQmFzZUZvcihmcm9tUmlnaHQpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uKG9iamVjdCwgaXRlcmF0ZWUsIGtleXNGdW5jKSB7XG4gICAgdmFyIGl0ZXJhYmxlID0gdG9PYmplY3Qob2JqZWN0KSxcbiAgICAgICAgcHJvcHMgPSBrZXlzRnVuYyhvYmplY3QpLFxuICAgICAgICBsZW5ndGggPSBwcm9wcy5sZW5ndGgsXG4gICAgICAgIGluZGV4ID0gZnJvbVJpZ2h0ID8gbGVuZ3RoIDogLTE7XG5cbiAgICB3aGlsZSAoKGZyb21SaWdodCA/IGluZGV4LS0gOiArK2luZGV4IDwgbGVuZ3RoKSkge1xuICAgICAgdmFyIGtleSA9IHByb3BzW2luZGV4XTtcbiAgICAgIGlmIChpdGVyYXRlZShpdGVyYWJsZVtrZXldLCBrZXksIGl0ZXJhYmxlKSA9PT0gZmFsc2UpIHtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBvYmplY3Q7XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gY3JlYXRlQmFzZUZvcjtcbiIsInZhciBiYXNlQ2FsbGJhY2sgPSByZXF1aXJlKCcuL2Jhc2VDYWxsYmFjaycpLFxuICAgIGJhc2VGaW5kID0gcmVxdWlyZSgnLi9iYXNlRmluZCcpLFxuICAgIGJhc2VGaW5kSW5kZXggPSByZXF1aXJlKCcuL2Jhc2VGaW5kSW5kZXgnKSxcbiAgICBpc0FycmF5ID0gcmVxdWlyZSgnLi4vbGFuZy9pc0FycmF5Jyk7XG5cbi8qKlxuICogQ3JlYXRlcyBhIGBfLmZpbmRgIG9yIGBfLmZpbmRMYXN0YCBmdW5jdGlvbi5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtGdW5jdGlvbn0gZWFjaEZ1bmMgVGhlIGZ1bmN0aW9uIHRvIGl0ZXJhdGUgb3ZlciBhIGNvbGxlY3Rpb24uXG4gKiBAcGFyYW0ge2Jvb2xlYW59IFtmcm9tUmlnaHRdIFNwZWNpZnkgaXRlcmF0aW5nIGZyb20gcmlnaHQgdG8gbGVmdC5cbiAqIEByZXR1cm5zIHtGdW5jdGlvbn0gUmV0dXJucyB0aGUgbmV3IGZpbmQgZnVuY3Rpb24uXG4gKi9cbmZ1bmN0aW9uIGNyZWF0ZUZpbmQoZWFjaEZ1bmMsIGZyb21SaWdodCkge1xuICByZXR1cm4gZnVuY3Rpb24oY29sbGVjdGlvbiwgcHJlZGljYXRlLCB0aGlzQXJnKSB7XG4gICAgcHJlZGljYXRlID0gYmFzZUNhbGxiYWNrKHByZWRpY2F0ZSwgdGhpc0FyZywgMyk7XG4gICAgaWYgKGlzQXJyYXkoY29sbGVjdGlvbikpIHtcbiAgICAgIHZhciBpbmRleCA9IGJhc2VGaW5kSW5kZXgoY29sbGVjdGlvbiwgcHJlZGljYXRlLCBmcm9tUmlnaHQpO1xuICAgICAgcmV0dXJuIGluZGV4ID4gLTEgPyBjb2xsZWN0aW9uW2luZGV4XSA6IHVuZGVmaW5lZDtcbiAgICB9XG4gICAgcmV0dXJuIGJhc2VGaW5kKGNvbGxlY3Rpb24sIHByZWRpY2F0ZSwgZWFjaEZ1bmMpO1xuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGNyZWF0ZUZpbmQ7XG4iLCJ2YXIgYmFzZUNhbGxiYWNrID0gcmVxdWlyZSgnLi9iYXNlQ2FsbGJhY2snKSxcbiAgICBiYXNlRmluZEluZGV4ID0gcmVxdWlyZSgnLi9iYXNlRmluZEluZGV4Jyk7XG5cbi8qKlxuICogQ3JlYXRlcyBhIGBfLmZpbmRJbmRleGAgb3IgYF8uZmluZExhc3RJbmRleGAgZnVuY3Rpb24uXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7Ym9vbGVhbn0gW2Zyb21SaWdodF0gU3BlY2lmeSBpdGVyYXRpbmcgZnJvbSByaWdodCB0byBsZWZ0LlxuICogQHJldHVybnMge0Z1bmN0aW9ufSBSZXR1cm5zIHRoZSBuZXcgZmluZCBmdW5jdGlvbi5cbiAqL1xuZnVuY3Rpb24gY3JlYXRlRmluZEluZGV4KGZyb21SaWdodCkge1xuICByZXR1cm4gZnVuY3Rpb24oYXJyYXksIHByZWRpY2F0ZSwgdGhpc0FyZykge1xuICAgIGlmICghKGFycmF5ICYmIGFycmF5Lmxlbmd0aCkpIHtcbiAgICAgIHJldHVybiAtMTtcbiAgICB9XG4gICAgcHJlZGljYXRlID0gYmFzZUNhbGxiYWNrKHByZWRpY2F0ZSwgdGhpc0FyZywgMyk7XG4gICAgcmV0dXJuIGJhc2VGaW5kSW5kZXgoYXJyYXksIHByZWRpY2F0ZSwgZnJvbVJpZ2h0KTtcbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBjcmVhdGVGaW5kSW5kZXg7XG4iLCJ2YXIgYmFzZUNhbGxiYWNrID0gcmVxdWlyZSgnLi9iYXNlQ2FsbGJhY2snKSxcbiAgICBiYXNlUmVkdWNlID0gcmVxdWlyZSgnLi9iYXNlUmVkdWNlJyksXG4gICAgaXNBcnJheSA9IHJlcXVpcmUoJy4uL2xhbmcvaXNBcnJheScpO1xuXG4vKipcbiAqIENyZWF0ZXMgYSBmdW5jdGlvbiBmb3IgYF8ucmVkdWNlYCBvciBgXy5yZWR1Y2VSaWdodGAuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7RnVuY3Rpb259IGFycmF5RnVuYyBUaGUgZnVuY3Rpb24gdG8gaXRlcmF0ZSBvdmVyIGFuIGFycmF5LlxuICogQHBhcmFtIHtGdW5jdGlvbn0gZWFjaEZ1bmMgVGhlIGZ1bmN0aW9uIHRvIGl0ZXJhdGUgb3ZlciBhIGNvbGxlY3Rpb24uXG4gKiBAcmV0dXJucyB7RnVuY3Rpb259IFJldHVybnMgdGhlIG5ldyBlYWNoIGZ1bmN0aW9uLlxuICovXG5mdW5jdGlvbiBjcmVhdGVSZWR1Y2UoYXJyYXlGdW5jLCBlYWNoRnVuYykge1xuICByZXR1cm4gZnVuY3Rpb24oY29sbGVjdGlvbiwgaXRlcmF0ZWUsIGFjY3VtdWxhdG9yLCB0aGlzQXJnKSB7XG4gICAgdmFyIGluaXRGcm9tQXJyYXkgPSBhcmd1bWVudHMubGVuZ3RoIDwgMztcbiAgICByZXR1cm4gKHR5cGVvZiBpdGVyYXRlZSA9PSAnZnVuY3Rpb24nICYmIHRoaXNBcmcgPT09IHVuZGVmaW5lZCAmJiBpc0FycmF5KGNvbGxlY3Rpb24pKVxuICAgICAgPyBhcnJheUZ1bmMoY29sbGVjdGlvbiwgaXRlcmF0ZWUsIGFjY3VtdWxhdG9yLCBpbml0RnJvbUFycmF5KVxuICAgICAgOiBiYXNlUmVkdWNlKGNvbGxlY3Rpb24sIGJhc2VDYWxsYmFjayhpdGVyYXRlZSwgdGhpc0FyZywgNCksIGFjY3VtdWxhdG9yLCBpbml0RnJvbUFycmF5LCBlYWNoRnVuYyk7XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gY3JlYXRlUmVkdWNlO1xuIiwidmFyIGFycmF5U29tZSA9IHJlcXVpcmUoJy4vYXJyYXlTb21lJyk7XG5cbi8qKlxuICogQSBzcGVjaWFsaXplZCB2ZXJzaW9uIG9mIGBiYXNlSXNFcXVhbERlZXBgIGZvciBhcnJheXMgd2l0aCBzdXBwb3J0IGZvclxuICogcGFydGlhbCBkZWVwIGNvbXBhcmlzb25zLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge0FycmF5fSBhcnJheSBUaGUgYXJyYXkgdG8gY29tcGFyZS5cbiAqIEBwYXJhbSB7QXJyYXl9IG90aGVyIFRoZSBvdGhlciBhcnJheSB0byBjb21wYXJlLlxuICogQHBhcmFtIHtGdW5jdGlvbn0gZXF1YWxGdW5jIFRoZSBmdW5jdGlvbiB0byBkZXRlcm1pbmUgZXF1aXZhbGVudHMgb2YgdmFsdWVzLlxuICogQHBhcmFtIHtGdW5jdGlvbn0gW2N1c3RvbWl6ZXJdIFRoZSBmdW5jdGlvbiB0byBjdXN0b21pemUgY29tcGFyaW5nIGFycmF5cy5cbiAqIEBwYXJhbSB7Ym9vbGVhbn0gW2lzTG9vc2VdIFNwZWNpZnkgcGVyZm9ybWluZyBwYXJ0aWFsIGNvbXBhcmlzb25zLlxuICogQHBhcmFtIHtBcnJheX0gW3N0YWNrQV0gVHJhY2tzIHRyYXZlcnNlZCBgdmFsdWVgIG9iamVjdHMuXG4gKiBAcGFyYW0ge0FycmF5fSBbc3RhY2tCXSBUcmFja3MgdHJhdmVyc2VkIGBvdGhlcmAgb2JqZWN0cy5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiB0aGUgYXJyYXlzIGFyZSBlcXVpdmFsZW50LCBlbHNlIGBmYWxzZWAuXG4gKi9cbmZ1bmN0aW9uIGVxdWFsQXJyYXlzKGFycmF5LCBvdGhlciwgZXF1YWxGdW5jLCBjdXN0b21pemVyLCBpc0xvb3NlLCBzdGFja0EsIHN0YWNrQikge1xuICB2YXIgaW5kZXggPSAtMSxcbiAgICAgIGFyckxlbmd0aCA9IGFycmF5Lmxlbmd0aCxcbiAgICAgIG90aExlbmd0aCA9IG90aGVyLmxlbmd0aDtcblxuICBpZiAoYXJyTGVuZ3RoICE9IG90aExlbmd0aCAmJiAhKGlzTG9vc2UgJiYgb3RoTGVuZ3RoID4gYXJyTGVuZ3RoKSkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICAvLyBJZ25vcmUgbm9uLWluZGV4IHByb3BlcnRpZXMuXG4gIHdoaWxlICgrK2luZGV4IDwgYXJyTGVuZ3RoKSB7XG4gICAgdmFyIGFyclZhbHVlID0gYXJyYXlbaW5kZXhdLFxuICAgICAgICBvdGhWYWx1ZSA9IG90aGVyW2luZGV4XSxcbiAgICAgICAgcmVzdWx0ID0gY3VzdG9taXplciA/IGN1c3RvbWl6ZXIoaXNMb29zZSA/IG90aFZhbHVlIDogYXJyVmFsdWUsIGlzTG9vc2UgPyBhcnJWYWx1ZSA6IG90aFZhbHVlLCBpbmRleCkgOiB1bmRlZmluZWQ7XG5cbiAgICBpZiAocmVzdWx0ICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIGlmIChyZXN1bHQpIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIC8vIFJlY3Vyc2l2ZWx5IGNvbXBhcmUgYXJyYXlzIChzdXNjZXB0aWJsZSB0byBjYWxsIHN0YWNrIGxpbWl0cykuXG4gICAgaWYgKGlzTG9vc2UpIHtcbiAgICAgIGlmICghYXJyYXlTb21lKG90aGVyLCBmdW5jdGlvbihvdGhWYWx1ZSkge1xuICAgICAgICAgICAgcmV0dXJuIGFyclZhbHVlID09PSBvdGhWYWx1ZSB8fCBlcXVhbEZ1bmMoYXJyVmFsdWUsIG90aFZhbHVlLCBjdXN0b21pemVyLCBpc0xvb3NlLCBzdGFja0EsIHN0YWNrQik7XG4gICAgICAgICAgfSkpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuICAgIH0gZWxzZSBpZiAoIShhcnJWYWx1ZSA9PT0gb3RoVmFsdWUgfHwgZXF1YWxGdW5jKGFyclZhbHVlLCBvdGhWYWx1ZSwgY3VzdG9taXplciwgaXNMb29zZSwgc3RhY2tBLCBzdGFja0IpKSkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgfVxuICByZXR1cm4gdHJ1ZTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBlcXVhbEFycmF5cztcbiIsIi8qKiBgT2JqZWN0I3RvU3RyaW5nYCByZXN1bHQgcmVmZXJlbmNlcy4gKi9cbnZhciBib29sVGFnID0gJ1tvYmplY3QgQm9vbGVhbl0nLFxuICAgIGRhdGVUYWcgPSAnW29iamVjdCBEYXRlXScsXG4gICAgZXJyb3JUYWcgPSAnW29iamVjdCBFcnJvcl0nLFxuICAgIG51bWJlclRhZyA9ICdbb2JqZWN0IE51bWJlcl0nLFxuICAgIHJlZ2V4cFRhZyA9ICdbb2JqZWN0IFJlZ0V4cF0nLFxuICAgIHN0cmluZ1RhZyA9ICdbb2JqZWN0IFN0cmluZ10nO1xuXG4vKipcbiAqIEEgc3BlY2lhbGl6ZWQgdmVyc2lvbiBvZiBgYmFzZUlzRXF1YWxEZWVwYCBmb3IgY29tcGFyaW5nIG9iamVjdHMgb2ZcbiAqIHRoZSBzYW1lIGB0b1N0cmluZ1RhZ2AuXG4gKlxuICogKipOb3RlOioqIFRoaXMgZnVuY3Rpb24gb25seSBzdXBwb3J0cyBjb21wYXJpbmcgdmFsdWVzIHdpdGggdGFncyBvZlxuICogYEJvb2xlYW5gLCBgRGF0ZWAsIGBFcnJvcmAsIGBOdW1iZXJgLCBgUmVnRXhwYCwgb3IgYFN0cmluZ2AuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7T2JqZWN0fSB2YWx1ZSBUaGUgb2JqZWN0IHRvIGNvbXBhcmUuXG4gKiBAcGFyYW0ge09iamVjdH0gb3RoZXIgVGhlIG90aGVyIG9iamVjdCB0byBjb21wYXJlLlxuICogQHBhcmFtIHtzdHJpbmd9IHRhZyBUaGUgYHRvU3RyaW5nVGFnYCBvZiB0aGUgb2JqZWN0cyB0byBjb21wYXJlLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIHRoZSBvYmplY3RzIGFyZSBlcXVpdmFsZW50LCBlbHNlIGBmYWxzZWAuXG4gKi9cbmZ1bmN0aW9uIGVxdWFsQnlUYWcob2JqZWN0LCBvdGhlciwgdGFnKSB7XG4gIHN3aXRjaCAodGFnKSB7XG4gICAgY2FzZSBib29sVGFnOlxuICAgIGNhc2UgZGF0ZVRhZzpcbiAgICAgIC8vIENvZXJjZSBkYXRlcyBhbmQgYm9vbGVhbnMgdG8gbnVtYmVycywgZGF0ZXMgdG8gbWlsbGlzZWNvbmRzIGFuZCBib29sZWFuc1xuICAgICAgLy8gdG8gYDFgIG9yIGAwYCB0cmVhdGluZyBpbnZhbGlkIGRhdGVzIGNvZXJjZWQgdG8gYE5hTmAgYXMgbm90IGVxdWFsLlxuICAgICAgcmV0dXJuICtvYmplY3QgPT0gK290aGVyO1xuXG4gICAgY2FzZSBlcnJvclRhZzpcbiAgICAgIHJldHVybiBvYmplY3QubmFtZSA9PSBvdGhlci5uYW1lICYmIG9iamVjdC5tZXNzYWdlID09IG90aGVyLm1lc3NhZ2U7XG5cbiAgICBjYXNlIG51bWJlclRhZzpcbiAgICAgIC8vIFRyZWF0IGBOYU5gIHZzLiBgTmFOYCBhcyBlcXVhbC5cbiAgICAgIHJldHVybiAob2JqZWN0ICE9ICtvYmplY3QpXG4gICAgICAgID8gb3RoZXIgIT0gK290aGVyXG4gICAgICAgIDogb2JqZWN0ID09ICtvdGhlcjtcblxuICAgIGNhc2UgcmVnZXhwVGFnOlxuICAgIGNhc2Ugc3RyaW5nVGFnOlxuICAgICAgLy8gQ29lcmNlIHJlZ2V4ZXMgdG8gc3RyaW5ncyBhbmQgdHJlYXQgc3RyaW5ncyBwcmltaXRpdmVzIGFuZCBzdHJpbmdcbiAgICAgIC8vIG9iamVjdHMgYXMgZXF1YWwuIFNlZSBodHRwczovL2VzNS5naXRodWIuaW8vI3gxNS4xMC42LjQgZm9yIG1vcmUgZGV0YWlscy5cbiAgICAgIHJldHVybiBvYmplY3QgPT0gKG90aGVyICsgJycpO1xuICB9XG4gIHJldHVybiBmYWxzZTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBlcXVhbEJ5VGFnO1xuIiwidmFyIGtleXMgPSByZXF1aXJlKCcuLi9vYmplY3Qva2V5cycpO1xuXG4vKiogVXNlZCBmb3IgbmF0aXZlIG1ldGhvZCByZWZlcmVuY2VzLiAqL1xudmFyIG9iamVjdFByb3RvID0gT2JqZWN0LnByb3RvdHlwZTtcblxuLyoqIFVzZWQgdG8gY2hlY2sgb2JqZWN0cyBmb3Igb3duIHByb3BlcnRpZXMuICovXG52YXIgaGFzT3duUHJvcGVydHkgPSBvYmplY3RQcm90by5oYXNPd25Qcm9wZXJ0eTtcblxuLyoqXG4gKiBBIHNwZWNpYWxpemVkIHZlcnNpb24gb2YgYGJhc2VJc0VxdWFsRGVlcGAgZm9yIG9iamVjdHMgd2l0aCBzdXBwb3J0IGZvclxuICogcGFydGlhbCBkZWVwIGNvbXBhcmlzb25zLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge09iamVjdH0gb2JqZWN0IFRoZSBvYmplY3QgdG8gY29tcGFyZS5cbiAqIEBwYXJhbSB7T2JqZWN0fSBvdGhlciBUaGUgb3RoZXIgb2JqZWN0IHRvIGNvbXBhcmUuXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBlcXVhbEZ1bmMgVGhlIGZ1bmN0aW9uIHRvIGRldGVybWluZSBlcXVpdmFsZW50cyBvZiB2YWx1ZXMuXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBbY3VzdG9taXplcl0gVGhlIGZ1bmN0aW9uIHRvIGN1c3RvbWl6ZSBjb21wYXJpbmcgdmFsdWVzLlxuICogQHBhcmFtIHtib29sZWFufSBbaXNMb29zZV0gU3BlY2lmeSBwZXJmb3JtaW5nIHBhcnRpYWwgY29tcGFyaXNvbnMuXG4gKiBAcGFyYW0ge0FycmF5fSBbc3RhY2tBXSBUcmFja3MgdHJhdmVyc2VkIGB2YWx1ZWAgb2JqZWN0cy5cbiAqIEBwYXJhbSB7QXJyYXl9IFtzdGFja0JdIFRyYWNrcyB0cmF2ZXJzZWQgYG90aGVyYCBvYmplY3RzLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIHRoZSBvYmplY3RzIGFyZSBlcXVpdmFsZW50LCBlbHNlIGBmYWxzZWAuXG4gKi9cbmZ1bmN0aW9uIGVxdWFsT2JqZWN0cyhvYmplY3QsIG90aGVyLCBlcXVhbEZ1bmMsIGN1c3RvbWl6ZXIsIGlzTG9vc2UsIHN0YWNrQSwgc3RhY2tCKSB7XG4gIHZhciBvYmpQcm9wcyA9IGtleXMob2JqZWN0KSxcbiAgICAgIG9iakxlbmd0aCA9IG9ialByb3BzLmxlbmd0aCxcbiAgICAgIG90aFByb3BzID0ga2V5cyhvdGhlciksXG4gICAgICBvdGhMZW5ndGggPSBvdGhQcm9wcy5sZW5ndGg7XG5cbiAgaWYgKG9iakxlbmd0aCAhPSBvdGhMZW5ndGggJiYgIWlzTG9vc2UpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgdmFyIGluZGV4ID0gb2JqTGVuZ3RoO1xuICB3aGlsZSAoaW5kZXgtLSkge1xuICAgIHZhciBrZXkgPSBvYmpQcm9wc1tpbmRleF07XG4gICAgaWYgKCEoaXNMb29zZSA/IGtleSBpbiBvdGhlciA6IGhhc093blByb3BlcnR5LmNhbGwob3RoZXIsIGtleSkpKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICB9XG4gIHZhciBza2lwQ3RvciA9IGlzTG9vc2U7XG4gIHdoaWxlICgrK2luZGV4IDwgb2JqTGVuZ3RoKSB7XG4gICAga2V5ID0gb2JqUHJvcHNbaW5kZXhdO1xuICAgIHZhciBvYmpWYWx1ZSA9IG9iamVjdFtrZXldLFxuICAgICAgICBvdGhWYWx1ZSA9IG90aGVyW2tleV0sXG4gICAgICAgIHJlc3VsdCA9IGN1c3RvbWl6ZXIgPyBjdXN0b21pemVyKGlzTG9vc2UgPyBvdGhWYWx1ZSA6IG9ialZhbHVlLCBpc0xvb3NlPyBvYmpWYWx1ZSA6IG90aFZhbHVlLCBrZXkpIDogdW5kZWZpbmVkO1xuXG4gICAgLy8gUmVjdXJzaXZlbHkgY29tcGFyZSBvYmplY3RzIChzdXNjZXB0aWJsZSB0byBjYWxsIHN0YWNrIGxpbWl0cykuXG4gICAgaWYgKCEocmVzdWx0ID09PSB1bmRlZmluZWQgPyBlcXVhbEZ1bmMob2JqVmFsdWUsIG90aFZhbHVlLCBjdXN0b21pemVyLCBpc0xvb3NlLCBzdGFja0EsIHN0YWNrQikgOiByZXN1bHQpKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIHNraXBDdG9yIHx8IChza2lwQ3RvciA9IGtleSA9PSAnY29uc3RydWN0b3InKTtcbiAgfVxuICBpZiAoIXNraXBDdG9yKSB7XG4gICAgdmFyIG9iakN0b3IgPSBvYmplY3QuY29uc3RydWN0b3IsXG4gICAgICAgIG90aEN0b3IgPSBvdGhlci5jb25zdHJ1Y3RvcjtcblxuICAgIC8vIE5vbiBgT2JqZWN0YCBvYmplY3QgaW5zdGFuY2VzIHdpdGggZGlmZmVyZW50IGNvbnN0cnVjdG9ycyBhcmUgbm90IGVxdWFsLlxuICAgIGlmIChvYmpDdG9yICE9IG90aEN0b3IgJiZcbiAgICAgICAgKCdjb25zdHJ1Y3RvcicgaW4gb2JqZWN0ICYmICdjb25zdHJ1Y3RvcicgaW4gb3RoZXIpICYmXG4gICAgICAgICEodHlwZW9mIG9iakN0b3IgPT0gJ2Z1bmN0aW9uJyAmJiBvYmpDdG9yIGluc3RhbmNlb2Ygb2JqQ3RvciAmJlxuICAgICAgICAgIHR5cGVvZiBvdGhDdG9yID09ICdmdW5jdGlvbicgJiYgb3RoQ3RvciBpbnN0YW5jZW9mIG90aEN0b3IpKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICB9XG4gIHJldHVybiB0cnVlO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGVxdWFsT2JqZWN0cztcbiIsInZhciBiYXNlUHJvcGVydHkgPSByZXF1aXJlKCcuL2Jhc2VQcm9wZXJ0eScpO1xuXG4vKipcbiAqIEdldHMgdGhlIFwibGVuZ3RoXCIgcHJvcGVydHkgdmFsdWUgb2YgYG9iamVjdGAuXG4gKlxuICogKipOb3RlOioqIFRoaXMgZnVuY3Rpb24gaXMgdXNlZCB0byBhdm9pZCBhIFtKSVQgYnVnXShodHRwczovL2J1Z3Mud2Via2l0Lm9yZy9zaG93X2J1Zy5jZ2k/aWQ9MTQyNzkyKVxuICogdGhhdCBhZmZlY3RzIFNhZmFyaSBvbiBhdCBsZWFzdCBpT1MgOC4xLTguMyBBUk02NC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtPYmplY3R9IG9iamVjdCBUaGUgb2JqZWN0IHRvIHF1ZXJ5LlxuICogQHJldHVybnMgeyp9IFJldHVybnMgdGhlIFwibGVuZ3RoXCIgdmFsdWUuXG4gKi9cbnZhciBnZXRMZW5ndGggPSBiYXNlUHJvcGVydHkoJ2xlbmd0aCcpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGdldExlbmd0aDtcbiIsInZhciBpc1N0cmljdENvbXBhcmFibGUgPSByZXF1aXJlKCcuL2lzU3RyaWN0Q29tcGFyYWJsZScpLFxuICAgIHBhaXJzID0gcmVxdWlyZSgnLi4vb2JqZWN0L3BhaXJzJyk7XG5cbi8qKlxuICogR2V0cyB0aGUgcHJvcGVyeSBuYW1lcywgdmFsdWVzLCBhbmQgY29tcGFyZSBmbGFncyBvZiBgb2JqZWN0YC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtPYmplY3R9IG9iamVjdCBUaGUgb2JqZWN0IHRvIHF1ZXJ5LlxuICogQHJldHVybnMge0FycmF5fSBSZXR1cm5zIHRoZSBtYXRjaCBkYXRhIG9mIGBvYmplY3RgLlxuICovXG5mdW5jdGlvbiBnZXRNYXRjaERhdGEob2JqZWN0KSB7XG4gIHZhciByZXN1bHQgPSBwYWlycyhvYmplY3QpLFxuICAgICAgbGVuZ3RoID0gcmVzdWx0Lmxlbmd0aDtcblxuICB3aGlsZSAobGVuZ3RoLS0pIHtcbiAgICByZXN1bHRbbGVuZ3RoXVsyXSA9IGlzU3RyaWN0Q29tcGFyYWJsZShyZXN1bHRbbGVuZ3RoXVsxXSk7XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBnZXRNYXRjaERhdGE7XG4iLCJ2YXIgaXNOYXRpdmUgPSByZXF1aXJlKCcuLi9sYW5nL2lzTmF0aXZlJyk7XG5cbi8qKlxuICogR2V0cyB0aGUgbmF0aXZlIGZ1bmN0aW9uIGF0IGBrZXlgIG9mIGBvYmplY3RgLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge09iamVjdH0gb2JqZWN0IFRoZSBvYmplY3QgdG8gcXVlcnkuXG4gKiBAcGFyYW0ge3N0cmluZ30ga2V5IFRoZSBrZXkgb2YgdGhlIG1ldGhvZCB0byBnZXQuXG4gKiBAcmV0dXJucyB7Kn0gUmV0dXJucyB0aGUgZnVuY3Rpb24gaWYgaXQncyBuYXRpdmUsIGVsc2UgYHVuZGVmaW5lZGAuXG4gKi9cbmZ1bmN0aW9uIGdldE5hdGl2ZShvYmplY3QsIGtleSkge1xuICB2YXIgdmFsdWUgPSBvYmplY3QgPT0gbnVsbCA/IHVuZGVmaW5lZCA6IG9iamVjdFtrZXldO1xuICByZXR1cm4gaXNOYXRpdmUodmFsdWUpID8gdmFsdWUgOiB1bmRlZmluZWQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZ2V0TmF0aXZlO1xuIiwidmFyIGdldExlbmd0aCA9IHJlcXVpcmUoJy4vZ2V0TGVuZ3RoJyksXG4gICAgaXNMZW5ndGggPSByZXF1aXJlKCcuL2lzTGVuZ3RoJyk7XG5cbi8qKlxuICogQ2hlY2tzIGlmIGB2YWx1ZWAgaXMgYXJyYXktbGlrZS5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYHZhbHVlYCBpcyBhcnJheS1saWtlLCBlbHNlIGBmYWxzZWAuXG4gKi9cbmZ1bmN0aW9uIGlzQXJyYXlMaWtlKHZhbHVlKSB7XG4gIHJldHVybiB2YWx1ZSAhPSBudWxsICYmIGlzTGVuZ3RoKGdldExlbmd0aCh2YWx1ZSkpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGlzQXJyYXlMaWtlO1xuIiwiLyoqIFVzZWQgdG8gZGV0ZWN0IHVuc2lnbmVkIGludGVnZXIgdmFsdWVzLiAqL1xudmFyIHJlSXNVaW50ID0gL15cXGQrJC87XG5cbi8qKlxuICogVXNlZCBhcyB0aGUgW21heGltdW0gbGVuZ3RoXShodHRwczovL3Blb3BsZS5tb3ppbGxhLm9yZy9+am9yZW5kb3JmZi9lczYtZHJhZnQuaHRtbCNzZWMtbnVtYmVyLm1heF9zYWZlX2ludGVnZXIpXG4gKiBvZiBhbiBhcnJheS1saWtlIHZhbHVlLlxuICovXG52YXIgTUFYX1NBRkVfSU5URUdFUiA9IDkwMDcxOTkyNTQ3NDA5OTE7XG5cbi8qKlxuICogQ2hlY2tzIGlmIGB2YWx1ZWAgaXMgYSB2YWxpZCBhcnJheS1saWtlIGluZGV4LlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjaGVjay5cbiAqIEBwYXJhbSB7bnVtYmVyfSBbbGVuZ3RoPU1BWF9TQUZFX0lOVEVHRVJdIFRoZSB1cHBlciBib3VuZHMgb2YgYSB2YWxpZCBpbmRleC5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBgdmFsdWVgIGlzIGEgdmFsaWQgaW5kZXgsIGVsc2UgYGZhbHNlYC5cbiAqL1xuZnVuY3Rpb24gaXNJbmRleCh2YWx1ZSwgbGVuZ3RoKSB7XG4gIHZhbHVlID0gKHR5cGVvZiB2YWx1ZSA9PSAnbnVtYmVyJyB8fCByZUlzVWludC50ZXN0KHZhbHVlKSkgPyArdmFsdWUgOiAtMTtcbiAgbGVuZ3RoID0gbGVuZ3RoID09IG51bGwgPyBNQVhfU0FGRV9JTlRFR0VSIDogbGVuZ3RoO1xuICByZXR1cm4gdmFsdWUgPiAtMSAmJiB2YWx1ZSAlIDEgPT0gMCAmJiB2YWx1ZSA8IGxlbmd0aDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpc0luZGV4O1xuIiwidmFyIGlzQXJyYXlMaWtlID0gcmVxdWlyZSgnLi9pc0FycmF5TGlrZScpLFxuICAgIGlzSW5kZXggPSByZXF1aXJlKCcuL2lzSW5kZXgnKSxcbiAgICBpc09iamVjdCA9IHJlcXVpcmUoJy4uL2xhbmcvaXNPYmplY3QnKTtcblxuLyoqXG4gKiBDaGVja3MgaWYgdGhlIHByb3ZpZGVkIGFyZ3VtZW50cyBhcmUgZnJvbSBhbiBpdGVyYXRlZSBjYWxsLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSBwb3RlbnRpYWwgaXRlcmF0ZWUgdmFsdWUgYXJndW1lbnQuXG4gKiBAcGFyYW0geyp9IGluZGV4IFRoZSBwb3RlbnRpYWwgaXRlcmF0ZWUgaW5kZXggb3Iga2V5IGFyZ3VtZW50LlxuICogQHBhcmFtIHsqfSBvYmplY3QgVGhlIHBvdGVudGlhbCBpdGVyYXRlZSBvYmplY3QgYXJndW1lbnQuXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgdGhlIGFyZ3VtZW50cyBhcmUgZnJvbSBhbiBpdGVyYXRlZSBjYWxsLCBlbHNlIGBmYWxzZWAuXG4gKi9cbmZ1bmN0aW9uIGlzSXRlcmF0ZWVDYWxsKHZhbHVlLCBpbmRleCwgb2JqZWN0KSB7XG4gIGlmICghaXNPYmplY3Qob2JqZWN0KSkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICB2YXIgdHlwZSA9IHR5cGVvZiBpbmRleDtcbiAgaWYgKHR5cGUgPT0gJ251bWJlcidcbiAgICAgID8gKGlzQXJyYXlMaWtlKG9iamVjdCkgJiYgaXNJbmRleChpbmRleCwgb2JqZWN0Lmxlbmd0aCkpXG4gICAgICA6ICh0eXBlID09ICdzdHJpbmcnICYmIGluZGV4IGluIG9iamVjdCkpIHtcbiAgICB2YXIgb3RoZXIgPSBvYmplY3RbaW5kZXhdO1xuICAgIHJldHVybiB2YWx1ZSA9PT0gdmFsdWUgPyAodmFsdWUgPT09IG90aGVyKSA6IChvdGhlciAhPT0gb3RoZXIpO1xuICB9XG4gIHJldHVybiBmYWxzZTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpc0l0ZXJhdGVlQ2FsbDtcbiIsInZhciBpc0FycmF5ID0gcmVxdWlyZSgnLi4vbGFuZy9pc0FycmF5JyksXG4gICAgdG9PYmplY3QgPSByZXF1aXJlKCcuL3RvT2JqZWN0Jyk7XG5cbi8qKiBVc2VkIHRvIG1hdGNoIHByb3BlcnR5IG5hbWVzIHdpdGhpbiBwcm9wZXJ0eSBwYXRocy4gKi9cbnZhciByZUlzRGVlcFByb3AgPSAvXFwufFxcWyg/OlteW1xcXV0qfChbXCInXSkoPzooPyFcXDEpW15cXG5cXFxcXXxcXFxcLikqP1xcMSlcXF0vLFxuICAgIHJlSXNQbGFpblByb3AgPSAvXlxcdyokLztcblxuLyoqXG4gKiBDaGVja3MgaWYgYHZhbHVlYCBpcyBhIHByb3BlcnR5IG5hbWUgYW5kIG5vdCBhIHByb3BlcnR5IHBhdGguXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNoZWNrLlxuICogQHBhcmFtIHtPYmplY3R9IFtvYmplY3RdIFRoZSBvYmplY3QgdG8gcXVlcnkga2V5cyBvbi5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBgdmFsdWVgIGlzIGEgcHJvcGVydHkgbmFtZSwgZWxzZSBgZmFsc2VgLlxuICovXG5mdW5jdGlvbiBpc0tleSh2YWx1ZSwgb2JqZWN0KSB7XG4gIHZhciB0eXBlID0gdHlwZW9mIHZhbHVlO1xuICBpZiAoKHR5cGUgPT0gJ3N0cmluZycgJiYgcmVJc1BsYWluUHJvcC50ZXN0KHZhbHVlKSkgfHwgdHlwZSA9PSAnbnVtYmVyJykge1xuICAgIHJldHVybiB0cnVlO1xuICB9XG4gIGlmIChpc0FycmF5KHZhbHVlKSkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICB2YXIgcmVzdWx0ID0gIXJlSXNEZWVwUHJvcC50ZXN0KHZhbHVlKTtcbiAgcmV0dXJuIHJlc3VsdCB8fCAob2JqZWN0ICE9IG51bGwgJiYgdmFsdWUgaW4gdG9PYmplY3Qob2JqZWN0KSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaXNLZXk7XG4iLCIvKipcbiAqIFVzZWQgYXMgdGhlIFttYXhpbXVtIGxlbmd0aF0oaHR0cHM6Ly9wZW9wbGUubW96aWxsYS5vcmcvfmpvcmVuZG9yZmYvZXM2LWRyYWZ0Lmh0bWwjc2VjLW51bWJlci5tYXhfc2FmZV9pbnRlZ2VyKVxuICogb2YgYW4gYXJyYXktbGlrZSB2YWx1ZS5cbiAqL1xudmFyIE1BWF9TQUZFX0lOVEVHRVIgPSA5MDA3MTk5MjU0NzQwOTkxO1xuXG4vKipcbiAqIENoZWNrcyBpZiBgdmFsdWVgIGlzIGEgdmFsaWQgYXJyYXktbGlrZSBsZW5ndGguXG4gKlxuICogKipOb3RlOioqIFRoaXMgZnVuY3Rpb24gaXMgYmFzZWQgb24gW2BUb0xlbmd0aGBdKGh0dHBzOi8vcGVvcGxlLm1vemlsbGEub3JnL35qb3JlbmRvcmZmL2VzNi1kcmFmdC5odG1sI3NlYy10b2xlbmd0aCkuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGB2YWx1ZWAgaXMgYSB2YWxpZCBsZW5ndGgsIGVsc2UgYGZhbHNlYC5cbiAqL1xuZnVuY3Rpb24gaXNMZW5ndGgodmFsdWUpIHtcbiAgcmV0dXJuIHR5cGVvZiB2YWx1ZSA9PSAnbnVtYmVyJyAmJiB2YWx1ZSA+IC0xICYmIHZhbHVlICUgMSA9PSAwICYmIHZhbHVlIDw9IE1BWF9TQUZFX0lOVEVHRVI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaXNMZW5ndGg7XG4iLCIvKipcbiAqIENoZWNrcyBpZiBgdmFsdWVgIGlzIG9iamVjdC1saWtlLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBgdmFsdWVgIGlzIG9iamVjdC1saWtlLCBlbHNlIGBmYWxzZWAuXG4gKi9cbmZ1bmN0aW9uIGlzT2JqZWN0TGlrZSh2YWx1ZSkge1xuICByZXR1cm4gISF2YWx1ZSAmJiB0eXBlb2YgdmFsdWUgPT0gJ29iamVjdCc7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaXNPYmplY3RMaWtlO1xuIiwiLyoqXG4gKiBVc2VkIGJ5IGB0cmltbWVkTGVmdEluZGV4YCBhbmQgYHRyaW1tZWRSaWdodEluZGV4YCB0byBkZXRlcm1pbmUgaWYgYVxuICogY2hhcmFjdGVyIGNvZGUgaXMgd2hpdGVzcGFjZS5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtudW1iZXJ9IGNoYXJDb2RlIFRoZSBjaGFyYWN0ZXIgY29kZSB0byBpbnNwZWN0LlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGBjaGFyQ29kZWAgaXMgd2hpdGVzcGFjZSwgZWxzZSBgZmFsc2VgLlxuICovXG5mdW5jdGlvbiBpc1NwYWNlKGNoYXJDb2RlKSB7XG4gIHJldHVybiAoKGNoYXJDb2RlIDw9IDE2MCAmJiAoY2hhckNvZGUgPj0gOSAmJiBjaGFyQ29kZSA8PSAxMykgfHwgY2hhckNvZGUgPT0gMzIgfHwgY2hhckNvZGUgPT0gMTYwKSB8fCBjaGFyQ29kZSA9PSA1NzYwIHx8IGNoYXJDb2RlID09IDYxNTggfHxcbiAgICAoY2hhckNvZGUgPj0gODE5MiAmJiAoY2hhckNvZGUgPD0gODIwMiB8fCBjaGFyQ29kZSA9PSA4MjMyIHx8IGNoYXJDb2RlID09IDgyMzMgfHwgY2hhckNvZGUgPT0gODIzOSB8fCBjaGFyQ29kZSA9PSA4Mjg3IHx8IGNoYXJDb2RlID09IDEyMjg4IHx8IGNoYXJDb2RlID09IDY1Mjc5KSkpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGlzU3BhY2U7XG4iLCJ2YXIgaXNPYmplY3QgPSByZXF1aXJlKCcuLi9sYW5nL2lzT2JqZWN0Jyk7XG5cbi8qKlxuICogQ2hlY2tzIGlmIGB2YWx1ZWAgaXMgc3VpdGFibGUgZm9yIHN0cmljdCBlcXVhbGl0eSBjb21wYXJpc29ucywgaS5lLiBgPT09YC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYHZhbHVlYCBpZiBzdWl0YWJsZSBmb3Igc3RyaWN0XG4gKiAgZXF1YWxpdHkgY29tcGFyaXNvbnMsIGVsc2UgYGZhbHNlYC5cbiAqL1xuZnVuY3Rpb24gaXNTdHJpY3RDb21wYXJhYmxlKHZhbHVlKSB7XG4gIHJldHVybiB2YWx1ZSA9PT0gdmFsdWUgJiYgIWlzT2JqZWN0KHZhbHVlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpc1N0cmljdENvbXBhcmFibGU7XG4iLCIvKipcbiAqIFJlbW92ZXMgYGtleWAgYW5kIGl0cyB2YWx1ZSBmcm9tIHRoZSBjYWNoZS5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQG5hbWUgZGVsZXRlXG4gKiBAbWVtYmVyT2YgXy5tZW1vaXplLkNhY2hlXG4gKiBAcGFyYW0ge3N0cmluZ30ga2V5IFRoZSBrZXkgb2YgdGhlIHZhbHVlIHRvIHJlbW92ZS5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiB0aGUgZW50cnkgd2FzIHJlbW92ZWQgc3VjY2Vzc2Z1bGx5LCBlbHNlIGBmYWxzZWAuXG4gKi9cbmZ1bmN0aW9uIG1hcERlbGV0ZShrZXkpIHtcbiAgcmV0dXJuIHRoaXMuaGFzKGtleSkgJiYgZGVsZXRlIHRoaXMuX19kYXRhX19ba2V5XTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBtYXBEZWxldGU7XG4iLCIvKipcbiAqIEdldHMgdGhlIGNhY2hlZCB2YWx1ZSBmb3IgYGtleWAuXG4gKlxuICogQHByaXZhdGVcbiAqIEBuYW1lIGdldFxuICogQG1lbWJlck9mIF8ubWVtb2l6ZS5DYWNoZVxuICogQHBhcmFtIHtzdHJpbmd9IGtleSBUaGUga2V5IG9mIHRoZSB2YWx1ZSB0byBnZXQuXG4gKiBAcmV0dXJucyB7Kn0gUmV0dXJucyB0aGUgY2FjaGVkIHZhbHVlLlxuICovXG5mdW5jdGlvbiBtYXBHZXQoa2V5KSB7XG4gIHJldHVybiBrZXkgPT0gJ19fcHJvdG9fXycgPyB1bmRlZmluZWQgOiB0aGlzLl9fZGF0YV9fW2tleV07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gbWFwR2V0O1xuIiwiLyoqIFVzZWQgZm9yIG5hdGl2ZSBtZXRob2QgcmVmZXJlbmNlcy4gKi9cbnZhciBvYmplY3RQcm90byA9IE9iamVjdC5wcm90b3R5cGU7XG5cbi8qKiBVc2VkIHRvIGNoZWNrIG9iamVjdHMgZm9yIG93biBwcm9wZXJ0aWVzLiAqL1xudmFyIGhhc093blByb3BlcnR5ID0gb2JqZWN0UHJvdG8uaGFzT3duUHJvcGVydHk7XG5cbi8qKlxuICogQ2hlY2tzIGlmIGEgY2FjaGVkIHZhbHVlIGZvciBga2V5YCBleGlzdHMuXG4gKlxuICogQHByaXZhdGVcbiAqIEBuYW1lIGhhc1xuICogQG1lbWJlck9mIF8ubWVtb2l6ZS5DYWNoZVxuICogQHBhcmFtIHtzdHJpbmd9IGtleSBUaGUga2V5IG9mIHRoZSBlbnRyeSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBhbiBlbnRyeSBmb3IgYGtleWAgZXhpc3RzLCBlbHNlIGBmYWxzZWAuXG4gKi9cbmZ1bmN0aW9uIG1hcEhhcyhrZXkpIHtcbiAgcmV0dXJuIGtleSAhPSAnX19wcm90b19fJyAmJiBoYXNPd25Qcm9wZXJ0eS5jYWxsKHRoaXMuX19kYXRhX18sIGtleSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gbWFwSGFzO1xuIiwiLyoqXG4gKiBTZXRzIGB2YWx1ZWAgdG8gYGtleWAgb2YgdGhlIGNhY2hlLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAbmFtZSBzZXRcbiAqIEBtZW1iZXJPZiBfLm1lbW9pemUuQ2FjaGVcbiAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgVGhlIGtleSBvZiB0aGUgdmFsdWUgdG8gY2FjaGUuXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjYWNoZS5cbiAqIEByZXR1cm5zIHtPYmplY3R9IFJldHVybnMgdGhlIGNhY2hlIG9iamVjdC5cbiAqL1xuZnVuY3Rpb24gbWFwU2V0KGtleSwgdmFsdWUpIHtcbiAgaWYgKGtleSAhPSAnX19wcm90b19fJykge1xuICAgIHRoaXMuX19kYXRhX19ba2V5XSA9IHZhbHVlO1xuICB9XG4gIHJldHVybiB0aGlzO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IG1hcFNldDtcbiIsInZhciBpc0FyZ3VtZW50cyA9IHJlcXVpcmUoJy4uL2xhbmcvaXNBcmd1bWVudHMnKSxcbiAgICBpc0FycmF5ID0gcmVxdWlyZSgnLi4vbGFuZy9pc0FycmF5JyksXG4gICAgaXNJbmRleCA9IHJlcXVpcmUoJy4vaXNJbmRleCcpLFxuICAgIGlzTGVuZ3RoID0gcmVxdWlyZSgnLi9pc0xlbmd0aCcpLFxuICAgIGtleXNJbiA9IHJlcXVpcmUoJy4uL29iamVjdC9rZXlzSW4nKTtcblxuLyoqIFVzZWQgZm9yIG5hdGl2ZSBtZXRob2QgcmVmZXJlbmNlcy4gKi9cbnZhciBvYmplY3RQcm90byA9IE9iamVjdC5wcm90b3R5cGU7XG5cbi8qKiBVc2VkIHRvIGNoZWNrIG9iamVjdHMgZm9yIG93biBwcm9wZXJ0aWVzLiAqL1xudmFyIGhhc093blByb3BlcnR5ID0gb2JqZWN0UHJvdG8uaGFzT3duUHJvcGVydHk7XG5cbi8qKlxuICogQSBmYWxsYmFjayBpbXBsZW1lbnRhdGlvbiBvZiBgT2JqZWN0LmtleXNgIHdoaWNoIGNyZWF0ZXMgYW4gYXJyYXkgb2YgdGhlXG4gKiBvd24gZW51bWVyYWJsZSBwcm9wZXJ0eSBuYW1lcyBvZiBgb2JqZWN0YC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtPYmplY3R9IG9iamVjdCBUaGUgb2JqZWN0IHRvIHF1ZXJ5LlxuICogQHJldHVybnMge0FycmF5fSBSZXR1cm5zIHRoZSBhcnJheSBvZiBwcm9wZXJ0eSBuYW1lcy5cbiAqL1xuZnVuY3Rpb24gc2hpbUtleXMob2JqZWN0KSB7XG4gIHZhciBwcm9wcyA9IGtleXNJbihvYmplY3QpLFxuICAgICAgcHJvcHNMZW5ndGggPSBwcm9wcy5sZW5ndGgsXG4gICAgICBsZW5ndGggPSBwcm9wc0xlbmd0aCAmJiBvYmplY3QubGVuZ3RoO1xuXG4gIHZhciBhbGxvd0luZGV4ZXMgPSAhIWxlbmd0aCAmJiBpc0xlbmd0aChsZW5ndGgpICYmXG4gICAgKGlzQXJyYXkob2JqZWN0KSB8fCBpc0FyZ3VtZW50cyhvYmplY3QpKTtcblxuICB2YXIgaW5kZXggPSAtMSxcbiAgICAgIHJlc3VsdCA9IFtdO1xuXG4gIHdoaWxlICgrK2luZGV4IDwgcHJvcHNMZW5ndGgpIHtcbiAgICB2YXIga2V5ID0gcHJvcHNbaW5kZXhdO1xuICAgIGlmICgoYWxsb3dJbmRleGVzICYmIGlzSW5kZXgoa2V5LCBsZW5ndGgpKSB8fCBoYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwga2V5KSkge1xuICAgICAgcmVzdWx0LnB1c2goa2V5KTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzaGltS2V5cztcbiIsInZhciBpc09iamVjdCA9IHJlcXVpcmUoJy4uL2xhbmcvaXNPYmplY3QnKTtcblxuLyoqXG4gKiBDb252ZXJ0cyBgdmFsdWVgIHRvIGFuIG9iamVjdCBpZiBpdCdzIG5vdCBvbmUuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIHByb2Nlc3MuXG4gKiBAcmV0dXJucyB7T2JqZWN0fSBSZXR1cm5zIHRoZSBvYmplY3QuXG4gKi9cbmZ1bmN0aW9uIHRvT2JqZWN0KHZhbHVlKSB7XG4gIHJldHVybiBpc09iamVjdCh2YWx1ZSkgPyB2YWx1ZSA6IE9iamVjdCh2YWx1ZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gdG9PYmplY3Q7XG4iLCJ2YXIgYmFzZVRvU3RyaW5nID0gcmVxdWlyZSgnLi9iYXNlVG9TdHJpbmcnKSxcbiAgICBpc0FycmF5ID0gcmVxdWlyZSgnLi4vbGFuZy9pc0FycmF5Jyk7XG5cbi8qKiBVc2VkIHRvIG1hdGNoIHByb3BlcnR5IG5hbWVzIHdpdGhpbiBwcm9wZXJ0eSBwYXRocy4gKi9cbnZhciByZVByb3BOYW1lID0gL1teLltcXF1dK3xcXFsoPzooLT9cXGQrKD86XFwuXFxkKyk/KXwoW1wiJ10pKCg/Oig/IVxcMilbXlxcblxcXFxdfFxcXFwuKSo/KVxcMilcXF0vZztcblxuLyoqIFVzZWQgdG8gbWF0Y2ggYmFja3NsYXNoZXMgaW4gcHJvcGVydHkgcGF0aHMuICovXG52YXIgcmVFc2NhcGVDaGFyID0gL1xcXFwoXFxcXCk/L2c7XG5cbi8qKlxuICogQ29udmVydHMgYHZhbHVlYCB0byBwcm9wZXJ0eSBwYXRoIGFycmF5IGlmIGl0J3Mgbm90IG9uZS5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gcHJvY2Vzcy5cbiAqIEByZXR1cm5zIHtBcnJheX0gUmV0dXJucyB0aGUgcHJvcGVydHkgcGF0aCBhcnJheS5cbiAqL1xuZnVuY3Rpb24gdG9QYXRoKHZhbHVlKSB7XG4gIGlmIChpc0FycmF5KHZhbHVlKSkge1xuICAgIHJldHVybiB2YWx1ZTtcbiAgfVxuICB2YXIgcmVzdWx0ID0gW107XG4gIGJhc2VUb1N0cmluZyh2YWx1ZSkucmVwbGFjZShyZVByb3BOYW1lLCBmdW5jdGlvbihtYXRjaCwgbnVtYmVyLCBxdW90ZSwgc3RyaW5nKSB7XG4gICAgcmVzdWx0LnB1c2gocXVvdGUgPyBzdHJpbmcucmVwbGFjZShyZUVzY2FwZUNoYXIsICckMScpIDogKG51bWJlciB8fCBtYXRjaCkpO1xuICB9KTtcbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSB0b1BhdGg7XG4iLCJ2YXIgaXNTcGFjZSA9IHJlcXVpcmUoJy4vaXNTcGFjZScpO1xuXG4vKipcbiAqIFVzZWQgYnkgYF8udHJpbWAgYW5kIGBfLnRyaW1MZWZ0YCB0byBnZXQgdGhlIGluZGV4IG9mIHRoZSBmaXJzdCBub24td2hpdGVzcGFjZVxuICogY2hhcmFjdGVyIG9mIGBzdHJpbmdgLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge3N0cmluZ30gc3RyaW5nIFRoZSBzdHJpbmcgdG8gaW5zcGVjdC5cbiAqIEByZXR1cm5zIHtudW1iZXJ9IFJldHVybnMgdGhlIGluZGV4IG9mIHRoZSBmaXJzdCBub24td2hpdGVzcGFjZSBjaGFyYWN0ZXIuXG4gKi9cbmZ1bmN0aW9uIHRyaW1tZWRMZWZ0SW5kZXgoc3RyaW5nKSB7XG4gIHZhciBpbmRleCA9IC0xLFxuICAgICAgbGVuZ3RoID0gc3RyaW5nLmxlbmd0aDtcblxuICB3aGlsZSAoKytpbmRleCA8IGxlbmd0aCAmJiBpc1NwYWNlKHN0cmluZy5jaGFyQ29kZUF0KGluZGV4KSkpIHt9XG4gIHJldHVybiBpbmRleDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSB0cmltbWVkTGVmdEluZGV4O1xuIiwidmFyIGlzU3BhY2UgPSByZXF1aXJlKCcuL2lzU3BhY2UnKTtcblxuLyoqXG4gKiBVc2VkIGJ5IGBfLnRyaW1gIGFuZCBgXy50cmltUmlnaHRgIHRvIGdldCB0aGUgaW5kZXggb2YgdGhlIGxhc3Qgbm9uLXdoaXRlc3BhY2VcbiAqIGNoYXJhY3RlciBvZiBgc3RyaW5nYC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtzdHJpbmd9IHN0cmluZyBUaGUgc3RyaW5nIHRvIGluc3BlY3QuXG4gKiBAcmV0dXJucyB7bnVtYmVyfSBSZXR1cm5zIHRoZSBpbmRleCBvZiB0aGUgbGFzdCBub24td2hpdGVzcGFjZSBjaGFyYWN0ZXIuXG4gKi9cbmZ1bmN0aW9uIHRyaW1tZWRSaWdodEluZGV4KHN0cmluZykge1xuICB2YXIgaW5kZXggPSBzdHJpbmcubGVuZ3RoO1xuXG4gIHdoaWxlIChpbmRleC0tICYmIGlzU3BhY2Uoc3RyaW5nLmNoYXJDb2RlQXQoaW5kZXgpKSkge31cbiAgcmV0dXJuIGluZGV4O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHRyaW1tZWRSaWdodEluZGV4O1xuIiwidmFyIGlzQXJyYXlMaWtlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWwvaXNBcnJheUxpa2UnKSxcbiAgICBpc09iamVjdExpa2UgPSByZXF1aXJlKCcuLi9pbnRlcm5hbC9pc09iamVjdExpa2UnKTtcblxuLyoqIGBPYmplY3QjdG9TdHJpbmdgIHJlc3VsdCByZWZlcmVuY2VzLiAqL1xudmFyIGFyZ3NUYWcgPSAnW29iamVjdCBBcmd1bWVudHNdJztcblxuLyoqIFVzZWQgZm9yIG5hdGl2ZSBtZXRob2QgcmVmZXJlbmNlcy4gKi9cbnZhciBvYmplY3RQcm90byA9IE9iamVjdC5wcm90b3R5cGU7XG5cbi8qKlxuICogVXNlZCB0byByZXNvbHZlIHRoZSBbYHRvU3RyaW5nVGFnYF0oaHR0cHM6Ly9wZW9wbGUubW96aWxsYS5vcmcvfmpvcmVuZG9yZmYvZXM2LWRyYWZ0Lmh0bWwjc2VjLW9iamVjdC5wcm90b3R5cGUudG9zdHJpbmcpXG4gKiBvZiB2YWx1ZXMuXG4gKi9cbnZhciBvYmpUb1N0cmluZyA9IG9iamVjdFByb3RvLnRvU3RyaW5nO1xuXG4vKipcbiAqIENoZWNrcyBpZiBgdmFsdWVgIGlzIGNsYXNzaWZpZWQgYXMgYW4gYGFyZ3VtZW50c2Agb2JqZWN0LlxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAY2F0ZWdvcnkgTGFuZ1xuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYHZhbHVlYCBpcyBjb3JyZWN0bHkgY2xhc3NpZmllZCwgZWxzZSBgZmFsc2VgLlxuICogQGV4YW1wbGVcbiAqXG4gKiBfLmlzQXJndW1lbnRzKGZ1bmN0aW9uKCkgeyByZXR1cm4gYXJndW1lbnRzOyB9KCkpO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uaXNBcmd1bWVudHMoWzEsIDIsIDNdKTtcbiAqIC8vID0+IGZhbHNlXG4gKi9cbmZ1bmN0aW9uIGlzQXJndW1lbnRzKHZhbHVlKSB7XG4gIHJldHVybiBpc09iamVjdExpa2UodmFsdWUpICYmIGlzQXJyYXlMaWtlKHZhbHVlKSAmJiBvYmpUb1N0cmluZy5jYWxsKHZhbHVlKSA9PSBhcmdzVGFnO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGlzQXJndW1lbnRzO1xuIiwidmFyIGdldE5hdGl2ZSA9IHJlcXVpcmUoJy4uL2ludGVybmFsL2dldE5hdGl2ZScpLFxuICAgIGlzTGVuZ3RoID0gcmVxdWlyZSgnLi4vaW50ZXJuYWwvaXNMZW5ndGgnKSxcbiAgICBpc09iamVjdExpa2UgPSByZXF1aXJlKCcuLi9pbnRlcm5hbC9pc09iamVjdExpa2UnKTtcblxuLyoqIGBPYmplY3QjdG9TdHJpbmdgIHJlc3VsdCByZWZlcmVuY2VzLiAqL1xudmFyIGFycmF5VGFnID0gJ1tvYmplY3QgQXJyYXldJztcblxuLyoqIFVzZWQgZm9yIG5hdGl2ZSBtZXRob2QgcmVmZXJlbmNlcy4gKi9cbnZhciBvYmplY3RQcm90byA9IE9iamVjdC5wcm90b3R5cGU7XG5cbi8qKlxuICogVXNlZCB0byByZXNvbHZlIHRoZSBbYHRvU3RyaW5nVGFnYF0oaHR0cHM6Ly9wZW9wbGUubW96aWxsYS5vcmcvfmpvcmVuZG9yZmYvZXM2LWRyYWZ0Lmh0bWwjc2VjLW9iamVjdC5wcm90b3R5cGUudG9zdHJpbmcpXG4gKiBvZiB2YWx1ZXMuXG4gKi9cbnZhciBvYmpUb1N0cmluZyA9IG9iamVjdFByb3RvLnRvU3RyaW5nO1xuXG4vKiBOYXRpdmUgbWV0aG9kIHJlZmVyZW5jZXMgZm9yIHRob3NlIHdpdGggdGhlIHNhbWUgbmFtZSBhcyBvdGhlciBgbG9kYXNoYCBtZXRob2RzLiAqL1xudmFyIG5hdGl2ZUlzQXJyYXkgPSBnZXROYXRpdmUoQXJyYXksICdpc0FycmF5Jyk7XG5cbi8qKlxuICogQ2hlY2tzIGlmIGB2YWx1ZWAgaXMgY2xhc3NpZmllZCBhcyBhbiBgQXJyYXlgIG9iamVjdC5cbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQGNhdGVnb3J5IExhbmdcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGB2YWx1ZWAgaXMgY29ycmVjdGx5IGNsYXNzaWZpZWQsIGVsc2UgYGZhbHNlYC5cbiAqIEBleGFtcGxlXG4gKlxuICogXy5pc0FycmF5KFsxLCAyLCAzXSk7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5pc0FycmF5KGZ1bmN0aW9uKCkgeyByZXR1cm4gYXJndW1lbnRzOyB9KCkpO1xuICogLy8gPT4gZmFsc2VcbiAqL1xudmFyIGlzQXJyYXkgPSBuYXRpdmVJc0FycmF5IHx8IGZ1bmN0aW9uKHZhbHVlKSB7XG4gIHJldHVybiBpc09iamVjdExpa2UodmFsdWUpICYmIGlzTGVuZ3RoKHZhbHVlLmxlbmd0aCkgJiYgb2JqVG9TdHJpbmcuY2FsbCh2YWx1ZSkgPT0gYXJyYXlUYWc7XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IGlzQXJyYXk7XG4iLCJ2YXIgZXNjYXBlUmVnRXhwID0gcmVxdWlyZSgnLi4vc3RyaW5nL2VzY2FwZVJlZ0V4cCcpLFxuICAgIGlzT2JqZWN0TGlrZSA9IHJlcXVpcmUoJy4uL2ludGVybmFsL2lzT2JqZWN0TGlrZScpO1xuXG4vKiogYE9iamVjdCN0b1N0cmluZ2AgcmVzdWx0IHJlZmVyZW5jZXMuICovXG52YXIgZnVuY1RhZyA9ICdbb2JqZWN0IEZ1bmN0aW9uXSc7XG5cbi8qKiBVc2VkIHRvIGRldGVjdCBob3N0IGNvbnN0cnVjdG9ycyAoU2FmYXJpID4gNSkuICovXG52YXIgcmVJc0hvc3RDdG9yID0gL15cXFtvYmplY3QgLis/Q29uc3RydWN0b3JcXF0kLztcblxuLyoqIFVzZWQgZm9yIG5hdGl2ZSBtZXRob2QgcmVmZXJlbmNlcy4gKi9cbnZhciBvYmplY3RQcm90byA9IE9iamVjdC5wcm90b3R5cGU7XG5cbi8qKiBVc2VkIHRvIHJlc29sdmUgdGhlIGRlY29tcGlsZWQgc291cmNlIG9mIGZ1bmN0aW9ucy4gKi9cbnZhciBmblRvU3RyaW5nID0gRnVuY3Rpb24ucHJvdG90eXBlLnRvU3RyaW5nO1xuXG4vKiogVXNlZCB0byBjaGVjayBvYmplY3RzIGZvciBvd24gcHJvcGVydGllcy4gKi9cbnZhciBoYXNPd25Qcm9wZXJ0eSA9IG9iamVjdFByb3RvLmhhc093blByb3BlcnR5O1xuXG4vKipcbiAqIFVzZWQgdG8gcmVzb2x2ZSB0aGUgW2B0b1N0cmluZ1RhZ2BdKGh0dHBzOi8vcGVvcGxlLm1vemlsbGEub3JnL35qb3JlbmRvcmZmL2VzNi1kcmFmdC5odG1sI3NlYy1vYmplY3QucHJvdG90eXBlLnRvc3RyaW5nKVxuICogb2YgdmFsdWVzLlxuICovXG52YXIgb2JqVG9TdHJpbmcgPSBvYmplY3RQcm90by50b1N0cmluZztcblxuLyoqIFVzZWQgdG8gZGV0ZWN0IGlmIGEgbWV0aG9kIGlzIG5hdGl2ZS4gKi9cbnZhciByZUlzTmF0aXZlID0gUmVnRXhwKCdeJyArXG4gIGVzY2FwZVJlZ0V4cChmblRvU3RyaW5nLmNhbGwoaGFzT3duUHJvcGVydHkpKVxuICAucmVwbGFjZSgvaGFzT3duUHJvcGVydHl8KGZ1bmN0aW9uKS4qPyg/PVxcXFxcXCgpfCBmb3IgLis/KD89XFxcXFxcXSkvZywgJyQxLio/JykgKyAnJCdcbik7XG5cbi8qKlxuICogQ2hlY2tzIGlmIGB2YWx1ZWAgaXMgYSBuYXRpdmUgZnVuY3Rpb24uXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBjYXRlZ29yeSBMYW5nXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBgdmFsdWVgIGlzIGEgbmF0aXZlIGZ1bmN0aW9uLCBlbHNlIGBmYWxzZWAuXG4gKiBAZXhhbXBsZVxuICpcbiAqIF8uaXNOYXRpdmUoQXJyYXkucHJvdG90eXBlLnB1c2gpO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uaXNOYXRpdmUoXyk7XG4gKiAvLyA9PiBmYWxzZVxuICovXG5mdW5jdGlvbiBpc05hdGl2ZSh2YWx1ZSkge1xuICBpZiAodmFsdWUgPT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBpZiAob2JqVG9TdHJpbmcuY2FsbCh2YWx1ZSkgPT0gZnVuY1RhZykge1xuICAgIHJldHVybiByZUlzTmF0aXZlLnRlc3QoZm5Ub1N0cmluZy5jYWxsKHZhbHVlKSk7XG4gIH1cbiAgcmV0dXJuIGlzT2JqZWN0TGlrZSh2YWx1ZSkgJiYgcmVJc0hvc3RDdG9yLnRlc3QodmFsdWUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGlzTmF0aXZlO1xuIiwiLyoqXG4gKiBDaGVja3MgaWYgYHZhbHVlYCBpcyB0aGUgW2xhbmd1YWdlIHR5cGVdKGh0dHBzOi8vZXM1LmdpdGh1Yi5pby8jeDgpIG9mIGBPYmplY3RgLlxuICogKGUuZy4gYXJyYXlzLCBmdW5jdGlvbnMsIG9iamVjdHMsIHJlZ2V4ZXMsIGBuZXcgTnVtYmVyKDApYCwgYW5kIGBuZXcgU3RyaW5nKCcnKWApXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBjYXRlZ29yeSBMYW5nXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBgdmFsdWVgIGlzIGFuIG9iamVjdCwgZWxzZSBgZmFsc2VgLlxuICogQGV4YW1wbGVcbiAqXG4gKiBfLmlzT2JqZWN0KHt9KTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmlzT2JqZWN0KFsxLCAyLCAzXSk7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5pc09iamVjdCgxKTtcbiAqIC8vID0+IGZhbHNlXG4gKi9cbmZ1bmN0aW9uIGlzT2JqZWN0KHZhbHVlKSB7XG4gIC8vIEF2b2lkIGEgVjggSklUIGJ1ZyBpbiBDaHJvbWUgMTktMjAuXG4gIC8vIFNlZSBodHRwczovL2NvZGUuZ29vZ2xlLmNvbS9wL3Y4L2lzc3Vlcy9kZXRhaWw/aWQ9MjI5MSBmb3IgbW9yZSBkZXRhaWxzLlxuICB2YXIgdHlwZSA9IHR5cGVvZiB2YWx1ZTtcbiAgcmV0dXJuICEhdmFsdWUgJiYgKHR5cGUgPT0gJ29iamVjdCcgfHwgdHlwZSA9PSAnZnVuY3Rpb24nKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpc09iamVjdDtcbiIsInZhciBpc0xlbmd0aCA9IHJlcXVpcmUoJy4uL2ludGVybmFsL2lzTGVuZ3RoJyksXG4gICAgaXNPYmplY3RMaWtlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWwvaXNPYmplY3RMaWtlJyk7XG5cbi8qKiBgT2JqZWN0I3RvU3RyaW5nYCByZXN1bHQgcmVmZXJlbmNlcy4gKi9cbnZhciBhcmdzVGFnID0gJ1tvYmplY3QgQXJndW1lbnRzXScsXG4gICAgYXJyYXlUYWcgPSAnW29iamVjdCBBcnJheV0nLFxuICAgIGJvb2xUYWcgPSAnW29iamVjdCBCb29sZWFuXScsXG4gICAgZGF0ZVRhZyA9ICdbb2JqZWN0IERhdGVdJyxcbiAgICBlcnJvclRhZyA9ICdbb2JqZWN0IEVycm9yXScsXG4gICAgZnVuY1RhZyA9ICdbb2JqZWN0IEZ1bmN0aW9uXScsXG4gICAgbWFwVGFnID0gJ1tvYmplY3QgTWFwXScsXG4gICAgbnVtYmVyVGFnID0gJ1tvYmplY3QgTnVtYmVyXScsXG4gICAgb2JqZWN0VGFnID0gJ1tvYmplY3QgT2JqZWN0XScsXG4gICAgcmVnZXhwVGFnID0gJ1tvYmplY3QgUmVnRXhwXScsXG4gICAgc2V0VGFnID0gJ1tvYmplY3QgU2V0XScsXG4gICAgc3RyaW5nVGFnID0gJ1tvYmplY3QgU3RyaW5nXScsXG4gICAgd2Vha01hcFRhZyA9ICdbb2JqZWN0IFdlYWtNYXBdJztcblxudmFyIGFycmF5QnVmZmVyVGFnID0gJ1tvYmplY3QgQXJyYXlCdWZmZXJdJyxcbiAgICBmbG9hdDMyVGFnID0gJ1tvYmplY3QgRmxvYXQzMkFycmF5XScsXG4gICAgZmxvYXQ2NFRhZyA9ICdbb2JqZWN0IEZsb2F0NjRBcnJheV0nLFxuICAgIGludDhUYWcgPSAnW29iamVjdCBJbnQ4QXJyYXldJyxcbiAgICBpbnQxNlRhZyA9ICdbb2JqZWN0IEludDE2QXJyYXldJyxcbiAgICBpbnQzMlRhZyA9ICdbb2JqZWN0IEludDMyQXJyYXldJyxcbiAgICB1aW50OFRhZyA9ICdbb2JqZWN0IFVpbnQ4QXJyYXldJyxcbiAgICB1aW50OENsYW1wZWRUYWcgPSAnW29iamVjdCBVaW50OENsYW1wZWRBcnJheV0nLFxuICAgIHVpbnQxNlRhZyA9ICdbb2JqZWN0IFVpbnQxNkFycmF5XScsXG4gICAgdWludDMyVGFnID0gJ1tvYmplY3QgVWludDMyQXJyYXldJztcblxuLyoqIFVzZWQgdG8gaWRlbnRpZnkgYHRvU3RyaW5nVGFnYCB2YWx1ZXMgb2YgdHlwZWQgYXJyYXlzLiAqL1xudmFyIHR5cGVkQXJyYXlUYWdzID0ge307XG50eXBlZEFycmF5VGFnc1tmbG9hdDMyVGFnXSA9IHR5cGVkQXJyYXlUYWdzW2Zsb2F0NjRUYWddID1cbnR5cGVkQXJyYXlUYWdzW2ludDhUYWddID0gdHlwZWRBcnJheVRhZ3NbaW50MTZUYWddID1cbnR5cGVkQXJyYXlUYWdzW2ludDMyVGFnXSA9IHR5cGVkQXJyYXlUYWdzW3VpbnQ4VGFnXSA9XG50eXBlZEFycmF5VGFnc1t1aW50OENsYW1wZWRUYWddID0gdHlwZWRBcnJheVRhZ3NbdWludDE2VGFnXSA9XG50eXBlZEFycmF5VGFnc1t1aW50MzJUYWddID0gdHJ1ZTtcbnR5cGVkQXJyYXlUYWdzW2FyZ3NUYWddID0gdHlwZWRBcnJheVRhZ3NbYXJyYXlUYWddID1cbnR5cGVkQXJyYXlUYWdzW2FycmF5QnVmZmVyVGFnXSA9IHR5cGVkQXJyYXlUYWdzW2Jvb2xUYWddID1cbnR5cGVkQXJyYXlUYWdzW2RhdGVUYWddID0gdHlwZWRBcnJheVRhZ3NbZXJyb3JUYWddID1cbnR5cGVkQXJyYXlUYWdzW2Z1bmNUYWddID0gdHlwZWRBcnJheVRhZ3NbbWFwVGFnXSA9XG50eXBlZEFycmF5VGFnc1tudW1iZXJUYWddID0gdHlwZWRBcnJheVRhZ3Nbb2JqZWN0VGFnXSA9XG50eXBlZEFycmF5VGFnc1tyZWdleHBUYWddID0gdHlwZWRBcnJheVRhZ3Nbc2V0VGFnXSA9XG50eXBlZEFycmF5VGFnc1tzdHJpbmdUYWddID0gdHlwZWRBcnJheVRhZ3Nbd2Vha01hcFRhZ10gPSBmYWxzZTtcblxuLyoqIFVzZWQgZm9yIG5hdGl2ZSBtZXRob2QgcmVmZXJlbmNlcy4gKi9cbnZhciBvYmplY3RQcm90byA9IE9iamVjdC5wcm90b3R5cGU7XG5cbi8qKlxuICogVXNlZCB0byByZXNvbHZlIHRoZSBbYHRvU3RyaW5nVGFnYF0oaHR0cHM6Ly9wZW9wbGUubW96aWxsYS5vcmcvfmpvcmVuZG9yZmYvZXM2LWRyYWZ0Lmh0bWwjc2VjLW9iamVjdC5wcm90b3R5cGUudG9zdHJpbmcpXG4gKiBvZiB2YWx1ZXMuXG4gKi9cbnZhciBvYmpUb1N0cmluZyA9IG9iamVjdFByb3RvLnRvU3RyaW5nO1xuXG4vKipcbiAqIENoZWNrcyBpZiBgdmFsdWVgIGlzIGNsYXNzaWZpZWQgYXMgYSB0eXBlZCBhcnJheS5cbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQGNhdGVnb3J5IExhbmdcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGB2YWx1ZWAgaXMgY29ycmVjdGx5IGNsYXNzaWZpZWQsIGVsc2UgYGZhbHNlYC5cbiAqIEBleGFtcGxlXG4gKlxuICogXy5pc1R5cGVkQXJyYXkobmV3IFVpbnQ4QXJyYXkpO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uaXNUeXBlZEFycmF5KFtdKTtcbiAqIC8vID0+IGZhbHNlXG4gKi9cbmZ1bmN0aW9uIGlzVHlwZWRBcnJheSh2YWx1ZSkge1xuICByZXR1cm4gaXNPYmplY3RMaWtlKHZhbHVlKSAmJiBpc0xlbmd0aCh2YWx1ZS5sZW5ndGgpICYmICEhdHlwZWRBcnJheVRhZ3Nbb2JqVG9TdHJpbmcuY2FsbCh2YWx1ZSldO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGlzVHlwZWRBcnJheTtcbiIsInZhciBnZXROYXRpdmUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbC9nZXROYXRpdmUnKSxcbiAgICBpc0FycmF5TGlrZSA9IHJlcXVpcmUoJy4uL2ludGVybmFsL2lzQXJyYXlMaWtlJyksXG4gICAgaXNPYmplY3QgPSByZXF1aXJlKCcuLi9sYW5nL2lzT2JqZWN0JyksXG4gICAgc2hpbUtleXMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbC9zaGltS2V5cycpO1xuXG4vKiBOYXRpdmUgbWV0aG9kIHJlZmVyZW5jZXMgZm9yIHRob3NlIHdpdGggdGhlIHNhbWUgbmFtZSBhcyBvdGhlciBgbG9kYXNoYCBtZXRob2RzLiAqL1xudmFyIG5hdGl2ZUtleXMgPSBnZXROYXRpdmUoT2JqZWN0LCAna2V5cycpO1xuXG4vKipcbiAqIENyZWF0ZXMgYW4gYXJyYXkgb2YgdGhlIG93biBlbnVtZXJhYmxlIHByb3BlcnR5IG5hbWVzIG9mIGBvYmplY3RgLlxuICpcbiAqICoqTm90ZToqKiBOb24tb2JqZWN0IHZhbHVlcyBhcmUgY29lcmNlZCB0byBvYmplY3RzLiBTZWUgdGhlXG4gKiBbRVMgc3BlY10oaHR0cHM6Ly9wZW9wbGUubW96aWxsYS5vcmcvfmpvcmVuZG9yZmYvZXM2LWRyYWZ0Lmh0bWwjc2VjLW9iamVjdC5rZXlzKVxuICogZm9yIG1vcmUgZGV0YWlscy5cbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQGNhdGVnb3J5IE9iamVjdFxuICogQHBhcmFtIHtPYmplY3R9IG9iamVjdCBUaGUgb2JqZWN0IHRvIHF1ZXJ5LlxuICogQHJldHVybnMge0FycmF5fSBSZXR1cm5zIHRoZSBhcnJheSBvZiBwcm9wZXJ0eSBuYW1lcy5cbiAqIEBleGFtcGxlXG4gKlxuICogZnVuY3Rpb24gRm9vKCkge1xuICogICB0aGlzLmEgPSAxO1xuICogICB0aGlzLmIgPSAyO1xuICogfVxuICpcbiAqIEZvby5wcm90b3R5cGUuYyA9IDM7XG4gKlxuICogXy5rZXlzKG5ldyBGb28pO1xuICogLy8gPT4gWydhJywgJ2InXSAoaXRlcmF0aW9uIG9yZGVyIGlzIG5vdCBndWFyYW50ZWVkKVxuICpcbiAqIF8ua2V5cygnaGknKTtcbiAqIC8vID0+IFsnMCcsICcxJ11cbiAqL1xudmFyIGtleXMgPSAhbmF0aXZlS2V5cyA/IHNoaW1LZXlzIDogZnVuY3Rpb24ob2JqZWN0KSB7XG4gIHZhciBDdG9yID0gb2JqZWN0ID09IG51bGwgPyBudWxsIDogb2JqZWN0LmNvbnN0cnVjdG9yO1xuICBpZiAoKHR5cGVvZiBDdG9yID09ICdmdW5jdGlvbicgJiYgQ3Rvci5wcm90b3R5cGUgPT09IG9iamVjdCkgfHxcbiAgICAgICh0eXBlb2Ygb2JqZWN0ICE9ICdmdW5jdGlvbicgJiYgaXNBcnJheUxpa2Uob2JqZWN0KSkpIHtcbiAgICByZXR1cm4gc2hpbUtleXMob2JqZWN0KTtcbiAgfVxuICByZXR1cm4gaXNPYmplY3Qob2JqZWN0KSA/IG5hdGl2ZUtleXMob2JqZWN0KSA6IFtdO1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSBrZXlzO1xuIiwidmFyIGlzQXJndW1lbnRzID0gcmVxdWlyZSgnLi4vbGFuZy9pc0FyZ3VtZW50cycpLFxuICAgIGlzQXJyYXkgPSByZXF1aXJlKCcuLi9sYW5nL2lzQXJyYXknKSxcbiAgICBpc0luZGV4ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWwvaXNJbmRleCcpLFxuICAgIGlzTGVuZ3RoID0gcmVxdWlyZSgnLi4vaW50ZXJuYWwvaXNMZW5ndGgnKSxcbiAgICBpc09iamVjdCA9IHJlcXVpcmUoJy4uL2xhbmcvaXNPYmplY3QnKTtcblxuLyoqIFVzZWQgZm9yIG5hdGl2ZSBtZXRob2QgcmVmZXJlbmNlcy4gKi9cbnZhciBvYmplY3RQcm90byA9IE9iamVjdC5wcm90b3R5cGU7XG5cbi8qKiBVc2VkIHRvIGNoZWNrIG9iamVjdHMgZm9yIG93biBwcm9wZXJ0aWVzLiAqL1xudmFyIGhhc093blByb3BlcnR5ID0gb2JqZWN0UHJvdG8uaGFzT3duUHJvcGVydHk7XG5cbi8qKlxuICogQ3JlYXRlcyBhbiBhcnJheSBvZiB0aGUgb3duIGFuZCBpbmhlcml0ZWQgZW51bWVyYWJsZSBwcm9wZXJ0eSBuYW1lcyBvZiBgb2JqZWN0YC5cbiAqXG4gKiAqKk5vdGU6KiogTm9uLW9iamVjdCB2YWx1ZXMgYXJlIGNvZXJjZWQgdG8gb2JqZWN0cy5cbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQGNhdGVnb3J5IE9iamVjdFxuICogQHBhcmFtIHtPYmplY3R9IG9iamVjdCBUaGUgb2JqZWN0IHRvIHF1ZXJ5LlxuICogQHJldHVybnMge0FycmF5fSBSZXR1cm5zIHRoZSBhcnJheSBvZiBwcm9wZXJ0eSBuYW1lcy5cbiAqIEBleGFtcGxlXG4gKlxuICogZnVuY3Rpb24gRm9vKCkge1xuICogICB0aGlzLmEgPSAxO1xuICogICB0aGlzLmIgPSAyO1xuICogfVxuICpcbiAqIEZvby5wcm90b3R5cGUuYyA9IDM7XG4gKlxuICogXy5rZXlzSW4obmV3IEZvbyk7XG4gKiAvLyA9PiBbJ2EnLCAnYicsICdjJ10gKGl0ZXJhdGlvbiBvcmRlciBpcyBub3QgZ3VhcmFudGVlZClcbiAqL1xuZnVuY3Rpb24ga2V5c0luKG9iamVjdCkge1xuICBpZiAob2JqZWN0ID09IG51bGwpIHtcbiAgICByZXR1cm4gW107XG4gIH1cbiAgaWYgKCFpc09iamVjdChvYmplY3QpKSB7XG4gICAgb2JqZWN0ID0gT2JqZWN0KG9iamVjdCk7XG4gIH1cbiAgdmFyIGxlbmd0aCA9IG9iamVjdC5sZW5ndGg7XG4gIGxlbmd0aCA9IChsZW5ndGggJiYgaXNMZW5ndGgobGVuZ3RoKSAmJlxuICAgIChpc0FycmF5KG9iamVjdCkgfHwgaXNBcmd1bWVudHMob2JqZWN0KSkgJiYgbGVuZ3RoKSB8fCAwO1xuXG4gIHZhciBDdG9yID0gb2JqZWN0LmNvbnN0cnVjdG9yLFxuICAgICAgaW5kZXggPSAtMSxcbiAgICAgIGlzUHJvdG8gPSB0eXBlb2YgQ3RvciA9PSAnZnVuY3Rpb24nICYmIEN0b3IucHJvdG90eXBlID09PSBvYmplY3QsXG4gICAgICByZXN1bHQgPSBBcnJheShsZW5ndGgpLFxuICAgICAgc2tpcEluZGV4ZXMgPSBsZW5ndGggPiAwO1xuXG4gIHdoaWxlICgrK2luZGV4IDwgbGVuZ3RoKSB7XG4gICAgcmVzdWx0W2luZGV4XSA9IChpbmRleCArICcnKTtcbiAgfVxuICBmb3IgKHZhciBrZXkgaW4gb2JqZWN0KSB7XG4gICAgaWYgKCEoc2tpcEluZGV4ZXMgJiYgaXNJbmRleChrZXksIGxlbmd0aCkpICYmXG4gICAgICAgICEoa2V5ID09ICdjb25zdHJ1Y3RvcicgJiYgKGlzUHJvdG8gfHwgIWhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBrZXkpKSkpIHtcbiAgICAgIHJlc3VsdC5wdXNoKGtleSk7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0ga2V5c0luO1xuIiwidmFyIGtleXMgPSByZXF1aXJlKCcuL2tleXMnKSxcbiAgICB0b09iamVjdCA9IHJlcXVpcmUoJy4uL2ludGVybmFsL3RvT2JqZWN0Jyk7XG5cbi8qKlxuICogQ3JlYXRlcyBhIHR3byBkaW1lbnNpb25hbCBhcnJheSBvZiB0aGUga2V5LXZhbHVlIHBhaXJzIGZvciBgb2JqZWN0YCxcbiAqIGUuZy4gYFtba2V5MSwgdmFsdWUxXSwgW2tleTIsIHZhbHVlMl1dYC5cbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQGNhdGVnb3J5IE9iamVjdFxuICogQHBhcmFtIHtPYmplY3R9IG9iamVjdCBUaGUgb2JqZWN0IHRvIHF1ZXJ5LlxuICogQHJldHVybnMge0FycmF5fSBSZXR1cm5zIHRoZSBuZXcgYXJyYXkgb2Yga2V5LXZhbHVlIHBhaXJzLlxuICogQGV4YW1wbGVcbiAqXG4gKiBfLnBhaXJzKHsgJ2Jhcm5leSc6IDM2LCAnZnJlZCc6IDQwIH0pO1xuICogLy8gPT4gW1snYmFybmV5JywgMzZdLCBbJ2ZyZWQnLCA0MF1dIChpdGVyYXRpb24gb3JkZXIgaXMgbm90IGd1YXJhbnRlZWQpXG4gKi9cbmZ1bmN0aW9uIHBhaXJzKG9iamVjdCkge1xuICBvYmplY3QgPSB0b09iamVjdChvYmplY3QpO1xuXG4gIHZhciBpbmRleCA9IC0xLFxuICAgICAgcHJvcHMgPSBrZXlzKG9iamVjdCksXG4gICAgICBsZW5ndGggPSBwcm9wcy5sZW5ndGgsXG4gICAgICByZXN1bHQgPSBBcnJheShsZW5ndGgpO1xuXG4gIHdoaWxlICgrK2luZGV4IDwgbGVuZ3RoKSB7XG4gICAgdmFyIGtleSA9IHByb3BzW2luZGV4XTtcbiAgICByZXN1bHRbaW5kZXhdID0gW2tleSwgb2JqZWN0W2tleV1dO1xuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gcGFpcnM7XG4iLCJ2YXIgYmFzZVRvU3RyaW5nID0gcmVxdWlyZSgnLi4vaW50ZXJuYWwvYmFzZVRvU3RyaW5nJyk7XG5cbi8qKlxuICogVXNlZCB0byBtYXRjaCBgUmVnRXhwYCBbc3BlY2lhbCBjaGFyYWN0ZXJzXShodHRwOi8vd3d3LnJlZ3VsYXItZXhwcmVzc2lvbnMuaW5mby9jaGFyYWN0ZXJzLmh0bWwjc3BlY2lhbCkuXG4gKiBJbiBhZGRpdGlvbiB0byBzcGVjaWFsIGNoYXJhY3RlcnMgdGhlIGZvcndhcmQgc2xhc2ggaXMgZXNjYXBlZCB0byBhbGxvdyBmb3JcbiAqIGVhc2llciBgZXZhbGAgdXNlIGFuZCBgRnVuY3Rpb25gIGNvbXBpbGF0aW9uLlxuICovXG52YXIgcmVSZWdFeHBDaGFycyA9IC9bLiorP14ke30oKXxbXFxdXFwvXFxcXF0vZyxcbiAgICByZUhhc1JlZ0V4cENoYXJzID0gUmVnRXhwKHJlUmVnRXhwQ2hhcnMuc291cmNlKTtcblxuLyoqXG4gKiBFc2NhcGVzIHRoZSBgUmVnRXhwYCBzcGVjaWFsIGNoYXJhY3RlcnMgXCJcXFwiLCBcIi9cIiwgXCJeXCIsIFwiJFwiLCBcIi5cIiwgXCJ8XCIsIFwiP1wiLFxuICogXCIqXCIsIFwiK1wiLCBcIihcIiwgXCIpXCIsIFwiW1wiLCBcIl1cIiwgXCJ7XCIgYW5kIFwifVwiIGluIGBzdHJpbmdgLlxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAY2F0ZWdvcnkgU3RyaW5nXG4gKiBAcGFyYW0ge3N0cmluZ30gW3N0cmluZz0nJ10gVGhlIHN0cmluZyB0byBlc2NhcGUuXG4gKiBAcmV0dXJucyB7c3RyaW5nfSBSZXR1cm5zIHRoZSBlc2NhcGVkIHN0cmluZy5cbiAqIEBleGFtcGxlXG4gKlxuICogXy5lc2NhcGVSZWdFeHAoJ1tsb2Rhc2hdKGh0dHBzOi8vbG9kYXNoLmNvbS8pJyk7XG4gKiAvLyA9PiAnXFxbbG9kYXNoXFxdXFwoaHR0cHM6XFwvXFwvbG9kYXNoXFwuY29tXFwvXFwpJ1xuICovXG5mdW5jdGlvbiBlc2NhcGVSZWdFeHAoc3RyaW5nKSB7XG4gIHN0cmluZyA9IGJhc2VUb1N0cmluZyhzdHJpbmcpO1xuICByZXR1cm4gKHN0cmluZyAmJiByZUhhc1JlZ0V4cENoYXJzLnRlc3Qoc3RyaW5nKSlcbiAgICA/IHN0cmluZy5yZXBsYWNlKHJlUmVnRXhwQ2hhcnMsICdcXFxcJCYnKVxuICAgIDogc3RyaW5nO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGVzY2FwZVJlZ0V4cDtcbiIsInZhciBiYXNlVG9TdHJpbmcgPSByZXF1aXJlKCcuLi9pbnRlcm5hbC9iYXNlVG9TdHJpbmcnKTtcblxuLyogTmF0aXZlIG1ldGhvZCByZWZlcmVuY2VzIGZvciB0aG9zZSB3aXRoIHRoZSBzYW1lIG5hbWUgYXMgb3RoZXIgYGxvZGFzaGAgbWV0aG9kcy4gKi9cbnZhciBuYXRpdmVNaW4gPSBNYXRoLm1pbjtcblxuLyoqXG4gKiBDaGVja3MgaWYgYHN0cmluZ2Agc3RhcnRzIHdpdGggdGhlIGdpdmVuIHRhcmdldCBzdHJpbmcuXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBjYXRlZ29yeSBTdHJpbmdcbiAqIEBwYXJhbSB7c3RyaW5nfSBbc3RyaW5nPScnXSBUaGUgc3RyaW5nIHRvIHNlYXJjaC5cbiAqIEBwYXJhbSB7c3RyaW5nfSBbdGFyZ2V0XSBUaGUgc3RyaW5nIHRvIHNlYXJjaCBmb3IuXG4gKiBAcGFyYW0ge251bWJlcn0gW3Bvc2l0aW9uPTBdIFRoZSBwb3NpdGlvbiB0byBzZWFyY2ggZnJvbS5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBgc3RyaW5nYCBzdGFydHMgd2l0aCBgdGFyZ2V0YCwgZWxzZSBgZmFsc2VgLlxuICogQGV4YW1wbGVcbiAqXG4gKiBfLnN0YXJ0c1dpdGgoJ2FiYycsICdhJyk7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5zdGFydHNXaXRoKCdhYmMnLCAnYicpO1xuICogLy8gPT4gZmFsc2VcbiAqXG4gKiBfLnN0YXJ0c1dpdGgoJ2FiYycsICdiJywgMSk7XG4gKiAvLyA9PiB0cnVlXG4gKi9cbmZ1bmN0aW9uIHN0YXJ0c1dpdGgoc3RyaW5nLCB0YXJnZXQsIHBvc2l0aW9uKSB7XG4gIHN0cmluZyA9IGJhc2VUb1N0cmluZyhzdHJpbmcpO1xuICBwb3NpdGlvbiA9IHBvc2l0aW9uID09IG51bGxcbiAgICA/IDBcbiAgICA6IG5hdGl2ZU1pbihwb3NpdGlvbiA8IDAgPyAwIDogKCtwb3NpdGlvbiB8fCAwKSwgc3RyaW5nLmxlbmd0aCk7XG5cbiAgcmV0dXJuIHN0cmluZy5sYXN0SW5kZXhPZih0YXJnZXQsIHBvc2l0aW9uKSA9PSBwb3NpdGlvbjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdGFydHNXaXRoO1xuIiwidmFyIGJhc2VUb1N0cmluZyA9IHJlcXVpcmUoJy4uL2ludGVybmFsL2Jhc2VUb1N0cmluZycpLFxuICAgIGNoYXJzTGVmdEluZGV4ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWwvY2hhcnNMZWZ0SW5kZXgnKSxcbiAgICBjaGFyc1JpZ2h0SW5kZXggPSByZXF1aXJlKCcuLi9pbnRlcm5hbC9jaGFyc1JpZ2h0SW5kZXgnKSxcbiAgICBpc0l0ZXJhdGVlQ2FsbCA9IHJlcXVpcmUoJy4uL2ludGVybmFsL2lzSXRlcmF0ZWVDYWxsJyksXG4gICAgdHJpbW1lZExlZnRJbmRleCA9IHJlcXVpcmUoJy4uL2ludGVybmFsL3RyaW1tZWRMZWZ0SW5kZXgnKSxcbiAgICB0cmltbWVkUmlnaHRJbmRleCA9IHJlcXVpcmUoJy4uL2ludGVybmFsL3RyaW1tZWRSaWdodEluZGV4Jyk7XG5cbi8qKlxuICogUmVtb3ZlcyBsZWFkaW5nIGFuZCB0cmFpbGluZyB3aGl0ZXNwYWNlIG9yIHNwZWNpZmllZCBjaGFyYWN0ZXJzIGZyb20gYHN0cmluZ2AuXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBjYXRlZ29yeSBTdHJpbmdcbiAqIEBwYXJhbSB7c3RyaW5nfSBbc3RyaW5nPScnXSBUaGUgc3RyaW5nIHRvIHRyaW0uXG4gKiBAcGFyYW0ge3N0cmluZ30gW2NoYXJzPXdoaXRlc3BhY2VdIFRoZSBjaGFyYWN0ZXJzIHRvIHRyaW0uXG4gKiBAcGFyYW0tIHtPYmplY3R9IFtndWFyZF0gRW5hYmxlcyB1c2UgYXMgYSBjYWxsYmFjayBmb3IgZnVuY3Rpb25zIGxpa2UgYF8ubWFwYC5cbiAqIEByZXR1cm5zIHtzdHJpbmd9IFJldHVybnMgdGhlIHRyaW1tZWQgc3RyaW5nLlxuICogQGV4YW1wbGVcbiAqXG4gKiBfLnRyaW0oJyAgYWJjICAnKTtcbiAqIC8vID0+ICdhYmMnXG4gKlxuICogXy50cmltKCctXy1hYmMtXy0nLCAnXy0nKTtcbiAqIC8vID0+ICdhYmMnXG4gKlxuICogXy5tYXAoWycgIGZvbyAgJywgJyAgYmFyICAnXSwgXy50cmltKTtcbiAqIC8vID0+IFsnZm9vJywgJ2JhciddXG4gKi9cbmZ1bmN0aW9uIHRyaW0oc3RyaW5nLCBjaGFycywgZ3VhcmQpIHtcbiAgdmFyIHZhbHVlID0gc3RyaW5nO1xuICBzdHJpbmcgPSBiYXNlVG9TdHJpbmcoc3RyaW5nKTtcbiAgaWYgKCFzdHJpbmcpIHtcbiAgICByZXR1cm4gc3RyaW5nO1xuICB9XG4gIGlmIChndWFyZCA/IGlzSXRlcmF0ZWVDYWxsKHZhbHVlLCBjaGFycywgZ3VhcmQpIDogY2hhcnMgPT0gbnVsbCkge1xuICAgIHJldHVybiBzdHJpbmcuc2xpY2UodHJpbW1lZExlZnRJbmRleChzdHJpbmcpLCB0cmltbWVkUmlnaHRJbmRleChzdHJpbmcpICsgMSk7XG4gIH1cbiAgY2hhcnMgPSAoY2hhcnMgKyAnJyk7XG4gIHJldHVybiBzdHJpbmcuc2xpY2UoY2hhcnNMZWZ0SW5kZXgoc3RyaW5nLCBjaGFycyksIGNoYXJzUmlnaHRJbmRleChzdHJpbmcsIGNoYXJzKSArIDEpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHRyaW07XG4iLCIvKipcbiAqIFRoaXMgbWV0aG9kIHJldHVybnMgdGhlIGZpcnN0IGFyZ3VtZW50IHByb3ZpZGVkIHRvIGl0LlxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAY2F0ZWdvcnkgVXRpbGl0eVxuICogQHBhcmFtIHsqfSB2YWx1ZSBBbnkgdmFsdWUuXG4gKiBAcmV0dXJucyB7Kn0gUmV0dXJucyBgdmFsdWVgLlxuICogQGV4YW1wbGVcbiAqXG4gKiB2YXIgb2JqZWN0ID0geyAndXNlcic6ICdmcmVkJyB9O1xuICpcbiAqIF8uaWRlbnRpdHkob2JqZWN0KSA9PT0gb2JqZWN0O1xuICogLy8gPT4gdHJ1ZVxuICovXG5mdW5jdGlvbiBpZGVudGl0eSh2YWx1ZSkge1xuICByZXR1cm4gdmFsdWU7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaWRlbnRpdHk7XG4iLCJ2YXIgYmFzZVByb3BlcnR5ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWwvYmFzZVByb3BlcnR5JyksXG4gICAgYmFzZVByb3BlcnR5RGVlcCA9IHJlcXVpcmUoJy4uL2ludGVybmFsL2Jhc2VQcm9wZXJ0eURlZXAnKSxcbiAgICBpc0tleSA9IHJlcXVpcmUoJy4uL2ludGVybmFsL2lzS2V5Jyk7XG5cbi8qKlxuICogQ3JlYXRlcyBhIGZ1bmN0aW9uIHRoYXQgcmV0dXJucyB0aGUgcHJvcGVydHkgdmFsdWUgYXQgYHBhdGhgIG9uIGFcbiAqIGdpdmVuIG9iamVjdC5cbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQGNhdGVnb3J5IFV0aWxpdHlcbiAqIEBwYXJhbSB7QXJyYXl8c3RyaW5nfSBwYXRoIFRoZSBwYXRoIG9mIHRoZSBwcm9wZXJ0eSB0byBnZXQuXG4gKiBAcmV0dXJucyB7RnVuY3Rpb259IFJldHVybnMgdGhlIG5ldyBmdW5jdGlvbi5cbiAqIEBleGFtcGxlXG4gKlxuICogdmFyIG9iamVjdHMgPSBbXG4gKiAgIHsgJ2EnOiB7ICdiJzogeyAnYyc6IDIgfSB9IH0sXG4gKiAgIHsgJ2EnOiB7ICdiJzogeyAnYyc6IDEgfSB9IH1cbiAqIF07XG4gKlxuICogXy5tYXAob2JqZWN0cywgXy5wcm9wZXJ0eSgnYS5iLmMnKSk7XG4gKiAvLyA9PiBbMiwgMV1cbiAqXG4gKiBfLnBsdWNrKF8uc29ydEJ5KG9iamVjdHMsIF8ucHJvcGVydHkoWydhJywgJ2InLCAnYyddKSksICdhLmIuYycpO1xuICogLy8gPT4gWzEsIDJdXG4gKi9cbmZ1bmN0aW9uIHByb3BlcnR5KHBhdGgpIHtcbiAgcmV0dXJuIGlzS2V5KHBhdGgpID8gYmFzZVByb3BlcnR5KHBhdGgpIDogYmFzZVByb3BlcnR5RGVlcChwYXRoKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBwcm9wZXJ0eTtcbiIsIid1c2Ugc3RyaWN0JztcblxuLy8gU28gZWFjaCBjb3VudHJ5IGFycmF5IGhhcyB0aGUgZm9sbG93aW5nIGluZm9ybWF0aW9uOlxuLy8gW1xuLy8gICAgQ291bnRyeSBuYW1lLFxuLy8gICAgaXNvMiBjb2RlLFxuLy8gICAgSW50ZXJuYXRpb25hbCBkaWFsIGNvZGUsXG4vLyAgICBGb3JtYXQgKGlmIGF2YWlsYWJsZSksXG4vLyAgICBPcmRlciAoaWYgPjEgY291bnRyeSB3aXRoIHNhbWUgZGlhbCBjb2RlKSxcbi8vICAgIEFyZWEgY29kZXMgKGlmID4xIGNvdW50cnkgd2l0aCBzYW1lIGRpYWwgY29kZSlcbi8vIF1cbnZhciBhbGxDb3VudHJpZXMgPSBbXG4gICAgW1xuICAgICAgJ0FmZ2hhbmlzdGFuICjigKvYp9mB2LrYp9mG2LPYqtin2YbigKzigI4pJyxcbiAgICAgICdhZicsXG4gICAgICAnOTMnXG4gICAgXSxcbiAgICBbXG4gICAgICAnQWxiYW5pYSAoU2hxaXDDq3JpKScsXG4gICAgICAnYWwnLFxuICAgICAgJzM1NSdcbiAgICBdLFxuICAgIFtcbiAgICAgICdBbGdlcmlhICjigKvYp9mE2KzYstin2KbYseKArOKAjiknLFxuICAgICAgJ2R6JyxcbiAgICAgICcyMTMnXG4gICAgXSxcbiAgICBbXG4gICAgICAnQW1lcmljYW4gU2Ftb2EnLFxuICAgICAgJ2FzJyxcbiAgICAgICcxNjg0J1xuICAgIF0sXG4gICAgW1xuICAgICAgJ0FuZG9ycmEnLFxuICAgICAgJ2FkJyxcbiAgICAgICczNzYnXG4gICAgXSxcbiAgICBbXG4gICAgICAnQW5nb2xhJyxcbiAgICAgICdhbycsXG4gICAgICAnMjQ0J1xuICAgIF0sXG4gICAgW1xuICAgICAgJ0FuZ3VpbGxhJyxcbiAgICAgICdhaScsXG4gICAgICAnMTI2NCdcbiAgICBdLFxuICAgIFtcbiAgICAgICdBbnRpZ3VhIGFuZCBCYXJidWRhJyxcbiAgICAgICdhZycsXG4gICAgICAnMTI2OCdcbiAgICBdLFxuICAgIFtcbiAgICAgICdBcmdlbnRpbmEnLFxuICAgICAgJ2FyJyxcbiAgICAgICc1NCdcbiAgICBdLFxuICAgIFtcbiAgICAgICdBcm1lbmlhICjVgNWh1bXVodW91b/VodW2KScsXG4gICAgICAnYW0nLFxuICAgICAgJzM3NCdcbiAgICBdLFxuICAgIFtcbiAgICAgICdBcnViYScsXG4gICAgICAnYXcnLFxuICAgICAgJzI5NydcbiAgICBdLFxuICAgIFtcbiAgICAgICdBdXN0cmFsaWEnLFxuICAgICAgJ2F1JyxcbiAgICAgICc2MScsXG4gICAgICAnKy4uIC4uLiAuLi4gLi4uJ1xuICAgIF0sXG4gICAgW1xuICAgICAgJ0F1c3RyaWEgKMOWc3RlcnJlaWNoKScsXG4gICAgICAnYXQnLFxuICAgICAgJzQzJ1xuICAgIF0sXG4gICAgW1xuICAgICAgJ0F6ZXJiYWlqYW4gKEF6yZlyYmF5Y2FuKScsXG4gICAgICAnYXonLFxuICAgICAgJzk5NCdcbiAgICBdLFxuICAgIFtcbiAgICAgICdCYWhhbWFzJyxcbiAgICAgICdicycsXG4gICAgICAnMTI0MidcbiAgICBdLFxuICAgIFtcbiAgICAgICdCYWhyYWluICjigKvYp9mE2KjYrdix2YrZhuKArOKAjiknLFxuICAgICAgJ2JoJyxcbiAgICAgICc5NzMnXG4gICAgXSxcbiAgICBbXG4gICAgICAnQmFuZ2xhZGVzaCAo4Kas4Ka+4KaC4Kay4Ka+4Kam4KeH4Ka2KScsXG4gICAgICAnYmQnLFxuICAgICAgJzg4MCdcbiAgICBdLFxuICAgIFtcbiAgICAgICdCYXJiYWRvcycsXG4gICAgICAnYmInLFxuICAgICAgJzEyNDYnXG4gICAgXSxcbiAgICBbXG4gICAgICAnQmVsYXJ1cyAo0JHQtdC70LDRgNGD0YHRjCknLFxuICAgICAgJ2J5JyxcbiAgICAgICczNzUnXG4gICAgXSxcbiAgICBbXG4gICAgICAnQmVsZ2l1bSAoQmVsZ2nDqyknLFxuICAgICAgJ2JlJyxcbiAgICAgICczMicsXG4gICAgICAnKy4uIC4uLiAuLiAuLiAuLidcbiAgICBdLFxuICAgIFtcbiAgICAgICdCZWxpemUnLFxuICAgICAgJ2J6JyxcbiAgICAgICc1MDEnXG4gICAgXSxcbiAgICBbXG4gICAgICAnQmVuaW4gKELDqW5pbiknLFxuICAgICAgJ2JqJyxcbiAgICAgICcyMjknXG4gICAgXSxcbiAgICBbXG4gICAgICAnQmVybXVkYScsXG4gICAgICAnYm0nLFxuICAgICAgJzE0NDEnXG4gICAgXSxcbiAgICBbXG4gICAgICAnQmh1dGFuICjgvaDgvZbgvrLgvbTgvYIpJyxcbiAgICAgICdidCcsXG4gICAgICAnOTc1J1xuICAgIF0sXG4gICAgW1xuICAgICAgJ0JvbGl2aWEnLFxuICAgICAgJ2JvJyxcbiAgICAgICc1OTEnXG4gICAgXSxcbiAgICBbXG4gICAgICAnQm9zbmlhIGFuZCBIZXJ6ZWdvdmluYSAo0JHQvtGB0L3QsCDQuCDQpdC10YDRhtC10LPQvtCy0LjQvdCwKScsXG4gICAgICAnYmEnLFxuICAgICAgJzM4NydcbiAgICBdLFxuICAgIFtcbiAgICAgICdCb3Rzd2FuYScsXG4gICAgICAnYncnLFxuICAgICAgJzI2NydcbiAgICBdLFxuICAgIFtcbiAgICAgICdCcmF6aWwgKEJyYXNpbCknLFxuICAgICAgJ2JyJyxcbiAgICAgICc1NSdcbiAgICBdLFxuICAgIFtcbiAgICAgICdCcml0aXNoIEluZGlhbiBPY2VhbiBUZXJyaXRvcnknLFxuICAgICAgJ2lvJyxcbiAgICAgICcyNDYnXG4gICAgXSxcbiAgICBbXG4gICAgICAnQnJpdGlzaCBWaXJnaW4gSXNsYW5kcycsXG4gICAgICAndmcnLFxuICAgICAgJzEyODQnXG4gICAgXSxcbiAgICBbXG4gICAgICAnQnJ1bmVpJyxcbiAgICAgICdibicsXG4gICAgICAnNjczJ1xuICAgIF0sXG4gICAgW1xuICAgICAgJ0J1bGdhcmlhICjQkdGK0LvQs9Cw0YDQuNGPKScsXG4gICAgICAnYmcnLFxuICAgICAgJzM1OSdcbiAgICBdLFxuICAgIFtcbiAgICAgICdCdXJraW5hIEZhc28nLFxuICAgICAgJ2JmJyxcbiAgICAgICcyMjYnXG4gICAgXSxcbiAgICBbXG4gICAgICAnQnVydW5kaSAoVWJ1cnVuZGkpJyxcbiAgICAgICdiaScsXG4gICAgICAnMjU3J1xuICAgIF0sXG4gICAgW1xuICAgICAgJ0NhbWJvZGlhICjhnoDhnpjhn5LhnpbhnrvhnofhnrYpJyxcbiAgICAgICdraCcsXG4gICAgICAnODU1J1xuICAgIF0sXG4gICAgW1xuICAgICAgJ0NhbWVyb29uIChDYW1lcm91biknLFxuICAgICAgJ2NtJyxcbiAgICAgICcyMzcnXG4gICAgXSxcbiAgICBbXG4gICAgICAnQ2FuYWRhJyxcbiAgICAgICdjYScsXG4gICAgICAnMScsXG4gICAgICAnKy4gKC4uLikgLi4uLS4uLi4nLFxuICAgICAgMSxcbiAgICAgIFsnMjA0JywgJzIzNicsICcyNDknLCAnMjUwJywgJzI4OScsICczMDYnLCAnMzQzJywgJzM2NScsICczODcnLCAnNDAzJywgJzQxNicsICc0MTgnLCAnNDMxJywgJzQzNycsICc0MzgnLCAnNDUwJywgJzUwNicsICc1MTQnLCAnNTE5JywgJzU0OCcsICc1NzknLCAnNTgxJywgJzU4NycsICc2MDQnLCAnNjEzJywgJzYzOScsICc2NDcnLCAnNjcyJywgJzcwNScsICc3MDknLCAnNzQyJywgJzc3OCcsICc3ODAnLCAnNzgyJywgJzgwNycsICc4MTknLCAnODI1JywgJzg2NycsICc4NzMnLCAnOTAyJywgJzkwNSddXG4gICAgXSxcbiAgICBbXG4gICAgICAnQ2FwZSBWZXJkZSAoS2FidSBWZXJkaSknLFxuICAgICAgJ2N2JyxcbiAgICAgICcyMzgnXG4gICAgXSxcbiAgICBbXG4gICAgICAnQ2FyaWJiZWFuIE5ldGhlcmxhbmRzJyxcbiAgICAgICdicScsXG4gICAgICAnNTk5JyxcbiAgICAgICcnLFxuICAgICAgMVxuICAgIF0sXG4gICAgW1xuICAgICAgJ0NheW1hbiBJc2xhbmRzJyxcbiAgICAgICdreScsXG4gICAgICAnMTM0NSdcbiAgICBdLFxuICAgIFtcbiAgICAgICdDZW50cmFsIEFmcmljYW4gUmVwdWJsaWMgKFLDqXB1YmxpcXVlIGNlbnRyYWZyaWNhaW5lKScsXG4gICAgICAnY2YnLFxuICAgICAgJzIzNidcbiAgICBdLFxuICAgIFtcbiAgICAgICdDaGFkIChUY2hhZCknLFxuICAgICAgJ3RkJyxcbiAgICAgICcyMzUnXG4gICAgXSxcbiAgICBbXG4gICAgICAnQ2hpbGUnLFxuICAgICAgJ2NsJyxcbiAgICAgICc1NidcbiAgICBdLFxuICAgIFtcbiAgICAgICdDaGluYSAo5Lit5Zu9KScsXG4gICAgICAnY24nLFxuICAgICAgJzg2JyxcbiAgICAgICcrLi4gLi4tLi4uLi4uLi4nXG4gICAgXSxcbiAgICBbXG4gICAgICAnQ29sb21iaWEnLFxuICAgICAgJ2NvJyxcbiAgICAgICc1NydcbiAgICBdLFxuICAgIFtcbiAgICAgICdDb21vcm9zICjigKvYrNiy2LEg2KfZhNmC2YXYseKArOKAjiknLFxuICAgICAgJ2ttJyxcbiAgICAgICcyNjknXG4gICAgXSxcbiAgICBbXG4gICAgICAnQ29uZ28gKERSQykgKEphbWh1cmkgeWEgS2lkZW1va3Jhc2lhIHlhIEtvbmdvKScsXG4gICAgICAnY2QnLFxuICAgICAgJzI0MydcbiAgICBdLFxuICAgIFtcbiAgICAgICdDb25nbyAoUmVwdWJsaWMpIChDb25nby1CcmF6emF2aWxsZSknLFxuICAgICAgJ2NnJyxcbiAgICAgICcyNDInXG4gICAgXSxcbiAgICBbXG4gICAgICAnQ29vayBJc2xhbmRzJyxcbiAgICAgICdjaycsXG4gICAgICAnNjgyJ1xuICAgIF0sXG4gICAgW1xuICAgICAgJ0Nvc3RhIFJpY2EnLFxuICAgICAgJ2NyJyxcbiAgICAgICc1MDYnLFxuICAgICAgJysuLi4gLi4uLi0uLi4uJ1xuICAgIF0sXG4gICAgW1xuICAgICAgJ0PDtHRlIGTigJlJdm9pcmUnLFxuICAgICAgJ2NpJyxcbiAgICAgICcyMjUnXG4gICAgXSxcbiAgICBbXG4gICAgICAnQ3JvYXRpYSAoSHJ2YXRza2EpJyxcbiAgICAgICdocicsXG4gICAgICAnMzg1J1xuICAgIF0sXG4gICAgW1xuICAgICAgJ0N1YmEnLFxuICAgICAgJ2N1JyxcbiAgICAgICc1MydcbiAgICBdLFxuICAgIFtcbiAgICAgICdDdXJhw6dhbycsXG4gICAgICAnY3cnLFxuICAgICAgJzU5OScsXG4gICAgICAnJyxcbiAgICAgIDBcbiAgICBdLFxuICAgIFtcbiAgICAgICdDeXBydXMgKM6az43PgM+Bzr/PgiknLFxuICAgICAgJ2N5JyxcbiAgICAgICczNTcnXG4gICAgXSxcbiAgICBbXG4gICAgICAnQ3plY2ggUmVwdWJsaWMgKMSMZXNrw6EgcmVwdWJsaWthKScsXG4gICAgICAnY3onLFxuICAgICAgJzQyMCdcbiAgICBdLFxuICAgIFtcbiAgICAgICdEZW5tYXJrIChEYW5tYXJrKScsXG4gICAgICAnZGsnLFxuICAgICAgJzQ1JyxcbiAgICAgICcrLi4gLi4gLi4gLi4gLi4nXG4gICAgXSxcbiAgICBbXG4gICAgICAnRGppYm91dGknLFxuICAgICAgJ2RqJyxcbiAgICAgICcyNTMnXG4gICAgXSxcbiAgICBbXG4gICAgICAnRG9taW5pY2EnLFxuICAgICAgJ2RtJyxcbiAgICAgICcxNzY3J1xuICAgIF0sXG4gICAgW1xuICAgICAgJ0RvbWluaWNhbiBSZXB1YmxpYyAoUmVww7pibGljYSBEb21pbmljYW5hKScsXG4gICAgICAnZG8nLFxuICAgICAgJzEnLFxuICAgICAgJycsXG4gICAgICAyLFxuICAgICAgWyc4MDknLCAnODI5JywgJzg0OSddXG4gICAgXSxcbiAgICBbXG4gICAgICAnRWN1YWRvcicsXG4gICAgICAnZWMnLFxuICAgICAgJzU5MydcbiAgICBdLFxuICAgIFtcbiAgICAgICdFZ3lwdCAo4oCr2YXYtdix4oCs4oCOKScsXG4gICAgICAnZWcnLFxuICAgICAgJzIwJ1xuICAgIF0sXG4gICAgW1xuICAgICAgJ0VsIFNhbHZhZG9yJyxcbiAgICAgICdzdicsXG4gICAgICAnNTAzJyxcbiAgICAgICcrLi4uIC4uLi4tLi4uLidcbiAgICBdLFxuICAgIFtcbiAgICAgICdFcXVhdG9yaWFsIEd1aW5lYSAoR3VpbmVhIEVjdWF0b3JpYWwpJyxcbiAgICAgICdncScsXG4gICAgICAnMjQwJ1xuICAgIF0sXG4gICAgW1xuICAgICAgJ0VyaXRyZWEnLFxuICAgICAgJ2VyJyxcbiAgICAgICcyOTEnXG4gICAgXSxcbiAgICBbXG4gICAgICAnRXN0b25pYSAoRWVzdGkpJyxcbiAgICAgICdlZScsXG4gICAgICAnMzcyJ1xuICAgIF0sXG4gICAgW1xuICAgICAgJ0V0aGlvcGlhJyxcbiAgICAgICdldCcsXG4gICAgICAnMjUxJ1xuICAgIF0sXG4gICAgW1xuICAgICAgJ0ZhbGtsYW5kIElzbGFuZHMgKElzbGFzIE1hbHZpbmFzKScsXG4gICAgICAnZmsnLFxuICAgICAgJzUwMCdcbiAgICBdLFxuICAgIFtcbiAgICAgICdGYXJvZSBJc2xhbmRzIChGw7hyb3lhciknLFxuICAgICAgJ2ZvJyxcbiAgICAgICcyOTgnXG4gICAgXSxcbiAgICBbXG4gICAgICAnRmlqaScsXG4gICAgICAnZmonLFxuICAgICAgJzY3OSdcbiAgICBdLFxuICAgIFtcbiAgICAgICdGaW5sYW5kIChTdW9taSknLFxuICAgICAgJ2ZpJyxcbiAgICAgICczNTgnLFxuICAgICAgJysuLi4gLi4gLi4uIC4uIC4uJ1xuICAgIF0sXG4gICAgW1xuICAgICAgJ0ZyYW5jZScsXG4gICAgICAnZnInLFxuICAgICAgJzMzJyxcbiAgICAgICcrLi4gLiAuLiAuLiAuLiAuLidcbiAgICBdLFxuICAgIFtcbiAgICAgICdGcmVuY2ggR3VpYW5hIChHdXlhbmUgZnJhbsOnYWlzZSknLFxuICAgICAgJ2dmJyxcbiAgICAgICc1OTQnXG4gICAgXSxcbiAgICBbXG4gICAgICAnRnJlbmNoIFBvbHluZXNpYSAoUG9seW7DqXNpZSBmcmFuw6dhaXNlKScsXG4gICAgICAncGYnLFxuICAgICAgJzY4OSdcbiAgICBdLFxuICAgIFtcbiAgICAgICdHYWJvbicsXG4gICAgICAnZ2EnLFxuICAgICAgJzI0MSdcbiAgICBdLFxuICAgIFtcbiAgICAgICdHYW1iaWEnLFxuICAgICAgJ2dtJyxcbiAgICAgICcyMjAnXG4gICAgXSxcbiAgICBbXG4gICAgICAnR2VvcmdpYSAo4YOh4YOQ4YOl4YOQ4YOg4YOX4YOV4YOU4YOa4YOdKScsXG4gICAgICAnZ2UnLFxuICAgICAgJzk5NSdcbiAgICBdLFxuICAgIFtcbiAgICAgICdHZXJtYW55IChEZXV0c2NobGFuZCknLFxuICAgICAgJ2RlJyxcbiAgICAgICc0OScsXG4gICAgICAnKy4uIC4uLiAuLi4uLi4uJ1xuICAgIF0sXG4gICAgW1xuICAgICAgJ0doYW5hIChHYWFuYSknLFxuICAgICAgJ2doJyxcbiAgICAgICcyMzMnXG4gICAgXSxcbiAgICBbXG4gICAgICAnR2licmFsdGFyJyxcbiAgICAgICdnaScsXG4gICAgICAnMzUwJ1xuICAgIF0sXG4gICAgW1xuICAgICAgJ0dyZWVjZSAozpXOu867zqzOtM6xKScsXG4gICAgICAnZ3InLFxuICAgICAgJzMwJ1xuICAgIF0sXG4gICAgW1xuICAgICAgJ0dyZWVubGFuZCAoS2FsYWFsbGl0IE51bmFhdCknLFxuICAgICAgJ2dsJyxcbiAgICAgICcyOTknXG4gICAgXSxcbiAgICBbXG4gICAgICAnR3JlbmFkYScsXG4gICAgICAnZ2QnLFxuICAgICAgJzE0NzMnXG4gICAgXSxcbiAgICBbXG4gICAgICAnR3VhZGVsb3VwZScsXG4gICAgICAnZ3AnLFxuICAgICAgJzU5MCcsXG4gICAgICAnJyxcbiAgICAgIDBcbiAgICBdLFxuICAgIFtcbiAgICAgICdHdWFtJyxcbiAgICAgICdndScsXG4gICAgICAnMTY3MSdcbiAgICBdLFxuICAgIFtcbiAgICAgICdHdWF0ZW1hbGEnLFxuICAgICAgJ2d0JyxcbiAgICAgICc1MDInLFxuICAgICAgJysuLi4gLi4uLi0uLi4uJ1xuICAgIF0sXG4gICAgW1xuICAgICAgJ0d1aW5lYSAoR3VpbsOpZSknLFxuICAgICAgJ2duJyxcbiAgICAgICcyMjQnXG4gICAgXSxcbiAgICBbXG4gICAgICAnR3VpbmVhLUJpc3NhdSAoR3VpbsOpIEJpc3NhdSknLFxuICAgICAgJ2d3JyxcbiAgICAgICcyNDUnXG4gICAgXSxcbiAgICBbXG4gICAgICAnR3V5YW5hJyxcbiAgICAgICdneScsXG4gICAgICAnNTkyJ1xuICAgIF0sXG4gICAgW1xuICAgICAgJ0hhaXRpJyxcbiAgICAgICdodCcsXG4gICAgICAnNTA5JyxcbiAgICAgICcrLi4uIC4uLi4tLi4uLidcbiAgICBdLFxuICAgIFtcbiAgICAgICdIb25kdXJhcycsXG4gICAgICAnaG4nLFxuICAgICAgJzUwNCdcbiAgICBdLFxuICAgIFtcbiAgICAgICdIb25nIEtvbmcgKOmmmea4ryknLFxuICAgICAgJ2hrJyxcbiAgICAgICc4NTInLFxuICAgICAgJysuLi4gLi4uLiAuLi4uJ1xuICAgIF0sXG4gICAgW1xuICAgICAgJ0h1bmdhcnkgKE1hZ3lhcm9yc3rDoWcpJyxcbiAgICAgICdodScsXG4gICAgICAnMzYnXG4gICAgXSxcbiAgICBbXG4gICAgICAnSWNlbGFuZCAow41zbGFuZCknLFxuICAgICAgJ2lzJyxcbiAgICAgICczNTQnLFxuICAgICAgJysuLi4gLi4uIC4uLi4nXG4gICAgXSxcbiAgICBbXG4gICAgICAnSW5kaWEgKOCkreCkvuCksOCkpCknLFxuICAgICAgJ2luJyxcbiAgICAgICc5MScsXG4gICAgICAnKy4uIC4uLi4uLS4uLi4uJ1xuICAgIF0sXG4gICAgW1xuICAgICAgJ0luZG9uZXNpYScsXG4gICAgICAnaWQnLFxuICAgICAgJzYyJ1xuICAgIF0sXG4gICAgW1xuICAgICAgJ0lyYW4gKOKAq9in24zYsdin2YbigKzigI4pJyxcbiAgICAgICdpcicsXG4gICAgICAnOTgnXG4gICAgXSxcbiAgICBbXG4gICAgICAnSXJhcSAo4oCr2KfZhNi52LHYp9mC4oCs4oCOKScsXG4gICAgICAnaXEnLFxuICAgICAgJzk2NCdcbiAgICBdLFxuICAgIFtcbiAgICAgICdJcmVsYW5kJyxcbiAgICAgICdpZScsXG4gICAgICAnMzUzJyxcbiAgICAgICcrLi4uIC4uIC4uLi4uLi4nXG4gICAgXSxcbiAgICBbXG4gICAgICAnSXNyYWVsICjigKvXmdep16jXkNec4oCs4oCOKScsXG4gICAgICAnaWwnLFxuICAgICAgJzk3MidcbiAgICBdLFxuICAgIFtcbiAgICAgICdJdGFseSAoSXRhbGlhKScsXG4gICAgICAnaXQnLFxuICAgICAgJzM5JyxcbiAgICAgICcrLi4gLi4uIC4uLi4uLicsXG4gICAgICAwXG4gICAgXSxcbiAgICBbXG4gICAgICAnSmFtYWljYScsXG4gICAgICAnam0nLFxuICAgICAgJzE4NzYnXG4gICAgXSxcbiAgICBbXG4gICAgICAnSmFwYW4gKOaXpeacrCknLFxuICAgICAgJ2pwJyxcbiAgICAgICc4MScsXG4gICAgICAnKy4uIC4uLiAuLiAuLi4uJ1xuICAgIF0sXG4gICAgW1xuICAgICAgJ0pvcmRhbiAo4oCr2KfZhNij2LHYr9mG4oCs4oCOKScsXG4gICAgICAnam8nLFxuICAgICAgJzk2MidcbiAgICBdLFxuICAgIFtcbiAgICAgICdLYXpha2hzdGFuICjQmtCw0LfQsNGF0YHRgtCw0L0pJyxcbiAgICAgICdreicsXG4gICAgICAnNycsXG4gICAgICAnKy4gLi4uIC4uLi0uLi0uLicsXG4gICAgICAxXG4gICAgXSxcbiAgICBbXG4gICAgICAnS2VueWEnLFxuICAgICAgJ2tlJyxcbiAgICAgICcyNTQnXG4gICAgXSxcbiAgICBbXG4gICAgICAnS2lyaWJhdGknLFxuICAgICAgJ2tpJyxcbiAgICAgICc2ODYnXG4gICAgXSxcbiAgICBbXG4gICAgICAnS3V3YWl0ICjigKvYp9mE2YPZiNmK2KrigKzigI4pJyxcbiAgICAgICdrdycsXG4gICAgICAnOTY1J1xuICAgIF0sXG4gICAgW1xuICAgICAgJ0t5cmd5enN0YW4gKNCa0YvRgNCz0YvQt9GB0YLQsNC9KScsXG4gICAgICAna2cnLFxuICAgICAgJzk5NidcbiAgICBdLFxuICAgIFtcbiAgICAgICdMYW9zICjguqXgurLguqcpJyxcbiAgICAgICdsYScsXG4gICAgICAnODU2J1xuICAgIF0sXG4gICAgW1xuICAgICAgJ0xhdHZpYSAoTGF0dmlqYSknLFxuICAgICAgJ2x2JyxcbiAgICAgICczNzEnXG4gICAgXSxcbiAgICBbXG4gICAgICAnTGViYW5vbiAo4oCr2YTYqNmG2KfZhuKArOKAjiknLFxuICAgICAgJ2xiJyxcbiAgICAgICc5NjEnXG4gICAgXSxcbiAgICBbXG4gICAgICAnTGVzb3RobycsXG4gICAgICAnbHMnLFxuICAgICAgJzI2NidcbiAgICBdLFxuICAgIFtcbiAgICAgICdMaWJlcmlhJyxcbiAgICAgICdscicsXG4gICAgICAnMjMxJ1xuICAgIF0sXG4gICAgW1xuICAgICAgJ0xpYnlhICjigKvZhNmK2KjZitin4oCs4oCOKScsXG4gICAgICAnbHknLFxuICAgICAgJzIxOCdcbiAgICBdLFxuICAgIFtcbiAgICAgICdMaWVjaHRlbnN0ZWluJyxcbiAgICAgICdsaScsXG4gICAgICAnNDIzJ1xuICAgIF0sXG4gICAgW1xuICAgICAgJ0xpdGh1YW5pYSAoTGlldHV2YSknLFxuICAgICAgJ2x0JyxcbiAgICAgICczNzAnXG4gICAgXSxcbiAgICBbXG4gICAgICAnTHV4ZW1ib3VyZycsXG4gICAgICAnbHUnLFxuICAgICAgJzM1MidcbiAgICBdLFxuICAgIFtcbiAgICAgICdNYWNhdSAo5r6z6ZaAKScsXG4gICAgICAnbW8nLFxuICAgICAgJzg1MydcbiAgICBdLFxuICAgIFtcbiAgICAgICdNYWNlZG9uaWEgKEZZUk9NKSAo0JzQsNC60LXQtNC+0L3QuNGY0LApJyxcbiAgICAgICdtaycsXG4gICAgICAnMzg5J1xuICAgIF0sXG4gICAgW1xuICAgICAgJ01hZGFnYXNjYXIgKE1hZGFnYXNpa2FyYSknLFxuICAgICAgJ21nJyxcbiAgICAgICcyNjEnXG4gICAgXSxcbiAgICBbXG4gICAgICAnTWFsYXdpJyxcbiAgICAgICdtdycsXG4gICAgICAnMjY1J1xuICAgIF0sXG4gICAgW1xuICAgICAgJ01hbGF5c2lhJyxcbiAgICAgICdteScsXG4gICAgICAnNjAnLFxuICAgICAgJysuLiAuLi0uLi4uLS4uLi4nXG4gICAgXSxcbiAgICBbXG4gICAgICAnTWFsZGl2ZXMnLFxuICAgICAgJ212JyxcbiAgICAgICc5NjAnXG4gICAgXSxcbiAgICBbXG4gICAgICAnTWFsaScsXG4gICAgICAnbWwnLFxuICAgICAgJzIyMydcbiAgICBdLFxuICAgIFtcbiAgICAgICdNYWx0YScsXG4gICAgICAnbXQnLFxuICAgICAgJzM1NidcbiAgICBdLFxuICAgIFtcbiAgICAgICdNYXJzaGFsbCBJc2xhbmRzJyxcbiAgICAgICdtaCcsXG4gICAgICAnNjkyJ1xuICAgIF0sXG4gICAgW1xuICAgICAgJ01hcnRpbmlxdWUnLFxuICAgICAgJ21xJyxcbiAgICAgICc1OTYnXG4gICAgXSxcbiAgICBbXG4gICAgICAnTWF1cml0YW5pYSAo4oCr2YXZiNix2YrYqtin2YbZitin4oCs4oCOKScsXG4gICAgICAnbXInLFxuICAgICAgJzIyMidcbiAgICBdLFxuICAgIFtcbiAgICAgICdNYXVyaXRpdXMgKE1vcmlzKScsXG4gICAgICAnbXUnLFxuICAgICAgJzIzMCdcbiAgICBdLFxuICAgIFtcbiAgICAgICdNZXhpY28gKE3DqXhpY28pJyxcbiAgICAgICdteCcsXG4gICAgICAnNTInXG4gICAgXSxcbiAgICBbXG4gICAgICAnTWljcm9uZXNpYScsXG4gICAgICAnZm0nLFxuICAgICAgJzY5MSdcbiAgICBdLFxuICAgIFtcbiAgICAgICdNb2xkb3ZhIChSZXB1YmxpY2EgTW9sZG92YSknLFxuICAgICAgJ21kJyxcbiAgICAgICczNzMnXG4gICAgXSxcbiAgICBbXG4gICAgICAnTW9uYWNvJyxcbiAgICAgICdtYycsXG4gICAgICAnMzc3J1xuICAgIF0sXG4gICAgW1xuICAgICAgJ01vbmdvbGlhICjQnNC+0L3Qs9C+0LspJyxcbiAgICAgICdtbicsXG4gICAgICAnOTc2J1xuICAgIF0sXG4gICAgW1xuICAgICAgJ01vbnRlbmVncm8gKENybmEgR29yYSknLFxuICAgICAgJ21lJyxcbiAgICAgICczODInXG4gICAgXSxcbiAgICBbXG4gICAgICAnTW9udHNlcnJhdCcsXG4gICAgICAnbXMnLFxuICAgICAgJzE2NjQnXG4gICAgXSxcbiAgICBbXG4gICAgICAnTW9yb2NjbyAo4oCr2KfZhNmF2LrYsdio4oCs4oCOKScsXG4gICAgICAnbWEnLFxuICAgICAgJzIxMidcbiAgICBdLFxuICAgIFtcbiAgICAgICdNb3phbWJpcXVlIChNb8OnYW1iaXF1ZSknLFxuICAgICAgJ216JyxcbiAgICAgICcyNTgnXG4gICAgXSxcbiAgICBbXG4gICAgICAnTXlhbm1hciAoQnVybWEpICjhgJnhgLzhgJThgLrhgJnhgKwpJyxcbiAgICAgICdtbScsXG4gICAgICAnOTUnXG4gICAgXSxcbiAgICBbXG4gICAgICAnTmFtaWJpYSAoTmFtaWJpw6spJyxcbiAgICAgICduYScsXG4gICAgICAnMjY0J1xuICAgIF0sXG4gICAgW1xuICAgICAgJ05hdXJ1JyxcbiAgICAgICducicsXG4gICAgICAnNjc0J1xuICAgIF0sXG4gICAgW1xuICAgICAgJ05lcGFsICjgpKjgpYfgpKrgpL7gpLIpJyxcbiAgICAgICducCcsXG4gICAgICAnOTc3J1xuICAgIF0sXG4gICAgW1xuICAgICAgJ05ldGhlcmxhbmRzIChOZWRlcmxhbmQpJyxcbiAgICAgICdubCcsXG4gICAgICAnMzEnLFxuICAgICAgJysuLiAuLiAuLi4uLi4uLidcbiAgICBdLFxuICAgIFtcbiAgICAgICdOZXcgQ2FsZWRvbmlhIChOb3V2ZWxsZS1DYWzDqWRvbmllKScsXG4gICAgICAnbmMnLFxuICAgICAgJzY4NydcbiAgICBdLFxuICAgIFtcbiAgICAgICdOZXcgWmVhbGFuZCcsXG4gICAgICAnbnonLFxuICAgICAgJzY0JyxcbiAgICAgICcrLi4gLi4uLS4uLi0uLi4uJ1xuICAgIF0sXG4gICAgW1xuICAgICAgJ05pY2FyYWd1YScsXG4gICAgICAnbmknLFxuICAgICAgJzUwNSdcbiAgICBdLFxuICAgIFtcbiAgICAgICdOaWdlciAoTmlqYXIpJyxcbiAgICAgICduZScsXG4gICAgICAnMjI3J1xuICAgIF0sXG4gICAgW1xuICAgICAgJ05pZ2VyaWEnLFxuICAgICAgJ25nJyxcbiAgICAgICcyMzQnXG4gICAgXSxcbiAgICBbXG4gICAgICAnTml1ZScsXG4gICAgICAnbnUnLFxuICAgICAgJzY4MydcbiAgICBdLFxuICAgIFtcbiAgICAgICdOb3Jmb2xrIElzbGFuZCcsXG4gICAgICAnbmYnLFxuICAgICAgJzY3MidcbiAgICBdLFxuICAgIFtcbiAgICAgICdOb3J0aCBLb3JlYSAo7KGw7ISgIOuvvOyjvOyjvOydmCDsnbjrr7wg6rO17ZmU6rWtKScsXG4gICAgICAna3AnLFxuICAgICAgJzg1MCdcbiAgICBdLFxuICAgIFtcbiAgICAgICdOb3J0aGVybiBNYXJpYW5hIElzbGFuZHMnLFxuICAgICAgJ21wJyxcbiAgICAgICcxNjcwJ1xuICAgIF0sXG4gICAgW1xuICAgICAgJ05vcndheSAoTm9yZ2UpJyxcbiAgICAgICdubycsXG4gICAgICAnNDcnLFxuICAgICAgJysuLiAuLi4gLi4gLi4uJ1xuICAgIF0sXG4gICAgW1xuICAgICAgJ09tYW4gKOKAq9i52Y/Zhdin2YbigKzigI4pJyxcbiAgICAgICdvbScsXG4gICAgICAnOTY4J1xuICAgIF0sXG4gICAgW1xuICAgICAgJ1Bha2lzdGFuICjigKvZvtin2qnYs9iq2KfZhuKArOKAjiknLFxuICAgICAgJ3BrJyxcbiAgICAgICc5MicsXG4gICAgICAnKy4uIC4uLi0uLi4uLi4uJ1xuICAgIF0sXG4gICAgW1xuICAgICAgJ1BhbGF1JyxcbiAgICAgICdwdycsXG4gICAgICAnNjgwJ1xuICAgIF0sXG4gICAgW1xuICAgICAgJ1BhbGVzdGluZSAo4oCr2YHZhNiz2LfZitmG4oCs4oCOKScsXG4gICAgICAncHMnLFxuICAgICAgJzk3MCdcbiAgICBdLFxuICAgIFtcbiAgICAgICdQYW5hbWEgKFBhbmFtw6EpJyxcbiAgICAgICdwYScsXG4gICAgICAnNTA3J1xuICAgIF0sXG4gICAgW1xuICAgICAgJ1BhcHVhIE5ldyBHdWluZWEnLFxuICAgICAgJ3BnJyxcbiAgICAgICc2NzUnXG4gICAgXSxcbiAgICBbXG4gICAgICAnUGFyYWd1YXknLFxuICAgICAgJ3B5JyxcbiAgICAgICc1OTUnXG4gICAgXSxcbiAgICBbXG4gICAgICAnUGVydSAoUGVyw7opJyxcbiAgICAgICdwZScsXG4gICAgICAnNTEnXG4gICAgXSxcbiAgICBbXG4gICAgICAnUGhpbGlwcGluZXMnLFxuICAgICAgJ3BoJyxcbiAgICAgICc2MycsXG4gICAgICAnKy4uIC4uLiAuLi4uJ1xuICAgIF0sXG4gICAgW1xuICAgICAgJ1BvbGFuZCAoUG9sc2thKScsXG4gICAgICAncGwnLFxuICAgICAgJzQ4JyxcbiAgICAgICcrLi4gLi4uLS4uLi0uLi4nXG4gICAgXSxcbiAgICBbXG4gICAgICAnUG9ydHVnYWwnLFxuICAgICAgJ3B0JyxcbiAgICAgICczNTEnXG4gICAgXSxcbiAgICBbXG4gICAgICAnUHVlcnRvIFJpY28nLFxuICAgICAgJ3ByJyxcbiAgICAgICcxJyxcbiAgICAgICcnLFxuICAgICAgMyxcbiAgICAgIFsnNzg3JywgJzkzOSddXG4gICAgXSxcbiAgICBbXG4gICAgICAnUWF0YXIgKOKAq9mC2LfYseKArOKAjiknLFxuICAgICAgJ3FhJyxcbiAgICAgICc5NzQnXG4gICAgXSxcbiAgICBbXG4gICAgICAnUsOpdW5pb24gKExhIFLDqXVuaW9uKScsXG4gICAgICAncmUnLFxuICAgICAgJzI2MidcbiAgICBdLFxuICAgIFtcbiAgICAgICdSb21hbmlhIChSb23Dom5pYSknLFxuICAgICAgJ3JvJyxcbiAgICAgICc0MCdcbiAgICBdLFxuICAgIFtcbiAgICAgICdSdXNzaWEgKNCg0L7RgdGB0LjRjyknLFxuICAgICAgJ3J1JyxcbiAgICAgICc3JyxcbiAgICAgICcrLiAuLi4gLi4uLS4uLS4uJyxcbiAgICAgIDBcbiAgICBdLFxuICAgIFtcbiAgICAgICdSd2FuZGEnLFxuICAgICAgJ3J3JyxcbiAgICAgICcyNTAnXG4gICAgXSxcbiAgICBbXG4gICAgICAnU2FpbnQgQmFydGjDqWxlbXkgKFNhaW50LUJhcnRow6lsZW15KScsXG4gICAgICAnYmwnLFxuICAgICAgJzU5MCcsXG4gICAgICAnJyxcbiAgICAgIDFcbiAgICBdLFxuICAgIFtcbiAgICAgICdTYWludCBIZWxlbmEnLFxuICAgICAgJ3NoJyxcbiAgICAgICcyOTAnXG4gICAgXSxcbiAgICBbXG4gICAgICAnU2FpbnQgS2l0dHMgYW5kIE5ldmlzJyxcbiAgICAgICdrbicsXG4gICAgICAnMTg2OSdcbiAgICBdLFxuICAgIFtcbiAgICAgICdTYWludCBMdWNpYScsXG4gICAgICAnbGMnLFxuICAgICAgJzE3NTgnXG4gICAgXSxcbiAgICBbXG4gICAgICAnU2FpbnQgTWFydGluIChTYWludC1NYXJ0aW4gKHBhcnRpZSBmcmFuw6dhaXNlKSknLFxuICAgICAgJ21mJyxcbiAgICAgICc1OTAnLFxuICAgICAgJycsXG4gICAgICAyXG4gICAgXSxcbiAgICBbXG4gICAgICAnU2FpbnQgUGllcnJlIGFuZCBNaXF1ZWxvbiAoU2FpbnQtUGllcnJlLWV0LU1pcXVlbG9uKScsXG4gICAgICAncG0nLFxuICAgICAgJzUwOCdcbiAgICBdLFxuICAgIFtcbiAgICAgICdTYWludCBWaW5jZW50IGFuZCB0aGUgR3JlbmFkaW5lcycsXG4gICAgICAndmMnLFxuICAgICAgJzE3ODQnXG4gICAgXSxcbiAgICBbXG4gICAgICAnU2Ftb2EnLFxuICAgICAgJ3dzJyxcbiAgICAgICc2ODUnXG4gICAgXSxcbiAgICBbXG4gICAgICAnU2FuIE1hcmlubycsXG4gICAgICAnc20nLFxuICAgICAgJzM3OCdcbiAgICBdLFxuICAgIFtcbiAgICAgICdTw6NvIFRvbcOpIGFuZCBQcsOtbmNpcGUgKFPDo28gVG9tw6kgZSBQcsOtbmNpcGUpJyxcbiAgICAgICdzdCcsXG4gICAgICAnMjM5J1xuICAgIF0sXG4gICAgW1xuICAgICAgJ1NhdWRpIEFyYWJpYSAo4oCr2KfZhNmF2YXZhNmD2Kkg2KfZhNi52LHYqNmK2Kkg2KfZhNiz2LnZiNiv2YrYqeKArOKAjiknLFxuICAgICAgJ3NhJyxcbiAgICAgICc5NjYnXG4gICAgXSxcbiAgICBbXG4gICAgICAnU2VuZWdhbCAoU8OpbsOpZ2FsKScsXG4gICAgICAnc24nLFxuICAgICAgJzIyMSdcbiAgICBdLFxuICAgIFtcbiAgICAgICdTZXJiaWEgKNCh0YDQsdC40ZjQsCknLFxuICAgICAgJ3JzJyxcbiAgICAgICczODEnXG4gICAgXSxcbiAgICBbXG4gICAgICAnU2V5Y2hlbGxlcycsXG4gICAgICAnc2MnLFxuICAgICAgJzI0OCdcbiAgICBdLFxuICAgIFtcbiAgICAgICdTaWVycmEgTGVvbmUnLFxuICAgICAgJ3NsJyxcbiAgICAgICcyMzInXG4gICAgXSxcbiAgICBbXG4gICAgICAnU2luZ2Fwb3JlJyxcbiAgICAgICdzZycsXG4gICAgICAnNjUnLFxuICAgICAgJysuLiAuLi4uLS4uLi4nXG4gICAgXSxcbiAgICBbXG4gICAgICAnU2ludCBNYWFydGVuJyxcbiAgICAgICdzeCcsXG4gICAgICAnMTcyMSdcbiAgICBdLFxuICAgIFtcbiAgICAgICdTbG92YWtpYSAoU2xvdmVuc2tvKScsXG4gICAgICAnc2snLFxuICAgICAgJzQyMSdcbiAgICBdLFxuICAgIFtcbiAgICAgICdTbG92ZW5pYSAoU2xvdmVuaWphKScsXG4gICAgICAnc2knLFxuICAgICAgJzM4NidcbiAgICBdLFxuICAgIFtcbiAgICAgICdTb2xvbW9uIElzbGFuZHMnLFxuICAgICAgJ3NiJyxcbiAgICAgICc2NzcnXG4gICAgXSxcbiAgICBbXG4gICAgICAnU29tYWxpYSAoU29vbWFhbGl5YSknLFxuICAgICAgJ3NvJyxcbiAgICAgICcyNTInXG4gICAgXSxcbiAgICBbXG4gICAgICAnU291dGggQWZyaWNhJyxcbiAgICAgICd6YScsXG4gICAgICAnMjcnXG4gICAgXSxcbiAgICBbXG4gICAgICAnU291dGggS29yZWEgKOuMgO2VnOuvvOq1rSknLFxuICAgICAgJ2tyJyxcbiAgICAgICc4MidcbiAgICBdLFxuICAgIFtcbiAgICAgICdTb3V0aCBTdWRhbiAo4oCr2KzZhtmI2Kgg2KfZhNiz2YjYr9in2YbigKzigI4pJyxcbiAgICAgICdzcycsXG4gICAgICAnMjExJ1xuICAgIF0sXG4gICAgW1xuICAgICAgJ1NwYWluIChFc3Bhw7FhKScsXG4gICAgICAnZXMnLFxuICAgICAgJzM0JyxcbiAgICAgICcrLi4gLi4uIC4uLiAuLi4nXG4gICAgXSxcbiAgICBbXG4gICAgICAnU3JpIExhbmthICjgt4Hgt4rigI3gtrvgt5Mg4La94LaC4Laa4LeP4LeAKScsXG4gICAgICAnbGsnLFxuICAgICAgJzk0J1xuICAgIF0sXG4gICAgW1xuICAgICAgJ1N1ZGFuICjigKvYp9mE2LPZiNiv2KfZhuKArOKAjiknLFxuICAgICAgJ3NkJyxcbiAgICAgICcyNDknXG4gICAgXSxcbiAgICBbXG4gICAgICAnU3VyaW5hbWUnLFxuICAgICAgJ3NyJyxcbiAgICAgICc1OTcnXG4gICAgXSxcbiAgICBbXG4gICAgICAnU3dhemlsYW5kJyxcbiAgICAgICdzeicsXG4gICAgICAnMjY4J1xuICAgIF0sXG4gICAgW1xuICAgICAgJ1N3ZWRlbiAoU3ZlcmlnZSknLFxuICAgICAgJ3NlJyxcbiAgICAgICc0NicsXG4gICAgICAnKy4uIC4uIC4uLiAuLiAuLidcbiAgICBdLFxuICAgIFtcbiAgICAgICdTd2l0emVybGFuZCAoU2Nod2VpeiknLFxuICAgICAgJ2NoJyxcbiAgICAgICc0MScsXG4gICAgICAnKy4uIC4uIC4uLiAuLiAuLidcbiAgICBdLFxuICAgIFtcbiAgICAgICdTeXJpYSAo4oCr2LPZiNix2YrYp+KArOKAjiknLFxuICAgICAgJ3N5JyxcbiAgICAgICc5NjMnXG4gICAgXSxcbiAgICBbXG4gICAgICAnVGFpd2FuICjlj7DngaMpJyxcbiAgICAgICd0dycsXG4gICAgICAnODg2J1xuICAgIF0sXG4gICAgW1xuICAgICAgJ1RhamlraXN0YW4nLFxuICAgICAgJ3RqJyxcbiAgICAgICc5OTInXG4gICAgXSxcbiAgICBbXG4gICAgICAnVGFuemFuaWEnLFxuICAgICAgJ3R6JyxcbiAgICAgICcyNTUnXG4gICAgXSxcbiAgICBbXG4gICAgICAnVGhhaWxhbmQgKOC5hOC4l+C4oiknLFxuICAgICAgJ3RoJyxcbiAgICAgICc2NidcbiAgICBdLFxuICAgIFtcbiAgICAgICdUaW1vci1MZXN0ZScsXG4gICAgICAndGwnLFxuICAgICAgJzY3MCdcbiAgICBdLFxuICAgIFtcbiAgICAgICdUb2dvJyxcbiAgICAgICd0ZycsXG4gICAgICAnMjI4J1xuICAgIF0sXG4gICAgW1xuICAgICAgJ1Rva2VsYXUnLFxuICAgICAgJ3RrJyxcbiAgICAgICc2OTAnXG4gICAgXSxcbiAgICBbXG4gICAgICAnVG9uZ2EnLFxuICAgICAgJ3RvJyxcbiAgICAgICc2NzYnXG4gICAgXSxcbiAgICBbXG4gICAgICAnVHJpbmlkYWQgYW5kIFRvYmFnbycsXG4gICAgICAndHQnLFxuICAgICAgJzE4NjgnXG4gICAgXSxcbiAgICBbXG4gICAgICAnVHVuaXNpYSAo4oCr2KrZiNmG2LPigKzigI4pJyxcbiAgICAgICd0bicsXG4gICAgICAnMjE2J1xuICAgIF0sXG4gICAgW1xuICAgICAgJ1R1cmtleSAoVMO8cmtpeWUpJyxcbiAgICAgICd0cicsXG4gICAgICAnOTAnLFxuICAgICAgJysuLiAuLi4gLi4uIC4uIC4uJ1xuICAgIF0sXG4gICAgW1xuICAgICAgJ1R1cmttZW5pc3RhbicsXG4gICAgICAndG0nLFxuICAgICAgJzk5MydcbiAgICBdLFxuICAgIFtcbiAgICAgICdUdXJrcyBhbmQgQ2FpY29zIElzbGFuZHMnLFxuICAgICAgJ3RjJyxcbiAgICAgICcxNjQ5J1xuICAgIF0sXG4gICAgW1xuICAgICAgJ1R1dmFsdScsXG4gICAgICAndHYnLFxuICAgICAgJzY4OCdcbiAgICBdLFxuICAgIFtcbiAgICAgICdVLlMuIFZpcmdpbiBJc2xhbmRzJyxcbiAgICAgICd2aScsXG4gICAgICAnMTM0MCdcbiAgICBdLFxuICAgIFtcbiAgICAgICdVZ2FuZGEnLFxuICAgICAgJ3VnJyxcbiAgICAgICcyNTYnXG4gICAgXSxcbiAgICBbXG4gICAgICAnVWtyYWluZSAo0KPQutGA0LDRl9C90LApJyxcbiAgICAgICd1YScsXG4gICAgICAnMzgwJ1xuICAgIF0sXG4gICAgW1xuICAgICAgJ1VuaXRlZCBBcmFiIEVtaXJhdGVzICjigKvYp9mE2KXZhdin2LHYp9iqINin2YTYudix2KjZitipINin2YTZhdiq2K3Yr9ip4oCs4oCOKScsXG4gICAgICAnYWUnLFxuICAgICAgJzk3MSdcbiAgICBdLFxuICAgIFtcbiAgICAgICdVbml0ZWQgS2luZ2RvbScsXG4gICAgICAnZ2InLFxuICAgICAgJzQ0JyxcbiAgICAgICcrLi4gLi4uLiAuLi4uLi4nXG4gICAgXSxcbiAgICBbXG4gICAgICAnVW5pdGVkIFN0YXRlcycsXG4gICAgICAndXMnLFxuICAgICAgJzEnLFxuICAgICAgJysuICguLi4pIC4uLi0uLi4uJyxcbiAgICAgIDBcbiAgICBdLFxuICAgIFtcbiAgICAgICdVcnVndWF5JyxcbiAgICAgICd1eScsXG4gICAgICAnNTk4J1xuICAgIF0sXG4gICAgW1xuICAgICAgJ1V6YmVraXN0YW4gKE/Ku3piZWtpc3RvbiknLFxuICAgICAgJ3V6JyxcbiAgICAgICc5OTgnXG4gICAgXSxcbiAgICBbXG4gICAgICAnVmFudWF0dScsXG4gICAgICAndnUnLFxuICAgICAgJzY3OCdcbiAgICBdLFxuICAgIFtcbiAgICAgICdWYXRpY2FuIENpdHkgKENpdHTDoCBkZWwgVmF0aWNhbm8pJyxcbiAgICAgICd2YScsXG4gICAgICAnMzknLFxuICAgICAgJysuLiAuLiAuLi4uIC4uLi4nLFxuICAgICAgMVxuICAgIF0sXG4gICAgW1xuICAgICAgJ1ZlbmV6dWVsYScsXG4gICAgICAndmUnLFxuICAgICAgJzU4J1xuICAgIF0sXG4gICAgW1xuICAgICAgJ1ZpZXRuYW0gKFZp4buHdCBOYW0pJyxcbiAgICAgICd2bicsXG4gICAgICAnODQnXG4gICAgXSxcbiAgICBbXG4gICAgICAnV2FsbGlzIGFuZCBGdXR1bmEnLFxuICAgICAgJ3dmJyxcbiAgICAgICc2ODEnXG4gICAgXSxcbiAgICBbXG4gICAgICAnWWVtZW4gKOKAq9in2YTZitmF2YbigKzigI4pJyxcbiAgICAgICd5ZScsXG4gICAgICAnOTY3J1xuICAgIF0sXG4gICAgW1xuICAgICAgJ1phbWJpYScsXG4gICAgICAnem0nLFxuICAgICAgJzI2MCdcbiAgICBdLFxuICAgIFtcbiAgICAgICdaaW1iYWJ3ZScsXG4gICAgICAnencnLFxuICAgICAgJzI2MydcbiAgICBdXG4gIF07XG5cbi8vIHdlIHdpbGwgYnVpbGQgdGhpcyBpbiB0aGUgbG9vcCBiZWxvd1xudmFyIGFsbENvdW50cnlDb2RlcyA9IHt9O1xudmFyIGFkZENvdW50cnlDb2RlID0gZnVuY3Rpb24oaXNvMiwgZGlhbENvZGUsIHByaW9yaXR5KSB7XG4gIGlmICghKGRpYWxDb2RlIGluIGFsbENvdW50cnlDb2RlcykpIHtcbiAgICBhbGxDb3VudHJ5Q29kZXNbZGlhbENvZGVdID0gW107XG4gIH1cbiAgdmFyIGluZGV4ID0gcHJpb3JpdHkgfHwgMDtcbiAgYWxsQ291bnRyeUNvZGVzW2RpYWxDb2RlXVtpbmRleF0gPSBpc28yO1xufTtcblxuLy8gbG9vcCBvdmVyIGFsbCBvZiB0aGUgY291bnRyaWVzIGFib3ZlXG4vLyBhbGxDb3VudHJpZXMyID0gXy5tYXAoYWxsQ291bnRyaWVzLCBmdW5jdGlvbihjb3VudHJ5KSB7XG4vLyAgIHJldHVybiB7XG4vLyAgICAgbmFtZTogY291bnRyeVswXSxcbi8vICAgICBpc28yOiBjb3VudHJ5WzFdLFxuLy8gICAgIGRpYWxDb2RlOiBjb3VudHJ5WzJdLFxuLy8gICAgIGZvcm1hdDogY291bnRyeVszXSxcbi8vICAgICBoYXNBcmVhQ29kZXM6IGNvdW50cnkubGVuZ3RoID4gNFxuLy8gICB9XG4vLyB9KTtcblxuZm9yICh2YXIgaSA9IDA7IGkgPCBhbGxDb3VudHJpZXMubGVuZ3RoOyBpKyspIHtcbiAgICAvLyBjb3VudHJpZXNcbiAgICB2YXIgYyA9IGFsbENvdW50cmllc1tpXTtcbiAgICBhbGxDb3VudHJpZXNbaV0gPSB7XG4gICAgICBuYW1lOiBjWzBdLFxuICAgICAgaXNvMjogY1sxXSxcbiAgICAgIGRpYWxDb2RlOiBjWzJdLFxuICAgICAgcHJpb3JpdHk6IGNbNF0gfHwgMFxuICAgIH07XG4gICAgLy8gZm9ybWF0XG4gICAgaWYgKGNbM10pIHtcbiAgICAgIGFsbENvdW50cmllc1tpXS5mb3JtYXQgPSBjWzNdO1xuICAgIH1cblxuICAgIC8vIGFyZWEgY29kZXNcbiAgICBpZiAoY1s1XSkge1xuICAgICAgICBhbGxDb3VudHJpZXNbaV0uaGFzQXJlYUNvZGVzID0gdHJ1ZTtcbiAgICAgICAgZm9yICh2YXIgaiA9IDA7IGogPCBjWzVdLmxlbmd0aDsgaisrKSB7XG4gICAgICAgICAgICAvLyBmdWxsIGRpYWwgY29kZSBpcyBjb3VudHJ5IGNvZGUgKyBkaWFsIGNvZGVcbiAgICAgICAgICAgIHZhciBkaWFsQ29kZSA9IGNbMl0gKyBjWzVdW2pdO1xuICAgICAgICAgICAgYWRkQ291bnRyeUNvZGUoY1sxXSwgZGlhbENvZGUpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLy8gZGlhbCBjb2Rlc1xuICAgIGFkZENvdW50cnlDb2RlKGNbMV0sIGNbMl0sIGNbNF0pO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgICAgICAgICAgIGFsbENvdW50cmllczogYWxsQ291bnRyaWVzLFxuICAgICAgICAgICAgYWxsQ291bnRyeUNvZGVzOiBhbGxDb3VudHJ5Q29kZXNcbiAgICAgICAgfTtcbiIsIid1c2Ugc3RyaWN0JztcblxuLy8gVE9ETyAtIGZpeCB0aGUgb25seUNvbnRyaWVzIHByb3BzLiBDdXJyZW50bHkgZXhwZWN0cyB0aGF0IGFzIGFuIGFycmF5IG9mIGNvdW50cnkgb2JqZWN0LCBidXQgdXNlcnMgc2hvdWxkIGJlIGFibGUgdG8gc2VuZCBpbiBhcnJheSBvZiBjb3VudHJ5IGlzb3NcblxudmFyIHNvbWUgPSByZXF1aXJlKCdsb2Rhc2gvY29sbGVjdGlvbi9zb21lJyk7XG52YXIgZmluZFdoZXJlID0gcmVxdWlyZSgnbG9kYXNoL2NvbGxlY3Rpb24vZmluZFdoZXJlJyk7XG52YXIgcmVkdWNlID0gcmVxdWlyZSgnbG9kYXNoL2NvbGxlY3Rpb24vcmVkdWNlJyk7XG52YXIgbWFwID0gcmVxdWlyZSgnbG9kYXNoL2NvbGxlY3Rpb24vbWFwJyk7XG52YXIgZmlsdGVyID0gcmVxdWlyZSgnbG9kYXNoL2NvbGxlY3Rpb24vZmlsdGVyJyk7XG52YXIgYW55ID0gcmVxdWlyZSgnbG9kYXNoL2NvbGxlY3Rpb24vYW55Jyk7XG52YXIgZmluZEluZGV4ID0gcmVxdWlyZSgnbG9kYXNoL2FycmF5L2ZpbmRJbmRleCcpO1xudmFyIGZpcnN0ID0gcmVxdWlyZSgnbG9kYXNoL2FycmF5L2ZpcnN0Jyk7XG52YXIgcmVzdCA9IHJlcXVpcmUoJ2xvZGFzaC9hcnJheS9yZXN0Jyk7XG52YXIgZGVib3VuY2UgPSByZXF1aXJlKCdsb2Rhc2gvZnVuY3Rpb24vZGVib3VuY2UnKTtcbnZhciBtZW1vaXplID0gcmVxdWlyZSgnbG9kYXNoL2Z1bmN0aW9uL21lbW9pemUnKTtcbi8vIGltcG9ydCBsb2Rhc2ggc3RyaW5nIG1ldGhvZHNcbnZhciB0cmltID0gcmVxdWlyZSgnbG9kYXNoL3N0cmluZy90cmltJyk7XG52YXIgc3RhcnRzV2l0aCA9IHJlcXVpcmUoJ2xvZGFzaC9zdHJpbmcvc3RhcnRzV2l0aCcpO1xuXG52YXIgUmVhY3QgPSByZXF1aXJlKCdyZWFjdCcpO1xudmFyIG9uQ2xpY2tPdXRzaWRlID0gcmVxdWlyZSgncmVhY3Qtb25jbGlja291dHNpZGUnKTtcbnZhciBjbGFzc05hbWVzID0gcmVxdWlyZSgnY2xhc3NuYW1lcycpO1xudmFyIGNvdW50cnlEYXRhID0gcmVxdWlyZSgnLi9jb3VudHJ5X2RhdGEnKTtcbnZhciBhbGxDb3VudHJpZXMgPSBjb3VudHJ5RGF0YS5hbGxDb3VudHJpZXM7XG5cbnJlcXVpcmUoJy4uL2xlc3MvZGVmYXVsdC5sZXNzJyk7XG5cbmlmICh0eXBlb2YgZG9jdW1lbnQgIT09ICd1bmRlZmluZWQnKSB7XG4gIHZhciBpc01vZGVybkJyb3dzZXIgPSBCb29sZWFuKGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jykuc2V0U2VsZWN0aW9uUmFuZ2UpO1xufSBlbHNlIHtcbiAgdmFyIGlzTW9kZXJuQnJvd3NlciA9IHRydWU7XG59XG5cbnZhciBrZXlzID0ge1xuICAgICAgICBVUDogMzgsXG4gICAgICAgIERPV046IDQwLFxuICAgICAgICBSSUdIVDogMzksXG4gICAgICAgIExFRlQ6IDM3LFxuICAgICAgICBFTlRFUjogMTMsXG4gICAgICAgIEVTQzogMjcsXG4gICAgICAgIFBMVVM6IDQzLFxuICAgICAgICBBOiA2NSxcbiAgICAgICAgWjogOTAsXG4gICAgICAgIFNQQUNFOiAzMlxufTtcblxuZnVuY3Rpb24gaXNOdW1iZXJWYWxpZChpbnB1dE51bWJlcikge1xuICAgIHZhciBjb3VudHJpZXMgPSBjb3VudHJ5RGF0YS5hbGxDb3VudHJpZXM7XG4gICAgcmV0dXJuIHNvbWUoY291bnRyaWVzLCBmdW5jdGlvbihjb3VudHJ5KSB7XG4gICAgICAgIHJldHVybiBzdGFydHNXaXRoKGlucHV0TnVtYmVyLCBjb3VudHJ5LmRpYWxDb2RlKSB8fCBzdGFydHNXaXRoKGNvdW50cnkuZGlhbENvZGUsIGlucHV0TnVtYmVyKTtcbiAgICB9KTtcbn1cblxudmFyIFJlYWN0VGVsZXBob25lSW5wdXQgPSBSZWFjdC5jcmVhdGVDbGFzcyh7XG4gICAgbWl4aW5zOiBbb25DbGlja091dHNpZGVdLFxuICAgIGdldEluaXRpYWxTdGF0ZSgpIHtcbiAgICAgICAgdmFyIGlucHV0TnVtYmVyID0gdGhpcy5wcm9wcy52YWx1ZSB8fCAnJztcbiAgICAgICAgdmFyIHNlbGVjdGVkQ291bnRyeUd1ZXNzID0gdGhpcy5ndWVzc1NlbGVjdGVkQ291bnRyeShpbnB1dE51bWJlci5yZXBsYWNlKC9cXEQvZywgJycpKTtcbiAgICAgICAgdmFyIHNlbGVjdGVkQ291bnRyeUd1ZXNzSW5kZXggPSBmaW5kSW5kZXgoYWxsQ291bnRyaWVzLCBzZWxlY3RlZENvdW50cnlHdWVzcyk7XG4gICAgICAgIHZhciBmb3JtYXR0ZWROdW1iZXIgPSB0aGlzLmZvcm1hdE51bWJlcihpbnB1dE51bWJlci5yZXBsYWNlKC9cXEQvZywgJycpLCBzZWxlY3RlZENvdW50cnlHdWVzcyA/IHNlbGVjdGVkQ291bnRyeUd1ZXNzLmZvcm1hdCA6IG51bGwpO1xuICAgICAgICB2YXIgcHJlZmVycmVkQ291bnRyaWVzID0gW107XG5cbiAgICAgICAgcHJlZmVycmVkQ291bnRyaWVzID0gZmlsdGVyKGFsbENvdW50cmllcywgZnVuY3Rpb24oY291bnRyeSkge1xuICAgICAgICAgICAgcmV0dXJuIGFueSh0aGlzLnByb3BzLnByZWZlcnJlZENvdW50cmllcywgZnVuY3Rpb24ocHJlZmVycmVkQ291bnRyeSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBwcmVmZXJyZWRDb3VudHJ5ID09PSBjb3VudHJ5LmlzbzI7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSwgdGhpcyk7XG5cbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHByZWZlcnJlZENvdW50cmllczogcHJlZmVycmVkQ291bnRyaWVzLFxuICAgICAgICAgICAgc2VsZWN0ZWRDb3VudHJ5OiBzZWxlY3RlZENvdW50cnlHdWVzcyxcbiAgICAgICAgICAgIGhpZ2hsaWdodENvdW50cnlJbmRleDogc2VsZWN0ZWRDb3VudHJ5R3Vlc3NJbmRleCxcbiAgICAgICAgICAgIGZvcm1hdHRlZE51bWJlcjogZm9ybWF0dGVkTnVtYmVyLFxuICAgICAgICAgICAgc2hvd0Ryb3BEb3duOiBmYWxzZSxcbiAgICAgICAgICAgIHF1ZXJ5U3RyaW5nOiAnJyxcbiAgICAgICAgICAgIGZyZWV6ZVNlbGVjdGlvbjogZmFsc2UsXG4gICAgICAgICAgICBkZWJvdW5jZWRRdWVyeVN0aW5nU2VhcmNoZXI6IGRlYm91bmNlKHRoaXMuc2VhcmNoQ291bnRyeSwgMTAwKVxuICAgICAgICB9O1xuICAgIH0sXG4gICAgcHJvcFR5cGVzOiB7XG4gICAgICAgIHZhbHVlOiBSZWFjdC5Qcm9wVHlwZXMuc3RyaW5nLFxuICAgICAgICBhdXRvRm9ybWF0OiBSZWFjdC5Qcm9wVHlwZXMuYm9vbCxcbiAgICAgICAgZGVmYXVsdENvdW50cnk6IFJlYWN0LlByb3BUeXBlcy5zdHJpbmcsXG4gICAgICAgIG9ubHlDb3VudHJpZXM6IFJlYWN0LlByb3BUeXBlcy5hcnJheU9mKFJlYWN0LlByb3BUeXBlcy5vYmplY3QpLFxuICAgICAgICBwcmVmZXJyZWRDb3VudHJpZXM6IFJlYWN0LlByb3BUeXBlcy5hcnJheU9mKFJlYWN0LlByb3BUeXBlcy5vYmplY3QpLFxuICAgICAgICBvbkNoYW5nZTogUmVhY3QuUHJvcFR5cGVzLmZ1bmMsXG4gICAgICAgIG9uRW50ZXJLZXlQcmVzczogUmVhY3QuUHJvcFR5cGVzLmZ1bmNcbiAgICB9LFxuICAgIGdldERlZmF1bHRQcm9wcygpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHZhbHVlOiAnJyxcbiAgICAgICAgICAgIGF1dG9Gb3JtYXQ6IHRydWUsXG4gICAgICAgICAgICBvbmx5Q291bnRyaWVzOiBhbGxDb3VudHJpZXMsXG4gICAgICAgICAgICBkZWZhdWx0Q291bnRyeTogYWxsQ291bnRyaWVzWzBdLmlzbzIsXG4gICAgICAgICAgICBpc1ZhbGlkOiBpc051bWJlclZhbGlkLFxuICAgICAgICAgICAgZmxhZ3NJbWFnZVBhdGg6ICdmbGFncy5wbmcnLFxuICAgICAgICAgICAgb25FbnRlcktleVByZXNzOiBmdW5jdGlvbiAoKSB7fVxuICAgICAgICB9O1xuICAgIH0sXG4gICAgZ2V0TnVtYmVyKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5zdGF0ZS5mb3JtYXR0ZWROdW1iZXIgIT09ICcrJyA/IHRoaXMuc3RhdGUuZm9ybWF0dGVkTnVtYmVyIDogJyc7XG4gICAgfSxcbiAgICBnZXRWYWx1ZSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZ2V0TnVtYmVyKCk7XG4gICAgfSxcbiAgICBzZXRGbGFnUGF0aEZvckZsYWdDc3NDbGFzcygpIHtcbiAgICAgICAgdmFyIG5vZGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzdHlsZScpO1xuICAgICAgICBub2RlLmlubmVySFRNTCA9IGAuZmxhZ3tiYWNrZ3JvdW5kOnVybCgke3RoaXMucHJvcHMuZmxhZ3NJbWFnZVBhdGh9KWA7XG4gICAgICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQobm9kZSk7XG4gICAgfSxcbiAgICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIHRoaXMuaGFuZGxlS2V5ZG93bik7XG5cbiAgICAgICAgdGhpcy5fY3Vyc29yVG9FbmQoKTtcbiAgICAgICAgdGhpcy5zZXRGbGFnUGF0aEZvckZsYWdDc3NDbGFzcygpO1xuICAgICAgICBpZih0eXBlb2YgdGhpcy5wcm9wcy5vbkNoYW5nZSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgdGhpcy5wcm9wcy5vbkNoYW5nZSh0aGlzLnN0YXRlLmZvcm1hdHRlZE51bWJlcik7XG4gICAgICAgIH1cbiAgICB9LFxuICAgIGNvbXBvbmVudFdpbGxVbm1vdW50KCkge1xuICAgICAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdrZXlkb3duJywgdGhpcy5oYW5kbGVLZXlkb3duKTtcbiAgICB9LFxuICAgIHNjcm9sbFRvKGNvdW50cnksIG1pZGRsZSkge1xuICAgICAgICBpZighY291bnRyeSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgdmFyIGNvbnRhaW5lciA9IHRoaXMucmVmcy5mbGFnRHJvcGRvd25MaXN0LmdldERPTU5vZGUoKTtcblxuICAgICAgICBpZighY29udGFpbmVyKSB7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgdmFyIGNvbnRhaW5lckhlaWdodCA9IGNvbnRhaW5lci5vZmZzZXRIZWlnaHQ7XG4gICAgICAgIHZhciBjb250YWluZXJPZmZzZXQgPSBjb250YWluZXIuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gICAgICAgIHZhciBjb250YWluZXJUb3AgPSBjb250YWluZXJPZmZzZXQudG9wICsgZG9jdW1lbnQuYm9keS5zY3JvbGxUb3A7XG4gICAgICAgIHZhciBjb250YWluZXJCb3R0b20gPSBjb250YWluZXJUb3AgKyBjb250YWluZXJIZWlnaHQ7XG5cbiAgICAgICAgdmFyIGVsZW1lbnQgPSBjb3VudHJ5O1xuICAgICAgICB2YXIgZWxlbWVudE9mZnNldCA9IGVsZW1lbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG5cbiAgICAgICAgdmFyIGVsZW1lbnRIZWlnaHQgPSBlbGVtZW50Lm9mZnNldEhlaWdodDtcbiAgICAgICAgdmFyIGVsZW1lbnRUb3AgPSBlbGVtZW50T2Zmc2V0LnRvcCArIGRvY3VtZW50LmJvZHkuc2Nyb2xsVG9wO1xuICAgICAgICB2YXIgZWxlbWVudEJvdHRvbSA9IGVsZW1lbnRUb3AgKyBlbGVtZW50SGVpZ2h0O1xuICAgICAgICB2YXIgbmV3U2Nyb2xsVG9wID0gZWxlbWVudFRvcCAtIGNvbnRhaW5lclRvcCArIGNvbnRhaW5lci5zY3JvbGxUb3A7XG4gICAgICAgIHZhciBtaWRkbGVPZmZzZXQgPSAoY29udGFpbmVySGVpZ2h0IC8gMikgLSAoZWxlbWVudEhlaWdodCAvIDIpO1xuXG4gICAgICAgIGlmIChlbGVtZW50VG9wIDwgY29udGFpbmVyVG9wKSB7XG4gICAgICAgICAgICAvLyBzY3JvbGwgdXBcbiAgICAgICAgICAgIGlmIChtaWRkbGUpIHtcbiAgICAgICAgICAgICAgICBuZXdTY3JvbGxUb3AgLT0gbWlkZGxlT2Zmc2V0O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29udGFpbmVyLnNjcm9sbFRvcCA9IG5ld1Njcm9sbFRvcDtcbiAgICAgICAgfSBlbHNlIGlmIChlbGVtZW50Qm90dG9tID4gY29udGFpbmVyQm90dG9tKSB7XG4gICAgICAgICAgICAvLyBzY3JvbGwgZG93blxuICAgICAgICAgICAgaWYobWlkZGxlKSB7XG4gICAgICAgICAgICAgICAgbmV3U2Nyb2xsVG9wICs9IG1pZGRsZU9mZnNldDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHZhciBoZWlnaHREaWZmZXJlbmNlID0gY29udGFpbmVySGVpZ2h0IC0gZWxlbWVudEhlaWdodDtcbiAgICAgICAgICAgIGNvbnRhaW5lci5zY3JvbGxUb3AgPSBuZXdTY3JvbGxUb3AgLSBoZWlnaHREaWZmZXJlbmNlO1xuICAgICAgICB9XG4gICAgfSxcbiAgICBmb3JtYXROdW1iZXIodGV4dCwgcGF0dGVybikge1xuICAgICAgICBpZighdGV4dCB8fCB0ZXh0Lmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgICAgcmV0dXJuICcrJztcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIGZvciBhbGwgc3RyaW5ncyB3aXRoIGxlbmd0aCBsZXNzIHRoYW4gMywganVzdCByZXR1cm4gaXQgKDEsIDIgZXRjLilcbiAgICAgICAgLy8gYWxzbyByZXR1cm4gdGhlIHNhbWUgdGV4dCBpZiB0aGUgc2VsZWN0ZWQgY291bnRyeSBoYXMgbm8gZml4ZWQgZm9ybWF0XG4gICAgICAgIGlmKCh0ZXh0ICYmIHRleHQubGVuZ3RoIDwgMikgfHwgIXBhdHRlcm4gfHwgIXRoaXMucHJvcHMuYXV0b0Zvcm1hdCkge1xuICAgICAgICAgICAgcmV0dXJuIGArJHt0ZXh0fWA7XG4gICAgICAgIH1cblxuICAgICAgICB2YXIgZm9ybWF0dGVkT2JqZWN0ID0gcmVkdWNlKHBhdHRlcm4sIGZ1bmN0aW9uKGFjYywgY2hhcmFjdGVyKSB7XG4gICAgICAgICAgICBpZihhY2MucmVtYWluaW5nVGV4dC5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gYWNjO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZihjaGFyYWN0ZXIgIT09ICcuJykge1xuICAgICAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgICAgIGZvcm1hdHRlZFRleHQ6IGFjYy5mb3JtYXR0ZWRUZXh0ICsgY2hhcmFjdGVyLFxuICAgICAgICAgICAgICAgICAgICByZW1haW5pbmdUZXh0OiBhY2MucmVtYWluaW5nVGV4dFxuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgZm9ybWF0dGVkVGV4dDogYWNjLmZvcm1hdHRlZFRleHQgKyBmaXJzdChhY2MucmVtYWluaW5nVGV4dCksXG4gICAgICAgICAgICAgICAgcmVtYWluaW5nVGV4dDogcmVzdChhY2MucmVtYWluaW5nVGV4dClcbiAgICAgICAgICAgIH07XG4gICAgICAgIH0sIHtmb3JtYXR0ZWRUZXh0OiAnJywgcmVtYWluaW5nVGV4dDogdGV4dC5zcGxpdCgnJyl9KTtcbiAgICAgICAgcmV0dXJuIGZvcm1hdHRlZE9iamVjdC5mb3JtYXR0ZWRUZXh0ICsgZm9ybWF0dGVkT2JqZWN0LnJlbWFpbmluZ1RleHQuam9pbignJyk7XG4gICAgfSxcblxuICAgIC8vIHB1dCB0aGUgY3Vyc29yIHRvIHRoZSBlbmQgb2YgdGhlIGlucHV0ICh1c3VhbGx5IGFmdGVyIGEgZm9jdXMgZXZlbnQpXG4gICAgX2N1cnNvclRvRW5kKCkge1xuICAgICAgICB2YXIgaW5wdXQgPSB0aGlzLnJlZnMubnVtYmVySW5wdXQuZ2V0RE9NTm9kZSgpO1xuICAgICAgICBpbnB1dC5mb2N1cygpO1xuICAgICAgICBpZiAoaXNNb2Rlcm5Ccm93c2VyKSB7XG4gICAgICAgICAgICB2YXIgbGVuID0gaW5wdXQudmFsdWUubGVuZ3RoO1xuICAgICAgICAgICAgaW5wdXQuc2V0U2VsZWN0aW9uUmFuZ2UobGVuLCBsZW4pO1xuICAgICAgICB9XG4gICAgfSxcbiAgICAvLyBtZW1vaXplIHJlc3VsdHMgYmFzZWQgb24gdGhlIGZpcnN0IDUvNiBjaGFyYWN0ZXJzLiBUaGF0IGlzIGFsbCB0aGF0IG1hdHRlcnNcbiAgICBndWVzc1NlbGVjdGVkQ291bnRyeTogbWVtb2l6ZShmdW5jdGlvbihpbnB1dE51bWJlcikge1xuICAgICAgICB2YXIgc2Vjb25kQmVzdEd1ZXNzID0gZmluZFdoZXJlKGFsbENvdW50cmllcywge2lzbzI6IHRoaXMucHJvcHMuZGVmYXVsdENvdW50cnl9KSB8fCB0aGlzLnByb3BzLm9ubHlDb3VudHJpZXNbMF07XG4gICAgICAgIGlmKHRyaW0oaW5wdXROdW1iZXIpICE9PSAnJykge1xuICAgICAgICAgICAgdmFyIGJlc3RHdWVzcyA9IHJlZHVjZSh0aGlzLnByb3BzLm9ubHlDb3VudHJpZXMsIGZ1bmN0aW9uKHNlbGVjdGVkQ291bnRyeSwgY291bnRyeSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmKHN0YXJ0c1dpdGgoaW5wdXROdW1iZXIsIGNvdW50cnkuZGlhbENvZGUpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmKGNvdW50cnkuZGlhbENvZGUubGVuZ3RoID4gc2VsZWN0ZWRDb3VudHJ5LmRpYWxDb2RlLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGNvdW50cnk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYoY291bnRyeS5kaWFsQ29kZS5sZW5ndGggPT09IHNlbGVjdGVkQ291bnRyeS5kaWFsQ29kZS5sZW5ndGggJiYgY291bnRyeS5wcmlvcml0eSA8IHNlbGVjdGVkQ291bnRyeS5wcmlvcml0eSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGNvdW50cnk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gc2VsZWN0ZWRDb3VudHJ5O1xuICAgICAgICAgICAgICAgICAgICAgICAgfSwge2RpYWxDb2RlOiAnJywgcHJpb3JpdHk6IDEwMDAxfSwgdGhpcyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gc2Vjb25kQmVzdEd1ZXNzO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYoIWJlc3RHdWVzcy5uYW1lKSB7XG4gICAgICAgICAgICByZXR1cm4gc2Vjb25kQmVzdEd1ZXNzO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGJlc3RHdWVzcztcbiAgICB9KSxcbiAgICBnZXRFbGVtZW50KGluZGV4KSB7XG4gICAgICAgIHJldHVybiB0aGlzLnJlZnNbYGZsYWdfbm9fJHtpbmRleH1gXS5nZXRET01Ob2RlKCk7XG4gICAgfSxcbiAgICBoYW5kbGVGbGFnRHJvcGRvd25DbGljaygpIHtcbiAgICAgICAgLy8gbmVlZCB0byBwdXQgdGhlIGhpZ2hsaWdodCBvbiB0aGUgY3VycmVudCBzZWxlY3RlZCBjb3VudHJ5IGlmIHRoZSBkcm9wZG93biBpcyBnb2luZyB0byBvcGVuIHVwXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgc2hvd0Ryb3BEb3duOiAhdGhpcy5zdGF0ZS5zaG93RHJvcERvd24sXG4gICAgICAgICAgICBoaWdobGlnaHRDb3VudHJ5OiBmaW5kV2hlcmUodGhpcy5wcm9wcy5vbmx5Q291bnRyaWVzLCB0aGlzLnN0YXRlLnNlbGVjdGVkQ291bnRyeSksXG4gICAgICAgICAgICBoaWdobGlnaHRDb3VudHJ5SW5kZXg6IGZpbmRJbmRleCh0aGlzLnByb3BzLm9ubHlDb3VudHJpZXMsIHRoaXMuc3RhdGUuc2VsZWN0ZWRDb3VudHJ5KVxuICAgICAgICB9LCAoKSA9PiB7XG4gICAgICAgICAgICAvLyBvbmx5IG5lZWQgdG8gc2Nyb29sIGlmIHRoZSBkcm9wZG93biBsaXN0IGlzIGFsaXZlXG4gICAgICAgICAgICBpZih0aGlzLnN0YXRlLnNob3dEcm9wRG93bikge1xuICAgICAgICAgICAgICAgIHRoaXMuc2Nyb2xsVG8odGhpcy5nZXRFbGVtZW50KHRoaXMuc3RhdGUuaGlnaGxpZ2h0Q291bnRyeUluZGV4ICsgdGhpcy5zdGF0ZS5wcmVmZXJyZWRDb3VudHJpZXMubGVuZ3RoKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH0sXG4gICAgaGFuZGxlSW5wdXQoZXZlbnQpIHtcbiAgICAgICAgdmFyIGZvcm1hdHRlZE51bWJlciA9ICcrJywgbmV3U2VsZWN0ZWRDb3VudHJ5ID0gdGhpcy5zdGF0ZS5zZWxlY3RlZENvdW50cnksIGZyZWV6ZVNlbGVjdGlvbiA9IHRoaXMuc3RhdGUuZnJlZXplU2VsZWN0aW9uO1xuXG4gICAgICAgIC8vIGlmIHRoZSBpbnB1dCBpcyB0aGUgc2FtZSBhcyBiZWZvcmUsIG11c3QgYmUgc29tZSBzcGVjaWFsIGtleSBsaWtlIGVudGVyIGV0Yy5cbiAgICAgICAgaWYoZXZlbnQudGFyZ2V0LnZhbHVlID09PSB0aGlzLnN0YXRlLmZvcm1hdHRlZE51bWJlcikge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gaWUgaGFja1xuICAgICAgICBpZihldmVudC5wcmV2ZW50RGVmYXVsdCkge1xuICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGV2ZW50LnJldHVyblZhbHVlID0gZmFsc2U7XG4gICAgICAgIH1cblxuICAgICAgICBpZihldmVudC50YXJnZXQudmFsdWUubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgLy8gYmVmb3JlIGVudGVyaW5nIHRoZSBudW1iZXIgaW4gbmV3IGZvcm1hdCwgbGV0cyBjaGVjayBpZiB0aGUgZGlhbCBjb2RlIG5vdyBtYXRjaGVzIHNvbWUgb3RoZXIgY291bnRyeVxuICAgICAgICAgICAgdmFyIGlucHV0TnVtYmVyID0gZXZlbnQudGFyZ2V0LnZhbHVlLnJlcGxhY2UoL1xcRC9nLCAnJyk7XG5cbiAgICAgICAgICAgIC8vIHdlIGRvbid0IG5lZWQgdG8gc2VuZCB0aGUgd2hvbGUgbnVtYmVyIHRvIGd1ZXNzIHRoZSBjb3VudHJ5Li4uIG9ubHkgdGhlIGZpcnN0IDYgY2hhcmFjdGVycyBhcmUgZW5vdWdoXG4gICAgICAgICAgICAvLyB0aGUgZ3Vlc3MgY291bnRyeSBmdW5jdGlvbiBjYW4gdGhlbiB1c2UgbWVtb2l6YXRpb24gbXVjaCBtb3JlIGVmZmVjdGl2ZWx5IHNpbmNlIHRoZSBzZXQgb2YgaW5wdXQgaXQgZ2V0cyBoYXMgZHJhc3RpY2FsbHkgcmVkdWNlZFxuICAgICAgICAgICAgaWYoIXRoaXMuc3RhdGUuZnJlZXplU2VsZWN0aW9uIHx8IHRoaXMuc3RhdGUuc2VsZWN0ZWRDb3VudHJ5LmRpYWxDb2RlLmxlbmd0aCA+IGlucHV0TnVtYmVyLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgIG5ld1NlbGVjdGVkQ291bnRyeSA9IHRoaXMuZ3Vlc3NTZWxlY3RlZENvdW50cnkoaW5wdXROdW1iZXIuc3Vic3RyaW5nKDAsIDYpKTtcbiAgICAgICAgICAgICAgICBmcmVlemVTZWxlY3Rpb24gPSBmYWxzZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIGxldCB1cyByZW1vdmUgYWxsIG5vbiBudW1lcmFscyBmcm9tIHRoZSBpbnB1dFxuICAgICAgICAgICAgZm9ybWF0dGVkTnVtYmVyID0gdGhpcy5mb3JtYXROdW1iZXIoaW5wdXROdW1iZXIsIG5ld1NlbGVjdGVkQ291bnRyeS5mb3JtYXQpO1xuICAgICAgICB9XG5cbiAgICAgICAgdmFyIGNhcmV0UG9zaXRpb24gPSBldmVudC50YXJnZXQuc2VsZWN0aW9uU3RhcnQ7XG4gICAgICAgIHZhciBvbGRGb3JtYXR0ZWRUZXh0ID0gdGhpcy5zdGF0ZS5mb3JtYXR0ZWROdW1iZXI7XG4gICAgICAgIHZhciBkaWZmID0gZm9ybWF0dGVkTnVtYmVyLmxlbmd0aCAtIG9sZEZvcm1hdHRlZFRleHQubGVuZ3RoO1xuXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgZm9ybWF0dGVkTnVtYmVyOiBmb3JtYXR0ZWROdW1iZXIsXG4gICAgICAgICAgICBmcmVlemVTZWxlY3Rpb246IGZyZWV6ZVNlbGVjdGlvbixcbiAgICAgICAgICAgIHNlbGVjdGVkQ291bnRyeTogbmV3U2VsZWN0ZWRDb3VudHJ5LmRpYWxDb2RlLmxlbmd0aCA+IDAgPyBuZXdTZWxlY3RlZENvdW50cnkgOiB0aGlzLnN0YXRlLnNlbGVjdGVkQ291bnRyeVxuICAgICAgICB9LCBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIGlmKGlzTW9kZXJuQnJvd3Nlcikge1xuICAgICAgICAgICAgICAgIGlmKGRpZmYgPiAwKSB7XG4gICAgICAgICAgICAgICAgICAgIGNhcmV0UG9zaXRpb24gPSBjYXJldFBvc2l0aW9uIC0gZGlmZjtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBpZihjYXJldFBvc2l0aW9uID4gMCAmJiBvbGRGb3JtYXR0ZWRUZXh0Lmxlbmd0aCA+PSBmb3JtYXR0ZWROdW1iZXIubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMucmVmcy5udW1iZXJJbnB1dC5nZXRET01Ob2RlKCkuc2V0U2VsZWN0aW9uUmFuZ2UoY2FyZXRQb3NpdGlvbiwgY2FyZXRQb3NpdGlvbik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZih0aGlzLnByb3BzLm9uQ2hhbmdlKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5vbkNoYW5nZSh0aGlzLnN0YXRlLmZvcm1hdHRlZE51bWJlcik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgfSxcbiAgICBoYW5kbGVJbnB1dENsaWNrKCkge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHtzaG93RHJvcERvd246IGZhbHNlfSk7XG4gICAgfSxcbiAgICBoYW5kbGVGbGFnSXRlbUNsaWNrKGNvdW50cnkpIHtcbiAgICAgICAgdmFyIGN1cnJlbnRTZWxlY3RlZENvdW50cnkgPSB0aGlzLnN0YXRlLnNlbGVjdGVkQ291bnRyeTtcbiAgICAgICAgdmFyIG5leHRTZWxlY3RlZENvdW50cnkgPSBmaW5kV2hlcmUodGhpcy5wcm9wcy5vbmx5Q291bnRyaWVzLCBjb3VudHJ5KTtcblxuICAgICAgICAvLyB0aW55IG9wdGltaXphdGlvblxuICAgICAgICBpZihjdXJyZW50U2VsZWN0ZWRDb3VudHJ5LmlzbzIgIT09IG5leHRTZWxlY3RlZENvdW50cnkuaXNvMikge1xuICAgICAgICAgICAgLy8gVE9ETyAtIHRoZSBiZWxvdyByZXBsYWNlbWVudCBpcyBhIGJ1Zy4gSXQgd2lsbCByZXBsYWNlIHN0dWZmIGZyb20gbWlkZGxlIHRvb1xuICAgICAgICAgICAgdmFyIG5ld051bWJlciA9IHRoaXMuc3RhdGUuZm9ybWF0dGVkTnVtYmVyLnJlcGxhY2UoY3VycmVudFNlbGVjdGVkQ291bnRyeS5kaWFsQ29kZSwgbmV4dFNlbGVjdGVkQ291bnRyeS5kaWFsQ29kZSk7XG4gICAgICAgICAgICB2YXIgZm9ybWF0dGVkTnVtYmVyID0gdGhpcy5mb3JtYXROdW1iZXIobmV3TnVtYmVyLnJlcGxhY2UoL1xcRC9nLCAnJyksIG5leHRTZWxlY3RlZENvdW50cnkuZm9ybWF0KTtcblxuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICAgICAgc2hvd0Ryb3BEb3duOiBmYWxzZSxcbiAgICAgICAgICAgICAgICBzZWxlY3RlZENvdW50cnk6IG5leHRTZWxlY3RlZENvdW50cnksXG4gICAgICAgICAgICAgICAgZnJlZXplU2VsZWN0aW9uOiB0cnVlLFxuICAgICAgICAgICAgICAgIGZvcm1hdHRlZE51bWJlcjogZm9ybWF0dGVkTnVtYmVyXG4gICAgICAgICAgICB9LCBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICB0aGlzLl9jdXJzb3JUb0VuZCgpO1xuICAgICAgICAgICAgICAgIGlmKHRoaXMucHJvcHMub25DaGFuZ2UpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5vbkNoYW5nZShmb3JtYXR0ZWROdW1iZXIpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfSxcbiAgICBoYW5kbGVJbnB1dEZvY3VzKCkge1xuICAgICAgICAvLyBpZiB0aGUgaW5wdXQgaXMgYmxhbmssIGluc2VydCBkaWFsIGNvZGUgb2YgdGhlIHNlbGVjdGVkIGNvdW50cnlcbiAgICAgICAgaWYodGhpcy5yZWZzLm51bWJlcklucHV0LmdldERPTU5vZGUoKS52YWx1ZSA9PT0gJysnKSB7XG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtmb3JtYXR0ZWROdW1iZXI6ICcrJyArIHRoaXMuc3RhdGUuc2VsZWN0ZWRDb3VudHJ5LmRpYWxDb2RlfSk7XG4gICAgICAgIH1cbiAgICB9LFxuICAgIF9nZXRIaWdobGlnaHRDb3VudHJ5SW5kZXgoZGlyZWN0aW9uKSB7XG4gICAgICAgIC8vIGhhZCB0byB3cml0ZSBvd24gZnVuY3Rpb24gYmVjYXVzZSB1bmRlcnNjb3JlIGRvZXMgbm90IGhhdmUgZmluZEluZGV4LiBsb2Rhc2ggaGFzIGl0XG4gICAgICAgIHZhciBoaWdobGlnaHRDb3VudHJ5SW5kZXggPSB0aGlzLnN0YXRlLmhpZ2hsaWdodENvdW50cnlJbmRleCArIGRpcmVjdGlvbjtcblxuICAgICAgICBpZihoaWdobGlnaHRDb3VudHJ5SW5kZXggPCAwXG4gICAgICAgICAgICB8fCBoaWdobGlnaHRDb3VudHJ5SW5kZXggPj0gKHRoaXMucHJvcHMub25seUNvdW50cmllcy5sZW5ndGggKyB0aGlzLnN0YXRlLnByZWZlcnJlZENvdW50cmllcy5sZW5ndGgpKSB7XG4gICAgICAgICAgICByZXR1cm4gaGlnaGxpZ2h0Q291bnRyeUluZGV4IC0gZGlyZWN0aW9uO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGhpZ2hsaWdodENvdW50cnlJbmRleDtcbiAgICB9LFxuICAgIC8vIG1lbW9pemUgc2VhcmNoIHJlc3VsdHMuLi4gY2FjaGluZyBhbGwgdGhlIHdheVxuICAgIF9zZWFyY2hDb3VudHJ5OiBtZW1vaXplKGZ1bmN0aW9uKHF1ZXJ5U3RyaW5nKSB7XG4gICAgICAgIGlmKCFxdWVyeVN0cmluZyB8fCBxdWVyeVN0cmluZy5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9XG4gICAgICAgIC8vIGRvbid0IGluY2x1ZGUgdGhlIHByZWZlcnJlZCBjb3VudHJpZXMgaW4gc2VhcmNoXG4gICAgICAgIHZhciBwcm9iYWJsZUNvdW50cmllcyA9IGZpbHRlcih0aGlzLnByb3BzLm9ubHlDb3VudHJpZXMsIGZ1bmN0aW9uKGNvdW50cnkpIHtcbiAgICAgICAgICAgIHJldHVybiBzdGFydHNXaXRoKGNvdW50cnkubmFtZS50b0xvd2VyQ2FzZSgpLCBxdWVyeVN0cmluZy50b0xvd2VyQ2FzZSgpKTtcbiAgICAgICAgfSwgdGhpcyk7XG4gICAgICAgIHJldHVybiBwcm9iYWJsZUNvdW50cmllc1swXTtcbiAgICB9KSxcbiAgICBzZWFyY2hDb3VudHJ5KCkge1xuICAgICAgICBjb25zdCBwcm9iYWJsZUNhbmRpZGF0ZSA9IHRoaXMuX3NlYXJjaENvdW50cnkodGhpcy5zdGF0ZS5xdWVyeVN0cmluZykgfHwgdGhpcy5wcm9wcy5vbmx5Q291bnRyaWVzWzBdO1xuICAgICAgICBjb25zdCBwcm9iYWJsZUNhbmRpZGF0ZUluZGV4ID0gZmluZEluZGV4KHRoaXMucHJvcHMub25seUNvdW50cmllcywgcHJvYmFibGVDYW5kaWRhdGUpICsgdGhpcy5zdGF0ZS5wcmVmZXJyZWRDb3VudHJpZXMubGVuZ3RoO1xuXG4gICAgICAgIHRoaXMuc2Nyb2xsVG8odGhpcy5nZXRFbGVtZW50KHByb2JhYmxlQ2FuZGlkYXRlSW5kZXgpLCB0cnVlKTtcblxuICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgIHF1ZXJ5U3RyaW5nOiAnJyxcbiAgICAgICAgICAgIGhpZ2hsaWdodENvdW50cnlJbmRleDogcHJvYmFibGVDYW5kaWRhdGVJbmRleFxuICAgICAgICB9KTtcbiAgICB9LFxuICAgIGhhbmRsZUtleWRvd24oZXZlbnQpIHtcbiAgICAgICAgaWYoIXRoaXMuc3RhdGUuc2hvd0Ryb3BEb3duKSB7XG4gICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIGllIGhhY2tcbiAgICAgICAgaWYoZXZlbnQucHJldmVudERlZmF1bHQpIHtcbiAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBldmVudC5yZXR1cm5WYWx1ZSA9IGZhbHNlO1xuICAgICAgICB9XG5cbiAgICAgICAgZnVuY3Rpb24gX21vdmVIaWdobGlnaHQoZGlyZWN0aW9uKSB7XG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgICAgICBoaWdobGlnaHRDb3VudHJ5SW5kZXg6IHRoaXMuX2dldEhpZ2hsaWdodENvdW50cnlJbmRleChkaXJlY3Rpb24pXG4gICAgICAgICAgICB9LCAoKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5zY3JvbGxUbyh0aGlzLmdldEVsZW1lbnQodGhpcy5zdGF0ZS5oaWdobGlnaHRDb3VudHJ5SW5kZXgpLCB0cnVlKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG5cbiAgICAgICAgc3dpdGNoKGV2ZW50LndoaWNoKSB7XG4gICAgICAgICAgICBjYXNlIGtleXMuRE9XTjpcbiAgICAgICAgICAgICAgICAgICAgX21vdmVIaWdobGlnaHQoMSk7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBrZXlzLlVQOlxuICAgICAgICAgICAgICAgICAgICBfbW92ZUhpZ2hsaWdodCgtMSk7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBrZXlzLkVOVEVSOlxuICAgICAgICAgICAgICAgICAgICB0aGlzLmhhbmRsZUZsYWdJdGVtQ2xpY2sodGhpcy5wcm9wcy5vbmx5Q291bnRyaWVzW3RoaXMuc3RhdGUuaGlnaGxpZ2h0Q291bnRyeUluZGV4XSwgZXZlbnQpO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2Uga2V5cy5FU0M6XG4gICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7c2hvd0Ryb3BEb3duOiBmYWxzZX0sIHRoaXMuX2N1cnNvclRvRW5kKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgaWYoKGV2ZW50LndoaWNoID49IGtleXMuQSAmJiBldmVudC53aGljaCA8PSBrZXlzLlopIHx8IGV2ZW50LndoaWNoID09PSBrZXlzLlNQQUNFKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe3F1ZXJ5U3RyaW5nOiB0aGlzLnN0YXRlLnF1ZXJ5U3RyaW5nICsgU3RyaW5nLmZyb21DaGFyQ29kZShldmVudC53aGljaCl9LFxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zdGF0ZS5kZWJvdW5jZWRRdWVyeVN0aW5nU2VhcmNoZXIpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH0sXG4gICAgaGFuZGxlSW5wdXRLZXlEb3duKGV2ZW50KSB7XG4gICAgICAgIGlmKGV2ZW50LndoaWNoID09PSBrZXlzLkVOVEVSKSB7XG4gICAgICAgICAgICB0aGlzLnByb3BzLm9uRW50ZXJLZXlQcmVzcyhldmVudCk7XG4gICAgICAgIH1cbiAgICB9LFxuICAgIGhhbmRsZUNsaWNrT3V0c2lkZSgpIHtcbiAgICAgICAgaWYodGhpcy5zdGF0ZS5zaG93RHJvcERvd24pIHtcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgICAgIHNob3dEcm9wRG93bjogZmFsc2VcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfSxcbiAgICBnZXRDb3VudHJ5RHJvcERvd25MaXN0KCkge1xuXG4gICAgICAgIHZhciBjb3VudHJ5RHJvcERvd25MaXN0ID0gbWFwKFt0aGlzLnN0YXRlLnByZWZlcnJlZENvdW50cmllcywgLi4udGhpcy5wcm9wcy5vbmx5Q291bnRyaWVzXSwgZnVuY3Rpb24oY291bnRyeSwgaW5kZXgpIHtcbiAgICAgICAgICAgIGxldCBpdGVtQ2xhc3NlcyA9IGNsYXNzTmFtZXMoe1xuICAgICAgICAgICAgICAgIGNvdW50cnk6IHRydWUsXG4gICAgICAgICAgICAgICAgcHJlZmVycmVkOiBjb3VudHJ5LmlzbzIgPT09ICd1cycgfHwgY291bnRyeS5pc28yID09PSAnZ2InLFxuICAgICAgICAgICAgICAgIGFjdGl2ZTogY291bnRyeS5pc28yID09PSAndXMnLFxuICAgICAgICAgICAgICAgIGhpZ2hsaWdodDogdGhpcy5zdGF0ZS5oaWdobGlnaHRDb3VudHJ5SW5kZXggPT09IGluZGV4XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICA8bGlcbiAgICAgICAgICAgICAgICAgICAgcmVmPXtgZmxhZ19ub18ke2luZGV4fWB9XG4gICAgICAgICAgICAgICAgICAgIGtleT17YGZsYWdfbm9fJHtpbmRleH1gfVxuICAgICAgICAgICAgICAgICAgICBkYXRhLWZsYWcta2V5PXtgZmxhZ19ub18ke2luZGV4fWB9XG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17aXRlbUNsYXNzZXN9XG4gICAgICAgICAgICAgICAgICAgIGRhdGEtZGlhbC1jb2RlPVwiMVwiXG4gICAgICAgICAgICAgICAgICAgIGRhdGEtY291bnRyeS1jb2RlPXtjb3VudHJ5LmlzbzJ9XG4gICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3RoaXMuaGFuZGxlRmxhZ0l0ZW1DbGljay5iaW5kKHRoaXMsIGNvdW50cnkpfT5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2BmbGFnICR7Y291bnRyeS5pc28yfWB9IC8+XG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT0nY291bnRyeS1uYW1lJz57Y291bnRyeS5uYW1lfTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPSdkaWFsLWNvZGUnPnsnKycgKyBjb3VudHJ5LmRpYWxDb2RlfTwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgKTtcbiAgICAgICAgfSwgdGhpcyk7XG5cbiAgICAgICAgY29uc3QgZGFzaGVkTGkgPSAoPGxpIGtleT17XCJkYXNoZXNcIn0gY2xhc3NOYW1lPVwiZGl2aWRlclwiIC8+KTtcbiAgICAgICAgLy8gbGV0J3MgaW5zZXJ0IGEgZGFzaGVkIGxpbmUgaW4gYmV0d2VlbiBwcmVmZmVyZWQgY291bnRyaWVzIGFuZCB0aGUgcmVzdFxuICAgICAgICBjb3VudHJ5RHJvcERvd25MaXN0LnNwbGljZSh0aGlzLnN0YXRlLnByZWZlcnJlZENvdW50cmllcy5sZW5ndGgsIDAsIGRhc2hlZExpKTtcblxuICAgICAgICBjb25zdCBkcm9wRG93bkNsYXNzZXMgPSBjbGFzc05hbWVzKHtcbiAgICAgICAgICAgICdjb3VudHJ5LWxpc3QnOiB0cnVlLFxuICAgICAgICAgICAgJ2hpZGUnOiAhdGhpcy5zdGF0ZS5zaG93RHJvcERvd25cbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8dWwgcmVmPVwiZmxhZ0Ryb3Bkb3duTGlzdFwiIGNsYXNzTmFtZT17ZHJvcERvd25DbGFzc2VzfT5cbiAgICAgICAgICAgICAgICB7Y291bnRyeURyb3BEb3duTGlzdH1cbiAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICk7XG4gICAgfSxcbiAgICByZW5kZXIoKSB7XG4gICAgICAgIHZhciBhcnJvd0NsYXNzZXMgPSBjbGFzc05hbWVzKHtcbiAgICAgICAgICAgICdhcnJvdyc6IHRydWUsXG4gICAgICAgICAgICAndXAnOiB0aGlzLnN0YXRlLnNob3dEcm9wRG93blxuICAgICAgICB9KTtcbiAgICAgICAgdmFyIGlucHV0Q2xhc3NlcyA9IGNsYXNzTmFtZXMoe1xuICAgICAgICAgICAgJ2Zvcm0tY29udHJvbCc6IHRydWUsXG4gICAgICAgICAgICAnaW52YWxpZC1udW1iZXInOiAhdGhpcy5wcm9wcy5pc1ZhbGlkKHRoaXMuc3RhdGUuZm9ybWF0dGVkTnVtYmVyLnJlcGxhY2UoL1xcRC9nLCAnJykpXG4gICAgICAgIH0pO1xuXG4gICAgICAgIHZhciBmbGFnVmlld0NsYXNzZXMgPSBjbGFzc05hbWVzKHtcbiAgICAgICAgICAgICdmbGFnLWRyb3Bkb3duJzogdHJ1ZSxcbiAgICAgICAgICAgICdvcGVuLWRyb3Bkb3duJzogdGhpcy5zdGF0ZS5zaG93RHJvcERvd25cbiAgICAgICAgfSk7XG5cbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdyZWFjdC10ZWwtaW5wdXQnPlxuICAgICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5oYW5kbGVJbnB1dH1cbiAgICAgICAgICAgICAgICAgICAgb25DbGljaz17dGhpcy5oYW5kbGVJbnB1dENsaWNrfVxuICAgICAgICAgICAgICAgICAgICBvbkZvY3VzPXt0aGlzLmhhbmRsZUlucHV0Rm9jdXN9XG4gICAgICAgICAgICAgICAgICAgIG9uS2V5RG93bj17dGhpcy5oYW5kbGVJbnB1dEtleURvd259XG4gICAgICAgICAgICAgICAgICAgIHZhbHVlPXt0aGlzLnN0YXRlLmZvcm1hdHRlZE51bWJlcn1cbiAgICAgICAgICAgICAgICAgICAgcmVmPVwibnVtYmVySW5wdXRcIlxuICAgICAgICAgICAgICAgICAgICB0eXBlPVwidGVsXCJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtpbnB1dENsYXNzZXN9XG4gICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPScrMSAoNzAyKSAxMjMtNDU2NycvPlxuICAgICAgICAgICAgICAgIDxkaXYgcmVmPSdmbGFnRHJvcERvd25CdXR0b24nIGNsYXNzTmFtZT17ZmxhZ1ZpZXdDbGFzc2VzfSBvbktleURvd249e3RoaXMuaGFuZGxlS2V5ZG93bn0gPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IHJlZj0nc2VsZWN0ZWRGbGFnJyBvbkNsaWNrPXt0aGlzLmhhbmRsZUZsYWdEcm9wZG93bkNsaWNrfSBjbGFzc05hbWU9J3NlbGVjdGVkLWZsYWcnIHRpdGxlPXtgJHt0aGlzLnN0YXRlLnNlbGVjdGVkQ291bnRyeS5uYW1lfTogKyAke3RoaXMuc3RhdGUuc2VsZWN0ZWRDb3VudHJ5LmRpYWxDb2RlfWB9PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2BmbGFnICR7dGhpcy5zdGF0ZS5zZWxlY3RlZENvdW50cnkuaXNvMn1gfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17YXJyb3dDbGFzc2VzfT48L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAge3RoaXMuc3RhdGUuc2hvd0Ryb3BEb3duID8gdGhpcy5nZXRDb3VudHJ5RHJvcERvd25MaXN0KCkgOiAnJ31cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICApO1xuICAgIH1cbn0pO1xuXG5tb2R1bGUuZXhwb3J0cyA9IFJlYWN0VGVsZXBob25lSW5wdXQ7XG4iXX0=
