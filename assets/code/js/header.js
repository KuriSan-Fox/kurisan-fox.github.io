// 頭部に表示させるメッセージ専用のコード。

// --- お知らせ --- //
function headerender(){
console.log('頭部におしらせ見ることに成功した！！！！');
let notice_ = 0; // 怖いので一応
notice_ = '一部htmlをJSに移行中です。このお知らせ的なそれもコード置いて表示させてます、一部ページでは表示されない可能性があります。';
let notice_html_code = 0;
let notice_html_code_kaitahito ='KuriSan_Fox';
let notice_html_code_kaitahito_url = 'https://twitter.com/#!/@';
let notice_html_code_kaitahito_style = 'background-color:red; border:red solid; color:white; font-size:16px;';
if((notice_html_code=0)||(notice_html_code='')){
notice_html_code = '';
}else{
if(notice_html_code_kaitahito_url==''){
notice_html_code_kaitahito_url = 'https://github.com/';
}else{
notice_html_code = '<div style="' + notice_html_code_kaitahito_style +'" id=top_notice_true>' + notice_ + ' by ' + notice_html_code_kaitahito +'</div>';
}
}
document.writeln(notice_html_code);
}

function kusocode() {
    let a = ['a','b','c'];
    let b = [ 'a2', 'b2', 'c2' ];
    console.log('hi');
    console.log(a[(Math.round(Math.random(0,1)*2))]);
    console.log(b[(Math.round(Math.random(0,1)*2))]);
    let c = [a,b];
    console.log(c[(Math.round(Math.random(0,1)*1))][(Math.round(Math.random(0,1)*2))]);
}
