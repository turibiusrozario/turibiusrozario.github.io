---
layout: page
title: "Getting Started: Beginner RC Plane"
description: Detailed tutorial on getting started to your first RC plane
img: assets/img/placeholder-3x2.png
importance: 2
category: UAVs
related_publications: false
---

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/UAVs-DT-MiniWarrior.jpg" title="Dovetail Mini Warior" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    Scratch built sub-250g acrobatic 'Dovetail Mini Warrior'
</div>

This section is meant to be a guide for a beginner
who wants to build an aircraft on a budget.
Things that will be covered are:
<ol>
    <li>Pre-existing beginner guides</li>
    <li>Tools purchase list</li>
    <li>Parts purchase list</li>
    <li>Trainer design</li>
    <li>Flying guide</li>
    <li>Flight footage</li>
</ol>
Websites where I generally make purchases from are:
<ul>
    <li><a href="https://hobbyking.com/">HobbyKing</a>:
        Great place for wheels, propellers, and motors.
        Has many other airplane materials,
        but they are often expensive or out of stock.</li>
    <li><a href="https://www.getfpv.com/">getfpv</a>:
        Great for quadcopter and FPV parts.
        They also have great small propellers and batteries.</li>
    <li><a href="https://www.banggood.com/">Banggood</a>:
        RC on a budget. I use this commonly if I am in no rush
        (shipping and delivery times are very long), there are 
        no cheaper option, and if the item is not too expensive.
        Always read the reviews before making purchases here.</li>
    <li><a href="https://www.aliexpress.com/">AliExpress</a>:
        For items not found at a low cost from any of the above websites.
        This is the best place to purchase open source and/or generic
        lightweight items (such as ELRS receivers, Arduinos, etc.).
        Like Banggood, this is based in China;
        expect long shipping times and only purchase from stores that 
        have a rating of 97% and have been open for more than 2 years.</li>
    <li><a href="https://www.ebay.com/">Ebay</a>:
        Similar to AliExpress, but far better delivery times and reliability.</li>
    <li><a href="https://store.flitetest.com/">FliteTest Store</a>:
        Really great place for kits and many DIY models.
        They have build videos for many of their products,
        so it is very hard to go wrong.</li>
    <li><a href="https://www.amazon.com/">Amazon</a>:
        I don't think I have to explain this one.</li>
    <li>Dollar Tree (in person):
        Purchase foam boards, dowels, paint, etc. from here.
        For foam board, ONLY purchase them from Dollar Tree!
        Other brands (Elmer's, Ross board, etc.) are significantly heavier!</li>
</ul>

## Pre-existing beginner guides

If you get tired of my guide,
there exists other tutorials on getting into this hobby.
The best and most useful,
in my opinion,
is <a href="https://www.youtube.com/playlist?list=PL6IuSFWz4ktvupu_gxw1vn-sjBGOkJFHV">
    <b>FliteTest's Beginner Series</b>
</a>.
I personally used their beginner series
and found it to be very informative yet easy to watch.
Here's a link to one of their build videos:
<a href="https://youtu.be/KJWg5HJBGGc">
    Flite Test Tiny Trainer
</a>.
There is also the
<a href="https://www.youtube.com/watch?v=bllvhjr51Lk&pp=ygUWam95cGxhbmVzIHRyYWluZXIgbWluaQ%3D%3D">
    Joytrainer Mini
</a> that you can try.

## Tools purchase list

The largest cost in getting into the hobby is 
the initial cost due to tools.
However, keep in mind that you only need to buy these tools <i>once</i>.
Additionally, these tools are helpful for other projects such as
robotics, electronic repairs, and power supply.
Here's a list of non-electric tools to purchase:
<ol>
    <li>Needle nose pliers 
        (make sure that they can have the wire cutter section)</li>
    <li>Size 11 craft knife 
        (also known as x-acto knife)(make sure to get lots of blades)</li>
    <li><b>Full</b> sized glue gun and glue sticks 
        (higher wattage rating is generally better)</li>
    <li>Pencils and 2 measuring rulers
        (one should be dual units (metric and imperial),
        and the other should be a yard or a meter long)</li>
    <li>Screwdrivers (Phillips head and hex head mainly)</li>
</ol>
I recommend purchasing a low-cost multimeter. These are mainly
used to measure continuity and voltage for electronic parts.

#### Battery charger

You will need a dedicated battery charger for the <i>lithium</i> batteries.
I personally use 
<a href="https://www.amazon.com/Charger-Battery-Balance-Discharger-Adapter/dp/B07R18YNZQ">
    HTRC C150</a>
because it is cheaper than other options, and comes with adapters and a battery bag.
If you want to purchase any other charger,
ensure that they are able to 'storage discharge' batteries
and have multiple failsafe options.
If you know you will be more involved in this hobby, 
or are planning on flying quadcopters,
I have used and recommend the HTRC D240.

#### Radio transmitter

A radio transmitter (TX) is needed to control the aircraft.
Keep in mind that a receiver (RX) is needed alongside.
Here are a few options:
<ul>
    <li>
        FlySky FS-i6X if you are on a very tight budget
        and do <i>not</i> intend on flying drones
        or any other advanced aerial vehicles.
        I recommend the FS-iA6B receiver for this.
        <!-- I do not recommend this. -->
    </li>
    <li>
        FrSky QX7 (<b>ACCST</b>) if you can find this second hand
        or on a discount. Although I personally use this, I do
        not recommend it as this is rather outdated.
    </li>
    <li>
        <b>Radiomaster Pocket</b> (ELRS version). I recommend
        this transmitter if you are on a tight budget, intend to
        travel with your drones, or have small hands. However,
        if you plan on doing advanced aerial vehicles, I would
        rather go for the Boxer or TX16S.
    </li>
    <li>
        <b>Radiomaster Boxer</b> (ELRS version).
        I highly recommend this transmitter due to its middle ground
        between high functionality and simplicity.
        Joshua Bardwell did a <a href="https://youtu.be/5Fi9csa-wP8">review</a>
        that showcases this transmitter.
    </li>
    <li>
        Radiomaster TX16s Mark II (ELRS version) if 
        you are sure you plan on doing high level
        remote-control in the future.
    </li>
</ul>
Each of the above transmitters have their pros and cons.
However, as mentioned earlier, these are <i>tools</i>
and they will stick around for a long time.
I recommend purchasing the Radiomaster Boxer transmitter
because it has all the functions you need,
is the third cheapest out of the list 
(factoring in cost of upgrades and receivers),
and most importantly, the Radiomaster series is likely to stick 
around for a very long time.
Additionally, I recommend getting the 'ELRS' option
since it is open sourced and rapidly growing in popularity and
features. If the Boxer is too pricey, the Radiomaster Pocket is
an alternative.


For ELRS, make sure to get the 'FCC' version.
Any ELRS receiver can work with any ELRS TX.
However, for airplanes, you will typically want to get a PWM ELRS RX
with at least 4 <i>usable</i> PWM pins.
Example brands for the PWM ELRS RX include: 
Radiomaster ER series, Mateksys, and Betafpv.

#### Solder station

As you progress, you will need a solder station
since many RC parts come unsoldered. When purchasing a solder station,
make sure that it
<ul>
    <li>has temperature control, and</li>
    <li>comes with different tips (especially a bevel or chisel tip).</li>
</ul>
Other things that I recommend having are:
<ul>
    <li>Sponge or brass wool</li>
    <li>Leaded solder</li>
    <li>Helping hands</li>
    <li>Solder sucker or solder wick (in case you need to remove solder)</li>
</ul>
I personally use the X-Tronic 3020 solder station.
If you have the budget, I recommend getting a soldering + hot air station,
since it will help you in the long run.

## Parts purchase list

Some general parts to purchase are: 
<ul>
    <li>Hoop and loop tape (also known as velcro)</li>
    <li>Rubber bands (assorted recommended)</li>
    <li>Heat shrink (I recommend 3:1 shrink ratio)</li>
    <li>Zip ties</li>
    <li>Glue sticks for the glue gun</li>
    <li>Battery tester</li>
    <li>Propellers</li>
</ul>
If you are intending to build quadcopters, I recommend getting
Loctite Blue to further secure nuts and bolts.

## Building plans: Trainer Airplane

My recommendation to get started with RC airplanes is to
purchase the items listed in this <a
href="https://github.com/turibiusrozario/turibiusrozario.github.io/blob/main/assets/csv/UAVs-Trainer-BOM.csv">
    spreadsheet
</a>. I already added links to the purchases, however, you can
easily find alternatives. Only the motor mount has to be 3D
printed, preferably with PETG (other materials work, however
they come with their own disadvantages). The 3D printable file
for this can be found <a
href="https://drive.google.com/file/d/1zS25tqwQ07R53doif9VbXIQ5sc2w6WNp/view?usp=sharing">here</a>.


The plans for the work can be found: **TODO**


