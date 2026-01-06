---
layout: page
title: Active and Passive Filament Dryer
description: DIY dehydrator and drybox for 3D printing
img: assets/img/projects-thumbnail-dehydrator.jpg
importance: 2
category: Hardware
related_publications: false
---

## Active Dehydrator

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/others-dehydrator.jpg" title="Image of active dehydrator" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    DIY active filmanet dehydrator
</div>

Since some of my filaments were sitting out for a long time, I decided to
make an active dehydrator. I had some low-cost cork panels lying around.
Cork, despite being made from wood, is pretty fire resistant. It also is
somewhat insulating. I used cork as the body, held together with some
CA (superglue). Two barbecue skewers were placed through the body to prevent
the spool from touching the bottom. At the bottom, a 34 inch 22 gauge nichrome
wire with a resistance of 1.016 Ohm/ft was used as the heating element. I
had to keep it in a wavy shape without having the wires touch each other.
For extra safety, I covered the nichrome with some fiberglass cloth to prevent
shorts, and high concentrations of heat. The ends of the wire stuck out of the
dehydrator.

Outside, alligator clips would supply voltage from a battery charger to heat
the wires. An Arduino nano with a DHT11 sensor was used to monitor the
temperature and humidity. A 12V 60mm DC fan kept airflow active. The sensors
and modules were powered from the same supply as the nichrome wire. This is
possible since the Arduino nano accepts 7 to 12V, and the nichrome wire can
utilize the same voltage range to output around 20 to 50W. In my uses,
11V was a good starting voltage to heat up the dehumidifier. Once a
temperature of 50°C is obtained, I would bring the voltage down to around 9.5V.
This would maintain a steady temperature of around 54°C at an ambient
temperature of 23°C. The humidity would reach 0% within 3 hours.

If you decide to make this, note that different voltages maybe needed. I was
also drying LW PLA which accepts 50°C to 55°C. For filaments such as ABS or PETG,
you would have to use higher temperatures. Overall, this worked better than
dehydrators that can be bought online, and was also low cost (less than USD 30,
excluding the power supply).

## Dry Box

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/others-dry_box.jpg" title="Image of my filament dry box" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    DIY filament dry box containing lightweight LW PLA, PETG, TPU, and PLA+.
</div>

Since I print with PETG and sometimes with TPU, and since my room has a
humidifier, I decided to create a DIY passive filament dry box, so that the
filaments can be quickly changed.

This dry box was made using an 18L waterproof box with a PVC pipe as the
spool holder. Nuts and bolts held the 3D printed pipe holder in place, and
PTFE tube with coupler was used to reduce moisture going into the box.
Silica gel packets were placed inside as a passive dryer.

Overtime, I realized that the PVC pipe did not offer the smoothest rolling,
and made replacing spools difficult. I have since then swapped to 608 roller
bearings held down by 3D printed holders. The whole dry box was then bolted
onto my 3D printer so that the filament can directly feed into the extruders.
Wood was used as supports for the plastic.

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/others-dry_box_v2.jpg" title="Image of my filament dry box" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    Upgraded filament dry box.
</div>
