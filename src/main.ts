require('aframe');
//require('aframe-meshline-component');
//require('aframe-physics-system');
//require('aframe-physics-extras');
import $ from 'jquery';

/*let sphere = document.querySelector('a-sphere') as HTMLElement;
sphere.addEventListener('mouseenter', function () {
  sphere.setAttribute('scale', {x: 1.2, y: 1.2, z: 1.2} as any);
});
sphere.addEventListener('mouseleave', function () {
  sphere.setAttribute('scale', {x: 1, y: 1, z: 1} as any);
});*/

$("#a-sphere").on("mouseenter", function(){
    //this.setAttribute('scale', {x: 1.2, y: 1.2, z: 1.2} as any);
    console.log("Test" + this);
})

$("#a-sphere").on("mouseleave", function(){
    //this.setAttribute('scale', {x: 1, y: 1, z: 1} as any);
})

