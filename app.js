const config = require(__dirname + '/config.js');
const request = require('request');
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
     for(var i in d) {
        console.log(d[i].id);
        console.log(d[i].shipping);
        print_ql(d[i].shipping.first_name + ' ' + d[i].shipping.last_name + '/n' + d[i].shipping.address_1 + '/n' + d[i].shipping.postcode + ' ' + d[i].shipping.city);
     }
   });


var print_ql = function(text) {
   var host = config.ql_api;
   var full_cmd = host + "text?font_size=50&font_family=Minion%20Pro%20(%20Semibold%20)&text=" + text;
   request(full_cmd, function(err, res, body) {
      if(err) {
         return console.log(err);
      }
      console.log(body.url);
      console.log(body.explanation);
   });
};

// Cron
//setInterval(function() {
//
//}, 5000);