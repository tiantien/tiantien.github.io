(window.webpackJsonp=window.webpackJsonp||[]).push([[33],{313:function(s,n,a){"use strict";a.r(n);var t=a(5),e=Object(t.a)({},(function(){var s=this,n=s._self._c;return n("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[n("h1",{attrs:{id:"ingress"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#ingress"}},[s._v("#")]),s._v(" Ingress")]),s._v(" "),n("h2",{attrs:{id:"创建ingress"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#创建ingress"}},[s._v("#")]),s._v(" 创建Ingress")]),s._v(" "),n("p",[s._v("创建nginx-ingress.yaml文件")]),s._v(" "),n("div",{staticClass:"language-yaml line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-yaml"}},[n("code",[n("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("apiVersion")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" networking.k8s.io/v1\n"),n("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("kind")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" Ingress\n"),n("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("metadata")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n  "),n("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("name")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" nginx"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v("ingress\n"),n("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("spec")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n  "),n("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("ingressClassName")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" nginx\n  "),n("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("defaultBackend")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("service")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n      "),n("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("name")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" saber"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v("service\n      "),n("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("port")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n        "),n("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("number")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("80")]),s._v("\n  "),n("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("rules")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n  "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("host")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" bladex"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v("dev.ptii.com\n    "),n("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("http")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n      "),n("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("paths")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n      "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("path")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" /\n        "),n("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("pathType")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" Prefix\n        "),n("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("backend")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n          "),n("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("service")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n            "),n("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("name")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" saber"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v("service\n            "),n("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("port")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n              "),n("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("number")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("80")]),s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br"),n("span",{staticClass:"line-number"},[s._v("17")]),n("br"),n("span",{staticClass:"line-number"},[s._v("18")]),n("br"),n("span",{staticClass:"line-number"},[s._v("19")]),n("br"),n("span",{staticClass:"line-number"},[s._v("20")]),n("br"),n("span",{staticClass:"line-number"},[s._v("21")]),n("br"),n("span",{staticClass:"line-number"},[s._v("22")]),n("br")])]),n("p",[s._v("执行yaml文件")]),s._v(" "),n("div",{staticClass:"language-shell line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-shell"}},[n("code",[s._v("kubectl apply -f nginx-ingress.yaml\ningress.networking.k8s.io/nginx-ingress created\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br")])]),n("h2",{attrs:{id:"查看ingress"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#查看ingress"}},[s._v("#")]),s._v(" 查看ingress")]),s._v(" "),n("div",{staticClass:"language-shell line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-shell"}},[n("code",[n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("## 查看 ingress 列表")]),s._v("\nkubectl get ingress\nNAME            CLASS   HOSTS                 ADDRESS                         PORTS   AGE\nnginx-ingress   nginx   bladex-dev.ptii.com   "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("192.168")]),s._v(".30.181,192.168.30.182   "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("80")]),s._v("      117s\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("## 查看 ingress 详情")]),s._v("\nkubectl describe ingress nginx-ingress\nName:             nginx-ingress\nNamespace:        bladex-dev\nAddress:          "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("192.168")]),s._v(".30.181,192.168.30.182\nDefault backend:  saber-service:80 "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("100.85")]),s._v(".172.212:80"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\nRules:\n  Host                 Path  Backends\n  ----                 ----  --------\n  bladex-dev.ptii.com  \n                       /   saber-service:80 "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("100.85")]),s._v(".172.212:80"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\nAnnotations:           "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("none"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\nEvents:\n  Type    Reason  Age                  From                      Message\n  ----    ------  ----                 ----                      -------\n  Normal  Sync    95s "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("x2 over 2m25s"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("  nginx-ingress-controller  Scheduled "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("for")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("sync")]),s._v("\n  Normal  Sync    94s "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("x2 over 2m25s"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("  nginx-ingress-controller  Scheduled "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("for")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("sync")]),s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br"),n("span",{staticClass:"line-number"},[s._v("17")]),n("br"),n("span",{staticClass:"line-number"},[s._v("18")]),n("br"),n("span",{staticClass:"line-number"},[s._v("19")]),n("br"),n("span",{staticClass:"line-number"},[s._v("20")]),n("br"),n("span",{staticClass:"line-number"},[s._v("21")]),n("br")])])])}),[],!1,null,null,null);n.default=e.exports}}]);