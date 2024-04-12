"use strict";(self.webpackChunkpalayogo_docs=self.webpackChunkpalayogo_docs||[]).push([[1477],{10:o=>{o.exports=JSON.parse('{"blogPosts":[{"id":"linux-xz-backdoor-03-2024","metadata":{"permalink":"/blog/linux-xz-backdoor-03-2024","source":"@site/blog/2024-03-31-linux-backdor-xz/index.md","title":"A backdoor (malware) in your linux (xz) (CVE-2024-3094) ?","description":"In this post we are going to talk about the Linux xz security breach (March 2024)","date":"2024-03-31T00:00:00.000Z","formattedDate":"March 31, 2024","tags":[{"label":"Linux","permalink":"/blog/tags/linux"},{"label":"xz","permalink":"/blog/tags/xz"},{"label":"backdoor","permalink":"/blog/tags/backdoor"},{"label":"virus","permalink":"/blog/tags/virus"},{"label":"malware","permalink":"/blog/tags/malware"}],"readingTime":3.065,"hasTruncateMarker":false,"authors":[{"name":"Cipriyo","title":"CEO","url":"https://github.com/cipriyo","imageURL":"/img/cipriyo_avatar.jpg","key":"cipriyo"}],"frontMatter":{"slug":"linux-xz-backdoor-03-2024","title":"A backdoor (malware) in your linux (xz) (CVE-2024-3094) ?","authors":["cipriyo"],"tags":["Linux","xz","backdoor","virus","malware"],"description":"In this post we are going to talk about the Linux xz security breach (March 2024)","hide_table_of_contents":true},"nextItem":{"title":"Palayogo Carpark have now 10K visits !","permalink":"/blog/carpark-ten-k"}},"content":":::note Info:\\r\\n## The information in this article is taken from this video by [Adrien Linuxtricks](https://www.linuxtricks.fr/news/10-logiciels-libres/542-alerte-securite-une-backdoor-dans-xz-sous-linux-porte-derobee/) (video in French):\\r\\n\\r\\n-------------\\r\\n\\r\\n### This article doesn\'t give me any money and I\'m writing it for free!\\r\\n\\r\\n---------------\\r\\n\\r\\n### For additional information on this article, please watch the video below (with subtitles if you do not speak French).\\r\\n\\r\\n--------------\\r\\n\\r\\n<iframe id=\\"video-youtube-embed-player\\" class=\\"video-youtube-embed-player\\" width=\\"560\\" height=\\"315\\" src=\\"https://www.youtube-nocookie.com/embed/zVn0-G8plvY?si=Pyo18AQVTg6Lk0zP\\" title=\\"YouTube video player\\" frameborder=\\"0\\" allow=\\"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen\\" referrerpolicy=\\"strict-origin-when-cross-origin\\" allowfullscreen></iframe>\\r\\n:::\\r\\n\\r\\n# To begin with, what is xz?\\r\\n\\r\\n**Xz is a file compression system like .zip or .rar** but faster and lighter. **Xz is used in almost all Linux distributions**.\\r\\n\\r\\n# The problem :\\r\\n\\r\\nRecently, the xz developers posted **version 5.6.0 and version 5.6.1**, but a Linux user decided to analyze the source code, no problem there, then he downloaded the \\"build \\" of Xz in version 5.6.0 and 5.6.1. He realized two problems, problem number 1 is that **the source code and the \\"build\\" of xz in these 2 versions was different**, and problem number 2 is that **the \\"build\\" of xz contained a [\\"backdoor\\"](https://en.wikipedia.org/wiki/Backdoor_(computing))**, **malicious code (\\"malware\\") which gives access to your computer to the creator of the virus**.\\r\\n\\r\\n:::note\\r\\nOnly versions 5.6.0 and 5.6.1 of xz contain this malicious code. If your Linux contains an earlier version of xz your computer is not at risk.\\r\\n\\r\\n--------\\r\\n\\r\\nTo find out your version of xz, open your terminal and type this code and do not look at the version of the xz package:\\r\\n\\r\\n```bash\\r\\nxz --version\\r\\n```\\r\\n\\r\\n:::\\r\\n\\r\\n:::caution Attention:\\r\\nThe list of distributions affected or not **dates 03/30/2024**, please check the version of your xz for yourself (**reminder: only versions 5.6.0 and 5.6.1 are the infected versions**)\\r\\n\\r\\n----------------\\r\\n\\r\\nIf **your Linux distribution is not in these lists**, please check the version of your xz for yourself (**reminder: only versions 5.6.0 and 5.6.1 are the infected versions**)\\r\\n\\r\\n----------------\\r\\n\\r\\n**The distributions below are mostly \xae\ufe0f or \xa9\ufe0f**.\\r\\n:::\\r\\n\\r\\n# List of affected Linux distributions:\\r\\n\\r\\n- Fedora 40 (xz version: 5.6.0 / 5.6.1)\\r\\n- OpenSuse Tumbleweed rolling release (version xz: 5.6.1)\\r\\n- Debian testing / unstable / experimental (**Update your system to fix NOW**) (version xz: 5.6.0 / 5.6.1)\\r\\n- Kali Linux Latest Version (xz version: 5.6.0 / 5.6.1)\\r\\n- Gentoo testing (version xz: 5.6.0)\\r\\n- Arch Linux Latest Version (xz version: 5.6.0 / 5.6.1)\\r\\n\\r\\n# List of unaffected Linux distributions:\\r\\n\\r\\n- Red Hat enterprise Linux 8, 9 and earlier (derivatives (Almalinux, ...) included) (version xz: 5.2 and earlier)\\r\\n- Fedora 38, 39 and earlier (xz version: 5.4.4, 5.4.1 and earlier)\\r\\n- Suse Linux Enterprise 15 service pack 15 and earlier (version xz: 5.2 and earlier)\\r\\n- OpenSuse Leap 15.5 and earlier (xz version: 5.2 and earlier)\\r\\n- Debian stable (version xz: 5.4.1)\\r\\n- Ubuntu 24.04 LTS, earlier and distributions based on it (version xz: 5.4.5 and earlier)\\r\\n- Gentoo (xz version: 5.4.2)\\r\\n\\r\\n# Now how to solve this problem? :\\r\\n\\r\\n### Option 1 : Update your Linux :\\r\\n\\r\\n:::info\\r\\nIf you are **not comfortable with your Linux terminal**, an application called \\"**Update system**\\" or \\"**Upgrade system**\\" can also do the update automatically.\\r\\n\\r\\n------------\\r\\n\\r\\nIf you **cannot find this application**, neither on your computer, nor on the **official** website of your Linux distribution, you will **have to use the following commands**.\\r\\n:::\\r\\n\\r\\n#### In case you want or are required to use the terminal to update:\\r\\n\\r\\nUbuntu, Debian, ... : \\r\\n\\r\\n```bash\\r\\nsudo apt update -y && apt upgrade -y\\r\\n```\\r\\n\\r\\nFedora, ... :\\r\\n\\r\\n```bash\\r\\nsudo dnf update\\r\\nsudo dnf upgrade\\r\\n```\\r\\n\\r\\n### Option 2 : Reinstall the os :\\r\\n\\r\\nYes, if the update don\'t fix the problem, you can reinstall your Linux.\\r\\nDon\'t forget to backup your documents."},{"id":"carpark-ten-k","metadata":{"permalink":"/blog/carpark-ten-k","source":"@site/blog/2024-03-27-carpark-ten-K/index.md","title":"Palayogo Carpark have now 10K visits !","description":"For the 10K visits of Palayogo Carpark, a video on the history of Palayogo Carpark should be published on our Youtube in a few months.","date":"2024-03-27T00:00:00.000Z","formattedDate":"March 27, 2024","tags":[{"label":"Palayogo","permalink":"/blog/tags/palayogo"},{"label":"Palayogo Carpark","permalink":"/blog/tags/palayogo-carpark"},{"label":"Roblox","permalink":"/blog/tags/roblox"}],"readingTime":1.05,"hasTruncateMarker":false,"authors":[{"name":"Cipriyo","title":"CEO","url":"https://github.com/cipriyo","imageURL":"/img/cipriyo_avatar.jpg","key":"cipriyo"},{"name":"Palayogo","url":"https://github.com/palayogo","imageURL":"/img/palayogo_avatar.png","key":"palayogo"}],"frontMatter":{"slug":"carpark-ten-k","title":"Palayogo Carpark have now 10K visits !","authors":["cipriyo","palayogo"],"tags":["Palayogo","Palayogo Carpark","Roblox"],"image":"/img/palayogo_carpark_img.png","hide_table_of_contents":true},"prevItem":{"title":"A backdoor (malware) in your linux (xz) (CVE-2024-3094) ?","permalink":"/blog/linux-xz-backdoor-03-2024"},"nextItem":{"title":"How to create a bootable USB with Rufus ?","permalink":"/blog/rufus-bootable-usb"}},"content":":::info Video:\\r\\nFor the 10K visits of Palayogo Carpark, a video on the history of Palayogo Carpark should be published on our Youtube in a few months.\\r\\n:::\\r\\n\\r\\n<img src=\\"/img/palayogo_carpark_img.png\\" alt=\\"Palayogo Carpark Image\\"></img>\\r\\n\\r\\n# This article in summary:\\r\\n\\r\\nOn **Wednesday March 27, 2024** Palayogo Carpark reached 10k visits. Thank you for your great help.\\r\\n\\r\\n# Introduction:\\r\\n\\r\\nToday Wednesday March 27, 2024, Palayogo Carpark now has 10K visits.\\r\\n\\r\\nPalayogo carpark started out as a  **~~large and popular~~**  small and non-popular car park with elevators.\\r\\n\\r\\n:::note Info:\\r\\nHere is the link to the Palayogo Carpark page for more information:\\r\\n\\r\\n[Palayogo Carpark](/games/palayogo-carpark/)\\r\\n:::\\r\\n\\r\\n# And now ? :\\r\\n\\r\\nPalayogo Carpark now has 10K visits (10,164 ***03/31/2024***)\\r\\n\\r\\nPalayogo Carpark has:\\r\\n\\r\\n- My Little Grocery for shopping with realistic SCOs ([JSM Sco v3](https://whitehill.club/discord/)).\\r\\n- A modern KONE\xae\ufe0f main elevator (**we are not paid or sponsored by KONE\xae\ufe0f to use this elevator on Roblox**)\\r\\n- Armodia Flow 2+ (fire alarm).\\r\\n- [DwProx](https://whitehill.club/discord/) (access card door system)\\r\\n- [Emergency Exit Doors](https://whitehill.club/discord/)\\r\\n\\r\\n:::caution Warning\\r\\nI may have forgotten things that are in Palayogo Carpark but not in the list above.\\r\\n\\r\\n-------------\\r\\n\\r\\nOthers thing are made by Cipriyo / OXIYO / any member of the staff.\\r\\nPlease do not ask us to send you objects made by Palayogo.\\r\\n:::"},{"id":"rufus-bootable-usb","metadata":{"permalink":"/blog/rufus-bootable-usb","source":"@site/blog/2024-03-12-rufus-bootable-usb/index.md","title":"How to create a bootable USB with Rufus ?","description":"This post is not sponsored by Rufus.","date":"2024-03-12T00:00:00.000Z","formattedDate":"March 12, 2024","tags":[{"label":"Rufus","permalink":"/blog/tags/rufus"},{"label":"Bootable USB","permalink":"/blog/tags/bootable-usb"},{"label":"USB stick","permalink":"/blog/tags/usb-stick"},{"label":"ISO file","permalink":"/blog/tags/iso-file"}],"readingTime":2.27,"hasTruncateMarker":false,"authors":[{"name":"Cipriyo","title":"CEO","url":"https://github.com/cipriyo","imageURL":"/img/cipriyo_avatar.jpg","key":"cipriyo"},{"name":"Palayogo","url":"https://github.com/palayogo","imageURL":"/img/palayogo_avatar.png","key":"palayogo"}],"frontMatter":{"slug":"rufus-bootable-usb","title":"How to create a bootable USB with Rufus ?","authors":["cipriyo","palayogo"],"tags":["Rufus","Bootable USB","USB stick","ISO file"],"hide_table_of_contents":true},"prevItem":{"title":"Palayogo Carpark have now 10K visits !","permalink":"/blog/carpark-ten-k"},"nextItem":{"title":"Welcome to the Palayogo blog","permalink":"/blog/welcome"}},"content":":::note \\r\\nThis post is **not sponsored by [Rufus](https://rufus.ie/)**.\\r\\n\\r\\n------------------------\\r\\n\\r\\nRufus\xae\ufe0f is \xa9\ufe0f Rufus.\\r\\n:::\\r\\n\\r\\n\\r\\n![Rufus logo](./Rufus-logo.png)\\r\\n\\r\\n# What is [Rufus](https://rufus.ie/) ?\\r\\n\\r\\nRufus is a **free** and [**open source**](https://github.com/pbatard/rufus) tool, that allow to make a bootable USB stick for any portable or not operating system **(.iso, .img, ...)**.\\r\\nThe new bootable USB stick can now be booted from the [BIOS](https://en.wikipedia.org/wiki/BIOS)/[UEFI](https://en.wikipedia.org/wiki/UEFI) of your computer.\\r\\nThis will boot the \\"flashed\\" operating system image in you bootable USB stick.\\r\\n\\r\\n# How to use [Rufus](https://rufus.ie/) and make a bootable USB stick ?\\r\\n\\r\\n### 1: Download Rufus :\\r\\n\\r\\n:::caution Prerequisites\\r\\nYou will need a **USB stick** with at least **4GB of free space** (**I recommend 8GB or 16GB** of free space).\\r\\n:::\\r\\n\\r\\n:::caution USB Stick format\\r\\nDuring the \\"flash\\" of an image with Rufus on your USB stick, **you will have to format your usb stick**, so please **make a copy/backup of your files that are saved in you USB stick**.\\r\\n:::\\r\\n\\r\\nTo start go to the [Rufus website](https://rufus.ie/) to download the Rufus **.exe** tool.\\r\\n\\r\\nOnce on website, **scroll down**. Then click on the portable version or not of Rufus **with your processor architecture** ([How do I find my processor architecture?](https://support.microsoft.com/en-gb/windows/32-bit-and-64-bit-windows-frequently-asked-questions-c6ca9541-8dce-4d48-0415-94a3faa2e13d)).\\r\\n\\r\\n![Rufus download options](./Rufus-dl-options.png)\\r\\n\\r\\nThe download will now begin.\\r\\n\\r\\n### 2: Download an operating system image :\\r\\n\\r\\nGo to the the **website of the operating system** you want to **\\"flash\\"**, then go to the **download page** and download the **.iso/.img** file.\\r\\n\\r\\nHere is a list of **populars operating systems** that you can download :\\r\\n\\r\\n- [Windows 11](/blog/how_to_download_win_11)\\r\\n- [Ubuntu](https://ubuntu.com/desktop)\\r\\n- [Debian](https://www.debian.org/)\\r\\n- [Fedora Linux](https://fedoraproject.org/workstation/download)\\r\\n- [Linux Mint](https://linuxmint.com/download.php)\\r\\n- [Ubuntu Server](https://ubuntu.com/server)\\r\\n\\r\\n### 3: Flash the image on your USB stick :\\r\\n\\r\\nTo **\\"flash\\" the operating system image** on your **USB stick** with **Rufus**, follow these steps:\\r\\n\\r\\n1. Insert your USB stick into your computer.\\r\\n2. Open the Rufus application.\\r\\n3. In Rufus, **select your USB stick as the target device to flash**.\\r\\n4. Click on \\"Select\\" and **browse to the .iso or .img file you downloaded earlier**. Select that file.\\r\\n5. Ensure the other options are correct:\\r\\n   - File system should be **FAT32 for UEFI** or **NTFS for BIOS**. **If you don\'t know what to choose don\'t change this and let Rufus choose**.\\r\\n   - **Cluster size** should be **default**\\r\\n6. Click Start. This will begin the **flashing process** and **may take several minutes**.\\r\\n7. Once complete, close Rufus and **eject your USB stick**. It is now a bootable USB stick with your selected operating system image.\\r\\n\\r\\n![Rufus flashing utility](./Rufus-flash-options.png)\\r\\n\\r\\nYou can now go into your computer\'s BIOS/UEFI and select to boot from the USB stick to launch that operating system.\\r\\n\\r\\nThanks for reading\\r\\n\\r\\n:::info\\r\\nAll operating systems in the list above do not belong to me and are mostly \xa9\ufe0f.\\r\\n:::"},{"id":"welcome","metadata":{"permalink":"/blog/welcome","source":"@site/blog/2024-02-27-welcome/index.md","title":"Welcome to the Palayogo blog","description":"Palayogo Logo","date":"2024-02-27T00:00:00.000Z","formattedDate":"February 27, 2024","tags":[{"label":"Palayogo","permalink":"/blog/tags/palayogo"},{"label":"Welcome","permalink":"/blog/tags/welcome"}],"readingTime":0.46,"hasTruncateMarker":false,"authors":[{"name":"Cipriyo","title":"CEO","url":"https://github.com/cipriyo","imageURL":"/img/cipriyo_avatar.jpg","key":"cipriyo"},{"name":"Palayogo","url":"https://github.com/palayogo","imageURL":"/img/palayogo_avatar.png","key":"palayogo"}],"frontMatter":{"slug":"welcome","title":"Welcome to the Palayogo blog","authors":["cipriyo","palayogo"],"tags":["Palayogo","Welcome"],"hide_table_of_contents":true},"prevItem":{"title":"How to create a bootable USB with Rufus ?","permalink":"/blog/rufus-bootable-usb"},"nextItem":{"title":"How to download Windows 11 (ISO) ? [Restored from old website]","permalink":"/blog/how_to_download_win_11"}},"content":"![Palayogo Logo](/img/logo.png)\\n\\n:::note blog info\\nThis is the home page of the Palayogo blog.\\n:::\\n\\n### Welcome to the Palayogo blog !\\n\\nList of all Palayogo posts : \\n\\n- [Palayogo Opening](/blog/palayogo-opening)\\n- [Palayogo Carpark have now 10K visits !](/blog/carpark-ten-k)\\n\\nList of all Palayogo tutorials / non Palayogo news :\\n\\n- [How to download Windows 11 ? [Restored from old website]](/blog/how_to_download_win_11)\\n- [How to create a bootable USB with Rufus ?](/blog/rufus-bootable-usb)\\n- [A backdoor (malware) in your linux (xz) ?](/blog/linux-xz-backdoor-03-2024)\\n\\n:::note Blog info\\nPosts can be posted, deleted and edited at anytime.\\n:::"},{"id":"how_to_download_win_11","metadata":{"permalink":"/blog/how_to_download_win_11","source":"@site/blog/2022-01-28-dl-win-eleven/index.md","title":"How to download Windows 11 (ISO) ? [Restored from old website]","description":"Before starting windows 11 is only for x64 devices and if you want to upgrade from windows 10 to windows 11, go to Windows Update.","date":"2022-01-28T00:00:00.000Z","formattedDate":"January 28, 2022","tags":[{"label":"Microsoft Windows","permalink":"/blog/tags/microsoft-windows"},{"label":"Windows 11","permalink":"/blog/tags/windows-11"},{"label":"Win11","permalink":"/blog/tags/win-11"},{"label":"Download Windows 11","permalink":"/blog/tags/download-windows-11"}],"readingTime":0.725,"hasTruncateMarker":false,"authors":[{"name":"Cipriyo","title":"CEO","url":"https://github.com/cipriyo","imageURL":"/img/cipriyo_avatar.jpg","key":"cipriyo"},{"name":"Palayogo","url":"https://github.com/palayogo","imageURL":"/img/palayogo_avatar.png","key":"palayogo"}],"frontMatter":{"slug":"how_to_download_win_11","title":"How to download Windows 11 (ISO) ? [Restored from old website]","authors":["cipriyo","palayogo"],"tags":["Microsoft Windows","Windows 11","Win11","Download Windows 11"],"hide_table_of_contents":true},"prevItem":{"title":"Welcome to the Palayogo blog","permalink":"/blog/welcome"},"nextItem":{"title":"Palayogo Opening","permalink":"/blog/palayogo-opening"}},"content":":::caution warning\\r\\nBefore starting **windows 11 is only for [x64 devices](https://en.wikipedia.org/wiki/64-bit_computing)** and **if you want to upgrade from windows 10 to windows 11, go to Windows Update**.\\r\\n\\r\\n----------------------\\r\\n\\r\\nWindows\xae\ufe0f and Windows11\xae\ufe0f are \xa9\ufe0f Microsoft.\\r\\n:::\\r\\n\\r\\n![Windows 11](./win-11.jpg)\\r\\n\\r\\nFirst of all, go to the **Microsoft website** to download the **official ISO** of **Windows 11**.\\r\\n\\r\\nThe website is : https://www.microsoft.com/software-download/windows11\\r\\n\\r\\nSelect the download box as below:\\r\\n![Photo of the download selection box](./dl_photo_1.png)\\r\\n\\r\\n\\r\\nThen click on the \u201cSelect Download\u201d box then choose \u201cWindows 11 (**multi edition ISO** for **x64 devices**)\u201d and click the download button:\\r\\n![Photo of the download selection box with good options](./dl_photo_2.png)\\r\\n\\r\\nThen choose your language. For me French. And click on confirm:\\r\\n![Photo of the selection of the language](./dl_photo_3.png)\\r\\n\\r\\nAnd finally, click on \u201c**[64-bit](https://en.wikipedia.org/wiki/64-bit_computing)** Download\u201d:\\r\\n![Button to download in 64 bits format](./dl_photo_4.png)\\r\\n\\r\\nAnd now the download will start :  \\r\\n![Download Image](./download.png)\\r\\n\\r\\nThanks for reading !"},{"id":"palayogo-opening","metadata":{"permalink":"/blog/palayogo-opening","source":"@site/blog/2021-04-06-palayogo-opening/index.md","title":"Palayogo Opening","description":"Palayogo has been open with a live the april 6 of 2021, but we can\'t find the rebroadcast of the live. Sorry !","date":"2021-04-06T00:00:00.000Z","formattedDate":"April 6, 2021","tags":[{"label":"Palayogo","permalink":"/blog/tags/palayogo"},{"label":"opening","permalink":"/blog/tags/opening"}],"readingTime":0.115,"hasTruncateMarker":false,"authors":[{"name":"Cipriyo","title":"CEO","url":"https://github.com/cipriyo","imageURL":"/img/cipriyo_avatar.jpg","key":"cipriyo"},{"name":"Palayogo","url":"https://github.com/palayogo","imageURL":"/img/palayogo_avatar.png","key":"palayogo"}],"frontMatter":{"slug":"palayogo-opening","title":"Palayogo Opening","authors":["cipriyo","palayogo"],"tags":["Palayogo","opening"]},"prevItem":{"title":"How to download Windows 11 (ISO) ? [Restored from old website]","permalink":"/blog/how_to_download_win_11"}},"content":"Palayogo has been open with a live the april 6 of 2021, but we can\'t find the rebroadcast of the live. Sorry !"}]}')}}]);