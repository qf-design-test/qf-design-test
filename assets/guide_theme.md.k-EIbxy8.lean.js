import{h as c,D as r,c as E,k as y,I as i,w as F,R as o,o as d,a as C}from"./chunks/framework.5KlrupG7.js";const h=o("",7),u=o("",2),_=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"guide/theme.md","filePath":"guide/theme.md"}'),m={name:"guide/theme.md"},B=Object.assign(m,{setup(f){const l=c();function p(n,a,s){s.style.setProperty(n,a)}function e(){const n=Math.floor(Math.random()*255),a=Math.floor(Math.random()*255),s=Math.floor(Math.random()*255);return`rgba(${n}, ${a}, ${s}, 0.8)`}function t(){p("--primary-color",e(),l.value)}return(n,a)=>{const s=r("qf-button");return d(),E("div",null,[h,y("div",{ref_key:"container",ref:l},[i(s,{onClick:t},{default:F(()=>[C("切换主题色")]),_:1})],512),u])}}});export{_ as __pageData,B as default};