class MSynthesizer extends Module {
  constructor(x, y) {
    super(x, y, 32, 24)
    this.color = color(255, 204, 0)
    this.osc = new p5.Oscillator();
    this.osc.setType('sine');
    this.osc.start();
    
    this.waves = ['sine','triangle', 'sawtooth', 'square']
    this.freq = canvas.fabric.createConnector(ConnectorIn,"Frequence",this.w,0,this);
    this.freq.value = 0;
    this.wave = canvas.fabric.createConnector(ConnectorIn,"Wave",this.w,8,this);
    this.wave.value = 0;    
    this.amp = canvas.fabric.createConnector(ConnectorIn,"Amplitude",this.w,16,this);
    this.amp.value = 0;
    
    this.env = new p5.Envelope(0.01,0.2,0.2,0.1);
  }

  update() {
    if (this.freq.hasOutput()) {
        this.osc.freq(this.freq.get(0,800));  
    } 
    
    if (this.amp.hasOutput()) {
        this.osc.amp(this.amp.get(0,1),0.05);
    } else {
        this.osc.amp(0)
    }
    
    if (this.wave.hasOutput()) {
        let wave = this.waves[floor(this.wave.get(0,this.waves.length))];
        this.osc.setType(wave);
    }
    
  }

}