function getEleID(id) {
    return document.getElementById(id);
};

arrNum = [];
getEleID("btn0ThemSo").onclick = function () {
    var numInput = Number(getEleID("numInput").value);
    arrNum.push(numInput);
    getEleID("arrNumber").innerHTML = arrNum.toString();
    getEleID("numInput").value = "";
};

getEleID("btnReset").onclick = function () {
    arrNum = [];
    getEleID("arrNumber").innerHTML = arrNum.toString();
};

/*
    Bài 1 : tổng số dương
*/

getEleID("btn1").onclick = function () {
    sum = 0;
    for (var i = 0; i < arrNum.length; i++) {
        if (arrNum[i] > 0) {
            sum += arrNum[i];
        }
    }
    getEleID("kq1").innerHTML = sum;
}

/*
    Bài 2 : đếm số dương
*/

getEleID("btn2").onclick = function () {
    cnt = 0;
    for (var i = 0; i < arrNum.length; i++) {
        if (arrNum[i] > 0) {
            cnt++;
        }
    }
    getEleID("kq2").innerHTML = cnt;
}

/*
    Bài 3 : tìm số nhỏ nhất
*/

getEleID("btn3").onclick = function () {
    var min = arrNum[0];
    for (var i = 0; i < arrNum.length; i++) {
        if (arrNum[i] < min) {
            min = arrNum[i]
        }
    }
    getEleID("kq3").innerHTML = min;
}

/*
    Bài 4 : tìm số dương nhỏ nhất
*/

getEleID("btn4").onclick = function () {
    var arrNumPos = []
    for (var i = 0; i < arrNum.length; i++) {
        if (arrNum[i] > 0) {
            arrNumPos.push(arrNum[i]);
        }
    };
    var min = arrNumPos[0];
    for (var j = 0; j < arrNumPos.length; j++) {
        if (arrNumPos[j] < min) {
            min = arrNumPos[j];
        }
    };
    getEleID("kq4").innerHTML = min;
}

/*
    Bài 5 : tìm số chẵn cuối cùng
*/

getEleID("btn5").onclick = function () {
    for (var i = arrNum.length; i > 0; i--) {
        if (arrNum[i] % 2 == 0) {
            var num = arrNum[i];
            break;
        }
    }
    getEleID("kq5").innerHTML = num;
}

/*
    Bài 6 : đổi chỗ
*/

getEleID("btn6").onclick = function () {
    var vT1 = getEleID("viTri1").value;
    var vT2 = getEleID("viTri2").value;
    console.log(vT1,vt2);
    var temp;
    temp = arrNum[vT1];
    arrNum[vT1] = arrNum[vT2];
    arrNum[vT2] = temp;
    getEleID("kq6").innerHTML = arrNum.toString();
}

/*
    Bài 7 : sắp xếp tăng dần
*/

getEleID("btn7").onclick = function () {
    var temp;
    for (var i = 0; i < arrNum.length; i++) {
        if (arrNum[i] > arrNum[i + 1]) {
            temp = arrNum[i];
            arrNum[i] = arrNum[i + 1];
            arrNum[i + 1] = temp;
        }
    }
    getEleID("kq7").innerHTML = arrNum.toString();
}

