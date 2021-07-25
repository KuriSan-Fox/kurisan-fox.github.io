let now_url = (location.host);
let counter = 0;
website_host = now_url; // どこかでletされてるみたいです。
//let kotei_url_a = 0;
const kotei_url_a = 'https://';
//let kotei_url_b = 0;
const kotei_url_b = 'kurisan-fox.github';
//let kotei_url_c = 0;
const kotei_url_c = '.io';
const kotei_url_all = (kotei_url_a + kotei_url_b + kotei_url_c);
console.log('URL：' + kotei_url_all);
nisemono_checker();
// ほぼすべてのhtmlで使うコードはここに書くと思います。
// JSが嫌いになりそうでした。

/* クレジット/コピーライト関連 */
// 変数作成
function copyright(){
    console.log('functuin「copyright」を呼び出しています。');
    let coder_user = ''
    let coder_user_link = '';
    let run_ser = '';
    let run_ser_link = '';
    let start_year = 0;
    let last_year = 0;
    console.log('functuin「copyright」を呼び出しました！');
}

// 変数デフォ
function copyright_default(){
    console.log('functuin「copyright_default」を呼び出しています。');
    coder_user = String('KuriSan_Fox');
    console.log(coder_user);
    coder_user_link = String('https://twitter.com/#!/KuriSan_Fox');
    console.log(coder_user_link);
    run_ser = String('github pages');
    console.log(run_ser);
    run_ser_link = String('https://github.io/');
    console.log(run_ser_link);
    start_year = String(2021);
    console.log(start_year);
    last_year = String(2021);
    console.log(last_year);
    console.log('functuin「copyright_default」を呼び出しました！');
}

// ラベル作成
function copyright_bottom(){
    console.log('functuin「copyright_bottom」を呼び出しています。');
    let html_text_bottom_credit_year = String(start_year + '-' + last_year);
    if(start_year==last_year){
        html_text_bottom_credit_year = String(start_year);
    }
    console.log(html_text_bottom_credit_year);
    let html_text_bottom_credit = String('Coding by <a href="' + coder_user_link + '" style=color:grey;>' + coder_user + ' ' + html_text_bottom_credit_year + '</a> and Powered by <a href="' + run_ser_link + '" style="color:grey;"> ' + run_ser + '</a>');
    console.log(html_text_bottom_credit);
    let html_code_bottom_credit = String('<div id=bottom_code_credit_html style=color:grey;font-size:15px;> ' + html_text_bottom_credit + '</div>');
    console.log(html_code_bottom_credit);
    document.write(html_code_bottom_credit);
    console.log('functuin「copyright_bottom」を呼び出しました！');
}

function nisemono_checker() {
    counter = (counter + 1);
    if ((website_host == 'https://kurisan-fox.github.io') && (website_host != 'web.archive.org')) {
        console.log('正しいページです。');
    }else{
        if(website_host == ''){
            console.log('クローンされたことが検知されました。');
        }else{
            while(counter<255){
                counter += 1;
                document.write('<body><div id=body style="position:fixed;top:0px;bottom:0px;right:0px;left:0px;color:white;font-size:25px;background-color:#CE3426;">まだある。。。</div></body>');
            }
            console.log('正しいページではないことが検知されました。');
            console.log('Host:' + website_host);
            let timing_ut = 0;
            let timing_ut_fixed = 0;
            timing_ut = Math.floor(new Date);
            timing_ut_fixed = (timing_ut*1);
            let website_open_time = timing_ut_fixed;
            document.write('<head><title>エラー番号：' + (website_open_time) + '</title></head><body><div id=body style="position:fixed;top:0px;bottom:0px;right:0px;left:0px;color:white;font-size:25px;background-color:#c40000;"><p style="font-size:35px;">早くアクセスを遮断してください！！！！</p>' + location.host + 'は、元のページと一切関係がありません。もしフォームがあっても、パスワードを入力しないでください。<br>または、GitHubがドメイン名を変更したためリポジトリ所有者が気づいていないか、失踪しているため更新されていません。<br>ウェイバックマシンなどでも表示される可能性があります（元はウェイバックマシン対策です）。<br><br>- 別のページへ行く -<br><a href="https://google.com/" style="color:blue;">Google</a>（URLをちゃんと確認してください。）</div></body>');
        }
    }
}
