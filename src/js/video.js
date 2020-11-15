var video;

window.onload = function() {
	video = document.getElementById("video");

  video.addEventListener('ended', function () {
    video.currentTime = 0;
    $('.block-4').addClass('block-4--overlayed');
    $('.block-4__video-play').show();
    $('.block-4__video-block').addClass('hidden');
  }, false);
};

function play() {
  $('.block-4').removeClass('block-4--overlayed');
  $('.block-4__video-play').hide();
  $('.block-4__video-block').removeClass('hidden');
  video.play();
}

function pause() {
  video.pause();
  $('.block-4').addClass('block-4--overlayed');
  $('.block-4__video-play').show();
  $('.block-4__video-block').addClass('hidden');
}

$(document).on('click', '.js-play', function () {
  play();
});

$(document).on('click', '#video', function () {
  pause();
});
