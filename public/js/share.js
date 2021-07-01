async function newFormHandler(event) {
    event.preventDefault();
    let location_id = document.querySelector('#city-name').value.trim();
    const description = document.querySelector('#location-desc').value.trim();
    let total_travelers = document.querySelector('#total-traveller').value.trim();
    let budget = document.querySelector('#trip-budget').value.trim();
    const photo = document.querySelector('#cloud-pic').value.trim();
    const restaurant_rec1 = document.querySelector('#food-rec1').value.trim();
    const restaurant_rec2 = document.querySelector('#food-rec2').value.trim();
    const restaurant_rec3 = document.querySelector('#food-rec3').value.trim();
    const hotel = document.querySelector('#hotel').value.trim();
    const active_activities = document.querySelector('#active-activities').value.trim();
    const relaxing_activities = document.querySelector('#relaxing-activities').value.trim();
    const culture = document.querySelector('#culture-sight').value.trim();
    const shopping = document.querySelector('#shopping').value.trim();
    let allow_pets = document.querySelector('#allow-pets').value.trim();
    
    location_id = parseInt(location_id);
    total_travelers = parseInt(total_travelers);
    budget = parseInt(budget);
    
    // if(allow_pets === 'yes'){
    //   allow_pets = true;
    // }else{
    //   allow_pets = false;
    // }

    // Send fetch request to add a new trip
    const response = await fetch(`/api/trip`, {
      method: 'POST',
      body: JSON.stringify({
        description,
        photo,
        budget,
        total_travelers,
        restaurant_rec1,
        restaurant_rec2,
        restaurant_rec3,
        hotel,
        culture,
        active_activities,
        relaxing_activities,
        shopping,
        allow_pets,
        location_id,
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
