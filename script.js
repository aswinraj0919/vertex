function login() {

  const userid = document.getElementById("userid").value;
  const password = document.getElementById("password").value;


  if (userid === "vimal" && password === "1234"){
    document.getElementById('alert').textContent = "Loged in successfully"
  }
  else if (userid === "" || password === ""){
    document.getElementById('alert').textContent = "Enter userid and password"
  }
  else if (userid !== "vimal" || password !== "1234"){
    document.getElementById('alert').textContent = "Invalid userid or password"
  } 
}