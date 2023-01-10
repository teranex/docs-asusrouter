import{_ as e,p as t,q as d,a1 as o}from"./framework-3547d075.js";const i={},c=o('<h1 id="network-interfaces" tabindex="-1"><a class="header-anchor" href="#network-interfaces" aria-hidden="true">#</a> Network interfaces</h1><p><em>Available during initial setup of the integration as well as via <code>Configure</code> option</em></p><h2 id="options" tabindex="-1"><a class="header-anchor" href="#options" aria-hidden="true">#</a> Options</h2><table><thead><tr><th>Option</th><th>Type</th><th>Default</th><th>Description</th></tr></thead><tbody><tr><td>Interfaces</td><td><code>list(string)</code></td><td><code>[]</code></td><td>List of interfaces to monitor.<br><br><code>WAN</code>, <code>Wired</code>, <code>Bridge</code>, <code>2.4 GHz</code>, <code>5 GHz</code>, <code>5 GHz-2</code>, <code>6 GHz</code>, <code>USB</code></td></tr><tr><td>Units for speed</td><td><code>string</code></td><td><code>Mbit/s</code></td><td>Units for all the speed sensonrs<br><br><code>bit/s</code>, <code>kbit/s</code>, <code>Mbit/s</code>, <code>Gbit/s</code>, <code>B/s</code>, <code>kB/s</code>, <code>MB/s</code>, <code>GB/s</code></td></tr><tr><td>Units for traffic</td><td><code>string</code></td><td><code>GB</code></td><td>Units for all the traffic sensors.<br><br><code>bit</code>, <code>kbit</code>, <code>Mbit</code>, <code>Gbit</code>, <code>B</code>, <code>kB</code>, <code>MB</code>, <code>GB</code></td></tr></tbody></table><h2 id="interfaces" tabindex="-1"><a class="header-anchor" href="#interfaces" aria-hidden="true">#</a> Interfaces</h2><p>The list of available interfaces depends on the device model. In general, all the devices have:</p><ul><li><code>WAN</code> - interface between the router and ISP.</li><li><code>WIRED</code> - all the wired connections via LAN ports.</li><li><code>BRIDGE</code> - traffic routed between different interfaces.</li></ul><p>Wireless interfaces include (depending on device capabilities):</p><ul><li><code>2.4 GHz</code> - WiFi 2.4 GHz.</li><li><code>5 GHz</code> - WiFi 5 GHz.</li><li><code>5 GHz-2</code> - WiFi 5 GHz-2.</li><li><code>6 GHz</code> - WiFi 6 GHz.</li></ul><p>Other interfaces:</p><ul><li><code>USB</code> - interface between router and connected mobile phone / USB modem.</li></ul><h2 id="units-of-measurement" tabindex="-1"><a class="header-anchor" href="#units-of-measurement" aria-hidden="true">#</a> Units of measurement</h2><p>All the derivatives for units of measurement are calculated in the same way as Asus firmware is doing it. This means, that:</p><ul><li><code>1 kB = 1 024 B</code></li><li><code>1 MB = 1 024 kB = 1 048 576 B</code></li><li><code>1 GB = 1 024 MB = 1 048 576 kB = 1 073 741 824 B</code></li></ul><p>This ensures that user experience when using AsusRouter is exactly the same as when using native Web UI.</p><div class="custom-container warning"><p class="custom-container-title">Warning (HA Statistics)</p><p>If you change units of measurement when the values were already saved to HA statistics, it will complane about unit change. To fix this, you would need to remove the old data in <code>Developer Tools - Statistics</code></p></div>',16),a=[c];function s(n,r){return t(),d("div",null,a)}const h=e(i,[["render",s],["__file","network-interfaces.html.vue"]]);export{h as default};
