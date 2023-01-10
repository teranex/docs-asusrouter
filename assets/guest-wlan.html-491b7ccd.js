import{_ as o,M as s,p as n,q as r,R as e,t as i,N as d,V as t,a1 as a}from"./framework-3547d075.js";const h={},c=a('<h1 id="guest-wlan" tabindex="-1"><a class="header-anchor" href="#guest-wlan" aria-hidden="true">#</a> Guest WLAN</h1><h2 id="limitations" tabindex="-1"><a class="header-anchor" href="#limitations" aria-hidden="true">#</a> Limitations</h2><table><tr><td><table><thead><tr><th>Firmware</th><th>Versions</th></tr></thead><tbody><tr><td>Stock</td><td><code>&gt;= 3.0.0.4.386.x</code></td></tr><tr><td>Merlin</td><td><code>&gt;= 3.0.0.4.386.x</code></td></tr></tbody></table></td><td><table><thead><tr><th>Device mode</th><th>Available</th></tr></thead><tbody><tr><td>Router</td><td>💚</td></tr><tr><td>AiMesh Node</td><td>❤️</td></tr></tbody></table></td></tr></table><h2 id="binary-sensor-switch" tabindex="-1"><a class="header-anchor" href="#binary-sensor-switch" aria-hidden="true">#</a> Binary sensor / switch</h2>',4),p={class:"custom-container tip"},u=e("p",{class:"custom-container-title"},"Available entities",-1),b=e("code",null,"device control",-1),_=e("ul",null,[e("li",null,[e("code",null,"false"),i(": "),e("code",null,"binary_sensor"),i(" entities are created")]),e("li",null,[e("code",null,"true"),i(": "),e("code",null,"switch"),i(" entities are created")])],-1),f=e("h3",{id:"device-guest-type-x",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#device-guest-type-x","aria-hidden":"true"},"#"),i(),e("code",null,"{device}_guest_{type}_{x}")],-1),m=e("p",null,[e("code",null,"AsusRouter >= 0.11.0")],-1),w=e("li",null,[e("p",null,[i("Default entity state: "),e("code",null,"Enabled")])],-1),y=a('<p>Details:</p><p>The current state of the guest wireless network <code>{type}</code>, where <code>{type}</code> is [<code>2_4_ghz</code>, <code>5_ghz</code>, <code>5_ghz_2</code>, <code>6_ghz</code>] number <code>{x}</code>. Most of devices have 3 guest networks of each type.</p><h4 id="attributes" tabindex="-1"><a class="header-anchor" href="#attributes" aria-hidden="true">#</a> Attributes</h4>',3),x=a('<li><h4 id="api-id" tabindex="-1"><a class="header-anchor" href="#api-id" aria-hidden="true">#</a> api_id</h4><ul><li>Type: service attribute</li></ul></li><li><h4 id="api-type" tabindex="-1"><a class="header-anchor" href="#api-type" aria-hidden="true">#</a> api_type</h4><ul><li>Type: service attribute</li></ul></li><li><h4 id="aimesh-sync" tabindex="-1"><a class="header-anchor" href="#aimesh-sync" aria-hidden="true">#</a> aimesh_sync</h4><ul><li><p>Type: <code>boolean</code></p></li><li><p>Details:</p><p>Whether guest network is broadcasted from each AiMesh node.</p></li></ul></li><li><h5 id="auth-method" tabindex="-1"><a class="header-anchor" href="#auth-method" aria-hidden="true">#</a> auth_method</h5><ul><li>Type: <code>string</code></li></ul></li><li><h5 id="bw-limit" tabindex="-1"><a class="header-anchor" href="#bw-limit" aria-hidden="true">#</a> bw_limit</h5><ul><li><p>Type: <code>boolean</code></p></li><li><p>Details:</p><p>Whether bandwidth limit is enabled.</p></li></ul></li><li><h5 id="bw-limit-download" tabindex="-1"><a class="header-anchor" href="#bw-limit-download" aria-hidden="true">#</a> bw_limit_download</h5><ul><li><p>Type: <code>integer</code></p></li><li><p>Units: <code>kbit/s</code></p></li><li><p>Details:</p><p>Download bandwidth limit. <code>0</code> - unlimited.</p></li></ul></li><li><h5 id="bw-limit-upload" tabindex="-1"><a class="header-anchor" href="#bw-limit-upload" aria-hidden="true">#</a> bw_limit_upload</h5><ul><li><p>Type: <code>integer</code></p></li><li><p>Units: <code>kbit/s</code></p></li><li><p>Details:</p><p>Upload bandwidth limit. <code>0</code> - unlimited.</p></li></ul></li><li><h5 id="expire" tabindex="-1"><a class="header-anchor" href="#expire" aria-hidden="true">#</a> expire</h5><ul><li><p>Type: <code>integer</code></p></li><li><p>Units: <code>s</code></p></li><li><p>Details:</p><p>Enable guest network for a limited amount of time. <code>0</code> indicates feature being off.</p></li></ul></li><li><h5 id="expire-in" tabindex="-1"><a class="header-anchor" href="#expire-in" aria-hidden="true">#</a> expire_in</h5><ul><li><p>Type: <code>integer</code></p></li><li><p>Units: <code>s</code></p></li><li><p>Details:</p><p>When the network will be disabled (if <code>expire</code> is set).</p></li></ul></li><li><h5 id="hidden" tabindex="-1"><a class="header-anchor" href="#hidden" aria-hidden="true">#</a> hidden</h5><ul><li>Type: <code>boolean</code></li></ul></li><li><h5 id="lan-access" tabindex="-1"><a class="header-anchor" href="#lan-access" aria-hidden="true">#</a> lan_access</h5><ul><li>Type: <code>boolean</code></li></ul></li><li><h5 id="maclist" tabindex="-1"><a class="header-anchor" href="#maclist" aria-hidden="true">#</a> maclist</h5><ul><li>Type: <code>string</code></li></ul></li><li><h5 id="macmode" tabindex="-1"><a class="header-anchor" href="#macmode" aria-hidden="true">#</a> macmode</h5><ul><li><p>Type: <code>string</code></p></li><li><p>Possible values:</p><ul><li><code>allow</code> - allow access only for devices in maclist</li><li><code>deny</code> - deny access for devices in maclist</li><li><code>disabled</code> - disable mac filter</li></ul></li><li><p>Details:</p><p>State of the MAC filter</p></li></ul></li>',13),g=e("h5",{id:"password",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#password","aria-hidden":"true"},"#"),i(" password")],-1),T=e("li",null,[e("p",null,[i("Type: "),e("code",null,"string")])],-1),D=e("p",null,"Details:",-1),v=e("code",null,"hide passwords",-1),k=e("code",null,"false",-1),A=a('<li><h5 id="ssid" tabindex="-1"><a class="header-anchor" href="#ssid" aria-hidden="true">#</a> ssid</h5><ul><li>Type: <code>string</code></li></ul></li><li><h5 id="wpa-encryption" tabindex="-1"><a class="header-anchor" href="#wpa-encryption" aria-hidden="true">#</a> wpa_encryption</h5><ul><li>Type: <code>string</code></li></ul></li>',2),W=a('<h2 id="service" tabindex="-1"><a class="header-anchor" href="#service" aria-hidden="true">#</a> Service</h2><h3 id="adjust-wlan" tabindex="-1"><a class="header-anchor" href="#adjust-wlan" aria-hidden="true">#</a> <code>adjust_wlan</code></h3><p><code>AsusRouter &gt;= 0.11.0</code></p><ul><li><p>Details:</p><p>Allows changing guest WLAN settings.</p><h4 id="attributes-1" tabindex="-1"><a class="header-anchor" href="#attributes-1" aria-hidden="true">#</a> Attributes</h4><ul><li><h4 id="entity-id" tabindex="-1"><a class="header-anchor" href="#entity-id" aria-hidden="true">#</a> entity_id</h4><ul><li><p>Type: <code>string</code></p></li><li><p>Details:</p><p><code>entity_id</code> of the guest WLAN.</p></li></ul></li><li><h5 id="bw-enabled" tabindex="-1"><a class="header-anchor" href="#bw-enabled" aria-hidden="true">#</a> bw_enabled</h5><ul><li><p>Type: <code>boolean</code></p></li><li><p>Details:</p><p>Whether bandwidth limit is enabled.</p></li></ul></li><li><h5 id="bw-dl" tabindex="-1"><a class="header-anchor" href="#bw-dl" aria-hidden="true">#</a> bw_dl</h5><ul><li><p>Type: <code>integer</code></p></li><li><p>Units: <code>kbit/s</code></p></li><li><p>Details:</p><p>Download bandwidth limit. <code>0</code> - unlimited.</p></li></ul></li><li><h5 id="bw-ul" tabindex="-1"><a class="header-anchor" href="#bw-ul" aria-hidden="true">#</a> bw_ul</h5><ul><li><p>Type: <code>integer</code></p></li><li><p>Units: <code>kbit/s</code></p></li><li><p>Details:</p><p>Upload bandwidth limit. <code>0</code> - unlimited.</p></li></ul></li><li><h4 id="closed" tabindex="-1"><a class="header-anchor" href="#closed" aria-hidden="true">#</a> closed</h4><ul><li><p>Type: <code>boolean</code></p></li><li><p>Details:</p><p>Whether SSID should be hidden.</p></li></ul></li><li><h5 id="expire-1" tabindex="-1"><a class="header-anchor" href="#expire-1" aria-hidden="true">#</a> expire</h5><ul><li><p>Type: <code>integer</code></p></li><li><p>Units: <code>s</code></p></li><li><p>Details:</p><p>Enable guest network for a limited amount of time. <code>0</code> indicates feature being off.</p></li></ul></li><li><h5 id="lan-access-1" tabindex="-1"><a class="header-anchor" href="#lan-access-1" aria-hidden="true">#</a> lan_access</h5><ul><li>Type: <code>boolean</code></li></ul></li><li><h4 id="password-1" tabindex="-1"><a class="header-anchor" href="#password-1" aria-hidden="true">#</a> password</h4><ul><li>Type: <code>string</code></li></ul></li><li><h4 id="ssid-1" tabindex="-1"><a class="header-anchor" href="#ssid-1" aria-hidden="true">#</a> ssid</h4><ul><li>Type: <code>string</code></li></ul></li><li><h4 id="state" tabindex="-1"><a class="header-anchor" href="#state" aria-hidden="true">#</a> state</h4><ul><li><p>Type: <code>boolean</code></p></li><li><p>Details:</p><p>Whether WLAN should be on.</p></li></ul></li><li><h4 id="sync-node" tabindex="-1"><a class="header-anchor" href="#sync-node" aria-hidden="true">#</a> sync_node</h4><ul><li><p>Type: <code>boolean</code></p></li><li><p>Details:</p><p>Whether guest network is broadcasted from each AiMesh node.</p></li></ul></li></ul></li></ul>',4);function N(R,U){const l=s("RouterLink");return n(),r("div",null,[c,e("div",p,[u,e("p",null,[i("Entities are created based on the "),b,i(" option of AsusRouter. Refer to the "),d(l,{to:"/guide/configuration/operation-mode.html"},{default:t(()=>[i("Operation mode")]),_:1}),i(" section for more info on how to change this option.")]),_]),f,m,e("ul",null,[w,e("li",null,[y,e("ul",null,[x,e("li",null,[g,e("ul",null,[T,e("li",null,[D,e("p",null,[i("This attribute is only available if the "),v,i(" option is set to "),k,i(". Refer to the "),d(l,{to:"/guide/configuration/security.html"},{default:t(()=>[i("Security")]),_:1}),i(" section for more info on how to change this option.")])])])]),A])])]),W])}const M=o(h,[["render",N],["__file","guest-wlan.html.vue"]]);export{M as default};
