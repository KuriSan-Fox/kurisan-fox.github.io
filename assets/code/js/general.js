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