const iconType={success:"success",warning:"warning"};function checkAPlayer(){void 0==APlayerController.player?setAPlayerObject():void 0==APlayerController.observer&&setAPlayerObserver()}function setAPlayerObject(){void 0!=APlayerController.id&&document.querySelectorAll("meting-js").forEach((e,l)=>{e.meta.id==APlayerController.id&&void 0!=document.querySelectorAll("meting-js")[l].aplayer&&(APlayerController.player=document.querySelectorAll("meting-js")[l].aplayer,setAPlayerObserver())})}function setAPlayerObserver(){try{function e(e){let l=((e.clientX||e.changedTouches[0].clientX)-APlayerController.volumeBar.getBoundingClientRect().left)/APlayerController.volumeBar.clientWidth;l=Math.max(l,0),l=Math.min(l,1),APlayerController.player.volume(l)}APlayerController.player.on("play",function(e){updateAPlayerControllerStatus(),showToast("即将播放",iconType.success)}),APlayerController.player.on("pause",function(e){updateAPlayerControllerStatus(),showToast("音乐已暂停",iconType.warning)}),APlayerController.player.on("volumechange",function(e){onUpdateAPlayerVolume()}),APlayerController.player.on("loadstart",function(e){updateTitle()}),APlayerController.volumeBarWrap=document.getElementsByClassName("nav volume")[0].children[0],APlayerController.volumeBar=APlayerController.volumeBarWrap.children[0];const l=l=>{e(l)},r=o=>{APlayerController.volumeBarWrap.classList.remove("aplayer-volume-bar-wrap-active"),document.removeEventListener("mouseup",r),document.removeEventListener("mousemove",l),e(o)};APlayerController.volumeBarWrap.addEventListener("mousedown",()=>{APlayerController.volumeBarWrap.classList.add("aplayer-volume-bar-wrap-active"),document.addEventListener("mousemove",l),document.addEventListener("mouseup",r)}),updateAPlayerControllerStatus(),onUpdateAPlayerVolume(),APlayerController.observer=!0,console.log("APlayerController ready!")}catch(e){delete APlayerController.observer}}function updateAPlayerControllerStatus(){try{APlayerController.player.audio.paused?(document.getElementsByClassName("nav toggle")[0]&&document.getElementsByClassName("nav toggle")[0].children[0].classList.add("fa-play"),document.getElementsByClassName("nav toggle")[0]&&document.getElementsByClassName("nav toggle")[0].children[0].classList.remove("fa-pause")):(document.getElementsByClassName("nav toggle")[0]&&document.getElementsByClassName("nav toggle")[0].children[0].classList.remove("fa-play"),document.getElementsByClassName("nav toggle")[0]&&document.getElementsByClassName("nav toggle")[0].children[0].classList.add("fa-pause"))}catch(e){console.log(e)}}function onUpdateAPlayerVolume(){try{APlayerController.volumeBar.children[0].style.width=100*APlayerController.player.audio.volume+"%"}catch(e){console.log(e)}}function aplayerToggle(){checkAPlayer();try{APlayerController.player.toggle()}catch(e){console.log(e)}}function aplayerBackward(){checkAPlayer();try{APlayerController.player.skipBack(),APlayerController.player.play()}catch(e){console.log(e)}}function aplayerForward(){checkAPlayer();try{APlayerController.player.skipForward(),APlayerController.player.play()}catch(e){console.log(e)}}function aplayerVolume(e){checkAPlayer();try{APlayerController.player.volume(e)}catch(e){console.log(e)}}function updateTitle(){checkAPlayer();try{let e=APlayerController.player.list.index,l=APlayerController.player.list.audios[e];document.getElementsByClassName("nav music-title")[0].innerHTML=l.title}catch(e){console.log(e)}}function showToast(e,l){const r=swal.mixin({toast:!0,position:"top-end",showConfirmButton:!1,timer:l==iconType.success?5e3:2e3,timerProgressBar:l==iconType.success,onOpen:e=>{e.addEventListener("mouseenter",swal.stopTimer),e.addEventListener("mouseleave",swal.resumeTimer)}});let o=APlayerController.player.list.index,a=APlayerController.player.list.audios[o];r.fire({icon:l,title:e,html:a.title+"-"+a.artist,showClass:{popup:"animate__animated animate__fadeInRight"},hideClass:{popup:"animate__animated animate__fadeOutRight"}})}jQuery,checkAPlayer(),setTimeout(function(){checkAPlayer()},3e3),setTimeout(function(){checkAPlayer()},1e4);