function reload_page(){
    location.reload();
}
function abcdefg(){
    ff();
}
function ff(){
    let aaaaaaaa = 0; // 最大
    aaaaaaaa = (document.getElementById('agemotimoti_no_kazu').value);
    if(aaaaaaaa>256){ // 重くなるから
        aaaaaaaa = 256;
    }
    let aaaaaaa = 0; // 生成カウント管理
    let aaaaaa = ''; // 完成した「あ」
    while(aaaaaaaa>aaaaaaa){
        aaaaaaa += 1;
        aaaaaa = aaaaaa + 'あ';
    }
    console.log('最大：' + aaaaaaaa);
    if(aaaaaaaa < 1){
        aaaaaaaa = 1;
        console.log('指定されていないため、1に設定しました。');
    }
    console.log('生成カウント：' + aaaaaaa + '（0じゃなかったらバグです）');
    if(aaaaaaa != 0){
        aaaaaaa = 0;
        console.log('生成カウント変数が0じゃないため、0に設定されました。');
    }
    console.log('完成した「あ」：' + aaaaaa + '（空っぽだったらバグ、または指定されていません。）');
    if(aaaaaa == ''){
        if(aaaaaaaa < 1){
            console.log('指定されていないため、１文字生成させました。');
        }else{
            console.log('完成した「あ」が空っぽであるため、生成に失敗した可能性があります。');
        }
        aaaaaa = 'あ';
        console.log('修正後：' + aaaaaa);
    }
    let fontsizee = 0;
    fontsizee = (document.getElementById('agemotimoti_suze').value);
    let agemoti = '';
    let agemoti_num_max = 0;
    agemoti_num_max = (document.getElementById('agemotimoti').value);
    console.log(agemoti_num_max + ' が生成最大数です');
    let agemoti_num = 0;
    agemoti_num = 0;

    while(agemoti_num_max > agemoti_num){
        agemoti_num = agemoti_num + 1;
        agemoti = agemoti + aaaaaa;
        console.log(agemoti_num);
    }
    document.write('<head><title>' + fontsizee + '</title></head><body style="font-size:' + fontsizee + ';">' + agemoti + '</body>');
    console.log('成功');
    console.log('合計' + (aaaaaaaa * agemoti_num_max) + '個「あ」を作成しました！');
}