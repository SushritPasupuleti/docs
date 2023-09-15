"use strict";(self.webpackChunkweb=self.webpackChunkweb||[]).push([[7467],{3905:(e,l,t)=>{t.d(l,{Zo:()=>d,kt:()=>b});var n=t(7294);function k(e,l,t){return l in e?Object.defineProperty(e,l,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[l]=t,e}function a(e,l){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);l&&(n=n.filter((function(l){return Object.getOwnPropertyDescriptor(e,l).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var l=1;l<arguments.length;l++){var t=null!=arguments[l]?arguments[l]:{};l%2?a(Object(t),!0).forEach((function(l){k(e,l,t[l])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(l){Object.defineProperty(e,l,Object.getOwnPropertyDescriptor(t,l))}))}return e}function r(e,l){if(null==e)return{};var t,n,k=function(e,l){if(null==e)return{};var t,n,k={},a=Object.keys(e);for(n=0;n<a.length;n++)t=a[n],l.indexOf(t)>=0||(k[t]=e[t]);return k}(e,l);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)t=a[n],l.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(k[t]=e[t])}return k}var u=n.createContext({}),o=function(e){var l=n.useContext(u),t=l;return e&&(t="function"==typeof e?e(l):i(i({},l),e)),t},d=function(e){var l=o(e.components);return n.createElement(u.Provider,{value:l},e.children)},s="mdxType",p={inlineCode:"code",wrapper:function(e){var l=e.children;return n.createElement(n.Fragment,{},l)}},c=n.forwardRef((function(e,l){var t=e.components,k=e.mdxType,a=e.originalType,u=e.parentName,d=r(e,["components","mdxType","originalType","parentName"]),s=o(t),c=k,b=s["".concat(u,".").concat(c)]||s[c]||p[c]||a;return t?n.createElement(b,i(i({ref:l},d),{},{components:t})):n.createElement(b,i({ref:l},d))}));function b(e,l){var t=arguments,k=l&&l.mdxType;if("string"==typeof e||k){var a=t.length,i=new Array(a);i[0]=c;var r={};for(var u in l)hasOwnProperty.call(l,u)&&(r[u]=l[u]);r.originalType=e,r[s]="string"==typeof e?e:k,i[1]=r;for(var o=2;o<a;o++)i[o]=t[o];return n.createElement.apply(null,i)}return n.createElement.apply(null,t)}c.displayName="MDXCreateElement"},5818:(e,l,t)=>{t.r(l),t.d(l,{assets:()=>u,contentTitle:()=>i,default:()=>p,frontMatter:()=>a,metadata:()=>r,toc:()=>o});var n=t(7462),k=(t(7294),t(3905));const a={sidebar_position:1},i="Neovim",r={unversionedId:"tools/neovim",id:"tools/neovim",title:"Neovim",description:"My blazingly fast Neovim configuration. See the config here.",source:"@site/docs/tools/neovim.md",sourceDirName:"tools",slug:"/tools/neovim",permalink:"/personal-docs/docs/tools/neovim",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/tools/neovim.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Tools",permalink:"/personal-docs/docs/category/tools"},next:{title:"Proxmox",permalink:"/personal-docs/docs/category/proxmox"}},u={},o=[{value:"What&#39;s included",id:"whats-included",level:2},{value:"Keybindings",id:"keybindings",level:2},{value:"Basics",id:"basics",level:3},{value:"Undo/Redo",id:"undoredo",level:3},{value:"Undo Tree",id:"undo-tree",level:4},{value:"Search and Highlight",id:"search-and-highlight",level:3},{value:"Copy/Paste/Select",id:"copypasteselect",level:3},{value:"Copy/Paste Across Terminals",id:"copypaste-across-terminals",level:4},{value:"For Tiling",id:"for-tiling",level:3},{value:"Shift Lines/Blocks",id:"shift-linesblocks",level:3},{value:"Telescope",id:"telescope",level:3},{value:"LSP",id:"lsp",level:3},{value:"Diagnostics",id:"diagnostics",level:4},{value:"Misc",id:"misc",level:3},{value:"Multiple Cursors",id:"multiple-cursors",level:3},{value:"Find and Replace",id:"find-and-replace",level:2},{value:"Tools",id:"tools",level:2}],d={toc:o},s="wrapper";function p(e){let{components:l,...t}=e;return(0,k.kt)(s,(0,n.Z)({},d,t,{components:l,mdxType:"MDXLayout"}),(0,k.kt)("h1",{id:"neovim"},"Neovim"),(0,k.kt)("p",null,"My blazingly fast Neovim configuration. See the config ",(0,k.kt)("a",{parentName:"p",href:"https://github.com/SushritPasupuleti/dots/tree/main/nvim"},"here"),"."),(0,k.kt)("h2",{id:"whats-included"},"What's included"),(0,k.kt)("ul",null,(0,k.kt)("li",{parentName:"ul"},(0,k.kt)("p",{parentName:"li"},(0,k.kt)("inlineCode",{parentName:"p"},"LazyVim")," to load plugins on demand. Produces a startup time of ~70ms in my case.")),(0,k.kt)("li",{parentName:"ul"},(0,k.kt)("p",{parentName:"li"},(0,k.kt)("inlineCode",{parentName:"p"},"LSP")," managed via Mason (Node, Go, Python, Rust, and the usual).")),(0,k.kt)("li",{parentName:"ul"},(0,k.kt)("p",{parentName:"li"},(0,k.kt)("inlineCode",{parentName:"p"},"null-ls")," for LSP integrations like linting, code formatting.")),(0,k.kt)("li",{parentName:"ul"},(0,k.kt)("p",{parentName:"li"},(0,k.kt)("inlineCode",{parentName:"p"},"Treesitter")," for syntax highlighting.")),(0,k.kt)("li",{parentName:"ul"},(0,k.kt)("p",{parentName:"li"},(0,k.kt)("inlineCode",{parentName:"p"},"Telescope")," for fuzzy finding.")),(0,k.kt)("li",{parentName:"ul"},(0,k.kt)("p",{parentName:"li"},(0,k.kt)("inlineCode",{parentName:"p"},"LazyGit")," for git integration.")),(0,k.kt)("li",{parentName:"ul"},(0,k.kt)("p",{parentName:"li"},(0,k.kt)("inlineCode",{parentName:"p"},"WhichKey")," for keybindings.")),(0,k.kt)("li",{parentName:"ul"},(0,k.kt)("p",{parentName:"li"},"And more..."))),(0,k.kt)("h2",{id:"keybindings"},"Keybindings"),(0,k.kt)("p",null,"All keyboard shortcuts so far."),(0,k.kt)("kbd",null,",")," is Leader.",(0,k.kt)("h3",{id:"basics"},"Basics"),(0,k.kt)("ul",null,(0,k.kt)("li",{parentName:"ul"},(0,k.kt)("kbd",null,":")," ",(0,k.kt)("kbd",null,"!")," To execute external commands."),(0,k.kt)("li",{parentName:"ul"},(0,k.kt)("kbd",null,"x")," In _Normal_ or _Visual_ Mode - Delete Character under cursor."),(0,k.kt)("li",{parentName:"ul"},(0,k.kt)("kbd",null,"d")," ",(0,k.kt)("kbd",null,"w")," To delete word under cursor."),(0,k.kt)("li",{parentName:"ul"},(0,k.kt)("kbd",null,"d")," ",(0,k.kt)("kbd",null,"$")," Delete from current position to end of line."),(0,k.kt)("li",{parentName:"ul"},(0,k.kt)("kbd",null,"'n'")," ",(0,k.kt)("kbd",null,"d")," ",(0,k.kt)("kbd",null,"d")," Delete next 'n' lines."),(0,k.kt)("li",{parentName:"ul"},(0,k.kt)("kbd",null,"r")," followed by any character will replace the character under cursor."),(0,k.kt)("li",{parentName:"ul"},(0,k.kt)("kbd",null,"R")," Multiple Replace."),(0,k.kt)("li",{parentName:"ul"},(0,k.kt)("kbd",null,"c")," ",(0,k.kt)("kbd",null,"w")," Delete rest of the word and enter _Insert_ mode. It accepts `$` just like delete."),(0,k.kt)("li",{parentName:"ul"},(0,k.kt)("kbd",null,"<")," Unindent line."),(0,k.kt)("li",{parentName:"ul"},(0,k.kt)("kbd",null,">")," Indent line."),(0,k.kt)("li",{parentName:"ul"},(0,k.kt)("kbd",null,"%")," Goto matching `()[]","`."),(0,k.kt)("li",{parentName:"ul"},(0,k.kt)("kbd",null,"g")," ",(0,k.kt)("kbd",null,"g")," First line of file."),(0,k.kt)("li",{parentName:"ul"},(0,k.kt)("kbd",null,"G")," Last line of file.")),(0,k.kt)("h3",{id:"undoredo"},"Undo/Redo"),(0,k.kt)("p",null,"Use ",(0,k.kt)("inlineCode",{parentName:"p"},":u")," and ",(0,k.kt)("inlineCode",{parentName:"p"},":r")," respectively. Or use ",(0,k.kt)("kbd",null,"u")," and ",(0,k.kt)("kbd",null,"r")," from ",(0,k.kt)("inlineCode",{parentName:"p"},"command")," mode."),(0,k.kt)("p",null,"Use ",(0,k.kt)("kbd",null,"U")," to undo all changes in line."),(0,k.kt)("h4",{id:"undo-tree"},"Undo Tree"),(0,k.kt)("kbd",null,",")," ",(0,k.kt)("kbd",null,"z")," Toggle Undo Tree.",(0,k.kt)("h3",{id:"search-and-highlight"},"Search and Highlight"),(0,k.kt)("p",null,"In ",(0,k.kt)("inlineCode",{parentName:"p"},"command")," mode. Press ",(0,k.kt)("kbd",null,"/")," to enter search. Now type a regex pattern you would like to search. Use ",(0,k.kt)("kbd",null,"?")," for reverse direction search."),(0,k.kt)("p",null,"Navigate results with ",(0,k.kt)("kbd",null,"n")," and ",(0,k.kt)("kbd",null,"N")),(0,k.kt)("p",null,"Clear the selections by using ",(0,k.kt)("inlineCode",{parentName:"p"},":noh"),"."),(0,k.kt)("h3",{id:"copypasteselect"},"Copy/Paste/Select"),(0,k.kt)("p",null,"To select any text, you must enter ",(0,k.kt)("inlineCode",{parentName:"p"},"visual")," mode. Press ",(0,k.kt)("kbd",null,"v")," in ",(0,k.kt)("inlineCode",{parentName:"p"},"normal")," mode for this."),(0,k.kt)("ul",null,(0,k.kt)("li",{parentName:"ul"},(0,k.kt)("p",{parentName:"li"},"Use arrow keys to expand the selection.")),(0,k.kt)("li",{parentName:"ul"},(0,k.kt)("kbd",null,"d")," Deletes the selection."),(0,k.kt)("li",{parentName:"ul"},(0,k.kt)("kbd",null,"y"),' "yank"/copy the selection.'),(0,k.kt)("li",{parentName:"ul"},(0,k.kt)("kbd",null,"p")," Paste the selection. ",(0,k.kt)("kbd",null,"p")," will _put_ any recently deleted line with ",(0,k.kt)("kbd",null,"dd")," if it was deleted after a _yank_. Handy Cut/Paste."),(0,k.kt)("li",{parentName:"ul"},(0,k.kt)("p",{parentName:"li"},"Search by using these 4 in conjuntion on the selected text: ",(0,k.kt)("kbd",null,"y")," ",(0,k.kt)("kbd",null,"q")," ",(0,k.kt)("kbd",null,"/")," ",(0,k.kt)("kbd",null,"p"))),(0,k.kt)("li",{parentName:"ul"},(0,k.kt)("kbd",null,"r")," Replace selection with text you will now type.")),(0,k.kt)("h4",{id:"copypaste-across-terminals"},"Copy/Paste Across Terminals"),(0,k.kt)("p",null,"Use: ",(0,k.kt)("kbd",null,'"')," ",(0,k.kt)("kbd",null,"+ ")," ",(0,k.kt)("kbd",null," y")," and ",(0,k.kt)("kbd",null,'"')," ",(0,k.kt)("kbd",null,"+ ")," ",(0,k.kt)("kbd",null," p")," from ",(0,k.kt)("inlineCode",{parentName:"p"},"visual")," mode."),(0,k.kt)("h3",{id:"for-tiling"},"For Tiling"),(0,k.kt)("ul",null,(0,k.kt)("li",{parentName:"ul"},(0,k.kt)("kbd",null,"Ctrl")," ",(0,k.kt)("kbd",null,"W")," ",(0,k.kt)("kbd",null,"S")," (upper case) for horizontal splitting"),(0,k.kt)("li",{parentName:"ul"},(0,k.kt)("kbd",null,"Ctrl")," ",(0,k.kt)("kbd",null,"W")," ",(0,k.kt)("kbd",null,"v")," (lower case) for vertical splitting"),(0,k.kt)("li",{parentName:"ul"},(0,k.kt)("kbd",null,"Ctrl")," ",(0,k.kt)("kbd",null,"W")," ",(0,k.kt)("kbd",null,"Q")," to close one"),(0,k.kt)("li",{parentName:"ul"},(0,k.kt)("kbd",null,"Ctrl")," ",(0,k.kt)("kbd",null,"W")," ",(0,k.kt)("kbd",null,"Ctrl")," ",(0,k.kt)("kbd",null,"W")," to switch between windows"),(0,k.kt)("li",{parentName:"ul"},(0,k.kt)("kbd",null,"Ctrl")," ",(0,k.kt)("kbd",null,"W")," ",(0,k.kt)("kbd",null,"J")," (",(0,k.kt)("kbd",null,"x")," or ",(0,k.kt)("kbd",null,"K"),", ",(0,k.kt)("kbd",null,"H"),", ",(0,k.kt)("kbd",null,"L"),") to switch to adjacent window (intuitively up, down, left, right)")),(0,k.kt)("h3",{id:"shift-linesblocks"},"Shift Lines/Blocks"),(0,k.kt)("ul",null,(0,k.kt)("li",{parentName:"ul"},(0,k.kt)("kbd",null,"Shift")," ",(0,k.kt)("kbd",null,"k")," to shift line up."),(0,k.kt)("li",{parentName:"ul"},(0,k.kt)("kbd",null,"Shift")," ",(0,k.kt)("kbd",null,"j")," to shift line down.")),(0,k.kt)("h3",{id:"telescope"},"Telescope"),(0,k.kt)("ul",null,(0,k.kt)("li",{parentName:"ul"},(0,k.kt)("kbd",null,",")," ",(0,k.kt)("kbd",null,"f")," ",(0,k.kt)("kbd",null,"f")," Telescope find_files"),(0,k.kt)("li",{parentName:"ul"},(0,k.kt)("kbd",null,",")," ",(0,k.kt)("kbd",null,"f")," ",(0,k.kt)("kbd",null,"g")," Telescope live_grep"),(0,k.kt)("li",{parentName:"ul"},(0,k.kt)("kbd",null,",")," ",(0,k.kt)("kbd",null,"f")," ",(0,k.kt)("kbd",null,"b")," Telescope buffers"),(0,k.kt)("li",{parentName:"ul"},(0,k.kt)("kbd",null,",")," ",(0,k.kt)("kbd",null,"f")," ",(0,k.kt)("kbd",null,"h")," Telescope help/tags"),(0,k.kt)("li",{parentName:"ul"},(0,k.kt)("kbd",null,",")," ",(0,k.kt)("kbd",null,"f")," ",(0,k.kt)("kbd",null,"u")," Telescope URLViewer")),(0,k.kt)("h3",{id:"lsp"},"LSP"),(0,k.kt)("ul",null,(0,k.kt)("li",{parentName:"ul"},(0,k.kt)("kbd",null,",")," ",(0,k.kt)("kbd",null,"r")," ",(0,k.kt)("kbd",null,"n")," Renane w/ GUI."),(0,k.kt)("li",{parentName:"ul"},(0,k.kt)("kbd",null,",")," ",(0,k.kt)("kbd",null,"c")," ",(0,k.kt)("kbd",null,"a")," Code Action w/ GUI."),(0,k.kt)("li",{parentName:"ul"},(0,k.kt)("kbd",null,",")," ",(0,k.kt)("kbd",null,"k")," Hover Docs."),(0,k.kt)("li",{parentName:"ul"},(0,k.kt)("kbd",null,"g")," ",(0,k.kt)("kbd",null,"s")," Signature."),(0,k.kt)("li",{parentName:"ul"},(0,k.kt)("kbd",null,"g")," ",(0,k.kt)("kbd",null,"h")," LSP Finder."),(0,k.kt)("li",{parentName:"ul"},(0,k.kt)("kbd",null,"[")," ",(0,k.kt)("kbd",null,"e")," Previous Diagnostics"),(0,k.kt)("li",{parentName:"ul"},(0,k.kt)("kbd",null,"]")," ",(0,k.kt)("kbd",null,"e")," Next Diagnostics")),(0,k.kt)("h4",{id:"diagnostics"},"Diagnostics"),(0,k.kt)("ul",null,(0,k.kt)("li",{parentName:"ul"},(0,k.kt)("kbd",null,"space")," ",(0,k.kt)("kbd",null,"e")," Open Diagnostics.")),(0,k.kt)("h3",{id:"misc"},"Misc"),(0,k.kt)("ul",null,(0,k.kt)("li",{parentName:"ul"},(0,k.kt)("kbd",null,",")," ",(0,k.kt)("kbd",null,"p")," Activate Glow (Markdown Previewer)"),(0,k.kt)("li",{parentName:"ul"},(0,k.kt)("kbd",null,"space")," ",(0,k.kt)("kbd",null,"z")," Zen Mode Toggle.")),(0,k.kt)("h3",{id:"multiple-cursors"},"Multiple Cursors"),(0,k.kt)("ul",null,(0,k.kt)("li",{parentName:"ul"},(0,k.kt)("kbd",null,"Ctrl")," ",(0,k.kt)("kbd",null,"n")," Select Word under cursor."),(0,k.kt)("li",{parentName:"ul"},(0,k.kt)("kbd",null,"Ctrl")," ",(0,k.kt)("kbd",null,"Up/Down")," Vertically create cursors."),(0,k.kt)("li",{parentName:"ul"},(0,k.kt)("kbd",null,"n")," / ",(0,k.kt)("kbd",null,"N")," Goto Next/Previous occurence."),(0,k.kt)("li",{parentName:"ul"},(0,k.kt)("kbd",null,"[")," ",(0,k.kt)("kbd",null,"]")," Select Next/Previous cursor."),(0,k.kt)("li",{parentName:"ul"},(0,k.kt)("kbd",null,"q")," Skip current and get next occurence."),(0,k.kt)("li",{parentName:"ul"},(0,k.kt)("kbd",null,"Q")," Remove current cursor."),(0,k.kt)("li",{parentName:"ul"},(0,k.kt)("kbd",null,"a")," / ",(0,k.kt)("kbd",null,"i")," Insert mode.")),(0,k.kt)("h2",{id:"find-and-replace"},"Find and Replace"),(0,k.kt)("p",null,"Uses Spectre"),(0,k.kt)("ul",null,(0,k.kt)("li",{parentName:"ul"},(0,k.kt)("kbd",null,",")," ",(0,k.kt)("kbd",null,"S")," Toggles Spectre (No context)."),(0,k.kt)("li",{parentName:"ul"},(0,k.kt)("kbd",null,",")," ",(0,k.kt)("kbd",null,"s")," ",(0,k.kt)("kbd",null,"w")," Toggles Spectre with word under cursor as context.")),(0,k.kt)("p",null,"Once you've made entries, navigate to the line and use:"),(0,k.kt)("ul",null,(0,k.kt)("li",{parentName:"ul"},(0,k.kt)("kbd",null,",")," ",(0,k.kt)("kbd",null,"r")," ",(0,k.kt)("kbd",null,"c")," Replace in current line."),(0,k.kt)("li",{parentName:"ul"},(0,k.kt)("kbd",null,",")," ",(0,k.kt)("kbd",null,"R")," Replace all."),(0,k.kt)("li",{parentName:"ul"},(0,k.kt)("kbd",null,",")," ",(0,k.kt)("kbd",null,"Enter")," Go to File."),(0,k.kt)("li",{parentName:"ul"},(0,k.kt)("kbd",null,",")," ",(0,k.kt)("kbd",null,"o")," Show options.")),(0,k.kt)("h2",{id:"tools"},"Tools"),(0,k.kt)("ul",null,(0,k.kt)("li",{parentName:"ul"},(0,k.kt)("kbd",null,",")," ",(0,k.kt)("kbd",null,"g")," ",(0,k.kt)("kbd",null,"g")," Toggle Lazygit"),(0,k.kt)("li",{parentName:"ul"},(0,k.kt)("kbd",null,",")," ",(0,k.kt)("kbd",null,"g")," ",(0,k.kt)("kbd",null,"z")," Toggle czg"),(0,k.kt)("li",{parentName:"ul"},(0,k.kt)("kbd",null,",")," ",(0,k.kt)("kbd",null,"e")," Emoji Picker \ud83d\ude80")))}p.isMDXComponent=!0}}]);