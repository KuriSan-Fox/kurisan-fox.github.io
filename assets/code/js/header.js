// 頭部に表示させるメッセージ専用のコード。

// --- お知らせ --- //
function headerender(){
console.log('頭部におしらせ見ることに成功した！！！！');
let notice_ = 0; // 怖いので一応
notice_ = 'JSファイルでスタイルを一気に変えれるようにしてます。古いページだと適用されないことがあります。ファイルはわかりやすくするためにいくつかに分離してます（一部まとめてます）。';
let notice_html_code = 0;
let notice_html_code_kaitahito ='KuriSan_Fox';
let notice_html_code_kaitahito_url = 'https://twitter.com/#!/@';
let notice_html_code_kaitahito_style = 'background-color:red; border:red solid; color:white; font-size:16px;';
if((notice_html_code=0)||(notice_html_code='')){
notice_html_code = '';
}else{
if(notice_html_code_kaitahito_url==''){
}else{
notice_html_code = '<div style="' + notice_html_code_kaitahito_style +'" id=top_notice_true>' + notice_ + ' by ' + notice_html_code_kaitahito +'</div>';
}
}
document.writeln(notice_html_code);
}

// --- 最終更新日 --- //