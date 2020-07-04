# Hexo NexT Share

![Theme Version](https://img.shields.io/badge/NexT-v7.3.0+-blue.svg?style=flat-square)
![Package Version](https://img.shields.io/github/package-json/v/theme-next/hexo-next-share?style=flat-square)

Content Sharing Services for NexT.

## Install

```bash
npm install theme-next/hexo-next-share
```

## Configure

You can config those in both **hexo** or **theme** `_config.yml`.

#### Likely

Edit the configurations in `likely` section in the theme config file as following:

```yml next/_config.yml
# Likely Share
# See: https://ilyabirman.net/projects/likely/, https://github.com/ilyabirman/Likely
# Likely supports four looks, nine social networks, any button text.
# You are free to modify the text value and order of any network.
likely:
  enable: true
  cdn:
    js: //cdn.jsdelivr.net/npm/ilyabirman-likely@2/release/likely.min.js
    css: //cdn.jsdelivr.net/npm/ilyabirman-likely@2/release/likely.min.css
  look: normal # available values: normal, light, small, big
  networks:
    twitter: Tweet
    facebook: Share
    linkedin: Link
    gplus: Plus
    vkontakte: Share
    odnoklassniki: Class
    telegram: Send
    whatsapp: Send
    pinterest: Pin
```

#### Need More Share

Set the value `enable` to `true`, and edit other configurations in `needmoreshare` section in the theme config file as following:
```yml next/_config.yml
# NeedMoreShare2
# Dependencies: https://github.com/theme-next/theme-next-needmoreshare2
# For more information: https://github.com/revir/need-more-share2
# iconStyle: default | box
# boxForm: horizontal | vertical
# position: top / middle / bottom + Left / Center / Right
# networks:
# Weibo | Wechat | Douban | QQZone | Twitter | Facebook | Linkedin | Mailto | Reddit | Delicious | StumbleUpon | Pinterest
# GooglePlus | Tumblr | GoogleBookmarks | Newsvine | Evernote | Friendfeed | Vkontakte | Odnoklassniki | Mailru
needmoreshare:
  enable: true
  cdn:
    js: //cdn.jsdelivr.net/gh/theme-next/theme-next-needmoreshare2@1/needsharebutton.min.js
    css: //cdn.jsdelivr.net/gh/theme-next/theme-next-needmoreshare2@1/needsharebutton.min.css
  postbottom:
    enable: true
    options:
      iconStyle: box
      boxForm: horizontal
      position: bottomCenter
      networks: Weibo,Wechat,Douban,QQZone,Twitter,Facebook
  float:
    enable: false
    options:
      iconStyle: box
      boxForm: horizontal
      position: middleRight
      networks: Weibo,Wechat,Douban,QQZone,Twitter,Facebook
```

#### Share.js

```yml next/_config.yml
# share.js
# See: https://github.com/overtrue/share.js
# networks: weibo,qq,wechat,tencent,douban,qzone,linkedin,diandian,facebook,twitter,google
sharejs:
  enable: true
  cdn:
    js: //cdn.jsdelivr.net/npm/social-share.js@1/dist/js/social-share.min.js
    css: //cdn.jsdelivr.net/npm/social-share.js@1/dist/js/social-share.min.css
  networks: weibo,qq,wechat,tencent,douban,qzone,linkedin,diandian,facebook,twitter,google
  wechat_qrcode:
    title: share.title
    prompt: share.prompt
```
