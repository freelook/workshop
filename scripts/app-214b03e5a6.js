!function(){"use strict";angular.module("frontend",["ngAnimate","ngCookies","ngSanitize","ngMessages","ngAria","ngRoute","ngMaterial","toastr"])}(),function(){"use strict";angular.module("frontend").factory("workshops",["$http","WORKSHOPS_URL",function(t,n){function e(e){return t.get(n+e,{params:{timestamp:(new Date).getTime().toString()}})}function o(){return e("assets/json/workshops.json")}function r(t){return e("assets/json/workshops/"+t+".json")}return{get:o,one:r}}]).constant("WORKSHOPS_URL","https://raw.githubusercontent.com/freelook/workshop/master/frontend/src/")}(),function(){"use strict";function t(){return{restrict:"E",controller:"ToolbarController",controllerAs:"toolbar",templateUrl:"app/components/toolbar/toolbar.html"}}angular.module("frontend").directive("toolbar",t)}(),function(){"use strict";function t(t){var n=this;n.toggleLeftMenu=function(){t("left").toggle()}}t.$inject=["$mdSidenav"],angular.module("frontend").controller("ToolbarController",t)}(),function(){"use strict";angular.module("frontend").factory("sidenav",["$location",function(t){function n(n,e){return t.path(n).search(e||{})}function e(){return n("/")}function o(){return l+"/"}function r(t){return n("/",{tag:t})}function a(t){return[l,"?tag="].join("/")+t}function i(t){return n(["name",t].join("/"))}function s(t){return[l,"name",t].join("/")}var l="#!";return{main:e,mainHref:o,tag:r,tagHref:a,workshop:i,workshopHref:s}}])}(),function(){"use strict";function t(){return{restrict:"E",controller:"SidenavController",controllerAs:"sidenav",templateUrl:"app/components/sidenav/sidenav.html"}}angular.module("frontend").directive("sidenav",t)}(),function(){"use strict";function t(t,n){var e=this;e.menu=t,e.main=n.main,e.mainHref=n.mainHref,e.tag=n.tag,e.tagHref=n.tagHref}t.$inject=["menu","sidenav"],angular.module("frontend").controller("SidenavController",t)}(),function(){"use strict";angular.module("frontend").factory("metrica",["$window","$rootScope","$location",function(t,n,e){return{init:function(){!function(t,n,e,o,r,a,i){t.GoogleAnalyticsObject=r,t[r]=t[r]||function(){(t[r].q=t[r].q||[]).push(arguments)},t[r].l=1*new Date,a=n.createElement(e),i=n.getElementsByTagName(e)[0],a.async=1,a.src=o,i.parentNode.insertBefore(a,i)}(t,document,"script","https://www.google-analytics.com/analytics.js","ga"),t.ga("create","UA-80064844-1","auto");var o=n.$on("$routeChangeSuccess",function(){t.ga&&t.ga("send","pageview",{page:decodeURIComponent(e.url())}),t.$.get("https://mc.yandex.ru/watch/38127630")});return o}}}]).controller("MetricaController",["$window",function(t){var n=this;n.open=function(){t.open("https://metrika.yandex.com/stat/?id=38127630","_blank")}}]).directive("metrica",function(){return{restrict:"E",controller:"MetricaController",controllerAs:"metrica",templateUrl:"app/components/metrica/metrica.html"}})}(),function(){"use strict";angular.module("frontend").value("menu",{processes:["tdd","bdd","e2e","agile","scrum"],frontend:["angular","html","css","material"],backend:["node","express","mean"],mobile:["cordova","phonegap"],tools:["git","webstorm","npm","bower","gulp"]})}(),function(){"use strict";function t(t){function n(t,e){angular.forEach(t,function(t){angular.isArray(t)?n(t.sort(function(){return.5-Math.random()}),e):e.type(t).pause()["delete"]()})}function e(e,o){var r=e.values,a=!angular.isString(r),i=t(o[0],{typeSpeed:50,deleteSpeed:50,pauseDelay:3e3,loop:a,postfix:""});o.addClass("acme-malarkey"),a?n(r,i):i.type(e.values).pause()}var o={restrict:"E",scope:{values:"="},template:"",link:e};return o}t.$inject=["malarkey"],angular.module("frontend").directive("acmeMalarkey",t)}(),function(){"use strict";function t(){return{restrict:"E",controller:"FooterController",controllerAs:"footer",templateUrl:"app/components/footer/footer.html"}}angular.module("frontend").directive("footer",t)}(),function(){"use strict";function t(){var t=this;t.link="http://about.freelook.info/"}angular.module("frontend").controller("FooterController",t)}(),function(){"use strict";function t(){return{restrict:"E",transclude:!0,controller:"ContentController",controllerAs:"content",templateUrl:"app/components/content/content.html"}}angular.module("frontend").directive("content",t)}(),function(){"use strict";function t(t){var n=this;n.menu=t}t.$inject=["menu"],angular.module("frontend").controller("ContentController",t)}(),function(){"use strict";function t(t,n,e,o,r,a){function i(){r.one(e.name).success(function(t){o.init({title:t.title,description:t.description,keywords:(t.tags||[]).join(",")}),s.item=t}).error(function(){o.init()})}var s=this;s.trust=n.trustAsResourceUrl,s.tag=a.tag,s.tagHref=a.tagHref,s.open=a.workshop,s.link=function(n){t.open(n,"_blank")},i()}t.$inject=["$window","$sce","$routeParams","index","workshops","sidenav"],angular.module("frontend").controller("WorkshopController",t)}(),function(){"use strict";function t(t,n,e,o,r){function a(){n.init(),e.get().success(function(t){i.workshops=t})}var i=this;i.tag=t.tag,i.menu=r,i.clear=o.main,i.openTag=o.tag,i.tagHref=o.tagHref,i.openWorkshop=o.workshop,i.workshopHref=o.workshopHref,a()}t.$inject=["$routeParams","index","workshops","sidenav","menu"],angular.module("frontend").controller("MainController",t)}(),function(){"use strict";function t(t,n,e){t.debug("run: workshop"),e.init(),"freelook.github.io"===n.location.host&&(n.location.href="http://workshop.freelook.info/")}t.$inject=["$log","$window","metrica"],angular.module("frontend").run(t)}(),function(){"use strict";function t(t){t.when("/",{templateUrl:"app/main/main.html",controller:"MainController",controllerAs:"main"}).when("/name/:name",{templateUrl:"app/workshop/workshop.html",controller:"WorkshopController",controllerAs:"workshop"}).otherwise({redirectTo:"/"})}t.$inject=["$routeProvider"],angular.module("frontend").config(t)}(),function(){"use strict";function t(t,n){function e(e){var o=e||{};o.title=o.title?[o.title,n.description].join(" | "):n.title,o.description=o.description?o.description:n.description,o.keywords=o.keywords?o.keywords:n.keywords,t.index=o}return{init:e}}t.$inject=["$rootScope","INDEX"],angular.module("frontend").factory("index",t).constant("INDEX",{title:"javascript full stack | мастерская",description:"мастерская javascript full stack",keywords:"mongo,express,angular,node"})}(),function(){"use strict";angular.module("frontend").constant("malarkey",malarkey).constant("moment",moment)}(),function(){"use strict";function t(t,n,e,o){var r=t.$get();/_escaped_fragment_/.test(r.location.search)&&(r.location.href=[r.location.origin,"/#!",r.location.search.split("_escaped_fragment_=").slice(1)[0].split("&")[0]].join("")),n.hashPrefix("!"),e.debugEnabled(!0),o.allowHtml=!0,o.timeOut=3e3,o.positionClass="toast-top-right",o.preventDuplicates=!0,o.progressBar=!0}t.$inject=["$windowProvider","$locationProvider","$logProvider","toastrConfig"],angular.module("frontend").config(t)}(),angular.module("frontend").run(["$templateCache",function(t){t.put("app/main/main.html",'<sidenav></sidenav><toolbar></toolbar><content class=main flex><div layout=row layout-align="center center"><div class=tags><span class=bkt>{</span> <span>workshop</span><span>&nbsp;</span><span>:</span><span>&nbsp;</span><acme-malarkey ng-if=!main.tag values=::main.menu></acme-malarkey><span ng-if=main.tag><acme-malarkey values=::main.tag></acme-malarkey><i class="material-icons link" ng-click=main.clear()>close</i> </span><span class=bkt>}</span></div></div><div layout=row layout-align="center center" layout-wrap><md-card flex=30 flex-sm=45 flex-xs=90 ng-repeat="workshop in ::main.workshops | filter:main.tag" md-scroll-y><md-card-title><md-card-title-text><a class="md-headline link" ng-href={{::main.workshopHref(workshop.name)}} ng-bind=::workshop.title></a><div class=md-subhead><a class=link ng-repeat="tag in ::workshop.tags" ng-bind=tag ng-href={{main.tagHref(tag)}}></a></div></md-card-title-text><md-card-title-media><div class="md-media-lg card-media" ng-if=::workshop.img><a class=link ng-href={{::main.workshopHref(workshop.name)}}><img ng-src={{::workshop.img}}></a></div></md-card-title-media></md-card-title><md-card-content ng-bind=::workshop.description></md-card-content><md-card-actions layout=row layout-align="end center"><md-button class=md-primary ng-click=main.openWorkshop(workshop.name)>открыть</md-button></md-card-actions></md-card></div></content><footer></footer>'),t.put("app/workshop/workshop.html",'<sidenav></sidenav><toolbar></toolbar><content class=workshop flex><iframe class=video ng-if=::workshop.item.video ng-src={{::workshop.trust(workshop.item.video)}} frameborder=0 allowfullscreen></iframe><div class=video ng-if="::workshop.item && !workshop.item.video" layout=column layout-align="center center"><i class="material-icons lock">lock</i></div><h3 class="md-headline block" ng-if=::workshop.item.title ng-bind=::workshop.item.title></h3><img class=img ng-if=::workshop.item.img ng-src={{::workshop.item.img}}><div class="tags block" ng-if=::workshop.item.tags><a class=link ng-repeat="tag in ::workshop.item.tags" ng-bind=tag ng-href={{::workshop.tagHref(tag)}}></a></div><div class="md-body-1 block" ng-if=::workshop.item.description ng-bind=::workshop.item.description></div><div class="md-body-1 block" ng-if=::workshop.item.content ng-bind=::workshop.item.content></div><div layout=row layout-align="center center"><md-button ng-if=::workshop.item.prev class="md-icon-button md-primary" aria-label=prev ng-click=workshop.open(workshop.item.prev)><i class=material-icons>navigate_before</i></md-button><md-button ng-if=::workshop.item.quiz class="md-icon-button md-warn" aria-label=quiz ng-click=workshop.link(workshop.item.quiz)><i class=material-icons>school</i></md-button><md-button ng-if=::workshop.item.next class="md-icon-button md-primary" aria-label=next ng-click=workshop.open(workshop.item.next)><i class=material-icons>navigate_next</i></md-button></div></content><footer></footer>'),t.put("app/components/content/content.html","<md-content md-scroll-y><ng-transclude></ng-transclude></md-content>"),t.put("app/components/footer/footer.html",'<div layout=row layout-align="center center"><div class=block><span>with</span> <span class=heart>♥</span> <a ng-href={{::footer.link}} target=_blank>freelook.info</a></div></div>'),t.put("app/components/metrica/metrica.html",'<div layout=row layout-align="center center"><img class=link ng-click=metrica.open() src=https://informer.yandex.ru/informer/38127630/1_1_FFFFFFFF_FFFFFFFF_0_pageviews></div>'),t.put("app/components/sidenav/sidenav.html",'<md-sidenav md-component-id=left md-whiteframe=3><div layout=column><a href={{::sidenav.mainHref()}} class=logo ng-click=sidenav.main()></a><div layout=column ng-repeat="(key,value) in ::sidenav.menu" class=menu><md-button class="md-primary bold" ng-bind=key ng-attr-aria-label=key ng-click="sidenav.currentKey=sidenav.currentKey!==key?key:\'\'"></md-button><div class=item ng-class="{active:key===sidenav.currentKey}"><md-button class=md-primary ng-repeat="tag in value" ng-attr-aria-label=tag ng-click=sidenav.tag(tag)><a class=link ng-href={{::sidenav.tagHref(tag)}} ng-bind=tag></a></md-button></div></div></div><metrica></metrica></md-sidenav>'),t.put("app/components/toolbar/toolbar.html","<md-toolbar layout=row class=toolbar><md-button ng-click=toolbar.toggleLeftMenu()><i class=material-icons>menu</i></md-button></md-toolbar>")}]);
//# sourceMappingURL=../maps/scripts/app-214b03e5a6.js.map
