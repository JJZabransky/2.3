const reqBtn = document.getElementById("reqButton");
reqBtn.style.visibility = 'hidden';

$.ajax({
    type: "GET",
    url: "https://api.coingecko.com/api/v3/ping",
    success: function(data) {
            console.log("Server is up");
            $("#status").text("Server is up");
    }
    
});

function coiner() {
    $.get("https://api.coingecko.com/api/v3/coins/list")
}