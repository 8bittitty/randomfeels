(()=>{var n={644:n=>{"use strict";n.exports=JSON.parse('{"00-Backtrait":["1-a.png","1-b.png","2-back16.png","2-c.png","2-d.png","2-e.png","3-back18.png","3-back19.png","3-back20.png","3-f.png","3-g.png","5-back01.png","5-back02.png","5-back07.png","5-back08.png","5-back10.png","5-back12.png","6-back11.png","7-back15.png","8-back17.png"],"01-Facetrait":["1-middle.png","1-middle12.png","2-middle01.png","2-middle06.png","3-middle17.png","3_middle18.png","4-middle04.png","4-middle19.png","4-middle20.png","5-middle02.png","5-middle03.png","5-middle05.png","5-middle09.png","6-middle07.png","7-middle08.png","7-middle10.png","8-middle13.png","8-middle14.png","8-middle15.png","9-middle16.png"],"02-Raretrait":["1-front18.png","1-front20.png","2-front14.png","2-front16.png","2_front15.png","3-front19.png","4-front05.png","4-front06.png","4-front09.png","4-front17.png","5-front.png","5-front01.png","5-front03.png","5-front04.png","5-front10.png","5-front11.png","5-front12.png","5-front13.png","7-front07.png","8-front08.png"]}')}},t={};function e(r){var i=t[r];if(void 0!==i)return i.exports;var o=t[r]={exports:{}};return n[r](o,o.exports,e),o.exports}(()=>{const n=e(644);String.replacei=String.prototype.replacei=function(n,t){var e=this.toLowerCase().indexOf(n.toLowerCase());return-1==e?this:this.substr(0,e)+t+this.substr(e+n.length)};const t=document.createElement("canvas"),r=new function(n){this.layers=[],this.addLayer=function(n){return layer=function(n,t){var e,r={};for(e in n)Object.prototype.hasOwnProperty.call(n,e)&&(r[e]=n[e]);for(e in t)Object.prototype.hasOwnProperty.call(t,e)&&(r[e]=t[e]);return r}({id:Math.random().toString(36).substr(2,5),show:!0,render:function(n,t){}},n),!1!==this.getLayer(layer.id)?(console.log("Layer already exists"),console.log(n),!1):(this.layers.push(layer),this)},this.getLayer=function(n){for(var t=this.layers.length,e=0;e<t;e++)if(this.layers[e].id===n)return this.layers[e];return!1},this.removeLayer=function(n){for(var t=this.layers.length,e=0;e<t;e++)if(this.layers[e].id===n)return removed=this.layers[e],this.layers.splice(e,1),removed;return!1},this.render=function(){var n=this.canvas,t=this.ctx2d;this.layers.forEach((function(e,r,i){e.show&&e.render(n,t)}))},this.canvas=n,this.ctx2d=this.canvas.getContext("2d")}(t),i=document.getElementById("theCanvas"),o=i.getContext("2d"),a=document.getElementById("download");i.addEventListener("click",(n=>{a.classList.toggle("visible")})),a.addEventListener("click",(n=>{!function(){const n=document.createElement("a");n.download="fxhash-download.png",n.href=t.toDataURL(),n.click()}()}));let s=null;function d(){o.drawImage(t,0,0,i.width,i.height)}window.$fxhashFeatures={},window.addEventListener("resize",(function(){let n=function(n,t,e,r){var i=Math.min(e/n,r/t);return{width:n*i,height:t*i}}(t.width,t.height,window.innerWidth,window.innerHeight);i.width=n.width,i.height=n.height,d()}),!1);let l=0;const p=/\d+(-\([\w-]+\))?-(.+)/;Object.keys(n).filter((t=>n[t].length)).sort(((n,t)=>parseInt(n.split("-")[0])-parseInt(t.split("-")[0]))).forEach((e=>{l++;let i=[];n[e].forEach((n=>{i.push([n,parseInt(n.split("-")[0])])}));let o=function(n){let t=[];for(let e in n)t=t.concat(new Array(n[e][1]).fill(n[e][0]));return(e=t)[fxrand()*e.length|0];var e}(i);const a={},g=p.exec(e);let c=g[1];const h=g[2];if(c){c=c.substring(2,c.length-1),optionArray=c.split("_");for(const n of optionArray){let t,e=n.split("-"),r=e.shift();e.length&&(t=e.join("-")),a[r]=t||!0}}a.hide||(window.$fxhashFeatures[h]=o.split("-").splice(1).join("-").replacei(".png","").replaceAll("_"," "));let f=new Image;f.addEventListener("load",(function(){s||(s=!0,t.width=f.width,t.height=f.height,window.dispatchEvent(new Event("resize"))),r.render(),d(),l--,0==l&&fxpreview()}),!1),f.src="./layers/"+e+"/"+o;let u={id:e,show:!0,render:function(n,t){a.blend?t.globalCompositeOperation=a.blend:t.globalCompositeOperation="source-over",t.drawImage(f,0,0,n.width,n.height)}};r.addLayer(u)})),console.log(window.$fxhashFeatures)})()})();