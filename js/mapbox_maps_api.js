$(document).ready(function () {
    let theSpots = [
        {
            "location": [-73.98969653623872, 40.72878190448207],
            "name": "McSorley’s Old Ale House",
            "text": "Old-time bar with Irish bartenders, 2 kinds of ale (light or dark) & sawdust on the floor.",
            "title": "Pub: Established in 1854",
            "menu": "https://mcsorleysoldalehouse.nyc/product/be-good-or-be-gone-mcsorleys-t-shirt/",
            "website": "https://mcsorleysoldalehouse.nyc/",
            "img": "../photos/mcsorley-ale.jpeg"
        },
        {
            "location": [-73.98741040406428, 40.72228891057042],
            "name": "Katz's Delicatessen",
            "text": "No-frills deli with theatrically cranky service serving mile-high sandwiches since 1888.",
            "title": "Deli: Established in 1888",
            "menu": "https://localmenu.katzsdelicatessen.com/menu-and-local.html",
            "website": "https://katzsdelicatessen.com/",
            "img": "../photos/katz-deli-sandwich.jpeg"
        },
        {
            "location": [-73.99228614825239, 40.726465313975226],
            "name": "Bohemian",
            "text": "Exclusive (referral-only) East Village Japanese eatery hidden behind a butcher shop.",
            "title": "Japanese Restaurant",
            "menu": "http://www.playearth.jp/eng/contact/index.php",
            "website": "http://www.playearth.jp/eng/bohemian_ny/",
            "img": "../photos/bohemian.jpeg"
        },
    ]

    mapboxgl.accessToken = keys.mapbox;
    let map = new mapboxgl.Map({
        container: 'map',
        style: 'mapbox://styles/mapbox/streets-v9',
        zoom: 15,
        center: [-73.98940023456997, 40.72611560026318]
    });

    theSpots.forEach(item => {
        let marker = new mapboxgl.Marker()
            .setLngLat(item.location)
            .addTo(map);

        let spotPopUp = new mapboxgl.Popup()
            .setHTML(`<p>${item.name}</p>`)
        marker.setPopup(spotPopUp)

    let data = `<div class="card mb-3 p-2">
        <h5 class="card-title">${item.name}</h5>
        <p class="card-text">${item.text}</p>
        <h6 class="card-subtitle mb-2 text-muted">${item.title}</h6>
        <a href="${item.menu}" target="_blank">Menu</a>
        <a href="${item.website}" target="_blank">Website</a>
    </div>
    <div>
    <img class="img" src="${item.img}" alt="image">
</div>`
    marker.getElement().addEventListener("click", function () {
        $('#cards').empty().append(data);
    })
    });


});