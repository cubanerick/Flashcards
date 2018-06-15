var BasicCard = require("./BasicCard.js");
var ClozeCard = require("./ClozeCard.js");

var b1 = new BasicCard("What is a collection of information that's stored on a computer called?","Database");
var b2 = new BasicCard("What is one piece of data in a record called?","Field");
var b3 = new BasicCard("A grid made up of columns and rows used to store data.", "Table");
var b4 = new BasicCard("A group of data about one person, event or thing.", "Record");
var b5 = new BasicCard("Sorting from smallest to largest.", "Ascending");
var b6 = new BasicCard("Search instruction to locate data in a database.", "Query");
var b7 = new BasicCard("To arrange information in a specific order.", "Sort");
var b8 = new BasicCard("A printable list showing selected records and fields.", "Report");
var b9 = new BasicCard("Sorting form largest to smallest.", "Descending");
var b10 = new BasicCard("A piece of information in a database.", "Data");

var basicArr = [b1, b2, b3, b4, b5, b6, b7, b8 ,b9 ,b10];

var c1 = new ClozeCard("Ulysses S. Grant appears on the front of the $50 bill", "50");
var c2 = new ClozeCard("Les Paul developed the solid-body guitar that made rock n' roll possible.", "Les Paul");
var c3 = new ClozeCard("The islands of Islay, Mull, and St. Kilda are of the coast of Scotland ", "Scotland");
var c4 = new ClozeCard("Rice is the main ingredient in the indian dish biryani", "Rice");
var c5 = new ClozeCard("The average lifespan of a major league baseball is 7 pitches.", "7");
var c6 = new ClozeCard("Dueling is legal is Paraguay as long as both parties are registered blood donors.", "Paraguay");
var c7 = new ClozeCard("In 1920, Babe Ruth out-homered every American League team.", "Babe Ruth");
var c8 = new ClozeCard("There are 336 dimples on a regulation golf ball.", "336");
var c9 = new ClozeCard("Most lipstick contains fish scales.", "fish scales");
var c10 = new ClozeCard("Lightning strikes the Earth 100 times every second.", "100");


var clozeArr = [c1, c2, c3, c4, c5, c6, c7, c8, c9, c10];

module.exports = [basicArr, clozeArr];
