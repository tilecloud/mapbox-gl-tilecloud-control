var t=function(){};t.prototype.onAdd=function(){this.container=document.createElement("div"),this.container.className="mapboxgl-ctrl";var t=document.createElement("img");t.src="https://tilecloud.github.io/logo/tilecloud-256x256.png",t.style.width="16px",t.style.height="16px",t.style.display="block",t.style.cursor="pointer",t.alt="TileCloud";var e=document.createElement("a");return e.href="https://tilecloud.io/",e.appendChild(t),e.title="自由な地図のための地図専用ホスティングサービス",this.container.appendChild(e),this.container},t.prototype.onRemove=function(){this.container.parentNode.removeChild(this.container)},t.prototype.getDefaultPosition=function(){return"bottom-left"},module.exports=t;
//# sourceMappingURL=mbgl-tilecloud-control.js.map
