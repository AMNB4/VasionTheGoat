const Proxy = document.getElementById("proxyIframe");
const iframe = document.getElementById("game-iframe");
function toggleFullscreen() {
    if (!document.fullscreenElement) {
        if (iframe.requestFullscreen) {
            iframe.requestFullscreen();
        } else if (iframe.mozRequestFullScreen) {
            iframe.mozRequestFullScreen();
        } else if (iframe.webkitRequestFullscreen) {
            iframe.webkitRequestFullscreen();
        } else if (iframe.msRequestFullscreen) {
            iframe.msRequestFullscreen();
        }
    } else {
        if (document.exitFullscreen) {
            document.exitFullscreen();
        } else if (document.mozCancelFullScreen) {
            document.mozCancelFullScreen();
        } else if (document.webkitExitFullscreen) { 
            document.webkitExitFullscreen();
        } else if (document.msExitFullscreen) {
            document.msExitFullscreen();
        }
    }
}


function refreshIframePRX() {
    const Proxy = document.getElementById("proxyIframe");
    Proxy.src = proxyIframe.contentWindow.location.href;
}


function toggleFullscreenPRX() {
    const iframe = document.getElementById("proxyIframe");

    if (!document.fullscreenElement) {

        if (iframe.requestFullscreen) {
            iframe.requestFullscreen();
        } else if (iframe.mozRequestFullScreen) {
            iframe.mozRequestFullScreen();
        } else if (iframe.webkitRequestFullscreen) { 
            iframe.webkitRequestFullscreen();
        } else if (iframe.msRequestFullscreen) { 
            iframe.msRequestFullscreen();
        }
    } else {
        if (document.exitFullscreen) {
            document.exitFullscreen();
        } else if (document.mozCancelFullScreen) {
            document.mozCancelFullScreen();
        } else if (document.webkitExitFullscreen) {
            document.webkitExitFullscreen();
        } else if (document.msExitFullscreen) {
            document.msExitFullscreen();
        }
    }
}


function refreshIframe() {
    iframe.src = iframe.contentWindow.location.href;
}
        function goBack() {
            Proxy.contentWindow.history.back()
        }

        function goForward() {
            Proxy.contentWindow.history.forward()
        }
