import * as path from "path";
import { default as map } from "./map.json" assert { type: "json" };

import { generatePage, getImage } from "./tools";
import { deviceBaseDir } from "./const";

export function getDeviceFilePath(model: any, tested: boolean) {
    return path.resolve(deviceBaseDir, `${ model }.md`)
}

const defaultInterfaces = ["WAN", "USB", "WIRED", "BRIDGE"];
const codeInterfaces = {
    "2ghz": "WLAN0",
    "5ghz": "WLAN1",
    "5ghz2": "WLAN2",
    "6ghz": "WLAN3",
}
const labelInterfaces = {
    "2ghz": "2.4 GHz",
    "5ghz": "5 GHz",
    "5ghz2": "5 GHz-2",
    "6ghz": "6 GHz",
}

const labelCPU = {
    1: "single-core",
    2: "dual-core",
    3: "tri-core",
    4: "quad-core",
}

const labelDeviceType = {
    "wifi7": "WiFi 7 | 802.11be",
    "wifi6e": "WiFi 6e | 802.11axe",
    "wifi6": "WiFi 6 | 802.11ax",
    "wifi5": "WiFi 5 | 802.11ac",
    "wifi4": "WiFi 4 | 802.11n",
    "other": "Other devices",
}

export function getModelNorm(model: string) {
    return model.replace(/\s/g, "");
}

function genFWversion(version: string) {
    return "<li>`" + version + "`</li>"
}

function genFWversions(versions: any[]) {
    let result = ""
    versions.forEach(function(version) {
        result += genFWversion(version)
    })
    if (result === "") return "<li>` `</li>"
    return result
}

function genFeatureSupport(feature: any) {
    let level = feature.level;
    let comment = feature.comment === undefined ? "" : feature.comment;
    switch (level) {
        case 0:
            return ":heart: Not supported";
        case 1:
            return ":yellow_heart: " + comment;
        default:
            return ":green_heart: Full";
    }
}

function genFeatureExport(features: any, feature: string, fw: any) {
    const key = feature as keyof typeof features;
    switch (feature) {
        case "cpu":
            let cpu = "`sensor.{device}_cpu` attributes:<br /><li>`core_";
            cpu += features[key].cores === 1 ? "1" : "{x}`, `x=[1," + features[key].cores + "]";
            cpu += "`</li>";
            return cpu;
        case "network":
            let interfaces = "interfaces:"
            for (const interf in defaultInterfaces) interfaces += "<li>`" + defaultInterfaces[interf] + "`</li>";
            for (const interf in features.wlan) interfaces += "<li>`" + codeInterfaces[interf as keyof object] + "` (" + labelInterfaces[interf as keyof object] + ")" + (interf === "6ghz" ? "[^6ghz]" : "") + "</li>";
            return interfaces;
        case "ports":
            let ports = "";
            let types = ["lan", "wan"];
            types.forEach(function(type) {
                ports += "`" + type + "_speed` attributes:";
                for (const port in features[key][type]) {
                    if (features[key][type][port].id instanceof Array){
                        ports += "<li>`" + type + "_{x}`, `x=[" + features[key][type][port].id[0] + "," + features[key][type][port].id[1] + "]`</li><li>up to `" + features[key][type][port].speed + " Mb/s`</li>";
                    }
                    else ports += "<li>`" + type + "_" + features[key][type][port].id + "`</li><li>up to `" + features[key][type][port].speed + " Mb/s`"
                        + (features[key][type][port].speed === 2500 ? "[^2gb]" : "")
                        + (features[key][type][port].speed === 10000 ? "[^2gb][^10gb]" : "")
                        + "</li>";
                }
            });
            return ports;
        case "temperature":
            let temperature = "";
            temperature += (fw[386] === true || fw[388] === true) ? "Stock:<li>`CPU`</li>Merlin:<li>`CPU`</li>" : "Merlin:";
            for (const interf in features.wlan) temperature += "<li>`" + labelInterfaces[interf as keyof object] + "`</li>";
            return temperature;
        case "wlan":
            let wlan = "types:";
            for (const interf in features.wlan) wlan += "<li>`" + labelInterfaces[interf as keyof object] + "`</li>";
            return wlan;
        default:
            return "`default`";
    }
}

