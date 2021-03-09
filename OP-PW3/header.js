updateView();
function updateView() {
	document.getElementById('header').innerHTML = `
		<div class=headerBig>
			<div class=headerMid>
				<div class=headerTop>I is Header</div>
		
				<div class=headerBot>

					<div class="navBar">
						<a href="index.html">Home</a>
						<div class="dropdown">
						<a class="dropbtn" href="Character/index.html"><div>Character</div></a>
				  <!--         Main Dropdown -->
						<div class="dropdown-one">
						  <div id="link1" class="dItem" href="#">Strawhat
				  <!--             Inside Dropdown -->
							<div class="dropdown-two">
							  <a class="dItem" href="Character/Strawhat_Pirates/Luffy.html"><div id="file" >Luffy</div></a>
							  <a class="dItem" href="Character/Strawhat_Pirates/Zoro.html"><div id="file" >Zoro</div></a>
							  <a class="dItem" href="Character/Strawhat_Pirates/Sanji.html"><div id="file" >Sanji</div></a>
							  <a class="dItem" href="Character/Strawhat_Pirates/Nami.html"><div id="file" >Nami</div></a>
							  <a class="dItem" href="Character/Strawhat_Pirates/Brook.html"><div id="file" >Brook</div></a>
							  <a class="dItem" href="Character/Strawhat_Pirates/Usopp.html"><div id="file" >Usopp</div></a>
							  <a class="dItem" href="Character/Strawhat_Pirates/Franky.html"><div id="file" >Franky</div></a>
							  <a class="dItem" href="Character/Strawhat_Pirates/Chopper.html"><div id="file" >Chopper</div></a>
							  <a class="dItem" href="Character/Strawhat_Pirates/Usopp.html"><div id="file" >Usopp</div></a>
							  <a class="dItem" href="Character/Strawhat_Pirates/Robin.html"><div id="file" >Robin</div></a>
							</div>
						  </div>
						  <div id="link2" class="dItem" href="#">Link 2
						  	<div class="dropdown-three">
							  <div class="dItem" id="file" href="#">Luffy2</div>
							  <div class="dItem" id="file" href="#">Zoro2</div>
							  <div class="dItem" id="file" href="#">Sanji2</div>
							</div>
						  </div>
						  <div class="dItem" href="#">Link 3</div>
						</div>
					  </div> 
	  				</div>
				</div>
			</div>
		</div>
	`;
}


