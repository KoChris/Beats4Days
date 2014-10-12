	function wlCommonInit(){
		/*
		 * Use of WL.Client.connect() API before any connectivity to a Worklight Server is required. 
		 * This API should be called only once, before any other WL.Client methods that communicate with the Worklight Server.
		 * Don't forget to specify and implement onSuccess and onFailure callback functions for WL.Client.connect(), e.g:
		 *    
		 *    WL.Client.connect({
		 *    		onSuccess: onConnectSuccess,
		 *    		onFailure: onConnectFailure
		 *    });
		 *     
		 */
		
		// Common initialization code goes here
		
	}
	
	var bpm = 60.0;
	var nextTickTime = 0.0;
	
	/*
	 * Used to set bpm form select form
	 */
	function setBpm() {
		userBPM = document.getElementById('bpmList').value;
		bpm = userBPM;
	}
	
	/*
	 * This function sets the sound to play at a given time
	 */
	function tick(time) {
		tickOsci = context.createOscillator(); // Create sound source
		tickOsci.connect(context.destination); // Connect sound to speakers
		tickOsci.start(time);
		tickOsci.stop(time+0.25);
	}
	
	/*
	 * This method will calculate when the next tick is due to play
	 */
	function nextTick() {	
		tickDelay = 60/bpm;
		nextTickTime += tickDelay;
	}
	
	/*
	 * This starts the metronome and repeats the scheduler function
	 */
	function playNotes(){
		console.log("THIS IS STARTING TO TICK ME OFF");
		context = new AudioContext();
		nextTickTime = 0.0;
		
		setInterval("scheduler()", 50);
	}
	
	/*
	 * This function is continuously called to check if the next tick is
	 * within 0.1s so then it can schedule the next tick to be played
	 */
	function scheduler() {
		while(nextTickTime < (context.currentTime + 0.1)) {
			console.log("tick");
			tick(nextTickTime);
			nextTick();
		}
	}
	