function genFeatureSpecs(features: any, feature: string) {
    const key = feature as keyof typeof features;
    switch (feature) {
        case "cpu":
            let cpu = "";
            if (features[key].frequency !== undefined) cpu += features[key].frequency + " ";
            cpu += labelCPU[features[key].cores as keyof object] + " processor";
            if (features[key].model != undefined) cpu += "<li>`" + features[key].model + "`</li>";
            return cpu;
        case "guest-wlan":
            let guest_wlan = "";
            for (const interf in features.wlan) guest_wlan += "<li>3x `" + labelInterfaces[interf as keyof object] + "`</li>";
            return guest_wlan;
        case "ports":
            let ports = "";
            if (features[key].lan_aggr === true) ports += "<li>LAN aggregation</li>";
            if (features[key].wan_aggr === true) ports += "<li>WAN aggregation</li>";
            return ports;
        case "ram":
            return features[key].capacity + " " + features[key].units;
        case "wan":
            let wan = "";
            if (features[key].dual_wan === true) wan += "<li>Dual WAN</li>";
            return wan;
        case "wlan":
            let wlan = "speed:";
            for (const interf in features.wlan) wlan += "<li>`<= " + features.wlan[interf].speed + " Mb/s (" + labelInterfaces[interf as keyof object] + ")`</li>";
            return wlan;
        default:
            return "";
    }
}

function genFeature(features: any, feature: string, fw: any) {
    const key = feature as keyof typeof map;
    let support = genFeatureSupport(features[key])
    if (fw["386"] !== true && fw["388"] !== true){
        if (key === "led") support = ":heart: Not supported";
        if (key === "temperature") support = ":yellow_heart: Merlin-only";
    }
    if (feature === "load-average") support = ":yellow_heart: Merlin-only";
    return {
        "title": `[${ map[key].title }](${ map[key].link })`,
        "support": support,
        "expose": genFeatureExport(features, feature, fw),
        "specs": genFeatureSpecs(features, feature),
    }
}

function genFeatureNotes(features: any) {
    let notes = "";
    let types = ["lan", "wan"]
    let ready = {
        "2gb": false,
        "10gb": false
    }
    types.forEach(function(type) {
        for (const port in features.ports[type]) {
            if (features.ports[type][port].speed === 10000) {
                if (ready["2gb"] === false) {
                    notes += "[^2gb]: There are no reports yet on usage of 2.5 Gb/s speeds on WAN. Errors might occur. [Details](/guide/faq/#_2-5-gb-s-ports)\n";
                    ready["2gb"] = true;
                }
                if (ready["10gb"] === false) {
                    notes += "[^10gb]: 10 Gb/s speeds are not yet supported by AsusRouter on either LAN or WAN. Errors might occur. [Details](/guide/faq/#_10-gb-s-ports)\n";
                    ready["10gb"] = true;
                }
                break;
            }
            else if (features.ports[type][port].speed === 2500) {
                if (ready["2gb"] === false) {
                    notes += "[^2gb]: There are no reports yet on usage of 2.5 Gb/s speeds on WAN. Errors might occur. [Details](/guide/faq/#_2-5-gb-s-ports)\n";
                    ready["2gb"] = true;
                }
                break;
            }
        }
    });
    if (features.wlan["6ghz"] !== undefined) notes += "[^6ghz]: 6 GHz networks were not yet tested. A compatible device is required for tests. [Details](/guide/faq/#_6-ghz-wlans)\n";
    return notes;
}

