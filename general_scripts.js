function set(){
	this.datastore = [];
	this.add = add;
	//this.remove = remove;
	this.show = show;
}

function add(data){
	if (this.datastore.indexOf(data) < 0){
		this.datastore.push(data);
		return true;
	}else{
		return false;
	}
}

function show(){
	return this.datastore;
}

var arr = [12,3,3,5,6]

function q4(){
	
}

q4(arr);

function q4(arr,n){
	
}

q4

//----------------------------------------------------------------------------------------------------------------------------------------

function q3(arr,n){
	if (arr.length > 0){
		if (n > 0){
			var numb = [];
			for (i=0;i<n;i++){
				numb.push(arr[i]);	
			}
		}
	else if (n < 0){
		var numb = [];
			for (i=arr.length-1;i>(arr.length+n-1);i--){
				numb.unshift(arr[i]);	
			}
		}
	console.log(numb);
	}
}

q3(arr,-3);

//----------------------------------------------------------------------------------------------------------------------------------------

function q2(arr){
	var numb = [];
	if (arr.length > 0){
		for (i=0;i<arr.length;i++){
			numb.push(arr[i]);	
		}
	}
	console.log(numb);
}

//q2(arr);

//---------------------------------------------------------------------------------------------------------------------------------

function q1(arr){
	if (arr.length >= 0){
		return true;
	}else{
		return false;
	}
}

//q1(arr);

//---------------------------------------------------------------------------------------------------------------------------------
