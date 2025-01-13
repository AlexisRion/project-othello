/******************************************
 * MODULE FOR ALL SOUND  RELATED FUNCTIONS
 ******************************************/

//function to play an audiofile with the audiofile in parameter
export function playAudio(audio) {
    audio.play();
}

//function to pause an audiofile in play with the audiofile in parameter
export function pauseAudio(audio) {
  audio.pause();
}