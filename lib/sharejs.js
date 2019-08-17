module.exports = function(config, injects) {
  injects.head.raw('sharejs', `<link rel="stylesheet" href="${config.cdn.css}">`);
  injects.postBodyEnd.raw('sharejs', `<div class="post-widgets">
    <div
      class="social-share"
      {% if config.sharejs.networks %}
        data-sites="{{ config.sharejs.networks }}"
      {% endif %}
      {% if config.sharejs.wechat_qrcode.title %}
        data-wechat-qrcode-title="{{ __(config.sharejs.wechat_qrcode.title) }}"
      {% endif %}
      {% if config.sharejs.wechat_qrcode.prompt %}
        data-wechat-qrcode-helper="{{ __(config.sharejs.wechat_qrcode.prompt) }}"
      {% endif %}
    >
    </div>
  </div>
  <script src="${config.cdn.js}"></script>`);
};
