$(document).ready(function(){
    console.log('JS loaded');
    $('input').on('keyup', function(){
        $('#total-time').text('Total time: 0');
        $("form").each(function(){
            let inp = $(this).find(':input');
            let tmp = 0;
            
            for(let i in inp){
                if(inp[i].value){
                    let num = Number.parseInt(inp[i].value)
                    tmp += num;
                }
            }
            
            console.log(tmp);
            // 120 minutes
            // 60
            
            
            
            
            if(tmp > 0){
                let hours;
                let minutes;
                let res;
                
                hours = Math.floor(tmp/60);
                minutes = tmp % 60;
                
                console.log('Minutes: '+minutes);
                if (tmp < 60){
                    res = "Total Time: "+minutes+" Minute(s)";
                } else {
                    if(hours >= 1){

                        if(minutes > 0){
                            res = "Total Time: "+hours + ' Hours' + ' And '+minutes+' Minute(s)'
                        } else {
                            res = "Total Time: "+ hours + ' Hours'
                        }

                    } else {
                            res = hours + ' Hour';
                    }
                }
                
                $('#total-time').text(res);
            } else {
                $('#total-time').text("Total Time: "+0);
            }
        });
    });
});
