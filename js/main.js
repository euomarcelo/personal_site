$( document ).ready(function() {
    $('#vivo-link').click( function( e ){
        e.preventDefault();
        $.swipebox([
            { href:'images/vivo1.png', title:'VIVO Netmetric MoM : Tela inicial' },
            { href:'images/vivo2.png', title:'VIVO Netmetric MoM : Mapa funcional' },
            { href:'images/vivo3.png', title:'VIVO Netmetric MoM : Configuração do sistema' },
            { href:'images/vivo4.png', title:'VIVO Netmetric MoM : Configuração do sistema' }
        ]);
    });
    $('#mdic-link').click( function( e ){
        e.preventDefault();
        $.swipebox([
            { href:'images/mdic1.png', title:'Central MDIC : Tela inicial' },
            { href:'images/mdic-login.png', title:'Central MDIC : Tela de login' },
            { href:'images/mdic3.png', title:'Central MDIC : Tela interna' }
        ]);
    });
    $('#ppa-link').click( function( e ){
        e.preventDefault();
        $.swipebox([
            { href:'images/print_redeplanejamento.png', title:'Rede de Planejamento : Tela inicial' },
            { href:'images/ppa1.png', title:'Rede de Planejamento : Dashboard' },
            { href:'images/ppa2.png', title:'Rede de Planejamento : Tela interna' }
        ]);
    });
    $('#redeinde-link').click( function( e ) {
        e.preventDefault();
        $.swipebox( [
            { href:'images/print_redeinde.png', title:'Plataforma MDIC : Tela inicial' }
        ] );
    });
    $('#digdug-link').click( function( e ) {
        e.preventDefault();
        $.swipebox( [
            { href:'images/digdug2000.png', title:'Digdug 2000 : Visão de cima' },
            { href:'images/digdug2a.png', title:'Digdug 2000 : Tela de vitória' },
            { href:'images/digdug2b.png', title:'Digdug 2000 : Visão em 3a pessoa' },
        ] );
    });

});
// html.inf.ufrgs.br /home/grad/username csync ~/projects/site_pessoal sftp://mecardoso@html.inf.ufrgs.br:22/home/grad/mecardoso
// rsync -uav --delete -e ssh mecardoso@html.inf.ufrgs.br:22/home/grad/mecardoso ~/projects/site_pessoal