import mapboxgl from "mapbox-gl";

export default async function getMapbox(){
        mapboxgl.accessToken = await process.env.NEXT_PUBLIC_MAPBOX_API;
        const map = new mapboxgl.Map({
            container: 'map',
            style: process.env.NEXT_PUBLIC_MAPBOX_STYLE, // stylesheet location
            center: [-73.97, 40.79], // starting position [lng, lat]
            zoom: 13 // starting zoom
        });
        var marker = new mapboxgl.Marker()
                            .setLngLat([-73.97, 40.79])
                            .addTo(map);
        
}