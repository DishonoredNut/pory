
$('#videoModal1').on('hidden.bs.modal', function () {
    var video = document.getElementById("Video1");
    video.pause();
    video.currentTime = 0;
});

$('#videoModal2').on('hidden.bs.modal', function () {
    var video = document.getElementById("Video2");
    video.pause();
    video.currentTime = 0;
});
