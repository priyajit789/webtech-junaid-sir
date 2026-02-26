function printData() {

    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;
    let age = document.getElementById("age").value;
    let dob = document.getElementById("dob").value;
    let country = document.getElementById("country").value;
    let address = document.getElementById("address").value;

 
    let gender = "";
    let genders = document.getElementsByName("gender");
    for (let g of genders) {
        if (g.checked) {
            gender = g.value;
        }
    }

    let hobbies = [];
    let hobbyList = document.getElementsByName("hobby");
    for (let h of hobbyList) {
        if (h.checked) {
            hobbies.push(h.value);
        }
    }


    let file = document.getElementById("file").files[0];
    let fileName = file ? file.name : "No file selected";

   
    document.getElementById("output").innerHTML = `
        <h3>Submitted Data:</h3>
        Name: ${name} <br>
        Email: ${email} <br>
        Password: ${password} <br>
        Age: ${age} <br>
        DOB: ${dob} <br>
        Gender: ${gender} <br>
        Hobbies: ${hobbies.join(", ")} <br>
        Country: ${country} <br>
        Address: ${address} <br>
        File: ${fileName}`;
}