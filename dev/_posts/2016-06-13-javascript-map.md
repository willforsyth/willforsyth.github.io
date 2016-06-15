---
layout: post
title: Interactive map
comments: false
published: true
category: javascript
description: |
  This is a test post of a post thats really nice and wonderful
---

We had an interesting pitch come in at work that I looked into a couple of techniques. It was to build an interactive map similar to [airBnBs](https://www.airbnb.co.uk/things-to-do/new-york) approach.
The plan was to use [geojson](http://geojson.org/) for the info such as location and features of the property. Then using leaflet I would plot the locations and pulling in the data from the json also add pictures and some information. There is also a addon for [http://leafletjs.com/](leaflet) called fuse which allows you to search the json.

Here is the working prototype. Styles are not existent but I produced it for proof of concept.

<div class="controls">
  <a id="marker1" href="#" data-id="marker1">Marker 1</a>
  <a id="marker2" href="#" data-id="marker2">Marker 2</a>
</div>
<div id="map"></div>

{% highlight javascript %}
  var tileLayer = new L.TileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    'attribution': 'Map data © <a href="http://openstreetmap.org">OpenStreetMap</a> contributors'
  });

  var map = new L.Map('map', {
    'center': [54.972222, -1.608],
    'zoom': 10,
    'layers': [tileLayer]
  });
{% endhighlight %}
{% highlight javascript %}
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
{% endhighlight %}
I will comment the code and give some guidelines on my approach if anyone is interested.

###Source code
[github repo](https://github.com/willforsyth/maps)
