---
layout: post
title: Nextcloud Guide
date: 2025-08-27
description: Microsoft 365 and Google Suite Replacement
thumbnail: assets/img/projects-thumbnail-nextcloud.jpg
tags: software
featured: true
---

Nextcloud is a completely free and open-source solution to substituting
Microsoft 365 and Google Suite. Imagine Google Drive, Calendar, Notes,
Photos, Meet, and more, but completely self-hosted, secure, and truly yours.
With Nextcloud, <it>you own your data</it>.

I host my own Nextcloud server at <a href="https://alexandria.turibiusrozario.com/">
alexandria.turibiusrozario.com
</a> that I regularly use for all personal files
and activities. This is done using a Raspberry Pi 4, an external hard drive,
and a domain. Below is a guide on setting Nextcloud up. This guide is
tested and true as of 2025-08-29.

  <div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/others-Nextcloud.png" title="My Nextcloud Dashboard" class="img-fluid rounded z-depth-1" %}
    </div>
  </div>
  <div class="caption">
    My Nextcloud dashboard
  </div>## Step 1: Getting all the parts

**Purchase a small computer**. This can be a Raspberry Pi 4 or 5, with 8 GB RAM.
Lower-cost alternatives are available such as Orange Pi, as well as more
powerfull options such as mini computers. In general, if you plan on having
lots of computations such as AI and video recording, aim for a mini computer.
You can also use an old computer as a server, so long as it can run Linux
(non-Linux works, but that is beyond the scope of this guide). If you are intending
to use a Raspberry Pi or similar, also purchase a fan for cooling.

My setup utilizes a Raspberry Pi 4 Model B with 8 GB RAM, with a cooling fan
attached. I use a fast phone charger to power the Pi.

**Warning**: If you use a Pi or similar, always power it with an appropriate
power supply. For the Pi 4, a 5V 3A (or higher than 3A) power supply is required.

**If you are NOT using a Raspberry Pi or similar, you have to tweak certain aspects of this guide! **

**Purchase some memory**. This can be a simple microSD card that is 128 GB
and above. If you plan on hosting a lot of files, particularly videos,
purchase a 16 or 32 GB microSD card along with an external hard drive of your
choice.

My setup utilizes a 32 GB microSD card (a 16 would have been fine) with a 1 TB
external hard disk.

**Purchase a domain**. Go to <a href="https://porkbun.com/">porkbun</a>,
make an account, find a domain, and purchase it. Ensure that the renewal
price is not too high, and avoid top-level domains (tld) that do not offer WHOIS
privacy. Top-level domains are the ".com", ".net", ".us", etc. that you would
see websites end with. WHOIS allows anyone to identify a domain owner, and WHOIS
privacy prevents that. This is important since you have to use your phone number
and or address to purchase a domain; with WHOIS privacy, you keep this information
safe. Avoid a tld such as ".us", which does not allow WHOIS privacy.

For my setup, I purchased "turibiusrozario.com" for USD 11. I could have purchased
"turibiusrozario.us" for USD 6, but that would publicize my phone number and personal
address, hence I did not purchase the ".us".

## Step 2: Prepare the microSD card for the Pi

Download and install the <a href="https://www.raspberrypi.com/software/">
Raspberry Pi Imager
</a>. Plug your microSD card in, and run the Imager.
Select the Pi device you are using, select "OS Lite 64-bit" as the
operating system (this option might be hidden away in a submenu), and select
the **correct** microSD card.

Click "Next". Edit some configurations, primarily the names and connectivity.
Set a name for the Pi ("local name"), a name for the user ("hostname"), and a
password. Enter the Wifi credentials, i.e., the wifi name and password. Ensure
that SSH is enabled. Go ahead and continue with installing the operating system
on to the microSD card.

Once done, plug the microSD card into the Raspberry Pi and connect it to a
correct power supply.

If you are using a mini computer or an old computer, install a Linux operating
system on it. If you want to stick to this guide as closely as possible,
install Debian.

## Step 3: Prepare the Pi for Nextcloud

If you are using an external hard drive as the storage media, please format
it as ext4 file format. Connect it to the Pi.

While the Pi is powered on, SSH into the Pi. To do this, you can open your terminal
on a computer and simply type "ssh your_hostname@locale_name.local" to
enter. If you are using an old or mini computer, you can follow all the bottom
commands without having to SSH.

**Warning**: In general, you should not just 'unplug' the Pi to power it off.
It is always recommended that you run `sudo shutdown` while connected
via SSH to shut the Pi down.
If you are using a Pi, you will have to fix locale issues (assuming you are
in the US). Once you have SSH'ed into the Pi, enter
`sudo localectl set-locale LANG=en_US.UTF-8`
If you are using an external hard drive as your storage, do the following:

  <ol>
  <li><code>
      sudo blkid
  </code>: This showcases all the storages. Your drive will be listed 
  as something like <code>/dev/sdaX</code>. Remember the PARTUUID.</li>
  <li><code>
      sudo mkdir /media/NAME
  </code>: Replace "NAME" with any name you would want to use for 
  the drive. I named mine "Alexandria", though most people simply do "Nextcloud".
  </li>
  <li></li>
  <li><code>
      sudo nano /etc/fstab
  </code>: Once in the text editor, add a new line with the following entry:
  <code>
      PARTUUID=abcdefgh-00 /media/NAME ext4 defaults,noatime,nofail,x-systemd.device-timeout=10s 0 2
  </code>. Of course, replace the PARTUID and NAME with the correct ones.
  Save and exit by pressing CTRL + X, then pressing ENTER.</li>
  <li><code>
      sudo usermod -aG hostname hostname
  </code>: Replace "hostname" with the correct hostname.
  </li>
  <li>
      <code>
          sudo chown -R hostname /media/NAME 
      </code>: Replace "hostname" and "NAME" with the correct ones.
  </li>
  <li>
      <code>
          sudo restart
      </code>: This will close SSH and restart the Pi. You are done with 
      configurating the external hard drive. Make sure to SSH back in.
  </li>
  </ol>
