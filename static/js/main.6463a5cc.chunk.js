(this["webpackJsonptfjs-web-app"]=this["webpackJsonptfjs-web-app"]||[]).push([[0],{308:function(e,t,s){},312:function(e,t,s){},319:function(e,t){},320:function(e,t){},328:function(e,t){},331:function(e,t){},332:function(e,t){},333:function(e,t,s){},337:function(e,t,s){},338:function(e,t,s){},341:function(e,t,s){},342:function(e,t,s){"use strict";s.r(t);var a=s(5),n=s(9),i=s(13),o=s(14),r=s(10),c=s(159),l=s.n(c),d=s(125),h=(s(307),s(308),s(50)),b=s(346),p=s(349),j=s(299),u=s(350),m=s(18),f=function(e){Object(i.a)(s,e);var t=Object(o.a)(s);function s(){return Object(a.a)(this,s),t.apply(this,arguments)}return Object(n.a)(s,[{key:"render",value:function(){return this.props.show?Object(m.jsxs)(u.a,{variant:this.props.variant||"danger",onClose:this.props.onClose,dismissible:!0,children:[this.props.title&&Object(m.jsx)("h5",{children:Object(m.jsx)("strong",{children:this.props.title})}),Object(m.jsx)("div",{dangerouslySetInnerHTML:{__html:this.props.message}})]}):null}}]),s}(r.Component),x=(s(312),function(e){Object(i.a)(s,e);var t=Object(o.a)(s);function s(){return Object(a.a)(this,s),t.apply(this,arguments)}return Object(n.a)(s,[{key:"render",value:function(){return Object(m.jsxs)("div",{className:"About container",children:[Object(m.jsx)("h1",{children:"About"}),Object(m.jsx)("p",{children:Object(m.jsx)("b",{children:"Our Product"})}),Object(m.jsxs)("p",{children:["EWH Portable Microscopy Software for Parasitic Infection Diagnosis This is a TensorFlow.js web application where users can classify images selected locally or taken with their device's camera. The app uses TensorFlow.js and a pre-trained model converted to the TensorFlow.js format to provide the inference capabilities. This model is saved locally in the browser using IndexedDB. A service worker is also used to provide offline capabilities.",Object(m.jsx)("br",{}),Object(m.jsx)("br",{}),"The Portable Microscopy team of Engineering World Health (EWH) UCSD Chapter 2020-2021 developed and trained a convolutional neural network to identify soil transmitted helminths in fecal samples. Soil transmitted helminth infections affect nearly 1 billion people globally, and are typically treated through mass drug administration without diagnosis. Through this webpage, you can upload images of fecal samples and our network will check for Soil Transmitted Helminths and output a diagnosis.",Object(m.jsx)("br",{}),Object(m.jsx)("br",{})]}),Object(m.jsx)("p",{children:Object(m.jsx)("b",{children:"Our Team"})}),Object(m.jsx)("p",{children:"The Portable Microscopy team of Engineering World Health (EWH) UCSD Chapter 2020-2021"}),Object(m.jsx)("h1",{children:"Contact Us for Suggestions"}),Object(m.jsxs)("p",{children:["If you\u2019d like to contact us for any clarifications, questions, or suggestions to this webpage and/or convolutional neural network, please contact us at",Object(m.jsx)("br",{}),"- rkunowsk@ucsd.edu",Object(m.jsx)("br",{}),"- s2pai@ucsd.edu",Object(m.jsx)("br",{}),"Or fill out this google form:",Object(m.jsx)("a",{href:"//forms.gle/5vp3nQWbFB64kzQR9",children:" Google Form for Suggestions or Questions"})]})]})}}]),s}(r.Component)),O=s(4),g=s.n(O),w=s(12),v=s(345),y=s(344),k=s(297),S=s(351),C=s(347),T=s(348),A=s(352),U=s(228),N=s(300),I=s(277),M=s.n(I),W=s(67),H=s(233),L=s(301),F=function(e){var t=e.isLoading,s=e.text,a=e.loadingText,n=e.className,i=void 0===n?"":n,o=e.disabled,r=void 0!==o&&o,c=Object(L.a)(e,["isLoading","text","loadingText","className","disabled"]);return Object(m.jsxs)(y.a,Object(H.a)(Object(H.a)({className:"LoadButton ".concat(i),disabled:r||t},c),{},{children:[t&&Object(m.jsx)(v.a,{as:"span",animation:"border",size:"sm",role:"status","aria-hidden":"true"})," ",t?a:s]}))},D={0:"Negative for STH",1:"Hookwork",2:"Ascaris",3:"Trichuris",4:"Positive for STH",5:"Inconclusive: Please run again"},P="http://localhost:5000/api",B=(s(333),s(334),"/model/model.json"),z=100,E=224,K="model_info_store",_="web-model",G=function(e){Object(i.a)(s,e);var t=Object(o.a)(s);function s(e){var n;return Object(a.a)(this,s),(n=t.call(this,e)).initWebcam=Object(w.a)(g.a.mark((function e(){return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,W.b.webcam(n.refs.webcam,{resizeWidth:E,resizeHeight:E,facingMode:"environment"});case 3:n.webcam=e.sent,e.next=9;break;case 6:e.prev=6,e.t0=e.catch(0),n.refs.noWebcam.style.display="block";case 9:case"end":return e.stop()}}),e,null,[[0,6]])}))),n.startWebcam=Object(w.a)(g.a.mark((function e(){return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:n.webcam&&n.webcam.start();case 1:case"end":return e.stop()}}),e)}))),n.stopWebcam=Object(w.a)(g.a.mark((function e(){return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:n.webcam&&n.webcam.stop();case 1:case"end":return e.stop()}}),e)}))),n.getModelInfo=Object(w.a)(g.a.mark((function e(){return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(P,"/model_info"),{method:"GET"}).then(function(){var e=Object(w.a)(g.a.mark((function e(t){return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.json().then((function(e){n.modelLastUpdated=e.last_updated})).catch((function(e){console.log("Unable to get parse model info.")}));case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()).catch((function(e){console.log("Unable to get model info")}));case 2:case"end":return e.stop()}}),e)}))),n.updateModel=Object(w.a)(g.a.mark((function e(){return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("Updating the model: web-model"),n.setState({isDownloadingModel:!0}),e.next=4,W.d(B);case 4:return n.model=e.sent,e.next=7,n.model.save("indexeddb://web-model");case 7:n.setState({isDownloadingModel:!1,modelUpdateAvailable:!1,showModelUpdateAlert:!1,showModelUpdateSuccess:!0});case 8:case"end":return e.stop()}}),e)}))),n.classifyLocalImage=Object(w.a)(g.a.mark((function e(){var t,s,a,i,o,r,c,l,d,h,b;return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n.setState({isClassifying:!0}),t=n.refs.cropper.getCroppedCanvas(),s=W.e((function(){return W.a.fromPixels(t).toFloat()})),e.next=5,n.processImage(s);case 5:return a=e.sent,i=W.c.resizeBilinear(a,[z,z]),o=n.model.predict(i),e.next=10,o.data();case 10:return r=e.sent,e.next=13,n.getTopKClasses(r,1);case 13:c=e.sent,n.setState({predictions:c,isClassifying:!1,photoSettingsOpen:!n.state.photoSettingsOpen}),l=n.refs.canvas.getContext("2d"),d=E/t.width,h=E/t.height,b=Math.min(d,h),l.clearRect(0,0,E,E),l.drawImage(t,0,0,t.width*b,t.height*b),s.dispose(),a.dispose(),i.dispose(),o.dispose();case 25:case"end":return e.stop()}}),e)}))),n.classifyWebcamImage=Object(w.a)(g.a.mark((function e(){var t,s,a,i,o,r,c;return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n.setState({isClassifying:!0}),e.next=3,n.webcam.capture();case 3:return t=e.sent,s=W.c.resizeBilinear(t,[z,z]),e.next=7,n.processImage(s);case 7:return a=e.sent,i=n.model.predict(a),e.next=11,i.data();case 11:return o=e.sent,e.next=14,n.getTopKClasses(o,1);case 14:return r=e.sent,n.setState({predictions:r,isClassifying:!1,photoSettingsOpen:!n.state.photoSettingsOpen}),c=W.e((function(){return t.toFloat().div(255)})),e.next=19,W.a.toPixels(c,n.refs.canvas);case 19:s.dispose(),t.dispose(),a.dispose(),i.dispose(),c.dispose();case 24:case"end":return e.stop()}}),e)}))),n.processImage=function(){var e=Object(w.a)(g.a.mark((function e(t){return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",W.e((function(){return t.expandDims(0).toFloat()})));case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),n.getTopKClasses=function(){var e=Object(w.a)(g.a.mark((function e(t,s){var a,n,i,o,r,c,l,d,h,b;return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(a=[],t.length>1){for(n=[],i=0;i<t.length;i++)n.push({value:t[i],index:i});for(n.sort((function(e,t){return t.value-e.value})),o=new Float32Array(s),r=new Int32Array(s),c=0;c<s;c++)o[c]=n[c].value,r[c]=n[c].index;for(l=[],d=0;d<r.length;d++)l.push({className:D[r[d]],probability:o[d].toFixed(5)})}else h=t[0],b=5,h<.5?(b=0,h=100*(1-h)):h>.5&&(b=4,h*=100),a.push({className:D[b],probability:h.toFixed(2)});return e.abrupt("return",a);case 3:case"end":return e.stop()}}),e)})));return function(t,s){return e.apply(this,arguments)}}(),n.handlePanelClick=function(e){n.setState({photoSettingsOpen:!n.state.photoSettingsOpen})},n.handleFileChange=function(e){e.target.files&&e.target.files.length>0&&n.setState({file:URL.createObjectURL(e.target.files[0]),filename:e.target.files[0].name})},n.handleTabSelect=function(e){switch(e){case"camera":n.startWebcam();break;case"localfile":n.setState({filename:null,file:null}),n.stopWebcam()}},n.webcam=null,n.model=null,n.modelLastUpdated=null,n.state={modelLoaded:!1,filename:"",isModelLoading:!1,isClassifying:!1,predictions:[],photoSettingsOpen:!0,modelUpdateAvailable:!1,showModelUpdateAlert:!1,showModelUpdateSuccess:!1,isDownloadingModel:!1},n}return Object(n.a)(s,[{key:"componentDidMount",value:function(){var e=Object(w.a)(g.a.mark((function e(){var t,s,a,n=this;return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!("indexedDB"in window)){e.next=36;break}return e.prev=1,e.next=4,W.d("indexeddb://web-model");case 4:return this.model=e.sent,e.prev=5,e.next=8,Object(N.a)("tensorflowjs",1);case 8:return t=e.sent,e.next=11,t.transaction(K).objectStore(K).get(_);case 11:return s=e.sent,a=new Date(s.modelArtifactsInfo.dateSaved),e.next=15,this.getModelInfo();case 15:console.log(this.modelLastUpdated),!this.modelLastUpdated||a>=new Date(this.modelLastUpdated).getTime()?console.log("Using saved model"):this.setState({modelUpdateAvailable:!0,showModelUpdateAlert:!0}),e.next=23;break;case 19:e.prev=19,e.t0=e.catch(5),console.warn(e.t0),console.warn("Could not retrieve when model was saved.");case 23:e.next=34;break;case 25:return e.prev=25,e.t1=e.catch(1),console.log("Not found in IndexedDB. Loading and saving..."),console.log(e.t1),e.next=31,W.d(B);case 31:return this.model=e.sent,e.next=34,this.model.save("indexeddb://web-model");case 34:e.next=40;break;case 36:return console.warn("IndexedDB not supported."),e.next=39,W.d(B);case 39:this.model=e.sent;case 40:this.setState({modelLoaded:!0}),this.initWebcam(),W.e((function(){return n.model.predict(W.f([1,z,z,3]))})).dispose();case 44:case"end":return e.stop()}}),e,this,[[1,25],[5,19]])})));return function(){return e.apply(this,arguments)}}()},{key:"componentWillUnmount",value:function(){var e=Object(w.a)(g.a.mark((function e(){return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:this.webcam&&this.webcam.stop();try{this.model.dispose()}catch(t){}case 2:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this;return Object(m.jsxs)("div",{className:"Classify container",children:[!this.state.modelLoaded&&Object(m.jsxs)(r.Fragment,{children:[Object(m.jsx)(v.a,{animation:"border",role:"status",children:Object(m.jsx)("span",{className:"sr-only",children:"Loading..."})})," ",Object(m.jsx)("span",{className:"loading-model-text",children:"Loading Model"})]}),this.state.modelLoaded&&Object(m.jsxs)(r.Fragment,{children:[Object(m.jsxs)(y.a,{onClick:this.handlePanelClick,className:"classify-panel-header","aria-controls":"photo-selection-pane","aria-expanded":this.state.photoSettingsOpen,children:["Take or Select a Photo to Classify",Object(m.jsx)("span",{className:"panel-arrow",children:this.state.photoSettingsOpen?Object(m.jsx)(U.b,{}):Object(m.jsx)(U.c,{})})]}),Object(m.jsx)(k.a,{in:this.state.photoSettingsOpen,children:Object(m.jsxs)("div",{id:"photo-selection-pane",children:[this.state.modelUpdateAvailable&&this.state.showModelUpdateAlert&&Object(m.jsx)(b.a,{children:Object(m.jsxs)(u.a,{variant:"info",show:this.state.modelUpdateAvailable&&this.state.showModelUpdateAlert,onClose:function(){return e.setState({showModelUpdateAlert:!1})},dismissible:!0,children:["An update for the ",Object(m.jsx)("strong",{children:this.state.modelType})," model is available.",Object(m.jsxs)("div",{className:"d-flex justify-content-center pt-1",children:[!this.state.isDownloadingModel&&Object(m.jsx)(y.a,{onClick:this.updateModel,variant:"outline-info",children:"Update"}),this.state.isDownloadingModel&&Object(m.jsxs)("div",{children:[Object(m.jsx)(v.a,{animation:"border",role:"status",size:"sm",children:Object(m.jsx)("span",{className:"sr-only",children:"Downloading..."})})," ",Object(m.jsx)("strong",{children:"Downloading..."})]})]})]})}),this.state.showModelUpdateSuccess&&Object(m.jsx)(b.a,{children:Object(m.jsxs)(u.a,{variant:"success",onClose:function(){return e.setState({showModelUpdateSuccess:!1})},dismissible:!0,children:["The ",Object(m.jsx)("strong",{children:this.state.modelType})," model has been updated!"]})}),Object(m.jsxs)(S.a,{defaultActiveKey:"camera",id:"input-options",onSelect:this.handleTabSelect,className:"justify-content-center",children:[Object(m.jsxs)(C.a,{eventKey:"camera",title:"Take Photo",children:[Object(m.jsxs)("div",{id:"no-webcam",ref:"noWebcam",children:[Object(m.jsx)("span",{className:"camera-icon",children:Object(m.jsx)(U.a,{})}),"No camera found. ",Object(m.jsx)("br",{}),"Please use a device with a camera, or upload an image instead."]}),Object(m.jsx)("div",{className:"webcam-box-outer",children:Object(m.jsx)("div",{className:"webcam-box-inner",children:Object(m.jsx)("video",{ref:"webcam",autoPlay:!0,playsInline:!0,muted:!0,id:"webcam",width:"448",height:"448"})})}),Object(m.jsx)("div",{className:"button-container",children:Object(m.jsx)(F,{variant:"primary",size:"lg",onClick:this.classifyWebcamImage,isLoading:this.state.isClassifying,text:"Classify",loadingText:"Classifying..."})})]}),Object(m.jsxs)(C.a,{eventKey:"localfile",title:"Select Local File",children:[Object(m.jsxs)(T.a.Group,{controlId:"file",children:[Object(m.jsx)(T.a.Label,{children:"Select Image File"}),Object(m.jsx)("br",{}),Object(m.jsx)(T.a.Label,{className:"imagelabel",children:this.state.filename?this.state.filename:"Browse..."}),Object(m.jsx)(T.a.Control,{onChange:this.handleFileChange,type:"file",accept:"image/*",className:"imagefile"})]}),this.state.file&&Object(m.jsxs)(r.Fragment,{children:[Object(m.jsx)("div",{id:"local-image",children:Object(m.jsx)(M.a,{ref:"cropper",src:this.state.file,style:{height:400,width:"100%"},guides:!0,aspectRatio:1,viewMode:2})}),Object(m.jsx)("div",{className:"button-container",children:Object(m.jsx)(F,{variant:"primary",size:"lg",disabled:!this.state.filename,onClick:this.classifyLocalImage,isLoading:this.state.isClassifying,text:"Classify",loadingText:"Classifying..."})})]})]})]})]})}),this.state.predictions.length>0&&Object(m.jsxs)("div",{className:"classification-results",children:[Object(m.jsx)("h3",{children:"Predictions"}),Object(m.jsx)("canvas",{ref:"canvas",width:E,height:E}),Object(m.jsx)("br",{}),Object(m.jsx)(A.a,{children:this.state.predictions.map((function(e){return Object(m.jsxs)(A.a.Item,{children:[Object(m.jsx)("strong",{children:e.className})," ",e.probability,"%"]},e.className)}))})]})]})]})}}]),s}(r.Component),R=(s(337),function(e){Object(i.a)(s,e);var t=Object(o.a)(s);function s(){return Object(a.a)(this,s),t.apply(this,arguments)}return Object(n.a)(s,[{key:"render",value:function(){return Object(m.jsxs)("div",{className:"Instructions container",children:[Object(m.jsx)("h1",{children:"Instructions"}),Object(m.jsxs)("p",{children:["Steps to upload fecal sample image for STH diagnosis:",Object(m.jsx)("br",{}),Object(m.jsx)("br",{}),'1. Go to the "Classify" page',Object(m.jsx)("br",{}),'2. Click on "Select Local File"',Object(m.jsx)("br",{}),'3. Click on "Browse" under Select Image File.',Object(m.jsx)("br",{}),"4. Select the image file you want to process.",Object(m.jsx)("br",{}),'5. Click on "Classify"',Object(m.jsx)("br",{}),Object(m.jsx)("br",{}),"The webpage will now output an STH diagnosis."]}),Object(m.jsx)("h1",{children:" FAQS "}),Object(m.jsxs)("p",{children:[Object(m.jsx)("b",{children:"What is this webpage for?"}),Object(m.jsx)("br",{}),"Our project aims to reduce mass drug administration to treat Soil Transmitted Helminth infections. Over 1 billion people are affected by these parasitic diseases globally, and the current solution is to administer packaged drugs to entire communities without prior diagnosis because that requires time and resources such as trained microscopists which aren\u2019t readily available. We\u2019ve developed a convolutional neural network that detects soil transmitted helminths in microscopic images of fecal samples that works in the backend of this progressive web page. This webpage only requires internet on the first use and for updates, and is stored in the user\u2019s browser cache for future offline uses",Object(m.jsx)("br",{}),Object(m.jsx)("br",{}),Object(m.jsx)("b",{children:" How to save this webpage in my browser?"}),Object(m.jsx)("br",{}),"In Chrome, click on the three dots at the top left of the page. You can either:",Object(m.jsx)("br",{}),' 1) Select "Bookmarks" and select "Bookmark this tab" to bookmark this page on your browser.',Object(m.jsx)("br",{}),' 2) Select "More Tools" and select "Save Page as" to save this page locally on your computer.',Object(m.jsx)("br",{}),' 3) Select "More Tools" and select "Create shortcut" to create a shortcut locally on your computer.',Object(m.jsx)("br",{}),Object(m.jsx)("br",{}),Object(m.jsx)("b",{children:" How accurate is the diagnosis?"}),Object(m.jsx)("br",{}),"* Accuracy: 91.82%",Object(m.jsx)("br",{}),"* Sensitivity: 73.33%",Object(m.jsx)("br",{}),"* False negative rate: 2.3%",Object(m.jsx)("br",{}),"* Specificity: 96.55%",Object(m.jsx)("br",{}),Object(m.jsx)("br",{}),Object(m.jsx)("b",{children:" Why do we need diagnosis when mass drug administration exists?"}),Object(m.jsx)("br",{}),"Since individual diagnosis by trained microscopist is currently not a feasible option, most tropical illnesses are treated with the distribution of mass drug delivery, which is a cheap way of eliminating multiple illnesses that share the same geographic region. However, this method is wasteful and often unpleasant for the population receiving the distributed medicine due to various non-lethal side effects such as nausea, vomiting, etc. Our goal is to provide the ability for easy individual diagnosis of these parasitic diseases to avoid administering drugs to uninfected people.",Object(m.jsx)("br",{}),Object(m.jsx)("br",{}),Object(m.jsx)("b",{children:" What are the effects of Soil Transmitted Helminth infections?"}),Object(m.jsx)("br",{}),"The World Health Organization (WHO) lists the effects of STH infection as the following:",Object(m.jsx)("br",{}),Object(m.jsx)("br",{}),'* "The worms feed on host tissues, including blood, which leads to a loss of iron and protein."',Object(m.jsx)("br",{}),'* "Hookworms in addition cause chronic intestinal blood loss that can result in anaemia."',Object(m.jsx)("br",{}),'* "The worms increase malabsorption of nutrients. In addition, roundworm may possibly compete for vitamin A in the intestine."',Object(m.jsx)("br",{}),'* "Some soil-transmitted helminths also cause loss of appetite and, therefore, a reduction of nutritional intake and physical fitness."',Object(m.jsx)("br",{}),Object(m.jsx)("br",{}),Object(m.jsx)("b",{children:" Where can I learn more about Soil Transmitted Helminths?"}),Object(m.jsx)("br",{}),"Here are some links to help supplement your knowledge of Soil Transmitted Helminths:",Object(m.jsx)("br",{}),Object(m.jsx)("a",{href:"https://www.who.int/news-room/fact-sheets/detail/soil-transmitted-helminth-infections",children:" * WHO Soil Transmitted Helminth Infections"}),Object(m.jsx)("br",{}),Object(m.jsx)("a",{href:"https://www.neglecteddiseases.gov/usaid-targeted-\r diseases/soil-transmitted-helminths",children:" * USAID Neglected Diseases"})]})]})}}]),s}(r.Component)),Q=(s(338),function(){return Object(m.jsxs)("div",{className:"NotFound",children:[Object(m.jsx)("h1",{children:"404"}),Object(m.jsx)("h3",{children:"The page you were looking for is not here."}),Object(m.jsx)("a",{href:"/",children:"Go Home"})]})}),q=function(e){var t=e.childProps;return Object(m.jsxs)(h.c,{children:[Object(m.jsx)(h.a,{path:"/ewh-portable-microscopy/classify",exact:!0,component:G,props:t}),Object(m.jsx)(h.a,{path:"/ewh-portable-microscopy",exact:!0,component:R,props:t}),Object(m.jsx)(h.a,{path:"/ewh-portable-microscopy/about",exact:!0,component:x,props:t}),Object(m.jsx)(h.a,{component:Q})]})},J=(s(341),function(e){Object(i.a)(s,e);var t=Object(o.a)(s);function s(e){var n;Object(a.a)(this,s),(n=t.call(this,e)).dismissUpdateAlert=function(e){n.setState({showUpdateAlert:!1})};return n.state={showUpdateAlert:!0,reloadMsg:"\n      New content is available.<br />\n      Please <a href='javascript:location.reload();'>reload</a>.<br />\n      <small>If reloading doesn't work, close all tabs/windows of this web application,\n      and then reopen the application.</small>\n    "},n}return Object(n.a)(s,[{key:"render",value:function(){return Object(m.jsxs)("div",{className:"App",children:[Object(m.jsxs)(b.a,{children:[Object(m.jsxs)(p.a,{collapseOnSelect:!0,className:"app-nav-bar",variant:"dark",expand:"lg",children:[Object(m.jsx)(p.a.Brand,{href:"/ewh-portable-microscopy",children:"WebClassify"}),Object(m.jsx)(p.a.Toggle,{"aria-controls":"basic-navbar-nav"}),Object(m.jsx)(p.a.Collapse,{id:"basic-navbar-nav",children:Object(m.jsxs)(j.a,{className:"",children:[Object(m.jsx)(d.b,{className:"nav-link",to:"/ewh-portable-microscopy/classify",children:"Classify"}),Object(m.jsx)(d.b,{className:"nav-link",to:"/ewh-portable-microscopy",children:"Instructions"}),Object(m.jsx)(d.b,{className:"nav-link",to:"/ewh-portable-microscopy/about",children:"About"})]})})]}),this.props.updateAvailable&&this.state.showUpdateAlert&&Object(m.jsx)("div",{style:{paddingTop:"10px"},children:Object(m.jsx)(f,{title:"",variant:"info",message:this.state.reloadMsg,show:this.props.updateAvailable&&this.state.showUpdateAlert,onClose:this.dismissUpdateAlert})})]}),Object(m.jsx)(b.a,{children:Object(m.jsx)(q,{})})]})}}]),s}(r.Component)),Y=Object(h.f)(J);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var $=function(e){Object(i.a)(s,e);var t=Object(o.a)(s);function s(){var e;Object(a.a)(this,s);for(var n=arguments.length,i=new Array(n),o=0;o<n;o++)i[o]=arguments[o];return(e=t.call.apply(t,[this].concat(i))).state={contentCached:!1,updateAvailable:!1},e.handleUpdate=function(t){var s=t.waiting;s&&s.postMessage({type:"SKIP_WAITING"}),e.setState({updateAvailable:!0})},e}return Object(n.a)(s,[{key:"componentDidMount",value:function(){this.handleUpdate;"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},{key:"render",value:function(){return Object(m.jsx)(d.a,{children:Object(m.jsx)(Y,{updateAvailable:this.state.updateAvailable})})}}]),s}(r.Component);l.a.render(Object(m.jsx)($,{}),document.getElementById("root"))}},[[342,1,2]]]);
//# sourceMappingURL=main.6463a5cc.chunk.js.map