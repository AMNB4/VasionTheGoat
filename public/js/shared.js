document.addEventListener('DOMContentLoaded', () => {
    const lastUrl = localStorage.getItem('lastUrl');
    const lastBgImageData = localStorage.getItem('bgImageData');
  
    console.log('lastUrl:', lastUrl);
    console.log('lastBgImageData:', lastBgImageData);
  
    if (lastUrl && isValidUrl(lastUrl)) {
      console.log('Applying lastUrl:', lastUrl);
      applyBackgroundImage(lastUrl);
    } else if (lastBgImageData) {
      console.log('Applying lastBgImageData:', lastBgImageData);
      applyBackgroundImage(lastBgImageData);
    } else {
      console.log('No valid background data found in localStorage');
      document.body.style.background = "url('/img/vasionss.png') no-repeat center center fixed";
      document.body.style.backgroundSize = "cover";
      document.body.style.height = "100vh";
    }
  });
  
  function isValidUrl(string) {
    try {
      new URL(string);
      return true;
    } catch (_) {
      return false;  
    }
  }
  function applyBackgroundImage(url) {
      document.body.style.backgroundImage = `url(${url})`;
      document.body.style.backgroundRepeat = "no-repeat";
      document.body.style.backgroundSize = "cover"; // Ensure the background covers the entire viewport
      document.body.style.backgroundAttachment = "fixed"; // Make the background fixed when scrolling
      document.body.style.backgroundPosition = "center";
      document.body.style.height = "100vh"; // Ensure the body takes the full viewport height
      document.body.style.margin = "0"; // Remove any default margin
  }