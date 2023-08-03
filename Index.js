const min = document.getElementById("minute");
const sec = document.getElementById("second");
const dsec = document.getElementById("decisecond");


let m = 0;
let s = 0;
let ds = 0;

var startFlag = true;

const stopWatch = () => {
    if (startFlag) {

        if (ds === 100) {
            ds = 0;
            s = s + 1;
            sec.innerHTML = s;
        }
        if (s === 60) {
            s = 0;
            m = m + 1;
            min.innerHTML = m;
        }
        ds = ds + 1;
        dsec.innerHTML = ds;

        setTimeout(stopWatch, 10);
    }
};

const onStart = () => {
    startFlag = true;
    stopWatch();
    console.log("Start");
};

const onPause = () => {
    startFlag = false;
    console.log("Pause");
};

const onReset = () => {
    startFlag = false;
    m = 0;
    s = 0;
    ds = 0;

    min.innerHTML = "00";
    sec.innerHTML = "00";
    dsec.innerHTML = "00";
    console.log("Reset");
};