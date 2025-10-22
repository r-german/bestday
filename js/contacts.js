// Яндекс-карта
function init(){
    let map = new ymaps.Map('map', {
        center: [59.91350670243079,30.316308979573368],
        zoom: 11,
        controls: ['geolocationControl', 'routeButtonControl', 'fullscreenControl']
    }, {
        geolocationControlFloat: 'right',
        routeButtonControlFloat: 'right'
    });
    map.controls.get('routeButtonControl').routePanel.state.set({
        to: "ул. 5-я Красноармейская, д. 3"
    });
    map.controls.add('zoomControl', {
        size: 'small',
        position: {
            top: '140px',
            right: '10px'
        }
    });
    let placemark = new ymaps.Placemark([59.91350670243079,30.316308979573368], {}, {
        iconLayout: 'default#image',
        iconImageHref: 'img/contacts_section2-placemark.svg',
        iconImageSize: [80, 80],
        iconImageOffset: [-40, -65]
    });
    map.geoObjects.add(placemark)
}
ymaps.ready(init);