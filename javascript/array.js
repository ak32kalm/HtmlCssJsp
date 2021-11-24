
var checkedAry = []; //cheked가 눌러질때마다 배열에 저장

//sno, sname, sphone, sbirth  => 배열이름 students
var fields = {
    sno: '학번',
    sname: '이름',
    sphone: '연락처',
    sbirth: '생년월일'
};

var str = `
    <form action='basic.html' name='myname' id='myform' onsubmit='submitFnc(event)'>
        학번 : <input type='text' name='sno'><br>
        이름   : <input type='text' name='sname'> <br>
        연락처  : <input type='text' name='sphone'> <br>
        생년월일 : <input type='text' name='sbirth'> <br>
        <input type='submit' value='저장'> 
    </form>
    <form action='basic.html' name='secondName' id='secondForm'>
        <input type='text' name='id'>
    </form>
    
`; //뺵핑 쓴것 

document.write(str);
document.write('<div id="show"></div>');
createTableList(); //펑션 호출

// document.getElementById('myform').onsubmit = function() {}; //이러면 저 위에 event 안써줘도 됨
//입력한 것을 저장하는 것
function submitFnc(e) {

    e.preventDefault(); //action ='basic.html' 하면 페이지가 글로 넘어감  머물로 있고 싶어


    // var s_no = document.querySelector('form>input[name="sno"]').value; //sno를 가져오고 싶어
    // var s_name = document.querySelector('form>input[name="sname"]').value; //document.querySelector('form>input[name="sname"]') : 인풋 태그인데 인풋 태그의 밸류속성을 가져오겠습니다.
    // var s_phone = document.querySelector('form>input[name="sphone"]').value;
    // var s_birth = document.querySelector('form>input[name="sbirth"]').value;

    console.log(document.forms['myform'].elements)
    console.log(document.forms['myform'].elements['sno'].value) //console.log(document.forms.myform)

    var s_no = document.forms['myform'].elements['sno'].value; //[0]
    var s_name = document.forms['myform'].elements['sname'].value; //[1]
    var s_phone = document.forms['myform'].elements['sphone'].value; //[2]
    var s_birth = document.forms['myform'].elements['sbirth'].value; //[3] 이렇게 써도 됨



    //console.log(sno.sname, sphone, sbirth);
    var std = {
        sno: s_no, // 왼쪽 꺼는 필드이름
        sname: s_name,
        sphone: s_phone,
        sbirth: s_birth
    }



    document.getElementById('tby').appendChild(getTrNewStudent(std)); //tby태그에다가 붙여넣는 거임 getTrNewStudent()를 호출해서 넣음

}

//(밑에 한 거 전체 복습느낌) object를 받아서 tr생성
function getTrNewStudent(student) {
    //var tr = document.createElement('tr');
    //저장을 딱 누르면 저 tbody맨밑에 딱 붙어서 DB처럼 만들어지는 거임 checkbox, td......, button


    var tr = document.createElement('tr');

    tr.onmouseout = mouseOutFnc;
    tr.onmouseover = mouseOverFnc;

    //체크박스 추가
    var td = document.createElement('td');
    var chkbox = document.createElement('input');

    chkbox.onchange = changeFnc;
    chkbox.setAttribute('type', 'checkbox');
    td.appendChild(chkbox);
    tr.appendChild(td);

    //원래 필드.
    for (var field in fields) {
        var td = document.createElement('td');
        td.textContent = student[field];
        tr.appendChild(td);
    }
    //추가내용
    td = document.createElement('td');
    var btn = document.createElement('button');
    btn.textContent = '복사';
    btn.onclick = clickFnc;
    td.appendChild(btn);
    tr.appendChild(td);


    return tr;

}


//페이지에 테이블 타입으로 


function createTableList() {
    var table = document.createElement('table');
    table.setAttribute('border', '1') //table에 칸막이 설치
    //타이틀 부분 생성.
    var thead = makeHead();
    table.appendChild(thead);
    //데이터 부분 생성.
    var tbody = makeBody();
    table.appendChild(tbody); //tbody태그 는 메소드를 가짐(document) 그래서 appendchild를 호출가능한 거
    //div 하위요소로 출력.

    document.getElementById('show').appendChild(table);
}

