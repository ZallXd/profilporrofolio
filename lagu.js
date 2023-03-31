var audio=new Audio("https://x2convert.video/id/Thankyou?token=U2FsdGVkX18YlR%2fTgwvm%2f1IIUSlkUG7ZELBH7oUJg%2btbzUK%2b7uKbn4mIy0%2bvyb%2fHkkho%2bqBOViwYkKBLE568IqyMIE1prYpYBago%2fxoS5M4uSaBAEedZ0MDf7JEddVLkMUmL5BZgJiOgy8sI9NIC6lgoHpmp9T1TbOrKbGW%2bQg7yFYpx5KI5Stzkrx0uWlKptISeZe9P83HFuV2FAC20GrN2OP8ng95W7%2f2pu0eOllU%3d&s=youtube&id=&h=3606243479182093620"),playing=false;

   audio.currentTime=160;

let xy="",z=0,start=true;

window.onclick=()=>{

if(!playing){

var playPromise = audio.play();

if (playPromise !== undefined) {

  playPromise.then(function() {

  }).catch(function(error) { });}





playing=true; ('tp').innerHTML=(audio.currentTime);}else{

var playPromise = audio.pause();

if (playPromise !== undefined) {

  playPromise.then(function() {

  }).catch(function(error) { });}

playing=false; ('tp').innerHTML="";}

if(start) ('tp').innerHTML='';start=false

}
