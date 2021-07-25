function $(id){
    return document.getElementById(id);
}



function postaction(){
    var title = $('title');
    if(title.value == ''){
        alert("内容不能为空");
    }else{
        var data = loadData();
		var todo = {"title":title.value,"done":false};
		data.push(todo);
        saveData(data);
		load();
    }
}

function loadData(){
	var collection = localStorage.getItem("todo");
	if(collection != null){
		return JSON.parse(collection);
	}
	else return [];
}


function saveData(data){
	localStorage.setItem("todo",JSON.stringify(data));
}

function load(){
    console.log('load');
    
    var collection=localStorage.getItem("todo");
    if(collection != null){
        var data = JSON.parse(collection);
        var todoString = "";
        var doneString = "";
        var todoCount = 0;
        var doneCount = 0;
        for(var i=0;i<data.length;i++){
            if(data[i].done){
                doneString += "<li><input type='checkbox' onchange='javascript:update("+i+",\"done\",false"+")' checked='checked'><p id='p-"+i+"' onclick='javascript:edit("+i+")'>"+data[i].title+"</p><a href='javascript:remove("+i+")'>X</a></li>";
                doneCount += 1;
            }else{
                todoString += "<li><input type='checkbox' onchange='javascript:update("+i+",\"done\",true"+")'><p id='p-"+i+"' onclick='javascript:edit("+i+")'>"+data[i].title+"</p><a href='javascript:remove("+i+")'>X</a></li>";
                todoCount += 1;
            }
        }
        $('todolist').innerHTML = todoString;
        $('todocount').innerText = todoCount;
        $('donelist').innerHTML = doneString;
        $('donecount').innerText = doneCount;
    }else{
        $('todolist').innerHTML = '';
        $('todocount').innerText = 0;
        $('donelist').innerHTML = '';
        $('donecount').innerText = 0;
    }
    
    title.value = '';
}

function update(i,field,value){
    var data = loadData();
    // 删除
    var todo = data.splice(i,1)[0];
    todo[field] = value;
    // 增加
    data.splice(i,0,todo);
    saveData(data);
    load();
}

function remove(i){
    var data = loadData();
    data.splice(i,1)[0];
    saveData(data);
    load();
}

function edit(i)
{
	// load();
	var p = document.getElementById("p-"+i);
    title = p.innerHTML;
    p.innerHTML="<input id='input-"+i+"' value='"+title+"' />";
    var input = document.getElementById("input-"+i);
    // 全选
	input.setSelectionRange(0,input.value.length);
    input.focus();
    console.log(input.value);
    // 失焦
	input.onblur = function(){
		if(input.value == ''){
			p.innerHTML = title;
			alert("内容不能为空");
		}
		else{
            console.log(i,input.value)
			update(i,'title',input.value);
		}
	};
}

function clear(){
    localStorage.clear();
    load();
}

window.onload = load;