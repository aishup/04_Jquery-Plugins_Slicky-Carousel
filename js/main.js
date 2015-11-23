$(".animsition").animsition({
    inClass: 'fade-in-right-lg',
  outClass: 'fade-out-right-lg',
  linkElement: 'header a',
  inDuration: 1000,
  outDuration: 500
});

$("#sticker").sticky({
  topSpacing:0,
  backgroundColor:'black'
});

$("#target h5").sticky({
  topSpacing:64,
  backgroundColor:'white'
});

$('#sticker').on('sticky-start', function() { 
$('#sticker h1').html("We built <strong> Great </strong> Apps")
});

$('#sticker').on('sticky-end', function() { 
$('#sticker h1').html("We built apps")
});


$('#target').on('sticky-end', function() { 
$('#target h5').append("<a href='#'>Email us</a>")
})

$('#target').on('sticky-start', function() { 
$('#target h5').append("<a href='#'>Email us</a>")
});


$('#target').on('sticky-end', function() { 
$('#target h5 a').remove(); 
});



