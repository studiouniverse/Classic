!function(){$([".layout-horizontal .group"]).forEach(function(a){var t=!1,n=!1,o=!1,e=!1,l=!1;a.on("scroll",function(){a.hasClass("scrolled")||a.scrollLeft>.15*$.screenWidth&&a.addClass("scrolled")}).on("mousedown",function(n){clearInterval(l),t=!0,e=a.scrollLeft,o=e+n.clientX}).on("mousemove",function(e){t&&o&&(a.scrollLeft=o-e.clientX,n||(n=Date.now()))}).on("mouseup mouseleave",function(){if(t){if(o){var c=Date.now()-n,s=a.scrollLeft-e,r=s<0?-1:1,f=Math.min(2.5,Math.abs(s)/c);if(f>.7&&Math.abs(s)>55){clearInterval(l),f*=f,f*=f;var i=8,d=.6;f-=.6*(f-8),l=setInterval(function(){a.scrollLeft=a.scrollLeft+f*r,(f-=.25)<=0&&clearInterval(l)},$.interval)}}o=!1,t=!1,n=!1}})})}(),function(){function a(){t.forEach(function(a){var t=a.getBounds();t.top<0?(a.classList.add("fading"),a.classList.add("faded")):t.top>=0&&t.top+t.height/2<=$.screenHeight&&a.classList.add("fading")}),t=$(["[data-fade]:not(.fading)"])}var t=$(["[data-fade]"]);a(),$.addUpdate({updateOnScroll:!0,draw:function(){a()}})}();