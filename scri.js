// LottieInteractivity.create({
// 	mode:"scroll",
// 	player:'#ani1',
// 	actions: [
// 		{
// 			visibility:[0,1],
// 			type: "seek",
// 			frames: [0, 1000],
// 		},
// 	]
// });
// LottieInteractivity.create({
// 	mode:"scroll",
// 	player:'#ani2',
// 	actions: [
// 		{
// 			visibility:[0,1],
// 			type: "seek",
// 			frames: [0, 800],
// 		},
// 	]
// });

// const controller=new ScrollMagic.controller();
// const scene=new ScrollMagic.scene({
//     triggerElement:'.animat',
//     duration:3000,
//     triggerHook:0.5
// }).addIndicators()
// .setPin('.animat')
// .addTo(controller)




 let aniAuto=(obj)=>{
	let id=obj.id
   var aniData={
	 ...obj,
	name: "buttonFour",
	container: document.getElementById(id?id:'lottie-three'),
	path: obj.path?obj.path:'https://assets.lottiefiles.com/datafiles/7HMs29Q0NhBUKCp/data.json',
	renderer: 'svg',
	loop: false,
	autoplay: false,
	 frame:[0,100],
	 id:'lottie',
	 divClass:"div",
	 play:"auto",
	 repeat:0,
	 startpoint:0,
	 endpoint:1,
	 midpoint:1
	  
	}
	
	var ani = bodymovin.loadAnimation(aniData);
	obj.play==="scroll"?
	  ani.addEventListener('DOMLoaded', function () {
	  tl = new TimelineMax({ repeat:obj.repeat })
	  tl.to({ frame: obj.startpoint}, obj.midpoint, {
		frame: ani.totalFrames - obj.endpoint,
		onUpdate: function () {
		  ani.goToAndStop(Math.round(this.targets()[0].frame), true)
		},
		Ease: Linear.easeNone
	  })
  
	  var controller = new ScrollMagic.Controller();
  
	  var scene = new ScrollMagic.Scene({
		triggerElement: `.${obj.divClass}`,
		offset: obj.offset,
		duration: obj.duration
	  }).setTween(tl).setPin(`#${obj.id}`).addTo(controller);
  
	}):"" 
	ani.addEventListener('DOMLoaded', ()=>{
	obj.play=="click"?
	 document.getElementById(obj.id).addEventListener("click", function() {
	  ani.playSegments(obj.frame, true);
	  })
	  :obj.play=='auto'?ani.playSegments(obj.frame, true):'';     
	})
  }
  
  
//   **************************************(call function)***************************
aniAuto({
	id:'lottie',
	divClass:'env',
	path:"./ani/ani1.json",
	frame:[10,200],
	play:'scroll',
	offset:350,
	duration:6000,
	startpoint:160,
	endpoint:150,
	midpoint:450
  });
aniAuto({
	id:'lottie2',
	divClass:'env1',
	path:"./ani/ani2.json",
	frame:[0,600],
	play:'scroll',
	offset:352,
	duration:5000,
	startpoint:0,
	endpoint:0.8,
	midpoint:1
	
  });

//   **********************************************************************************
  
  
  