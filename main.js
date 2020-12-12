function lifespan(){
    var yr , mr,x,i;
    yr=document.getElementById("life").value;
    drop=document.getElementById("sel").value;
    drop=drop/10;
    drop=drop/1.2;
    drop=parseFloat(drop);
    yr=parseInt(yr);
    x=yr+drop;
    if(x<= 10.5 && x>=0 ){
        month=x/0.875;
        age=0;
        if(month==12){
            month=0;
            age+=1;
        }
    }
    if(x<= 21 && x>10.5){
        x=x-10.5;
        month=x/0.875;
        age=1;
        if(month==12){
            month=0;
            age+=1;
        }
    }
    if(x>21){
        x=x-21;
        age1=x/4;
        age2=parseInt(age1);
        month1=age1-age2;
        month=month1*12;
        age=age2+2;
        

    }

month=parseInt(month);
    
    
    document.getElementById("years").innerHTML=age+" Years";
    document.getElementById("months").innerHTML=month+" Months";

}
