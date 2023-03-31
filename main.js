var audio=new Audio("https://x2convert.video/id/Thankyou?token=U2FsdGVkX19TqO3BSSKy5t5dJRxwbbVv9dnIqNA8VGlYHN%2f7yqUBao4D%2bpQrIe4p%2bGlH%2b4%2fuwVFLgtX%2bNlautM9LVrZpVctogxzqvWtWndcDFbxIVuPF%2f7YVD%2bmBHZR%2fZFnKJT9w1pUbQ113JwZAs2Iif%2fqG9i%2fmSqA1vSqWR%2fwlzg3PIhgCVydiaPsZPpaPPEqHTALOp6jtGSOpeoZf1kL9hHiHxIez%2fZ22HyNioEM%3d&s=youtube&id=&h=7293937682390376117"),playing=false;

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
