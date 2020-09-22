(this["webpackJsonpkey-finder"]=this["webpackJsonpkey-finder"]||[]).push([[0],{20:function(e,t,a){e.exports=a(46)},25:function(e,t,a){},44:function(e,t){},45:function(e,t,a){e.exports=a.p+"static/media/42672108_2031052090251354_8552365379190521856_o.49297da4.jpg"},46:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),s=a(15),c=a.n(s);a(25);function i(){return r.a.createElement("div",{className:"dashboard"},r.a.createElement("nav",null,"Song Key"))}var l=a(3),o=a.n(l),u=a(1),m=a(4),d=a(16),p=a(17),h=a(19),v=a(18),f=a(5),k=a.n(f),g=(a(44),function(e){Object(h.a)(a,e);var t=Object(v.a)(a);function a(){var e;Object(d.a)(this,a),(e=t.call(this)).getUser=Object(m.a)(o.a.mark((function t(){var a;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,k.a.get("https://api.spotify.com/v1/me",{headers:{Authorization:"Bearer "+e.state.params.access_token}});case 2:a=t.sent,e.setState(Object(u.a)(Object(u.a)({},e.state),{},{user:a.data.display_name}));case 4:case"end":return t.stop()}}),t)}))),e.getTrack=function(){var t=Object(m.a)(o.a.mark((function t(a){var n;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,k.a.get("https://api.spotify.com/v1/tracks/".concat(a),{headers:{Authorization:"Bearer "+e.state.params.access_token}});case 2:n=t.sent,e.setState(Object(u.a)(Object(u.a)({},e.state),{},{track:n.data}));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),e.getSongData=function(){var t=Object(m.a)(o.a.mark((function t(a){var n;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,k.a.get("https://api.spotify.com/v1/audio-analysis/".concat(a),{headers:{Authorization:"Bearer "+e.state.params.access_token}}).catch((function(t){console.log("fry"),e.setState(Object(u.a)(Object(u.a)({},e.state),{},{error:"Not a valid URI."}))}));case 2:(n=t.sent)&&e.setState(Object(u.a)(Object(u.a)({},e.state),{},{key:n.data.track.key,mode:n.data.track.mode,tempo:n.data.track.tempo,time_sig:n.data.track.time_signature,error:""}));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),e.getCurrentPlay=Object(m.a)(o.a.mark((function t(){var a,n;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,k.a.get("https://api.spotify.com/v1/me/player/currently-playing",{headers:{Authorization:"Bearer "+e.state.params.access_token}});case 2:(a=t.sent).data?(n=a.data.item.id,console.log(a.data.item.id),e.getSongData(n),e.getTrack(n)):e.setState(Object(u.a)(Object(u.a)({},e.state),{},{error:"Nothing is currently playing. Press play on one of your Spotify devices."}));case 4:case"end":return t.stop()}}),t)}))),e.handleChange=function(t){t.preventDefault(),e.setState(Object(u.a)(Object(u.a)({},e.state),{},{input:t.target.value}))};var n=e.getHashParams();return e.state={},e.state.params=n,e.state.user="",e.state.error="",e}return Object(p.a)(a,[{key:"getHashParams",value:function(){var e,t={},a=/([^&;=]+)=?([^&;]*)/g,n=window.location.hash.substring(1);for(e=a.exec(n);e;)t[e[1]]=decodeURIComponent(e[2]),e=a.exec(n);return t}},{key:"componentDidMount",value:function(){this.getUser()}},{key:"keyFinder",value:function(e){var t="";switch(e){case 0:t="C";break;case 1:t="C#";break;case 2:t="D";break;case 3:t="D#";break;case 4:t="E";break;case 5:t="F";break;case 6:t="F#";break;case 7:t="G";break;case 8:t="G#";break;case 9:t="A";break;case 10:t="A#";break;case 11:t="B";break;default:t=""}return t}},{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"login"},r.a.createElement("div",{className:"a"},r.a.createElement("div",{className:"a-fade"},r.a.createElement("div",null,r.a.createElement("div",{className:"header-description"}," ","Find the key, tempo, and time signature of any song on Spotify.",r.a.createElement("br",null)),this.state.user?r.a.createElement("div",{className:"login-block"},r.a.createElement("div",{className:"login-title"},"Logged in as ",this.state.user),r.a.createElement("a",{className:"go-button",href:"#section2"},"Give it a go")):r.a.createElement("div",{className:"login-block"},r.a.createElement("div",{className:"login-title"},"Login with your Spotify account to get started."),r.a.createElement("a",{href:"http://localhost:8888"}," Login to Spotify ")))),r.a.createElement("section",{id:"section2"})),r.a.createElement("div",{className:"c"},this.state.user?r.a.createElement("div",{className:"search-box"},r.a.createElement("form",null,r.a.createElement("label",null,"Enter Spotify URI:"),r.a.createElement("input",{name:"song id",autoComplete:"off",type:"text",value:this.state.input,onChange:function(t){return e.handleChange(t)}})),r.a.createElement("button",{onClick:function(){e.state.input?(e.setState(Object(u.a)(Object(u.a)({},e.state),{},{error:""})),e.getSongData(e.state.input.slice(14,36)),e.getTrack(e.state.input.slice(14,36)),e.setState(Object(u.a)(Object(u.a)({},e.state),{},{input:""}))):e.setState(Object(u.a)(Object(u.a)({},e.state),{},{error:"Enter a URI."}))}},"Enter"),r.a.createElement("div",null,"or"),r.a.createElement("button",{onClick:function(){return e.getCurrentPlay()}},"Get Currently Playing"),r.a.createElement("p",{style:{fontSize:"0.5rem",color:"red"}},this.state.error)):r.a.createElement("div",null)),this.state.user&&this.state.track&&r.a.createElement("div",{className:"d"},this.state.track&&r.a.createElement("div",{className:"track-info"},r.a.createElement("img",{src:this.state.track.album.images[0].url,alt:"album art",style:{width:"300px",maxWidth:"100%"}}),r.a.createElement("div",null,r.a.createElement("b",null,this.state.track.artists[0].name)),r.a.createElement("div",null,this.state.track.name)),r.a.createElement("div",{className:"track-data"},r.a.createElement("div",null,r.a.createElement("h2",null,"Key:"),r.a.createElement("div",{className:"key"},this.keyFinder(this.state.key),1===this.state.mode&&"maj",0===this.state.mode&&"m")),r.a.createElement("div",null,r.a.createElement("h2",null,"BPM:"),r.a.createElement("div",{className:"key"},this.state.tempo)),r.a.createElement("div",null,r.a.createElement("h2",null,"Time Sig:"),r.a.createElement("div",{className:"key"},this.state.time_sig,"/4")))))}}]),a}(n.Component));function E(){return r.a.createElement("div",{className:"footer"},r.a.createElement("p",null,"Made with love in Vancouver/London."),r.a.createElement("p",null,"Oskar Wroz 2020"))}var b=function(){return r.a.createElement("div",{className:"App",style:{backgroundImage:"url(".concat(a(45),")")}},r.a.createElement(i,null),r.a.createElement(g,null),r.a.createElement(E,null))};c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(b,null)),document.getElementById("root"))}},[[20,1,2]]]);
//# sourceMappingURL=main.182073c6.chunk.js.map