let blog_title = 'テキスト見本';
let blog_desc = 'テキスト見本';
let blog_creator_render = '製作者';
let blog_creator_render_id = '@editor'
let blog_creator_url_legs = 'https:/'
let blog_creator_url_body = '/kurisan-fox.github.'
let blog_creator_url_head = 'io';
let blog_create_day = '1970/01/01';
let blog_create_time = '00:00';
let blog_create_utc = 'UTC + 0';
let blog_edit_day = '1970/01/01';
let blog_edit_time = '00:00';
let blog_edit_utc = 'UTC + 0';
let blog_edit_log = 'なし';
let blog_render_header_html = '';
let blog_render_body_html = '';
let blog_render_bottom_html = '';
let resource_js_header_html = '../../../../assets/code/js/header.js';
let resource_js_bottom_html = '../../../../assets/code/js/general.js';


function use_default_creator() {
    console.log(resource_js_bottom_html);
    blog_creator_render = 'くりやま';
    blog_creator_url_legs = 'https:/'
    blog_creator_url_body = '/twitter.'
    blog_creator_url_head = 'com/#!/KuriSan_Fox';
}

function use_default_creator_b() {
    blog_creator_render = 'ねるまき';
    blog_creator_url_legs = 'https:/'
    blog_creator_url_body = '/twitter.'
    blog_creator_url_head = 'com/#!/ookamigitsune';
}

function render_blog_page() {
    blog_render_header_html = '<!DOCTYPE html><head><title>' + blog_title + '</title><meta charset="utf-8"></head>';
    blog_render_body_html = '<script src="' + resource_js_header_html + '"></script><script>headerender();</script><body style="color: black; background-color: white;"><a href="list.html" style="color: blue;">戻る</a><div id="follower_to_nakayoku_shiro" style="font-size: 25px; text-align: center; padding-top: 25px;">' + blog_title + '</div><br><hr><div id="follower_t0_nakayoku_shiro" style="font-size: 18.4px; text-align: left; padding-left: 400px; padding-top: 50px;">' + blog_desc + '<br><div id="iroiro" style="padding-top: 120px; font-size:20px; text-align: left;"><span style="color: red;">// --- 記載者 --- //</span><br>記載者：' + blog_creator_render + '（<a href="' + blog_creator_url_legs + blog_creator_url_body + blog_creator_url_head + '" style="color: blue;">' + blog_creator_render_id + '</a>）<br>作成日：' + blog_create_day + blog_create_time + '（' + blog_create_utc + '）<br>更新日：' + blog_edit_day + blog_edit_time +'（' + blog_edit_utc + '）<br><br> <span style="color: blue;">// --- 更新内容 --- //</span><br>' + blog_edit_log +'</div>';
    blog_render_bottom_html = '<script src="' + resource_js_bottom_html + '"></script><script>copyright();copyright_default();copyright_bottom();</script></body></html>';
    document.write(blog_render_header_html + '<!--- my codes --->' + blog_render_body_html + blog_render_bottom_html + '<!--- End of codes... --->');
}