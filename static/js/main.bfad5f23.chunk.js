(this["webpackJsonptic-tac-toe"]=this["webpackJsonptic-tac-toe"]||[]).push([[0],[,,function(e,a,t){e.exports={container:"Board_container__3ju8d",squareGrid:"Board_squareGrid__Kfkme",playerText:"Board_playerText__N6nW5",resetBtn:"Board_resetBtn__2w6sz",sizeSelect:"Board_sizeSelect__1Czzs",select:"Board_select__2hsis",infoWrapper:"Board_infoWrapper__osJ0W",optionWrapper:"Board_optionWrapper__1xDcf",playerTextWrapper:"Board_playerTextWrapper__27tF1"}},,,function(e,a,t){e.exports={square:"Square_square__2d7Wo",xPlayer:"Square_xPlayer__2fmvM",oPlayer:"Square_oPlayer__1Pdht"}},,,,,,function(e,a,t){e.exports={row:"Row_row__2845r"}},function(e,a,t){e.exports={app:"App_app__1kX79"}},,,function(e,a,t){e.exports=t(21)},,,,,function(e,a,t){},function(e,a,t){"use strict";t.r(a);var r=t(0),n=t.n(r),o=t(7),s=t.n(o),c=(t(20),t(3)),i=t(1),l=t(8),u=t(9),p=t(14),y=t(13),d=function(e,a,t,r){return t.map((function(t){return e.includes(t)?{player:r[0],box:t}:a.includes(t)?{player:r[1],box:t}:{player:null,box:t}}))},m=function(e,a){for(var t=[],r=[],n=[],o=[],s=0;s<a;s++){for(var c=[],i=[],l=0;l<e.length;l+=a)c.push(e[s+l]),i.push(e[l/a+s*a]),l/a===s&&n.push(s+l),e.length-a-s*a===l&&o.push(s+l);t.push(c),r.push(i)}return[].concat(t,r,[n,o])},h=t(4),x=t(5),B=t.n(x),b=t(10),f=t.n(b),v=function(e){var a=e.handleSquareClick,t=e.config,r=e.winner;e.winningBox;return n.a.createElement("button",{disabled:t.player||r,onClick:function(){return a(t.box)},className:f()(B.a.square,Object(h.a)({},B.a.xPlayer,"X"===t.player),Object(h.a)({},B.a.oPlayer,"O"===t.player))},t.player||" ")},w=t(11),_=t.n(w),O=function(e){var a=e.winner,t=e.rowItems,r=e.handleSquareClick,o=e.winningBox;return n.a.createElement("div",{className:_.a.row},t.map((function(e){return n.a.createElement(v,{winningBox:o,winner:a,config:e,handleSquareClick:r})})))},S=t(2),j=t.n(S),E=["X","O"],k={playerOneBoxes:[],playerTwoBoxes:[],currentPlayer:E[0],currentBoard:[],winner:null},g=function(e){Object(p.a)(t,e);var a=Object(y.a)(t);function t(e){var r;return Object(l.a)(this,t),(r=a.call(this)).refreshBoard=function(){var e=r.state,a=e.playerOneBoxes,t=e.playerTwoBoxes,n=d(a,t,r.state.boxes,r.players);r.setState(Object(i.a)(Object(i.a)({},r.state),{},{currentBoard:n,winningBox:[]}))},r.resetGame=function(){r.setState(Object(i.a)({},k),(function(){r.refreshBoard()}))},r.setBoardSize=function(e){var a=e*e,t=d([],[],Object(c.a)(Array(a).keys()),r.players);r.setState(Object(i.a)(Object(i.a)({},r.state),{},{boardSize:e,totalSize:a,boxes:Object(c.a)(Array(a).keys()),winningBoxes:m(Object(c.a)(Array(a).keys()),e),currentBoard:t,playerOneBoxes:[],playerTwoBoxes:[],currentPlayer:r.players[0]}))},r.handleSquareClick=function(e){if(r.state.currentPlayer===r.players[0]){var a=[e].concat(Object(c.a)(r.state.playerOneBoxes));r.setState(Object(i.a)(Object(i.a)({},r.state),{},{playerOneBoxes:a,currentPlayer:r.players[1]}))}else{var t=[e].concat(Object(c.a)(r.state.playerTwoBoxes));r.setState(Object(i.a)(Object(i.a)({},r.state),{},{playerTwoBoxes:t,currentPlayer:r.players[0]}))}},r.checkWin=function(e,a){var t=!1,n=r.state.currentPlayer===r.players[0]?a:e;return n.length&&r.state.winningBoxes.forEach((function(e){e.every((function(e){return n.includes(e)}))&&(r.setState(Object(i.a)(Object(i.a)({},r.state),{},{winningBox:e})),t=!0)})),t},r.players=E,r.state={totalSize:9,boxes:Object(c.a)(Array(9).keys()),winningBoxes:m(Object(c.a)(Array(9).keys()),3),playerOneBoxes:[],playerTwoBoxes:[],currentPlayer:r.players[0],currentBoard:[],winner:null,winningBox:[],boardSize:3},r}return Object(u.a)(t,[{key:"componentDidMount",value:function(){this.refreshBoard()}},{key:"componentDidUpdate",value:function(e,a){if(a.playerOneBoxes!==this.state.playerOneBoxes||a.playerTwoBoxes!==this.state.playerTwoBoxes){var t=this.state,r=t.playerOneBoxes,n=t.playerTwoBoxes;if(this.checkWin(r,n)){var o=d(r,n,this.state.boxes,this.players),s=this.state.currentPlayer===this.players[0]?this.players[1]:this.players[0];this.setState(Object(i.a)(Object(i.a)({},this.state),{},{winner:s,currentBoard:o}))}else{var c=d(r,n,this.state.boxes,this.players);this.setState(Object(i.a)(Object(i.a)({},this.state),{},{currentBoard:c}))}}}},{key:"render",value:function(){var e=this,a=this.state,t=a.currentPlayer,r=a.currentBoard,o=a.winner;return n.a.createElement("div",{className:j.a.container},n.a.createElement("div",{className:j.a.infoWrapper},n.a.createElement("div",{className:j.a.playerTextWrapper},n.a.createElement("div",{className:j.a.playerText},"Next Player: ",o?"-":t),n.a.createElement("div",{className:j.a.playerText},"Winner: ",o||"None")),n.a.createElement("div",{className:j.a.optionWrapper},n.a.createElement("fieldset",{className:j.a.sizeSelect},n.a.createElement("legend",null,"Game size"),n.a.createElement("select",{className:j.a.select,value:this.state.boardSize,onChange:function(a){return e.setBoardSize(Number(a.target.value))}},n.a.createElement("option",{value:2},"2"),n.a.createElement("option",{value:3},"3"),n.a.createElement("option",{value:4},"4"),n.a.createElement("option",{value:5},"5"),n.a.createElement("option",{value:6},"6"),n.a.createElement("option",{value:7},"7"),n.a.createElement("option",{value:8},"8"),n.a.createElement("option",{value:9},"9"))),n.a.createElement("button",{className:j.a.resetBtn,onClick:this.resetGame},"Reset Game"))),n.a.createElement("div",{className:j.a.squareGrid},Object(c.a)(Array(this.state.boardSize).keys()).map((function(a){var t=a*e.state.boardSize,s=t+e.state.boardSize;return n.a.createElement(O,{winningBox:e.state.winningBox,winner:o,handleSquareClick:e.handleSquareClick,rowItems:r.slice(t,s)})}))))}}]),t}(n.a.Component),z=t(12),T=t.n(z),W=function(e){var a=e.size,t=void 0===a?3:a;return n.a.createElement("div",{className:T.a.app},n.a.createElement("h1",null,"Welcome to Tic Tac Toe!"),n.a.createElement(g,{size:t}))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(n.a.createElement(n.a.StrictMode,null,n.a.createElement(W,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[15,1,2]]]);
//# sourceMappingURL=main.bfad5f23.chunk.js.map