$( document ).ready(function(){

  // music player
  var starstruck = new Howl({
    src: ['./assets/audio/starstruck.mp3'],
    loop: true,
    volume: 0.8
  });

  starstruck.play();

  $(".music-btn .pause").click(function() {
    starstruck.pause();
    $(".music-btn .pause").hide();
    $(".music-btn .play").css("display","block");
    $(".music-btn .play").show();
  });

  $(".music-btn .play").click(function() {
    starstruck.play();
    $(".music-btn .pause").show();
    $(".music-btn .play").hide(); 
  });

  $('.marquee').marquee({
    //duration in milliseconds of the marquee
    duration: 50,
    speed: 50,
    //gap in pixels between the tickers
    gap: 10,
    //time in milliseconds before the marquee will start animating
    delayBeforeStart: 0,
    //'left' or 'right'
    direction: 'left',
    //true or false - should the marquee be duplicated to show an effect of continues flow
    duplicated: true
  });






});