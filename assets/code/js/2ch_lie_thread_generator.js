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

function create_new(){
    check();
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
        thread_owner_name = '偽物を見つけた無名さん';
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
    console.log('スレッドID：' + get_unixtime_a);
    thread_dummy_id = (get_unixtime_a);
    /*const element = document.querySelector('div');
    element.remove();*/
    success_count = 4;
    window.location.href = ('?thread_id=' + thread_dummy_id + 'creation=true#');
    document.write('<head><title>【偽２ちゃんねる】- '
     + thread_title
     + '</title></head><body style=color:black;background-color:#EFEFEF;position:relative;padding-bottom:15px;><div id=body><div id=txt_1 style="font-size:20px;padding-bottom:25px;"><a href="">偽２ちゃんねるの掟とは？</a></div><a href="">偽２ちゃんねる</a> <a href="">スマホ用</a> <a href="">■掲示板へ戻る■</a> <a href="">全部</a> <a href="">1-</a> <a href="">最新50</a><hr><div id=title style=color:red;font-size:25px;>' + thread_title + '</div><div style="position:absolute;right:0px;top:45px;">[PR]<a href="https://twitter.com/#!/KuriSan_Fox">みんな、元気～？</a>[PR]</div></body></html>');
}