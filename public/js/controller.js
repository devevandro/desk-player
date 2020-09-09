$(document).ready(() => {
    //importanto o render electron para a cá
    const app = require('electron').remote.app;
    const { remote } = require('electron');

    //código para minimizar a aplicação
    $('.btn-minimize').click(() => {
        console.log('minimizar');
        remote.BrowserWindow.getFocusedWindow().minimize();
    });
    
    //codigo para fechar a aplicação
    $('.btn-close').click(() => {
        console.log('fechar');
        remote.BrowserWindow.getFocusedWindow().close();
    });


    $('.radios-cards').click(() => {
        console.log('side nav');
    });
});
