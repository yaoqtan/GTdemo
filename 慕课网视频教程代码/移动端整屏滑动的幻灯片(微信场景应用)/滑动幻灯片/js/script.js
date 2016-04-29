var ul = document.querySelector(".mag-slice-list");
    var Slice = function(){
        function slice(obj){
            this.init(obj);
        }

        slice.prototype = {
            init:function(obj){
                this.o = {dom:null,width:"320",height:"640",finish:function(){}};
                this.items = [];
                if(!obj.dom || obj.dom.nodeType !== 1) return;
                
                for(var i in this.o){
                    if(obj.hasOwnProperty(i)){
                        this.o[i] = obj[i];
                    }
                }
                var nodes = this.o.dom.children;
                for(var j =0;j<nodes.length;j++){
                    if(nodes[j].nodeType === 1){
                        this.items.push(nodes[j]);
                        nodes[j].style.width = this.o.width+"px";
                        nodes[j].style.height = this.o.height+"px";
                    }
                }
                
                this.initView();
                this.onslide();
            },
            initView:function(){
                this.width = this.o.width;
                this.height = this.o.height;
                //this.o.dom.style.height = this.height+"px";
                this.length = this.items.length;
                this.o.dom.style.height = this.height+"px";
                
                this.cssText = "width:"+this.width+"px; height:"+this.height+"px;";
                this.cssTextCur = "z-index:3;visibility:visible;";
                this.cssTextPre = "z-index:2;visibility:visible;-webkit-transform:translateY("+(-this.height)+"px)";
                this.cssTextNext = "z-index:2;visibility:visible;-webkit-transform:translateY("+this.height+"px)";
                
                this.items[0].style.cssText = this.cssText + this.cssTextCur;
                this.items[this.length-1].style.cssText = this.cssText + this.cssTextPre;
                this.items[1].style.cssText = this.cssText + this.cssTextNext;
                
                this.page = 0;
                this.moving = false;
                
                this.o.finish(0,this.items[0]);
            },
            onslide:function(){
                var dis = 0,page = 0,self = this,dom = this.o.dom,curtop = 0;
                
                
                dom.addEventListener("touchstart",function(e){
                    var Y = e.targetTouches[0].pageY;
                    
                    if(self.moving) return e.preventDefault();
                    
                    this.addEventListener("touchmove",movefn,false);
                    this.addEventListener("touchend",endfn,false);
                    this.addEventListener("touchmove",movefn,false);
                    function movefn(ev){
                        var y = ev.targetTouches[0].pageY;
                        
                        curtop = dis + y - Y;
                        
                        if(y-Y > 0){
                            if(self.page == 0) return;
                        }
                        if(y-Y < 0){
                            if(self.page == self.length-1) return;
                        }
                        
                        scaleItem(y-Y);
                        
                        ev.preventDefault();
                    }
                    function endfn(ev){
                        this.removeEventListener("touchmove",movefn);
                        this.removeEventListener("touchend",endfn);
                        
                        var end = ev.changedTouches[0].pageY;
                        
                        if(end === Y) return false;
                        
                        if(end-Y > 0){
                            if(self.page == 0) return;
                        }
                        if(end-Y < 0){
                            if(self.page == self.length-1) return;
                        }
                        
                        self.moving = true;
                        
                        redress(end - Y);
                        
                    }
                    
                },false);
                
                function redress(disy){
                    var oldpage = self.page;
                    
                    setPage(disy);
                    
                    var newpage = self.page;
                    
                    rescale(oldpage,newpage,disy);
                }    
                function setPage(disy){
                    if(Math.abs(disy) > self.height/5){
                        if(disy > 0){
                            self.page--;
                            if(self.page < 0) self.page = self.length-1;
                        }else{
                            self.page++;
                            if(self.page >= self.length) self.page = 0;
                        }
                    }
                }   
                function scaleItem(disy){
                    var c = self.curItem(),p = self.preItem(),n = self.nextItem();
                    c.style.webkitTransform = "scale("+(1-Math.abs(disy)/self.height/3)+")";
                    if(disy > 0){
                        c.style.webkitTransformOrigin = "50% 100%";
                        c.style.zIndex = "2";
                        p.style.webkitTransform = "translateY("+(-self.height+disy)+"px)";
                        p.style.zIndex = "3";
                    }else{
                        c.style.webkitTransformOrigin = "50% 0%";
                        c.style.zIndex = "2";
                        n.style.webkitTransform = "translateY("+(self.height+disy)+"px)";
                        n.style.zIndex = "3";
                    }
                }
                function rescale(op,np,y){
                    var c = self.curItem(),p = self.preItem(),n = self.nextItem();
                    if(op === np){
                        c.style.webkitTransition = "all 0.3s ease";
                        c.style.webkitTransform = "scale(1)";
                        
                        p.style.webkitTransition = "all 0.3s ease";
                        p.style.webkitTransform = "translateY("+(-self.height)+"px)";
                        
                        n.style.webkitTransition = "all 0.3s ease";
                        n.style.webkitTransform = "translateY("+self.height+"px)";
                        
                        c.addEventListener("transitionend",ontransend,false);
                        c.addEventListener("webkitTransitionEnd",ontransend,false);
                    }else if(y > 0){
                        c.style.webkitTransition = "all 0.3s ease";
                        c.style.webkitTransform = "translateY(0px)";
                        
                        p.style.webkitTransform = "translateY("+(-self.height)+"px)";
                        
                        n.style.webkitTransition = "all 0.3s ease";
                        n.style.webkitTransform = "scale(0.5)";
                        
                        c.addEventListener("transitionend",ontransend,false);
                        c.addEventListener("webkitTransitionEnd",ontransend,false);
                    }else if(y < 0){
                        c.style.webkitTransition = "all 0.3s ease";
                        c.style.webkitTransform = "translateY(0px)";
                        
                        n.style.webkitTransform = "translateY("+(-self.height)+"px)";
                        
                        p.style.webkitTransition = "all 0.3s ease";
                        p.style.webkitTransform = "scale(0.5)";
                        
                        c.addEventListener("transitionend",ontransend,false);
                        c.addEventListener("webkitTransitionEnd",ontransend,false);
                    }
                    
                    function ontransend(){
                        c.style.webkitTransition = "none";
                        p.style.webkitTransition = "none";
                        n.style.webkitTransition = "none";
                        c.removeEventListener("transitionend",ontransend);
                        c.removeEventListener("webkitTransitionEnd",ontransend);
                        self.onslideEnd();
                    }
                }
                
            },
            curItem:function(){
                return this.items[this.page];
            },
            preItem:function(){
                return this.page === 0 ? this.items[this.length-1] : this.items[this.page-1];
            },
            nextItem:function(){
                return this.page === this.length-1 ? this.items[0] : this.items[this.page+1];
            },
            onslideEnd:function(){
                this.moving = false;
                
                for(var i = 0;i<this.length;i++){
                    this.items[i].style.cssText = this.cssText;
                    if(this.items[i] == this.curItem()){
                        this.items[i].style.cssText = this.cssText + this.cssTextCur;
                    }
                    if(this.items[i] == this.preItem()){
                        this.items[i].style.cssText = this.cssText + this.cssTextPre;
                    }
                    if(this.items[i] == this.nextItem()){
                        this.items[i].style.cssText = this.cssText + this.cssTextNext;
                    }
                    
                }
                
                if(typeof this.o.finish == "function"){this.o.finish(this.page,this.items[this.page]);}
            }
        }
        
        var fn = function(o){
            new slice(o);
        }
        return fn;
    }();
    
    window.addEventListener("load",function(){
        Slice({dom:ul,width:document.body.offsetWidth,height:document.body.offsetHeight});
        //关闭

        var btn = document.querySelector('#fundBtn'),
        btn1 = document.querySelector('#fundBtn1'),
        btn2 = document.querySelector('#fundBtn2'),
        btn3 = document.querySelector('#fundBtn3');
        btn4 = document.querySelector('#fundBtn4'),
        btn5 = document.querySelector('#fundBtn5');
        
        btn.onclick = function(){
            openAppModel({name:'ACTIVITY', url:'http://qiang.wangyin.com/index'});
        };
        btn1.onclick = function(){
            openAppModel({name:'ACTIVITY', url:'http://qiang.wangyin.com/index'});
        };
        btn2.onclick = function(){
            openAppModel({name:'ACTIVITY', url:'http://qiang.wangyin.com/index'});
        };
        btn3.onclick = function(){
            openAppModel({name:'ACTIVITY', url:'http://qiang.wangyin.com/index'});
        };
        btn4.onclick = function(){
            openAppModel({name:'ACTIVITY', url:'http://qiang.wangyin.com/index'});        
        };
        btn5.onclick = function(){
            openAppModel({name:'ACTIVITY', url:'http://qiang.wangyin.com/index'});
        };
   /*     function openAppModel(json){
            var u = navigator.userAgent,
                    inWx = (u.search(/micromessenger/ig) == -1)? false : true,

                    inApp = ((u.search(/safari/ig) == -1)? true : false),
                    name =json.name || '',
                    str = j2s(json.params) || '',
                    url = json.url || '';
                    callback = json.callback || null;
            try{
                if(u.indexOf('Android') > -1 || u.indexOf('Linux') > -1){
                    android.start(url);
                }else if(inApp && (u.indexOf('iPhone') > -1 || u.indexOf('Mac') > -1)){
                    try{
                        safari.open ='native://start?name='+url; //兼容iphone 4
                    }catch(err){
                        window.location.href ='native://start?name='+url;
                    }
                }else{
                    throw 'noInApp';
                }
            }finally{
                window.location.href='http://sale.jd.com/app/act/KBuoE641DZmxgYf.html?url='+url+'#ACTIVITY';
            }
            function j2s(json){
                var str = '';
                for(var n in json){
                    str += '&'+n+'='+json[n]
                }
                return str;
            }
        }*/
   /*     function setBar(){
            var jrapp = document.querySelector('.download-jrApp'),
                jdApp = document.querySelector('.new-header-down_app'),
                jdBtn = document.querySelector('.new-header-close-btn-con'),
                jdApp1 = document.querySelector('.new-header-download-con'),
                jrBtn = document.querySelector('.closeAdvBtn'),
                new_header = document.querySelector('.new-header');
            if(new_header){
                new_header.remove();
                new_header.style.dispaly='none';
            }
            if(jdBtn){
                jdBtn.click();
            }
            if(jrapp){
                jrBtn.click();
                jrapp.style.dispaly = 'none';
                // var a = jrapp.getElementsByTagName('a')[0],img = a.getElementsByTagName('img')[0];
                // a.href="http://sale.jd.com/app/act/kBuoE641DZmxgYf.html#JRB";
                // img.scr="http://img14.360buyimg.com/cms/jfs/t553/109/1387163555/12531/29a4e8bf/54d06f33N070d93a1.png";
            }
            if(jdApp){
                jdApp.style.dispaly = 'none';
                jdApp1.style.dispaly = 'none';
            }
        }*/
       /* setBar();*/
    },false);