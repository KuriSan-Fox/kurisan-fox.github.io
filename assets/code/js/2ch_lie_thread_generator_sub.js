let thread_ress_ID = 0;
let res_user_owner_mode = ((document.getElementById("thread_owner_mode")));
let troller_count = document.getElementById("trollingcount");
let use_troll_mode = document.getElementById("troller");
let trolling = 0;
function ress() {
    trolling = 0;
    troller_count = (document.getElementById("trollingcount").value);
    use_troll_mode = document.getElementById("troller");
    if(use_troll_mode.checked){
        console.log('荒らしモードが有効です。');
    }else{
        console.log('荒らしモードが無効です。');
        troller_count = 1;
    }
    console.log(troller_count);
    while(trolling<troller_count){
        trolling += 1;
        let res_name = (document.getElementById("ress_name").value);
        let res_desc = (document.getElementById("ress_description").value);
        if (res_desc == '') {
            alert('何か入力してください。');
        } else {
            if ((res_name.match(/agemoti/))||(res_name.match(/あげもち/))||(res_name.match(/ぼうにんげん/))||(res_name.match(/bouningen/))) {
                alert('使ったら呪われますよ。');
            } else {
                res_user_owner_mode = ((document.getElementById("thread_owner_mode")));
                if (res_user_owner_mode.checked) {
                    res_user_owner_mode = 1;
                } else {
                    res_user_owner_mode = 0;
                }
                console.log('スレ主モード：' + res_user_owner_mode);
                generate_random_id();
                thread_ress_count += 1;
                let thread_ress_creation = new Date();
                if(res_user_owner_mode){
                    res_name = thread_owner_name;
                    thread_ress_ID = thread_owner_ID;
                }
                if (res_name == '') {
                    res_name = thread_default_name;
                }
                document.write('<div><br>' + thread_ress_count +' ：<span style="color:green;  white-space: pre-wrap;">' + res_name + '</span>：' + (thread_ress_creation.getFullYear()) + '/' + (thread_ress_creation.getMonth()+1) + '/' + (thread_ress_creation.getDate()) + '（' + thread_res_youbi[thread_ress_creation.getDay()] + '） ' + thread_ress_creation.getHours() + ':' + thread_ress_creation.getMinutes() + ':' + thread_ress_creation.getSeconds() + '<small style="color:gray;">.' + Math.floor(thread_ress_creation.getMilliseconds()*0.1) + '</small>' + ' ID: ' + thread_ress_ID);
                document.writeln('<div style="padding-left:40px;">' + res_desc + '</div></div>');
            }
        }
    }
}

function generate_random_id() {
    let thread_ress_ID_get = (document.getElementById("use_custom_id").value);
    if (((thread_ress_ID_get == '') || (thread_ress_ID_get == 'undefined'))) {
        thread_ress_ID = ((alphabet[(Math.floor(Math.random(0,1)*63))]) + alphabet[(Math.floor(Math.random(0,1)*63))] + alphabet[(Math.floor(Math.random(0,1)*63))] + alphabet[(Math.floor(Math.random(0,1)*63))] + alphabet[(Math.floor(Math.random(0,1)*63))] + alphabet[(Math.floor(Math.random(0,1)*63))] + alphabet[(Math.floor(Math.random(0,1)*63))] + alphabet[(Math.floor(Math.random(0,1)*63))] + alphabet[(Math.floor(Math.random(0,1)*63))]);
    } else {
        thread_ress_ID = thread_ress_ID_get;
    }
    if (res_user_owner_mode) {
        thread_ress_ID = thread_owner_ID;
    }
}

/*
こういうことできるよーってな感じのスレです。<br>
書き込んでも保存されないのでリロードすると消えます。<br>
実際に使った後のhtmlとstyleをコピペして新しいhtmlに貼り付けてます。<br>
そういう使い方もいいよ。<br>
誹謗中傷とかデマ流しには使わないでね。<br>
<a href="before.html">書き込む前に読んでね</a>は絶対読んでね。
*/