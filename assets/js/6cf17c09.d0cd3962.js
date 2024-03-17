"use strict";(self.webpackChunkpalayogo_docs=self.webpackChunkpalayogo_docs||[]).push([[878],{3905:(t,e,o)=>{o.d(e,{Zo:()=>u,kt:()=>k});var a=o(7294);function n(t,e,o){return e in t?Object.defineProperty(t,e,{value:o,enumerable:!0,configurable:!0,writable:!0}):t[e]=o,t}function r(t,e){var o=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),o.push.apply(o,a)}return o}function i(t){for(var e=1;e<arguments.length;e++){var o=null!=arguments[e]?arguments[e]:{};e%2?r(Object(o),!0).forEach((function(e){n(t,e,o[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(o)):r(Object(o)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(o,e))}))}return t}function s(t,e){if(null==t)return{};var o,a,n=function(t,e){if(null==t)return{};var o,a,n={},r=Object.keys(t);for(a=0;a<r.length;a++)o=r[a],e.indexOf(o)>=0||(n[o]=t[o]);return n}(t,e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);for(a=0;a<r.length;a++)o=r[a],e.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(t,o)&&(n[o]=t[o])}return n}var l=a.createContext({}),p=function(t){var e=a.useContext(l),o=e;return t&&(o="function"==typeof t?t(e):i(i({},e),t)),o},u=function(t){var e=p(t.components);return a.createElement(l.Provider,{value:e},t.children)},m="mdxType",c={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},f=a.forwardRef((function(t,e){var o=t.components,n=t.mdxType,r=t.originalType,l=t.parentName,u=s(t,["components","mdxType","originalType","parentName"]),m=p(o),f=n,k=m["".concat(l,".").concat(f)]||m[f]||c[f]||r;return o?a.createElement(k,i(i({ref:e},u),{},{components:o})):a.createElement(k,i({ref:e},u))}));function k(t,e){var o=arguments,n=e&&e.mdxType;if("string"==typeof t||n){var r=o.length,i=new Array(r);i[0]=f;var s={};for(var l in e)hasOwnProperty.call(e,l)&&(s[l]=e[l]);s.originalType=t,s[m]="string"==typeof t?t:n,i[1]=s;for(var p=2;p<r;p++)i[p]=o[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,o)}f.displayName="MDXCreateElement"},8444:(t,e,o)=>{o.r(e),o.d(e,{assets:()=>l,contentTitle:()=>i,default:()=>c,frontMatter:()=>r,metadata:()=>s,toc:()=>p});var a=o(7462),n=(o(7294),o(3905));const r={slug:"rufus-bootable-usb",title:"How to create a bootable USB with Rufus ?",authors:["cipriyo","palayogo"],tags:["Rufus","Bootable USB","USB stick","ISO file"],hide_table_of_contents:!0},i=void 0,s={permalink:"/blog/rufus-bootable-usb",source:"@site/blog/2024-03-12-rufus-bootable-usb/index.md",title:"How to create a bootable USB with Rufus ?",description:"This post is not sponsored by Rufus.",date:"2024-03-12T00:00:00.000Z",formattedDate:"March 12, 2024",tags:[{label:"Rufus",permalink:"/blog/tags/rufus"},{label:"Bootable USB",permalink:"/blog/tags/bootable-usb"},{label:"USB stick",permalink:"/blog/tags/usb-stick"},{label:"ISO file",permalink:"/blog/tags/iso-file"}],readingTime:2.27,hasTruncateMarker:!1,authors:[{name:"Cipriyo",title:"CEO",url:"https://github.com/cipriyo",imageURL:"/img/cipriyo_avatar.jpg",key:"cipriyo"},{name:"Palayogo",url:"https://github.com/palayogo",imageURL:"/img/palayogo_avatar.png",key:"palayogo"}],frontMatter:{slug:"rufus-bootable-usb",title:"How to create a bootable USB with Rufus ?",authors:["cipriyo","palayogo"],tags:["Rufus","Bootable USB","USB stick","ISO file"],hide_table_of_contents:!0},nextItem:{title:"Welcome to the Palayogo blog",permalink:"/blog/welcome"}},l={authorsImageUrls:[void 0,void 0]},p=[{value:"1: Download Rufus :",id:"1-download-rufus-",level:3},{value:"2: Download an operating system image :",id:"2-download-an-operating-system-image-",level:3},{value:"3: Flash the image on your USB stick :",id:"3-flash-the-image-on-your-usb-stick-",level:3}],u={toc:p},m="wrapper";function c(t){let{components:e,...r}=t;return(0,n.kt)(m,(0,a.Z)({},u,r,{components:e,mdxType:"MDXLayout"}),(0,n.kt)("admonition",{type:"note"},(0,n.kt)("p",{parentName:"admonition"},"This post is ",(0,n.kt)("strong",{parentName:"p"},"not sponsored by ",(0,n.kt)("a",{parentName:"strong",href:"https://rufus.ie/"},"Rufus")),"."),(0,n.kt)("hr",{parentName:"admonition"}),(0,n.kt)("p",{parentName:"admonition"},"Rufus\xae\ufe0f is \xa9\ufe0f Rufus.")),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Rufus logo",src:o(4749).Z,width:"512",height:"512"})),(0,n.kt)("h1",{id:"what-is-rufus-"},"What is ",(0,n.kt)("a",{parentName:"h1",href:"https://rufus.ie/"},"Rufus")," ?"),(0,n.kt)("p",null,"Rufus is a ",(0,n.kt)("strong",{parentName:"p"},"free")," and ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/pbatard/rufus"},(0,n.kt)("strong",{parentName:"a"},"open source"))," tool, that allow to make a bootable USB stick for any portable or not operating system ",(0,n.kt)("strong",{parentName:"p"},"(.iso, .img, ...)"),".\nThe new bootable USB stick can now be booted from the ",(0,n.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/BIOS"},"BIOS"),"/",(0,n.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/UEFI"},"UEFI"),' of your computer.\nThis will boot the "flashed" operating system image in you bootable USB stick.'),(0,n.kt)("h1",{id:"how-to-use-rufus-and-make-a-bootable-usb-stick-"},"How to use ",(0,n.kt)("a",{parentName:"h1",href:"https://rufus.ie/"},"Rufus")," and make a bootable USB stick ?"),(0,n.kt)("h3",{id:"1-download-rufus-"},"1: Download Rufus :"),(0,n.kt)("admonition",{title:"Prerequisites",type:"caution"},(0,n.kt)("p",{parentName:"admonition"},"You will need a ",(0,n.kt)("strong",{parentName:"p"},"USB stick")," with at least ",(0,n.kt)("strong",{parentName:"p"},"4GB of free space")," (",(0,n.kt)("strong",{parentName:"p"},"I recommend 8GB or 16GB")," of free space).")),(0,n.kt)("admonition",{title:"USB Stick format",type:"caution"},(0,n.kt)("p",{parentName:"admonition"},'During the "flash" of an image with Rufus on your USB stick, ',(0,n.kt)("strong",{parentName:"p"},"you will have to format your usb stick"),", so please ",(0,n.kt)("strong",{parentName:"p"},"make a copy/backup of your files that are saved in you USB stick"),".")),(0,n.kt)("p",null,"To start go to the ",(0,n.kt)("a",{parentName:"p",href:"https://rufus.ie/"},"Rufus website")," to download the Rufus ",(0,n.kt)("strong",{parentName:"p"},".exe")," tool."),(0,n.kt)("p",null,"Once on website, ",(0,n.kt)("strong",{parentName:"p"},"scroll down"),". Then click on the portable version or not of Rufus ",(0,n.kt)("strong",{parentName:"p"},"with your processor architecture")," (",(0,n.kt)("a",{parentName:"p",href:"https://support.microsoft.com/en-gb/windows/32-bit-and-64-bit-windows-frequently-asked-questions-c6ca9541-8dce-4d48-0415-94a3faa2e13d"},"How do I find my processor architecture?"),")."),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Rufus download options",src:o(1977).Z,width:"754",height:"304"})),(0,n.kt)("p",null,"The download will now begin."),(0,n.kt)("h3",{id:"2-download-an-operating-system-image-"},"2: Download an operating system image :"),(0,n.kt)("p",null,"Go to the the ",(0,n.kt)("strong",{parentName:"p"},"website of the operating system")," you want to ",(0,n.kt)("strong",{parentName:"p"},'"flash"'),", then go to the ",(0,n.kt)("strong",{parentName:"p"},"download page")," and download the ",(0,n.kt)("strong",{parentName:"p"},".iso/.img")," file."),(0,n.kt)("p",null,"Here is a list of ",(0,n.kt)("strong",{parentName:"p"},"populars operating systems")," that you can download :"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/blog/how_to_download_win_11"},"Windows 11")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://ubuntu.com/desktop"},"Ubuntu")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://www.debian.org/"},"Debian")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://fedoraproject.org/workstation/download"},"Fedora Linux")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://linuxmint.com/download.php"},"Linux Mint")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://ubuntu.com/server"},"Ubuntu Server"))),(0,n.kt)("h3",{id:"3-flash-the-image-on-your-usb-stick-"},"3: Flash the image on your USB stick :"),(0,n.kt)("p",null,"To ",(0,n.kt)("strong",{parentName:"p"},'"flash" the operating system image')," on your ",(0,n.kt)("strong",{parentName:"p"},"USB stick")," with ",(0,n.kt)("strong",{parentName:"p"},"Rufus"),", follow these steps:"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Insert your USB stick into your computer."),(0,n.kt)("li",{parentName:"ol"},"Open the Rufus application."),(0,n.kt)("li",{parentName:"ol"},"In Rufus, ",(0,n.kt)("strong",{parentName:"li"},"select your USB stick as the target device to flash"),"."),(0,n.kt)("li",{parentName:"ol"},'Click on "Select" and ',(0,n.kt)("strong",{parentName:"li"},"browse to the .iso or .img file you downloaded earlier"),". Select that file."),(0,n.kt)("li",{parentName:"ol"},"Ensure the other options are correct:",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"File system should be ",(0,n.kt)("strong",{parentName:"li"},"FAT32 for UEFI")," or ",(0,n.kt)("strong",{parentName:"li"},"NTFS for BIOS"),". ",(0,n.kt)("strong",{parentName:"li"},"If you don't know what to choose don't change this and let Rufus choose"),"."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Cluster size")," should be ",(0,n.kt)("strong",{parentName:"li"},"default")))),(0,n.kt)("li",{parentName:"ol"},"Click Start. This will begin the ",(0,n.kt)("strong",{parentName:"li"},"flashing process")," and ",(0,n.kt)("strong",{parentName:"li"},"may take several minutes"),"."),(0,n.kt)("li",{parentName:"ol"},"Once complete, close Rufus and ",(0,n.kt)("strong",{parentName:"li"},"eject your USB stick"),". It is now a bootable USB stick with your selected operating system image.")),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Rufus flashing utility",src:o(5329).Z,width:"530",height:"559"})),(0,n.kt)("p",null,"You can now go into your computer's BIOS/UEFI and select to boot from the USB stick to launch that operating system."),(0,n.kt)("p",null,"Thanks for reading"),(0,n.kt)("admonition",{type:"info"},(0,n.kt)("p",{parentName:"admonition"},"All operating systems in the list above do not belong to me and are mostly \xa9\ufe0f.")))}c.isMDXComponent=!0},1977:(t,e,o)=>{o.d(e,{Z:()=>a});const a=o.p+"assets/images/Rufus-dl-options-1fd79d257a6780297475e59450a9acc9.png"},5329:(t,e,o)=>{o.d(e,{Z:()=>a});const a=o.p+"assets/images/Rufus-flash-options-eb28fa9f01662604d99e635de40ad070.png"},4749:(t,e,o)=>{o.d(e,{Z:()=>a});const a=o.p+"assets/images/Rufus-logo-1610305d1dd4b6f2d1551d4d28d56b8a.png"}}]);