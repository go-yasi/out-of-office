async function newFormHandler(event) {
    event.preventDefault();
    const location_id = document.querySelector('#city-name').value.trim();
    const desription = document.querySelector('#location-desc').value.trim();
    const total_travelers = document.querySelector('#total-traveller').value.trim();
    const budget = document.querySelector('#trip-budget').value.trim();
    const cloudPic = document.querySelector('#cloud-pic').value.trim();
    const restaurant_rec1 = document.querySelector('#food-rec1').value.trim();
    const restaurant_rec2 = document.querySelector('#food-rec2').value.trim();
    const restaurant_rec3 = document.querySelector('#food-rec3').value.trim();
    const hotel = document.querySelector('#hotel').value.trim();
    const active_activities = document.querySelector('#active-activites').value.trim();
    const relaxing_activities = document.querySelector('#relaxing-activites').value.trim();
    const culture = document.querySelector('#culture-sight').value.trim();
    const shopping = document.querySelector('#shopping').value.trim();
    const allow_pets = document.querySelector('#allow-pets').value.trim();
    
    // Send fetch request to add a new trip
    const response = await fetch(`/api/trip`, {
      method: 'POST',
      body: JSON.stringify({
        location_id,
        desription,
        budget,
        total_travelers,
        cloudPic,
        restaurant_rec1,
        restaurant_rec2,
        restaurant_rec3,
        hotel,
        active_activities,
        relaxing_activities,
        culture,
        shopping,
        allow_pets,
      }),
      headers: {
        'Content-Type': 'application/json',
      },
    });
    if (response.ok) {
      document.location.replace('/location');
    } else {
      alert('Failed to add trip');
    }
}



document.querySelector('.trip-form').addEventListener('submit', newFormHandler);



