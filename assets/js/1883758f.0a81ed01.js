"use strict";(self.webpackChunkweb=self.webpackChunkweb||[]).push([[1442],{3905:(e,n,t)=>{t.d(n,{Zo:()=>c,kt:()=>f});var a=t(7294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var s=a.createContext({}),p=function(e){var n=a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},c=function(e){var n=p(e.components);return a.createElement(s.Provider,{value:n},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},d=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=p(t),d=r,f=u["".concat(s,".").concat(d)]||u[d]||m[d]||i;return t?a.createElement(f,o(o({ref:n},c),{},{components:t})):a.createElement(f,o({ref:n},c))}));function f(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=t.length,o=new Array(i);o[0]=d;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l[u]="string"==typeof e?e:r,o[1]=l;for(var p=2;p<i;p++)o[p]=t[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,t)}d.displayName="MDXCreateElement"},6138:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>o,default:()=>m,frontMatter:()=>i,metadata:()=>l,toc:()=>p});var a=t(7462),r=(t(7294),t(3905));const i={sidebar_position:1},o="Nix (Package Manager)",l={unversionedId:"nix/intro",id:"nix/intro",title:"Nix (Package Manager)",description:"Nix is a powerful package manager for Linux and other Unix systems that makes package management reliable and reproducible. It provides atomic upgrades and rollbacks, side-by-side installation of multiple versions of a package, multi-user package management and easy setup of build environments.",source:"@site/docs/nix/intro.md",sourceDirName:"nix",slug:"/nix/intro",permalink:"/personal-docs/docs/nix/intro",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/nix/intro.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Nix (Package Manager)",permalink:"/personal-docs/docs/category/nix-package-manager"},next:{title:"post-install",permalink:"/personal-docs/docs/nix/post-install"}},s={},p=[{value:"My use case",id:"my-use-case",level:2},{value:"Installation",id:"installation",level:2},{value:"Uninstall",id:"uninstall",level:2},{value:"Setup <code>nix-env</code>",id:"setup-nix-env",level:2}],c={toc:p},u="wrapper";function m(e){let{components:n,...t}=e;return(0,r.kt)(u,(0,a.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"nix-package-manager"},"Nix (Package Manager)"),(0,r.kt)("p",null,"Nix is a powerful package manager for Linux and other Unix systems that makes package management reliable and reproducible. It provides atomic upgrades and rollbacks, side-by-side installation of multiple versions of a package, multi-user package management and easy setup of build environments."),(0,r.kt)("h2",{id:"my-use-case"},"My use case"),(0,r.kt)("p",null,"I have been using ",(0,r.kt)("inlineCode",{parentName:"p"},"homebrew")," as a package manager on my mac, and by extention a subset of the same packages can be installed on linux too. This allows me to setup scripts to auto-install all my required tools and softwares on a new device. However dependency-pinning and management on it has been bad, and accidental upgrades are disrupting my workflow."),(0,r.kt)("p",null,"I have been looking at ",(0,r.kt)("inlineCode",{parentName:"p"},"nix")," for a while now and it seems to be a good fit for my use case. I will be using ",(0,r.kt)("inlineCode",{parentName:"p"},"nix")," to manage my packages and tools on my mac and linux machines, alongside (atleast for now) ",(0,r.kt)("inlineCode",{parentName:"p"},"homebrew")," since a few packages are still only on ",(0,r.kt)("inlineCode",{parentName:"p"},"homebrew")," (",(0,r.kt)("inlineCode",{parentName:"p"},"yabai")," the Tiling WM that I make use of for example)."),(0,r.kt)("h2",{id:"installation"},"Installation"),(0,r.kt)("p",null,"I came across this new custom implementation of the Nix Installer from ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/DeterminateSystems/nix-installer"},"Determinate Systems")," which offers a safe uninstall path and better out-of-the-box experience. Plus the installer is built on ",(0,r.kt)("inlineCode",{parentName:"p"},"rust")," instead of ",(0,r.kt)("inlineCode",{parentName:"p"},"bash"),"."),(0,r.kt)("p",null,"Follow the instructions from their ",(0,r.kt)("a",{parentName:"p",href:"https://zero-to-nix.com/start/install"},"Zero to Nix Guide")," it is also a handy guide and entry point into ",(0,r.kt)("inlineCode",{parentName:"p"},"nix"),"."),(0,r.kt)("p",null,"Start by running the installer:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"curl --proto '=https' --tlsv1.2 -sSf -L https://install.determinate.systems/nix | sh -s -- install\n")),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"No need to run it as ",(0,r.kt)("inlineCode",{parentName:"p"},"root"),", it will self-escalate on execution.")),(0,r.kt)("p",null,"Check if the installation was successful:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"nix --version\n")),(0,r.kt)("h2",{id:"uninstall"},"Uninstall"),(0,r.kt)("p",null,"Just run:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"/nix/nix-installer uninstall\n")),(0,r.kt)("h2",{id:"setup-nix-env"},"Setup ",(0,r.kt)("inlineCode",{parentName:"h2"},"nix-env")),(0,r.kt)("p",null,"Run this only once after installation:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"nix-env --install\n")))}m.isMDXComponent=!0}}]);