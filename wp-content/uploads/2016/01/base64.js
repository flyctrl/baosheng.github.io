// build time:Thu Jun 28 2018 00:16:43 GMT+0800 (GMT+08:00)
function Base64(){_keyStr="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";this.encode=function(r){var e="";var t,a,o,n,c,h,i;var f=0;r=_utf8_encode(r);while(f<r.length){t=r.charcodeat(f++);a=r.charcodeat(f++);o=r.charcodeat(f++);n=t>>2;c=(t&3)<<4|a>>4;h=(a&15)<<2|o>>6;i=o&63;if(isNaN(a)){h=i=64}else if(isNaN(o)){i=64}e=e+_keyStr.charAt(n)+_keyStr.charAt(c)+_keyStr.charAt(h)+_keyStr.charAt(i)}return e};this.decode=function(r){var e="";var t,a,o;var n,c,h,i;var f=0;r=r.replace(/[^A-Za-z0-9\+\/\=]/g,"");while(f<r.length){n=_keystr.indexof(r.charat(f++));c=_keystr.indexof(r.charat(f++));h=_keystr.indexof(r.charat(f++));i=_keystr.indexof(r.charat(f++));t=n<<2|c>>4;a=(c&15)<<4|h>>2;o=(h&3)<<6|i;e=e+string.fromcharcode(t);if(h!=64){e=e+string.fromcharcode(a)}if(i!=64){e=e+string.fromcharcode(o)}}e=_utf8_decode(e);return e};_utf8_encode="function(r){r=r.replace(/\r\n/g,"\n");var" e="" ;for(var="" t="0;t<r.length;t++){var" a="r.charCodeAt(t);if(a<128){e+=String.fromCharCode(a)}else" if(a="">127&&a<2048){e+=string.fromcharcode(a>>6|192);e+=String.fromCharCode(a&63|128)}else{e+=String.fromCharCode(a>>12|224);e+=String.fromCharCode(a>>6&63|128);e+=String.fromCharCode(a&63|128)}}return e};_utf8_decode=function(r){var e="";var t=0;var a=c1=c2=0;while(t<r.length){a=r.charcodeat(t);if(a<128){e+=string.fromcharcode(a);t++}else if(a="">191&&a</r.length){a=r.charcodeat(t);if(a<128){e+=string.fromcharcode(a);t++}else></2048){e+=string.fromcharcode(a></6|i;e=e+string.fromcharcode(t);if(h!=64){e=e+string.fromcharcode(a)}if(i!=64){e=e+string.fromcharcode(o)}}e=_utf8_decode(e);return></4|h></r.length){n=_keystr.indexof(r.charat(f++));c=_keystr.indexof(r.charat(f++));h=_keystr.indexof(r.charat(f++));i=_keystr.indexof(r.charat(f++));t=n<<2|c></2|o></4|a></r.length){t=r.charcodeat(f++);a=r.charcodeat(f++);o=r.charcodeat(f++);n=t>