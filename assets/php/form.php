<?php
if($_POST['formSubmit'] == "Sign Up") {
    $errorMessage = "";

    if(empty($_POST['formEmail'])) 
    {
        $errorMessage .= "<li>You forgot to enter a name!</li>";
    }

    $varName = $_POST['formEmail'];

    if(!empty($errorMessage)) 
    {
        echo("<p>There was an error with your form:</p>\n");
        echo("<ul>" . $errorMessage . "</ul>\n");
    } 
}
?>