

function getImgs(){
  $.get('http://lorempixel.com/1920/1080/').then(function(data){
    console.log(data)
  })
}