function calculate1(event){
    if (event.target.id == 'btnAdd'){
        //console.log(myAddInput1, myAddInput2)
        //console.log((Number(myAddInput1.value) , Number(myAddInput2.value)))
        document.getElementById('lblAnswer').textContent = (Number(myAddInput1.value) + Number(myAddInput2.value));
    } else if (event.target.id == 'btnClear'){
        document.getElementById('firstNum').value = "";
        document.getElementById('scndNum').value = "";
        document.getElementById('lblAnswer').textContent = "";
    }
}
function calculate2(event){
    if (event.target.id == 'btnSub'){
        document.getElementById('lblAnswer2').textContent = (Number(mySubInput1.value) +- Number(mySubInput2.value));
    } else if (event.target.id == 'btnClear2'){
        document.getElementById('firstSubNum').value = "";
        document.getElementById('scndSubNum').value = "";
        document.getElementById('lblAnswer2').textContent = "";
    }
}
function calculate3(event){
    if (event.target.id == 'btnDiv'){
        document.getElementById('lblAnswer3').textContent = (Number(myDivInput1.value) / Number(myDivInput2.value));
    } else if (event.target.id == 'btnClear2'){
        document.getElementById('firstDivNum').value = "";
        document.getElementById('scndDivNum').value = "";
        document.getElementById('lblAnswer3').textContent = "";
    }
}
function calculate4(event){
    if (event.target.id == 'btnMul'){
        document.getElementById('lblAnswer4').textContent = (Number(myMulInput1.value) * Number(myMulInput2.value));
    } else if (event.target.id == 'btnClear4'){
        document.getElementById('firstMulNum').value = "";
        document.getElementById('scndMulNum').value = "";
        document.getElementById('lblAnswer4').textContent = "";
    }
}
white_check_mark
eyes
raised_hands