export async function generateDevice(device: any) {
    let model = getModelNorm(device.model)
    const filePath = getDeviceFilePath(model, device.tested.state);

    let title = device.name !== undefined ? device.name : device.model;
    if (device.alternative !== undefined) {
        for (const version in device.alternative) {
            title += " | " + device.alternative[version];
        }
    }
  
    let content = `---
title: "Asus ${ title } control from Home Assistant"
description: "Integrate your ${ device.model } into Home Assistant with AsusRouter"
---
<!-- !!! -->
<!-- This file is auto-generated -->
<!-- !!! -->
# ${ title }

|${ device.name !== undefined ? device.name : device.model }|Tested / reported firmware|
|---|---|
|<img src="${ await getImage(model) }" width="300">|<b>Stock:</b>${ genFWversions(device.tested.stock) }<b>Merlin:</b>${ genFWversions(device.tested.merlin) }|
|${ device.links.asus !== undefined ? '<li><a href="' + device.links.asus + '" rel="nofollow" target="_blank">Official webpage</a></li>' : "" }${ device.links.amazon !== undefined ? '<li><a href="' + device.links.amazon + '" rel="nofollow sponsored" target="_blank">Buy it on Amazon [^amazon]</a></li>' : "" }|${ device.tested.state === true ? "<li>:green_heart: Tested to work with AsusRouter</li>" : "<li>:yellow_heart: This device has not been tested yet, but should work with AsusRouter</li>" }${ device.tested.available ? "<li>:green_heart: Available for tests</li>" : "" }<li><a href="https://github.com/Vaskivskyi/ha-asusrouter/issues/new/choose" rel="nofollow" target="_blank">Add you report about this device</a></li>|

[^amazon]: As an Amazon Associate I earn from qualifying purchases. Not like I ever got anything yet (:

## Supported features

|Features|Support|Expose details|Specifications|
|--------|-------|--------------|--------------|
`;

    for (const feature in device.features) {
        let details = genFeature(device.features, feature, device.firmware);
        content += "|" + details.title + "|" + details.support + "|" + details.expose + "|" + details.specs + "|\n";
    }
    content += "\n\n";

    content += genFeatureNotes(device.features);

    console.log(`Generated page for ${ device.model }`)
    return generatePage(content, filePath);
}

export async function generateDeviceList(devices: any[]) {
    let list: any[] = [];
    devices.forEach(function(device) {
        let title = device.model;
        if (device.alternative !== undefined) {
            for (const version in device.alternative) {
                title += " | " + device.alternative[version];
            }
        }
        let path = "/devices/" + getModelNorm(device.model) + ".md";
        list.push({
            "text": title,
            "link": path,
        })
    });
    return generatePage(JSON.stringify(list), path.resolve(deviceBaseDir, "map.json"));
}

async function sortDevices(devices: any[]) {
    let wifi7: any[] = [];
    let wifi6e: any[] = [];
    let wifi6: any[] = [];
    let wifi5: any[] = [];
    let wifi4: any[] = [];
    let other: any[] = [];
    devices.forEach(function(device) {
        switch (device.wifi) {
            case "7":
                wifi7.push(device);
                break;
            case "6e":
                wifi6e.push(device);
                break;
            case "6":
                wifi6.push(device);
                break;
            case "5":
                wifi5.push(device);
                break;
            case "4":
                wifi4.push(device);
                break;
            default:
                other.push(device);
                break;
        }
    });
    return {
        "wifi7": wifi7,
        "wifi6e": wifi6e,
        "wifi6": wifi6,
        "wifi5": wifi5,
        "wifi4": wifi4,
        "other": other,
    }
}

export async function generateDevicesPage(devices: any[]) {
    let sorted = await sortDevices(devices);
    let content = `---
title: "Asus routers control from Home Assistant"
description: "Integrate your Asus router into Home Assistant with AsusRouter"
---
<!-- !!! -->
<!-- This file is auto-generated -->
<!-- !!! -->
# Supported devices

::: tip AsusRouter supports virtually every AsusWRT-powered device
:::
`;
    for (const type in sorted) {
        content += `
## ${ labelDeviceType[type as keyof object] }
|Model|Status|Tested firmware|Find it on Amazon[^amazon]|
|---|---|---|---|
`;
        const key = type as keyof typeof sorted;
        // console.log(sorted[type as keyof object])
        sorted[key].forEach(function(device){
            content += "|[" + device.model + "](/devices/" + getModelNorm(device.model) + ".md)|" + (device.tested.state === true ? ":green_heart: Confirmed" : ":yellow_heart: Expected to work") + "|";
            if (device.tested.stock.length !== 0) {
                content += "Stock:";
                for (const version in device.tested.stock) content += "<li>`" + device.tested.stock[version] + "`</li>";
            }
            if (device.tested.merlin.length !== 0) {
                content += "Merlin:";
                for (const version in device.tested.merlin) content += "<li>`" + device.tested.merlin[version] + "`</li>";
            }
            content += "|";
            if (device.links.amazon !== undefined) content += '<a href="' + device.links.amazon + '" rel="nofollow sponsored" target="_blank">find it</a>';
            content += "|\n";
        });
    }
    content += "\n[^amazon]: As an Amazon Associate I earn from qualifying purchases. Not like I ever got anything yet (:\n";
    return generatePage(content, path.resolve(deviceBaseDir, "README.md"));
}
