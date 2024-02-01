if (navigator.geolocation)
  navigator.geolocation.getCurrentPosition(
    function (position) {
      const { latitude } = position.coords;
      const { longitude } = position.coords;
      console.log(`https://www.google.pt/maps/@${latitude},${longitude}`);

      const coords = [latitude, longitude];

      const map = L.map("map").setView(coords, 13);

      L.tileLayer("https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png", {
        attribution:
          '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
      }).addTo(map);

      map.on("click", function (mapEvent) {
        console.log(mapEvent);
        const { lat, lng } = mapEvent.latlng;
        console.log(lat, lng);

        const spotIcon = L.icon({
          iconUrl: "images/spot_icon.png",
          iconSize: [40, 45],
          iconAnchor: [20, 50],
          popupAnchor: [0, -45],
        });

        L.marker({ lat, lng }, { icon: spotIcon })
          .addTo(map)
          .bindPopup(
            L.popup({
              maxWidth: 250,
              minWidth: 100,
              autoClose: false,
              closeOnClick: false,
            })
          )
          .setPopupContent("Destination 1 | Spot 1")
          .openPopup();
      });
    },
    function () {
      alert("Could not get your position");
    }
  );

addPath = document.querySelector(".plus_path");
createPath = document.querySelector(".create_path");

addPath.addEventListener("click", function () {
  // createPath.removeChild(".path_plus");
  createPath.insertAdjacentHTML(
    "beforeEnd",
    `<div class="create_path_box --1">
   <div class="create_path_details">
     <img
       src="https://img.icons8.com/external-nawicon-outline-color-nawicon/64/000000/external-camera-location-nawicon-outline-color-nawicon.png"
       class="create_path_spot_icon"
     />
     <p class="create_path_spot">Spot 1</p>
     <img
       src="https://img.icons8.com/material-outlined/24/000000/help.png"
       class="create_path_help"
     />
     <button class="create_path_droppin" type="button">Drop pin</button>
   </div>
   <input
     type="text"
     class="create_path_placeholder_spot"
     placeholder="enter your destination here"
   />
   <p class="create_path_date">15 Jan 2022 | 22:00</p>
 </div>
 <div><button class="plus_path" type="button">Add more path</button></div>`
  );
});
