// Constructor //
function Book(title, author, year) {
     this.title = title;
     this.author = author;
     this.year = year;
}

Book.prototype.summary = function(){
     return `${this.title} was written by ${this.author} in ${this.year}`;
}

//Magazine constuctor

function Magazine(title,author,year,month){
     Book.call(this,title,author,year);
     this.month = month;
}

Magazine.prototype.constuctor = Object.create(Book.prototype);

const mag1 = new Magazine('Hamlet', 'William Shakespear', '1540', 'march');

Magazine.prototype.constuctor = Magazine;

console.log(mag1);