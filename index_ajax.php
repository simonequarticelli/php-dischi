<!DOCTYPE html>
<html lang="en" dir="ltr">
  <head>
    <meta charset="utf-8">
    <title>php-dischi</title>
    <link rel="stylesheet" href="public/app.css">
    <!--HANDLEBARS-->
    <script src="https://cdnjs.cloudflare.com/ajax/libs/handlebars.js/4.1.2/handlebars.min.js" charset="utf-8"></script>
    <script src="public/app.js" charset="utf-8"></script>
  </head>
  <body>

    <div class="card_container">

    </div>

    <!--HANDLEBARS-->
    <script class="card_template" type ="text/x-handlebars-template">
      <div class="card">
        <img src="{{ img }}" alt="">
        <h4>{{ title }}</h4>
        <h5>{{ artist }}</h5>
        <h5>{{ year }}</h5>
      </div>
    </script>

  </body>
</html>
