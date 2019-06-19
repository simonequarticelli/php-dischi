var $ = require('jquery');

$(document).ready(function(){

  //salvo il template dentro a una variabile
  var card__template = $('.card_template').html();
  //richiamo il compile
  var template__function = Handlebars.compile(card__template);

  $.ajax({
      'url': "http://localhost:80/esercizio_44_php-dischi/data.php",
      'metod': "GET",
      'success': function(data){
        var obj_db = JSON.parse(data);
        console.log(obj_db);

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



  //RICERCA ALBUM
  $('#search').keyup(function(){

    var album_ricercato = $(this).val().toLowerCase();
    var artista_ricercato = $(this).val().toLowerCase();
    var anno_ricercato = $(this).val();
    //console.log(artista_ricercato);

    $('.card').each(function() {

      var album = $(this).find('h4').text().toLowerCase();
      var artista = $(this).find('h5').text().toLowerCase();
      var anno = $(this).find('small').text();

      if (album.includes(album_ricercato) || artista.includes(artista_ricercato) || anno.includes(anno_ricercato)) {
        $(this).show();
      }else{
        $(this).hide();
      }

    });
  });



});
