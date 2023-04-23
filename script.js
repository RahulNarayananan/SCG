// $(document).ready(function(){
//   $(".hide").hide();
  
  
//   $(".tp").hover(function(){
//     $(".hide").hide();
//     $(".TP-txt").fadeIn(300);
//   });
// });
const box = document.getElementsByClassName('tp');

// 👇️ Change text color on mouseover
box.addEventListener('mouseover', function handleMouseOver() {
  box.style.color = 'red';
});

// 👇️ Change text color back on mouseout
box.addEventListener('mouseout', function handleMouseOut() {
  box.style.color = 'black';
});