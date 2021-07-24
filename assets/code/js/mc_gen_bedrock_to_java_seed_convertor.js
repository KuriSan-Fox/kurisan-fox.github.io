function bedrock_to_java(){
    base();
    let textbox = document.getElementById("generato_count_be_to_je");
    let old_seed = textbox.value;

    console.log('シード値変換を開始します。。。');

    //let old_seed = '';
    if((old_seed<-2147483648) || ((old_seed * 1) != Math.round(old_seed * 1))){
            new_seed = 'Bedrock Editionはこの元々シード値を使用できません。';
            console.log('Bedrock Editionは元々このシード値に対応していないようです。');
    }else{ // JavaScriptってelseif無いの知りませんでした。
        if(old_seed<0){
            new_seed = (old_seed * 1) + (4294967296);
        }else{
            new_seed = old_seed;
        }
    }

    // 非推奨タグって聞いたんですけど、代わりがよくわからないので一時期的にこれを使ってます。。。
    document.write('<button type="button" onclick="reload_page();">メインページに戻る</button><span style="color:blue;"><br><br>--- 説明 ---</span><br>Bedrock Editionのシード値をJava Edition専用に変換します。<br>変換されたシード値をJava Editionで入力して、同じ座標にTPして見比べてみてください！<br><br>変換前シード値: <input type=number value="' + old_seed + '"><br>変換後シード値：[<span style=color:yellowgreen;><input type=number value="' + new_seed + '"></span>]');
    if(old_seed != ''){
        console.log('変換に成功しました太たたた');
    }else{
        console.log('JavaScriptが正常に動作していないか、ブラウザかスクリプトが古いです。');
    }
}