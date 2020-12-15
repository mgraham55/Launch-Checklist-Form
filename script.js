// Write your JavaScript code here!
window.addEventListener("load", function() {
let endpointURL = "https://handlers.education.launchcode.org/static/planets.json"

fetch(endpointURL).then(function(response) {
   response.json().then(function(json) {

   let divElement = document.getElementById("missionTarget");
   let index = Math.floor(Math.random()*json.length)
   let data = json[index]
   divElement.innerHTML = 
      `<h2>Mission Destination</h2>
         <ol>
            <li>Name: ${data.name}</li>
            <li>Diameter: ${data.diameter}</li>
            <li>Star: ${data.star}</li>
            <li>Distance from Earth: ${data.distance}</li>
            <li>Number of Moons: ${data.moons}</li>
         </ol>
      <img src="${data.image}">`;
   });
});

   let list = document.getElementById("faultyItems");
   let form = document.querySelector("form");
   let fuelStatus = document.getElementById("fuelStatus");
   let cargoStatus = document.getElementById("cargoStatus");
   let pilotStatus = document.getElementById("pilotStatus");
   let copilotStatus = document.getElementById("copilotStatus");
   form.addEventListener("submit", function(event) {
      let pilotName = document.querySelector("input[name=pilotName]");
      let copilotName = document.querySelector("input[name=copilotName]");
      let fuelLevel = document.querySelector("input[name=fuelLevel]");
      let cargoMass = document.querySelector("input[name=cargoMass]")
      event.preventDefault();
      if (pilotName.value === "" || copilotName.value === "" || fuelLevel.value === "" || cargoMass.value === ""){
          alert("All Fields are required!");
      } else if (isNaN(fuelLevel.value) || isNaN(cargoMass.value)) {
         alert("Fuel Level and Cargo Mass must be a number");
      } else {
         let validStatus = true
         list.style.visibility = "visible"
         pilotStatus.innerHTML = `Pilot ${pilotName.value} is ready for launch.`
         copilotStatus.innerHTML = `Co-Pilot ${copilotName.value} is ready for launch`
         let launchStatus = document.getElementById("launchStatus");
         if (fuelLevel.value < 10000) {
            fuelStatus.innerHTML = 'Fuel level too low for launch.'
            validStatus = false
         } else {
            fuelStatus.innerHTML = 'Fuel level high enough for launch.'
         }
         if (cargoMass.value >= 10000) {
            cargoStatus.innerHTML = 'Cargo mass too heavy for launch.'
            validStatus = false
         } else {
            cargoStatus.innerHTML = 'Cargo mass low enough for launch.'
         }
         if (validStatus){
            launchStatus.innerHTML = 'Shuttle is ready for launch.'
            launchStatus.style.color = "green"
         } else {
            launchStatus.innerHTML = 'Shuttle not ready for launch.'
            launchStatus.style.color = "red"
         }
      }  

   });
});

