let word_a = 0;
let word_b = 0;
let word_c = 0;
let word_d = 0;
let word_e = 0;
let word_done = '';
let test = 'aa';
let count_max = 0;
let count_max_a = 0;
let word_a_max = 0;
let word_b_max = 0;
let word_c_max = 0;
let word_d_max = 0;
let word_e_max = 0;
let use_word = 0;
let let_word = 0;
console.log('test');
let word_zzzzzzz_max = 0;

function stick_setup() {
    word_a = [ 'した', 'しなかった', 'する', 'から', 'くれ', 'しろ', 'するな', 'だろ', 'だな', 'だから', 'じゃない', 'なのか' ];
    word_b = [ 'は', 'を', 'に', 'が', ' is ', ' has ', ' was ', ' as ', ' on ', ' to ', ' that ', ' at ', ' been ', ' ' ];
    word_c = [ '、', '。', '！', '？', ', ', '. ', '!', '?' ];
    word_d = [ '俺', '僕', 'I', ' e ', ' my ', ' Self ', ' self ', ' myself ' ];
    word_e = [ 'ドット', 'ドット絵', '絵', 'やります', 'ショートヘア', '無理', 'いいよ', 'しなくて', 'はならない', 'いい加減', 'ブロ解', '俺はストーカーでもあり監視厨' ]
}
function stickyeah() {
    test = 'test';
    stick_setup();
    count_max_a = (document.getElementById("bbbakamooon"));
    count_max = (count_max_a)
    console.log('aa: ' + count_max);
    //debug_test();
    create_mystery_jpn();
    console.log(test);
    console.log('あああああああああああああああああああああ：' + Number(count_max));
    if(Number(count_max) > 255){
        document.writeln('<p style="color:red;"font-size:25px;text-align:center;>255未満の数字を入力してください。</p>');
    }else{
        document.writeln('作成完了！！！！：<br>' + test + '<br><br><button>ツイートする</button><br><button>ページを共有する</button><br><a href="index.html"><button>もう一回</button></a>');
    }
}
function debug_test() {
    let test_txt = (word_a[0]);
    console.log(test_txt);
}

function create_mystery_jpn() {
    let_word = (Math.round((Math.random(0,1))*(count_max)*(Math.random(0,0.01))))*1;
    word_a_max = let_word;
    count_max = ((count_max) - let_word);
    console.log('生成ワード数：' + word_a_max);

    let_word = (Math.round((Math.random(0,1))*(count_max)*(Math.random(0,0.1))))*1;
    word_b_max = let_word;
    count_max = ((count_max) - let_word);
    console.log('生成ワード数：' + word_b_max);

    let_word = (Math.round((Math.random(0,1))*(count_max)*(Math.random(0,0.15))))*1;
    word_c_max = let_word;
    count_max = ((count_max) - let_word);
    console.log('生成ワード数：' + word_c_max);

    let_word = (Math.round((Math.random(0,1))*(count_max)*(Math.random(0,0.2))))*1;
    word_d_max = let_word;
    count_max = ((count_max) - let_word);
    console.log('生成ワード数：' + word_d_max);

    let_word = (Math.round((Math.random(0,1))*(count_max)))*1;
    word_e_max = let_word;
    count_max = ((count_max) - let_word);
    console.log('生成ワード数：' + word_e_max);

    let_word = count_max*1;
    word_zzzzzzz_max = let_word;
    count_max = ((count_max) - let_word*1);
    console.log('生成ワード数：' + word_zzzzzzz_max);

    console.log('余った：' + count_max);
    let checker_max = (word_a_max + word_b_max + word_c_max + word_d_max + word_e_max + word_zzzzzzz_max);
    console.log('確認：' + (checker_max));

    if((checker_max*1) == (count_max_a*1)){
        console.log('正常に動作しています。');
    }else{
        console.log('一部実行に失敗しています！');
    }

    //while(()){}
}