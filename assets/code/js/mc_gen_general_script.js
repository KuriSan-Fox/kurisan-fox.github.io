function base(){
    // TODO: どこかでこれを使用する。
    console.log('作った人ラベルを準備しています。。。');
    let tsukutta_hito = '栗君';
    let tsukutta_hito_id = 'KuriSan_Fox';
    let tsukutta_hito_label = '記載者：' + tsukutta_hito + '（<a href="https://twitter.com/#!/' + tsukutta_hito_id + '\">' + tsukutta_hito_id + '）';
    if(tsukutta_hito_label == ''){
        console.log('作った人ラベルの再作成に失敗しました。');
    }else{
        console.log('作った人ラベルの作成に成功しました！：');
        console.log(tsukutta_hito_label);
    }
    console.log('多分作った人ラベルの準備に終了しました。これ意味あるんですかね。');
}
function reload_page(){
    location.reload();
}