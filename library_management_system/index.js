

const myLibrary = [];

function Person(name, age, date_of_issue)
{
    this.name = name;
    this.age = age;
    this.date_of_issue = date_of_issue;
};

function Book(title, author, pages, publication)
{
    this.id = crypto.randomUUID();
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.publication = publication;
    this.read = false;
};

Book.prototype.toggleRead = function()
{
    this.read = !this.read;
};

function addBookToLibrary(title, author, pages, publication)
{
    let book = new Book(title, author, pages, publication);
    myLibrary.push(book);
}

const bookForm = document.getElementById("bookForm");
const personForm = document.getElementById("personForm");

bookForm.addEventListener("submit", function(event)
{
    event.preventDefault();

    let title = document.getElementById("title").value;
    let author = document.getElementById("author").value;
    let pages = document.getElementById("pages").value;
    let publication = document.getElementById("publication").value;

    addBookToLibrary(title, author, pages, publication);

    let book = myLibrary[myLibrary.length - 1];

    document.getElementById("displayTitle").textContent = book.title;
    document.getElementById("displayAuthor").textContent = book.author;
    document.getElementById("displayPages").textContent = book.pages;
    document.getElementById("displayPublication").textContent = book.publication;
    document.getElementById("displayRead").textContent = book.read ? "Read" : "Not Read";

    bookForm.reset();
});


document.getElementById("toggleRead").addEventListener("click", function()
{
    let book = myLibrary[myLibrary.length - 1];

    if (book)
    {
        book.toggleRead();

        document.getElementById("displayRead").textContent =
            book.read ? "Read" : "Not Read";
    }
});


document.getElementById("removeBook").addEventListener("click", function()
{
    let book = myLibrary[myLibrary.length - 1];

    if (book)
    {
        let index = myLibrary.indexOf(book);

        myLibrary.splice(index, 1);

        document.getElementById("displayTitle").textContent = "No book added yet";
        document.getElementById("displayAuthor").textContent = "-";
        document.getElementById("displayPages").textContent = "-";
        document.getElementById("displayPublication").textContent = "-";
        document.getElementById("displayRead").textContent = "Not Read";
    }
});


personForm.addEventListener("submit", function(event)
{
    event.preventDefault();

    let name = document.getElementById("name").value;
    let age = document.getElementById("age").value;
    let date_of_issue = document.getElementById("date").value;

    let person = new Person(name, age, date_of_issue);

    document.getElementById("displayName").textContent = person.name;
    document.getElementById("displayAge").textContent = person.age;
    document.getElementById("displayDate").textContent = person.date_of_issue;

    personForm.reset();
});

