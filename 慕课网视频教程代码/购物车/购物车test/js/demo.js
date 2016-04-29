window.onload = function(){
  if(!document.getElementsByClassName){
        document.getElementsByClassName = function(){
            var ret = [];
            var els = document.getElementsByTagName("*");
            for(var i=0,len = els.length;i<len;i++){
                if(els[i].className.indexOf(cls+" ")>=0 ||els[i].className.indexOf(' '+els[i]+' ')>=0 || els.className.indexOf(' '+cls)>=0 ){
                    ret.push(els[i]);
                }
            }
            return ret;
        }
    }

    var table = document.getElementById("cartTable");
    var selectInputs = document.getElementsByClassName("check");
    var checkAllInputs = document.getElementsByClassName("check-all");
    var tr = table.children[1].rows;
    var selectedTotal = document.getElementById("selectedTotal");
    var priceTotal = document.getElementById('priceTotal');
    var selectedViewList = document.getElementById("selectedViewList");
    var selected = document.getElementById('selected');
    var foot = document.getElementById("foot");

    //更新总数和总价格，已选浮层
    function getTotal(){
        var selected = 0;price = 0;html = '';
        for(var i = 0;i<tr.length;i++){
            if(tr[i].getElementsByTagName('input')[0].checked){
                tr[i].className = 'on';
                selected+=parseInt(tr[i].getElementsByTagName('input')[1].value);
                price +=parseInt(tr[i].getElementsByTagName("td")[4].innerHTML);
                html+='<div><img src ="'+tr[i].getElementsByTagName('img')[0].src+'"><span class = "del" index="'+i+'">取消选择</span></div>';
            }else{
                tr[i].className='';
            }

        }
        selectedTotal.innerHTML = selected;
        priceTotal.innerHTML=price.toFixed(2);
        selectedViewList.innerHTML = html;
        if(selected==0){
            foot.className = 'foot';
        }
    }
    //点击选择框
    for(var i = 0;i<selectInputs.length;i++){
        selectInputs[i].onclick = function(){
            if(this.className.indexOf('check-all') >= 0){
                //如果是全选，则吧所有的选择框选中
                for(var j = 0;j<selectInputs.length;j++){
                    selectInputs[j].checked = this.checked;
                }
            }
            if(!this.checked){
                for(var i = 0;i<checkAllInputs.length;i++){
                    checkAllInputs[i].checked = false;
                }
            }
            getTotal();
        }
    }

    //显示已选商品弹出层
    selected.onclick = function(){
        if(selectedTotal.innerHTML != 0){
            foot.className = (foot.className =='foot'?'foot show':'foot');
        }
    }

    //已选商品弹出层中的取消选择按钮
    selectedViewList.onclick = function(e){
        var e = e || window.event;
        var el = e.srcElement;
        console.log(e);
        if(el.className =='del'){
            var input = tr[el.getAttribute('index')].getElementsByTagName('input')[0];
            input.checked = false;
            input.onclick();
        }
    }

    for(var i = 0;i<tr.length;i++){
        tr[i].onclick = function(e){
            var e = e || window.event;
            var el = e.target || e.srcElement;
            var cls = el.className;
            var counInout = this.getElementsByTagName("input")[1];
            var value = parseInt(counInout.value);
            switch(cls){
                case 'add':
                    counInout.value = value +1;
                    break;
                case 'reduce':
                    if(value>1){
                          countInout.value = value-1;
                    }
                    break;
                  
            }
        }
    }









}