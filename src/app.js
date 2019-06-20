var $ = require('jquery');

$(document).ready(function(){

  //salvo il template dentro a una variabile
  var card__template = $('.card_template').html();
  //richiamo il compile
  var template__function = Handlebars.compile(card__template);

  //richiedo dati al bd php
  $.ajax({
      'url': "http://localhost:80/esercizio_44_php-dischi/db_json.php",
      'metod': "GET",
      'success': function(data){
        var obj_db = JSON.parse(data);
        //console.log(obj_db);

        for (var i = 0; i < obj_db.length; i++) {
          //popolo la select evitando di inserire artisti doppi
          if (!$('.cerca_artista').text().includes(obj_db[i].artist)) {
            $('.cerca_artista').append('<option value="'+obj_db[i].artist+'">'+obj_db[i].artist+'</option>');
          }
          var album = {
            'img': obj_db[i].img,
            'title': obj_db[i].title,
            'artist': obj_db[i].artist,
            'year': obj_db[i].year
          }
          var html = template__function(album);
          //console.log(html);

          $('.card_container').append(html);
        }
      },
      'error': function(richiesta, stato, errori) {
            alert(errori);
      }
  });

  //ricerca album
  $('#search').keyup(function(event){
    //salvo i valori inseriti nella ricerca
    var album_ricercato = $(this).val().toLowerCase();
    var artista_ricercato = $(this).val().toLowerCase();
    var anno_ricercato = $(this).val();
    //console.log(artista_ricercato);
      $('.card_container').empty();
        $.ajax({
            'url': "http://localhost:80/esercizio_44_php-dischi/db_json.php",
            'metod': "GET",
            'success': function(data){
              var obj_db = JSON.parse(data);
              console.log(obj_db);
              for (var i = 0; i < obj_db.length; i++) {
                if (obj_db[i].artist.toLowerCase().includes(artista_ricercato) || obj_db[i].title.toLowerCase().includes(album_ricercato) || obj_db[i].year.toLowerCase().includes(anno_ricercato)) {
                  var album = {
                    'img': obj_db[i].img,
                    'title': obj_db[i].title,
                    'artist': obj_db[i].artist,
                    'year': obj_db[i].year
                  }
                  var html = template__function(album);
                  //console.log(html);
                  $('.card_container').append(html);
                }
              }
            },
            'error': function(richiesta, stato, errori) {
                  alert(errori);
            }
        });
  });

  $('.cerca_artista').change(function(){

    var artista_selezionato = $(this).val();
    //console.log(artista_selezionato);

    $.ajax({
        'url': "http://localhost:80/esercizio_44_php-dischi/db_json.php",
        'metod': "GET",
        'success': function(data){
          var obj_db = JSON.parse(data);
          //console.log(obj_db);
          $('.card_container').empty();

          for (var i = 0; i < obj_db.length; i++) {
            if (artista_selezionato == obj_db[i].artist) {
              var album = {
                'img': obj_db[i].img,
                'title': obj_db[i].title,
                'artist': obj_db[i].artist,
                'year': obj_db[i].year
              }
              var html = template__function(album);
              //console.log(html);

              $('.card_container').append(html);
            }
          }
          if (artista_selezionato == 'all') {
            //richiedo dati al bd php
            $.ajax({
                'url': "http://localhost:80/esercizio_44_php-dischi/db_json.php",
                'metod': "GET",
                'success': function(data){
                  var obj_db = JSON.parse(data);
                  //console.log(obj_db);

                  for (var i = 0; i < obj_db.length; i++) {
                    //popolo la select evitando di inserire artisti doppi
                    if (!$('.cerca_artista').text().includes(obj_db[i].artist)) {
                      $('.cerca_artista').append('<option value="'+obj_db[i].artist+'">'+obj_db[i].artist+'</option>');
                    }
                    var album = {
                      'img': obj_db[i].img,
                      'title': obj_db[i].title,
                      'artist': obj_db[i].artist,
                      'year': obj_db[i].year
                    }
                    var html = template__function(album);
                    //console.log(html);

                    $('.card_container').append(html);
                  }
                },
                'error': function(richiesta, stato, errori) {
                      alert(errori);
                }
            });
          }
        },
        'error': function(richiesta, stato, errori) {
              alert(errori);
        }
    });
  });

  //al click riordino array per anno
  $('button').click(function(){
    //pulisco il container
    $('.card_container').empty();
    $.ajax({
        'url': "http://localhost:80/esercizio_44_php-dischi/db_ordinato_per_anno.php",
        'metod': "GET",
        'success': function(data){
          var obj_db = JSON.parse(data);
          //console.log(obj_db);

          for (var i = 0; i < obj_db.length; i++) {

            var album = {
              'img': obj_db[i].img,
              'title': obj_db[i].title,
              'artist': obj_db[i].artist,
              'year': obj_db[i].year
            }
            var html = template__function(album);
            //console.log(html);

            $('.card_container').append(html);
          }
        },
        'error': function(richiesta, stato, errori) {
              alert(errori);
        }
    });
  });
});
