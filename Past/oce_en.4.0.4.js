(function(b,e){function r(){var d=setInterval(function(){if(0<k){b("#discussion-list").find("td.voting:not(#cv):not(:has(.pin)):contains('                ')").attr("id","cv").html("<div class='locked'></div>").end().find("ul.upVoted:not(#cv)").attr("id","cv").parent().parent().css("border-left","2px solid #009700").end().end().end().find("ul.downVoted:not(#cv)").attr("id","cv").parent().parent().css("border-left","2px solid #e23636").end().end().end().find("button.up-vote").remove().end().find("button.down-vote").remove().end();
for(var a=b("#discussion-list").find(".riot-apollo.voting:not(.wx)"),d=0;d<a.length;++d){var c=a[d];c.className+=" wx";$v=b(c);c=$v.attr("data-apollo-up-votes");var f=$v.attr("data-apollo-down-votes");c-=f;1===c?$v.find(".total-votes").attr("style","color:#13bbc1").end().find("ul.riot-voting").append("<li>vote</li>"):0===c?$v.find(".total-votes").attr("style","color:#13bbc1").end().find("ul.riot-voting").append("<li>votes</li>"):5<c?$v.find(".total-votes").attr("style","color:#22b722").end().find("ul.riot-voting").append("<li>votes</li>"):
-1<[2,3].indexOf(c)?$v.find(".total-votes").attr("style","color:#b3c524").end().find("ul.riot-voting").append("<li>votes</li>"):-1<[-1,-2].indexOf(c)?$v.find(".total-votes").attr("style","color:#ffda4e").end().find("ul.riot-voting").append("<li>votes</li>"):-1<[-3,-4].indexOf(c)?$v.find(".total-votes").attr("style","color:#ffa51b").end().find("ul.riot-voting").append("<li>votes</li>"):-4>c?$v.find(".total-votes").attr("style","color:#fd3b3b").end().find("ul.riot-voting").append("<li>votes</li>"):
-1<[4,5].indexOf(c)&&$v.find(".total-votes").attr("style","color:#86bf00").end().find("ul.riot-voting").append("<li>votes</li>")}if(0<k&&p&&-1<["Help & Support (OCE)","Ask the Community","Discuss the Boards","Testing Area"].indexOf(t))for($discussionItems=b(".discussion-list-item:not(.wr)"),a=0;a<$discussionItems.length;a++)$current=b($discussionItems[a]),$discussionItems[a].className+=" wr",discID=$current.attr("data-discussion-id"),appID=$current.attr("data-application-id"),u($current,a,"https://apollo."+
g+".leagueoflegends.com/apollo/applications/"+appID+"/discussions/"+discID+"?page_size=0&")}v();"undefined"!==e.GLOB.chronoView&&w()},750);setTimeout(function(){clearInterval(d)},1E4)}function v(){e.GLOB.Group1&&b("a.profile-hover:not(.cka)").each(function(){$this=b(this);this.className+=" cka";if(!1===$this.parent().hasClass("isRioter")){var d=e.GLOB.Group1,a=e.GLOB.Group2,m=e.GLOB.Group3,c=$this,f,q=c.attr("data-apollo-pvpnet-id");for(f=d.length-1;-1<f;--f)q===d[f]&&c.parents(".byline:not(.discussion-footer)").find(".inline-profile:first").append("<span class='tags cwrenchmanoce'><a href='https://boards."+
g+".leagueoflegends.com/"+h+"/c/help-support-oce/nE4lj5EB'>Wrenchman</a></span>").end().end().closest(".nested-comment").find(".masthead:first").append("<span class='ttriangle twrenchmanoce'></span>").end().end().closest(".nested-comment:not(.glow):not(.flat)").attr("style","border-top:1px solid #c98f1a").end().attr("id","wrenchman");for(f=a.length-1;-1<f;--f)q===a[f]&&c.parents(".byline:not(.discussion-footer)").find(".inline-profile:first").append("<span class='tags cemissary'><a href='https://boards."+
g+".leagueoflegends.com/"+h+"/c/player-behaviour/Edu7E6Bp'>Emissary</a></span>").end().end().closest(".nested-comment").find(".masthead:first").append("<span class='ttriangle temissary'></span>").end().end().closest(".nested-comment:not(.glow):not(.flat)").attr("style","border-top:1px solid #458b00").end().attr("id","emissary");for(f=m.length-1;-1<f;--f)q===m[f]&&c.parents(".byline:not(.discussion-footer)").find(".inline-profile:first").append("<span class='tags cinstructor'><a href='https://boards."+
g+".leagueoflegends.com/"+h+"/c/announcements-en/91vEPc8g'>Instructor</a></span>").end().end().closest(".nested-comment").find(".masthead:first").append("<span class='ttriangle tinstructor'></span>").end().end().closest(".nested-comment:not(.glow):not(.flat)").attr("style","border-top:1px solid #5079c4").end().attr("id","instructor")}else x($this)})}function x(b){var a=b.attr("href").split("/");z="https://boards."+g+".leagueoflegends.com/api/users/"+a[3]+"/"+a[4];a=new XMLHttpRequest;a.onreadystatechange=
function(){if(4==this.readyState&&200===this.status){var a=JSON.parse(this.responseText);null!==a.profile&&!0===a.profile.data.hasOwnProperty("title")&&(a=a.profile.data.title,b.parents(".byline:not(.discussion-footer)").find(".inline-profile:first").append("<span class='tags crioter'>"+a+"</span>"))}};a.open("GET",z,!0);a.send()}function w(){if(1===e.GLOB.chronoView&&2>k){var d=b("#discussion").find("li.view-in-mod-tool a").attr("href").split("/"),a=d[4],m=d[6];b(".nested-comment:not(.isChild):not(.isDeleted)").each(function(){this.className+=
" isChild";var c=b(this).attr("id");if(void 0!==c&&c.length&&12<c.length){l=c.slice(8,-4);c="https://boards."+g+".leagueoflegends.com/api/"+a+"/discussions/"+m+"/comment/"+l+".json";var d=this,e=new XMLHttpRequest;e.onreadystatechange=function(){if(4==this.readyState&&200===this.status){var a=JSON.parse(this.responseText),c=a.user.name,f=a.user.realm,e=a.message;!0===a.deleted&&(e='<span style="color:#fff;background-color:#9e2020;padding:3px 10px;border-radius:5px;display:inline-flex">Sorry! The comment you have requested is no longer available.</span>');
b(d).find(".body").prepend("<div class='op-ref' style='display:none'><p>"+e+"</p><a class='footer' href='?show=flat&comment="+l+"'>GO TO COMMENT</a></div>").end().find(".header.byline.clearfix").append("<span class='op-ref-bar'>In response to: <a href='https://boards."+g+".leagueoflegends.com/"+h+"/player/"+f+"/"+c+"'>"+c+"</a> ("+f+') (<a class=\'toggle-op noshow\' href=\'javascript:;\' onclick=\'$(this).hasClass("noshow") ? ($(this).parent().parent().parent().find(".op-ref").attr("style", "display:block"), $(this).attr("class", "toggle-op yesshow"), $(this).text("hide")) : ($(this).parent().parent().parent().find(".op-ref").attr("style", "display:none"), $(this).attr("class", "toggle-op noshow"), $(this).text("show"));\'>show</a>)</span>')}};
e.open("GET",c,!0);e.send()}})}}function u(b,a,e){p.request({url:e,method:"GET"},function(a){var c=JSON.parse(a.data);!0===c.discussion.content.hasOwnProperty("pinned")&&!1===c.discussion.hasRioterComments&&(a=c.discussion.content.pinned,c=c.discussion.id,"ElA0rvVL"===appID?b.find(".riot-commented").append("<a href='/"+h+"/f/"+appID+"/d/"+c+"?comment="+a+"' class='dtb-fist opaque'>&nbsp;</a>"):"tn3qAbc8"===appID?b.find(".riot-commented").append("<a href='/"+h+"/f/"+appID+"/d/"+c+"?comment="+a+"' class='atc-fist opaque'>&nbsp;</a>"):
"osqw6G4M"===appID?b.find(".riot-commented").append("<a href='/"+h+"/f/"+appID+"/d/"+c+"?comment="+a+"' class='poro-fist opaque'>&nbsp;</a>"):"6heBIhQc"===appID&&b.find(".riot-commented").append("<a href='/"+h+"/f/"+appID+"/d/"+c+"?comment="+a+"' class='dtb-fist opaque'>&nbsp;</a>"))},function(a){var b=a.data;console.log(a.status);console.log(b)})}e.GLOB={};var k=b(".discussion-list-item").length,t=b("#breadcrumbs h2").text();b(function(){e.GLOB.chronoView=b("#comments").find(".flat-comments").length});
var g=window.location.href.split(".")[1],h=window.location.href.split("/")[3],n="https://apollo."+g+".leagueoflegends.com/apollo",p;b.getScript(n+"/cors/easyXDM.min.js",function(){p=new easyXDM.Rpc({remote:n+"/cors/index.html",swf:n+"/easyXDM.swf",remoteHelper:n+"/name.html"},{remote:{request:{}}})});(function(){var b="https://boards."+g+".leagueoflegends.com/api/PlNcL9TL/discussions/MJdEKKbN?page_size=0",a=new XMLHttpRequest;a.onreadystatechange=function(){if(4==this.readyState&&200===this.status){var a=
JSON.parse(this.responseText).discussion.content.body_html.split(";");e.GLOB.Group1=a[1].split(",");e.GLOB.Group2=a[3].split(",");e.GLOB.Group3=a[5].split(",")}};a.open("GET",b,!0);a.send()})();r();(function(){0!==b("#comments").find(".pager.clearfix").length&&b(".pager").children("a").click(function(){b("html,body").animate({scrollTop:b(".comments-header-container").offset().top},"slow")})})();(function(){if(0===k&&2===b(".cant-comment-warning").length&&0===b("#sidebar").find("div.new-discussion-box.box a").length){var d=
b("#comments").find("span.cant-comment-warning").text(),a=b("#sidebar").find("div.new-discussion-box.box a").attr("href");switch(h){case "en":-1<d.indexOf("Commenting is disabled")&&b(".cant-comment-warning").html('<span class="icon-lock-brown"></span>This thread has been archived. <a href="'+a+'">Create a new thread instead?</a>');break;case "pl":-1<d.indexOf("Komentowanie jest wy\u0142\u0105czone")&&b(".cant-comment-warning").html('<span class="icon-lock-brown"></span>Ten w\u0105tek zosta\u0142 zamkni\u0119ty. <a href="'+
a+'">W\u0105tek zosta\u0142 zamkni\u0119ty. Aby kontynuowa\u0107 dyskusj\u0119, stw\u00f3rz nowy w\u0105tek.</a>');break;case "es":-1<d.indexOf("Los comentarios est\u00e1n desactivados")&&b(".cant-comment-warning").html('<span class="icon-lock-brown"></span>Esta discusi\u00f3n ha sido archivada. <a href="'+a+'">\u00bfCrear una nueva discusi\u00f3n en su lugar?</a>');break;case "hu":-1<d.indexOf("A hozz\u00e1sz\u00f3l\u00e1s nem enged\u00e9lyezett")&&b(".cant-comment-warning").html('<span class="icon-lock-brown"></span>A t\u00e9ma archiv\u00e1lva lett. <a href="'+
a+'">L\u00e9trehozol ink\u00e1bb egy \u00faj t\u00e9m\u00e1t?</a>');break;case "ro":-1<d.indexOf("Comentariile sunt dezactivate")&&b(".cant-comment-warning").html('<span class="icon-lock-brown"></span>Aceast\u0103 postare a fost arhivat\u0103. <a href="'+a+'">Creezi o nou\u0103 postare?</a>');break;case "pt":-1<d.indexOf("Coment\u00e1rios desativados")&&b(".cant-comment-warning").html('<span class="icon-lock-brown"></span>Esta discuss\u00e3o foi arquivada. <a href="'+a+'">Criar uma nova discuss\u00e3o em vez disso?</a>');
break;case "fr":-1<d.indexOf("Les commentaires sont d\u00e9sactiv\u00e9s")&&b(".cant-comment-warning").html('<span class="icon-lock-brown"></span>Cette discussion a \u00e9t\u00e9 archiv\u00e9e. <a href="'+a+'">Voulez vous cr\u00e9er un nouveau sujet ?</a>');break;case "it":-1<d.indexOf("I commenti sono disabilitati")&&b(".cant-comment-warning").html('<span class="icon-lock-brown"></span>Questa discussione \u00e8 stata archiviata. <a href="'+a+'">Vuoi creare una nuova discussione?</a>');break;case "de":-1<
d.indexOf("Kommentare sind deaktiviert")&&b(".cant-comment-warning").html('<span class="icon-lock-brown"></span>Diese Diskussion wurde archiviert. <a href="'+a+'">Soll eine neue Diskussion erstellt werden?</a>');break;case "el":-1<d.indexOf("\u03a4\u03b1 \u03c3\u03c7\u03cc\u03bb\u03b9\u03b1 \u03ad\u03c7\u03bf\u03c5\u03bd \u03b1\u03c0\u03b5\u03bd\u03b5\u03c1\u03b3\u03bf\u03c0\u03bf\u03b9\u03b7\u03b8\u03b5\u03af")&&b(".cant-comment-warning").html('<span class="icon-lock-brown"></span>\u0391\u03c5\u03c4\u03ae \u03b7 \u03c3\u03c5\u03b6\u03ae\u03c4\u03b7\u03c3\u03b7 \u03ad\u03c7\u03b5\u03b9 \u03bc\u03c0\u03b5\u03b9 \u03c3\u03c4\u03bf \u03b1\u03c1\u03c7\u03b5\u03af\u03bf. <a href="'+
a+'">\u0398\u03ad\u03bb\u03b5\u03b9\u03c2 \u03bd\u03b1 \u03b4\u03b7\u03bc\u03b9\u03bf\u03c5\u03c1\u03b3\u03ae\u03c3\u03b5\u03b9\u03c2 \u03bc\u03b9\u03b1 \u03bd\u03ad\u03b1 \u03c3\u03c5\u03b6\u03ae\u03c4\u03b7\u03c3\u03b7;</a>');break;case "cs":-1<d.indexOf("Koment\u00e1\u0159e jsou zak\u00e1z\u00e1ny")&&b(".cant-comment-warning").html('<span class="icon-lock-brown"></span>Tato diskuze byla archivov\u00e1na. <a href="'+a+'">Chce\u0161 vytvo\u0159it novou diskuzi?</a>')}}})();b(document).click(r)})(jQuery,
this);