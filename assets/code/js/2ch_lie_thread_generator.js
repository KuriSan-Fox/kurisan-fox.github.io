// 事前に変数作るぜ！！！！！
/*
         _______________
        /  ___________  \
        | |           | |
        | | |      |  | |
        | | |      |  | |  <- ころんば４号君
        | |___________| |     開発者と全然関係ないです。
        |_______   _____|     かわいいよお前らもすこれ！
       /  --------- ■■ | \
      /     ------- ■■ |  \
     |  | ● ● ●  ■■ ■■ ||  |
     |  |        ■■ ■■ ||  |
     |  |        ■■ ■■ ||  |
     |  |        ■■     |  |
     \__|               |_/
        |      /\       |
        |      ||       |
        |      ||       |
        |      ||       |
        |______||_______|



*/
let thread_title = 0;
let thread_owner_name = 0;
let thread_description = 0;
let success_count = 0;
let thread_dummy_id = 0;
let thread_res_creation = 0;
let thread_res_youbi= new Array("日","月","火","水","木","金","土");
let alphabet = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z','0','1','2','3','4','5','6','7','8','9','A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z','/'];
let thread_owner_ID = ((alphabet[(Math.floor(Math.random(0,1)*63))]) + alphabet[(Math.floor(Math.random(0,1)*63))] + alphabet[(Math.floor(Math.random(0,1)*63))] + alphabet[(Math.floor(Math.random(0,1)*63))] + alphabet[(Math.floor(Math.random(0,1)*63))] + alphabet[(Math.floor(Math.random(0,1)*63))] + alphabet[(Math.floor(Math.random(0,1)*63))] + alphabet[(Math.floor(Math.random(0,1)*63))] + alphabet[(Math.floor(Math.random(0,1)*63))]);
let keijiban_namae = 0;
let thread_custom_owner_name_style = 0;
let thread_owner_custom_id = 0;
let thread_default_name = 0;
let thread_owner_custom_name_style = 0;
console.log(thread_owner_ID);
let thread_ress_count = 1;
function create_new(){
    //check();
    keijiban_namae = document.getElementById("keijiban_namae").value;
    thread_owner_custom_name_style = document.getElementById("thread_owner_custom_name_style").value;
    thread_owner_custom_id = document.getElementById("thread_owner_custom_id").value;
    thread_default_name = document.getElementById("thread_default_name").value;
    if(thread_owner_custom_id!=''){
        thread_owner_ID = thread_owner_custom_id;
    }
    if(keijiban_namae==''){
        keijiban_namae = '偽２ちゃんねる';
    }
    if(thread_default_name==''){
        thread_default_name = '偽物を見つけた無名さん';
    }
    success_count = 0;
    console.log('スレッド作成を開始します。。。');
    // --- スレタイ準備 --- //
    console.log('スレタイ準備を行います！');
    thread_title = document.getElementById("threti").value;
    if(thread_title.match(/>/) || thread_title.match(/</)){
        thread_title = 'error';
        console.log('使用不可能な文字列を発見しました。');
        document.write('<span style="color:red">無効な文字を検出したため、スレッド作成に失敗しました。</span><br><br>あなたが選択したスレタイ：' + thread_title + '<br><br><button onclick="location.reload();">新規スレッド画面へ戻る</button>');
    }else{
        if(thread_title == ''){
            thread_title = 'error';
            console.log('スレタイが空白です。');
            document.write('<span style="color:red">スレタイが無効です。スレタイを入力してください。</span><br><br>あなたが選択したスレタイ：' + thread_title + '<br><br><button onclick="location.reload();">新規スレッド画面へ戻る</button>');
        }else{
            if(thread_title == 'error'){
                document.write('<span style="color:red">このスレタイはシステム上禁止されています。</span><br><br>あなたが選択したスレタイ：' + thread_title + '<br><br><button onclick="location.reload();">新規スレッド画面へ戻る</button>');
            }else{
                console.log('スレタイ：' + thread_title);
                success_count = success_count + 1;
            }
        }
    }
    if(thread_title == ''){
        console.log('スレッドの名前が指定されていないため、再度スレッド新規作成画面へ送信します。');
    }else{
        console.log('正常です');
    }

    // --- スレ主の名前（イッチ） --- //
    console.log('スレ主（イッチ）の名前を指定します！');
    thread_owner_name = document.getElementById("itti_name").value;
    if(thread_owner_name == ''){
        success_count = success_count + 1;
        console.log('イッチの名前が空白です。');
        console.log('名前を無名に設定しています。。。');
        thread_owner_name = thread_default_name;
        console.log('名前を' + thread_owner_name + 'に設定しました。');
    }else{
        if((thread_owner_name == 'error') || (thread_owner_name == 'あぼーん')){
            console.log('この名前はシステム上禁止されています。');
            document.write('<span style="color:red">この名前はシステム上禁止されています。</span><br><br>あなたが選択したスレタイ：' + thread_title + '<br>イッチの名前：' + thread_owner_name + '<br><br><button onclick="location.reload();">新規スレッド画面へ戻る</button>');
        }else{
            if(thread_owner_name.match(/>/) || thread_owner_name.match(/</)){
                console.log('スタイルを破壊する恐れのある名前のため使用不可能にされています。');
                thread_owner_name = '無効';
                document.write('<span style="color:red">スタイルを破壊する可能性のある名前なため利用できません。</span><br><br>あなたが選択したスレタイ：' + thread_title + '<br>イッチの名前：' + thread_owner_name + '<br><br><button onclick="location.reload();">新規スレッド画面へ戻る</button>');
            }else{
                console.log('イッチの名前：' + thread_owner_name);
                success_count = success_count + 1;
            }
        }
    }

    // --- スレッド内容 --- //
    console.log('スレッド内容を読み込みます。');
    thread_description = document.getElementById("one_less_description").value;
    if(thread_description == ''){
        console.log('説明が空白です。');
        document.write('<span style="color:red">説明が空白です。</span><br><br>あなたが選択したスレタイ：' + thread_title + '<br>イッチの名前：' + thread_owner_name + '<br>スレッド内容（１）：' + thread_description + '<br><br><button onclick="location.reload();">新規スレッド画面へ戻る</button>');
    }else{
        if(thread_description == 'あぼーん'){
            console.log('説明がシステム上禁止されています。');
            document.write('<span style="color:red">説明がシステム上禁止されています。</span><br><br>あなたが選択したスレタイ：' + thread_title + '<br>イッチの名前：' + thread_owner_name + '<br>スレッド内容（１）：' + thread_description + '<br><br><button onclick="location.reload();">新規スレッド画面へ戻る</button>');
        }else{
            if(thread_description == (thread_description.match(/>/) || thread_description.match(/</))){
                console.log('説明がスタイルを破壊する恐れがあるため使用できません。');
                document.write('<span style="color:red">説明がスタイルを破壊する恐れがあるため使用できません。</span><br><br>あなたが選択したスレタイ：' + thread_title + '<br>イッチの名前：' + thread_owner_name + '<br>スレッド内容（１）：' + thread_description + '<br><br><button onclick="location.reload();">新規スレッド画面へ戻る</button>');
            }else{
                console.log('スレッドの説明' + thread_description);
                success_count = success_count + 1;
            }
        }
    }

    // --- スレッド作成 --- //
    if(success_count == 3){
        console.log('スレッドの作成に成功しました。');
        console.log('スレッドの仮画面を表示します。。。');
        //let success_count = 3;
        thread_render();
    }
}

