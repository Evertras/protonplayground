require('./proton/proton-1.0.1.js');

var canvasElement = document.getElementById('main');
var canvasContext = canvasElement.getContext('2d');
var canvas = canvasContext.canvas;

var proton = new Proton();
var emitter = new Proton.Emitter();

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

//set Rate
emitter.rate = new Proton.Rate(Proton.getSpan(1, 2), 0.1);
//add Initialize
emitter.addInitialize(new Proton.Radius(2, 4));
emitter.addInitialize(new Proton.Life(120));
emitter.addInitialize(new Proton.Velocity(0.1, Proton.getSpan(0, 360), 'polar'));
//add Behaviour
emitter.addBehaviour(new Proton.Color('ff0000', '0000ff'));
emitter.addBehaviour(new Proton.Alpha(1, 0));
emitter.addBehaviour(new Proton.Collision(emitter));
//set emitter position
emitter.p.x = canvas.width / 2;
emitter.p.y = canvas.height / 2;
emitter.emit();
//add emitter to the proton
proton.addEmitter(emitter);
// add canvas renderer
var renderer = new Proton.Renderer('canvas', proton, canvasElement);
renderer.start();

tick();

function tick() {
  requestAnimationFrame(tick);
  proton.update();
}

