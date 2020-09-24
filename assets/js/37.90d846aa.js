(window.webpackJsonp=window.webpackJsonp||[]).push([[37],{409:function(t,e,s){"use strict";s.r(e);var a=s(18),o=Object(a.a)({},(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"websocket"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#websocket"}},[t._v("#")]),t._v(" WebSocket")]),t._v(" "),s("p",[t._v("使用标准的 WebSocket 来传输数据。WebSocket 连接可以被其它 HTTP 服务器（如 Nginx）分流，也可以被 VLESS fallbacks path 分流。")]),t._v(" "),s("div",{staticClass:"custom-block tip"},[s("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),s("p",[t._v("Websocket 会识别 HTTP 请求的 X-Forwarded-For 头来覆写流量的源地址，优先级高于 PROXY protocol。")])]),t._v(" "),s("h2",{attrs:{id:"websocketobject"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#websocketobject"}},[t._v("#")]),t._v(" WebSocketObject")]),t._v(" "),s("p",[s("code",[t._v("WebSocketObject")]),t._v(" 对应传输配置的 "),s("code",[t._v("wsSettings")]),t._v(" 项。")]),t._v(" "),s("div",{staticClass:"language-json extra-class"},[s("pre",{pre:!0,attrs:{class:"language-json"}},[s("code",[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"acceptProxyProtocol"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"path"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"/"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"headers"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"Host"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"v2ray.com"')]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("blockquote",[s("p",[s("code",[t._v("acceptProxyProtocol")]),t._v(": true | false")])]),t._v(" "),s("p",[t._v("（v4.27.1+）仅用于 inbound，是否接收 "),s("a",{attrs:{href:"https://www.haproxy.org/download/2.2/doc/proxy-protocol.txt",target:"_blank",rel:"noopener noreferrer"}},[t._v("PROXY protocol"),s("OutboundLink")],1),t._v("，默认值为 "),s("code",[t._v("false")]),t._v("。填写 "),s("code",[t._v("true")]),t._v(" 时，最底层 TCP 连接建立后，请求方必须先发送 PROXY protocol v1 或 v2，否则连接会被关闭。")]),t._v(" "),s("blockquote",[s("p",[s("code",[t._v("path")]),t._v(" string")])]),t._v(" "),s("p",[t._v("WebSocket 所使用的 HTTP 协议路径，默认值为 "),s("code",[t._v('"/"')]),t._v("。")]),t._v(" "),s("blockquote",[s("p",[s("code",[t._v("headers")]),t._v(": map {string: string}")])]),t._v(" "),s("p",[t._v("自定义 HTTP 头，一个键值对，每个键表示一个 HTTP 头的名称，对应的值是字符串。默认值为空。")])])}),[],!1,null,null,null);e.default=o.exports}}]);