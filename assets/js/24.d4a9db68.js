(window.webpackJsonp=window.webpackJsonp||[]).push([[24],{304:function(s,e,t){"use strict";t.r(e);var a=t(5),n=Object(a.a)({},(function(){var s=this,e=s._self._c;return e("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[e("h1",{attrs:{id:"docker安装redis"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#docker安装redis"}},[s._v("#")]),s._v(" Docker安装Redis")]),s._v(" "),e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[s._v("docker")]),s._v(" pull redis\n"),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("docker")]),s._v(" run -d --restart always --name redis -p "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("6379")]),s._v(":6379 "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n-v /root/docker/redis/data:/data "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n-v /root/docker/redis/conf/redis.conf:/etc/redis/redis.conf "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\nredis redis-server /etc/redis/redis.conf \n"),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("docker")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("exec")]),s._v(" -it redis redis-cli\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br")])])])}),[],!1,null,null,null);e.default=n.exports}}]);