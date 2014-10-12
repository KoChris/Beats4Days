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
	
	var bpm = 60.0;						//bpm defaulted at 60
	var nextTickTime = 0.0;				//Used to schedule notes
	var rhythmIndex = 0;				//Used to keep track on where in the bar we are
	
	var melodyVoices = new Array();		//Melody Instrument
	var bassVoices = new Array();		//Bass Instrument
	
	var keyPressed = 0;					//Used to determine which keys are pressed
	var isKeyPressed = false;			//Boolean to see if keys are pressed
	
	var tickActive = true;				//Used to toggle Metronome on/off
	var melodyActive = true;			//Used to toggle Melody on/off
	var bassActive = true;				//Used to toggle Bass on/off
	
	//Handling keyboard events
	document.getElementById('body').onkeydown= handleKeyDown;
	document.getElementById('body').onkeyup= handleKeyUp;
	//document.getElementById('body').onkeypress= handleKeyDown;
	
	function handleKeyDown(e) {
		e = e || event;

		isKeyPressed = true;
		
		keyPressed = e.which;
		console.log("WTF IS FUCKING WRONG W YOU");
		
		if(isKeyPressed) {
			switch(keyPressed) {
			//Melody Notes (Middle C Major scale)
			case 81:
				addMelodyNote(260);
				console.log(keyPressed);
				break;
			case 87:
				addMelodyNote(293);
				console.log(keyPressed);
				break;
			case 69:
				addMelodyNote(330);
				console.log(keyPressed);
				break;
			case 82:
				addMelodyNote(349);
				console.log(keyPressed);
				break;
			case 84:
				addMelodyNote(391);
				console.log(keyPressed);
				break;
			case 89:
				addMelodyNote(440);
				console.log(keyPressed);
				break;
			case 85:
				addMelodyNote(493);
				console.log(keyPressed);
				break;
			case 73:
				addMelodyNote(523);
				console.log(keyPressed);
				break;
			
			//Bass Notes (C Major scale, 2 Octives lower)
			case 90:
				addBassNote(65);
				console.log(keyPressed);
				break;
			case 88:
				addBassNote(73);
				console.log(keyPressed);
				break;
			case 67:
				addBassNote(83);
				console.log(keyPressed);
				break;
			case 86:
				addBassNote(87);
				console.log(keyPressed);
				break;
			case 66:
				addBassNote(98);
				console.log(keyPressed);
				break;
			case 78:
				addBassNote(110);
				console.log(keyPressed);
				break;
			case 77:
				addBassNote(124);
				console.log(keyPressed);
				break;
			case 188:
				addBassNote(131);
				console.log(keyPressed);
				break;	
				
			}
		}
		
		isKeyPressed = true;
	}
	
	function handleKeyUp() {
		isKeyPressed = false;
		console.log("fuck you");
	}
	
	/*
	 * Next couple of functions are for handling UI functions
	 */
	
	/*
	 * Toggling different layers on/off
	 */
	function toggleSound(sound) {
		
		switch(sound){
		case "tick":
			tickActive = !tickActive;
			break;
		case "melody":
			melodyActive = !melodyActive;
			break;
		case "bass":
			bassActive = !bassActive;
			break;
		}
	}
	
	/*
	 * Removes notes at a particular index of the bar
	 */
	function removeNotes() {
		melodyVoices[rhythmIndex-1] = 0;
		bassVoices[rhythmIndex-1] = 0;
	}
	
	/*
	 * Add a note to melody instrument
	 */
	function addNoteButton() {
		noteFreq = document.getElementById('freqList').value;
		addMelodyNote(noteFreq);
	}
	
	/*
	 * Used to set bpm form select form
	 */
	function setBpm() {
		userBPM = document.getElementById('bpmList').value;
		bpm = userBPM;
	}
	
	/*
	 * This starts the metronome and repeats the scheduler function
	 */
	function startMetronome(){
		console.log("THIS IS STARTING TO TICK ME OFF");
		context = new AudioContext();
		nextTickTime = 0.0;
		
		setInterval("scheduler()", 20);
		setInterval("realTimeNote()", 20);
	}
	
	/*
	 * WIP
	 */
	function realTimeNote() {
		realNote = context.createOscillator();
		realNote.connect(context.destination);
		
		realNote.frequency.value = keyToFrequency(keyPressed);
		
		
		if(isKeyPressed) {
			
		}
	}
	
	/*
	 * WIP
	 */
	function keyToFrequency (note) {
		return 440 * Math.pow(2,(note-69)/12);
	}
	
	/*
	 * FOLLOWING FUNCTIONS ARE USED TO PERFORM THE CORE FUNCTIONS
	 */
	
	/*
	 * This function is checks if the next note to be played
	 * is within 0.1s of the current time, if so, it will schedule
	 * the note to be played.
	 */
	function scheduler() {
		while(nextTickTime < (context.currentTime + 0.1)) {
			if (rhythmIndex == 8) {
				rhythmIndex = 0;
			}
			
			if(tickActive) { 
				playMetronome(rhythmIndex);
			}
			if(melodyActive) {
				playMelody(rhythmIndex);
			}
			if(bassActive) {
				playBass(rhythmIndex);
			}
			nextTick();
			
			rhythmIndex++;

		}
	}

	/*
	 * This method will calculate when the next tick is due to play
	 */
	function nextTick() {	
		tickDelay = 60/bpm;
		nextTickTime += 0.5*tickDelay;
	}
	
	/*
	 * For adding voices into the instrument arrays
	 * All settings for ea sound should be added here
	 */
	function addMelodyNote(uFreq) {
		melodyVoices[rhythmIndex-1] = new voice();
		melodyVoices[rhythmIndex-1].frequency = uFreq;
		melodyVoices[rhythmIndex-1].type = 0;
	}
	function addBassNote(uFreq) {
		bassVoices[rhythmIndex-1] = new voice();
		bassVoices[rhythmIndex-1].frequency = uFreq;
		bassVoices[rhythmIndex-1].type = 0;
	}
	
	/*
	 * Sets the notes to be played at next tick sound
	 */
	function playMelody(currentNote) {
		playMelodyNote( nextTickTime, melodyVoices[currentNote] );
	}
	function playBass(currentNote) {
		playBassNote( nextTickTime, bassVoices[currentNote] );
	}
	
	/*
	 * Function will check if there is a note to be played at that time
	 * If so, take the settings and use the oscillator to play the notes
	 */
	function playMelodyNote(noteTime, voice) {
		if(voice) {
			note = context.createOscillator();
			note.connect(context.destination);
			
			note.frequency.value = voice.frequency;
			
			note.start(noteTime);
			note.stop(noteTime+0.5);
		}
	}
	function playBassNote(noteTime, voice) {
		if(voice) {
			bassNote = context.createOscillator();
			bassNote.connect(context.destination);
			
			bassNote.frequency.value = voice.frequency;
			
			bassNote.start(noteTime);
			bassNote.stop(noteTime+0.5);
		}
	}

	
	/*
	 * A voice class that will be used by all
	 * melodic instruments to hold note values
	 */
	function voice() {
		this.frequency = 261;
	}
	
	/*
	 * This function schedules a ticks and calculates
	 * when the next tick is to be played
	 */
	function playMetronome(currentNote) {
			console.log("tick");
			tick(nextTickTime, currentNote);
	}
		
	/*
	 * This function sets the tick to play at a given time
	 */
	function tick(time, currentNote) {
		tickOsci = context.createOscillator();
		tickOsci.connect(context.destination); 
		
		if(currentNote%8 == 0) {
			tickOsci.frequency.value = 880.0;
		}
		else if(currentNote%4 == 0) {
			tickOsci.frequency.value = 440.0;
		}
		else {
			tickOsci.frequency.value = 440.0;
		}
		
		tickOsci.start(time);
		tickOsci.stop(time+0.15);
	}
