---
layout: page
permalink: /research/
title: Research
description: My intended focus is in the fields related to renewable energy, climate change reversal, and sustainability. My current or previous research experiences are listed below.
nav: true
nav_order: 4
---

# Parameter Optimization | Dr. Ankit Goel

## November 2021 &mdash; January 2025

<i>Background:
<a href="https://ankgoel.umbc.edu/">Dr. Ankit Goel</a>
is an assistant professor at UMBC.
He runs the Estimation, Control, and Learning Laboratory (ECLL)
in the Mechanical Engineering department.</i>
<video autoplay muted playsinline controls loop preload="metadata" width="100%" poster="https://alexandria.turibiusrozario.com/s/nxFADBedj3Ej4ck/preview">

<source
        src="https://alexandria.turibiusrozario.com/s/xjNxZdoJsGgdiGy/download" type="video/mp4">
</video>

<div class="caption">
    Comparing novel Extended Kalman Filter supported neural network at
    tracking the Lorenz system, against clasical extended kalman filter and open
    loop neural network.
</div>

I implement and test various optimization techniques
to solve classical non-linear problems and train neural networks (NNs).
In particular, I have,

  <ol>
      <li>Used conventional machine learning techniques to train NNs
          using both Keras, Pytorch, and custom gradient descent,
      </li>
      <li>
          Illustrated the ability of gradient <i>free</i> methods,
          such as the Newtonian method and random search method,
          to surpass conventional gradient descent in training NNs,
      </li>
      <li>
          Tested the effect on inertial measurement units
          due to properties of accelerometers, gyroscopes, and magnetometers,
      </li>
      <li>
          Implemented a novel finite time algorithm
          in discreet problems such as NNs, 
          shown in the image below,
      </li>
      <li>
          Combined extended Kalman filter with NNs to improve long
          term convergence, shown in the video above.
      </li>
      <li>
          And developed a simultaneous localization and mapping
          platform for future research and coursework.
      </li>
  </ol>
  Additionally, I had the opportunity to present on my research:
  <ol>
      <li>
          <b>URCAD</b>, 2023
          <br> Presented poster on neural networks and gradient-free training on UMBC's undergraduate research day.
          <a href="https://urcad.umbc.edu/abstract-2023/">Link to abstracts</a>
      </li>
      <li>
          2023. Time accelerated algorithms.
          This was cancelled due to thresholding.
      </li>
      <li>
          <b>URCAD</b>, 2024
          <br> Modelling dynamical systems using neural networks.
      </li>
  </ol>

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/Research-Goel-CostMNIST.png" title="Plot of convergence of various optimizers, in which
  FTE outranks Adam, and Adam outranks SGD." class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    Comparing training algorithm performance on MNIST dataset;
  the finite time method was shown to outperform 
  conventional adaptive momentum and stochastic gradient descent methods 
  in this case
</div>

# Magnesium Extraction Methods from Seawater | Dr. Michael Wagner

## Summer 2024 (REU)

<i>
  Backgroud:
  <a
  href="https://directory.engr.wisc.edu/me/Faculty/Wagner_Michael/">Dr.
  Michael Wagner</a> is a Mechanical Engineering professor at
  University of Wisconsin, Madison. He runs the Energy Systems
  Optimization Lab (ESOL) with a focus on applied research on
  developing simulation models and software, and methodologies of
  improving usage of sustainable energy sources or methods.
</i>
<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/Research-Wagner-pH.png" title="Two figures showing the effect of pH on magnesium
  extraction. In the top figure, as the pH increases (by adding
  sodium hydroxide), the amount
  of magnesium precipitate increases between pH of about 7 and
  12.5. Then calcium begins precipitating out. Both are linear.
  The second figure is the effect of adding calcium hydroxide to
  increase the pH. Magnesium begins precipitating up to a point,
  after which any calcium hydroxide added will remain
  precipitated." class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    Effect of pH on magnesium hydroxide and calcium
  hydroxide precipitate using sodium hydroxide or calcium
  hydroxide as the base, as calculated using PHREEQC.
