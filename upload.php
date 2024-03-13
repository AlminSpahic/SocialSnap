<?php
// Handle picture upload logic here

// Check if a file was uploaded
if ($_FILES['picture']['error'] === UPLOAD_ERR_OK) {
    $targetDir = 'uploads/';
    $targetFile = $targetDir . basename($_FILES['picture']['name']);

    // Move the uploaded file to the target directory
    if (move_uploaded_file($_FILES['picture']['tmp_name'], $targetFile)) {
        echo "File uploaded successfully!";
    } else {
        echo "Error uploading file.";
    }
} else {
    echo "Upload failed.";
}
?>
