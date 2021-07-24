function java_to_bedrock(){
    base();
    let textbox = document.getElementById("generato_count_je_to_be");
    let old_seed = textbox.value;

    console.log('シード値変換を開始します。。。。。。。。。。。。。。。。。。。');

    //let old_seed = '';
    if((old_seed<0) || (old_seed > 4294967295) || ((old_seed * 1) != Math.round(old_seed * 1))){
            new_seed = '残念ながらこのシード値はBedrock Edition専用に変換できません。';
            console.log('残念ながらこのシード値はBedrock Edition専用に変換できません。');
    }else{ // JavaScriptってelseif無いの知りませんでした。
        if(old_seed>2147483647){
            new_seed = (old_seed * 1) - (4294967296);
        }else{
            new_seed = old_seed;
        }
    }

    // 非推奨タグって聞いたんですけど、代わりがよくわからないので一時期的にこれを使ってます。。。
    document.write('<button type="button" onclick="reload_page();">メインページに戻る</button><span style="color:blue;"><br><br>--- 説明 ---</span><br>Java Editionのシード値をBedrock Edition専用に変換します。<br><span color=red;>32bit以内のシード値しか変換できません。マイナス記号付きのシード値も変換できません。</span><br>変換されたシード値をJava Editionで入力して、同じ座標にTPして見比べてみてください！<br><br>変換前シード値：[<input type=text value="' + old_seed + '">] <br>変換後シード値: <input type=number value="' + new_seed + '">');
    if(old_seed != ''){
        console.log('変換に成功しました太たたた');
    }else{
        console.log('JavaScriptが正常に動作していないか、ブラウザかスクリプトが古いです。');
    }
}