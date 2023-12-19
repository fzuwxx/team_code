var title=document.getElementsByClassName('title');
        var para=document.getElementsByClassName('para');

    for(i0=0;i0<title.length;i0++) {
        title[i0].style.animationDelay = (i0*0.1)+"s";
    }

    for(i1=0;i1<para.length;i1++) {
        para[i1].style.animationDelay = (i1*0.1)+"s";
    }



    setInterval(function(){
    $.ajax({
        url: '/get_json_data1',
        type: 'POST',
        dataType: 'json',
        data: {},
    })
    .done(function(data) {
        if(data.status==1){
            let str = '';
            let tem_data = data.data;
            for(let i=0; i<tem_data.length; i++){
                str += '<div>';
                str += 'object：'+ tem_data[i]['object'] + '；'+'count：' + tem_data[i]['count'];
                str += '</div>';
            }
            // $('#json_data').html(JSON.stringify(data.data));
             $('#json_data1').html(str);
            console.log(data);
        }else{
        alert(data.msg);
        }
    })
    $.ajax({
        url: '/get_json_data2',
        type: 'POST',
        dataType: 'json',
        data: {},
    })
    .done(function(data) {
        if(data.status==1){
            let str = '';
            let tem_data = data.data;
            for(let i=0; i<tem_data.length; i++){
                str += '<div>';
                str += 'object：'+ tem_data[i]['object'] + '；'+'count：' + tem_data[i]['count'];
                str += '</div>';
            }
            // $('#json_data').html(JSON.stringify(data.data));
             $('#json_data2').html(str);
            console.log(data);
        }else{
        alert(data.msg);
        }
    })
    $.ajax({
        url: '/get_json_data3',
        type: 'POST',
        dataType: 'json',
        data: {},
    })
    .done(function(data) {
        if(data.status==1){
            let str = '';
            let tem_data = data.data;
            for(let i=0; i<tem_data.length; i++){
                str += '<div>';
                str += 'object：'+ tem_data[i]['object'] + '；'+'count：' + tem_data[i]['count'];
                str += '</div>';
            }
            // $('#json_data').html(JSON.stringify(data.data));
             $('#json_data3').html(str);
            console.log(data);
        }else{
        alert(data.msg);
        }
    })
    $.ajax({
        url: '/get_json_data4',
        type: 'POST',
        dataType: 'json',
        data: {},
    })
    .done(function(data) {
        if(data.status==1){
            let str = '';
            let tem_data = data.data;
            for(let i=0; i<tem_data.length; i++){
                str += '<div>';
                str += 'object：'+ tem_data[i]['object'] + '；'+'count：' + tem_data[i]['count'];
                str += '</div>';
            }
            // $('#json_data').html(JSON.stringify(data.data));
             $('#json_data4').html(str);
            console.log(data);
        }else{
        alert(data.msg);
        }
    })
}, 500);