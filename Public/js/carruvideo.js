const videoList = document.querySelector('.video-list ul');  
const mainVideo = document.getElementById('main-video');  
const videoTitle = document.getElementById('video-title');  

function loadVideo(videoSrc, title) {  
    mainVideo.src = videoSrc;  
    videoTitle.textContent = title;  
    mainVideo.load();  
    mainVideo.play();  
}  

videoList.addEventListener('click', (event) => {  
    if (event.target.tagName === 'LI' || event.target.parentNode.tagName === 'LI') {  
        let listItem = event.target.tagName === 'LI' ? event.target : event.target.parentNode;  
        const videoSrc = listItem.dataset.src;  
        const videoTitleText = listItem.dataset.title;  
        loadVideo(videoSrc, videoTitleText);  
    }  
});  