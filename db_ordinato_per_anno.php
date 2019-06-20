<?php

include 'data.php';

//ordino array
usort($db_dischi, function($element1, $element2) {
    // $datetime1 = strtotime($element1['year']); //<-- strtotime =
    // $datetime2 = strtotime($element2['year']);
    return $element1['year'] > $element2['year'] ? 1 : -1; //<-- if ternario
});

//converte array in json
echo json_encode($db_dischi);

?>
