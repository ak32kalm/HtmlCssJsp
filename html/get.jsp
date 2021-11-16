<%@page import="Emp.EmpDAO"%>
<%@page import="java.util.Map"%>
<%@page import="java.util.HashMap"%>
<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>webapp/get.jsp</title>
</head>
<body>
	<%
	//  <% 안은 자바의 영역
	// 파라미터 : get.html -> get.jsp로 넘겨주는 값들의 이름을 써주면 담겨져 있는 값들이 넘어옴 "user_name"에는 hong

	
	//id, last, email, hire, job
		String id = request.getParameter("user_id");
		String name = request.getParameter("user_name"); 
		String email = request.getParameter("user_email"); 
		String hire = request.getParameter("user_hire"); 
		String job = request.getParameter("user_job"); 
	//값을 받아왔다
		
		
		Map<String, String> map = new HashMap<String, String>();
		map.put("id", id);
		map.put("name", name);
		map.put("email", email);
		map.put("hire", hire);
		map.put("job", job);
		
		EmpDAO dao = new EmpDAO();
		dao.insertEmp(map);
		//insertEmp 매개값을 던짐
		//그럼EmpDAO의 inertEmp가 받아서 sql을 실행
		
		out.println("end of prog");
		
		
	%>
</body>
</html>