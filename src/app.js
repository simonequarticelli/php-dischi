var $ = require('jquery');

$(document).ready(function(){

  $.ajax({
      'url': "http://localhost:80/esercizio_44_php-dischi/data.php",
      'metod': "GET",
      'success': function(data){
        var obj_db = JSON.parse(data);
        console.log(obj_db);

        for (var i = 0; i < obj_db.length; i++) {
          //salvo il template dentro a una variabile
          var card__template = $('.card_template').html();
          //richiamo il compile
          var template__function = Handlebars.compile(card__template);
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
