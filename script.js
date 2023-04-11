field.onclick = function(event){
    let fieldCoords = this.getBoundingClientRect();
    let ballCoordinates = {
        top: event.clientY - fieldCoords.top - field.clientTop - ball.clientHeight / 2 - 10,
        left: event.clientX - fieldCoords.left - field.clientLeft - ball.clientWidth / 2 - 7,
    }
    if(ballCoordinates.top < 0){ballCoordinates.top = 0;}
    if(ballCoordinates.left < 0){ballCoordinates.left = 0;}
  
    if(ballCoordinates.top + ball.clientHeight > field.clientHeight){
        ballCoordinates.top = field.clientHeight - ball.clientHeight
    }
    if(ballCoordinates.left + ball.clientWidth > field.clientWidth){
        ballCoordinates.left = field.clientWidth - ball.clientWidth;
    }

    ball.style.left = ballCoordinates.left + "px";
    ball.style.top = ballCoordinates.top + "px";
}
$(function(){
 $('#goalOne').on('click', function(){
  $(`.teamOne`).delay(1000).show(1000).delay(1200).hide(500);

 })
})
$(function(){
 $('#goalTwo').on('click', function(){
  $(`.teamTwo`).delay(1000).show(1000).delay(1200).hide(500);

 })
})