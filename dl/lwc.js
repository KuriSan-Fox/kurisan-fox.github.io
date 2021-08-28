
let maeno_website = 'Error';
let korewa_kyoka = 'Error';

let selectLanguage = 'NaN';
// ２号.リスペクト（？）、管理しやすくなるから１行１行変数です。無駄に食ってしまう
let Language_DescLine_0 = 'テキスト見本';
let Language_DescLine_1 = 'テキスト見本';
let Language_DescLine_2 = 'テキスト見本';
let Language_DescLine_3 = 'テキスト見本';
let Language_DescLine_4 = 'テキスト見本';
let Language_DescLine_5 = 'テキスト見本';
let Language_DescLine_6 = '<a style="color:blue;" href="https://twitter.com/#!/KuriSan_Fox">くりやま きつね</a>'

function mudantensai_japanese(){
    console.log('にほんご');
    selectLanguage = 'JPN';

    Language_DescLine_0 = '注意！';
    Language_DescLine_1 = 'あなたは<a href="https://mcpedl.com/legacy-water-color/" style="color:blue;">MCPEDL</a>、あるいは<a href="https://mineadd.bubbleapps.io/items/1616781619850x195828936754331650" style="color:blue;">MineAdd</a>以外に貼られたダウンロードリンクを押した可能性があります。';
    Language_DescLine_2 = 'または無断転載したサイトからダウンロードしようとした可能性があります。';
    Language_DescLine_3 = '私は一切MCPEDL、またはMineAddからのダウンロードを受け付けておりません。';
    Language_DescLine_4 = '無断転載であるため、MCPEDL運営、または私にご相談ください。';
    Language_DescLine_5 = 'ホストさん見てますか？今すぐ無断転載をやめてください！';
    Language_DescLine_6 = '(c) <a style="color:blue;" href="https://twitter.com/#!/KuriSan_Fox">くりやま きつね</a>';
}

function mudantensai_english(){
    console.log('えいご');
    selectLanguage = 'ENG';

    Language_DescLine_0 = 'WANRING!!!!';
    Language_DescLine_1 = 'You may have accessed it from a download link from a site other than <a href="https://mcpedl.com/legacy-water-color/" style="color:blue;">MCPEDL</a>, and <a href="https://mineadd.bubbleapps.io/items/1616781619850x195828936754331650" style="color:blue;">MineAdd</a>.';
    Language_DescLine_2 = 'Or you may have tried to download it from an unauthorized reproduction of my resource pack.';
    Language_DescLine_3 = 'I do not publish resource packs outside of MCPEDL, MineAdd and my website.';
    Language_DescLine_4 = 'If it\'s outside of MCPEDL, MineAdd, or my homepage, it\'s unauthorized reproduction!Please contact the producer, KuriSan_Fox.';
    Language_DescLine_5 = 'Are you seeing the hosts? PLEASE STOP UNAUTHORIZED REPRODUCTION IMMEDIATELY!';
    Language_DescLine_6 = '(c) Create by <a style="color:blue;" href="https://twitter.com/#!/KuriSan_Fox">くりやま きつね</a>'
}

function showtxt() {
        $('#body0').html('<div style="text-align:center;font-size:50px;">' + Language_DescLine_0 + '</div><br><div style="text-align:center;">' + Language_DescLine_1 + '<br>' + Language_DescLine_2 + '<br>' + Language_DescLine_3 + '<br>' + Language_DescLine_4 + '<br>' + Language_DescLine_5 + '<br><br><br> ' + Language_DescLine_6 + '</div><div style="text-align:center; padding-top: 100px;"><img src="../assets/image/かけるくん.png" class=css1></div>')
        $('#body0').css({'color':'white','background-color':'#c40000'});
}

function oldwebsitechecker() {
    maeno_website = document.referrer;
    korewa_kyoka = ((maeno_website == 'https://mcpedl.com/') || (maeno_website == 'https://t.co/') || (maeno_website == 'https://mineadd.bubbleapps.io/') || ((maeno_website == '') && (document.domain == '')) && ((document.domain == 'kurisan-fox.github.io') || (document.domain == '')));
    if (korewa_kyoka) {
        console.log('ファルコ');
        $('body').html('<div id=div1 style="text-align: center;padding-top:100px;" class="load-background">まえのURLをかくにんちゅう<br>すこしおまちください<br><br>このがめんがながくつづくばあいは、ウェブサイトをリロードしてみてください。<br><span style="color:red;">ちゅうい：ドキュメントのreferrerを使用しているため多分いないと思うけど古いInternetExplorerではページが描写されない可能性があります！</span><div id=fox><img src="../assets/image/狐.png" class="css1"></div></div>');
    } else {
        console.log('ダメッ！');
        $('body').html('<div style="text-align:center;padding-top:100px;"><div style="font-size:50px;color:red;">Select a Your Language:</div><br><button onclick="mudantensai_japanese();showtxt();">日本語（JAPANESE）</button>／<button onclick="mudantensai_english();showtxt();">ENGLISH</button></div>');
    }
}