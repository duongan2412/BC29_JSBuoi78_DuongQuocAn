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
    var hasEven = false;
    for (var i = arrNum.length; i > 0; i--) {
        if (arrNum[i] % 2 == 0) {
            var num = arrNum[i];
            hasEven = true;
            break;
        }
    }
    if (hasEven == false) {
        getEleID("kq5").innerHTML = "Mảng không có số chẵn";
    } else {
        getEleID("kq5").innerHTML = num;
    }
}

/*
    Bài 6 : đổi chỗ
*/

getEleID("btn6").onclick = function () {
    var vT1 = getEleID("viTri1").value;
    var vT2 = getEleID("viTri2").value;
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
        for (var j = i + 1; j < arrNum.length; j++) {
            if (arrNum[i] > arrNum[j]) {
                temp = arrNum[i];
                arrNum[i] = arrNum[j];
                arrNum[j] = temp;
            }
        }
    }
    getEleID("kq7").innerHTML = arrNum.toString();
}

/*
    Bài 8 : tìm số nguyên tố đầu tiên
*/

function laSoNT(n) {
    var soNguyenTo = true;
    if (n < 2){
        return soNguyenTo = false;
    } else {
        for (var i = 2; i <= Math.sqrt(n); i++){
            if (n % i == 0) {
                return soNguyenTo = false;
            }
        }
    }
    return soNguyenTo;
}

getEleID("btn8").onclick = function () {
    var soNguyenTo;
    for (var i = 0; i < arrNum.length; i++) {
        if(laSoNT(arrNum[i])){
            soNguyenTo = arrNum[i];
			break;
        }
    }
    getEleID("kq8").innerHTML = soNguyenTo;
}

/*
    Bài 9 : đếm số nguyên 
*/

arrSoNguyen = [];
getEleID("btn9ThemSo").onclick = function () {
    var numSoNguyen = Number(getEleID("themSoNguyen").value);
    arrSoNguyen.push(numSoNguyen);
    getEleID("kq9ThemSo").innerHTML = arrSoNguyen.toString();
    getEleID("themSoNguyen").value = "";
};

getEleID("btn9").onclick = function() {
    var cnt = 0;
    for (var i = 0; i < arrSoNguyen.length; i++) {
        if (Number.isInteger(arrSoNguyen[i])) {
            cnt ++;
        }
    }
    getEleID("kq9").innerHTML = cnt;
}

/*
    Bài 10 : so sánh số lượng số âm và dương
*/

getEleID("btn10").onclick = function () {
	var cntSoDuong = 0;
	var cntSoAm = 0;
    kq = "";
    for (var i = 0; i < arrNum.length; i++) {
        if (arrNum[i] > 0) {
            cntSoDuong ++;
        } else if (arrNum[i] < 0) {
			cntSoAm ++;
		}
    };
    if (cntSoDuong > cntSoAm) {
        kq = "Số dương > Số âm";
    } else if ( cntSoDuong < cntSoAm ) {
        kq = "Số dương < Số âm";
    } else {
        kq = "Số dương = Số âm";
    }
    getEleID("kq10").innerHTML = kq;
}




















