var m=Object.defineProperty;var u=Object.getOwnPropertySymbols;var _=Object.prototype.hasOwnProperty,p=Object.prototype.propertyIsEnumerable;var f=(t,e,a)=>e in t?m(t,e,{enumerable:!0,configurable:!0,writable:!0,value:a}):t[e]=a,l=(t,e)=>{for(var a in e||(e={}))_.call(e,a)&&f(t,a,e[a]);if(u)for(var a of u(e))p.call(e,a)&&f(t,a,e[a]);return t};var b=(t,e,a)=>new Promise((i,s)=>{var c=r=>{try{o(a.next(r))}catch(n){s(n)}},d=r=>{try{o(a.throw(r))}catch(n){s(n)}},o=r=>r.done?i(r.value):Promise.resolve(r.value).then(c,d);o((a=a.apply(t,e)).next())});import{F as y}from"./index.aaa1a380.js";import{$ as S,u as j}from"./vendor.a45ea33e.js";function T(t,e){function a(){S(()=>b(this,null,function*(){if(!t)return;(yield y(()=>import("./sortable.esm.6bfbf233.js"),[])).default.create(j(t),l({animation:500,delay:400,delayOnTouchOnly:!0},e))}))}return{initSortable:a}}export{T as u};
