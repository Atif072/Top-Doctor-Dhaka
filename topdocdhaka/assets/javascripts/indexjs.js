function addDeptList() {
	var deptList = ["Cancer","Gastroentrology","Oncology","Kidney","Urology","Brain",
	                 "Heart","Cancer","Cancer","Kidney","Urology","Brain","Heart"];
	$.each(deptList,function(index,value) {
		//alert(deptList[index]);
		$("#dList").append("<li><a class='dMenu' href='#'>"+value+"</a></li>");
						
	});
}


function addHospList() {
	var hospList = ["Appolo hospital", "United hospital", "Labaid hospital(Dhanmondi)", "Labaid hospital(Mirpur)", 
	                 "Popular hospital(Dhanmondi)","Square hospital", "Dhaka Central Internation hospital","Appolo hospital",
					 "Appolo hospital", "United hospital", "Labaid hospital(Dhanmondi)"];
	$.each(hospList,function(index,value) {
		//alert(deptList[index]);
		$("#hList").append("<li><a href='#'>"+value+"</a></li>");
						
	});
}				

// Define the function
function addNumbers(num1,num2) {
	alert(num1+num2);
}