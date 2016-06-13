/*global $ */
$.fn.map = function (options) {
    'use strict';
    var tileLayer = new L.TileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      'attribution': 'Map data © <a href="http://openstreetmap.org">OpenStreetMap</a> contributors'
    });

    var map = new L.Map('map', {
      'center': [54.972222, -1.608],
      'zoom': 10,
      'layers': [tileLayer]
    });

  //   var featureCollection = [{
  //     "type": "Feature",
  //     "properties": {
  //       "title": "marker1",
  //       "url": 'http://google.com',
  //       "img": 'http://placehold.it/50x50',
  //       'id': 'marker1'
  //     },
  //     "geometry": {
  //         "type": "Point",
  //         "coordinates": [-1.60899, 54.97223]
  //     }
  // },{
  //     "type": "Feature",
  //     "properties": {
  //       "title": "marker2",
  //       "url": 'http://google.com',
  //       "img": 'http://placehold.it/50x50',
  //       'id': 'marker2'
  //     },
  //     "geometry": {
  //         "type": "Point",
  //         "coordinates": [-1.61899, 54.98223]
  //     }
  // }];


  $.getJSON("/json/data.geojson", function(featureCollection) {

    var searchCtrl = L.control.fuseSearch()
    searchCtrl.addTo(map);

    var geoJsonLayer = L.geoJson(featureCollection, {
        onEachFeature: function (feature, layer) {
          var link = $('.controls a');
            $(link).click(function(){
              if( $(this).data("id") === feature.properties.id){
                layer.openPopup();
              }
          })
          feature.layer = layer;
          layer.bindPopup('<b>' + feature.properties.title + '</b><br>'
                            + '<img' + ' ' + 'src="'+feature.properties.img+'"/>' + '<br>'
                            + '<a'+' '+'href="'+feature.properties.url+'">Visit site</a>' + '<br>'
                      );
          layer.on("mouseclick", function () {
            layer.openPopup();
          });
        }
    }).addTo(map);

    searchCtrl.indexFeatures(featureCollection, ['title']);

  });

};