let get_date = 0;
let get_unixtime = 0;
let get_unixtime_b = 0;
let get_unixtime_a = 0;
// スレッド見せる
function thread_render(){
    // 参考：https://lab.syncer.jp/Web/JavaScript/Snippet/2/
    get_date = new Date();
    get_unixtime = get_date.getTime();
    get_unixtime_b = Math.floor( get_unixtime / 1000 );
    get_unixtime_a = Math.floor(get_unixtime);
    thread_res_creation = new Date();
    console.log('スレッドID：' + get_unixtime_a);
    thread_dummy_id = (get_unixtime_a);
    success_count = 4;
    // スレッド書き込みふぉーむ
    document.write('<div id="kakikomi" style="position:absolute;bottom:-250px;left:0px;right:0px;"><div style="text-align:center;"><a href="">リロード[Ctrl+R]</a> <a href="">新着レスの表示</a> / <small><a href="">スレッドの保存</a></small></div><hr>　⇒<hr><a href="">掲示板に戻る</a> <a href="">全部</a> <a href="">前100</a> <a href="">次100</a> <a href="">最新50</a><br><script src="../../assets/code/js/2ch_lie_thread_generator_sub.js"></script><button onclick="ress();"><a href="#kakikomi">書き込む</a></button>名前：<input type=name id="ress_name"> E-mail<small>実際に保存されます。実在する他人のメールアドレスは使わないでください。</small>：<input type=ress_email_address><div id=create_ress_desc><textarea cols=64 rows="6" id=ress_description></textarea></div><br><input type=checkbox id=thread_owner_mode>スレ主モード　カスタムIDを使う：<input type=text id=use_custom_id>[TIP：IDは９桁で、大文字小文字数字一部記号が使われます。空っぽにするとランダムになります。]<br>荒らしシミュレーション：<input type=checkbox id=troller>=> 有効の場合の連打送信数<input id=trollingcount type=number>（最大1000）</div>');
    // スレッドレンダー
    document.writeln('<head><title>【' + keijiban_namae + '】- '+ thread_title+ '</title></head><body style=color:black;background-color:#EFEFEF;position:relative;padding-bottom:15px;><div id=body><div id=txt_1 style="font-size:20px;padding-bottom:25px;"><a href="">' + keijiban_namae + 'の掟とは？</a></div><a href="">' + keijiban_namae + '</a> <a href="">スマホ用</a> <a href="">■掲示板へ戻る■</a> <a href="">全部</a> <a href="">1-</a> <a href="">最新50</a><hr><div id=title style=color:red;font-size:25px;>' + thread_title + '</div><div style="position:absolute;right:0px;top:45px;">[PR]<a href="https://twitter.com/#!/KuriSan_Fox">みんな、元気～？</a>[PR]</div></body></html>');
    document.writeln('<div class="ress_1">1 ：<span style="color:green;' + thread_owner_custom_name_style + '">' + thread_owner_name + '</span>：' + (thread_res_creation.getFullYear()) + '/' + (thread_res_creation.getMonth()+1) + '/' + (thread_res_creation.getDate()) + '（' + thread_res_youbi[thread_res_creation.getDay()] + '） ' + thread_res_creation.getHours() + ':' + thread_res_creation.getMinutes() + ':' + thread_res_creation.getSeconds() + '<small style="color:gray;">.' + Math.floor(thread_res_creation.getMilliseconds()*0.1) + '</small>' + ' ID: ' + thread_owner_ID + '</div>');
    document.writeln('<div style="padding-left:40px;">' + thread_description + '</div>');
}