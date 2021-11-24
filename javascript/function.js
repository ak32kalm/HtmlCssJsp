//함수
        //a,b에 어떤 값이든 들어올 수 
        function sum(a, b) {
            var result = a + b; //지역 변수
            return result;
            //return구문을 만나면 반환값이 있으면 반환 없으면 함수를 종료시키겠다.
        }
        var result = sum(10, 20); // 전역변수  
        console.log(result);

        function getSum() {
            var lnth = arguments.length;   //arguments 매개변수 값들을 처리
           var sum =0;
            for(var i=0; i < lnth ; i++){
                sum += arguments[i];
            }
            return sum;
        }

       result = getSum(1, 2, 3, 4, 5, 6, 7);
       console.log(result);

       var fnc = function(n1 =0, n2){  //변수값을 정해주면 매개값이 없을 시 그 값을 넣으시오라는 뜻이 됨
           return n1 * n2;
       }
       console.log(fnc(3,5));
       //function 타입 괄호가 곁들여지면 펑션 구문을 실행하라 
        var otherFnc = fnc;
       console.log(otherFnc(2,10));

       //function


       //문자열,숫자 다 담을 수 있는 object 타입
       var students = [
         {name: "홍길동", math : 80, eng : 90},
         {name:"김수미", math :85, eng: 85},
         {name: "김민수", math: 90, eng: 75}
       ];

       function makeTableList(ary){
            var str ="<table border='1'>";
                var obj = ary[0]; //{name:"홍길동", math:80, eng:90}
            str += "<thead>";
                for ( var field in obj) {
                    str += "<th>" + field + "</th>"; 
                }
                str += "</thead><tbody>";
            for(var i=0; i <ary.length; i++ ) { 
                str += "<tr><td>" + ary[i].name + "</td><td>" + ary[i].math + "</td><td>"
                    + ary[i].eng + "</td></tr>";
            }
            str += "</tbody></table>";
            document.write(str);
       }
       makeTableList(students);

