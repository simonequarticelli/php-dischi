<?php

$db_dischi = [
  [
    'img' => 'https://images-na.ssl-images-amazon.com/images/I/51WbS13Mx9L._SX372_BO1,204,203,200_.jpg',
    'title' => 'californication',
    'artist' => 'red hot chili peppers',
    'year' => '1999'
  ],
  [
    'img' => 'https://images-na.ssl-images-amazon.com/images/I/91fvJYumwrL._SY355_.jpg',
    'title' => 'The Number of the Beast',
    'artist' => 'Iron Maiden',
    'year' => '1982'
  ],
  [
    'img' => 'https://images-na.ssl-images-amazon.com/images/I/71jZ74DGxCL._SY355_.jpg',
    'title' => 'Shadows',
    'artist' => 'Shawn James',
    'year' => '2012'
  ],
  [
    'img' => 'https://images-na.ssl-images-amazon.com/images/I/81aTawcGdmL._SX466_.jpg',
    'title' => 'The Dark Side of the Moon',
    'artist' => 'Pink Floyd',
    'year' => '1973'
  ],
  [
    'img' => 'https://images-na.ssl-images-amazon.com/images/I/71DQrKpImPL._SL1400_.jpg',
    'title' => 'Nevermind',
    'artist' => 'Nirvana',
    'year' => '1991'
  ],
  [
    'img' => 'https://images-na.ssl-images-amazon.com/images/I/515tq2nA0RL._SX466_.jpg',
    'title' => 'Kill \'Em All',
    'artist' => 'Metallica',
    'year' => '1983'
  ],
  [
    'img' => 'https://images-na.ssl-images-amazon.com/images/I/71mKCivU38L._SL1200_.jpg',
    'title' => 'Led Zeppelin II',
    'artist' => 'Led Zeppelin',
    'year' => '1969'
  ],
  [
    'img' => 'https://img.discogs.com/7fZaeEGs2C3Wya2_FjboCVGLQWQ=/fit-in/600x597/filters:strip_icc():format(jpeg):mode_rgb():quality(90)/discogs-images/R-367664-1408907054-7204.jpeg.jpg',
    'title' => 'Ten',
    'artist' => 'Pearl Jam',
    'year' => '1991'
  ],
  [
    'img' => 'https://images-na.ssl-images-amazon.com/images/I/51521bZstDL._SX355_.jpg',
    'title' => 'Live at Benaroya Hall',
    'artist' => 'Pearl Jam',
    'year' => '2004'
  ],
  [
    'img' => 'https://images-na.ssl-images-amazon.com/images/I/41XKYBMGDHL.jpg',
    'title' => 'Conspiracy of One',
    'artist' => 'The Offspring',
    'year' => '2000'
  ],
];
// echo '<pre>';
// var_dump($db_dischi);
// echo '</pre>';

// converte array in json
echo json_encode($db_dischi);

?>
