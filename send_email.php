<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
  $name = $_POST['name'];
  $email = $_POST['email'];
  $message = $_POST['message'];
  
  // Set up email headers
  $to = 'kinganurag200@gmail.com'; // Your Gmail address
  $subject = 'New Contact Form Submission';
  $headers = "From: $name <$email>" . "\r\n";
  $headers .= "Reply-To: $email" . "\r\n";
  $headers .= "MIME-Version: 1.0" . "\r\n";
  $headers .= "Content-Type: text/html; charset=UTF-8" . "\r\n";
  
  // Compose the email body
  $emailBody = "Name: $name<br>";
  $emailBody .= "Email: $email<br>";
  $emailBody .= "Message: $message<br>";
  
  // Send the email
  $mailSent = mail($to, $subject, $emailBody, $headers);
  
  if ($mailSent) {
    echo "Your message has been sent!";
  } else {
    echo "Failed to send message. Please try again.";
  }
}
?>
