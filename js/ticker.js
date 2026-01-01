const tickerText = document.getElementById("tickerText");
// Example dynamic names (can be replaced from Firebase/API later)
let names = ["Ramesh won TV","Suresh won iPhone","Amit got Mobile","Priya won VIP","Anil got Earbuds"];
tickerText.textContent = names.join(" • ");
