var content = document.getElementById("content");
var author = document.getElementById("author");

var getQuotes = async () => {
    // event.preventDefault();
    try {
        var url = `https://api.quotable.io/random?minLength=100&maxLength=140`;
        var response = await fetch(`${url}`);
        var data = await response.json();
        console.log(url);
        console.log(response);

        console.log(data);
        content.innerText = data.content;
        author.innerText = data.author;
    } catch (error) {
        console.log("Error" + error);
    }
}
