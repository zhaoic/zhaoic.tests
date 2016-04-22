function f(num,callback){
	if(num<0)  { 
		alert("low level func run");
		alert("negetive score is wrong"); 
	}else if(num==0){
		alert("low level func run");
		alert("student not come");
	}else{
		alert("high level func run");
		callback();
	}
}

