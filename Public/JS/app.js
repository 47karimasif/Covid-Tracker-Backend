mapboxgl.accessToken = 'pk.eyJ1IjoiYWRhcnNoYWdyd2FsIiwiYSI6ImNrN3BuN2FoNTA4bGEzaXFkcjJvYXQ0ZnAifQ.IaCVUsnZqH77-agcveZKEw';
var map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/dark-v10',
    zoom:1,
    center:[28.7041,77.1025]
});
map.addControl(new mapboxgl.NavigationControl());