Update and restart the Pi by running`sudo apt-get update && sudo apt-get upgrade && sudo restart`. Once it restarts, SSH back into the Pi.
You can now practically copy and paste the following chunk of code:

```bash
sudo apt-get install ca-certificates curl
sudo install -m 0755 -d /etc/apt/keyrings
sudo curl -fsSL https://download.docker.com/linux/debian/gpg -o /etc/apt/keyrings/docker.asc
sudo chmod a+r /etc/apt/keyrings/docker.asc

# Add the repository to Apt sources:
echo \
"deb [arch=$(dpkg --print-architecture) signed-by=/etc/apt/keyrings/docker.asc] https://download.docker.com/linux/debian \
$(. /etc/os-release && echo "$VERSION_CODENAME") stable" | \
sudo tee /etc/apt/sources.list.d/docker.list > /dev/null
sudo apt-get update
sudo apt-get install docker-ce docker-ce-cli containerd.io docker-buildx-plugin docker-compose-plugin
sudo docker run hello-world
sudo groupadd docker # this might already be done automatically
sudo usermod -aG docker $USER # adds myself to use docker group
newgrp docker # refresh users
docker run hello-world # Test if you can use docker without sudo
docker rm $(docker ps -qa) # deletes all the hello-world
docker ps -a # should return nothing
```

The above code block is taken from the Docker installation guide.
If you want to see what all the code does, the full guide to
installing docker can be found <a href="https://docs.docker.com/engine/install/">here</a>.

## Step 4: Installing Nextcloud

All of the following in this section is done on the Pi. SSH into the Pi to run the commands.
If you use a mini computer or an old computer, run the commands on the computer directly.
I enabled IPv6 protocol on my Pi for future support (more details about this can be
found <a href="https://github.com/nextcloud/all-in-one/blob/main/docker-ipv6-support.md">here</a>).
To do this, make a new file:

```bash
sudo nano /etc/docker/daemon.json # This file did not exist for me; made new
```

And add the lines

```bash
{
"default-network-opts": {"bridge":{"com.docker.network.enable_ipv6":"true"}}
}
```

And save and exit by pressing CTRL+X and Enter. Then, run:

```bash
sudo systemctl restart docker
sudo docker network inspect nextcloud-aio | grep EnableIPv6
# The above command verifies if it's enabled.
# It's likely not, and in fact, AIO should be missing on a first time setup.
# So run:
sudo docker network create nextcloud-aio
```

Identify the IP address of the Pi. This can be done by entering
`hostname -I`. The IP address is typically in the
format of "10.0.0.XX" (IPv4).
Remember this address since it will be needed later.

The following code is taken directly from the Nextcloud AIO. You can see all their
guides and documentation <a href="https://github.com/nextcloud/all-in-one">here</a>.
I used the following code, where "NAME" refers to my harddrive; change it accordingly.
You can remove the entire line if you are not using an external hard drive.

```bash
sudo docker run \
--init \
--sig-proxy=false \
--name nextcloud-aio-mastercontainer \
--restart always \
--publish 80:80 \
--publish 8080:8080 \
--publish 8443:8443 \
--volume nextcloud_aio_mastercontainer:/mnt/docker-aio-config \
--volume /var/run/docker.sock:/var/run/docker.sock:ro \
--env NEXTCLOUD_DATADIR="/media/NAME" \
ghcr.io/nextcloud-releases/all-in-one:latest
```

## Step 5: Internet Configurations and Finishing Up

Head to your router's configuration page, which can typically be accessed by going to
"10.0.0.1" on your browser. There, make the IP address for the Pi (found earlier) to be
a "Reserved IP" instead of DHCP. This prevents the local address from changing.

To enable access to the Pi from anywhere in the world (with internet connectivity), ports
have to be opened. On the router's configuration page, look for "Port Forwarding" option.
Forward the following ports for the Pi:

<ul>
    <li>80 TCP</li>
    <li>443 TCP and UDP</li>
    <li>3478 TCP and UDP</li>
    <li>8443 TCP</li>
</ul>
That is all the configurations needed on the router.

**Note**: There are several IP addresses. There are IPv4 addresses that are in the
format of X.X.X.X, and IPv6 addresses that are in the format of X:X:X:X:X:X:X:X. Some
of these addresses can be local: these are visible only while connected to your router,
and is the one that you just found in the above step. There are public IP addresses that
can be seen from anywhere in the world: this will be used in the next step.

Next, the domain has to be configured to forward to your Nextcloud. On Porkbun, I had to
click on "DNS" to configure. Make a Type "A - Address record" with an answer/value
consisting of the public IP address. This can be found by searching "What's my IP?" online.
The hostname can be left blank if you want "your_domain.tld" to point to Nextcloud.
I used "alexandria.turibiusrozario.com" as the domain, and a TTL value of 3600. This record
uses the IPv4 public address. You can additionally add the IPv6 address by creating a Type
"AAAA" address record; this will have the same domain name and TTL, but the answer/value will
be the IPv6 address (again, you can find this by simply searching "what is my IPv6 address?").

Now, go to "https://10.0.0.X:8080/setup"; replace X with the correct number that points to the Pi.
From here, simply follow all the instructions on screen.

Once you reach the page where you can choose your containers, keep in mind that the more
containers you enable, the more processing power you will need on your device. I kept all
the defaults enabled only. Once you click 'Start', it might take as much as 10 minutes before
everything is ready. Then, you can finally go to "https://your_domain.tld" and enjoy NextCloud!
