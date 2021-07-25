function ress() {
    console.log('Hello World');
    let res_name = (document.getElementById("ress_name").value);
    let res_desc = (document.getElementById("ress_description").value);
    let thread_ress_ID = ((alphabet[(Math.floor(Math.random(0,1)*63))]) + alphabet[(Math.floor(Math.random(0,1)*63))] + alphabet[(Math.floor(Math.random(0,1)*63))] + alphabet[(Math.floor(Math.random(0,1)*63))] + alphabet[(Math.floor(Math.random(0,1)*63))] + alphabet[(Math.floor(Math.random(0,1)*63))] + alphabet[(Math.floor(Math.random(0,1)*63))] + alphabet[(Math.floor(Math.random(0,1)*63))] + alphabet[(Math.floor(Math.random(0,1)*63))]);
    thread_ress_count += 1;
    let thread_ress_creation = new Date();
    document.write('<div><br><br>' + thread_ress_count +' ：<span style="color:green;  white-space: pre-wrap;">' + res_name + '</span>：' + (thread_ress_creation.getFullYear()) + '/' + (thread_ress_creation.getMonth()+1) + '/' + (thread_ress_creation.getDate()) + '（' + thread_res_youbi[thread_ress_creation.getDay()] + '） ' + thread_ress_creation.getHours() + ':' + thread_ress_creation.getMinutes() + ':' + thread_ress_creation.getSeconds() + '<small style="color:gray;">.' + Math.floor(thread_ress_creation.getMilliseconds()*0.1) + '</small>' + ' ID: ' + thread_ress_ID);
    document.writeln('<br>　　 ' + res_desc + '</div>');
}