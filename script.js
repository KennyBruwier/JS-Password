function checkPassword(){

    let pw = document.getElementById("Password").value;
    let msg = document.getElementById("requirements");
    
    let bHL = false;
    let bKL = false;
    let bGetal = false;
    
    for ( i = 0; i < 26; i++)
    {
        if (!bHL && (pw.match(String.fromCharCode(65+i)) != null))
        {
            bHL = true;
        }
        if (!bKL && (pw.match(String.fromCharCode(97+i)) != null))
        {
            bKL = true;
        }
    }
    for ( i=0;i<10;i++)
    {
        if (pw.match(String.fromCharCode(48+i)) != null)
        {
            bGetal = true;
            break;
        }
    }
    msg.innerHTML = "";
    
    if (!bHL)
        msg.innerHTML = "<p>Gebruik minstens 1 hoofdletter!</p>";
    if (!bKL)
        msg.innerHTML += "<p>Gebruik minstens 1 kleine letter!</p>";
    if (!bGetal)
        msg.innerHTML += "<p>Gebruik minstens 1 getal!</p>" 
}