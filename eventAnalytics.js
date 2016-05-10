//index.html?extensionVersion=4.2.22&browserName=Chrome&uid=8b032fd3-247e-ca2f-bea4-b4065c426a2d&countryISO=US

(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
})(window,document,'script','https://www.google-analytics.com/analytics.js','_gaq');


function getURLParameter(name) {
  return decodeURIComponent((new RegExp('[?|&]' + name + '=' + '([^&;]+?)(&|#|;|$)').exec(location.search)||[,""])[1].replace(/\+/g, '%20'))||null;
}

var extensionVersion = getURLParameter("extensionVersion");
var browserName = getURLParameter("browserName");
var uid = getURLParameter("uid");
var countryISO = getURLParameter("countryISO");
var category = "Acquisition";
var action = "Uninstall";
var label = extensionVersion + "-" + browserName;

console.log("extensionVersion");
console.log(extensionVersion);
console.log("browserName");
console.log(browserName);
console.log("uid");
console.log(uid);
console.log("countryISO");
console.log(countryISO);

_gaq('create', 'UA-18459076-12', {
  cookieExpires: 0
});
// Removes failing protocol check. @see: http://stackoverflow.com/a/22152353/1958200
_gaq('set', 'checkProtocolTask', function(){ });

// user identifier
_gaq('set', '&uid', uid);

// track user's country
_gaq('set', 'dimension1', countryISO);

// track version number
_gaq('set', 'dimension2', extensionVersion);

// track platform
_gaq('set', 'dimension3', browserName);

// track page view
_gaq('send', 'pageview');

// track uninstall event
_gaq('send', 'event', category, action, label, {
    hitCallback: function() {
      console.log("SENT");
    }
});




