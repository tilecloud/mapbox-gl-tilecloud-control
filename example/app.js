import ForkMe from '@tilecloud/mbgl-fork-me-control'
import TileCloudControl from '../src/'

const map = new mapboxgl.Map({
  container: 'map',
  style: 'https://tilecloud.github.io/tiny-tileserver/style.json',
  attributionControl: true,
  hash: true,
  localIdeographFontFamily: ['sans-serif']
});

map.addControl(new mapboxgl.NavigationControl());
map.addControl(new mapboxgl.GeolocateControl());
map.addControl(new ForkMe({
  url: 'https://github.com/tilecloud/mbgl-tilecloud-control'
}));

map.addControl(new TileCloudControl());
