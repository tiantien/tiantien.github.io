(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{278:function(s,e,a){s.exports=a.p+"assets/img/k8s-baseinfo.0a15c288.png"},314:function(s,e,a){"use strict";a.r(e);var t=a(5),n=Object(t.a)({},(function(){var s=this,e=s._self._c;return e("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[e("h1",{attrs:{id:"k8s知识点整理"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#k8s知识点整理"}},[s._v("#")]),s._v(" k8s知识点整理")]),s._v(" "),e("blockquote",[e("p",[s._v("参考文档")]),s._v(" "),e("p",[e("a",{attrs:{href:"https://www.kuboard.cn/learning/",target:"_blank",rel:"noopener noreferrer"}},[s._v("Kuboard文档"),e("OutboundLink")],1)]),s._v(" "),e("p",[e("a",{attrs:{href:"https://support.huaweicloud.com/basics-cce/kubernetes.html",target:"_blank",rel:"noopener noreferrer"}},[s._v("华为云文档"),e("OutboundLink")],1)])]),s._v(" "),e("h2",{attrs:{id:"kubernetes中的基本对象"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#kubernetes中的基本对象"}},[s._v("#")]),s._v(" Kubernetes中的基本对象")]),s._v(" "),e("p",[e("img",{attrs:{src:a(278),alt:"img"}})]),s._v(" "),e("ul",[e("li",[e("p",[s._v("Pod")]),s._v(" "),e("p",[s._v("Pod是Kubernetes创建或部署的最小单位。一个Pod封装一个或多个容器（container）、存储资源（volume）、一个独立的网络IP以及管理控制容器运行方式的策略选项。")])]),s._v(" "),e("li",[e("p",[s._v("Deployment")]),s._v(" "),e("p",[s._v("Deployment是对Pod的服务化封装。一个Deployment可以包含一个或多个Pod，每个Pod的角色相同，所以系统会自动为Deployment的多个Pod分发请求。")])]),s._v(" "),e("li",[e("p",[s._v("StatefulSet")]),s._v(" "),e("p",[s._v("StatefulSet是用来管理有状态应用的对象。和Deployment相同的是，StatefulSet管理了基于相同容器定义的一组Pod。但和Deployment不同的是，StatefulSet为它们的每个Pod维护了一个固定的ID。这些Pod是基于相同的声明来创建的，但是不能相互替换，无论怎么调度，每个Pod都有一个永久不变的ID。")])]),s._v(" "),e("li",[e("p",[s._v("Job")]),s._v(" "),e("p",[s._v("Job是用来控制批处理型任务的对象。批处理业务与长期伺服业务（Deployment）的主要区别是批处理业务的运行有头有尾，而长期伺服业务在用户不停止的情况下永远运行。Job管理的Pod根据用户的设置把任务成功完成就自动退出（Pod自动删除）。")])]),s._v(" "),e("li",[e("p",[s._v("CronJob")]),s._v(" "),e("p",[s._v("CronJob是基于时间控制的Job，类似于Linux系统的crontab，在指定的时间周期运行指定的任务。")])]),s._v(" "),e("li",[e("p",[s._v("DaemonSet")]),s._v(" "),e("p",[s._v("DaemonSet是这样一种对象（守护进程），它在集群的每个节点上运行一个Pod，且保证只有一个Pod，这非常适合一些系统层面的应用，例如日志收集、资源监控等，这类应用需要每个节点都运行，且不需要太多实例，一个比较好的例子就是Kubernetes的kube-proxy。")])]),s._v(" "),e("li",[e("p",[s._v("Service")]),s._v(" "),e("p",[s._v("Service是用来解决Pod访问问题的。Service有一个固定IP地址，Service将访问流量转发给Pod，而且Service可以给这些Pod做负载均衡。")])]),s._v(" "),e("li",[e("p",[s._v("Ingress")]),s._v(" "),e("p",[s._v("Service是基于四层TCP和UDP协议转发的，Ingress可以基于七层的HTTP和HTTPS协议转发，可以通过域名和路径做到更细粒度的划分。")])]),s._v(" "),e("li",[e("p",[s._v("ConfigMap")]),s._v(" "),e("p",[s._v("ConfigMap是一种用于存储应用所需配置信息的资源类型，用于保存配置数据的键值对。通过ConfigMap可以方便的做到配置解耦，使得不同环境有不同的配置。")])]),s._v(" "),e("li",[e("p",[s._v("Secret")]),s._v(" "),e("p",[s._v("Secret是一种加密存储的资源对象，您可以将认证信息、证书、私钥等保存在Secret中，而不需要把这些敏感数据暴露到镜像或者Pod定义中，从而更加安全和灵活。")])]),s._v(" "),e("li",[e("p",[s._v("PersistentVolume（PV）")]),s._v(" "),e("p",[s._v("PV指持久化数据存储卷，主要定义的是一个持久化存储在宿主机上的目录，比如一个NFS的挂载目录。")])]),s._v(" "),e("li",[e("p",[s._v("PersistentVolumeClaim（PVC）")]),s._v(" "),e("p",[s._v("Kubernetes提供PVC专门用于持久化存储的申请，PVC可以让您无需关心底层存储资源如何创建、释放等动作，而只需要申明您需要何种类型的存储资源、多大的存储空间。")])])]),s._v(" "),e("h2",{attrs:{id:"查看集群证书有效时间"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#查看集群证书有效时间"}},[s._v("#")]),s._v(" 查看集群证书有效时间")]),s._v(" "),e("div",{staticClass:"language-shell line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("cd")]),s._v(" /etc/kubernetes/pki  \n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("for")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token for-or-select variable"}},[s._v("i")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("in")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token variable"}},[e("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$(")]),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("ls")]),s._v(" *.crt"),e("span",{pre:!0,attrs:{class:"token variable"}},[s._v(")")])]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("do")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"===== '),e("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$i")]),s._v(' ====="')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" openssl x509 -in "),e("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$i")]),s._v(" -text -noout "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("grep")]),s._v(" -A "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("3")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v("'Validity'")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("done")]),s._v("\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br")])]),e("h2",{attrs:{id:"查看集群节点状态"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#查看集群节点状态"}},[s._v("#")]),s._v(" 查看集群节点状态")]),s._v(" "),e("div",{staticClass:"language-shell line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[s._v("kubectl get "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("node")]),s._v(" -o wide\nNAME                STATUS   ROLES                  AGE    VERSION   INTERNAL-IP      EXTERNAL-IP   OS-IMAGE                KERNEL-VERSION           CONTAINER-RUNTIME\nptii-dev-master     Ready    control-plane,master   137d   v1.22.0   "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("192.168")]),s._v(".30.180   "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("none"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("        CentOS Linux "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("7")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("Core"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("   "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("3.10")]),s._v(".0-1062.el7.x86_64   containerd://1.4.3\nptii-dev-work-181   Ready    "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("none"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("                 137d   v1.22.0   "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("192.168")]),s._v(".30.181   "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("none"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("        CentOS Linux "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("7")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("Core"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("   "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("3.10")]),s._v(".0-1062.el7.x86_64   containerd://1.4.3\nptii-dev-work-182   Ready    "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("none"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("                 137d   v1.22.0   "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("192.168")]),s._v(".30.182   "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("none"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("        CentOS Linux "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("7")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("Core"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("   "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("3.10")]),s._v(".0-1062.el7.x86_64   containerd://1.4.3\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br")])]),e("h2",{attrs:{id:"导出配置文件"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#导出配置文件"}},[s._v("#")]),s._v(" 导出配置文件")]),s._v(" "),e("div",{staticClass:"language-shell line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("## 以yaml形式导出配置文件")]),s._v("\nkubectl get deploy blade-admin -o yaml "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" blade-admin.yaml\nkubectl get svc blade-gateway -o yaml "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" blade-gateway.yaml  \nkubectl get configmap nacos-config -o yaml "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" nacos-config.yaml\nkubectl get statefulset redis -o yaml "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" redis.yaml\nkubectl get secret \n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br")])]),e("h2",{attrs:{id:"查看-namespace-下面所有的资源并删除"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#查看-namespace-下面所有的资源并删除"}},[s._v("#")]),s._v(" "),e("a",{attrs:{href:"https://blog.csdn.net/Man_In_The_Night/article/details/109184175",target:"_blank",rel:"noopener noreferrer"}},[s._v("查看 namespace 下面所有的资源并删除"),e("OutboundLink")],1)]),s._v(" "),e("div",{staticClass:"language-shell line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("## 查看 namespace 下面所有的资源")]),s._v("\nkubectl api-resources -o name --verbs"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("list --namespaced "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("xargs")]),s._v(" -n "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(" kubectl get --show-kind --ignore-not-found -n "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("namespace"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("## 删除 namespace 下面所有的资源（慎重）")]),s._v("\nkubectl delete all --all -n "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("namespace"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("## 当然也可以删除 namespace 来删除所有资源")]),s._v("\nkubectl delete ns "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("namespace"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br")])])])}),[],!1,null,null,null);e.default=n.exports}}]);