(()=>{"use strict";var e={280:(e,t,a)=>{let o;a.d(t,{h:()=>n}),o=localStorage.getItem("collection")?JSON.parse(localStorage.getItem("collection")):[];const r={categoryConstructor:function(e){this.name=e,this.active=!1,this.tasks=[]},addCategoryToArray:function(e){o.push(e),localStorage.setItem("collection",JSON.stringify(o))},removeCategoryFromArray:function(e){o.splice(e,1),localStorage.setItem("collection",JSON.stringify(o)),r.renderCategories()},setActiveCategory:function(e,t){o.forEach((e=>{e.active&&(e.active=!1),localStorage.setItem("collection",JSON.stringify(o))})),Array.from(document.getElementsByClassName("newCategory")).forEach((e=>{e.classList.remove("activeCategory")})),e.classList.add("activeCategory"),o[t].active=!0,localStorage.setItem("collection",JSON.stringify(o)),console.table(o)},renderCategories:function(){let e=0;bottomLeftCategoryContainer.textContent="",o&&o.forEach((t=>{let a=document.createElement("p");a.classList.add("newCategory"),a.textContent=t.name,bottomLeftCategoryContainer.appendChild(a),a.setAttribute("id",`${e}`),a.setAttribute("data-index",`${e}`);let o=document.createElement("i");o.setAttribute("class","fa fa-trash deleteCategoryIcon"),o.setAttribute("data-index",`${e}`),a.appendChild(o),e++})),n()}};(()=>{const e=document.getElementById("addCategoryButton"),t=document.getElementById("categoryInputField"),a=document.getElementById("submitCategory");let o=document.querySelector(".categoryInputTable");e.addEventListener("click",(()=>{o.classList.remove("categoryInputTable"),o.classList.add("categoryInputTableActive")})),a.addEventListener("click",(()=>{let e=t.value,a=new r.categoryConstructor(e);r.addCategoryToArray(a),o.classList.remove("categoryInputTableActive"),o.classList.add("categoryInputTable"),t.value="",r.renderCategories()}))})();const n=()=>{Array.from(document.getElementsByClassName("deleteCategoryIcon")).forEach((e=>{e.addEventListener("click",(function(e){let t=e.target.dataset.index;r.removeCategoryFromArray(t)}))}));let e=Array.from(document.getElementsByClassName("newCategory"));e.forEach((t=>{t.addEventListener("click",(function(t){let a=t.target.id,o=e[a];r.setActiveCategory(o,a)}))}))};(()=>{const e=document.getElementById("addTaskButton"),t=document.getElementById("inputTableContainer"),a=document.querySelector(".inputTable");e.addEventListener("click",(()=>{t.setAttribute("id","inputTableContainerActive"),a.classList.add("inputTableActive"),a.classList.remove("inputTable")})),submitButton.addEventListener("click",(()=>{console.log("clickedBZ")})),cancelButton.addEventListener("click",(()=>{t.setAttribute("id","inputTableContainer"),a.classList.add("inputTable"),a.classList.remove("inputTableActive")}))})(),r.renderCategories()}},t={};function a(o){if(t[o])return t[o].exports;var r=t[o]={exports:{}};return e[o](r,r.exports,a),r.exports}a.d=(e,t)=>{for(var o in t)a.o(t,o)&&!a.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})},a.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),a(280)})();