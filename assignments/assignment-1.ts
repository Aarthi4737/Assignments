//Assignment 1 - Date 09/03/2026

//  1. Temperature of a city in degrees Celsius: 25.5
let cityTemperature:number = 25.5;
console.log(cityTemperature,"\n");

// 2. Whether a customer has placed an order: true or false
let customerOrder:boolean = true;
console.log(customerOrder,"\n");

// 3. Person's phone number: "123-456-7890"
let phoneNumber:string | number = "123-456-7890";
console.log(phoneNumber,"\n");

// 4. Amount of money in a customer's bank account: 1000.50
let bankBalance:number = 1000.50;
console.log(bankBalance,"\n");

// 5. Person's email address: "john.doe@example.com"
let emailAddress:string = "john.doe@example.com";
console.log(emailAddress,"\n");

// 6. Coordinates of a location (latitude, longitude): 37.7749, -122.4194
let latitudeLocation:number = 37.7749;
let longitudeLocation:number = -122.4194;
console.log(latitudeLocation);
console.log(longitudeLocation,"\n");

let displayLocation:Map<string, number> = new Map;
displayLocation.set("latLocation",37.7749);
displayLocation.set("longLocation",-122.4194);
console.log("Displayed using Map data type")
console.log(displayLocation,"\n");

// 7. Person's marital status: true or false
let maritalStatus:boolean = false;
console.log(maritalStatus,"\n");

// 8. Person's occupation: "Software Engineer"
let personOccupation:string = "Software Engineer";
console.log(personOccupation,"\n");

// 9. Person's favourite colour: "Blue"
let favouriteColor:string = "Blue";
console.log(favouriteColor,"\n");

// 10. Current year: 2023
let currentDate = new Date();
console.log("Current Year is:", currentDate.getFullYear() - 3,"\n"); 

// 11. Number of followers on a social media platform: 1,000,000
let followerCount:number = 1000000;
console.log(followerCount,"\n");

// 12. Rating of a movie: 7.5
let moviewRating:number = 7.5;
console.log(moviewRating,"\n");

// 13. Person's blood type: 'A'
let bloodType:string = 'A';
console.log(bloodType, "\n");

// 14. Title of a book: "To Kill a Mockingbird"
let bookTitle:string = `To Kill a Mockingbird`;
console.log(bookTitle, "\n");

// 15. Number of employees in a company: 500
let empCount:number = 500;
console.log(empCount, "\n");

// 16. Time of an event: 2:30 PM
//let currentTime = new Date();
//console.log(currentTime.getHours(), "\n");

let eventTime:number | string = "2:30 PM";
console.log(eventTime, "\n")

// 17. Name of a country: "United States"
let countryName:string = "United States";
console.log(countryName, "\n");

// 18. Person's eye color: "Brown"
let eyeColor:string = "Brown";
console.log(eyeColor, "\n");

// 19. Person's birthplace: "New York City"
let birthPlace:string = 'New York City';
console.log(birthPlace, "\n");

//20. Distance between two cities: 200.5
let distanceCities:number = 200.5;
console.log(distanceCities, "\n")