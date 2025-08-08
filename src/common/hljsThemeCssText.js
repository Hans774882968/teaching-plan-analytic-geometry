export const hljsThemeCssText = {
  '1c-light.css': `pre code.hljs {
  display: block;
  overflow-x: auto;
  padding: 1em
}
code.hljs {
  padding: 3px 5px
}
/*!
  Theme: 1c-light
  Description: Style IDE 1C:Enterprise 8
  Author: (c) Barilko Vitaliy <barilkovetal@gmail.com>
  Maintainer: @Diversus23
  Website: https://softonit.ru/
  License: see project LICENSE
  Touched: 2023
*/
/* end baseline CSS */
.code-block-wrapper, .hljs {
  color: #0000ff;
  background: #ffffff
}
/* Base color: saturation 0; */
.hljs-subst {
  /* default */
  
}
/* purposely ignored */
.hljs-formula,
.hljs-attr,
.hljs-property {
  
}
.hljs-comment {
  color: #008000
}
.hljs-tag {
  color: #444a
}
.hljs-tag .hljs-name,
.hljs-tag .hljs-attr {
  color: #444
}
.hljs-punctuation,
.hljs-function,
.hljs-keyword,
.hljs-attribute,
.hljs-selector-tag,
.hljs-doctag,
.hljs-name {
  color: #ff0000
}
.hljs-type,
.hljs-params {
  color: #0000ff
}
/* User color: hue: 0 */
.hljs-string,
.hljs-number,
.hljs-selector-id,
.hljs-selector-class,
.hljs-quote,
.hljs-template-tag,
.hljs-symbol,
.hljs-deletion {
  color: #000000
}
.hljs-title,
.hljs-section {
  color: #0000ff
}
.hljs-regexp,
.hljs-variable,
.hljs-template-variable,
.hljs-link,
.hljs-selector-attr,
.hljs-operator,
.hljs-selector-pseudo {
  color: #ab5656
}
/* Language color: hue: 90; */
.hljs-literal {
  color: #ff0000
}
.hljs-built_in,
.hljs-bullet,
.hljs-code,
.hljs-addition {
  color: #0000ff
}
/* Meta color: hue: 200 */
.hljs-meta {
  color: #963200
}
.hljs-meta .hljs-string {
  color: #963200
}
.hljs-meta .hljs-keyword {
  color: #963200
}
/* Misc effects */
.hljs-emphasis {
  font-style: italic
}
.hljs-strong {
  font-weight: bold
}`,
  'a11y-dark.css': `pre code.hljs {
  display: block;
  overflow-x: auto;
  padding: 1em
}
code.hljs {
  padding: 3px 5px
}
/*!
  Theme: a11y-dark
  Author: @ericwbailey
  Maintainer: @ericwbailey

  Based on the Tomorrow Night Eighties theme: https://github.com/isagalaev/highlight.js/blob/master/src/styles/tomorrow-night-eighties.css
*/
.code-block-wrapper, .hljs {
  background: #2b2b2b;
  color: #f8f8f2
}
/* Comment */
.hljs-comment,
.hljs-quote {
  color: #d4d0ab
}
/* Red */
.hljs-variable,
.hljs-template-variable,
.hljs-tag,
.hljs-name,
.hljs-selector-id,
.hljs-selector-class,
.hljs-regexp,
.hljs-deletion {
  color: #ffa07a
}
/* Orange */
.hljs-number,
.hljs-built_in,
.hljs-literal,
.hljs-type,
.hljs-params,
.hljs-meta,
.hljs-link {
  color: #f5ab35
}
/* Yellow */
.hljs-attribute {
  color: #ffd700
}
/* Green */
.hljs-string,
.hljs-symbol,
.hljs-bullet,
.hljs-addition {
  color: #abe338
}
/* Blue */
.hljs-title,
.hljs-section {
  color: #00e0e0
}
/* Purple */
.hljs-keyword,
.hljs-selector-tag {
  color: #dcc6e0
}
.hljs-emphasis {
  font-style: italic
}
.hljs-strong {
  font-weight: bold
}
@media screen and (-ms-high-contrast: active) {
  .hljs-addition,
  .hljs-attribute,
  .hljs-built_in,
  .hljs-bullet,
  .hljs-comment,
  .hljs-link,
  .hljs-literal,
  .hljs-meta,
  .hljs-number,
  .hljs-params,
  .hljs-string,
  .hljs-symbol,
  .hljs-type,
  .hljs-quote {
    color: highlight
  }
  .hljs-keyword,
  .hljs-selector-tag {
    font-weight: bold
  }
}`,
  'a11y-light.css': `pre code.hljs {
  display: block;
  overflow-x: auto;
  padding: 1em
}
code.hljs {
  padding: 3px 5px
}
/*!
  Theme: a11y-light
  Author: @ericwbailey
  Maintainer: @ericwbailey

  Based on the Tomorrow Night Eighties theme: https://github.com/isagalaev/highlight.js/blob/master/src/styles/tomorrow-night-eighties.css
*/
.code-block-wrapper, .hljs {
  background: #fefefe;
  color: #545454
}
/* Comment */
.hljs-comment,
.hljs-quote {
  color: #696969
}
/* Red */
.hljs-variable,
.hljs-template-variable,
.hljs-tag,
.hljs-name,
.hljs-selector-id,
.hljs-selector-class,
.hljs-regexp,
.hljs-deletion {
  color: #d91e18
}
/* Orange */
.hljs-number,
.hljs-built_in,
.hljs-literal,
.hljs-type,
.hljs-params,
.hljs-meta,
.hljs-link {
  color: #aa5d00
}
/* Yellow */
.hljs-attribute {
  color: #aa5d00
}
/* Green */
.hljs-string,
.hljs-symbol,
.hljs-bullet,
.hljs-addition {
  color: #008000
}
/* Blue */
.hljs-title,
.hljs-section {
  color: #007faa
}
/* Purple */
.hljs-keyword,
.hljs-selector-tag {
  color: #7928a1
}
.hljs-emphasis {
  font-style: italic
}
.hljs-strong {
  font-weight: bold
}
@media screen and (-ms-high-contrast: active) {
  .hljs-addition,
  .hljs-attribute,
  .hljs-built_in,
  .hljs-bullet,
  .hljs-comment,
  .hljs-link,
  .hljs-literal,
  .hljs-meta,
  .hljs-number,
  .hljs-params,
  .hljs-string,
  .hljs-symbol,
  .hljs-type,
  .hljs-quote {
    color: highlight
  }
  .hljs-keyword,
  .hljs-selector-tag {
    font-weight: bold
  }
}`,
  'agate.css': `pre code.hljs {
  display: block;
  overflow-x: auto;
  padding: 1em
}
code.hljs {
  padding: 3px 5px
}
/*!
   Theme: Agate
   Author: (c) Taufik Nurrohman <hi@taufik-nurrohman.com>
   Maintainer: @taufik-nurrohman
   Updated: 2021-04-24

   #333
   #62c8f3
   #7bd694
   #888
   #a2fca2
   #ade5fc
   #b8d8a2
   #c6b4f0
   #d36363
   #fc9b9b
   #fcc28c
   #ffa
   #fff
*/
.code-block-wrapper, .hljs {
  background: #333;
  color: #fff
}
.hljs-doctag,
.hljs-meta-keyword,
.hljs-name,
.hljs-strong {
  font-weight: bold
}
.hljs-code,
.hljs-emphasis {
  font-style: italic
}
.hljs-section,
.hljs-tag {
  color: #62c8f3
}
.hljs-selector-class,
.hljs-selector-id,
.hljs-template-variable,
.hljs-variable {
  color: #ade5fc
}
.hljs-meta-string,
.hljs-string {
  color: #a2fca2
}
.hljs-attr,
.hljs-quote,
.hljs-selector-attr {
  color: #7bd694
}
.hljs-tag .hljs-attr {
  color: inherit
}
.hljs-attribute,
.hljs-title,
.hljs-type {
  color: #ffa
}
.hljs-number,
.hljs-symbol {
  color: #d36363
}
.hljs-bullet,
.hljs-template-tag {
  color: #b8d8a2
}
.hljs-built_in,
.hljs-keyword,
.hljs-literal,
.hljs-selector-tag {
  color: #fcc28c
}
.hljs-code,
.hljs-comment,
.hljs-formula {
  color: #888
}
.hljs-link,
.hljs-selector-pseudo,
.hljs-regexp {
  color: #c6b4f0
}
.hljs-meta {
  color: #fc9b9b
}
.hljs-deletion {
  background: #fc9b9b;
  color: #333
}
.hljs-addition {
  background: #a2fca2;
  color: #333
}
/* Purposely ignored */
.hljs-operator,
.hljs-params,
.hljs-property,
.hljs-punctuation {
  
}
.hljs-subst {
  color: #fff
}
/* This applies only if HTML auto-merging plugin is enabled by user (#2889) */
.hljs a {
  color: inherit
}
.hljs a:focus,
.hljs a:hover {
  color: inherit;
  text-decoration: underline
}
.hljs mark {
  background: #555;
  color: inherit
}`,
  'an-old-hope.css': `pre code.hljs {
  display: block;
  overflow-x: auto;
  padding: 1em
}
code.hljs {
  padding: 3px 5px
}
/*!
  Theme: An Old Hope – Star Wars Syntax
  Author: (c) Gustavo Costa <gusbemacbe@gmail.com>
  Maintainer: @gusbemacbe

  Original theme - Ocean Dark Theme – by https://github.com/gavsiu
  Based on Jesse Leite's Atom syntax theme 'An Old Hope'
    https://github.com/JesseLeite/an-old-hope-syntax-atom
*/
/* Millenium Falcon */
.code-block-wrapper, .hljs {
  background: #1C1D21;
  color: #c0c5ce
}
/* Death Star Comment */
.hljs-comment,
.hljs-quote {
  color: #B6B18B
}
/* Darth Vader */
.hljs-variable,
.hljs-template-variable,
.hljs-tag,
.hljs-name,
.hljs-selector-id,
.hljs-selector-class,
.hljs-regexp,
.hljs-deletion {
  color: #EB3C54
}
/* Threepio */
.hljs-number,
.hljs-built_in,
.hljs-literal,
.hljs-type,
.hljs-params,
.hljs-meta,
.hljs-link {
  color: #E7CE56
}
/* Luke Skywalker */
.hljs-attribute {
  color: #EE7C2B
}
/* Obi Wan Kenobi */
.hljs-string,
.hljs-symbol,
.hljs-bullet,
.hljs-addition {
  color: #4FB4D7
}
/* Yoda */
.hljs-title,
.hljs-section {
  color: #78BB65
}
/* Mace Windu */
.hljs-keyword,
.hljs-selector-tag {
  color: #B45EA4
}
.hljs-emphasis {
  font-style: italic
}
.hljs-strong {
  font-weight: bold
}`,
  'androidstudio.css': `pre code.hljs {
  display: block;
  overflow-x: auto;
  padding: 1em
}
code.hljs {
  padding: 3px 5px
}
/*
Date: 24 Fev 2015
Author: Pedro Oliveira <kanytu@gmail . com>
*/
.code-block-wrapper, .hljs {
  color: #a9b7c6;
  background: #282b2e
}
.hljs-number,
.hljs-literal,
.hljs-symbol,
.hljs-bullet {
  color: #6897BB
}
.hljs-keyword,
.hljs-selector-tag,
.hljs-deletion {
  color: #cc7832
}
.hljs-variable,
.hljs-template-variable,
.hljs-link {
  color: #629755
}
.hljs-comment,
.hljs-quote {
  color: #808080
}
.hljs-meta {
  color: #bbb529
}
.hljs-string,
.hljs-attribute,
.hljs-addition {
  color: #6A8759
}
.hljs-section,
.hljs-title,
.hljs-type {
  color: #ffc66d
}
.hljs-name,
.hljs-selector-id,
.hljs-selector-class {
  color: #e8bf6a
}
.hljs-emphasis {
  font-style: italic
}
.hljs-strong {
  font-weight: bold
}`,
  'arduino-light.css': `pre code.hljs {
  display: block;
  overflow-x: auto;
  padding: 1em
}
code.hljs {
  padding: 3px 5px
}
/*

Arduino® Light Theme - Stefania Mellai <s.mellai@arduino.cc>

*/
.code-block-wrapper, .hljs {
  background: white;
  color: #434f54
}
.hljs-subst {
  color: #434f54
}
.hljs-keyword,
.hljs-attribute,
.hljs-selector-tag,
.hljs-doctag,
.hljs-name {
  color: #00979D
}
.hljs-built_in,
.hljs-literal,
.hljs-bullet,
.hljs-code,
.hljs-addition {
  color: #D35400
}
.hljs-regexp,
.hljs-symbol,
.hljs-variable,
.hljs-template-variable,
.hljs-link,
.hljs-selector-attr,
.hljs-selector-pseudo {
  color: #00979D
}
.hljs-type,
.hljs-string,
.hljs-selector-id,
.hljs-selector-class,
.hljs-quote,
.hljs-template-tag,
.hljs-deletion {
  color: #005C5F
}
.hljs-comment {
  color: rgba(149,165,166,.8)
}
.hljs-meta .hljs-keyword {
  color: #728E00
}
.hljs-meta {
  color: #434f54
}
.hljs-emphasis {
  font-style: italic
}
.hljs-strong {
  font-weight: bold
}
.hljs-function {
  color: #728E00
}
.hljs-title,
.hljs-section {
  color: #880000;
  font-weight: bold
}
.hljs-number {
  color: #8A7B52
}`,
  'arta.css': `pre code.hljs {
  display: block;
  overflow-x: auto;
  padding: 1em
}
code.hljs {
  padding: 3px 5px
}
/*
Date: 17.V.2011
Author: pumbur <pumbur@pumbur.net>
*/
.code-block-wrapper, .hljs {
  background: #222;
  color: #aaa
}
.hljs-subst {
  color: #aaa
}
.hljs-section {
  color: #fff
}
.hljs-comment,
.hljs-quote,
.hljs-meta {
  color: #444
}
.hljs-string,
.hljs-symbol,
.hljs-bullet,
.hljs-regexp {
  color: #ffcc33
}
.hljs-number,
.hljs-addition {
  color: #00cc66
}
.hljs-built_in,
.hljs-literal,
.hljs-type,
.hljs-template-variable,
.hljs-attribute,
.hljs-link {
  color: #32aaee
}
.hljs-keyword,
.hljs-selector-tag,
.hljs-name,
.hljs-selector-id,
.hljs-selector-class {
  color: #6644aa
}
.hljs-title,
.hljs-variable,
.hljs-deletion,
.hljs-template-tag {
  color: #bb1166
}
.hljs-section,
.hljs-doctag,
.hljs-strong {
  font-weight: bold
}
.hljs-emphasis {
  font-style: italic
}`,
  'ascetic.css': `pre code.hljs {
  display: block;
  overflow-x: auto;
  padding: 1em
}
code.hljs {
  padding: 3px 5px
}
/*

Original style from softwaremaniacs.org (c) Ivan Sagalaev <Maniac@SoftwareManiacs.Org>

*/
.code-block-wrapper, .hljs {
  background: white;
  color: black
}
.hljs-string,
.hljs-variable,
.hljs-template-variable,
.hljs-symbol,
.hljs-bullet,
.hljs-section,
.hljs-addition,
.hljs-attribute,
.hljs-link {
  color: #888
}
.hljs-comment,
.hljs-quote,
.hljs-meta,
.hljs-deletion {
  color: #ccc
}
.hljs-keyword,
.hljs-selector-tag,
.hljs-section,
.hljs-name,
.hljs-type,
.hljs-strong {
  font-weight: bold
}
.hljs-emphasis {
  font-style: italic
}`,
  'atom-one-dark-reasonable.css': `pre code.hljs {
  display: block;
  overflow-x: auto;
  padding: 1em
}
code.hljs {
  padding: 3px 5px
}
/*

Atom One Dark With support for ReasonML by Gidi Morris, based off work by Daniel Gamage

Original One Dark Syntax theme from https://github.com/atom/one-dark-syntax

*/
.code-block-wrapper, .hljs {
  color: #abb2bf;
  background: #282c34
}
.hljs-keyword,
.hljs-operator {
  color: #F92672
}
.hljs-pattern-match {
  color: #F92672
}
.hljs-pattern-match .hljs-constructor {
  color: #61aeee
}
.hljs-function {
  color: #61aeee
}
.hljs-function .hljs-params {
  color: #A6E22E
}
.hljs-function .hljs-params .hljs-typing {
  color: #FD971F
}
.hljs-module-access .hljs-module {
  color: #7e57c2
}
.hljs-constructor {
  color: #e2b93d
}
.hljs-constructor .hljs-string {
  color: #9CCC65
}
.hljs-comment,
.hljs-quote {
  color: #b18eb1;
  font-style: italic
}
.hljs-doctag,
.hljs-formula {
  color: #c678dd
}
.hljs-section,
.hljs-name,
.hljs-selector-tag,
.hljs-deletion,
.hljs-subst {
  color: #e06c75
}
.hljs-literal {
  color: #56b6c2
}
.hljs-string,
.hljs-regexp,
.hljs-addition,
.hljs-attribute,
.hljs-meta .hljs-string {
  color: #98c379
}
.hljs-built_in,
.hljs-title.class_,
.hljs-class .hljs-title {
  color: #e6c07b
}
.hljs-attr,
.hljs-variable,
.hljs-template-variable,
.hljs-type,
.hljs-selector-class,
.hljs-selector-attr,
.hljs-selector-pseudo,
.hljs-number {
  color: #d19a66
}
.hljs-symbol,
.hljs-bullet,
.hljs-link,
.hljs-meta,
.hljs-selector-id,
.hljs-title {
  color: #61aeee
}
.hljs-emphasis {
  font-style: italic
}
.hljs-strong {
  font-weight: bold
}
.hljs-link {
  text-decoration: underline
}`,
  'atom-one-dark.css': `pre code.hljs {
  display: block;
  overflow-x: auto;
  padding: 1em
}
code.hljs {
  padding: 3px 5px
}
/*

Atom One Dark by Daniel Gamage
Original One Dark Syntax theme from https://github.com/atom/one-dark-syntax

base:    #282c34
mono-1:  #abb2bf
mono-2:  #818896
mono-3:  #5c6370
hue-1:   #56b6c2
hue-2:   #61aeee
hue-3:   #c678dd
hue-4:   #98c379
hue-5:   #e06c75
hue-5-2: #be5046
hue-6:   #d19a66
hue-6-2: #e6c07b

*/
.code-block-wrapper, .hljs {
  color: #abb2bf;
  background: #282c34
}
.hljs-comment,
.hljs-quote {
  color: #5c6370;
  font-style: italic
}
.hljs-doctag,
.hljs-keyword,
.hljs-formula {
  color: #c678dd
}
.hljs-section,
.hljs-name,
.hljs-selector-tag,
.hljs-deletion,
.hljs-subst {
  color: #e06c75
}
.hljs-literal {
  color: #56b6c2
}
.hljs-string,
.hljs-regexp,
.hljs-addition,
.hljs-attribute,
.hljs-meta .hljs-string {
  color: #98c379
}
.hljs-attr,
.hljs-variable,
.hljs-template-variable,
.hljs-type,
.hljs-selector-class,
.hljs-selector-attr,
.hljs-selector-pseudo,
.hljs-number {
  color: #d19a66
}
.hljs-symbol,
.hljs-bullet,
.hljs-link,
.hljs-meta,
.hljs-selector-id,
.hljs-title {
  color: #61aeee
}
.hljs-built_in,
.hljs-title.class_,
.hljs-class .hljs-title {
  color: #e6c07b
}
.hljs-emphasis {
  font-style: italic
}
.hljs-strong {
  font-weight: bold
}
.hljs-link {
  text-decoration: underline
}`,
  'atom-one-light.css': `pre code.hljs {
  display: block;
  overflow-x: auto;
  padding: 1em
}
code.hljs {
  padding: 3px 5px
}
/*

Atom One Light by Daniel Gamage
Original One Light Syntax theme from https://github.com/atom/one-light-syntax

base:    #fafafa
mono-1:  #383a42
mono-2:  #686b77
mono-3:  #a0a1a7
hue-1:   #0184bb
hue-2:   #4078f2
hue-3:   #a626a4
hue-4:   #50a14f
hue-5:   #e45649
hue-5-2: #c91243
hue-6:   #986801
hue-6-2: #c18401

*/
.code-block-wrapper, .hljs {
  color: #383a42;
  background: #fafafa
}
.hljs-comment,
.hljs-quote {
  color: #a0a1a7;
  font-style: italic
}
.hljs-doctag,
.hljs-keyword,
.hljs-formula {
  color: #a626a4
}
.hljs-section,
.hljs-name,
.hljs-selector-tag,
.hljs-deletion,
.hljs-subst {
  color: #e45649
}
.hljs-literal {
  color: #0184bb
}
.hljs-string,
.hljs-regexp,
.hljs-addition,
.hljs-attribute,
.hljs-meta .hljs-string {
  color: #50a14f
}
.hljs-attr,
.hljs-variable,
.hljs-template-variable,
.hljs-type,
.hljs-selector-class,
.hljs-selector-attr,
.hljs-selector-pseudo,
.hljs-number {
  color: #986801
}
.hljs-symbol,
.hljs-bullet,
.hljs-link,
.hljs-meta,
.hljs-selector-id,
.hljs-title {
  color: #4078f2
}
.hljs-built_in,
.hljs-title.class_,
.hljs-class .hljs-title {
  color: #c18401
}
.hljs-emphasis {
  font-style: italic
}
.hljs-strong {
  font-weight: bold
}
.hljs-link {
  text-decoration: underline
}`,
  'brown-paper.css': `pre code.hljs {
  display: block;
  overflow-x: auto;
  padding: 1em
}
code.hljs {
  padding: 3px 5px
}
/*

Brown Paper style from goldblog.com.ua (c) Zaripov Yura <yur4ik7@ukr.net>

*/
.code-block-wrapper, .hljs {
  color: #363c69;
  background: #b7a68e url(__VITE_BASE_PATH__/brown-papersq.png)
}
.hljs-keyword,
.hljs-selector-tag,
.hljs-literal {
  color: #005599;
  font-weight: bold
}
.hljs-subst {
  /* default */
  
}
.hljs-string,
.hljs-title,
.hljs-section,
.hljs-type,
.hljs-attribute,
.hljs-symbol,
.hljs-bullet,
.hljs-built_in,
.hljs-addition,
.hljs-variable,
.hljs-template-tag,
.hljs-template-variable,
.hljs-link,
.hljs-name {
  color: #2c009f
}
.hljs-comment,
.hljs-quote,
.hljs-meta,
.hljs-deletion {
  color: #802022
}
.hljs-keyword,
.hljs-selector-tag,
.hljs-literal,
.hljs-doctag,
.hljs-title,
.hljs-section,
.hljs-type,
.hljs-name,
.hljs-strong {
  font-weight: bold
}
.hljs-emphasis {
  font-style: italic
}`,
  'codepen-embed.css': `pre code.hljs {
  display: block;
  overflow-x: auto;
  padding: 1em
}
code.hljs {
  padding: 3px 5px
}
/*
  codepen.io Embed Theme
  Author: Justin Perry <http://github.com/ourmaninamsterdam>
  Original theme - https://github.com/chriskempson/tomorrow-theme
*/
.code-block-wrapper, .hljs {
  background: #222;
  color: #fff
}
.hljs-comment,
.hljs-quote {
  color: #777
}
.hljs-variable,
.hljs-template-variable,
.hljs-tag,
.hljs-regexp,
.hljs-meta,
.hljs-number,
.hljs-built_in,
.hljs-literal,
.hljs-params,
.hljs-symbol,
.hljs-bullet,
.hljs-link,
.hljs-deletion {
  color: #ab875d
}
.hljs-section,
.hljs-title,
.hljs-name,
.hljs-selector-id,
.hljs-selector-class,
.hljs-type,
.hljs-attribute {
  color: #9b869b
}
.hljs-string,
.hljs-keyword,
.hljs-selector-tag,
.hljs-addition {
  color: #8f9c6c
}
.hljs-emphasis {
  font-style: italic
}
.hljs-strong {
  font-weight: bold
}`,
  'color-brewer.css': `pre code.hljs {
  display: block;
  overflow-x: auto;
  padding: 1em
}
code.hljs {
  padding: 3px 5px
}
/*

Colorbrewer theme
Original: https://github.com/mbostock/colorbrewer-theme (c) Mike Bostock <mike@ocks.org>
Ported by Fabrício Tavares de Oliveira

*/
.code-block-wrapper, .hljs {
  color: #000;
  background: #fff
}
.hljs-subst {
  /* default */
  
}
.hljs-string,
.hljs-meta,
.hljs-symbol,
.hljs-template-tag,
.hljs-template-variable,
.hljs-addition {
  color: #756bb1
}
.hljs-comment,
.hljs-quote {
  color: #636363
}
.hljs-number,
.hljs-regexp,
.hljs-literal,
.hljs-bullet,
.hljs-link {
  color: #31a354
}
.hljs-deletion,
.hljs-variable {
  color: #88f
}
.hljs-keyword,
.hljs-selector-tag,
.hljs-title,
.hljs-section,
.hljs-built_in,
.hljs-doctag,
.hljs-type,
.hljs-tag,
.hljs-name,
.hljs-selector-id,
.hljs-selector-class,
.hljs-strong {
  color: #3182bd
}
.hljs-emphasis {
  font-style: italic
}
.hljs-attribute {
  color: #e6550d
}`,
  'cybertopia-cherry.css': `pre code.hljs {
  display: block;
  overflow-x: auto;
  padding: 1em
}
code.hljs {
  padding: 3px 5px
}
/*
  Theme: Cybertopia Cherry
  Author: Alexandre ZANNI (noraj)
  Repository: https://github.com/noraj/cybertopia-highlightjs
*/
:root {
  --hljs-bg: #101010;
  --hljs-mono-1: #abb2bf;
  --hljs-mono-3: #5c6370;
  --hljs-hue-1: #C50243;
  --hljs-hue-2: #C50253;
  --hljs-hue-3: #C50263;
  --hljs-hue-4: #02c797;
  --hljs-hue-5: #02C584;
  --hljs-hue-6: #02C574;
  --hljs-hue-6-2: #02C563;
  --hljs-hue-7: #C50233
}
.code-block-wrapper, .hljs {
  color: var(--hljs-mono-1);
  background: var(--hljs-bg)
}
.hljs-comment,
.hljs-quote,
.hljs-code {
  color: var(--hljs-mono-3);
  font-style: italic
}
.hljs-doctag,
.hljs-keyword,
.hljs-formula,
.hljs-meta .hljs-keyword {
  color: var(--hljs-hue-3)
}
.hljs-section,
.hljs-name,
.hljs-selector-tag,
.hljs-deletion,
.hljs-subst {
  color: var(--hljs-hue-5)
}
.hljs-literal {
  color: var(--hljs-hue-1)
}
.hljs-string,
.hljs-regexp,
.hljs-addition,
.hljs-attribute,
.hljs-meta .hljs-string {
  color: var(--hljs-hue-4)
}
.hljs-attr,
.hljs-variable,
.hljs-template-variable,
.hljs-type,
.hljs-selector-class,
.hljs-selector-attr,
.hljs-selector-pseudo,
.hljs-number,
.hljs-punctuation,
.hljs-variable.language_ {
  color: var(--hljs-hue-6)
}
.hljs-symbol,
.hljs-bullet,
.hljs-link,
.hljs-meta,
.hljs-selector-id,
.hljs-title,
.hljs-title.function_,
.hljs-property,
.hljs-tag,
.hljs-char.escape_ {
  color: var(--hljs-hue-2)
}
.hljs-built_in,
.hljs-title.class_,
.hljs-title.class_.inherited__,
.hljs-class .hljs-title {
  color: var(--hljs-hue-6-2)
}
.hljs-emphasis {
  font-style: italic
}
.hljs-strong {
  font-weight: bold
}
.hljs-link {
  text-decoration: underline
}
.hljs-params,
.hljs-operator,
.hljs-template-tag {
  color: var(--hljs-hue-7)
}`,
  'cybertopia-dimmer.css': `pre code.hljs {
  display: block;
  overflow-x: auto;
  padding: 1em
}
code.hljs {
  padding: 3px 5px
}
/*
  Theme: Cybertopia Dimmer
  Author: Alexandre ZANNI (noraj)
  Repository: https://github.com/noraj/cybertopia-highlightjs
*/
:root {
  --hljs-bg: #101010;
  --hljs-mono-1: #abb2bf;
  --hljs-mono-3: #5c6370;
  --hljs-hue-1: #97C502;
  --hljs-hue-2: #469EBE;
  --hljs-hue-3: #A246BE;
  --hljs-hue-4: #02c797;
  --hljs-hue-5: #C50233;
  --hljs-hue-6: #BE6446;
  --hljs-hue-6-2: #c5bb02;
  --hljs-hue-7: #64BE46
}
.code-block-wrapper, .hljs {
  color: var(--hljs-mono-1);
  background: var(--hljs-bg)
}
.hljs-comment,
.hljs-quote,
.hljs-code {
  color: var(--hljs-mono-3);
  font-style: italic
}
.hljs-doctag,
.hljs-keyword,
.hljs-formula,
.hljs-meta .hljs-keyword {
  color: var(--hljs-hue-3)
}
.hljs-section,
.hljs-name,
.hljs-selector-tag,
.hljs-deletion,
.hljs-subst {
  color: var(--hljs-hue-5)
}
.hljs-literal {
  color: var(--hljs-hue-1)
}
.hljs-string,
.hljs-regexp,
.hljs-addition,
.hljs-attribute,
.hljs-meta .hljs-string {
  color: var(--hljs-hue-4)
}
.hljs-attr,
.hljs-variable,
.hljs-template-variable,
.hljs-type,
.hljs-selector-class,
.hljs-selector-attr,
.hljs-selector-pseudo,
.hljs-number,
.hljs-punctuation,
.hljs-variable.language_ {
  color: var(--hljs-hue-6)
}
.hljs-symbol,
.hljs-bullet,
.hljs-link,
.hljs-meta,
.hljs-selector-id,
.hljs-title,
.hljs-title.function_,
.hljs-property,
.hljs-tag,
.hljs-char.escape_ {
  color: var(--hljs-hue-2)
}
.hljs-built_in,
.hljs-title.class_,
.hljs-title.class_.inherited__,
.hljs-class .hljs-title {
  color: var(--hljs-hue-6-2)
}
.hljs-emphasis {
  font-style: italic
}
.hljs-strong {
  font-weight: bold
}
.hljs-link {
  text-decoration: underline
}
.hljs-params,
.hljs-operator,
.hljs-template-tag {
  color: var(--hljs-hue-7)
}`,
  'cybertopia-icecap.css': `pre code.hljs {
  display: block;
  overflow-x: auto;
  padding: 1em
}
code.hljs {
  padding: 3px 5px
}
/*
  Theme: Cybertopia Icecap
  Author: Alexandre ZANNI (noraj)
  Repository: https://github.com/noraj/cybertopia-highlightjs
*/
:root {
  --hljs-bg: #101010;
  --hljs-mono-1: #abb2bf;
  --hljs-mono-3: #5c6370;
  --hljs-hue-1: #0274C5;
  --hljs-hue-2: #025AC5;
  --hljs-hue-3: #0240C5;
  --hljs-hue-4: #02c797;
  --hljs-hue-5: #02C5AE;
  --hljs-hue-6: #02C2C5;
  --hljs-hue-6-2: #02A8C5;
  --hljs-hue-7: #028EC5
}
.code-block-wrapper, .hljs {
  color: var(--hljs-mono-1);
  background: var(--hljs-bg)
}
.hljs-comment,
.hljs-quote,
.hljs-code {
  color: var(--hljs-mono-3);
  font-style: italic
}
.hljs-doctag,
.hljs-keyword,
.hljs-formula,
.hljs-meta .hljs-keyword {
  color: var(--hljs-hue-3)
}
.hljs-section,
.hljs-name,
.hljs-selector-tag,
.hljs-deletion,
.hljs-subst {
  color: var(--hljs-hue-5)
}
.hljs-literal {
  color: var(--hljs-hue-1)
}
.hljs-string,
.hljs-regexp,
.hljs-addition,
.hljs-attribute,
.hljs-meta .hljs-string {
  color: var(--hljs-hue-4)
}
.hljs-attr,
.hljs-variable,
.hljs-template-variable,
.hljs-type,
.hljs-selector-class,
.hljs-selector-attr,
.hljs-selector-pseudo,
.hljs-number,
.hljs-punctuation,
.hljs-variable.language_ {
  color: var(--hljs-hue-6)
}
.hljs-symbol,
.hljs-bullet,
.hljs-link,
.hljs-meta,
.hljs-selector-id,
.hljs-title,
.hljs-title.function_,
.hljs-property,
.hljs-tag,
.hljs-char.escape_ {
  color: var(--hljs-hue-2)
}
.hljs-built_in,
.hljs-title.class_,
.hljs-title.class_.inherited__,
.hljs-class .hljs-title {
  color: var(--hljs-hue-6-2)
}
.hljs-emphasis {
  font-style: italic
}
.hljs-strong {
  font-weight: bold
}
.hljs-link {
  text-decoration: underline
}
.hljs-params,
.hljs-operator,
.hljs-template-tag {
  color: var(--hljs-hue-7)
}`,
  'cybertopia-saturated.css': `pre code.hljs {
  display: block;
  overflow-x: auto;
  padding: 1em
}
code.hljs {
  padding: 3px 5px
}
/*
  Theme: Cybertopia Saturated
  Author: Alexandre ZANNI (noraj)
  Repository: https://github.com/noraj/cybertopia-highlightjs
*/
:root {
  --hljs-bg: #101010;
  --hljs-mono-1: #abb2bf;
  --hljs-mono-3: #5c6370;
  --hljs-hue-1: #5AF202;
  --hljs-hue-2: #08B7FD;
  --hljs-hue-3: #E917FD;
  --hljs-hue-4: #02c797;
  --hljs-hue-5: #E30202;
  --hljs-hue-6: #FD9926;
  --hljs-hue-6-2: #ffea00;
  --hljs-hue-7: #35FD56
}
.code-block-wrapper, .hljs {
  color: var(--hljs-mono-1);
  background: var(--hljs-bg)
}
.hljs-comment,
.hljs-quote,
.hljs-code {
  color: var(--hljs-mono-3);
  font-style: italic
}
.hljs-doctag,
.hljs-keyword,
.hljs-formula,
.hljs-meta .hljs-keyword {
  color: var(--hljs-hue-3)
}
.hljs-section,
.hljs-name,
.hljs-selector-tag,
.hljs-deletion,
.hljs-subst {
  color: var(--hljs-hue-5)
}
.hljs-literal {
  color: var(--hljs-hue-1)
}
.hljs-string,
.hljs-regexp,
.hljs-addition,
.hljs-attribute,
.hljs-meta .hljs-string {
  color: var(--hljs-hue-4)
}
.hljs-attr,
.hljs-variable,
.hljs-template-variable,
.hljs-type,
.hljs-selector-class,
.hljs-selector-attr,
.hljs-selector-pseudo,
.hljs-number,
.hljs-punctuation,
.hljs-variable.language_ {
  color: var(--hljs-hue-6)
}
.hljs-symbol,
.hljs-bullet,
.hljs-link,
.hljs-meta,
.hljs-selector-id,
.hljs-title,
.hljs-title.function_,
.hljs-property,
.hljs-tag,
.hljs-char.escape_ {
  color: var(--hljs-hue-2)
}
.hljs-built_in,
.hljs-title.class_,
.hljs-title.class_.inherited__,
.hljs-class .hljs-title {
  color: var(--hljs-hue-6-2)
}
.hljs-emphasis {
  font-style: italic
}
.hljs-strong {
  font-weight: bold
}
.hljs-link {
  text-decoration: underline
}
.hljs-params,
.hljs-operator,
.hljs-template-tag {
  color: var(--hljs-hue-7)
}`,
  'dark.css': `pre code.hljs {
  display: block;
  overflow-x: auto;
  padding: 1em
}
code.hljs {
  padding: 3px 5px
}
/*

Dark style from softwaremaniacs.org (c) Ivan Sagalaev <Maniac@SoftwareManiacs.Org>

*/
.code-block-wrapper, .hljs {
  color: #ddd;
  background: #303030
}
.hljs-keyword,
.hljs-selector-tag,
.hljs-literal,
.hljs-section,
.hljs-link {
  color: white
}
.hljs-subst {
  /* default */
  
}
.hljs-string,
.hljs-title,
.hljs-name,
.hljs-type,
.hljs-attribute,
.hljs-symbol,
.hljs-bullet,
.hljs-built_in,
.hljs-addition,
.hljs-variable,
.hljs-template-tag,
.hljs-template-variable {
  color: #d88
}
.hljs-comment,
.hljs-quote,
.hljs-deletion,
.hljs-meta {
  color: #979797
}
.hljs-keyword,
.hljs-selector-tag,
.hljs-literal,
.hljs-title,
.hljs-section,
.hljs-doctag,
.hljs-type,
.hljs-name,
.hljs-strong {
  font-weight: bold
}
.hljs-emphasis {
  font-style: italic
}`,
  'default.css': `pre code.hljs {
  display: block;
  overflow-x: auto;
  padding: 1em
}
code.hljs {
  padding: 3px 5px
}
/*!
  Theme: Default
  Description: Original highlight.js style
  Author: (c) Ivan Sagalaev <maniac@softwaremaniacs.org>
  Maintainer: @highlightjs/core-team
  Website: https://highlightjs.org/
  License: see project LICENSE
  Touched: 2021
*/
/*
This is left on purpose making default.css the single file that can be lifted
as-is from the repository directly without the need for a build step

Typically this "required" baseline CSS is added by \`makestuff.js\` during build.
*/
pre code.hljs {
  display: block;
  overflow-x: auto;
  padding: 1em
}
code.hljs {
  padding: 3px 5px
}
/* end baseline CSS */
.code-block-wrapper, .hljs {
  background: #F3F3F3;
  color: #444
}
/* Base color: saturation 0; */
.hljs-subst {
  /* default */
  
}
/* purposely ignored */
.hljs-formula,
.hljs-attr,
.hljs-property,
.hljs-params {
  
}
.hljs-comment {
  color: #697070
}
.hljs-tag,
.hljs-punctuation {
  color: #444a
}
.hljs-tag .hljs-name,
.hljs-tag .hljs-attr {
  color: #444
}
.hljs-keyword,
.hljs-attribute,
.hljs-selector-tag,
.hljs-meta .hljs-keyword,
.hljs-doctag,
.hljs-name {
  font-weight: bold
}
/* User color: hue: 0 */
.hljs-type,
.hljs-string,
.hljs-number,
.hljs-selector-id,
.hljs-selector-class,
.hljs-quote,
.hljs-template-tag,
.hljs-deletion {
  color: #880000
}
.hljs-title,
.hljs-section {
  color: #880000;
  font-weight: bold
}
.hljs-regexp,
.hljs-symbol,
.hljs-variable,
.hljs-template-variable,
.hljs-link,
.hljs-selector-attr,
.hljs-operator,
.hljs-selector-pseudo {
  color: #ab5656
}
/* Language color: hue: 90; */
.hljs-literal {
  color: #695
}
.hljs-built_in,
.hljs-bullet,
.hljs-code,
.hljs-addition {
  color: #397300
}
/* Meta color: hue: 200 */
.hljs-meta {
  color: #1f7199
}
.hljs-meta .hljs-string {
  color: #38a
}
/* Misc effects */
.hljs-emphasis {
  font-style: italic
}
.hljs-strong {
  font-weight: bold
}`,
  'devibeans.css': `pre code.hljs {
  display: block;
  overflow-x: auto;
  padding: 1em
}
code.hljs {
  padding: 3px 5px
}
/*!
    Theme: devibeans (dark)
    Author: @terminaldweller
    Maintainer: @terminaldweller

    Inspired by vim's jellybeans theme (https://github.com/nanotech/jellybeans.vim)
*/
.code-block-wrapper, .hljs {
  background: #000000;
  color: #a39e9b
}
.hljs-attr,
.hljs-template-tag {
  color: #8787d7
}
.hljs-comment,
.hljs-doctag,
.hljs-quote {
  color: #339966
}
.hljs-params {
  color: #a39e9b
}
.hljs-regexp {
  color: #d700ff
}
.hljs-tag,
.hljs-selector-id,
.hljs-number,
.hljs-literal {
  color: #ef5350
}
.hljs-meta,
.hljs-meta .hljs-keyword {
  color: #0087ff
}
/* opt-out */
.hljs-operator,
.hljs-punctuation {
  
}
.hljs-selector-class,
.hljs-code,
.hljs-formula,
.hljs-variable,
.hljs-template-variable,
.hljs-selector-attr,
.hljs-selector-pseudo,
.hljs-link,
.hljs-keyword {
  color: #64b5f6
}
.hljs-built_in,
.hljs-title,
.hljs-deletion {
  color: #ff8700
}
.hljs-type,
.hljs-section,
.hljs-function,
.hljs-name,
.hljs-property,
.hljs-attribute {
  color: #ffd75f
}
.hljs-meta .hljs-string,
.hljs-string,
.hljs-subst,
.hljs-symbol,
.hljs-bullet,
.hljs-addition {
  color: #558b2f
}
.hljs-selector-tag {
  color: #9966ff
}
.hljs-emphasis {
  font-style: italic
}
.hljs-strong {
  font-weight: bold
}`,
  'docco.css': `pre code.hljs {
  display: block;
  overflow-x: auto;
  padding: 1em
}
code.hljs {
  padding: 3px 5px
}
/*
Docco style used in http://jashkenas.github.com/docco/ converted by Simon Madine (@thingsinjars)
*/
.code-block-wrapper, .hljs {
  color: #000;
  background: #f8f8ff
}
.hljs-comment,
.hljs-quote {
  color: #408080;
  font-style: italic
}
.hljs-keyword,
.hljs-selector-tag,
.hljs-literal,
.hljs-subst {
  color: #954121
}
.hljs-number {
  color: #40a070
}
.hljs-string,
.hljs-doctag {
  color: #219161
}
.hljs-selector-id,
.hljs-selector-class,
.hljs-section,
.hljs-type {
  color: #19469d
}
.hljs-params {
  color: #00f
}
.hljs-title {
  color: #458;
  font-weight: bold
}
.hljs-tag,
.hljs-name,
.hljs-attribute {
  color: #000080;
  font-weight: normal
}
.hljs-variable,
.hljs-template-variable {
  color: #008080
}
.hljs-regexp,
.hljs-link {
  color: #b68
}
.hljs-symbol,
.hljs-bullet {
  color: #990073
}
.hljs-built_in {
  color: #0086b3
}
.hljs-meta {
  color: #999;
  font-weight: bold
}
.hljs-deletion {
  background: #fdd
}
.hljs-addition {
  background: #dfd
}
.hljs-emphasis {
  font-style: italic
}
.hljs-strong {
  font-weight: bold
}`,
  'far.css': `pre code.hljs {
  display: block;
  overflow-x: auto;
  padding: 1em
}
code.hljs {
  padding: 3px 5px
}
/*

FAR Style (c) MajestiC <majestic2k@gmail.com>

*/
.code-block-wrapper, .hljs {
  color: #0ff;
  background: #000080
}
.hljs-subst {
  /* default */
  
}
.hljs-string,
.hljs-attribute,
.hljs-symbol,
.hljs-bullet,
.hljs-built_in,
.hljs-template-tag,
.hljs-template-variable,
.hljs-addition {
  color: #ff0
}
.hljs-keyword,
.hljs-selector-tag,
.hljs-section,
.hljs-type,
.hljs-name,
.hljs-selector-id,
.hljs-selector-class,
.hljs-variable {
  color: #fff
}
.hljs-comment,
.hljs-quote,
.hljs-doctag,
.hljs-deletion {
  color: #888
}
.hljs-number,
.hljs-regexp,
.hljs-literal,
.hljs-link {
  color: #0f0
}
.hljs-meta {
  color: #008080
}
.hljs-keyword,
.hljs-selector-tag,
.hljs-title,
.hljs-section,
.hljs-name,
.hljs-strong {
  font-weight: bold
}
.hljs-emphasis {
  font-style: italic
}`,
  'felipec.css': `pre code.hljs {
  display: block;
  overflow-x: auto;
  padding: 1em
}
code.hljs {
  padding: 3px 5px
}
/*!
 * Theme: FelipeC
 * Author: (c) 2021 Felipe Contreras <felipe.contreras@gmail.com>
 * Website: https://github.com/felipec/vim-felipec
 *
 * Autogenerated with vim-felipec's generator.
*/
.code-block-wrapper, .hljs {
  color: #dedde4;
  background-color: #1d1c21
}
.hljs::selection,
.hljs ::selection {
  color: #1d1c21;
  background-color: #ba9cef
}
.hljs-comment,
.hljs-code,
.hljs-quote {
  color: #9e9da4
}
.hljs-number,
.hljs-literal,
.hljs-deletion {
  color: #f09080
}
.hljs-punctuation,
.hljs-meta,
.hljs-operator,
.hljs-subst,
.hljs-doctag,
.hljs-template-variable,
.hljs-selector-attr {
  color: #ffbb7b
}
.hljs-type {
  color: #fddb7c
}
.hljs-tag,
.hljs-title,
.hljs-selector-class,
.hljs-selector-id {
  color: #c4da7d
}
.hljs-string,
.hljs-regexp,
.hljs-addition {
  color: #93e4a4
}
.hljs-class,
.hljs-property {
  color: #65e7d1
}
.hljs-name,
.hljs-selector-tag {
  color: #30c2d8
}
.hljs-keyword,
.hljs-built_in {
  color: #5fb8f2
}
.hljs-section,
.hljs-bullet {
  color: #90aafa
}
.hljs-selector-pseudo {
  color: #ba9cef
}
.hljs-variable,
.hljs-params,
.hljs-attr,
.hljs-attribute {
  color: #d991d2
}
.hljs-symbol,
.hljs-link {
  color: #ec8dab
}
.hljs-strong,
.hljs-literal,
.hljs-title {
  font-weight: bold
}
.hljs-emphasis {
  font-style: italic
}`,
  'foundation.css': `pre code.hljs {
  display: block;
  overflow-x: auto;
  padding: 1em
}
code.hljs {
  padding: 3px 5px
}
/*
Description: Foundation 4 docs style for highlight.js
Author: Dan Allen <dan.j.allen@gmail.com>
Website: http://foundation.zurb.com/docs/
Version: 1.0
Date: 2013-04-02
*/
.code-block-wrapper, .hljs {
  background: #eee;
  color: black
}
.hljs-link,
.hljs-emphasis,
.hljs-attribute,
.hljs-addition {
  color: #070
}
.hljs-emphasis {
  font-style: italic
}
.hljs-strong,
.hljs-string,
.hljs-deletion {
  color: #d14
}
.hljs-strong {
  font-weight: bold
}
.hljs-quote,
.hljs-comment {
  color: #998;
  font-style: italic
}
.hljs-section,
.hljs-title {
  color: #900
}
.hljs-class .hljs-title,
.hljs-title.class_,
.hljs-type {
  color: #458
}
.hljs-variable,
.hljs-template-variable {
  color: #336699
}
.hljs-bullet {
  color: #997700
}
.hljs-meta {
  color: #3344bb
}
.hljs-code,
.hljs-number,
.hljs-literal,
.hljs-keyword,
.hljs-selector-tag {
  color: #099
}
.hljs-regexp {
  background-color: #fff0ff;
  color: #880088
}
.hljs-symbol {
  color: #990073
}
.hljs-tag,
.hljs-name,
.hljs-selector-id,
.hljs-selector-class {
  color: #007700
}`,
  'github-dark-dimmed.css': `pre code.hljs {
  display: block;
  overflow-x: auto;
  padding: 1em
}
code.hljs {
  padding: 3px 5px
}
/*!
  Theme: GitHub Dark Dimmed
  Description: Dark dimmed theme as seen on github.com
  Author: github.com
  Maintainer: @Hirse
  Updated: 2021-05-15

  Colors taken from GitHub's CSS
*/
.code-block-wrapper, .hljs {
  color: #adbac7;
  background: #22272e
}
.hljs-doctag,
.hljs-keyword,
.hljs-meta .hljs-keyword,
.hljs-template-tag,
.hljs-template-variable,
.hljs-type,
.hljs-variable.language_ {
  /* prettylights-syntax-keyword */
  color: #f47067
}
.hljs-title,
.hljs-title.class_,
.hljs-title.class_.inherited__,
.hljs-title.function_ {
  /* prettylights-syntax-entity */
  color: #dcbdfb
}
.hljs-attr,
.hljs-attribute,
.hljs-literal,
.hljs-meta,
.hljs-number,
.hljs-operator,
.hljs-variable,
.hljs-selector-attr,
.hljs-selector-class,
.hljs-selector-id {
  /* prettylights-syntax-constant */
  color: #6cb6ff
}
.hljs-regexp,
.hljs-string,
.hljs-meta .hljs-string {
  /* prettylights-syntax-string */
  color: #96d0ff
}
.hljs-built_in,
.hljs-symbol {
  /* prettylights-syntax-variable */
  color: #f69d50
}
.hljs-comment,
.hljs-code,
.hljs-formula {
  /* prettylights-syntax-comment */
  color: #768390
}
.hljs-name,
.hljs-quote,
.hljs-selector-tag,
.hljs-selector-pseudo {
  /* prettylights-syntax-entity-tag */
  color: #8ddb8c
}
.hljs-subst {
  /* prettylights-syntax-storage-modifier-import */
  color: #adbac7
}
.hljs-section {
  /* prettylights-syntax-markup-heading */
  color: #316dca;
  font-weight: bold
}
.hljs-bullet {
  /* prettylights-syntax-markup-list */
  color: #eac55f
}
.hljs-emphasis {
  /* prettylights-syntax-markup-italic */
  color: #adbac7;
  font-style: italic
}
.hljs-strong {
  /* prettylights-syntax-markup-bold */
  color: #adbac7;
  font-weight: bold
}
.hljs-addition {
  /* prettylights-syntax-markup-inserted */
  color: #b4f1b4;
  background-color: #1b4721
}
.hljs-deletion {
  /* prettylights-syntax-markup-deleted */
  color: #ffd8d3;
  background-color: #78191b
}
.hljs-char.escape_,
.hljs-link,
.hljs-params,
.hljs-property,
.hljs-punctuation,
.hljs-tag {
  /* purposely ignored */
  
}`,
  'github-dark.css': `pre code.hljs {
  display: block;
  overflow-x: auto;
  padding: 1em
}
code.hljs {
  padding: 3px 5px
}
/*!
  Theme: GitHub Dark
  Description: Dark theme as seen on github.com
  Author: github.com
  Maintainer: @Hirse
  Updated: 2021-05-15

  Outdated base version: https://github.com/primer/github-syntax-dark
  Current colors taken from GitHub's CSS
*/
.code-block-wrapper, .hljs {
  color: #c9d1d9;
  background: #0d1117
}
.hljs-doctag,
.hljs-keyword,
.hljs-meta .hljs-keyword,
.hljs-template-tag,
.hljs-template-variable,
.hljs-type,
.hljs-variable.language_ {
  /* prettylights-syntax-keyword */
  color: #ff7b72
}
.hljs-title,
.hljs-title.class_,
.hljs-title.class_.inherited__,
.hljs-title.function_ {
  /* prettylights-syntax-entity */
  color: #d2a8ff
}
.hljs-attr,
.hljs-attribute,
.hljs-literal,
.hljs-meta,
.hljs-number,
.hljs-operator,
.hljs-variable,
.hljs-selector-attr,
.hljs-selector-class,
.hljs-selector-id {
  /* prettylights-syntax-constant */
  color: #79c0ff
}
.hljs-regexp,
.hljs-string,
.hljs-meta .hljs-string {
  /* prettylights-syntax-string */
  color: #a5d6ff
}
.hljs-built_in,
.hljs-symbol {
  /* prettylights-syntax-variable */
  color: #ffa657
}
.hljs-comment,
.hljs-code,
.hljs-formula {
  /* prettylights-syntax-comment */
  color: #8b949e
}
.hljs-name,
.hljs-quote,
.hljs-selector-tag,
.hljs-selector-pseudo {
  /* prettylights-syntax-entity-tag */
  color: #7ee787
}
.hljs-subst {
  /* prettylights-syntax-storage-modifier-import */
  color: #c9d1d9
}
.hljs-section {
  /* prettylights-syntax-markup-heading */
  color: #1f6feb;
  font-weight: bold
}
.hljs-bullet {
  /* prettylights-syntax-markup-list */
  color: #f2cc60
}
.hljs-emphasis {
  /* prettylights-syntax-markup-italic */
  color: #c9d1d9;
  font-style: italic
}
.hljs-strong {
  /* prettylights-syntax-markup-bold */
  color: #c9d1d9;
  font-weight: bold
}
.hljs-addition {
  /* prettylights-syntax-markup-inserted */
  color: #aff5b4;
  background-color: #033a16
}
.hljs-deletion {
  /* prettylights-syntax-markup-deleted */
  color: #ffdcd7;
  background-color: #67060c
}
.hljs-char.escape_,
.hljs-link,
.hljs-params,
.hljs-property,
.hljs-punctuation,
.hljs-tag {
  /* purposely ignored */
  
}`,
  'github.css': `pre code.hljs {
  display: block;
  overflow-x: auto;
  padding: 1em
}
code.hljs {
  padding: 3px 5px
}
/*!
  Theme: GitHub
  Description: Light theme as seen on github.com
  Author: github.com
  Maintainer: @Hirse
  Updated: 2021-05-15

  Outdated base version: https://github.com/primer/github-syntax-light
  Current colors taken from GitHub's CSS
*/
.code-block-wrapper, .hljs {
  color: #24292e;
  background: #ffffff
}
.hljs-doctag,
.hljs-keyword,
.hljs-meta .hljs-keyword,
.hljs-template-tag,
.hljs-template-variable,
.hljs-type,
.hljs-variable.language_ {
  /* prettylights-syntax-keyword */
  color: #d73a49
}
.hljs-title,
.hljs-title.class_,
.hljs-title.class_.inherited__,
.hljs-title.function_ {
  /* prettylights-syntax-entity */
  color: #6f42c1
}
.hljs-attr,
.hljs-attribute,
.hljs-literal,
.hljs-meta,
.hljs-number,
.hljs-operator,
.hljs-variable,
.hljs-selector-attr,
.hljs-selector-class,
.hljs-selector-id {
  /* prettylights-syntax-constant */
  color: #005cc5
}
.hljs-regexp,
.hljs-string,
.hljs-meta .hljs-string {
  /* prettylights-syntax-string */
  color: #032f62
}
.hljs-built_in,
.hljs-symbol {
  /* prettylights-syntax-variable */
  color: #e36209
}
.hljs-comment,
.hljs-code,
.hljs-formula {
  /* prettylights-syntax-comment */
  color: #6a737d
}
.hljs-name,
.hljs-quote,
.hljs-selector-tag,
.hljs-selector-pseudo {
  /* prettylights-syntax-entity-tag */
  color: #22863a
}
.hljs-subst {
  /* prettylights-syntax-storage-modifier-import */
  color: #24292e
}
.hljs-section {
  /* prettylights-syntax-markup-heading */
  color: #005cc5;
  font-weight: bold
}
.hljs-bullet {
  /* prettylights-syntax-markup-list */
  color: #735c0f
}
.hljs-emphasis {
  /* prettylights-syntax-markup-italic */
  color: #24292e;
  font-style: italic
}
.hljs-strong {
  /* prettylights-syntax-markup-bold */
  color: #24292e;
  font-weight: bold
}
.hljs-addition {
  /* prettylights-syntax-markup-inserted */
  color: #22863a;
  background-color: #f0fff4
}
.hljs-deletion {
  /* prettylights-syntax-markup-deleted */
  color: #b31d28;
  background-color: #ffeef0
}
.hljs-char.escape_,
.hljs-link,
.hljs-params,
.hljs-property,
.hljs-punctuation,
.hljs-tag {
  /* purposely ignored */
  
}`,
  'gml.css': `pre code.hljs {
  display: block;
  overflow-x: auto;
  padding: 1em
}
code.hljs {
  padding: 3px 5px
}
/*

GML Theme - Meseta <meseta@gmail.com>

*/
.code-block-wrapper, .hljs {
  background: #222222;
  color: #C0C0C0
}
.hljs-keyword {
  color: #FFB871;
  font-weight: bold
}
.hljs-built_in {
  color: #FFB871
}
.hljs-literal {
  color: #FF8080
}
.hljs-symbol {
  color: #58E55A
}
.hljs-comment {
  color: #5B995B
}
.hljs-string {
  color: #FFFF00
}
.hljs-number {
  color: #FF8080
}
.hljs-attribute,
.hljs-selector-tag,
.hljs-doctag,
.hljs-name,
.hljs-bullet,
.hljs-code,
.hljs-addition,
.hljs-regexp,
.hljs-variable,
.hljs-template-variable,
.hljs-link,
.hljs-selector-attr,
.hljs-selector-pseudo,
.hljs-type,
.hljs-selector-id,
.hljs-selector-class,
.hljs-quote,
.hljs-template-tag,
.hljs-deletion,
.hljs-title,
.hljs-section,
.hljs-function,
.hljs-meta .hljs-keyword,
.hljs-meta,
.hljs-subst {
  color: #C0C0C0
}
.hljs-emphasis {
  font-style: italic
}
.hljs-strong {
  font-weight: bold
}`,
  'googlecode.css': `pre code.hljs {
  display: block;
  overflow-x: auto;
  padding: 1em
}
code.hljs {
  padding: 3px 5px
}
/*

Google Code style (c) Aahan Krish <geekpanth3r@gmail.com>

*/
.code-block-wrapper, .hljs {
  background: white;
  color: black
}
.hljs-comment,
.hljs-quote {
  color: #800
}
.hljs-keyword,
.hljs-selector-tag,
.hljs-section,
.hljs-title,
.hljs-name {
  color: #008
}
.hljs-variable,
.hljs-template-variable {
  color: #660
}
.hljs-string,
.hljs-selector-attr,
.hljs-selector-pseudo,
.hljs-regexp {
  color: #080
}
.hljs-literal,
.hljs-symbol,
.hljs-bullet,
.hljs-meta,
.hljs-number,
.hljs-link {
  color: #066
}
.hljs-title,
.hljs-doctag,
.hljs-type,
.hljs-attr,
.hljs-built_in,
.hljs-params {
  color: #606
}
.hljs-attribute,
.hljs-subst {
  color: #000
}
.hljs-formula {
  background-color: #eee;
  font-style: italic
}
.hljs-selector-id,
.hljs-selector-class {
  color: #9B703F
}
.hljs-addition {
  background-color: #baeeba
}
.hljs-deletion {
  background-color: #ffc8bd
}
.hljs-doctag,
.hljs-strong {
  font-weight: bold
}
.hljs-emphasis {
  font-style: italic
}`,
  'gradient-dark.css': `pre code.hljs {
  display: block;
  overflow-x: auto;
  padding: 1em
}
code.hljs {
  padding: 3px 5px
}
/*

Gradient Dark (c) Samia Ali <samiaab1990@gmail.com>

*/
.code-block-wrapper, .hljs {
  background-color: #652487;
  background-image: linear-gradient(160deg, #652487 0%, #443ac3 35%, #0174b7 68%, #04988e 100%);
  color: #e7e4eb
}
.hljs-subtr {
  color: #e7e4eb
}
.hljs-doctag,
.hljs-meta,
.hljs-comment,
.hljs-quote {
  color: #af8dd9
}
.hljs-selector-tag,
.hljs-selector-id,
.hljs-template-tag,
.hljs-regexp,
.hljs-attr,
.hljs-tag {
  color: #AEFBFF
}
.hljs-params,
.hljs-selector-class,
.hljs-bullet {
  color: #F19FFF
}
.hljs-keyword,
.hljs-section,
.hljs-meta .hljs-keyword,
.hljs-symbol,
.hljs-type {
  color: #17fc95
}
.hljs-addition,
.hljs-number,
.hljs-link {
  color: #C5FE00
}
.hljs-string {
  color: #38c0ff
}
.hljs-attribute,
.hljs-addition {
  color: #E7FF9F
}
.hljs-variable,
.hljs-template-variable {
  color: #E447FF
}
.hljs-built_in,
.hljs-formula,
.hljs-name,
.hljs-title,
.hljs-class,
.hljs-function {
  color: #FFC800
}
.hljs-selector-pseudo,
.hljs-deletion,
.hljs-literal {
  color: #FF9E44
}
.hljs-emphasis,
.hljs-quote {
  font-style: italic
}
.hljs-params,
.hljs-selector-class,
.hljs-strong,
.hljs-selector-tag,
.hljs-selector-id,
.hljs-template-tag,
.hljs-section,
.hljs-keyword {
  font-weight: bold
}`,
  'gradient-light.css': `pre code.hljs {
  display: block;
  overflow-x: auto;
  padding: 1em
}
code.hljs {
  padding: 3px 5px
}
/*

Gradient Light (c) Samia Ali <samiaab1990@gmail.com>

*/
.code-block-wrapper, .hljs {
  background-color: #f9ccff;
  background-image: linear-gradient(295deg, #f9ccff 0%, #e6bbf9 11%, #9ec6f9 32%, #55e6ee 60%, #91f5d1 74%, #f9ffbf 98%);
  color: #250482
}
.hljs-subtr {
  color: #01958B
}
.hljs-doctag,
.hljs-meta,
.hljs-comment,
.hljs-quote {
  color: #CB7200
}
.hljs-selector-tag,
.hljs-selector-id,
.hljs-template-tag,
.hljs-regexp,
.hljs-attr,
.hljs-tag {
  color: #07BD5F
}
.hljs-params,
.hljs-selector-class,
.hljs-bullet {
  color: #43449F
}
.hljs-keyword,
.hljs-section,
.hljs-meta .hljs-keyword,
.hljs-symbol,
.hljs-type {
  color: #7D2801
}
.hljs-addition,
.hljs-number,
.hljs-link {
  color: #7F0096
}
.hljs-string {
  color: #2681ab
}
.hljs-attribute,
.hljs-addition {
  color: #296562
}
.hljs-variable,
.hljs-template-variable {
  color: #025C8F
}
.hljs-built_in,
.hljs-formula,
.hljs-name,
.hljs-title,
.hljs-class,
.hljs-function {
  color: #529117
}
.hljs-selector-pseudo,
.hljs-deletion,
.hljs-literal {
  color: #AD13FF
}
.hljs-emphasis,
.hljs-quote {
  font-style: italic
}
.hljs-params,
.hljs-selector-class,
.hljs-strong,
.hljs-selector-tag,
.hljs-selector-id,
.hljs-template-tag,
.hljs-section,
.hljs-keyword {
  font-weight: bold
}`,
  'grayscale.css': `pre code.hljs {
  display: block;
  overflow-x: auto;
  padding: 1em
}
code.hljs {
  padding: 3px 5px
}
/*

grayscale style (c) MY Sun <simonmysun@gmail.com>

*/
.code-block-wrapper, .hljs {
  color: #333;
  background: #fff
}
.hljs-comment,
.hljs-quote {
  color: #777;
  font-style: italic
}
.hljs-keyword,
.hljs-selector-tag,
.hljs-subst {
  color: #333;
  font-weight: bold
}
.hljs-number,
.hljs-literal {
  color: #777
}
.hljs-string,
.hljs-doctag,
.hljs-formula {
  color: #333;
  background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAAECAYAAACp8Z5+AAAAJ0lEQVQIW2O8e/fufwYGBgZBQUEQxcCIIfDu3Tuwivfv30NUoAsAALHpFMMLqZlPAAAAAElFTkSuQmCC) repeat
}
.hljs-title,
.hljs-section,
.hljs-selector-id {
  color: #000;
  font-weight: bold
}
.hljs-subst {
  font-weight: normal
}
.hljs-title.class_,
.hljs-class .hljs-title,
.hljs-type,
.hljs-name {
  color: #333;
  font-weight: bold
}
.hljs-tag {
  color: #333
}
.hljs-regexp {
  color: #333;
  background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAICAYAAADA+m62AAAAPUlEQVQYV2NkQAN37979r6yszIgujiIAU4RNMVwhuiQ6H6wQl3XI4oy4FMHcCJPHcDS6J2A2EqUQpJhohQDexSef15DBCwAAAABJRU5ErkJggg==) repeat
}
.hljs-symbol,
.hljs-bullet,
.hljs-link {
  color: #000;
  background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAAFCAYAAACNbyblAAAAKElEQVQIW2NkQAO7d+/+z4gsBhJwdXVlhAvCBECKwIIwAbhKZBUwBQA6hBpm5efZsgAAAABJRU5ErkJggg==) repeat
}
.hljs-built_in {
  color: #000;
  text-decoration: underline
}
.hljs-meta {
  color: #999;
  font-weight: bold
}
.hljs-deletion {
  color: #fff;
  background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAADCAYAAABS3WWCAAAAE0lEQVQIW2MMDQ39zzhz5kwIAQAyxweWgUHd1AAAAABJRU5ErkJggg==) repeat
}
.hljs-addition {
  color: #000;
  background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAkAAAAJCAYAAADgkQYQAAAALUlEQVQYV2N89+7dfwYk8P79ewZBQUFkIQZGOiu6e/cuiptQHAPl0NtNxAQBAM97Oejj3Dg7AAAAAElFTkSuQmCC) repeat
}
.hljs-emphasis {
  font-style: italic
}
.hljs-strong {
  font-weight: bold
}`,
  'hybrid.css': `pre code.hljs {
  display: block;
  overflow-x: auto;
  padding: 1em
}
code.hljs {
  padding: 3px 5px
}
/*

vim-hybrid theme by w0ng (https://github.com/w0ng/vim-hybrid)

*/
.code-block-wrapper, .hljs {
  background: #1d1f21;
  color: #c5c8c6
}
/*selection color*/
.hljs::selection,
.hljs span::selection {
  background: #373b41
}
.hljs::-moz-selection,
.hljs span::-moz-selection {
  background: #373b41
}
/*color: fg_yellow*/
.hljs-title,
.hljs-name {
  color: #f0c674
}
/*color: fg_comment*/
.hljs-comment,
.hljs-meta,
.hljs-meta .hljs-keyword {
  color: #707880
}
/*color: fg_red*/
.hljs-number,
.hljs-symbol,
.hljs-literal,
.hljs-deletion,
.hljs-link {
  color: #cc6666
}
/*color: fg_green*/
.hljs-string,
.hljs-doctag,
.hljs-addition,
.hljs-regexp,
.hljs-selector-attr,
.hljs-selector-pseudo {
  color: #b5bd68
}
/*color: fg_purple*/
.hljs-attribute,
.hljs-code,
.hljs-selector-id {
  color: #b294bb
}
/*color: fg_blue*/
.hljs-keyword,
.hljs-selector-tag,
.hljs-bullet,
.hljs-tag {
  color: #81a2be
}
/*color: fg_aqua*/
.hljs-subst,
.hljs-variable,
.hljs-template-tag,
.hljs-template-variable {
  color: #8abeb7
}
/*color: fg_orange*/
.hljs-type,
.hljs-built_in,
.hljs-quote,
.hljs-section,
.hljs-selector-class {
  color: #de935f
}
.hljs-emphasis {
  font-style: italic
}
.hljs-strong {
  font-weight: bold
}`,
  'idea.css': `pre code.hljs {
  display: block;
  overflow-x: auto;
  padding: 1em
}
code.hljs {
  padding: 3px 5px
}
/*

Intellij Idea-like styling (c) Vasily Polovnyov <vast@whiteants.net>

*/
.code-block-wrapper, .hljs {
  color: #000;
  background: #fff
}
.hljs-subst,
.hljs-title {
  font-weight: normal;
  color: #000
}
.hljs-comment,
.hljs-quote {
  color: #808080;
  font-style: italic
}
.hljs-meta {
  color: #808000
}
.hljs-tag {
  background: #efefef
}
.hljs-section,
.hljs-name,
.hljs-literal,
.hljs-keyword,
.hljs-selector-tag,
.hljs-type,
.hljs-selector-id,
.hljs-selector-class {
  font-weight: bold;
  color: #000080
}
.hljs-attribute,
.hljs-number,
.hljs-regexp,
.hljs-link {
  font-weight: bold;
  color: #0000ff
}
.hljs-number,
.hljs-regexp,
.hljs-link {
  font-weight: normal
}
.hljs-string {
  color: #008000;
  font-weight: bold
}
.hljs-symbol,
.hljs-bullet,
.hljs-formula {
  color: #000;
  background: #d0eded;
  font-style: italic
}
.hljs-doctag {
  text-decoration: underline
}
.hljs-variable,
.hljs-template-variable {
  color: #660e7a
}
.hljs-addition {
  background: #baeeba
}
.hljs-deletion {
  background: #ffc8bd
}
.hljs-emphasis {
  font-style: italic
}
.hljs-strong {
  font-weight: bold
}`,
  'intellij-light.css': `pre code.hljs {
  display: block;
  overflow-x: auto;
  padding: 1em
}
code.hljs {
  padding: 3px 5px
}
/*

Intellij-light style (c) Pegasis <me@pegasis.site>

*/
.code-block-wrapper, .hljs {
  color: #000;
  background: #fff
}
.hljs-subst,
.hljs-title {
  font-weight: normal;
  color: #000
}
.hljs-title.function_ {
  color: #7A7A43
}
.hljs-code,
.hljs-comment,
.hljs-quote {
  color: #8C8C8C;
  font-style: italic
}
.hljs-meta {
  color: #9E880D
}
.hljs-section {
  color: #871094
}
.hljs-variable.language_,
.hljs-symbol,
.hljs-selector-class,
.hljs-selector-id,
.hljs-selector-tag,
.hljs-template-tag,
.hljs-selector-attr,
.hljs-selector-pseudo,
.hljs-keyword,
.hljs-meta .hljs-keyword,
.hljs-literal,
.hljs-name,
.hljs-built_in,
.hljs-type {
  color: #0033B3
}
.hljs-property,
.hljs-attr {
  color: #871094
}
.hljs-attribute {
  color: #174AD4
}
.hljs-number {
  color: #1750EB
}
.hljs-regexp {
  color: #264EFF
}
.hljs-link {
  text-decoration: underline;
  color: #006DCC
}
.hljs-meta .hljs-string,
.hljs-string {
  color: #067D17
}
.hljs-char.escape_ {
  color: #0037A6
}
.hljs-doctag {
  text-decoration: underline
}
.hljs-template-variable {
  color: #248F8F
}
.hljs-addition {
  background: #BEE6BE
}
.hljs-deletion {
  background: #D6D6D6
}
.hljs-emphasis {
  font-style: italic
}
.hljs-strong {
  font-weight: bold
}
.hljs-variable,
.hljs-operator,
.hljs-punctuation,
.hljs-title.class_.inherited__,
.hljs-title.class_,
.hljs-params,
.hljs-bullet,
.hljs-formula,
.hljs-tag {
  /* purposely ignored */
  
}`,
  'ir-black.css': `pre code.hljs {
  display: block;
  overflow-x: auto;
  padding: 1em
}
code.hljs {
  padding: 3px 5px
}
/*
  IR_Black style (c) Vasily Mikhailitchenko <vaskas@programica.ru>
*/
.code-block-wrapper, .hljs {
  background: #000;
  color: #f8f8f8
}
.hljs-comment,
.hljs-quote,
.hljs-meta {
  color: #7c7c7c
}
.hljs-keyword,
.hljs-selector-tag,
.hljs-tag,
.hljs-name {
  color: #96cbfe
}
.hljs-attribute,
.hljs-selector-id {
  color: #ffffb6
}
.hljs-string,
.hljs-selector-attr,
.hljs-selector-pseudo,
.hljs-addition {
  color: #a8ff60
}
.hljs-subst {
  color: #daefa3
}
.hljs-regexp,
.hljs-link {
  color: #e9c062
}
.hljs-title,
.hljs-section,
.hljs-type,
.hljs-doctag {
  color: #ffffb6
}
.hljs-symbol,
.hljs-bullet,
.hljs-variable,
.hljs-template-variable,
.hljs-literal {
  color: #c6c5fe
}
.hljs-number,
.hljs-deletion {
  color: #ff73fd
}
.hljs-emphasis {
  font-style: italic
}
.hljs-strong {
  font-weight: bold
}`,
  'isbl-editor-dark.css': `pre code.hljs {
  display: block;
  overflow-x: auto;
  padding: 1em
}
code.hljs {
  padding: 3px 5px
}
/*

ISBL Editor style dark color scheme (c) Dmitriy Tarasov <dimatar@gmail.com>

*/
.code-block-wrapper, .hljs {
  background: #404040;
  color: #f0f0f0
}
/* Base color: saturation 0; */
.hljs,
.hljs-subst {
  color: #f0f0f0
}
.hljs-comment {
  color: #b5b5b5;
  font-style: italic
}
.hljs-keyword,
.hljs-attribute,
.hljs-selector-tag,
.hljs-meta .hljs-keyword,
.hljs-doctag,
.hljs-name {
  color: #f0f0f0;
  font-weight: bold
}
/* User color: hue: 0 */
.hljs-string {
  color: #97bf0d
}
.hljs-type,
.hljs-number,
.hljs-selector-id,
.hljs-selector-class,
.hljs-quote,
.hljs-template-tag,
.hljs-deletion {
  color: #f0f0f0
}
.hljs-regexp,
.hljs-symbol,
.hljs-variable,
.hljs-template-variable,
.hljs-link,
.hljs-selector-attr,
.hljs-selector-pseudo {
  color: #e2c696
}
/* Language color: hue: 90; */
.hljs-built_in,
.hljs-literal {
  color: #97bf0d;
  font-weight: bold
}
.hljs-bullet,
.hljs-code,
.hljs-addition {
  color: #397300
}
.hljs-class {
  color: #ce9d4d;
  font-weight: bold
}
.hljs-title,
.hljs-section {
  color: #df471e
}
.hljs-title>.hljs-built_in {
  color: #81bce9;
  font-weight: normal
}
/* Meta color: hue: 200 */
.hljs-meta {
  color: #1f7199
}
.hljs-meta .hljs-string {
  color: #4d99bf
}
/* Misc effects */
.hljs-emphasis {
  font-style: italic
}
.hljs-strong {
  font-weight: bold
}`,
  'isbl-editor-light.css': `pre code.hljs {
  display: block;
  overflow-x: auto;
  padding: 1em
}
code.hljs {
  padding: 3px 5px
}
/*

ISBL Editor style light color schemec (c) Dmitriy Tarasov <dimatar@gmail.com>

*/
.code-block-wrapper, .hljs {
  background: white;
  color: black
}
/* Base color: saturation 0; */
.hljs-subst {
  color: black
}
.hljs-comment {
  color: #555555;
  font-style: italic
}
.hljs-keyword,
.hljs-attribute,
.hljs-selector-tag,
.hljs-meta .hljs-keyword,
.hljs-doctag,
.hljs-name {
  color: #000000;
  font-weight: bold
}
/* User color: hue: 0 */
.hljs-string {
  color: #000080
}
.hljs-type,
.hljs-number,
.hljs-selector-id,
.hljs-selector-class,
.hljs-quote,
.hljs-template-tag,
.hljs-deletion {
  color: #000000
}
.hljs-regexp,
.hljs-symbol,
.hljs-variable,
.hljs-template-variable,
.hljs-link,
.hljs-selector-attr,
.hljs-selector-pseudo {
  color: #5e1700
}
/* Language color: hue: 90; */
.hljs-built_in,
.hljs-literal {
  color: #000080;
  font-weight: bold
}
.hljs-bullet,
.hljs-code,
.hljs-addition {
  color: #397300
}
.hljs-class {
  color: #6f1C00;
  font-weight: bold
}
.hljs-title,
.hljs-section {
  color: #fb2c00
}
.hljs-title>.hljs-built_in {
  color: #008080;
  font-weight: normal
}
/* Meta color: hue: 200 */
.hljs-meta {
  color: #1f7199
}
.hljs-meta .hljs-string {
  color: #4d99bf
}
/* Misc effects */
.hljs-emphasis {
  font-style: italic
}
.hljs-strong {
  font-weight: bold
}`,
  'kimbie-dark.css': `pre code.hljs {
  display: block;
  overflow-x: auto;
  padding: 1em
}
code.hljs {
  padding: 3px 5px
}
/*
    Name:     Kimbie (dark)
    Author:   Jan T. Sott
    License:  Creative Commons Attribution-ShareAlike 4.0 Unported License
    URL:      https://github.com/idleberg/Kimbie-highlight.js
*/
.code-block-wrapper, .hljs {
  background: #221a0f;
  color: #d3af86
}
/* Kimbie Comment */
.hljs-comment,
.hljs-quote {
  color: #d6baad
}
/* Kimbie Red */
.hljs-variable,
.hljs-template-variable,
.hljs-tag,
.hljs-name,
.hljs-selector-id,
.hljs-selector-class,
.hljs-regexp,
.hljs-meta {
  color: #dc3958
}
/* Kimbie Orange */
.hljs-number,
.hljs-built_in,
.hljs-literal,
.hljs-type,
.hljs-params,
.hljs-deletion,
.hljs-link {
  color: #f79a32
}
/* Kimbie Green */
.hljs-string,
.hljs-symbol,
.hljs-bullet,
.hljs-addition {
  color: #889b4a
}
/* Kimbie Purple */
.hljs-keyword,
.hljs-selector-tag,
.hljs-function {
  color: #98676a
}
/* Kimbie Yellow */
.hljs-title,
.hljs-section,
.hljs-attribute {
  color: #f06431
}
.hljs-emphasis {
  font-style: italic
}
.hljs-strong {
  font-weight: bold
}`,
  'kimbie-light.css': `pre code.hljs {
  display: block;
  overflow-x: auto;
  padding: 1em
}
code.hljs {
  padding: 3px 5px
}
/*
    Name:     Kimbie (light)
    Author:   Jan T. Sott
    License:  Creative Commons Attribution-ShareAlike 4.0 Unported License
    URL:      https://github.com/idleberg/Kimbie-highlight.js
*/
.code-block-wrapper, .hljs {
  background: #fbebd4;
  color: #84613d
}
/* Kimbie Comment */
.hljs-comment,
.hljs-quote {
  color: #a57a4c
}
/* Kimbie Red */
.hljs-variable,
.hljs-template-variable,
.hljs-tag,
.hljs-name,
.hljs-selector-id,
.hljs-selector-class,
.hljs-regexp,
.hljs-meta {
  color: #dc3958
}
/* Kimbie Orange */
.hljs-number,
.hljs-built_in,
.hljs-literal,
.hljs-type,
.hljs-params,
.hljs-deletion,
.hljs-link {
  color: #f79a32
}
/* Kimbie Green */
.hljs-string,
.hljs-symbol,
.hljs-bullet,
.hljs-addition {
  color: #889b4a
}
/* Kimbie Purple */
.hljs-keyword,
.hljs-selector-tag,
.hljs-function {
  color: #98676a
}
/* Kimbie Yellow */
.hljs-title,
.hljs-section,
.hljs-attribute {
  color: #f06431
}
.hljs-emphasis {
  font-style: italic
}
.hljs-strong {
  font-weight: bold
}`,
  'lightfair.css': `pre code.hljs {
  display: block;
  overflow-x: auto;
  padding: 1em
}
code.hljs {
  padding: 3px 5px
}
/*

Lightfair style (c) Tristian Kelly <tristian.kelly560@gmail.com>

*/
.code-block-wrapper, .hljs {
  color: #444;
  background: #fff
}
.hljs-name {
  color: #01a3a3
}
.hljs-tag,
.hljs-meta {
  color: #778899
}
.hljs-subst {
  /* default */
  
}
.hljs-comment {
  color: #888888
}
.hljs-keyword,
.hljs-attribute,
.hljs-selector-tag,
.hljs-meta .hljs-keyword,
.hljs-doctag,
.hljs-name {
  font-weight: bold
}
.hljs-type,
.hljs-string,
.hljs-number,
.hljs-selector-id,
.hljs-selector-class,
.hljs-quote,
.hljs-template-tag,
.hljs-deletion {
  color: #4286f4
}
.hljs-title,
.hljs-section {
  color: #4286f4;
  font-weight: bold
}
.hljs-regexp,
.hljs-symbol,
.hljs-variable,
.hljs-template-variable,
.hljs-link,
.hljs-selector-attr,
.hljs-selector-pseudo {
  color: #BC6060
}
.hljs-literal {
  color: #62bcbc
}
.hljs-built_in,
.hljs-bullet,
.hljs-code,
.hljs-addition {
  color: #25c6c6
}
.hljs-meta .hljs-string {
  color: #4d99bf
}
.hljs-emphasis {
  font-style: italic
}
.hljs-strong {
  font-weight: bold
}`,
  'lioshi.css': `pre code.hljs {
  display: block;
  overflow-x: auto;
  padding: 1em
}
code.hljs {
  padding: 3px 5px
}
/* lioshi Theme */
/* Original theme - https://github.com/lioshi/vscode-lioshi-theme */
.code-block-wrapper, .hljs {
  background: #303030;
  color: #c5c8c6
}
/* Comment */
.hljs-comment {
  color: #8d8d8d
}
/* quote */
.hljs-quote {
  color: #b3c7d8
}
/* Red */
.hljs-variable,
.hljs-template-variable,
.hljs-tag,
.hljs-name,
.hljs-selector-id,
.hljs-selector-class,
.hljs-regexp,
.hljs-deletion {
  color: #cc6666
}
/* Orange */
.hljs-number,
.hljs-built_in,
.hljs-literal,
.hljs-type,
.hljs-subst
.hljs-link {
  color: #de935f
}
/* Yellow */
.hljs-attribute {
  color: #f0c674
}
/* Green */
.hljs-string,
.hljs-bullet,
.hljs-params,
.hljs-addition {
  color: #b5bd68
}
/* Purple */
.hljs-selector-tag,
.hljs-keyword,
.hljs-function,
.hljs-class {
  color: #be94bb
}
/* Blue */
.hljs-title,
.hljs-meta,
.hljs-section {
  color: #81a2be
}
/* Purple light */
.hljs-symbol {
  color: #dbc4d9
}
.hljs-emphasis {
  font-style: italic
}
.hljs-strong {
  font-weight: bold
}`,
  'magula.css': `pre code.hljs {
  display: block;
  overflow-x: auto;
  padding: 1em
}
code.hljs {
  padding: 3px 5px
}
/*
Description: Magula style for highligh.js
Author: Ruslan Keba <rukeba@gmail.com>
Website: http://rukeba.com/
Version: 1.0
Date: 2009-01-03
Music: Aphex Twin / Xtal
*/
.code-block-wrapper, .hljs {
  background-color: #f4f4f4;
  color: black
}
.hljs-subst {
  color: black
}
.hljs-string,
.hljs-title,
.hljs-symbol,
.hljs-bullet,
.hljs-attribute,
.hljs-addition,
.hljs-variable,
.hljs-template-tag,
.hljs-template-variable {
  color: #050
}
.hljs-comment,
.hljs-quote {
  color: #777
}
.hljs-number,
.hljs-regexp,
.hljs-literal,
.hljs-type,
.hljs-link {
  color: #800
}
.hljs-deletion,
.hljs-meta {
  color: #00e
}
.hljs-keyword,
.hljs-selector-tag,
.hljs-doctag,
.hljs-title,
.hljs-section,
.hljs-built_in,
.hljs-tag,
.hljs-name {
  font-weight: bold;
  color: navy
}
.hljs-emphasis {
  font-style: italic
}
.hljs-strong {
  font-weight: bold
}`,
  'mono-blue.css': `pre code.hljs {
  display: block;
  overflow-x: auto;
  padding: 1em
}
code.hljs {
  padding: 3px 5px
}
/*
  Five-color theme from a single blue hue.
*/
.code-block-wrapper, .hljs {
  background: #eaeef3;
  color: #00193a
}
.hljs-keyword,
.hljs-selector-tag,
.hljs-title,
.hljs-section,
.hljs-doctag,
.hljs-name,
.hljs-strong {
  font-weight: bold
}
.hljs-comment {
  color: #738191
}
.hljs-string,
.hljs-title,
.hljs-section,
.hljs-built_in,
.hljs-literal,
.hljs-type,
.hljs-addition,
.hljs-tag,
.hljs-quote,
.hljs-name,
.hljs-selector-id,
.hljs-selector-class {
  color: #0048ab
}
.hljs-meta,
.hljs-subst,
.hljs-symbol,
.hljs-regexp,
.hljs-attribute,
.hljs-deletion,
.hljs-variable,
.hljs-template-variable,
.hljs-link,
.hljs-bullet {
  color: #4c81c9
}
.hljs-emphasis {
  font-style: italic
}`,
  'monokai-sublime.css': `pre code.hljs {
  display: block;
  overflow-x: auto;
  padding: 1em
}
code.hljs {
  padding: 3px 5px
}
/*

Monokai Sublime style. Derived from Monokai by noformnocontent http://nn.mit-license.org/

*/
.code-block-wrapper, .hljs {
  background: #23241f;
  color: #f8f8f2
}
.hljs-tag,
.hljs-subst {
  color: #f8f8f2
}
.hljs-strong,
.hljs-emphasis {
  color: #a8a8a2
}
.hljs-bullet,
.hljs-quote,
.hljs-number,
.hljs-regexp,
.hljs-literal,
.hljs-link {
  color: #ae81ff
}
.hljs-code,
.hljs-title,
.hljs-section,
.hljs-selector-class {
  color: #a6e22e
}
.hljs-strong {
  font-weight: bold
}
.hljs-emphasis {
  font-style: italic
}
.hljs-keyword,
.hljs-selector-tag,
.hljs-name,
.hljs-attr {
  color: #f92672
}
.hljs-symbol,
.hljs-attribute {
  color: #66d9ef
}
.hljs-params,
.hljs-title.class_,
.hljs-class .hljs-title {
  color: #f8f8f2
}
.hljs-string,
.hljs-type,
.hljs-built_in,
.hljs-selector-id,
.hljs-selector-attr,
.hljs-selector-pseudo,
.hljs-addition,
.hljs-variable,
.hljs-template-variable {
  color: #e6db74
}
.hljs-comment,
.hljs-deletion,
.hljs-meta {
  color: #75715e
}`,
  'monokai.css': `pre code.hljs {
  display: block;
  overflow-x: auto;
  padding: 1em
}
code.hljs {
  padding: 3px 5px
}
/*
Monokai style - ported by Luigi Maselli - http://grigio.org
*/
.code-block-wrapper, .hljs {
  background: #272822;
  color: #ddd
}
.hljs-tag,
.hljs-keyword,
.hljs-selector-tag,
.hljs-literal,
.hljs-strong,
.hljs-number,
.hljs-name {
  color: #f92672
}
.hljs-code {
  color: #66d9ef
}
.hljs-attribute,
.hljs-attr,
.hljs-symbol,
.hljs-regexp,
.hljs-link {
  color: #bf79db
}
.hljs-string,
.hljs-bullet,
.hljs-subst,
.hljs-title,
.hljs-section,
.hljs-emphasis,
.hljs-type,
.hljs-built_in,
.hljs-selector-attr,
.hljs-selector-pseudo,
.hljs-addition,
.hljs-variable,
.hljs-template-tag,
.hljs-template-variable {
  color: #a6e22e
}
.hljs-title.class_,
.hljs-class .hljs-title {
  color: white
}
.hljs-comment,
.hljs-quote,
.hljs-deletion,
.hljs-meta {
  color: #75715e
}
.hljs-keyword,
.hljs-selector-tag,
.hljs-literal,
.hljs-doctag,
.hljs-title,
.hljs-section,
.hljs-type,
.hljs-selector-id {
  font-weight: bold
}`,
  'night-owl.css': `pre code.hljs {
  display: block;
  overflow-x: auto;
  padding: 1em
}
code.hljs {
  padding: 3px 5px
}
/*

Night Owl for highlight.js (c) Carl Baxter <carl@cbax.tech>

An adaptation of Sarah Drasner's Night Owl VS Code Theme
https://github.com/sdras/night-owl-vscode-theme

Copyright (c) 2018 Sarah Drasner

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

*/
.code-block-wrapper, .hljs {
  background: #011627;
  color: #d6deeb
}
/* General Purpose */
.hljs-keyword {
  color: #c792ea;
  font-style: italic
}
.hljs-built_in {
  color: #addb67;
  font-style: italic
}
.hljs-type {
  color: #82aaff
}
.hljs-literal {
  color: #ff5874
}
.hljs-number {
  color: #F78C6C
}
.hljs-regexp {
  color: #5ca7e4
}
.hljs-string {
  color: #ecc48d
}
.hljs-subst {
  color: #d3423e
}
.hljs-symbol {
  color: #82aaff
}
.hljs-class {
  color: #ffcb8b
}
.hljs-function {
  color: #82AAFF
}
.hljs-title {
  color: #DCDCAA;
  font-style: italic
}
.hljs-params {
  color: #7fdbca
}
/* Meta */
.hljs-comment {
  color: #637777;
  font-style: italic
}
.hljs-doctag {
  color: #7fdbca
}
.hljs-meta {
  color: #82aaff
}
.hljs-meta .hljs-keyword {
  color: #82aaff
}
.hljs-meta .hljs-string {
  color: #ecc48d
}
/* Tags, attributes, config */
.hljs-section {
  color: #82b1ff
}
.hljs-tag,
.hljs-name {
  color: #7fdbca
}
.hljs-attr {
  color: #7fdbca
}
.hljs-attribute {
  color: #80cbc4
}
.hljs-variable {
  color: #addb67
}
/* Markup */
.hljs-bullet {
  color: #d9f5dd
}
.hljs-code {
  color: #80CBC4
}
.hljs-emphasis {
  color: #c792ea;
  font-style: italic
}
.hljs-strong {
  color: #addb67;
  font-weight: bold
}
.hljs-formula {
  color: #c792ea
}
.hljs-link {
  color: #ff869a
}
.hljs-quote {
  color: #697098;
  font-style: italic
}
/* CSS */
.hljs-selector-tag {
  color: #ff6363
}
.hljs-selector-id {
  color: #fad430
}
.hljs-selector-class {
  color: #addb67;
  font-style: italic
}
.hljs-selector-attr,
.hljs-selector-pseudo {
  color: #c792ea;
  font-style: italic
}
/* Templates */
.hljs-template-tag {
  color: #c792ea
}
.hljs-template-variable {
  color: #addb67
}
/* diff */
.hljs-addition {
  color: #addb67ff;
  font-style: italic
}
.hljs-deletion {
  color: #EF535090;
  font-style: italic
}`,
  'nnfx-dark.css': `pre code.hljs {
  display: block;
  overflow-x: auto;
  padding: 1em
}
code.hljs {
  padding: 3px 5px
}
/*!
  Theme: nnfx dark
  Description: a theme inspired by Netscape Navigator/Firefox
  Author: (c) 2020-2021 Jim Mason <jmason@ibinx.com>
  Maintainer: @RocketMan
  License: https://creativecommons.org/licenses/by-sa/4.0  CC BY-SA 4.0
  Updated: 2021-05-17

  @version 1.1.0
*/
.code-block-wrapper, .hljs {
  background: #333;
  color: #fff
}
.language-xml .hljs-meta,
.language-xml .hljs-meta-string {
  font-weight: bold;
  font-style: italic;
  color: #69f
}
.hljs-comment,
.hljs-quote {
  font-style: italic;
  color: #9c6
}
.hljs-name,
.hljs-keyword,
.hljs-built_in {
  color: #a7a
}
.hljs-name,
.hljs-attr {
  font-weight: bold
}
.hljs-string {
  font-weight: normal
}
.hljs-code,
.hljs-string,
.hljs-meta .hljs-string,
.hljs-number,
.hljs-regexp,
.hljs-link {
  color: #bce
}
.hljs-title,
.hljs-symbol,
.hljs-bullet,
.hljs-variable,
.hljs-template-variable {
  color: #d40
}
.hljs-title.class_,
.hljs-class .hljs-title,
.hljs-type {
  font-weight: bold;
  color: #96c
}
.hljs-title.function_,
.hljs-function .hljs-title,
.hljs-attr,
.hljs-subst,
.hljs-tag {
  color: #fff
}
.hljs-formula {
  background-color: #eee;
  font-style: italic
}
.hljs-addition {
  background-color: #797
}
.hljs-deletion {
  background-color: #c99
}
.hljs-meta {
  color: #69f
}
.hljs-section,
.hljs-selector-id,
.hljs-selector-class,
.hljs-selector-pseudo,
.hljs-selector-tag {
  font-weight: bold;
  color: #69f
}
.hljs-selector-pseudo {
  font-style: italic
}
.hljs-doctag,
.hljs-strong {
  font-weight: bold
}
.hljs-emphasis {
  font-style: italic
}`,
  'nnfx-light.css': `pre code.hljs {
  display: block;
  overflow-x: auto;
  padding: 1em
}
code.hljs {
  padding: 3px 5px
}
/*!
  Theme: nnfx light
  Description: a theme inspired by Netscape Navigator/Firefox
  Author: (c) 2020-2021 Jim Mason <jmason@ibinx.com>
  Maintainer: @RocketMan
  License: https://creativecommons.org/licenses/by-sa/4.0  CC BY-SA 4.0
  Updated: 2021-05-17

  @version 1.1.0
*/
.code-block-wrapper, .hljs {
  background: #fff;
  color: #000
}
.language-xml .hljs-meta,
.language-xml .hljs-meta-string {
  font-weight: bold;
  font-style: italic;
  color: #48b
}
.hljs-comment,
.hljs-quote {
  font-style: italic;
  color: #070
}
.hljs-name,
.hljs-keyword,
.hljs-built_in {
  color: #808
}
.hljs-name,
.hljs-attr {
  font-weight: bold
}
.hljs-string {
  font-weight: normal
}
.hljs-code,
.hljs-string,
.hljs-meta .hljs-string,
.hljs-number,
.hljs-regexp,
.hljs-link {
  color: #00f
}
.hljs-title,
.hljs-symbol,
.hljs-bullet,
.hljs-variable,
.hljs-template-variable {
  color: #f40
}
.hljs-title.class_,
.hljs-class .hljs-title,
.hljs-type {
  font-weight: bold;
  color: #639
}
.hljs-title.function_,
.hljs-function .hljs-title,
.hljs-attr,
.hljs-subst,
.hljs-tag {
  color: #000
}
.hljs-formula {
  background-color: #eee;
  font-style: italic
}
.hljs-addition {
  background-color: #beb
}
.hljs-deletion {
  background-color: #fbb
}
.hljs-meta {
  color: #269
}
.hljs-section,
.hljs-selector-id,
.hljs-selector-class,
.hljs-selector-pseudo,
.hljs-selector-tag {
  font-weight: bold;
  color: #48b
}
.hljs-selector-pseudo {
  font-style: italic
}
.hljs-doctag,
.hljs-strong {
  font-weight: bold
}
.hljs-emphasis {
  font-style: italic
}`,
  'nord.css': `pre code.hljs {
  display: block;
  overflow-x: auto;
  padding: 1em
}
code.hljs {
  padding: 3px 5px
}
/*
 * Copyright (c) 2017-present Arctic Ice Studio <development@arcticicestudio.com>
 * Copyright (c) 2017-present Sven Greb <development@svengreb.de>
 *
 * Project:    Nord highlight.js
 * Version:    0.1.0
 * Repository: https://github.com/arcticicestudio/nord-highlightjs
 * License:    MIT
 * References:
 *   https://github.com/arcticicestudio/nord
 */
/*

Polar Night

#2E3440
#3B4252
#434C5E
#4C566A

Snow Storm

#D8DEE9
#E5E9F0
#ECEFF4

Frost

#8FBCBB
#88C0D0
#81A1C1
#5E81AC

Aurora

#BF616A
#D08770
#EBCB8B
#A3BE8C
#B48EAD

*/
.code-block-wrapper, .hljs {
  background: #2E3440
}
.code-block-wrapper, .hljs,
.hljs-subst {
  color: #D8DEE9
}
.hljs-selector-tag {
  color: #81A1C1
}
.hljs-selector-id {
  color: #8FBCBB;
  font-weight: bold
}
.hljs-selector-class {
  color: #8FBCBB
}
.hljs-selector-attr {
  color: #8FBCBB
}
.hljs-property {
  color: #88C0D0
}
.hljs-selector-pseudo {
  color: #88C0D0
}
.hljs-addition {
  background-color: rgba(163, 190, 140, 0.5)
}
.hljs-deletion {
  background-color: rgba(191, 97, 106, 0.5)
}
.hljs-built_in,
.hljs-type {
  color: #8FBCBB
}
.hljs-class {
  color: #8FBCBB
}
.hljs-function {
  color: #88C0D0
}
.hljs-title.hljs-function,
.hljs-function > .hljs-title {
  color: #88C0D0
}
.hljs-keyword,
.hljs-literal,
.hljs-symbol {
  color: #81A1C1
}
.hljs-number {
  color: #B48EAD
}
.hljs-regexp {
  color: #EBCB8B
}
.hljs-string {
  color: #A3BE8C
}
.hljs-title {
  color: #8FBCBB
}
.hljs-params {
  color: #D8DEE9
}
.hljs-bullet {
  color: #81A1C1
}
.hljs-code {
  color: #8FBCBB
}
.hljs-emphasis {
  font-style: italic
}
.hljs-formula {
  color: #8FBCBB
}
.hljs-strong {
  font-weight: bold
}
.hljs-link:hover {
  text-decoration: underline
}
.hljs-quote {
  color: #4C566A
}
.hljs-comment {
  color: #4C566A
}
.hljs-doctag {
  color: #8FBCBB
}
.hljs-meta,
.hljs-meta .hljs-keyword {
  color: #5E81AC
}
.hljs-meta .hljs-string {
  color: #A3BE8C
}
.hljs-attr {
  color: #8FBCBB
}
.hljs-attribute {
  color: #D8DEE9
}
.hljs-name {
  color: #81A1C1
}
.hljs-section {
  color: #88C0D0
}
.hljs-tag {
  color: #81A1C1
}
.hljs-variable {
  color: #D8DEE9
}
.hljs-template-variable {
  color: #D8DEE9
}
.hljs-template-tag {
  color: #5E81AC
}
/* per language customizations */
.language-abnf .hljs-attribute {
  color: #88C0D0
}
.language-abnf .hljs-symbol {
  color: #EBCB8B
}
.language-apache .hljs-attribute {
  color: #88C0D0
}
.language-apache .hljs-section {
  color: #81A1C1
}
.language-arduino .hljs-built_in {
  color: #88C0D0
}
.language-aspectj .hljs-meta {
  color: #D08770
}
.language-aspectj > .hljs-title {
  color: #88C0D0
}
.language-bnf .hljs-attribute {
  color: #8FBCBB
}
.language-clojure .hljs-name {
  color: #88C0D0
}
.language-clojure .hljs-symbol {
  color: #EBCB8B
}
.language-coq .hljs-built_in {
  color: #88C0D0
}
.language-cpp .hljs-meta .hljs-string {
  color: #8FBCBB
}
.language-css .hljs-built_in {
  color: #88C0D0
}
.language-css .hljs-keyword {
  color: #D08770
}
.language-diff .hljs-meta {
  color: #8FBCBB
}
.language-ebnf .hljs-attribute {
  color: #8FBCBB
}
.language-glsl .hljs-built_in {
  color: #88C0D0
}
.language-groovy .hljs-meta:not(:first-child) {
  color: #D08770
}
.language-haxe .hljs-meta {
  color: #D08770
}
.language-java .hljs-meta {
  color: #D08770
}
.language-ldif .hljs-attribute {
  color: #8FBCBB
}
.language-lisp .hljs-name {
  color: #88C0D0
}
.language-lua .hljs-built_in {
  color: #88C0D0
}
.language-moonscript .hljs-built_in {
  color: #88C0D0
}
.language-nginx .hljs-attribute {
  color: #88C0D0
}
.language-nginx .hljs-section {
  color: #5E81AC
}
.language-pf .hljs-built_in {
  color: #88C0D0
}
.language-processing .hljs-built_in {
  color: #88C0D0
}
.language-scss .hljs-keyword {
  color: #81A1C1
}
.language-stylus .hljs-keyword {
  color: #81A1C1
}
.language-swift .hljs-meta {
  color: #D08770
}
.language-vim .hljs-built_in {
  color: #88C0D0;
  font-style: italic
}
.language-yaml .hljs-meta {
  color: #D08770
}`,
  'obsidian.css': `pre code.hljs {
  display: block;
  overflow-x: auto;
  padding: 1em
}
code.hljs {
  padding: 3px 5px
}
/**
 * Obsidian style
 * ported by Alexander Marenin (http://github.com/ioncreature)
 */
.code-block-wrapper, .hljs {
  color: #e0e2e4;
  background: #282b2e
}
.hljs-keyword,
.hljs-selector-tag,
.hljs-literal,
.hljs-selector-id {
  color: #93c763
}
.hljs-number {
  color: #ffcd22
}
.hljs-attribute {
  color: #668bb0
}
.hljs-regexp,
.hljs-link {
  color: #d39745
}
.hljs-meta {
  color: #557182
}
.hljs-tag,
.hljs-name,
.hljs-bullet,
.hljs-subst,
.hljs-emphasis,
.hljs-type,
.hljs-built_in,
.hljs-selector-attr,
.hljs-selector-pseudo,
.hljs-addition,
.hljs-variable,
.hljs-template-tag,
.hljs-template-variable {
  color: #8cbbad
}
.hljs-string,
.hljs-symbol {
  color: #ec7600
}
.hljs-comment,
.hljs-quote,
.hljs-deletion {
  color: #818e96
}
.hljs-selector-class {
  color: #A082BD
}
.hljs-keyword,
.hljs-selector-tag,
.hljs-literal,
.hljs-doctag,
.hljs-title,
.hljs-section,
.hljs-type,
.hljs-name,
.hljs-strong {
  font-weight: bold
}
.hljs-code,
.hljs-title.class_,
.hljs-class .hljs-title,
.hljs-section {
  color: white
}`,
  'panda-syntax-dark.css': `pre code.hljs {
  display: block;
  overflow-x: auto;
  padding: 1em
}
code.hljs {
  padding: 3px 5px
}
/**
 * Panda Syntax Theme for Highlight.js
 * Based on: https://github.com/tinkertrain/panda-syntax-vscode
 * Author: Annmarie Switzer <https://github.com/annmarie-switzer>
 */
.code-block-wrapper, .hljs {
  color: #e6e6e6;
  background: #2a2c2d
}
.hljs-emphasis {
  font-style: italic
}
.hljs-strong {
  font-weight: bold
}
.hljs-link {
  text-decoration: underline
}
.hljs-comment,
.hljs-quote {
  color: #bbbbbb;
  font-style: italic
}
.hljs-params {
  color: #bbbbbb
}
.hljs-punctuation,
.hljs-attr {
  color: #e6e6e6
}
.hljs-selector-tag,
.hljs-name,
.hljs-meta {
  color: #ff4b82
}
.hljs-operator,
.hljs-char.escape_ {
  color: #b084eb
}
.hljs-keyword,
.hljs-deletion {
  color: #ff75b5
}
.hljs-regexp,
.hljs-selector-pseudo,
.hljs-selector-attr,
.hljs-variable.language_ {
  color: #ff9ac1
}
.hljs-subst,
.hljs-property,
.hljs-code,
.hljs-formula,
.hljs-section,
.hljs-title.function_ {
  color: #45a9f9
}
.hljs-string,
.hljs-symbol,
.hljs-bullet,
.hljs-addition,
.hljs-selector-class,
.hljs-title.class_,
.hljs-title.class_.inherited__,
.hljs-meta .hljs-string {
  color: #19f9d8
}
.hljs-variable,
.hljs-template-variable,
.hljs-number,
.hljs-literal,
.hljs-type,
.hljs-link,
.hljs-built_in,
.hljs-title,
.hljs-selector-id,
.hljs-tag,
.hljs-doctag,
.hljs-attribute,
.hljs-template-tag,
.hljs-meta .hljs-keyword,
.hljs-punctuation {
  color: #ffb86c
}`,
  'panda-syntax-light.css': `pre code.hljs {
  display: block;
  overflow-x: auto;
  padding: 1em
}
code.hljs {
  padding: 3px 5px
}
/**
 * Panda Syntax Theme for Highlight.js
 * Based on: https://github.com/tinkertrain/panda-syntax-vscode
 * Author: Annmarie Switzer <https://github.com/annmarie-switzer>
 */
.code-block-wrapper, .hljs {
  color: #2a2c2d;
  background: #e6e6e6
}
.hljs-emphasis {
  font-style: italic
}
.hljs-strong {
  font-weight: bold
}
.hljs-link {
  text-decoration: underline
}
.hljs-comment,
.hljs-quote {
  color: #676B79;
  font-style: italic
}
.hljs-params {
  color: #676B79
}
.hljs-punctuation,
.hljs-attr {
  color: #2a2c2d
}
.hljs-selector-tag,
.hljs-name,
.hljs-meta,
.hljs-operator,
.hljs-char.escape_ {
  color: #c56200
}
.hljs-keyword,
.hljs-deletion {
  color: #d92792
}
.hljs-regexp,
.hljs-selector-pseudo,
.hljs-selector-attr,
.hljs-variable.language_ {
  color: #cc5e91
}
.hljs-subst,
.hljs-property,
.hljs-code,
.hljs-formula,
.hljs-section,
.hljs-title.function_ {
  color: #3787c7
}
.hljs-string,
.hljs-symbol,
.hljs-bullet,
.hljs-addition,
.hljs-selector-class,
.hljs-title.class_,
.hljs-title.class_.inherited__,
.hljs-meta .hljs-string {
  color: #0d7d6c
}
.hljs-variable,
.hljs-template-variable,
.hljs-number,
.hljs-literal,
.hljs-type,
.hljs-link,
.hljs-built_in,
.hljs-title,
.hljs-selector-id,
.hljs-tag,
.hljs-doctag,
.hljs-attribute,
.hljs-template-tag,
.hljs-meta .hljs-keyword {
  color: #7641bb
}`,
  'paraiso-dark.css': `pre code.hljs {
  display: block;
  overflow-x: auto;
  padding: 1em
}
code.hljs {
  padding: 3px 5px
}
/*
    Paraíso (dark)
    Created by Jan T. Sott (http://github.com/idleberg)
    Inspired by the art of Rubens LP (http://www.rubenslp.com.br)
*/
.code-block-wrapper, .hljs {
  background: #2f1e2e;
  color: #a39e9b
}
/* Paraíso Comment */
.hljs-comment,
.hljs-quote {
  color: #8d8687
}
/* Paraíso Red */
.hljs-variable,
.hljs-template-variable,
.hljs-tag,
.hljs-name,
.hljs-selector-id,
.hljs-selector-class,
.hljs-regexp,
.hljs-link,
.hljs-meta {
  color: #ef6155
}
/* Paraíso Orange */
.hljs-number,
.hljs-built_in,
.hljs-literal,
.hljs-type,
.hljs-params,
.hljs-deletion {
  color: #f99b15
}
/* Paraíso Yellow */
.hljs-title,
.hljs-section,
.hljs-attribute {
  color: #fec418
}
/* Paraíso Green */
.hljs-string,
.hljs-symbol,
.hljs-bullet,
.hljs-addition {
  color: #48b685
}
/* Paraíso Purple */
.hljs-keyword,
.hljs-selector-tag {
  color: #815ba4
}
.hljs-emphasis {
  font-style: italic
}
.hljs-strong {
  font-weight: bold
}`,
  'paraiso-light.css': `pre code.hljs {
  display: block;
  overflow-x: auto;
  padding: 1em
}
code.hljs {
  padding: 3px 5px
}
/*
    Paraíso (light)
    Created by Jan T. Sott (http://github.com/idleberg)
    Inspired by the art of Rubens LP (http://www.rubenslp.com.br)
*/
.code-block-wrapper, .hljs {
  background: #e7e9db;
  color: #4f424c
}
/* Paraíso Comment */
.hljs-comment,
.hljs-quote {
  color: #776e71
}
/* Paraíso Red */
.hljs-variable,
.hljs-template-variable,
.hljs-tag,
.hljs-name,
.hljs-selector-id,
.hljs-selector-class,
.hljs-regexp,
.hljs-link,
.hljs-meta {
  color: #ef6155
}
/* Paraíso Orange */
.hljs-number,
.hljs-built_in,
.hljs-literal,
.hljs-type,
.hljs-params,
.hljs-deletion {
  color: #f99b15
}
/* Paraíso Yellow */
.hljs-title,
.hljs-section,
.hljs-attribute {
  color: #fec418
}
/* Paraíso Green */
.hljs-string,
.hljs-symbol,
.hljs-bullet,
.hljs-addition {
  color: #48b685
}
/* Paraíso Purple */
.hljs-keyword,
.hljs-selector-tag {
  color: #815ba4
}
.hljs-emphasis {
  font-style: italic
}
.hljs-strong {
  font-weight: bold
}`,
  'pojoaque.css': `pre code.hljs {
  display: block;
  overflow-x: auto;
  padding: 1em
}
code.hljs {
  padding: 3px 5px
}
/*

Pojoaque Style by Jason Tate
http://web-cms-designs.com/ftopict-10-pojoaque-style-for-highlight-js-code-highlighter.html
Based on Solarized Style from http://ethanschoonover.com/solarized

*/
.code-block-wrapper, .hljs {
  color: #dccf8f;
  background: url(__VITE_BASE_PATH__/pojoaque.jpg) repeat scroll left top #181914
}
.hljs-comment,
.hljs-quote {
  color: #586e75;
  font-style: italic
}
.hljs-keyword,
.hljs-selector-tag,
.hljs-literal,
.hljs-addition {
  color: #b64926
}
.hljs-number,
.hljs-string,
.hljs-doctag,
.hljs-regexp {
  color: #468966
}
.hljs-title,
.hljs-section,
.hljs-built_in,
.hljs-name {
  color: #ffb03b
}
.hljs-variable,
.hljs-template-variable,
.hljs-title.class_,
.hljs-class .hljs-title,
.hljs-type,
.hljs-tag {
  color: #b58900
}
.hljs-attribute {
  color: #b89859
}
.hljs-symbol,
.hljs-bullet,
.hljs-link,
.hljs-subst,
.hljs-meta {
  color: #cb4b16
}
.hljs-deletion {
  color: #dc322f
}
.hljs-selector-id,
.hljs-selector-class {
  color: #d3a60c
}
.hljs-formula {
  background: #073642
}
.hljs-emphasis {
  font-style: italic
}
.hljs-strong {
  font-weight: bold
}`,
  'purebasic.css': `pre code.hljs {
  display: block;
  overflow-x: auto;
  padding: 1em
}
code.hljs {
  padding: 3px 5px
}
/*

PureBASIC native IDE style ( version 1.0 - April 2016 )

by Tristano Ajmone <tajmone@gmail.com>

Public Domain

NOTE_1:	PureBASIC code syntax highlighting only applies the following classes:
			.hljs-comment
			.hljs-function
			.hljs-keywords
			.hljs-string
			.hljs-symbol

		Other classes are added here for the benefit of styling other languages with the look and feel of PureBASIC native IDE style.
		If you need to customize a stylesheet for PureBASIC only, remove all non-relevant classes -- PureBASIC-related classes are followed by
		a "--- used for PureBASIC ... ---" comment on same line.

NOTE_2:	Color names provided in comments were derived using "Name that Color" online tool:
			http://chir.ag/projects/name-that-color
*/
.code-block-wrapper, .hljs {
  background: #FFFFDF/* Half and Half (approx.) */
  
}
/* --- used for PureBASIC base color --- */
/* --- used for PureBASIC Procedures return type --- */
/* --- used for wrapping PureBASIC Procedures definitions --- */
.code-block-wrapper,
.hljs,
.hljs-type,
.hljs-function,
.hljs-name,
.hljs-number,
.hljs-attr,
.hljs-params,
.hljs-subst {
  color: #000000/* Black */
  
}
/* --- used for PureBASIC Comments --- */
.hljs-comment,
.hljs-regexp,
.hljs-section,
.hljs-selector-pseudo,
.hljs-addition {
  color: #00AAAA/* Persian Green (approx.) */
  
}
/* --- used for PureBASIC Keywords --- */
.hljs-keyword,
.hljs-class,
.hljs-meta .hljs-keyword,
.hljs-selector-class,
.hljs-built_in {
  color: #006666;
  /* Blue Stone (approx.) */
  font-weight: bold
}
/* --- used for PureBASIC Procedures Names --- */
.hljs-title,
.hljs-tag,
.hljs-variable,
.hljs-code {
  color: #006666/* Blue Stone (approx.) */
  
}
/* --- used for PureBASIC Strings --- */
.hljs-string,
.hljs-selector-attr {
  color: #0080FF/* Azure Radiance (approx.) */
  
}
/* --- used for PureBASIC Constants --- */
.hljs-symbol,
.hljs-link,
.hljs-deletion,
.hljs-attribute {
  color: #924B72/* Cannon Pink (approx.) */
  
}
.hljs-meta,
.hljs-literal,
.hljs-selector-id {
  color: #924B72;
  /* Cannon Pink (approx.) */
  font-weight: bold
}
.hljs-strong,
.hljs-name {
  font-weight: bold
}
.hljs-emphasis {
  font-style: italic
}`,
  'qtcreator-dark.css': `pre code.hljs {
  display: block;
  overflow-x: auto;
  padding: 1em
}
code.hljs {
  padding: 3px 5px
}
/*

Qt Creator dark color scheme

*/
.code-block-wrapper, .hljs {
  color: #aaaaaa;
  background: #000000
}
.hljs-strong,
.hljs-emphasis {
  color: #a8a8a2
}
.hljs-bullet,
.hljs-quote,
.hljs-number,
.hljs-regexp,
.hljs-literal {
  color: #ff55ff
}
.hljs-code
.hljs-selector-class {
  color: #aaaaff
}
.hljs-emphasis,
.hljs-stronge,
.hljs-type {
  font-style: italic
}
.hljs-keyword,
.hljs-selector-tag,
.hljs-function,
.hljs-section,
.hljs-symbol,
.hljs-name {
  color: #ffff55
}
.hljs-subst,
.hljs-tag,
.hljs-title {
  color: #aaaaaa
}
.hljs-attribute {
  color: #ff5555
}
.hljs-variable,
.hljs-params,
.hljs-title.class_,
.hljs-class .hljs-title {
  color: #8888ff
}
.hljs-string,
.hljs-selector-id,
.hljs-selector-attr,
.hljs-selector-pseudo,
.hljs-type,
.hljs-built_in,
.hljs-template-tag,
.hljs-template-variable,
.hljs-addition,
.hljs-link {
  color: #ff55ff
}
.hljs-comment,
.hljs-meta,
.hljs-deletion {
  color: #55ffff
}`,
  'qtcreator-light.css': `pre code.hljs {
  display: block;
  overflow-x: auto;
  padding: 1em
}
code.hljs {
  padding: 3px 5px
}
/*
Qt Creator light color scheme
*/
.code-block-wrapper, .hljs {
  color: #000000;
  background: #ffffff
}
.hljs-strong,
.hljs-emphasis {
  color: #000000
}
.hljs-bullet,
.hljs-quote,
.hljs-number,
.hljs-regexp,
.hljs-literal {
  color: #000080
}
.hljs-code
.hljs-selector-class {
  color: #800080
}
.hljs-emphasis,
.hljs-stronge,
.hljs-type {
  font-style: italic
}
.hljs-keyword,
.hljs-selector-tag,
.hljs-function,
.hljs-section,
.hljs-symbol,
.hljs-name {
  color: #808000
}
.hljs-subst,
.hljs-tag,
.hljs-title {
  color: #000000
}
.hljs-attribute {
  color: #800000
}
.hljs-variable,
.hljs-params,
.hljs-title.class_,
.hljs-class .hljs-title {
  color: #0055AF
}
.hljs-string,
.hljs-selector-id,
.hljs-selector-attr,
.hljs-selector-pseudo,
.hljs-type,
.hljs-built_in,
.hljs-template-tag,
.hljs-template-variable,
.hljs-addition,
.hljs-link {
  color: #008000
}
.hljs-comment,
.hljs-meta,
.hljs-deletion {
  color: #008000
}`,
  'rainbow.css': `pre code.hljs {
  display: block;
  overflow-x: auto;
  padding: 1em
}
code.hljs {
  padding: 3px 5px
}
/*

Style with support for rainbow parens

*/
.code-block-wrapper, .hljs {
  background: #474949;
  color: #d1d9e1
}
.hljs-comment,
.hljs-quote {
  color: #969896;
  font-style: italic
}
.hljs-keyword,
.hljs-selector-tag,
.hljs-literal,
.hljs-type,
.hljs-addition {
  color: #cc99cc
}
.hljs-number,
.hljs-selector-attr,
.hljs-selector-pseudo {
  color: #f99157
}
.hljs-string,
.hljs-doctag,
.hljs-regexp {
  color: #8abeb7
}
.hljs-title,
.hljs-name,
.hljs-section,
.hljs-built_in {
  color: #b5bd68
}
.hljs-variable,
.hljs-template-variable,
.hljs-selector-id,
.hljs-title.class_,
.hljs-class .hljs-title {
  color: #ffcc66
}
.hljs-section,
.hljs-name,
.hljs-strong {
  font-weight: bold
}
.hljs-symbol,
.hljs-bullet,
.hljs-subst,
.hljs-meta,
.hljs-link {
  color: #f99157
}
.hljs-deletion {
  color: #dc322f
}
.hljs-formula {
  background: #eee8d5
}
.hljs-attr,
.hljs-attribute {
  color: #81a2be
}
.hljs-emphasis {
  font-style: italic
}`,
  'rose-pine-dawn.css': `pre code.hljs {
  display: block;
  overflow-x: auto;
  padding: 1em
}
code.hljs {
  padding: 3px 5px
}
/*!
  Theme: Rose Pine
  Origin: https://rosepinetheme.com/
*/
/*  Comment */
.hljs-meta,
.hljs-comment {
  color: #9893a5
}
/* Red */
/*INFO: This keyword, HTML elements, Regex group symbol, CSS units, Terminal Red */
.hljs-tag,
.hljs-doctag,
.hljs-selector-id,
.hljs-selector-class,
.hljs-regexp,
.hljs-template-tag,
.hljs-selector-pseudo,
.hljs-selector-attr,
.hljs-variable.language_,
.hljs-deletion {
  color: #b4637a
}
/*Orange */
/*INFO: Number and Boolean constants, Language support constants */
.hljs-variable,
.hljs-template-variable,
.hljs-number,
.hljs-literal,
.hljs-type,
.hljs-params,
.hljs-link {
  color: #d7827e
}
/*  Yellow */
/* INFO:  	Function parameters, Regex character sets, Terminal Yellow */
.hljs-built_in,
.hljs-attribute {
  color: #ea9d34
}
/* cyan */
/* INFO: Language support functions, CSS HTML elements */
.hljs-selector-tag {
  color: #286983
}
/* light blue */
/* INFO: Object properties, Regex quantifiers and flags, Markdown headings, Terminal Cyan, Markdown code, Import/export keywords */
.hljs-keyword,
.hljs-title.function_,
.hljs-title,
.hljs-title.class_,
.hljs-title.class_.inherited__,
.hljs-subst,
.hljs-property {
  color: #56949f
}
/*Green*/
/* INFO: Object literal keys, Markdown links, Terminal Green */
.hljs-selector-tag {
  color: #56949f
}
/*Green(er) */
/* INFO: Strings, CSS class names */
.hljs-quote,
.hljs-string,
.hljs-symbol,
.hljs-bullet,
.hljs-addition {
  color: #286983
}
/* INFO:  	Function names, CSS property names, Terminal Blue */
.hljs-code,
.hljs-formula,
.hljs-section {
  color: #d7827e
}
/* Magenta */
/*INFO: Control Keywords, Storage Types, Regex symbols and operators, HTML Attributes, Terminal Magenta */
.hljs-name,
.hljs-keyword,
.hljs-operator,
.hljs-keyword,
.hljs-char.escape_,
.hljs-attr {
  color: #907aa9
}
.hljs-punctuation {
  color: #575279
}
.code-block-wrapper, .hljs {
  background: #faf4ed;
  color: #575279
}
.hljs-emphasis {
  font-style: italic
}
.hljs-strong {
  font-weight: bold
}`,
  'rose-pine-moon.css': `pre code.hljs {
  display: block;
  overflow-x: auto;
  padding: 1em
}
code.hljs {
  padding: 3px 5px
}
/*!
  Theme: Rose Pine
  Origin: https://rosepinetheme.com/
*/
/*  Comment */
.hljs-meta,
.hljs-comment {
  color: #6e6a86
}
/* Red */
/*INFO: This keyword, HTML elements, Regex group symbol, CSS units, Terminal Red */
.hljs-tag,
.hljs-doctag,
.hljs-selector-id,
.hljs-selector-class,
.hljs-regexp,
.hljs-template-tag,
.hljs-selector-pseudo,
.hljs-selector-attr,
.hljs-variable.language_,
.hljs-deletion {
  color: #eb6f92
}
/*Orange */
/*INFO: Number and Boolean constants, Language support constants */
.hljs-variable,
.hljs-template-variable,
.hljs-number,
.hljs-literal,
.hljs-type,
.hljs-params,
.hljs-link {
  color: #ea9a97
}
/*  Yellow */
/* INFO:  	Function parameters, Regex character sets, Terminal Yellow */
.hljs-built_in,
.hljs-attribute {
  color: #f6c177
}
/* cyan */
/* INFO: Language support functions, CSS HTML elements */
.hljs-selector-tag {
  color: #3e8fb0
}
/* light blue */
/* INFO: Object properties, Regex quantifiers and flags, Markdown headings, Terminal Cyan, Markdown code, Import/export keywords */
.hljs-keyword,
.hljs-title.function_,
.hljs-title,
.hljs-title.class_,
.hljs-title.class_.inherited__,
.hljs-subst,
.hljs-property {
  color: #9ccfd8
}
/*Green*/
/* INFO: Object literal keys, Markdown links, Terminal Green */
.hljs-selector-tag {
  color: #9ccfd8
}
/*Green(er) */
/* INFO: Strings, CSS class names */
.hljs-quote,
.hljs-string,
.hljs-symbol,
.hljs-bullet,
.hljs-addition {
  color: #3e8fb0
}
/* INFO:  	Function names, CSS property names, Terminal Blue */
.hljs-code,
.hljs-formula,
.hljs-section {
  color: #ea9a97
}
/* Magenta */
/*INFO: Control Keywords, Storage Types, Regex symbols and operators, HTML Attributes, Terminal Magenta */
.hljs-name,
.hljs-keyword,
.hljs-operator,
.hljs-keyword,
.hljs-char.escape_,
.hljs-attr {
  color: #c4a7e7
}
/* white*/
/* INFO: Variables, Class names, Terminal White */
.hljs-punctuation {
  color: #e0def4
}
.code-block-wrapper, .hljs {
  background: #232136;
  color: #6e6a86
}
.hljs-emphasis {
  font-style: italic
}
.hljs-strong {
  font-weight: bold
}`,
  'rose-pine.css': `pre code.hljs {
  display: block;
  overflow-x: auto;
  padding: 1em
}
code.hljs {
  padding: 3px 5px
}
/*!
  Theme: Rose Pine
  Origin: https://rosepinetheme.com/
*/
/*  Comment */
.hljs-meta,
.hljs-comment {
  color: #6e6a86
}
/* Red */
/*INFO: This keyword, HTML elements, Regex group symbol, CSS units, Terminal Red */
.hljs-tag,
.hljs-doctag,
.hljs-selector-id,
.hljs-selector-class,
.hljs-regexp,
.hljs-template-tag,
.hljs-selector-pseudo,
.hljs-selector-attr,
.hljs-variable.language_,
.hljs-deletion {
  color: #eb6f92
}
/*Orange */
/*INFO: Number and Boolean constants, Language support constants */
.hljs-variable,
.hljs-template-variable,
.hljs-number,
.hljs-literal,
.hljs-type,
.hljs-params,
.hljs-link {
  color: #ebbcba
}
/*  Yellow */
/* INFO:  	Function parameters, Regex character sets, Terminal Yellow */
.hljs-built_in,
.hljs-attribute {
  color: #f6c177
}
/* cyan */
/* INFO: Language support functions, CSS HTML elements */
.hljs-selector-tag {
  color: #31748f
}
/* light blue */
/* INFO: Object properties, Regex quantifiers and flags, Markdown headings, Terminal Cyan, Markdown code, Import/export keywords */
.hljs-keyword,
.hljs-title.function_,
.hljs-title,
.hljs-title.class_,
.hljs-title.class_.inherited__,
.hljs-subst,
.hljs-property {
  color: #9ccfd8
}
/*Green*/
/* INFO: Object literal keys, Markdown links, Terminal Green */
.hljs-selector-tag {
  color: #9ccfd8
}
/*Green(er) */
/* INFO: Strings, CSS class names */
.hljs-quote,
.hljs-string,
.hljs-symbol,
.hljs-bullet,
.hljs-addition {
  color: #31748f
}
/* INFO:  	Function names, CSS property names, Terminal Blue */
.hljs-code,
.hljs-formula,
.hljs-section {
  color: #ebbcba
}
/* Magenta */
/*INFO: Control Keywords, Storage Types, Regex symbols and operators, HTML Attributes, Terminal Magenta */
.hljs-name,
.hljs-keyword,
.hljs-operator,
.hljs-keyword,
.hljs-char.escape_,
.hljs-attr {
  color: #c4a7e7
}
/* white*/
/* INFO: Variables, Class names, Terminal White */
.hljs-punctuation {
  color: #e0def4
}
.code-block-wrapper, .hljs {
  background: #191724;
  color: #6e6a86
}
.hljs-emphasis {
  font-style: italic
}
.hljs-strong {
  font-weight: bold
}`,
  'routeros.css': `pre code.hljs {
  display: block;
  overflow-x: auto;
  padding: 1em
}
code.hljs {
  padding: 3px 5px
}
/*

 highlight.js style for MikroTik RouterOS script

*/
.code-block-wrapper, .hljs {
  color: #444;
  background: #F0F0F0
}
/* Base color: saturation 0; */
.hljs-subst {
  color: #444
}
.hljs-comment {
  color: #888888
}
.hljs-keyword,
.hljs-selector-tag,
.hljs-meta .hljs-keyword,
.hljs-doctag,
.hljs-name {
  font-weight: bold
}
.hljs-attribute {
  color: #0E9A00
}
.hljs-function {
  color: #99069A
}
/* User color: hue: 0 */
.hljs-type,
.hljs-string,
.hljs-number,
.hljs-selector-id,
.hljs-selector-class,
.hljs-quote,
.hljs-template-tag,
.hljs-deletion {
  color: #880000
}
.hljs-title,
.hljs-section {
  color: #880000;
  font-weight: bold
}
.hljs-regexp,
.hljs-symbol,
.hljs-variable,
.hljs-template-variable,
.hljs-link,
.hljs-selector-attr,
.hljs-selector-pseudo {
  color: #BC6060
}
/* Language color: hue: 90; */
.hljs-literal {
  color: #78A960
}
.hljs-built_in,
.hljs-bullet,
.hljs-code,
.hljs-addition {
  color: #0C9A9A
}
/* Meta color: hue: 200 */
.hljs-meta {
  color: #1f7199
}
.hljs-meta .hljs-string {
  color: #4d99bf
}
/* Misc effects */
.hljs-emphasis {
  font-style: italic
}
.hljs-strong {
  font-weight: bold
}`,
  'school-book.css': `pre code.hljs {
  display: block;
  overflow-x: auto;
  padding: 1em
}
code.hljs {
  padding: 3px 5px
}
/*

School Book style from goldblog.com.ua (c) Zaripov Yura <yur4ik7@ukr.net>

*/
.code-block-wrapper, .hljs {
  color: #3e5915;
  background: #f6f5b2
}
.hljs-keyword,
.hljs-selector-tag,
.hljs-literal {
  color: #005599;
  font-weight: bold
}
.hljs-subst {
  color: #3e5915
}
.hljs-string,
.hljs-title,
.hljs-section,
.hljs-type,
.hljs-symbol,
.hljs-bullet,
.hljs-attribute,
.hljs-built_in,
.hljs-addition,
.hljs-variable,
.hljs-template-tag,
.hljs-template-variable,
.hljs-link {
  color: #2c009f
}
.hljs-comment,
.hljs-quote,
.hljs-deletion,
.hljs-meta {
  color: #e60415
}
.hljs-keyword,
.hljs-selector-tag,
.hljs-literal,
.hljs-doctag,
.hljs-title,
.hljs-section,
.hljs-type,
.hljs-name,
.hljs-selector-id,
.hljs-strong {
  font-weight: bold
}
.hljs-emphasis {
  font-style: italic
}`,
  'shades-of-purple.css': `pre code.hljs {
  display: block;
  overflow-x: auto;
  padding: 1em
}
code.hljs {
  padding: 3px 5px
}
/**
 * Shades of Purple Theme — for Highlightjs.
 *
 * @author (c) Ahmad Awais <https://twitter.com/mrahmadawais/>
 * @link GitHub Repo → https://github.com/ahmadawais/Shades-of-Purple-HighlightJS
 * @version 1.5.0
 */
.code-block-wrapper, .hljs {
  background: #2d2b57;
  color: #e3dfff;
  font-weight: normal
}
.hljs-subst {
  color: #e3dfff
}
.hljs-title {
  color: #fad000;
  font-weight: normal
}
.hljs-name {
  color: #a1feff
}
.hljs-tag {
  color: #ffffff
}
.hljs-attr {
  color: #f8d000;
  font-style: italic
}
.hljs-built_in,
.hljs-selector-tag,
.hljs-section {
  color: #fb9e00
}
.hljs-keyword {
  color: #fb9e00
}
.hljs-string,
.hljs-attribute,
.hljs-symbol,
.hljs-bullet,
.hljs-addition,
.hljs-code,
.hljs-regexp,
.hljs-selector-class,
.hljs-selector-attr,
.hljs-selector-pseudo,
.hljs-template-tag,
.hljs-quote,
.hljs-deletion {
  color: #4cd213
}
.hljs-meta,
.hljs-meta .hljs-string {
  color: #fb9e00
}
.hljs-comment {
  color: #ac65ff
}
.hljs-keyword,
.hljs-selector-tag,
.hljs-literal,
.hljs-name,
.hljs-strong {
  font-weight: normal
}
.hljs-literal,
.hljs-number {
  color: #fa658d
}
.hljs-emphasis {
  font-style: italic
}
.hljs-strong {
  font-weight: bold
}`,
  'srcery.css': `pre code.hljs {
  display: block;
  overflow-x: auto;
  padding: 1em
}
code.hljs {
  padding: 3px 5px
}
/*
Theme: Srcery
Description: Srcery dark color scheme for highlight.js
Author: Chen Bin <chen.bin@gmail.com>
Maintainer: @redguardtoo
Website: https://srcery-colors.github.io/
Date: 2021-04-13
*/
.code-block-wrapper, .hljs {
  background: #1C1B19;
  /* Black */
  color: #FCE8C3/* Bright White */
  
}
/* Bright White */
.hljs-subst,
.hljs-quote,
.hljs-literal {
  color: #FCE8C3
}
/* Bright Blue */
.hljs-type,
.hljs-symbol {
  color: #68A8E4
}
/* Red */
.hljs-keyword,
.hljs-deletion {
  color: #EF2F27
}
/* Yellow */
.hljs-name,
.hljs-function,
.hljs-attribute,
.hljs-selector-attr,
.hljs-selector-id,
.hljs-selector-class,
.hljs-selector-pseudo,
.hljs-section,
.hljs-title {
  color: #FBB829
}
/* Cyan */
.hljs-code,
.hljs-variable,
.hljs-property,
.hljs-template-variable,
.hljs-class {
  color: #0AAEB3
}
/* Bright Green */
.hljs-string,
.hljs-regexp,
.hljs-bullet,
.hljs-addition {
  color: #98BC37
}
/* Bright Magenta */
.hljs-built_in,
.hljs-params {
  color: #FF5C8F
}
/* Blue */
.hljs-template-tag,
.hljs-selector-tag {
  color: #2C78BF
}
/* Bright Black */
.hljs-link,
.hljs-number,
.hljs-comment,
.hljs-meta {
  color: #918175
}
.hljs-emphasis {
  font-style: italic
}
.hljs-strong {
  font-weight: bold
}
/* @see https://github.com/srcery-colors/srcery-emacs for reference */
`,
  'stackoverflow-dark.css': `pre code.hljs {
  display: block;
  overflow-x: auto;
  padding: 1em
}
code.hljs {
  padding: 3px 5px
}
/*!
  Theme: StackOverflow Dark
  Description: Dark theme as used on stackoverflow.com
  Author: stackoverflow.com
  Maintainer: @Hirse
  Website: https://github.com/StackExchange/Stacks
  License: MIT
  Updated: 2021-05-15

  Updated for @stackoverflow/stacks v0.64.0
  Code Blocks: /blob/v0.64.0/lib/css/components/_stacks-code-blocks.less
  Colors: /blob/v0.64.0/lib/css/exports/_stacks-constants-colors.less
*/
.code-block-wrapper, .hljs {
  /* var(--highlight-color) */
  color: #ffffff;
  /* var(--highlight-bg) */
  background: #1c1b1b
}
.hljs-subst {
  /* var(--highlight-color) */
  color: #ffffff
}
.hljs-comment {
  /* var(--highlight-comment) */
  color: #999999
}
.hljs-keyword,
.hljs-selector-tag,
.hljs-meta .hljs-keyword,
.hljs-doctag,
.hljs-section {
  /* var(--highlight-keyword) */
  color: #88aece
}
.hljs-attr {
  /* var(--highlight-attribute); */
  color: #88aece
}
.hljs-attribute {
  /* var(--highlight-symbol) */
  color: #c59bc1
}
.hljs-name,
.hljs-type,
.hljs-number,
.hljs-selector-id,
.hljs-quote,
.hljs-template-tag {
  /* var(--highlight-namespace) */
  color: #f08d49
}
.hljs-selector-class {
  /* var(--highlight-keyword) */
  color: #88aece
}
.hljs-string,
.hljs-regexp,
.hljs-symbol,
.hljs-variable,
.hljs-template-variable,
.hljs-link,
.hljs-selector-attr {
  /* var(--highlight-variable) */
  color: #b5bd68
}
.hljs-meta,
.hljs-selector-pseudo {
  /* var(--highlight-keyword) */
  color: #88aece
}
.hljs-built_in,
.hljs-title,
.hljs-literal {
  /* var(--highlight-literal) */
  color: #f08d49
}
.hljs-bullet,
.hljs-code {
  /* var(--highlight-punctuation) */
  color: #cccccc
}
.hljs-meta .hljs-string {
  /* var(--highlight-variable) */
  color: #b5bd68
}
.hljs-deletion {
  /* var(--highlight-deletion) */
  color: #de7176
}
.hljs-addition {
  /* var(--highlight-addition) */
  color: #76c490
}
.hljs-emphasis {
  font-style: italic
}
.hljs-strong {
  font-weight: bold
}
.hljs-formula,
.hljs-operator,
.hljs-params,
.hljs-property,
.hljs-punctuation,
.hljs-tag {
  /* purposely ignored */
  
}`,
  'stackoverflow-light.css': `pre code.hljs {
  display: block;
  overflow-x: auto;
  padding: 1em
}
code.hljs {
  padding: 3px 5px
}
/*!
  Theme: StackOverflow Light
  Description: Light theme as used on stackoverflow.com
  Author: stackoverflow.com
  Maintainer: @Hirse
  Website: https://github.com/StackExchange/Stacks
  License: MIT
  Updated: 2021-05-15

  Updated for @stackoverflow/stacks v0.64.0
  Code Blocks: /blob/v0.64.0/lib/css/components/_stacks-code-blocks.less
  Colors: /blob/v0.64.0/lib/css/exports/_stacks-constants-colors.less
*/
.code-block-wrapper, .hljs {
  /* var(--highlight-color) */
  color: #2f3337;
  /* var(--highlight-bg) */
  background: #f6f6f6
}
.hljs-subst {
  /* var(--highlight-color) */
  color: #2f3337
}
.hljs-comment {
  /* var(--highlight-comment) */
  color: #656e77
}
.hljs-keyword,
.hljs-selector-tag,
.hljs-meta .hljs-keyword,
.hljs-doctag,
.hljs-section {
  /* var(--highlight-keyword) */
  color: #015692
}
.hljs-attr {
  /* var(--highlight-attribute); */
  color: #015692
}
.hljs-attribute {
  /* var(--highlight-symbol) */
  color: #803378
}
.hljs-name,
.hljs-type,
.hljs-number,
.hljs-selector-id,
.hljs-quote,
.hljs-template-tag {
  /* var(--highlight-namespace) */
  color: #b75501
}
.hljs-selector-class {
  /* var(--highlight-keyword) */
  color: #015692
}
.hljs-string,
.hljs-regexp,
.hljs-symbol,
.hljs-variable,
.hljs-template-variable,
.hljs-link,
.hljs-selector-attr {
  /* var(--highlight-variable) */
  color: #54790d
}
.hljs-meta,
.hljs-selector-pseudo {
  /* var(--highlight-keyword) */
  color: #015692
}
.hljs-built_in,
.hljs-title,
.hljs-literal {
  /* var(--highlight-literal) */
  color: #b75501
}
.hljs-bullet,
.hljs-code {
  /* var(--highlight-punctuation) */
  color: #535a60
}
.hljs-meta .hljs-string {
  /* var(--highlight-variable) */
  color: #54790d
}
.hljs-deletion {
  /* var(--highlight-deletion) */
  color: #c02d2e
}
.hljs-addition {
  /* var(--highlight-addition) */
  color: #2f6f44
}
.hljs-emphasis {
  font-style: italic
}
.hljs-strong {
  font-weight: bold
}
.hljs-formula,
.hljs-operator,
.hljs-params,
.hljs-property,
.hljs-punctuation,
.hljs-tag {
  /* purposely ignored */
  
}`,
  'sunburst.css': `pre code.hljs {
  display: block;
  overflow-x: auto;
  padding: 1em
}
code.hljs {
  padding: 3px 5px
}
/*

Sunburst-like style (c) Vasily Polovnyov <vast@whiteants.net>

*/
.code-block-wrapper, .hljs {
  background: #000;
  color: #f8f8f8
}
.hljs-comment,
.hljs-quote {
  color: #aeaeae;
  font-style: italic
}
.hljs-keyword,
.hljs-selector-tag,
.hljs-type {
  color: #e28964
}
.hljs-string {
  color: #65b042
}
.hljs-subst {
  color: #daefa3
}
.hljs-regexp,
.hljs-link {
  color: #e9c062
}
.hljs-title,
.hljs-section,
.hljs-tag,
.hljs-name {
  color: #89bdff
}
.hljs-title.class_,
.hljs-class .hljs-title,
.hljs-doctag {
  text-decoration: underline
}
.hljs-symbol,
.hljs-bullet,
.hljs-number {
  color: #3387cc
}
.hljs-params,
.hljs-variable,
.hljs-template-variable {
  color: #3e87e3
}
.hljs-attribute {
  color: #cda869
}
.hljs-meta {
  color: #8996a8
}
.hljs-formula {
  background-color: #0e2231;
  color: #f8f8f8;
  font-style: italic
}
.hljs-addition {
  background-color: #253b22;
  color: #f8f8f8
}
.hljs-deletion {
  background-color: #420e09;
  color: #f8f8f8
}
.hljs-selector-class {
  color: #9b703f
}
.hljs-selector-id {
  color: #8b98ab
}
.hljs-emphasis {
  font-style: italic
}
.hljs-strong {
  font-weight: bold
}`,
  'tokyo-night-dark.css': `pre code.hljs {
  display: block;
  overflow-x: auto;
  padding: 1em
}
code.hljs {
  padding: 3px 5px
}
/*!
  Theme: Tokyo-night-Dark
  origin: https://github.com/enkia/tokyo-night-vscode-theme
  Description: Original highlight.js style
  Author: (c) Henri Vandersleyen <hvandersleyen@gmail.com>
  License: see project LICENSE
  Touched: 2022
*/
/*  Comment */
.hljs-meta,
.hljs-comment {
  color: #565f89
}
/* Red */
/*INFO: This keyword, HTML elements, Regex group symbol, CSS units, Terminal Red */
.hljs-tag,
.hljs-doctag,
.hljs-selector-id,
.hljs-selector-class,
.hljs-regexp,
.hljs-template-tag,
.hljs-selector-pseudo,
.hljs-selector-attr,
.hljs-variable.language_,
.hljs-deletion {
  color: #f7768e
}
/*Orange */
/*INFO: Number and Boolean constants, Language support constants */
.hljs-variable,
.hljs-template-variable,
.hljs-number,
.hljs-literal,
.hljs-type,
.hljs-params,
.hljs-link {
  color: #ff9e64
}
/*  Yellow */
/* INFO:  	Function parameters, Regex character sets, Terminal Yellow */
.hljs-built_in,
.hljs-attribute {
  color: #e0af68
}
/* cyan */
/* INFO: Language support functions, CSS HTML elements */
.hljs-selector-tag {
  color: #2ac3de
}
/* light blue */
/* INFO: Object properties, Regex quantifiers and flags, Markdown headings, Terminal Cyan, Markdown code, Import/export keywords */
.hljs-keyword,
.hljs-title.function_,
.hljs-title,
.hljs-title.class_,
.hljs-title.class_.inherited__,
.hljs-subst,
.hljs-property {
  color: #7dcfff
}
/*Green*/
/* INFO: Object literal keys, Markdown links, Terminal Green */
.hljs-selector-tag {
  color: #73daca
}
/*Green(er) */
/* INFO: Strings, CSS class names */
.hljs-quote,
.hljs-string,
.hljs-symbol,
.hljs-bullet,
.hljs-addition {
  color: #9ece6a
}
/* Blue */
/* INFO:  	Function names, CSS property names, Terminal Blue */
.hljs-code,
.hljs-formula,
.hljs-section {
  color: #7aa2f7
}
/* Magenta */
/*INFO: Control Keywords, Storage Types, Regex symbols and operators, HTML Attributes, Terminal Magenta */
.hljs-name,
.hljs-keyword,
.hljs-operator,
.hljs-keyword,
.hljs-char.escape_,
.hljs-attr {
  color: #bb9af7
}
/* white*/
/* INFO: Variables, Class names, Terminal White */
.hljs-punctuation {
  color: #c0caf5
}
.code-block-wrapper, .hljs {
  background: #1a1b26;
  color: #9aa5ce
}
.hljs-emphasis {
  font-style: italic
}
.hljs-strong {
  font-weight: bold
}`,
  'tokyo-night-light.css': `pre code.hljs {
  display: block;
  overflow-x: auto;
  padding: 1em
}
code.hljs {
  padding: 3px 5px
}
/*!
  Theme: Tokyo-night-light
  origin: https://github.com/enkia/tokyo-night-vscode-theme
  Description: Original highlight.js style
  Author: (c) Henri Vandersleyen <hvandersleyen@gmail.com>
  License: see project LICENSE
  Touched: 2022
*/
/*  Comment */
.hljs-meta,
.hljs-comment {
  color: #9699a3
}
/* Red */
/*INFO: This keyword, HTML elements, Regex group symbol, CSS units, Terminal Red */
.hljs-tag,
.hljs-doctag,
.hljs-selector-id,
.hljs-selector-class,
.hljs-regexp,
.hljs-template-tag,
.hljs-selector-pseudo,
.hljs-selector-attr,
.hljs-variable.language_,
.hljs-deletion {
  color: #8c4351
}
/*Orange */
/*INFO: Number and Boolean constants, Language support constants */
.hljs-variable,
.hljs-template-variable,
.hljs-number,
.hljs-literal,
.hljs-type,
.hljs-params,
.hljs-link {
  color: #965027
}
/*  Yellow */
/* INFO:  	Function parameters, Regex character sets, Terminal Yellow */
.hljs-built_in,
.hljs-attribute {
  color: #8f5e15
}
/* cyan */
/* INFO: Language support functions, CSS HTML elements */
.hljs-selector-tag {
  color: #166775
}
/* light blue */
/* INFO: Object properties, Regex quantifiers and flags, Markdown headings, Terminal Cyan, Markdown code, Import/export keywords */
.hljs-keyword,
.hljs-title.function_,
.hljs-title,
.hljs-title.class_,
.hljs-title.class_.inherited__,
.hljs-subst,
.hljs-property {
  color: #0f4b6e
}
/*Green*/
/* INFO: Object literal keys, Markdown links, Terminal Green */
.hljs-selector-tag {
  color: #33635c
}
/*Green(er) */
/* INFO: Strings, CSS class names */
.hljs-quote,
.hljs-string,
.hljs-symbol,
.hljs-bullet,
.hljs-addition {
  color: #485e30
}
/* Blue */
/* INFO:  	Function names, CSS property names, Terminal Blue */
.hljs-code,
.hljs-formula,
.hljs-section {
  color: #34548a
}
/* Magenta */
/*INFO: Control Keywords, Storage Types, Regex symbols and operators, HTML Attributes, Terminal Magenta */
.hljs-name,
.hljs-keyword,
.hljs-operator,
.hljs-keyword,
.hljs-char.escape_,
.hljs-attr {
  color: #5a4a78
}
/* white*/
/* INFO: Variables, Class names, Terminal White */
.hljs-punctuation {
  color: #343b58
}
.code-block-wrapper, .hljs {
  background: #d5d6db;
  color: #565a6e
}
.hljs-emphasis {
  font-style: italic
}
.hljs-strong {
  font-weight: bold
}`,
  'tomorrow-night-blue.css': `pre code.hljs {
  display: block;
  overflow-x: auto;
  padding: 1em
}
code.hljs {
  padding: 3px 5px
}
/* Tomorrow Night Blue Theme */
/* http://jmblog.github.com/color-themes-for-google-code-highlightjs */
/* Original theme - https://github.com/chriskempson/tomorrow-theme */
/* http://jmblog.github.com/color-themes-for-google-code-highlightjs */
/* Tomorrow Comment */
.hljs-comment,
.hljs-quote {
  color: #7285b7
}
/* Tomorrow Red */
.hljs-variable,
.hljs-template-variable,
.hljs-tag,
.hljs-name,
.hljs-selector-id,
.hljs-selector-class,
.hljs-regexp,
.hljs-deletion {
  color: #ff9da4
}
/* Tomorrow Orange */
.hljs-number,
.hljs-built_in,
.hljs-literal,
.hljs-type,
.hljs-params,
.hljs-meta,
.hljs-link {
  color: #ffc58f
}
/* Tomorrow Yellow */
.hljs-attribute {
  color: #ffeead
}
/* Tomorrow Green */
.hljs-string,
.hljs-symbol,
.hljs-bullet,
.hljs-addition {
  color: #d1f1a9
}
/* Tomorrow Blue */
.hljs-title,
.hljs-section {
  color: #bbdaff
}
/* Tomorrow Purple */
.hljs-keyword,
.hljs-selector-tag {
  color: #ebbbff
}
.code-block-wrapper, .hljs {
  background: #002451;
  color: white
}
.hljs-emphasis {
  font-style: italic
}
.hljs-strong {
  font-weight: bold
}`,
  'tomorrow-night-bright.css': `pre code.hljs {
  display: block;
  overflow-x: auto;
  padding: 1em
}
code.hljs {
  padding: 3px 5px
}
/* Tomorrow Night Bright Theme */
/* Original theme - https://github.com/chriskempson/tomorrow-theme */
/* http://jmblog.github.com/color-themes-for-google-code-highlightjs */
/* Tomorrow Comment */
.hljs-comment,
.hljs-quote {
  color: #969896
}
/* Tomorrow Red */
.hljs-variable,
.hljs-template-variable,
.hljs-tag,
.hljs-name,
.hljs-selector-id,
.hljs-selector-class,
.hljs-regexp,
.hljs-deletion {
  color: #d54e53
}
/* Tomorrow Orange */
.hljs-number,
.hljs-built_in,
.hljs-literal,
.hljs-type,
.hljs-params,
.hljs-meta,
.hljs-link {
  color: #e78c45
}
/* Tomorrow Yellow */
.hljs-attribute {
  color: #e7c547
}
/* Tomorrow Green */
.hljs-string,
.hljs-symbol,
.hljs-bullet,
.hljs-addition {
  color: #b9ca4a
}
/* Tomorrow Blue */
.hljs-title,
.hljs-section {
  color: #7aa6da
}
/* Tomorrow Purple */
.hljs-keyword,
.hljs-selector-tag {
  color: #c397d8
}
.code-block-wrapper, .hljs {
  background: black;
  color: #eaeaea
}
.hljs-emphasis {
  font-style: italic
}
.hljs-strong {
  font-weight: bold
}`,
  'vs.css': `pre code.hljs {
  display: block;
  overflow-x: auto;
  padding: 1em
}
code.hljs {
  padding: 3px 5px
}
/*

Visual Studio-like style based on original C# coloring by Jason Diamond <jason@diamond.name>

*/
.code-block-wrapper, .hljs {
  background: white;
  color: black
}
.hljs-comment,
.hljs-quote,
.hljs-variable {
  color: #008000
}
.hljs-keyword,
.hljs-selector-tag,
.hljs-built_in,
.hljs-name,
.hljs-tag {
  color: #00f
}
.hljs-string,
.hljs-title,
.hljs-section,
.hljs-attribute,
.hljs-literal,
.hljs-template-tag,
.hljs-template-variable,
.hljs-type,
.hljs-addition {
  color: #a31515
}
.hljs-deletion,
.hljs-selector-attr,
.hljs-selector-pseudo,
.hljs-meta {
  color: #2b91af
}
.hljs-doctag {
  color: #808080
}
.hljs-attr {
  color: #f00
}
.hljs-symbol,
.hljs-bullet,
.hljs-link {
  color: #00b0e8
}
.hljs-emphasis {
  font-style: italic
}
.hljs-strong {
  font-weight: bold
}`,
  'vs2015.css': `pre code.hljs {
  display: block;
  overflow-x: auto;
  padding: 1em
}
code.hljs {
  padding: 3px 5px
}
/*
 * Visual Studio 2015 dark style
 * Author: Nicolas LLOBERA <nllobera@gmail.com>
 */
.code-block-wrapper, .hljs {
  background: #1E1E1E;
  color: #DCDCDC
}
.hljs-keyword,
.hljs-literal,
.hljs-symbol,
.hljs-name {
  color: #569CD6
}
.hljs-link {
  color: #569CD6;
  text-decoration: underline
}
.hljs-built_in,
.hljs-type {
  color: #4EC9B0
}
.hljs-number,
.hljs-class {
  color: #B8D7A3
}
.hljs-string,
.hljs-meta .hljs-string {
  color: #D69D85
}
.hljs-regexp,
.hljs-template-tag {
  color: #9A5334
}
.hljs-subst,
.hljs-function,
.hljs-title,
.hljs-params,
.hljs-formula {
  color: #DCDCDC
}
.hljs-comment,
.hljs-quote {
  color: #57A64A;
  font-style: italic
}
.hljs-doctag {
  color: #608B4E
}
.hljs-meta,
.hljs-meta .hljs-keyword,
.hljs-tag {
  color: #9B9B9B
}
.hljs-variable,
.hljs-template-variable {
  color: #BD63C5
}
.hljs-attr,
.hljs-attribute {
  color: #9CDCFE
}
.hljs-section {
  color: gold
}
.hljs-emphasis {
  font-style: italic
}
.hljs-strong {
  font-weight: bold
}
/*.hljs-code {
  font-family:'Monospace';
}*/
.hljs-bullet,
.hljs-selector-tag,
.hljs-selector-id,
.hljs-selector-class,
.hljs-selector-attr,
.hljs-selector-pseudo {
  color: #D7BA7D
}
.hljs-addition {
  background-color: #144212;
  display: inline-block;
  width: 100%
}
.hljs-deletion {
  background-color: #600;
  display: inline-block;
  width: 100%
}`,
  'xcode.css': `pre code.hljs {
  display: block;
  overflow-x: auto;
  padding: 1em
}
code.hljs {
  padding: 3px 5px
}
/*

XCode style (c) Angel Garcia <angelgarcia.mail@gmail.com>

*/
.code-block-wrapper, .hljs {
  background: #fff;
  color: black
}
/* Gray DOCTYPE selectors like WebKit */
.xml .hljs-meta {
  color: #c0c0c0
}
.hljs-comment,
.hljs-quote {
  color: #007400
}
.hljs-tag,
.hljs-attribute,
.hljs-keyword,
.hljs-selector-tag,
.hljs-literal,
.hljs-name {
  color: #aa0d91
}
.hljs-variable,
.hljs-template-variable {
  color: #3F6E74
}
.hljs-code,
.hljs-string,
.hljs-meta .hljs-string {
  color: #c41a16
}
.hljs-regexp,
.hljs-link {
  color: #0E0EFF
}
.hljs-title,
.hljs-symbol,
.hljs-bullet,
.hljs-number {
  color: #1c00cf
}
.hljs-section,
.hljs-meta {
  color: #643820
}
.hljs-title.class_,
.hljs-class .hljs-title,
.hljs-type,
.hljs-built_in,
.hljs-params {
  color: #5c2699
}
.hljs-attr {
  color: #836C28
}
.hljs-subst {
  color: #000
}
.hljs-formula {
  background-color: #eee;
  font-style: italic
}
.hljs-addition {
  background-color: #baeeba
}
.hljs-deletion {
  background-color: #ffc8bd
}
.hljs-selector-id,
.hljs-selector-class {
  color: #9b703f
}
.hljs-doctag,
.hljs-strong {
  font-weight: bold
}
.hljs-emphasis {
  font-style: italic
}`,
  'xt256.css': `pre code.hljs {
  display: block;
  overflow-x: auto;
  padding: 1em
}
code.hljs {
  padding: 3px 5px
}
/*
  xt256.css

  Contact: initbar [at] protonmail [dot] ch
         : github.com/initbar
*/
.code-block-wrapper, .hljs {
  color: #eaeaea;
  background: #000
}
.hljs-subst {
  color: #eaeaea
}
.hljs-emphasis {
  font-style: italic
}
.hljs-strong {
  font-weight: bold
}
.hljs-type {
  color: #eaeaea
}
.hljs-params {
  color: #da0000
}
.hljs-literal,
.hljs-number,
.hljs-name {
  color: #ff0000;
  font-weight: bolder
}
.hljs-comment {
  color: #969896
}
.hljs-selector-id,
.hljs-quote {
  color: #00ffff
}
.hljs-template-variable,
.hljs-variable,
.hljs-title {
  color: #00ffff;
  font-weight: bold
}
.hljs-selector-class,
.hljs-keyword,
.hljs-symbol {
  color: #fff000
}
.hljs-string,
.hljs-bullet {
  color: #00ff00
}
.hljs-tag,
.hljs-section {
  color: #000fff
}
.hljs-selector-tag {
  color: #000fff;
  font-weight: bold
}
.hljs-attribute,
.hljs-built_in,
.hljs-regexp,
.hljs-link {
  color: #ff00ff
}
.hljs-meta {
  color: #fff;
  font-weight: bolder
}`,
};
