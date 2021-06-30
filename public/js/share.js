async function newFormHandler(event) {
    event.preventDefault();
    const cityName = document.querySelector('#city-name').value.trim();
    const locationDesc = document.querySelector('#location-desc').value.trim();
    const totalTraveller = document.querySelector('#total-traveller').value.trim();
    const tripBudget = document.querySelector('#trip-budget').value.trim();
    const cloudPic = document.querySelector('#cloud-pic').value.trim();
    const foodRec1 = document.querySelector('#food-rec1').value.trim();
    const foodRec2 = document.querySelector('#food-rec2').value.trim();
    const foodRec3 = document.querySelector('#food-rec3').value.trim();
    const hotel = document.querySelector('#hotel').value.trim();
    const activeActivities = document.querySelector('#active-activites').value.trim();
    const relaxingActivities = document.querySelector('#relaxing-activites').value.trim();
    const cultureSight = document.querySelector('#culture-sight').value.trim();
    const shopping = document.querySelector('#shopping').value.trim();
    const allowPets = document.querySelector('#allow-pets').value.trim();
    
    // Send fetch request to add a new trip
    const response = await fetch(`/api/trip`, {
      method: 'POST',
      body: JSON.stringify({
        cityName,
        locationDesc,
        totalTraveller,
        tripBudget,
        cloudPic,
        foodRec1,
        foodRec2,
        foodRec3,
        hotel,
        activeActivities,
        relaxingActivities,
        cultureSight,
        shopping,
        allowPets,
      }),
      headers: {
        'Content-Type': 'application/json',
      },
    });
    if (response.ok) {
      document.location.replace('/');
    } else {
      alert('Failed to add trip');
    }
}
  
  document.querySelector('.trip-form').addEventListener('submit', newFormHandler);

  // make a function to either add to existing location in location table
  // or if destination city = false then create a location