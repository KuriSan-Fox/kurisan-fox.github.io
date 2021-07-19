function bedrock_and_java() {
    base();

    let counterrr = 0;
    let textbox = document.getElementById("generato_count_be_je_same")
    let counterrrmax = textbox.value

    console.log(textbox);
    console.log(counterrrmax);

    console.log('りんりんせいせいちゅ～～～～～');
    //let counterrrmax = 128;
    console.log('生成カウンターは' + counterrrmax + 'なので、' + counterrrmax + '個数値を生成させます。');
    let generator = '';
    let generating_num = 0;
    let counterrrmaxb = 0;
    let tsuika_osirase = '';
    let generating_num_data = 0;
    if(counterrrmax > 1024){
        console.log('数字が多すぎたため、1024に設定します。');
        counterrrmaxb = 1024;
        tsuika_osirase = '生成個数が多過ぎたため、端末の負担対策で1024に設定されました。';
    }if(counterrrmax != (Math.round(counterrrmax * 1))){
        
    }else{
        console.log('生成を開始します。');
        counterrrmaxb = counterrrmax;
    }
    while (counterrr < counterrrmaxb) {
        generating_num_data = '';
        generating_num = (Math.round((Math.random(0,1)-0.5)*4294967295));
        if(generating_num < 0){
            generating_num_data = generating_num + 4294967296;
        }
        generator = generator + '\n' + (counterrr + 1) + '個目：' + generating_num;
        if(generating_num_data != ''){
            generator = generator + '（' + generating_num_data + '）';
        }
        console.log('生成中ですよん！：' + ((counterrr/counterrrmax)*100) + '%');
        counterrr = counterrr + 1;
    }
    // 非推奨タグって聞いたんですけど、代わりがよくわからないので一時期的にこれを使ってます。。。
    document.write('<button type="button" onclick="reload_page();">メインページに戻る</button><span style="color:blue;"><br><br>--- 説明 ---</span><br>マイナス数値のシード値は（）の中にJava Edition専用のシード値があります。（）の外にあるマイナス数値はBedrock Edition用で、Java Editionで使っても全く違う地形を生成します。<br>マイナス記号ではない場合、両方そのまま使えます。<br><br><span style=color:red;>' + tsuika_osirase + '</span><br><br>// --- 作ったよ --- // <br><textarea cols=50 rows=20>' + generator + '</textarea><br><br>/// ----- 数字生成機終了線 ----- ///');
    if(generator != ''){
        console.log('せいせいかんりょー！');
    }else{
        console.log('JavaScriptが正常に動作していないか、ブラウザかスクリプトが古いです。');
    }
}