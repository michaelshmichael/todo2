(()=>{"use strict";var e={522:(e,t,n)=>{function a(e,t){if(t.length<e)throw new TypeError(e+" argument"+(e>1?"s":"")+" required, but only "+t.length+" present")}function r(e){a(1,arguments);var t=Object.prototype.toString.call(e);return e instanceof Date||"object"==typeof e&&"[object Date]"===t?new Date(e.getTime()):"number"==typeof e||"[object Number]"===t?new Date(e):("string"!=typeof e&&"[object String]"!==t||"undefined"==typeof console||(console.warn("Starting with v2.0.0-beta.1 date-fns doesn't accept strings as date arguments. Please use `parseISO` to parse strings. See: https://git.io/fjule"),console.warn((new Error).stack)),new Date(NaN))}function i(e,t){a(2,arguments);var n=r(e),i=r(t),o=n.getTime()-i.getTime();return o<0?-1:o>0?1:o}function o(e,t){a(2,arguments);var n=r(e),i=r(t),o=n.getFullYear()-i.getFullYear(),s=n.getMonth()-i.getMonth();return 12*o+s}function s(e,t){a(2,arguments);var n=r(e),s=r(t),l=i(n,s),d=Math.abs(o(n,s));n.setMonth(n.getMonth()-l*d);var c=i(n,s)===-l,u=l*(d-c);return 0===u?0:u}function l(e,t){a(2,arguments);var n=r(e),i=r(t);return n.getTime()-i.getTime()}function d(e,t){a(2,arguments);var n=l(e,t)/1e3;return n>0?Math.floor(n):Math.ceil(n)}n.d(t,{h:()=>$,M:()=>q});var c={lessThanXSeconds:{one:"less than a second",other:"less than {{count}} seconds"},xSeconds:{one:"1 second",other:"{{count}} seconds"},halfAMinute:"half a minute",lessThanXMinutes:{one:"less than a minute",other:"less than {{count}} minutes"},xMinutes:{one:"1 minute",other:"{{count}} minutes"},aboutXHours:{one:"about 1 hour",other:"about {{count}} hours"},xHours:{one:"1 hour",other:"{{count}} hours"},xDays:{one:"1 day",other:"{{count}} days"},aboutXWeeks:{one:"about 1 week",other:"about {{count}} weeks"},xWeeks:{one:"1 week",other:"{{count}} weeks"},aboutXMonths:{one:"about 1 month",other:"about {{count}} months"},xMonths:{one:"1 month",other:"{{count}} months"},aboutXYears:{one:"about 1 year",other:"about {{count}} years"},xYears:{one:"1 year",other:"{{count}} years"},overXYears:{one:"over 1 year",other:"over {{count}} years"},almostXYears:{one:"almost 1 year",other:"almost {{count}} years"}};function u(e){return function(t){var n=t||{},a=n.width?String(n.width):e.defaultWidth;return e.formats[a]||e.formats[e.defaultWidth]}}var m,g={date:u({formats:{full:"EEEE, MMMM do, y",long:"MMMM do, y",medium:"MMM d, y",short:"MM/dd/yyyy"},defaultWidth:"full"}),time:u({formats:{full:"h:mm:ss a zzzz",long:"h:mm:ss a z",medium:"h:mm:ss a",short:"h:mm a"},defaultWidth:"full"}),dateTime:u({formats:{full:"{{date}} 'at' {{time}}",long:"{{date}} 'at' {{time}}",medium:"{{date}}, {{time}}",short:"{{date}}, {{time}}"},defaultWidth:"full"})},f={lastWeek:"'last' eeee 'at' p",yesterday:"'yesterday at' p",today:"'today at' p",tomorrow:"'tomorrow at' p",nextWeek:"eeee 'at' p",other:"P"};function h(e){return function(t,n){var a,r=n||{};if("formatting"===(r.context?String(r.context):"standalone")&&e.formattingValues){var i=e.defaultFormattingWidth||e.defaultWidth,o=r.width?String(r.width):i;a=e.formattingValues[o]||e.formattingValues[i]}else{var s=e.defaultWidth,l=r.width?String(r.width):e.defaultWidth;a=e.values[l]||e.values[s]}return a[e.argumentCallback?e.argumentCallback(t):t]}}function y(e){return function(t,n){var a=String(t),r=n||{},i=r.width,o=i&&e.matchPatterns[i]||e.matchPatterns[e.defaultMatchWidth],s=a.match(o);if(!s)return null;var l,d=s[0],c=i&&e.parsePatterns[i]||e.parsePatterns[e.defaultParseWidth];return l="[object Array]"===Object.prototype.toString.call(c)?function(e,t){for(var n=0;n<e.length;n++)if(e[n].test(d))return n}(c):function(e,t){for(var n in e)if(e.hasOwnProperty(n)&&e[n].test(d))return n}(c),l=e.valueCallback?e.valueCallback(l):l,{value:l=r.valueCallback?r.valueCallback(l):l,rest:a.slice(d.length)}}}const p={code:"en-US",formatDistance:function(e,t,n){var a;return n=n||{},a="string"==typeof c[e]?c[e]:1===t?c[e].one:c[e].other.replace("{{count}}",t),n.addSuffix?n.comparison>0?"in "+a:a+" ago":a},formatLong:g,formatRelative:function(e,t,n,a){return f[e]},localize:{ordinalNumber:function(e,t){var n=Number(e),a=n%100;if(a>20||a<10)switch(a%10){case 1:return n+"st";case 2:return n+"nd";case 3:return n+"rd"}return n+"th"},era:h({values:{narrow:["B","A"],abbreviated:["BC","AD"],wide:["Before Christ","Anno Domini"]},defaultWidth:"wide"}),quarter:h({values:{narrow:["1","2","3","4"],abbreviated:["Q1","Q2","Q3","Q4"],wide:["1st quarter","2nd quarter","3rd quarter","4th quarter"]},defaultWidth:"wide",argumentCallback:function(e){return Number(e)-1}}),month:h({values:{narrow:["J","F","M","A","M","J","J","A","S","O","N","D"],abbreviated:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],wide:["January","February","March","April","May","June","July","August","September","October","November","December"]},defaultWidth:"wide"}),day:h({values:{narrow:["S","M","T","W","T","F","S"],short:["Su","Mo","Tu","We","Th","Fr","Sa"],abbreviated:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],wide:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]},defaultWidth:"wide"}),dayPeriod:h({values:{narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"}},defaultWidth:"wide",formattingValues:{narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"}},defaultFormattingWidth:"wide"})},match:{ordinalNumber:(m={matchPattern:/^(\d+)(th|st|nd|rd)?/i,parsePattern:/\d+/i,valueCallback:function(e){return parseInt(e,10)}},function(e,t){var n=String(e),a=t||{},r=n.match(m.matchPattern);if(!r)return null;var i=r[0],o=n.match(m.parsePattern);if(!o)return null;var s=m.valueCallback?m.valueCallback(o[0]):o[0];return{value:s=a.valueCallback?a.valueCallback(s):s,rest:n.slice(i.length)}}),era:y({matchPatterns:{narrow:/^(b|a)/i,abbreviated:/^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,wide:/^(before christ|before common era|anno domini|common era)/i},defaultMatchWidth:"wide",parsePatterns:{any:[/^b/i,/^(a|c)/i]},defaultParseWidth:"any"}),quarter:y({matchPatterns:{narrow:/^[1234]/i,abbreviated:/^q[1234]/i,wide:/^[1234](th|st|nd|rd)? quarter/i},defaultMatchWidth:"wide",parsePatterns:{any:[/1/i,/2/i,/3/i,/4/i]},defaultParseWidth:"any",valueCallback:function(e){return e+1}}),month:y({matchPatterns:{narrow:/^[jfmasond]/i,abbreviated:/^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,wide:/^(january|february|march|april|may|june|july|august|september|october|november|december)/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^j/i,/^f/i,/^m/i,/^a/i,/^m/i,/^j/i,/^j/i,/^a/i,/^s/i,/^o/i,/^n/i,/^d/i],any:[/^ja/i,/^f/i,/^mar/i,/^ap/i,/^may/i,/^jun/i,/^jul/i,/^au/i,/^s/i,/^o/i,/^n/i,/^d/i]},defaultParseWidth:"any"}),day:y({matchPatterns:{narrow:/^[smtwf]/i,short:/^(su|mo|tu|we|th|fr|sa)/i,abbreviated:/^(sun|mon|tue|wed|thu|fri|sat)/i,wide:/^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^s/i,/^m/i,/^t/i,/^w/i,/^t/i,/^f/i,/^s/i],any:[/^su/i,/^m/i,/^tu/i,/^w/i,/^th/i,/^f/i,/^sa/i]},defaultParseWidth:"any"}),dayPeriod:y({matchPatterns:{narrow:/^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,any:/^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i},defaultMatchWidth:"any",parsePatterns:{any:{am:/^a/i,pm:/^p/i,midnight:/^mi/i,noon:/^no/i,morning:/morning/i,afternoon:/afternoon/i,evening:/evening/i,night:/night/i}},defaultParseWidth:"any"})},options:{weekStartsOn:0,firstWeekContainsDate:1}};function v(e){return function(e,t){if(null==e)throw new TypeError("assign requires that input parameter not be null or undefined");for(var n in t=t||{})t.hasOwnProperty(n)&&(e[n]=t[n]);return e}({},e)}var b=6e4;function C(e){return e.getTime()%b}function T(e){var t=new Date(e.getTime()),n=Math.ceil(t.getTimezoneOffset());t.setSeconds(0,0);var a=n>0?(b+C(t))%b:C(t);return n*b+a}var k=1440,I=43200;function S(e){if(null===e||!0===e||!1===e)return NaN;var t=Number(e);return isNaN(t)?t:t<0?Math.ceil(t):Math.floor(t)}var E=36e5,w={dateTimeDelimiter:/[T ]/,timeZoneDelimiter:/[Z ]/i,timezone:/([Z+-].*)$/},D=/^-?(?:(\d{3})|(\d{2})(?:-?(\d{2}))?|W(\d{2})(?:-?(\d{1}))?|)$/,A=/^(\d{2}(?:[.,]\d*)?)(?::?(\d{2}(?:[.,]\d*)?))?(?::?(\d{2}(?:[.,]\d*)?))?$/,N=/^([+-])(\d{2})(?::?(\d{2}))?$/;function M(e){var t,n={},a=e.split(w.dateTimeDelimiter);if(a.length>2)return n;if(/:/.test(a[0])?(n.date=null,t=a[0]):(n.date=a[0],t=a[1],w.timeZoneDelimiter.test(n.date)&&(n.date=e.split(w.timeZoneDelimiter)[0],t=e.substr(n.date.length,e.length))),t){var r=w.timezone.exec(t);r?(n.time=t.replace(r[1],""),n.timezone=r[1]):n.time=t}return n}function B(e,t){var n=new RegExp("^(?:(\\d{4}|[+-]\\d{"+(4+t)+"})|(\\d{2}|[+-]\\d{"+(2+t)+"})$)"),a=e.match(n);if(!a)return{year:null};var r=a[1]&&parseInt(a[1]),i=a[2]&&parseInt(a[2]);return{year:null==i?r:100*i,restDateString:e.slice((a[1]||a[2]).length)}}function P(e,t){if(null===t)return null;var n=e.match(D);if(!n)return null;var a=!!n[4],r=x(n[1]),i=x(n[2])-1,o=x(n[3]),s=x(n[4]),l=x(n[5])-1;if(a)return function(e,t,n){return t>=1&&t<=53&&n>=0&&n<=6}(0,s,l)?function(e,t,n){var a=new Date(0);a.setUTCFullYear(e,0,4);var r=7*(t-1)+n+1-(a.getUTCDay()||7);return a.setUTCDate(a.getUTCDate()+r),a}(t,s,l):new Date(NaN);var d=new Date(0);return function(e,t,n){return t>=0&&t<=11&&n>=1&&n<=(J[t]||(j(e)?29:28))}(t,i,o)&&function(e,t){return t>=1&&t<=(j(e)?366:365)}(t,r)?(d.setUTCFullYear(t,i,Math.max(r,o)),d):new Date(NaN)}function x(e){return e?parseInt(e):1}function L(e){var t=e.match(A);if(!t)return null;var n=O(t[1]),a=O(t[2]),r=O(t[3]);return function(e,t,n){return 24===e?0===t&&0===n:n>=0&&n<60&&t>=0&&t<60&&e>=0&&e<25}(n,a,r)?n*E+6e4*a+1e3*r:NaN}function O(e){return e&&parseFloat(e.replace(",","."))||0}function W(e){if("Z"===e)return 0;var t=e.match(N);if(!t)return 0;var n="+"===t[1]?-1:1,a=parseInt(t[2]),r=t[3]&&parseInt(t[3])||0;return function(e,t){return t>=0&&t<=59}(0,r)?n*(a*E+6e4*r):NaN}var J=[31,null,31,30,31,30,31,31,30,31,30,31];function j(e){return e%400==0||e%4==0&&e%100}const F={taskConstructor:function(e,t,n,a){this.name=e,this.dueDate=t,this.priority=n,this.notes=a,this.status=!1},addTaskToCategory:function(e){let t,n=JSON.parse(localStorage.getItem("collection")),a=n.find((e=>e.active)),r=document.getElementById("dueDate").value;document.getElementById("highPriority").checked?t=1:document.getElementById("mediumPriority").checked?t=2:document.getElementById("lowPriority").checked?t=3:alert("Please Select a Priority Level");let i=document.getElementById("notes").value,o=new F.taskConstructor(e,r,t,i);a.tasks.push(o),localStorage.setItem("collection",JSON.stringify(n)),F.renderTasks()},editTask:function(){let e=document.querySelector(".editInputTableActive"),t=document.getElementById("editInputTableContainerActive"),n=document.getElementById("editTaskTitleForm");e.classList.remove("editInputTableActive"),e.classList.add("editInputTable"),t.setAttribute("id","editInputTableContainer");let a=JSON.parse(localStorage.getItem("collection")),r=a.find((e=>e.active)),i=n.textContent.split("");i.splice(0,17);let o,s=i.join(""),l=document.getElementById("editDueDate").value;document.getElementById("editHighPriority").checked?o=1:document.getElementById("editMediumPriority").checked?o=2:document.getElementById("editLowPriority").checked?o=3:alert("Please Select a Priority Level");let d=document.getElementById("editNotes").value,c=new F.taskConstructor(s,l,o,d);r.tasks.push(c),localStorage.setItem("collection",JSON.stringify(a)),F.renderTasks()},deleteTask:function(e){let t=JSON.parse(localStorage.getItem("collection")),n=t.find((e=>!0===e.active));if(confirm("Delete Task?")){let a=e.target.dataset.index;n.tasks.splice(a,1),localStorage.setItem("collection",JSON.stringify(t)),F.renderTasks()}},deleteTaskAsEdit:function(e){let t=JSON.parse(localStorage.getItem("collection"));t.find((e=>!0===e.active)).tasks.splice(e,1),localStorage.setItem("collection",JSON.stringify(t))},renderTasks:function(){let e=JSON.parse(localStorage.getItem("collection")),t=0;document.querySelectorAll(".tasksDisplay").forEach((e=>e.remove())),document.querySelectorAll(".completedTasksDisplay").forEach((e=>e.remove())),e.find((e=>e.active)).tasks.forEach((e=>{let n=document.createElement("div");e.status?n.setAttribute("class","completedTasksDisplay"):n.setAttribute("class","tasksDisplay");let o=document.createElement("div");o.setAttribute("class","taskInfoContainer"),bottomRightContainer.appendChild(n);let l=document.createElement("div");1===e.priority?l.classList.add("highPriorityIndicator"):2===e.priority?l.classList.add("mediumPriorityIndicator"):3===e.priority&&l.classList.add("lowPriorityIndicator");let c=document.createElement("div");c.setAttribute("class","taskNameAndDueDateContainer");let u=document.createElement("div");u.setAttribute("class","taskName"),u.textContent=`${e.name}`;let m=document.createElement("div");if(m.setAttribute("class","dueDate"),e.dueDate){let t=function(e,t,n){a(2,arguments);var o=n||{},l=o.locale||p;if(!l.formatDistance)throw new RangeError("locale must contain formatDistance property");var c=i(e,t);if(isNaN(c))throw new RangeError("Invalid time value");var u,m,g=v(o);g.addSuffix=Boolean(o.addSuffix),g.comparison=c,c>0?(u=r(t),m=r(e)):(u=r(e),m=r(t));var f,h=d(m,u),y=(T(m)-T(u))/1e3,b=Math.round((h-y)/60);if(b<2)return o.includeSeconds?h<5?l.formatDistance("lessThanXSeconds",5,g):h<10?l.formatDistance("lessThanXSeconds",10,g):h<20?l.formatDistance("lessThanXSeconds",20,g):h<40?l.formatDistance("halfAMinute",null,g):h<60?l.formatDistance("lessThanXMinutes",1,g):l.formatDistance("xMinutes",1,g):0===b?l.formatDistance("lessThanXMinutes",1,g):l.formatDistance("xMinutes",b,g);if(b<45)return l.formatDistance("xMinutes",b,g);if(b<90)return l.formatDistance("aboutXHours",1,g);if(b<k){var C=Math.round(b/60);return l.formatDistance("aboutXHours",C,g)}if(b<2520)return l.formatDistance("xDays",1,g);if(b<I){var S=Math.round(b/k);return l.formatDistance("xDays",S,g)}if(b<86400)return f=Math.round(b/I),l.formatDistance("aboutXMonths",f,g);if((f=s(m,u))<12){var E=Math.round(b/I);return l.formatDistance("xMonths",E,g)}var w=f%12,D=Math.floor(f/12);return w<3?l.formatDistance("aboutXYears",D,g):w<9?l.formatDistance("overXYears",D,g):l.formatDistance("almostXYears",D+1,g)}(function(e,t){a(1,arguments);var n=t||{},r=null==n.additionalDigits?2:S(n.additionalDigits);if(2!==r&&1!==r&&0!==r)throw new RangeError("additionalDigits must be 0, 1 or 2");if("string"!=typeof e&&"[object String]"!==Object.prototype.toString.call(e))return new Date(NaN);var i,o=M(e);if(o.date){var s=B(o.date,r);i=P(s.restDateString,s.year)}if(isNaN(i)||!i)return new Date(NaN);var l,d=i.getTime(),c=0;if(o.time&&(c=L(o.time),isNaN(c)||null===c))return new Date(NaN);if(!o.timezone){var u=new Date(d+c),m=new Date(u.getUTCFullYear(),u.getUTCMonth(),u.getUTCDate(),u.getUTCHours(),u.getUTCMinutes(),u.getUTCSeconds(),u.getUTCMilliseconds());return m.setFullYear(u.getUTCFullYear()),m}return l=W(o.timezone),isNaN(l)?new Date(NaN):new Date(d+c+l)}(e.dueDate),new Date);m.textContent=`Due in ${t}`}else m.textContent="No due date";let g=document.createElement("div");g.setAttribute("class","notesContainer");let f=document.createElement("div");f.setAttribute("class","notesHeading"),f.textContent="Notes";let h=document.createElement("div");h.setAttribute("class","notesContent"),h.textContent=`${e.notes}`,n.appendChild(l),n.appendChild(o),o.appendChild(c),c.appendChild(u),c.appendChild(m),o.appendChild(g),g.appendChild(f),g.appendChild(h);let y=document.createElement("div");y.setAttribute("class","deleteEditAndCheckContainer"),o.appendChild(y);let b=document.createElement("i");b.setAttribute("class","fa fa-trash deleteTaskIcon"),b.setAttribute("data-index",`${t}`),y.appendChild(b);let C=document.createElement("i");C.setAttribute("class","fa fa-edit editTaskIcon"),C.setAttribute("data-index",`${t}`),y.appendChild(C);let E=document.createElement("i");E.setAttribute("class","fa fa-check-circle checkboxComplete"),E.setAttribute("data-index",`${t}`),y.appendChild(E),t++})),t=0,q()},setTaskAsComplete:function(e){let t=JSON.parse(localStorage.getItem("collection")),n=e.target.dataset.index,a=t.find((e=>e.active)).tasks[n];a.status?a.status=!1:a.status=!0,localStorage.setItem("collection",JSON.stringify(t)),F.renderTasks()},orderTasksByDate:function(){let e=JSON.parse(localStorage.getItem("collection"));e.find((e=>e.active)).tasks.sort((function(e,t){return e.dueDate>t.dueDate?1:e.dueDate<t.dueDate?-1:0})),localStorage.setItem("collection",JSON.stringify(e)),F.renderTasks()},orderTasksByImportance:function(){let e=JSON.parse(localStorage.getItem("collection"));e.find((e=>e.active)).tasks.sort((function(e,t){return e.priority>t.priority?1:e.priority<t.priority?-1:0})),localStorage.setItem("collection",JSON.stringify(e)),F.renderTasks()}},X={categoryConstructor:function(e){this.name=e,this.active=!1,this.tasks=[]},addCategoryToArray:function(e){let t;t=localStorage.getItem("collection")?JSON.parse(localStorage.getItem("collection")):[],t.push(e),localStorage.setItem("collection",JSON.stringify(t))},removeCategoryFromArray:function(e){let t=JSON.parse(localStorage.getItem("collection"));t.splice(e,1),localStorage.setItem("collection",JSON.stringify(t)),X.renderCategories()},setActiveCategory:function(e,t){X.makeAllCategoriesInactive();let n=JSON.parse(localStorage.getItem("collection"));Array.from(document.getElementsByClassName("newCategory")).forEach((e=>{e.classList.remove("activeCategory")})),e.classList.add("activeCategory"),n[t].active=!0,localStorage.setItem("collection",JSON.stringify(n)),console.table(n),F.renderTasks()},makeAllCategoriesInactive:function(){let e=JSON.parse(localStorage.getItem("collection"));e.forEach((t=>{t.active&&(t.active=!1),localStorage.setItem("collection",JSON.stringify(e))}))},displayCategoryHeading:function(e){let t=JSON.parse(localStorage.getItem("collection"));topRightContainer.textContent="";let n=t[e],a=document.createElement("h1");a.textContent=n.name,a.setAttribute("id","categoryHeading"),topRightContainer.appendChild(a)},renderCategories:function(){let e=JSON.parse(localStorage.getItem("collection")),t=0;bottomLeftCategoryContainer.textContent="",e&&e.forEach((e=>{let n=document.createElement("p");n.classList.add("newCategory"),n.textContent=e.name,bottomLeftCategoryContainer.appendChild(n),n.setAttribute("id",`${t}`),n.setAttribute("data-index",`${t}`);let a=document.createElement("i");a.setAttribute("class","fa fa-trash deleteCategoryIcon"),a.setAttribute("data-index",`${t}`),n.appendChild(a),t++})),$()}},$=()=>{Array.from(document.getElementsByClassName("deleteCategoryIcon")).forEach((e=>{e.addEventListener("click",(function(e){let t=e.target.dataset.index;X.removeCategoryFromArray(t)}))}));let e=Array.from(document.getElementsByClassName("newCategory"));e.forEach((t=>{t.addEventListener("click",(function(t){let n=t.target.id,a=e[n];X.setActiveCategory(a,n),X.displayCategoryHeading(n)}))}))},q=()=>{Array.from(document.getElementsByClassName("deleteTaskIcon")).forEach((e=>{e.addEventListener("click",(e=>{F.deleteTask(e)}))}));const e=document.getElementById("editInputTableContainer"),t=document.querySelector(".editInputTable"),n=document.getElementById("editTaskTitleForm"),a=document.getElementById("editDueDate"),r=document.getElementById("editNotes"),i=document.getElementById("editHighPriority"),o=document.getElementById("editMediumPriority"),s=document.getElementById("editLowPriority");Array.from(document.getElementsByClassName("editTaskIcon")).forEach((l=>{l.addEventListener("click",(l=>{let d=l.target.dataset.index,c=JSON.parse(localStorage.getItem("collection")).find((e=>e.active)).tasks[d];e.setAttribute("id","editInputTableContainerActive"),t.classList.add("editInputTableActive"),t.classList.remove("editInputTable"),n.textContent=`Edit details for ${c.name}`,a.value=c.dueDate,1==`${c.priority}`?i.setAttribute("checked","x"):2==`${c.priority}`?o.setAttribute("checked","x"):s.setAttribute("checked","x"),r.textContent=c.notes,F.deleteTaskAsEdit(d)}))})),Array.from(document.getElementsByClassName("checkboxComplete")).forEach((e=>{e.addEventListener("click",(function(e){F.setTaskAsComplete(e)}))}))};X.renderCategories(),X.makeAllCategoriesInactive(),(()=>{const e=document.getElementById("importanceButton"),t=document.getElementById("dateButton"),n=document.getElementById("allTasksButton");e.addEventListener("click",(function(){F.orderTasksByImportance()})),t.addEventListener("click",(function(){F.orderTasksByDate()})),n.addEventListener("click",(function(){F.renderAllTasks()}))})(),(()=>{const e=document.getElementById("addCategoryButton"),t=document.getElementById("categoryInputField"),n=document.getElementById("submitCategory");let a=document.querySelector(".categoryInputTable");e.addEventListener("click",(()=>{a.classList.remove("categoryInputTable"),a.classList.add("categoryInputTableActive")})),n.addEventListener("click",(()=>{let e=t.value,n=new X.categoryConstructor(e);X.addCategoryToArray(n),a.classList.remove("categoryInputTableActive"),a.classList.add("categoryInputTable"),t.value="",X.renderCategories()}))})(),(()=>{const e=document.getElementById("addTaskButton"),t=document.getElementById("inputTableContainer"),n=document.querySelector(".inputTable"),a=document.getElementById("taskTitleForm");let r=document.getElementById("taskInputField");const i=document.getElementById("dueDate"),o=document.getElementById("notes"),s=(document.getElementById("highPriority"),document.getElementById("mediumPriority"),document.getElementById("lowPriority"),document.getElementById("editInputTableContainer")),l=document.querySelector(".editInputTable");e.addEventListener("click",(()=>{let e=JSON.parse(localStorage.getItem("collection")),r=document.getElementById("taskInputField").value;null==e.find((e=>e.active))?alert("Please Select a Category"):r?r&&(t.setAttribute("id","inputTableContainerActive"),n.classList.add("inputTableActive"),n.classList.remove("inputTable"),a.innerHTML=`Enter details for ${r}`,i.value="",o.value=""):alert("Please Enter a Value")})),submitButton.addEventListener("click",(()=>{let e=r.value;n.classList.remove("inputTableActive"),n.classList.add("inputTable"),t.setAttribute("id","inputTableContainer"),F.addTaskToCategory(e),r.value=""})),cancelButton.addEventListener("click",(()=>{t.setAttribute("id","inputTableContainer"),n.classList.add("inputTable"),n.classList.remove("inputTableActive")})),editSubmitButton.addEventListener("click",(()=>{F.editTask()})),editCancelButton.addEventListener("click",(()=>{s.setAttribute("id","editInputTableContainer"),l.classList.add("editInputTable"),l.classList.remove("editInputTableActive")}))})()}},t={};function n(a){if(t[a])return t[a].exports;var r=t[a]={exports:{}};return e[a](r,r.exports,n),r.exports}n.d=(e,t)=>{for(var a in t)n.o(t,a)&&!n.o(e,a)&&Object.defineProperty(e,a,{enumerable:!0,get:t[a]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),n(522)})();