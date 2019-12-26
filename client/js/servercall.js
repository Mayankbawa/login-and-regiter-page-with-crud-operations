function sendReq(method, url, data, scb, ecb) {
    var maskRef=document.querySelector('.mask');
    if(maskRef){
        maskRef.classList.remove('disp-none');
    }
    var httpObj = new XMLHttpRequest();
    httpObj.open(method, url, true);
    if (data) {
        httpObj.setRequestHeader('Content-Type', 'application/json');
        httpObj.send(JSON.stringify(data));
    } else {
        httpObj.send()
    }

    httpObj.onload=function(){
        debugger;
        if(maskRef){
            maskRef.classList.add('disp-none');
        }
        scb(httpObj.responseText);
    }

    httpObj.onerror=function(){
        debugger;
        if(maskRef){
            maskRef.classList.add('disp-none');
        }
        ecb('something went wrong');
    }
}

function fnIsLoggedIn(){
    var isLoggedIn=sessionStorage.isLoggedIn;
    if(isLoggedIn == null){
        location.href='login.html';
    }
}

function fnLogout(){
    sessionStorage.clear();
}

