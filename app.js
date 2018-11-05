const config = require(__dirname + '/config.js');
var WooCommerceAPI = require('woocommerce-api');
 


var WooCommerce = new WooCommerceAPI({
  url: config.url,
  consumerKey: config.consumerKey,
  consumerSecret: config.consumerSecret,
  wpAPI: true,
  version: 'wc/v3'
});

var printed = [];


   WooCommerce.get('orders?status=processing', function(err, data, res) {
     console.log(res);
     var d = JSON.parse(res);
     for(var i in res) {
        console.log(res[i].id);
        console.log(res[i].shipping);
     }
   });

// Cron
setInterval(function() {

}, 5000);