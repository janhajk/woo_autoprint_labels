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

setInterval(function() {
      WooCommerce.get('orders?status=processing', function(err, data, res) {
         console.log(res);
         var d = JSON.parse(res);
         for(var i in d) {
            if(printed.indexOf(d[i].id) != -1) {
               console.log(d[i].id);
               console.log(d[i].shipping);
               var label = '';
               label += encodeURIComponent(d[i].shipping.first_name);
               label += "%20" + encodeURIComponent(d[i].shipping.last_name);
               label += "%0A" + encodeURIComponent(d[i].shipping.company);
               label += "%0A" + encodeURIComponent(d[i].shipping.address_1);
               label += "%0A" + encodeURIComponent(d[i].shipping.address_2);
               label += "%0A" + encodeURIComponent(d[i].shipping.postcode);
               label += "%20" + encodeURIComponent(d[i].shipping.city);
               print_ql(label);
               printed.push(d[i].id);
            }
         }
      });
   }, 1000*60*30);

var print_ql = function(text) {
   var host = config.ql_api;
   var full_cmd = host + "text?font_family=DejaVu+Sans+(Bold)&font_size=70&label_size=38&align=left&orientation=rotated&margin_top=24&margin_bottom=45&margin_left=35&margin_right=35&text=" + text;
   request(full_cmd, function(err, res, body) {
      if(err) {
         return console.log(err);
      }
      console.log(body.url);
      console.log(body.explanation);
   });
};