</div>
  A seawater mining with zero-liquid discharge powered by nuclear
  energy was proposed by ESOL. Seawater would undergo
  pretreatment, all ions will be extracted, and finally reverse
  osmosis would provide fresh drinking water, all while being
  powered by sustainable nuclear energy.

My role over the summer was researching the extraction of
bivalent ions, primarily magnesium ions, from seawater. I
determined and analyzed the energy and cost requirements for all
the methods related with magnesium salt extraction and
conversion to pure magnesium metal. Figure below showcases the utilization one of the
methodologies that I had to test to determine its effectiveness,
and figure above showcases a method by <i>Sano
et al. 2018</i>. I went beyond and researched
pre-treatment of seawater, extraction of calcium, and
concentration of seawater and its inaccuracies.

Two deliverables were produced during this research
experience:

  <ul>
      <li>Research poster, presented at University of Wisconsin,
      Madison.</li>
      <li>Detailed documentation on extracting magnesium.</li>
  </ul>
<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/Research-Wagner-Sano.png" title="Figure illustrating electrodialysis method for extracting
  magnesium from seawater. One chamber has brine flowing through
  cathode and yields brine, magnesium hydroxide, and hydrogen gas.
  The other chamber has sodium chloride solution flowing through
  anode and yields oxygen gas and hydrochloric acid. Sodium passes
  through the exchange membrane from the anode to the cathode." class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    Visual illustration of magnesium hydroxide
</div>

# Design of a Lab-Scale Ocean Wave-Powered Desalination System | Dr. James Van de Ven

## Summer 2023 (REU)

<i>
  Background: 
  <a href="https://cse.umn.edu/me/james-van-de-ven">Dr. James Van de Ven</a>
  is a Mechanical Engineering professor at University of Minnesota.
  He runs the Mechanical Energy & Power Systems Laboratory (MEPS)
  with a focus on fluid power.
</i>
<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/Research-MEPS-Schematic.png" title="Illustration of a wave energy based desalination system.
  The kinetic energy of a large flap, hinged at the sea bed, is
  used to drive a hydraulic system. The hydraulic system uses
  seawater to transfer power, generate electricity, and produce
  freshwater." class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    Illustration of the core processes and elements in
  the desalination system.</div>

A self-powered and decentralized wave energy converter and desalination system
was proposed in prior work by the MEPS lab. The wave energy is harvested using a large
oscillating flap hinged at the sea bed, whose kinetic energy is then transferred into
hydraulics; the pressurized seawater is used to generate electricity and freshwater.
Figure above showcases these primary traits.

My role over the summer was to help scale this full-scale system to a lab-scale
hardware-in-the-loop test system. With the help of my graduate mentor, Jeremy Simmons,
I:

  <ol>
      <li>Used fluid equations, efficiency computations, and dimension constraints to size 
          the system.</li>
      <li>Identified parts required to construct the system and generated a bill of materials.</li>
      <li>Designed custom parts and fittings, and a draft assembly model.</li>
  </ol>

I had to compare the maximum
required pressure differential to the achievable pressure differential based on the energy losses
through a specific servo valve; the maximum required flow rate is compared against
the achievable flow of the pump. Performance evaluations such as this helped determine
whether the combination of the chosen parts would be capable of simulating the motion
of the wave energy converter.

Three deliverables were produced during this research experience:

  <ul>
      <li>Research poster, presented at SURE at University of Minnesota. 
          <a href="http://www.mrsec.umn.edu/_assets/pdf/REU-event-programs/SURE23.pdf">Link to abstracts.</a></li>
      <li>Extended abstract, which can be read <a href="Documents/umn_reu_extended_abstract.pdf">here</a></li>
      <li>Project hand-off memo, consisting of all research files and deliverables.</li>
  </ul>
