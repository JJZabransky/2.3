const reqBtn = document.getElementById("reqButton");
const tbl = document.getElementById('table');
reqBtn.style.visibility = 'hidden';

reqBtn.addEventListener('click', Connect);

function Connect() {
    $.ajax({
        type: "GET",
        url: "https://api.coingecko.com/api/v3/ping",
        success: function(data) {
                console.log("Server is up");
                $("#status").text("Server is up");
                coiner();
        },
        error: function(error) {
            console.log("Server is down");
            $("#status").text("Server is down")
            reqBtn.style.visibility = 'visible';
        }
    });
}

Connect();


function coiner() {
    $(tbl).append('<tr><th>Name</th><th>Price</th></tr>');
    $.get("https://api.coingecko.com/api/v3/coins/list");
}