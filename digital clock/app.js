var timShow = document.getElementById('heading');
var minSec = 0;
var secnd = 0;
var minute = 0;
var strtBut = document.getElementById('start');
var tim;
function strt() {

    if (strtBut.innerHTML === 'Start') {
        tim = setInterval(function () {
            minSec++;


            if (minSec === 9) {
                secnd++;
                minSec = 0;
            }
          
            if (secnd === 60) {
                minute++;
                secnd = 0;
            }
            timShow.innerHTML = '0' + minute + ':' + secnd + ':' + minSec + '0';

            if(secnd < 10){
            timShow.innerHTML = '0' + minute + ':' + '0' + secnd + ':' + minSec + '0';
            }

        }, 100);
        
        strtBut.innerHTML = 'Stop';
    }
    else {
        clearInterval(tim);
        strtBut.innerHTML = 'Start';
    }
}
function stup() {
    clearInterval(tim);
    strtBut.innerHTML = 'Start';
    minute = 0;
    secnd = 0;
    minSec = 0;
    timShow.innerHTML = '0' + minute + ':' + '0' + secnd + ':' + minSec + '0';
}
