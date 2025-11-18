
    (function() {
      var cdnOrigin = "https://cdn.shopify.com";
      var scripts = ["/cdn/shopifycloud/checkout-web/assets/c1/polyfills.Ba0kryUm.js","/cdn/shopifycloud/checkout-web/assets/c1/app._66QYRma.js","/cdn/shopifycloud/checkout-web/assets/c1/locale-en.DerwzvmI.js","/cdn/shopifycloud/checkout-web/assets/c1/page-OnePage.CdaYgrgf.js","/cdn/shopifycloud/checkout-web/assets/c1/LocalizationExtensionField.D89L6euf.js","/cdn/shopifycloud/checkout-web/assets/c1/RememberMeDescriptionText.DcMf9WXV.js","/cdn/shopifycloud/checkout-web/assets/c1/ShopPayOptInDisclaimer.zOWClFJN.js","/cdn/shopifycloud/checkout-web/assets/c1/PaymentButtons.BZ_f7U2Z.js","/cdn/shopifycloud/checkout-web/assets/c1/StockProblemsLineItemList.DdTtTdgQ.js","/cdn/shopifycloud/checkout-web/assets/c1/DeliveryMethodSelectorSection.a4fKkYcW.js","/cdn/shopifycloud/checkout-web/assets/c1/useEditorShopPayNavigation.Bx1jLni0.js","/cdn/shopifycloud/checkout-web/assets/c1/VaultedPayment.DVr1qBJR.js","/cdn/shopifycloud/checkout-web/assets/c1/SeparatePaymentsNotice.Bf_9h7Ki.js","/cdn/shopifycloud/checkout-web/assets/c1/ShipmentBreakdown.jGKhcmM7.js","/cdn/shopifycloud/checkout-web/assets/c1/MerchandiseModal.DgAYn-Eg.js","/cdn/shopifycloud/checkout-web/assets/c1/StackedMerchandisePreview.BUJ3yngu.js","/cdn/shopifycloud/checkout-web/assets/c1/component-ShopPayVerificationSwitch.BBLtky0l.js","/cdn/shopifycloud/checkout-web/assets/c1/useSubscribeMessenger.ZRT2Ybcc.js","/cdn/shopifycloud/checkout-web/assets/c1/index.ANtR4Q0h.js","/cdn/shopifycloud/checkout-web/assets/c1/PayButtonSection.bIvmfq2h.js"];
      var styles = ["/cdn/shopifycloud/checkout-web/assets/c1/assets/app.Du6SSCMk.css","/cdn/shopifycloud/checkout-web/assets/c1/assets/OnePage.Dx_lrSVd.css","/cdn/shopifycloud/checkout-web/assets/c1/assets/DeliveryMethodSelectorSection.BvrdqG-K.css","/cdn/shopifycloud/checkout-web/assets/c1/assets/ShopPayVerificationSwitch.WW3cs_z5.css","/cdn/shopifycloud/checkout-web/assets/c1/assets/useEditorShopPayNavigation.CBpWLJzT.css","/cdn/shopifycloud/checkout-web/assets/c1/assets/VaultedPayment.OxMVm7u-.css","/cdn/shopifycloud/checkout-web/assets/c1/assets/StackedMerchandisePreview.CKAakmU8.css"];
      var fontPreconnectUrls = [];
      var fontPrefetchUrls = [];
      var imgPrefetchUrls = ["https://cdn.shopify.com/s/files/1/0644/2457/5191/files/Salty_Horizontal_Logo_59071b07-df7c-416c-b841-fcb13f929180_x320.png?v=1678948008"];

      function preconnect(url, callback) {
        var link = document.createElement('link');
        link.rel = 'dns-prefetch preconnect';
        link.href = url;
        link.crossOrigin = '';
        link.onload = link.onerror = callback;
        document.head.appendChild(link);
      }

      function preconnectAssets() {
        var resources = [cdnOrigin].concat(fontPreconnectUrls);
        var index = 0;
        (function next() {
          var res = resources[index++];
          if (res) preconnect(res, next);
        })();
      }

      function prefetch(url, as, callback) {
        var link = document.createElement('link');
        if (link.relList.supports('prefetch')) {
          link.rel = 'prefetch';
          link.fetchPriority = 'low';
          link.as = as;
          if (as === 'font') link.type = 'font/woff2';
          link.href = url;
          link.crossOrigin = '';
          link.onload = link.onerror = callback;
          document.head.appendChild(link);
        } else {
          var xhr = new XMLHttpRequest();
          xhr.open('GET', url, true);
          xhr.onloadend = callback;
          xhr.send();
        }
      }

      function prefetchAssets() {
        var resources = [].concat(
          scripts.map(function(url) { return [url, 'script']; }),
          styles.map(function(url) { return [url, 'style']; }),
          fontPrefetchUrls.map(function(url) { return [url, 'font']; }),
          imgPrefetchUrls.map(function(url) { return [url, 'image']; })
        );
        var index = 0;
        function run() {
          var res = resources[index++];
          if (res) prefetch(res[0], res[1], next);
        }
        var next = (self.requestIdleCallback || setTimeout).bind(self, run);
        next();
      }

      function onLoaded() {
        try {
          if (parseFloat(navigator.connection.effectiveType) > 2 && !navigator.connection.saveData) {
            preconnectAssets();
            prefetchAssets();
          }
        } catch (e) {}
      }

      if (document.readyState === 'complete') {
        onLoaded();
      } else {
        addEventListener('load', onLoaded);
      }
    })();
  