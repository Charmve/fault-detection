!function(){"use strict";function a(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function i(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,i);var e=this.g3d=window.g3d=new ht.graph3d.Graph3dView;this.g3dDm=this.g3d.dm();var t=this.g2d=new ht.graph.GraphView;this.g2dDm=this.g2d.dm(),e.addToDOM(),t.addToDOM(e.getView()),e.setNear(10),e.setFar(5e4),e.setMovableFunc(function(){return!1}),e.getBrightness=function(){return 1};var n=new ht.graph3d.MapInteractor(e);e.setInteractors([n]),t.getSelectWidth=function(){return 0},t.handleScroll=function(){},t.handlePinch=function(){},t.setPannable(!1),t.setRectSelectable(!1),t.setScrollBarVisible(!1),t.setMovableFunc(function(){return!1}),this.interaction2D3D(t),this.event=new ht.Notifier,this.init()}new(function(e,t,n){return t&&a(e.prototype,t),n&&a(e,n),e}(i,[{key:"init",value:function(){var i=this;g3d.deserialize("scenes/htdesign/电信/3d拓扑图.json",function(e,t,n,a){n.setSkyBox(t.getDataByTag("skyBox")),n.moveCamera([-950,1137,2151],[-4,11,819],!1),i.parkAnim()})}},{key:"parkAnim",value:function(){var e=this.g3d,o=0;this.blinkTask={frame:20,interval:40,action:function(e){if("logo"===e.getTag()||"serverPanel1"===e.getTag()||"serverPanel2"===e.getTag())e.r3(0,e.r3()[1]+3*Math.PI/180,0);else if("rotate"===e.getTag()){var t=e.getScale3d(),n=.5+.05*Math.cos(o%36*10*Math.PI/180);e.setScale3d([t[0],n,t[2]])}else if("line"===e.getTag()){var a=e.s("shape3d.uv.offset")||[0,0];e.s("shape3d.uv.offset",[0,a[1]+.01])}else if("light"===e.getTag()){var i=e.s("top.uv.offset"),r=i?i[0]:1;e.s("top.uv.offset",[r-.02,0])}else if("scan"===e.getTag()){var s=1+.1*Math.cos(o%36*10*Math.PI/180);e.setScale3d([s,s,s])}else"float"===e.getTag()&&e.p3(e.p3()[0],e.p3()[1]+1*Math.cos(o%36*10*Math.PI/180),e.p3()[2])},afterAction:function(){o++}},e.dm().addScheduleTask(this.blinkTask)}},{key:"interaction2D3D",value:function(t){function e(e){t.getDataAt(e)&&(e.preventDefault(),e.stopPropagation())}var n=t.getView();n.addEventListener("mousedown",e),n.addEventListener("touchstart",e),n.addEventListener("mousewheel",e)}}]),i)}();