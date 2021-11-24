var v1;
        window.console.log(typeof v1);

        v1 = 10; // number타입
        window.console.log(typeof v1);

        v1 = 'hello'; // string타입으로 
        window.console.log(typeof v1);

        v1 = true;
        window.console.log(typeof v1);

        v1 = null;
        window.console.log(typeof v1);

        var result = 10 + 20;
        result = 10 + '20';
        console.log(result);
        result = '20' / '10';
        console.log(result);

        var result = 30 * '2';
        console.log(result);

        var Result = 60;
        if (result == Result) {
            console.log('같다.')
        } else {
            console.log('다르다.')
        }

        var strTag = '<h1>Hello</h1>';
        strTag += '<ul><li>Apple</li>';
        strTag += '<li>Banana</li>';
        strTag += '</ul>'

        strTag = "result 변수에 들어있는 값" + result;
        strTag = `result 변수에 들어있는 값 ${result} <br>`;
        window.document.write(strTag);


        result = 6 / 4;
        document.write(result);

        if (result > 1) {
            document.write(`1보다 크다.`)
        } else {
            document.write(`1보다 작다.`)

        }

        var cnt = 10;
        for (var i = 1; i <= 10; i++) {

            document.write(`${i}  <br>`)
        }

        document.write(`<ul>`);
        // while (cnt > 0) {
        //     document.write(`<li>cnt의 값 : ${cnt}</li>`);
        //     cnt--;
        // }
        //아래위 같은 뜻임 0이되면 false 값이 되기 때문
        // false : +0, -0, null, '', undefined
        while (cnt) {
            document.write(`<li>cnt의 값 : ${cnt}</li>`);
            cnt--;
        }
        document.write(`<ul>`);


        var obj = {}; // new Object();
        obj.id = 'user1';
        obj.name = 'Hong';
        obj['phone'] = '010-1111-2222';


        obj = {
            id: 'user2',
            name: 'Hwang',
            phone: '010-2222-3333'
        }

        var field = 'phone';
        console.log(typeof obj);


        document.write(`<p>id:${obj.id}</p>`);
        document.write(`<p>name : ${obj['name']}</p>`);
        document.write(`<p>phone: ${obj[field]}</p>`);

        var ary = []; // new Array(); 
        ary[0] = 'Hong';
        ary[1] = 'Hwang';
        ary[2] = 'Park';
        ary[3] = 100;
        ary[4] = {
            name: 'Amy',
            age: 15
        }
        delete ary[1];
        for (var i = 0; i < ary.length; i++) {
            if (ary[i] != undefined) { //값이 indefined이 아닌 것만
                console.log(ary[i]);
            } }

            // primitive type.
            var a = b =10;
            a =20;
            console.log(a,b);

            var obj1 = {
                name : 'Hwang'
            }

            var obj2 = obj1;
            obj2 = {
                name : 'kim'
            }

            console.log(obj1);

            var kim = {
                name: 'Kim',
                age: 25,
                phone: '010-1111'
            }
    
            var lee = {
                name: 'Lee',
                age: 28,
                phone: '010-2222'
    
            }
    
            var park = {
                name: 'Park',
                age: 33,
                phone: '010-3333'
            }
    
            park.adress = '대구 100번지';
            park['birth'] ='1995-05-05';
            //object일 경우에 for..in 반복문.
    
            //for in  park이 가지고 있는 필드 를 하나씩 가져온다
            for(var field in park){
                console.log(field, park[field]);
            }
    
                console.clear();
            var objAry = [kim, lee, park];
            //배열일 경우 forr.of 반복문.
            document.write('<table border="1">');
            for(var obj of objAry){ //for(String str : srList){}
                //console.log(obj.name); //obj들에서 name만 가져온다
                //console.log(obj['name']); 위랑 같은 식 
               
                for(var field in obj){
                console.log(`${field}, ${obj[field]}`);
                document.write(`${field}:${obj[field]}`)
    
                // document.write(`li)
            }
           // 배열의 갯수만큼 반복 밖 -- 가지고 온 obj(KIN의 필드만큼) 필드명과 밸류값
    
    
            console.log(`---------------------`)
            }
            document.write('</table>');
    
    
    