function clickFnc(e) {
    //1.삭제
    // console.log(this.parentNode.parentNode.remove());
    //console.log(this.remove()); //이러면 삭제만 없어짐
    console.log(e.path[2].remove()); //버튼을 누르면 해당 tr이 삭제됨 ㅇㅋ?
    //js 기능을 활용해서 페이지를 수정 할 수 있음  화면 컨트롤
    // 2.복제
    var no = this.parentNode.parentNode.children[1].textContent;
    var name = this.parentNode.parentNode.children[2].textContent;
    var phone = this.parentNode.parentNode.children[3].textContent;
    var birth = this.parentNode.parentNode.children[4].textContent;
    var obj = {
        sno: no,
        sname: name,
        sphone: phone,
        sbirth: birth
    }
    document.getElementById('tby').appendChild(getTrNewStudent(obj));

    // var selected_tr = this.parentNode.parentNode;
    // var clone_tr = selected_tr.cloneNode(true); //하위요소까지 다 복사하고 싶으면 true를 넣어주면 됨
    // console.log(clone_tr);
    //  document.getElementById('tby').appendChild(getTrNewStudent(obj));

}

function mouseOverFnc() { //this는 event 를 받는 대상
    this.style.backgroundColor = 'yellow';
}

function mouseOutFnc() {
    this.style.backgroundColor = 'white';
}

function changeFnc() {
    var searchSno = this.parentNode.nextSibling.textContent;
    //console.log(this.parentNode.nextSibling.textContent);  // this.parentNode (td태그)를 기준으로 다음(nextSibling) 값을 불러옴 즉, 학번을 불러오는 거임 ㅇㅋ? 
    if (this.checked == true) {
        var lnth = checkedAry.length;
        // checkedAry[lnth] = searchSno; //학번을 넣어보겠다
        checkedAry.splice(lnth, 0, searchSno); // 젤 마지막 위치에다 하나씩 넣겠습니다
    } else {
        for (var i = 0; i < checkedAry.length; i++) {
            //같은 값이 있으면 지우겠다
            if (checkedAry[i] == searchSno) {
                //delete checkedAry[i]; //지워지면 그 위치에 null(비어있음)값이 들어감
                checkedAry.splice(i, 1); //배열 메소드 i: 순번 1 : 크기

                break;
            }
        }
    }
    console.log(checkedAry);
}

function makeBody() {
    var tbody = document.createElement('tbody');
    tbody.setAttribute('id', 'tby');
    for (var student of students) {
        //         tbody.appendChild(getTrNewStudent(student));
        //     }
        //     return tbody;
        // }


        //5줄이니까 5번 반복 될거야
        var tr = document.createElement('tr'); //tr에다가 맨위 fields라는 오브젝트를 사용

        tr.onmouseout = mouseOutFnc; //이름만 넣어줘야 함 () 넣으면 안됨
        tr.onmouseover = mouseOverFnc;

        //체크박스 추가
        var td = document.createElement('td');
        // 이렇게 해도 됨 td.innerHTML = "<input type='checkbox'>";
        var chkbox = document.createElement('input');

        chkbox.onchange = changeFnc;
        chkbox.setAttribute('type', 'checkbox');
        td.appendChild(chkbox);
        tr.appendChild(td);

        //원래 필드.
        for (var field in fields) { //옵젝트 안에서의 반복은 in
            var td = document.createElement('td'); //field의 갯수만큼 td를 만들어줄거임
            td.textContent = student[field];
            tr.appendChild(td);
        }
        //추가내용
        td = document.createElement('td');
        var btn = document.createElement('button');
        btn.textContent = '복사';
        btn.onclick = clickFnc;
        td.appendChild(btn);
        tr.appendChild(td);
        tbody.appendChild(tr);
    }
    return tbody;
}
//thead 부분 만드는 펑션
function makeHead() {
    var thead = document.createElement('thead');
    var tr = document.createElement('tr');
    // 추가컬럼.
    var td = document.createElement('th');
    td.textContent = '선택';
    tr.appendChild(td);

    for (var field in fields) {
        var td = document.createElement('th');
        td.textContent = fields[field];
        // td.textContent = field; //영어로 
        tr.appendChild(td);
    }
    //추가내용.
    td = document.createElement('th');
    td.textContent = '버튼';
    tr.appendChild(td);

    thead.appendChild(tr);
    return thead; //<thead><tr><th>sno</th><th<sname.....</th></tr></thead>
}