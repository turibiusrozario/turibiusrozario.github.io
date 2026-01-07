---
layout: page
title: Headtracker with FPV Camera (Prototype)
description: Roll and tilt gimbal with headtracking
img: assets/img/projects-thumbnail-gimbal.jpg
importance: 1
category: Hardware
related_publications: false
---

First-person view (FPV) planes are not as interesting as FPV quadcopters due
to model planes' limited mobility. However, a headtracker &mdash; a device
that tracks the motion of the head &mdash; can be utilized to give a more
'real' feel. Below is my prototype headtracker; I utilized <a
href="https://headtracker.gitbook.io/head-tracker">this</a> head tracker
software on an Arduino Nano BLE with an on-board IMU.

  <iframe width="100%" height="480px"
    src="https://www.youtube.com/embed/iaM9UqAQqPQ" title="Prototype Headtracker" frameborder="0" allow="accelerometer; autoplay;
                                        clipboard-write;
                                        encrypted-media; gyroscope;
                                        picture-in-picture; web-share"
                                        referrerpolicy="strict-origin-when-cross-origin"
                                        allowfullscreen></iframe>

This can be taken further and programmed with INAV or ArduPilot to act as
a gimbal. Below was a test gimbal that would keep the orientation of the
camera steady during roll and pitch of the drone. This was paired with the
headtracker to be able to look up and down while also having the visuals
stabilized. I would not recommend this setup, especially with low-quality
servos, since the vibrations propagate into the video and there is a high
chance of loosing the sense of orientation.

  <video controls preload="metadata" width="100%" poster="https://alexandria.turibiusrozario.com/s/WaL9yoR7XYkxQSc/preview">
      <source src="https://alexandria.turibiusrozario.com/s/WaL9yoR7XYkxQSc/download" type="video/mp4">
  </video>
  <div class="caption">
    Gimbal Test: Roll and Pitch Stabiliation Demo
  </div>
