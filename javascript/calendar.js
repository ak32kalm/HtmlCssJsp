//calendar.js
// var days = ["일", "월",  "화" ,"수" , "목", "금", "토"];
// var str ="";
// str += "<table border ='1'>";
// str += "<thead>";
// for(var day of days){
//     str += "<th>" + day + "</th>";
// }
// str += "</thead>";
// str +="<tbody>";
// str += "<tr>";
// str += "<td></td>";

// for(var i=1; i<=30; i++){
//     str += "<td>" + i + "</td>";
//     if( i % 7 == 6) {
//         str += "</tr><tr>";
//     }
// }
// str += "</tr>";
// str +="</tbody>";
// str += "</table>"

// document.write(str);



// var today = new Date();
// console.log(today.getDate());
// var todate = today.getDate();
// var days = ["일", "월", "화", "수", "목", "금", "토"];
// var str = "";
// str += "<table border ='1'>";
// str += "<caption>" + "2021년 11월" + " <caption>"
// str += "<thead>";
// for (var day of days) {
//     str += "<th>" + day + "</th>";
// }
// str += "</thead>";
// str += "<tbody>";
// str += "<tr>";
// str += "<td></td>";
// var lastDay = getLastDate(11);
// for (var i = 1; i <= lastDay; i++) {
//     if (i == todate) {
//         str += "<td class= 'active'>" + i + "</td>";
//     } else {
//         str += "<td>" + i + "</td>";
//     }
//     if (i % 7 == 6) {
//         str += "</tr><tr>";
//     }
// }
// str += "</tr>";
// str += "</tbody>";
// str += "</table>";

// document.write(str);

// function getLastDate(month) {
//     var result = -1;

//     switch (month) {
//         case 1:
//         case 3:
//         case 5:
//         case 7:
//         case 8:
//         case 10:
//         case 12:
//             result = 31;
//             break;
//         case 2: //2월달
//             result = 28;
//             break;
//         // case 4:
//         // case 6:
//         // case 9:
//         // case 11:
//         //     result = 30;
//         //     break;
//             default :
//             result = 30;

//     }

//     return result;

// }



var year = 2021;
var month = 10; //0부터 시작함 0 ~ 11


createCalendar(2020, 2); //jsp는 먼저 실행문을작성해도 됨

function createCalendar(year, month) { // 매개변수
    var thisMonth = new Date(year, month - 1); //2021년 12월 1일
    var thisMonthDay = thisMonth.getDay();
    console.log(thisMonth.getDay()); //getDay 해당 날짜의 요일정보 : 0 => 일요일, 1=> 월요일, 2=> 화요일.

    var today = new Date();
    var todate = today.getDate();
    var days = ["일", "월", "화", "수", "목", "금", "토"];
    var str = "";
    str += "<table border ='1'>";
    str += "<caption>" + year + "년" + month + "월" + " <caption>"
    str += "<thead>";
    for (var day of days) {
        str += "<th>" + day + "</th>";
    }
    str += "</thead>";
    str += "<tbody>";
    str += "<tr>";
    for (var i = 0; i < thisMonthDay; i++) {
        str += "<td></td>"; //비워주는 값을 만들기 위해서
    }
    var lastDay = getLastDate(year, month);
    for (var i = 1; i <= lastDay; i++) {
        if (i == todate) {
            str += "<td onclick='clickFnc(event)' class= 'active'>" + i + "</td>";
        } else {
            str += "<td onclick='clickFnc(event)'>" + i + "</td>";

        }
        if ((i + thisMonthDay) % 7 == 0) {
            str += "</tr><tr>";
        }
    }
    str += "</tr>";
    str += "</tbody>";
    str += "</table>";

    document.write(str);
} //end of createCalendar

function getLastDate(year, month) {
    var result = -1;

    switch (month) {
        case 1:
        case 3:
        case 5:
        case 7:
        case 8:
        case 10:
        case 12:
            result = 31;
            break;
        case 2: //2월달
            result = getYunYear(2020) ? 29 : 28; // 삼항연삱. getYunYear(2020)을 만족하면 29 아니면 28출력
            break;
            // case 4:
            // case 6:
            // case 9:
            // case 11:
            //     result = 30;
            //     break;
        default:
            result = 30;

    }

    return result;

} // end of getLastDate


//윤 년
function getYunYear(year) {
    //년도 4로 나누어지면 윤년
    //년도 100으로 나눠 떨어지면 해은 평년
    //400으로 나누어지면 윤년 
    //유년 -> true, false

    if (year % 4 == 0) {
        if (year % 400 == 0) {
            return true;
        } else if (year % 100 == 0) {
            return false;
        }
        return true;

    }
    return false;
}

function clickFnc(e) {
    console.log(this); //
    window.console.log(e.target.textContent); //this -> window 객체.
    window.alert(e.target.textContent + "를 선택했습니다."); //클릭하면 창이뜨면서 출력
}

// object 는 값을 가지고 속성(필드)
// object 는 기능을 가지고 있는 메소드(메소드);

var obj = {
    name: "홍길동",
    age : 15,
    getInfo : function( ) {
        return " 이름은" + this.name + ", 나이는 " + this.age;
    }
}

console.log(obj.getInfo())