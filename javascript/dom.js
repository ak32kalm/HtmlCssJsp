//document 1) createElement(tag) => tag 생성. 
//2) getElementsByTagName(tag) => element 선택. (요소를 가지고 오는데 태그의 이름으로 가지고 오겠다)

function createList() {

    var ul = document.createElement('ul');
    var li = document.createElement('li');
    li.textContent = 'banana'; //li 태그에 
    ul.appendChild(li); // 자식을 갖다 붙이겠다 --li태그가 ul 태그 하위로 들어감

    li = document.createElement('li');
    li.textContent = 'cherry';
   
    ul.appendChild(li);

    var bd = document.getElementsByTagName('body');

    console.log(bd[0].appendChild(ul)); //body 태그안에 ul태그를 넣음
    // <body><ul><li>banana</li></ul></body>
}

// var tbl = document.createElement('table'); //element 생성. 괄호안의 값을 가지고tag 생성(콘솔창)
// tbl.setAttribute('border', '1');
// tbl.setAttribute('id', 'tbl'); // 만들어진 태그에 속성을 넣어주고 싶을 떄
// console.log(tbl);





var div = document.createElement('div');
div.setAttribute('id', 'main');
var ulTag = document.createElement('ul');
var liTag = document.createElement('li');
liTag.textContent = 'Apple';
ulTag.appendChild(liTag); // <ul><il></il></ul>
div.appendChild(ulTag); // <div><ul><il>Apple</il></ul></div>

var bd = document.getElementsByTagName('body');
bd[0].appendChild(div);











// <!-- <script>
//         var tbl = document.createElement('table');
//         tbl.setAttribute('border', '1');

//         var div = document.createElement('div');
//         tbl.appendChild(div);

//         var trTag = document.createElement('tr');
//         var tdTag = document.createElement('td');
//         tdTag.textContent = '홍길동';
//         trTag.appendChild(tdTag);
//         var tdTag = document.createElement('td');
//         tdTag.textContent = '80';
//         trTag.appendChild(tdTag);
//         var tdTag = document.createElement('td');
//         tdTag.textContent = '90';
//         trTag.appendChild(tdTag);

//         div.appendChild(trTag);


//         var div = document.createElement('div');
//         tbl.appendChild(div);

//         var trTag = document.createElement('tr');
//         var tdTag = document.createElement('td');
//         tdTag.textContent = '김수미';
//         trTag.appendChild(tdTag);
//         var tdTag = document.createElement('td');
//         tdTag.textContent = '80';
//         trTag.appendChild(tdTag);
//         var tdTag = document.createElement('td');
//         tdTag.textContent = '90';
//         trTag.appendChild(tdTag);

//         div.appendChild(trTag);

//         var div = document.createElement('div');
//         tbl.appendChild(div);

//         var trTag = document.createElement('tr');
//         var tdTag = document.createElement('td');
//         tdTag.textContent = '김민수';
//         trTag.appendChild(tdTag);
//         var tdTag = document.createElement('td');
//         tdTag.textContent = '80';
//         trTag.appendChild(tdTag);
//         var tdTag = document.createElement('td');
//         tdTag.textContent = '90';
//         trTag.appendChild(tdTag);

//         div.appendChild(trTag);


//         var bd = document.getElementsByTagName('body');
//         bd[0].appendChild(tbl);
//         console.log(bd);
//     </script> -->