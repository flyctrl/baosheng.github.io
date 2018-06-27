// build time:Thu Jun 28 2018 00:16:43 GMT+0800 (GMT+08:00)
function HtmlTextBox(t,e,i,s,o,h,n){Phaser.Group.call(this,t);this.game=t;this.parentElement=t.canvas.parentNode;this.textBoxElement=document.createElement("input");this.textBoxElement.style.position="absolute";this.textBoxElement.style.left=e+"px";this.textBoxElement.style.top=i+"px";this.textBoxElement.style.width=s;this.textBoxElement.style.height=o;this.parentElement.insertBefore(this.textBoxElement,t.canvas);this._x=e;this._y=i;this._width=s;this._height=o;this._style=n;this.text=h;if(n!="undefined"){this.style=n}t.add.existing(this);this.onDestroy.add(function(t){this.parentElement.removeChild(this.textBoxElement)},this);this.update()}HtmlTextBox.prototype=Object.create(Phaser.Group.prototype);HtmlTextBox.prototype.constructor=HtmlTextBox;HtmlTextBox.prototype.update=function(){var t=this.game.canvas;var e=t.offsetLeft;var i=t.offsetTop;var s=t.offsetWidth;var o=t.offsetHeight;if(this.oldCanvasWidth==s&&this.oldCanvasHeight==o&&this.oldCanvasX==e&&this.oldCanvasY==i)return;var h=this.game.world.width;var n=this.game.world.height;var x=s/h;var r=o/n;var l=this._x/h;var a=this._y/n;var p=e+s*l;var y=i+o*a;var f=this._width*x;var d=this._height*r;this.setX(p);this.setY(y);this.setWidth(f);this.setHeight(d);this.oldCanvasWidth=s;this.oldCanvasHeight=o;this.oldCanvasX=e;this.oldCanvasY=i};HtmlTextBox.prototype.setX=function(t){this.textBoxElement.style.left=t+"px"};HtmlTextBox.prototype.setY=function(t){this.textBoxElement.style.top=t+"px"};HtmlTextBox.prototype.setWidth=function(t){this.textBoxElement.style.width=t+"px"};HtmlTextBox.prototype.setHeight=function(t){this.textBoxElement.style.height=t+"px"};HtmlTextBox.prototype.setStyle=function(t){this.textBoxElement.style=t};Object.defineProperty(HtmlTextBox.prototype,"x",{get:function(){return this._x},set:function(t){this.setX(t);this._x=t}});Object.defineProperty(HtmlTextBox.prototype,"y",{get:function(){return this._y},set:function(t){this.setY(t);this._y=t}});Object.defineProperty(HtmlTextBox.prototype,"width",{get:function(){return this._width},set:function(t){this.setWidth(t);this._width=t}});Object.defineProperty(HtmlTextBox.prototype,"height",{get:function(){return this._height},set:function(t){this.setHeight(t);this._height=t}});Object.defineProperty(HtmlTextBox.prototype,"style",{get:function(){return this._style},set:function(t){for(var e in t){this.textBoxElement.style[e]=t[e]}this._style=t}});Object.defineProperty(HtmlTextBox.prototype,"text",{get:function(){return this._text},set:function(t){this.textBoxElement.value=t;this._text=t}});
//rebuild by neat 