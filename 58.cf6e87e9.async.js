(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[58],{FVlm:function(e,a,n){e.exports={numberInfo:"antd-pro-pages-dashboard-analysis-components-number-info-index-numberInfo",suffix:"antd-pro-pages-dashboard-analysis-components-number-info-index-suffix",numberInfoTitle:"antd-pro-pages-dashboard-analysis-components-number-info-index-numberInfoTitle",numberInfoSubTitle:"antd-pro-pages-dashboard-analysis-components-number-info-index-numberInfoSubTitle",numberInfoValue:"antd-pro-pages-dashboard-analysis-components-number-info-index-numberInfoValue",subTotal:"antd-pro-pages-dashboard-analysis-components-number-info-index-subTotal",anticon:"antd-pro-pages-dashboard-analysis-components-number-info-index-anticon",numberInfolight:"antd-pro-pages-dashboard-analysis-components-number-info-index-numberInfolight"}},Hq6x:function(e,a,n){"use strict";var t=n("wx14"),s=n("rePB"),r=n("Ff2n"),o=n("ek7X"),i=n("0NbB"),l=n("q1tI"),m=n.n(l),c=n("TSYQ"),d=n.n(c),u=n("FVlm"),b=n.n(u),f=function(e){var a=e.theme,n=e.title,l=e.subTitle,c=e.total,u=e.subTotal,f=e.status,p=e.suffix,g=e.gap,y=Object(r["a"])(e,["theme","title","subTitle","total","subTotal","status","suffix","gap"]);return m.a.createElement("div",Object(t["a"])({className:d()(b.a.numberInfo,Object(s["a"])({},b.a["numberInfo".concat(a)],a))},y),n&&m.a.createElement("div",{className:b.a.numberInfoTitle,title:"string"===typeof n?n:""},n),l&&m.a.createElement("div",{className:b.a.numberInfoSubTitle,title:"string"===typeof l?l:""},l),m.a.createElement("div",{className:b.a.numberInfoValue,style:g?{marginTop:g}:{}},m.a.createElement("span",null,c,p&&m.a.createElement("em",{className:b.a.suffix},p)),(f||u)&&m.a.createElement("span",{className:b.a.subTotal},u,f&&"up"===f?m.a.createElement(o["a"],null):m.a.createElement(i["a"],null))))};a["a"]=f},vvVX:function(e,a,n){"use strict";n.r(a);n("IzEo");var t=n("bx4M"),s=(n("Znn+"),n("ZTPi")),r=(n("14J3"),n("BMrR")),o=(n("jCWc"),n("kPKH")),i=n("9kvl"),l=n("q1tI"),m=n.n(l),c=n("ucLW"),d=n("Hq6x"),u=n("UXoT"),b=n.n(u),f=function(e){var a=e.data,n=e.currentTabKey;return m.a.createElement(r["a"],{gutter:8,style:{width:138,margin:"8px 0"},type:"flex"},m.a.createElement(o["a"],{span:12},m.a.createElement(d["a"],{title:a.name,subTitle:m.a.createElement(i["a"],{id:"dashboardandanalysis.analysis.conversion-rate",defaultMessage:"Conversion Rate"}),gap:2,total:"".concat(100*a.cvr,"%"),theme:n!==a.name?"light":void 0})),m.a.createElement(o["a"],{span:12,style:{paddingTop:36}},m.a.createElement(c["g"],{animate:!1,inner:.55,tooltip:!1,margin:[0,0,0,0],percent:100*a.cvr,height:64})))},p=s["a"].TabPane,g=function(e){var a=e.activeKey,n=e.loading,r=e.offlineData,o=e.offlineChartData,l=e.handleTabChange;return m.a.createElement(t["a"],{loading:n,className:b.a.offlineCard,bordered:!1,style:{marginTop:32}},m.a.createElement(s["a"],{activeKey:a,onChange:l},r.map((function(e){return m.a.createElement(p,{tab:m.a.createElement(f,{data:e,currentTabKey:a}),key:e.name},m.a.createElement("div",{style:{padding:"0 24px"}},m.a.createElement(c["h"],{height:400,data:o,titleMap:{y1:Object(i["c"])({id:"dashboardandanalysis.analysis.traffic"}),y2:Object(i["c"])({id:"dashboardandanalysis.analysis.payments"})}})))}))))};a["default"]=g}}]);