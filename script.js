function Book(title, author, pages) {
    this.title = title;
    this.author = author;
    this.pages = pages;
}

Book.prototype.information = function() {
    console.log(`Book title: ${this.title}\nAuthor: ${this.author}\nNumber of pages: ${this.pages}`)
}

let mistborn = new Book("Mistborn", "Brandon Sanderson", 365);
let theHobbit = new Book("The Hobbit", "JRR Tolkien", 264);
let theSwordOfShannara = new Book("The Sword of Shannara", "Terry Brooks", 514);
let rangersApprentice = new Book("The Rangers Apprentice", "John Flannagan", 95);

library = [mistborn, theHobbit, theSwordOfShannara, rangersApprentice]

let greenEggsAndHam = new Book("Green Eggs and Ham", "Dr. Seuss", 21)
library.push(greenEggsAndHam)

//function to search by title
function searchTitle(library, title) {
    let foundBook = library.filter(book => book.title.toLowerCase().includes(title.toLowerCase()));
    if (foundBook.length === 0) {
        console.log(`No books were found matching "${title}".`)
    }
    else {
    console.log(foundBook)
    }
}
searchTitle(library, "mistb")
searchTitle(library, "sleep")
searchTitle(library, "Shannara")

//function to search by author
function searchAuthor(library, author) {
    let foundAuthor = library.filter(book => book.author.toLowerCase().includes(author.toLowerCase()));
    if (foundAuthor.length === 0) {
        console.log(`No authors were found matching "${author}".`)
    }
    else {
    console.log(foundAuthor)
    }
}
searchAuthor(library, "J");
searchAuthor(library, "ryan");
searchAuthor(library, "sanderson")

//filter by books that have at least 100 pages.
let longBooks = library.filter(book => book.pages >= 100);
console.log(longBooks)

// map method to add "Title: " and "Author: " to the book's title and author properties respectably.
library = library.map(book => {
    return {
        ...book,
        title: `Title: ${book.title}`,
        author: `Author: ${book.author}`
    }
})
console.log(library)


//Task 2
function Account(accountNumber, balance, owner) {
    this.accountNumber = accountNumber;
    this.balance = balance;
    this.owner = owner;
}

let myAccount = new Account("123456", 1000, "Me");

//deposit function
function deposit(account, deposit) {
    if (deposit <= 0) {
        console.log(`Deposit must be greater than $0.`)
    }
    else {
        account.balance += deposit
        console.log(`Successfully deposited $${deposit}. New balance is $${myAccount.balance}`)
    }
}
deposit(myAccount, 0)
deposit(myAccount, 200)


//withdraw function
function withdraw(account, withdrawal) {
    if (withdrawal > account.balance) {
        console.log(`$${withdrawal} is more than is currently in the account.`)
    }
    else if (withdrawal <= 0) {
        console.log(`Withdrawals must be greater than $0.`)
    }
    else {
        account.balance -= withdrawal
        console.log(`Successfully withdrew $${withdrawal}. Remaining balance is $${myAccount.balance}`)
    }
}
withdraw(myAccount, 4000)
withdraw(myAccount, -400)
withdraw(myAccount, 400)

//calculate compound interest based on balance and specified interest rate
function compoundInterest(account, interest) {
    interestPercentage = interest / 100
    total = account.balance * Math.pow(1 + (interestPercentage / 12), 12 * 1);
    totalInterest = (total - account.balance).toFixed(2)
    console.log(`Compounding monthly with an interest rate of ${interest}% and your current account balance of $${myAccount.balance}, you will make $${totalInterest} in a year.`) 
}

compoundInterest(myAccount, 10)
compoundInterest(myAccount, 5)