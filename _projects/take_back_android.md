---
layout: page
title: Take Back Your Control - Android
description: Guide to De-bloating Android
img: assets/img/projects-thumbnail-lineageos.png
importance: 2
category: Software
related_publications: false
---

If you use Android, it likely comes with bloatware --- pre-installed apps
that you do not use nor need. Worse, there are applications running in the
background that constantly degrade battery life --- in particular, almost
all of Google services. Worst, the Android that you paid for will not be
supported nor last as much as you may want it to.

In search for making my cellphone battery last longer hours, and the phone
itself to last more years, I began the journey of 'De-Googling' my phone.
This does not mean removing all Google components. To me, it means utilizing
as little closed-source and power-hungry applications as possible, which
apps made by big tech tend to be. My process was as follows:

<ol>
  <li> Switching to an open-source OS that does not contain bloatware and
      major Google backends by default.</li>
  <li> Utilizing open-source or minimal applications.</li>
  <li> Regaining ability to use Google applications.</li>
</ol>

<a href="https://divestos.org/misc/e.txt">Here</a> is a comparison of some
of the major open-source OS that does not have tracking, and is Google free.
If you use a Pixel device, it is best to use <a
href="https://grapheneos.org/">GrapheneOS</a>. Otherwise, <a
href="https://doc.e.foundation/devices">\/e\/</a> is an option that is ready
to use upon installations. I personally use <a
href="https://lineage.microg.org/">LineageOS for MicroG</a> since it allows
me to utilize some required Google Apps.

The very first installation is expected to be the hardest. The process
should be the same regardless of what Android you use:

<ol>
<li>
    Backup all files: the easiest method is to directly connect your phone
    to your computer, and copy all files that you have. I additionally
    recommend going to each app and exporting any configurations that you
    may have (e.g. contacts, text messages, authenticator codes, etc.). I
    also recommend having a list of a list of apps you realistically use so
    that you can re-download them later.
</li>
<li>
    Unlocking the bootloader: There are several existing online tutorials
    for unlocking the bootloader. <a href="https://youtu.be/ksbRMo00uTA">
        Here </a> is an example; despite being over 6 years old, the
    methodology is applicable today. You can use the <a
        href="https://developer.android.com/tools/releases/platform-tools">
        developer's page </a> to download platform tools which will be
    needed as you follow along any bootloader unlock video.
</li>
<li>
    Once unlocked, you can follow <a
        href="https://wiki.lineageos.org/devices/">your specific device's
        instructions on how to install LineageOS </a>. However, if you want
    LineageOS <em>for MicroG</em>, which allows better 'De-Googling' while
    still being able to use Google applications, you should use the image
    file (.iso file) from <a href="https://download.lineage.microg.org/">
    MicroG's website </a> instead of Lineage's .iso file. You will not have
to install any additional files using this method.
</li>
<li>
  After completing the reboot, check out F-Droid and all the interesting
  things LineageOS for MicroG comes with! You will find many better and
  ad-free alternatives to certain applications you used to use. Or you can
  use your backup to regain all your past files and re-download your past
  apps through Aurora Store (which can be downloaded through F-Droid).
</li>
</ol>

It is possible to go even further and root your phone with <a
href="https://topjohnwu.github.io/Magisk/install.html">Magisk</a> which
allows even greater customization such as significantly <a
href="https://www.celsoazevedo.com/files/android/google-camera/">improved
camera quality</a>, <a
href="https://github.com/di72nn/callrecorder-axet">access to call
recording</a>, and <a
href="https://github.com/MatteCarra/AccA">controlling how much your
phone charges</a> (e.g., to increase longevity of your battery).

In terms of alternative applications, here are a couple that I enjoy:

<ul>
<li>
    <a href="https://f-droid.org/en/packages/com.beemdevelopment.aegis/">Aegies
        Authenticator</a> : An open source two-factor authentication
    application.
</li>
<li>
    <a href="https://f-droid.org/en/packages/com.apps.adrcotfas.goodtime/">Goodtime -
        Pomodoro Timer</a> : The F-Droid version has premium services.
</li>
<li>
    <a href="https://f-droid.org/en/packages/net.cozic.joplin/">Joplin</a>
    : Open source note-taking application that you can sync between computers
    and upload to the cloud.
</li>
<li>
    <a href="https://f-droid.org/en/packages/org.kde.kdeconnect_tp/">KDE Connect</a>
    : Links your phone to any other computer or phone to perform things
    such as: file sharing, controlling the other device, sending messages through
    the other device, audio play/pause depending on phone calls, and more.
</li>
<li>
    <a href="https://f-droid.org/en/packages/fr.neamar.kiss/">KISS Launcher</a>
    : Search based launcher to maximize start-ups and increase
    the rate by which you use your phone
</li>
<li>
    <a href="https://f-droid.org/en/packages/app.organicmaps/">Organic Maps</a>
    : Maps that is better than Google Maps for jogging and biking.
</li>
<li>
    <a href="https://f-droid.org/en/packages/net.osmand.plus/">OsmAnd</a>
    : Google Maps alternative, especially for driving.
</li>
<li>
    <a href="https://f-droid.org/en/packages/ch.protonvpn.android/">ProtonVPN</a>
    : Free and one of the top rated VPNs.
</li>
<li>
    More applications that you can find in
    <a href="https://github.com/Psyhackological/AAA">AAA</a>'s website
</li>
</ul>
