async function newFormHandler(event) {
    event.preventDefault();
    const locationName = document.querySelector('#location-name').value.trim();
    const locationDesc = document.querySelector('#location-desc').value.trim();
    const totalTraveller = document.querySelector('#total-traveller').value.trim();
    const tripBudget = document.querySelector('#trip-budget').value.trim();
    const cloudPic = document.querySelector('#cloud-pic').value.trim();
    const foodRec1 = document.querySelector('#food-rec1').value.trim();
    const foodRec2 = document.querySelector('#food-rec2').value.trim();
    const foodRec3 = document.querySelector('#food-rec3').value.trim();
    const hotel = document.querySelector('#hotel').value.trim();
    const activities = document.querySelector('#activites').value.trim();
    const cultureSight = document.querySelector('#culture-sight').value.trim();
    
    // Send fetch request to add a new trip
    const response = await fetch(`/api/trip`, {
      method: 'POST',
      body: JSON.stringify({
        locationName,
        locationDesc,
        totalTraveller,
        tripBudget,
        cloudPic,
        foodRec1,
        foodRec2,
        foodRec3,
        hotel,
        activities,
        cultureSight,
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