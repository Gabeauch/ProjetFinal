/*_________________Barre de lecture vidéo (très scuffed, mais ca marche)_________________*/

const barreProgres = document.querySelector('.barre');
const video = document.querySelector('.video');

video.addEventListener('timeupdate', function() {
  let fraction = video.currentTime/video.duration;
  barreProgres.style.transform = "scaleX("+ fraction +")";
});

const range = document.querySelector('.currentTime');
let playbackRate = 1;

range.addEventListener('input', function() {
  video.currentTime = range.value * video.duration;
});

/*_________________Chaine d'évenements de boutons_________________*/

const btnStart = document.querySelector('.btnStart');
const gifStart = document.querySelector('.coreStartup');
const startPage = document.querySelector('.startPage');
const fondBlanc = document.querySelector('.fondNoir');
const videoPlayer = document.querySelector('.videoPlayer'); 
const soundStartup = new Audio("media/soundStartup.wav");
const btnPleinEcran = document.querySelector('.btnPleinEcran');
const btnSonMoins = document.querySelector('.btnSonMoins');
const btnSonPlus = document.querySelector('.btnSonPlus');
const btnMail = document.querySelector('.btnMail');
const notification = document.querySelector('.notification');
const btnFermerInterface = document.querySelector('.btnFermerInterface');
const interfacePage = document.querySelector('.interface');
const btnStop = document.querySelector('.btnStop');
const btnPlay = document.querySelector('.btnPlay');
const btnPause = document.querySelector('.btnPause');

btnStart.addEventListener('click', function() {
	gifStart.classList.add("gif");
	soundStartup.play();
	gifStart.addEventListener('animationend', function() {
		startPage.style.display = "none";
		interfacePage.classList.add("displayRight");
		videoPlayer.classList.add("displayRight");
		videoPlayer.classList.add("projection");
		btnFermerInterface.classList.add("displayRight");
		btnFermerInterface.classList.add("projection");
		console.log("1");
		videoPlayer.addEventListener('animationend', function() {
			videoPlayer.classList.add("screenProjection2");
			btnFermerInterface.classList.add("screenProjection3");
			btnPlay.classList.add("projection");
			btnPlay.classList.add("displayRight");
			console.log("2");
			btnPlay.addEventListener('animationend', function() {
				btnPlay.classList.add("screenProjection");
				btnPleinEcran.classList.add("displayRight");
				btnPleinEcran.classList.add("projection");
				console.log("3");
				btnPleinEcran.addEventListener('animationend', function() {
					btnPleinEcran.classList.add("screenProjection");
					btnStop.classList.add("displayRight");
					btnStop.classList.add("projection");
					console.log("4");
					btnStop.addEventListener('animationend', function() {
						btnStop.classList.add("screenProjection");
						btnSonMoins.classList.add("displayRight");
						btnSonMoins.classList.add("projection");
						console.log("5");
						btnSonMoins.addEventListener('animationend', function() {
							btnSonMoins.classList.add("screenProjection");
							btnSonPlus.classList.add("displayRight");
							btnSonPlus.classList.add("projection");
							console.log("6");
							btnSonPlus.addEventListener('animationend', function() {
								btnSonPlus.classList.add("screenProjection");
								console.log("7");
							});
						});
					});
				});
			});
		});
	});
	fondBlanc.style.backgroundColor = "white";
});

/*_________________Bouton Play/Pause_________________*/


btnPlay.addEventListener('click', function() {
	btnPlay.classList.remove("displayRight");
	btnPause.classList.add("displayRight");
	video.play();
});


btnPause.addEventListener('click', function() {
	btnPause.classList.remove("displayRight");
	btnPlay.classList.add("displayRight");
	video.pause();
});	

/*_________________Bouton FullScreen_________________*/

btnPleinEcran.addEventListener('click', function() {
	video.requestFullscreen();
});	

/*_________________Bouton Stop_________________*/

btnStop.addEventListener('click', function() {
	video.pause();
	btnPause.classList.remove("displayRight");
	btnPlay.classList.add("displayRight");
	video.currentTime = 0;
});	

/*_________________Bouton Son moins_________________*/

let volume = 0.5;
video.volume = volume;

btnSonMoins.addEventListener('click', function() {
  volume -= 0.1;
  if (volume < 0) {
    volume = 0;
  }
  video.volume = volume;
});

/*_________________Bouton Son Plus_________________*/


btnSonPlus.addEventListener('click', function() {
  volume += 0.1;
  if (volume > 1) {
    volume = 1;
  }
  video.volume = volume;
});


/*_________________Bouton Fermer interface_________________*/


btnFermerInterface.addEventListener('click', function() {
	interfacePage.classList.add("fermetureInterface");
	/*videoPlayer.classList.remove("projection");
	videoPlayer.classList.remove("screenProjection2");
	btnFermerInterface.classList.remove("projection");
	btnFermerInterface.classList.remove("displayRight");
	btnFermerInterface.classList.remove("screenProjection3");
	btnPlay.classList.remove("projection");
	btnPlay.classList.remove("displayRight");
	btnPlay.classList.remove("screenProjection");
	btnPleinEcran.classList.remove("displayRight");
	btnPleinEcran.classList.remove("projection");
	btnPleinEcran.classList.remove("screenProjection");
	btnStop.classList.remove("displayRight");
	btnStop.classList.remove("projection");
	btnStop.classList.remove("screenProjection");
	btnSonMoins.classList.remove("displayRight");
	btnSonMoins.classList.remove("projection");
	btnSonMoins.classList.remove("screenProjection");
	btnSonPlus.classList.remove("displayRight");
	btnSonPlus.classList.remove("projection");
	btnSonPlus.classList.remove("screenProjection");*/
	interfacePage.addEventListener('animationend', function() {
		interfacePage.classList.remove("displayRight");
		interfacePage.classList.remove("fermetureInterface");
		btnMail.classList.add("displayRight");
		btnMail.classList.add("mailAnim");
		btnMail.addEventListener('animationend', function(){
			notification.classList.add("displayRight");
			notification.classList.add("notifAnim");
			console.log("8");
		},{once:true});
	});
});

/*_________________Bouton mail_________________*/

btnMail.addEventListener('click', function(){
	notification.classList.remove("notifAnim");
	notification.classList.add("mailQuit");
	btnMail.classList.add("mailQuit");	
	notification.addEventListener('animationend', function() {
		btnMail.classList.remove("displayRight");
		notification.classList.remove("displayRight");
		btnMail.classList.remove("mailAnim");
		btnMail.classList.remove("mailQuit");
		interfacePage.classList.add("displayRight");
		/*videoPlayer.classList.add("displayRight");
		videoPlayer.classList.add("projection");
		btnFermerInterface.classList.add("displayRight");
		btnFermerInterface.classList.add("projection");*/
	});
});
