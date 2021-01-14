(function(){
 
    // Первый аргумент - подпись под иконкой в главном меню
    // Третий аргумент - имя файла иконки
    main_menu.add('Magic Cast', [], 'mm_ico_magiccast.png', function(){
 
        var params = '';
 
        if (stb.user['web_proxy_host']){
            params = '?proxy=http://'+stb.user['web_proxy_host']+':' +stb.user['web_proxy_port'];
        }
 
        stb.setFrontPanel('.');
 
        if (!params){
            params += '?';
        }else{
            params += '&';
        }
 
        params += 'referrer='+encodeURIComponent(window.location);
 
        //window.location = '/' + stb.portal_path + '/external/olltv/index.html'+params;
        window.location = 'http://stb.ottplayer.org'+params;
 
    }, {layer_name : "magiccast"}); // Для корректной работы модуля необходимо указать уникальный layer_name
 
    loader.next();
})();