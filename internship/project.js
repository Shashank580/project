document.getElementById("btn").onclick = function() {
    // Get the values of the inputs
    let firstName = document.getElementById("text1").value;
    let lastName = document.getElementById("text2").value;
    let branch = document.getElementById("text3").value;

    // Concatenate full name
    let fullName = firstName + " " + lastName;

    // Display the full name in the label with nice styling
    document.getElementById("jstext").innerHTML = "Full Name: " + fullName + "<br>Branch: " + branch;

    // Log the values to the console
    console.log("Full Name: " + fullName);
    console.log("Branch: " + branch);
   
};
