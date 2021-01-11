function message(msg)
{
    console.log(msg);
    console.log("from kebrida rep");
    

}

var pyBoardToolBox={
		"kind": "flyoutToolbox",
		"contents": [			
			{
				"kind": "block",
				"type": "math_number",
				"blockxml": "<block type='math_number'><field name='NUM'>0</field></block>"
			},
		   
			{
				"kind": "block",
				"type": "text"
			},			
			{
				"kind": "block",
				"type": "logic_compare"
			},
			{
				"kind": "block",
				"type": "controls_repeat_ext"
			},
			{
				"kind": "block",
				"type": "controls_if"
			},
			{
				"kind": "block",
				"type": "controls_whileUntil"
			}
		]
	  };

Blockly.Blocks['yellowled'] = {
  init: function() {
    this.appendValueInput("seconds")
    .appendField(new Blockly.FieldImage("https://cdn.jsdelivr.net/gh/kebrida/wrtg//images/yellow_led.png", 32, 32, { alt: "*", flipRtl: "FALSE" }))
        .setCheck("Number");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(250);
 this.setTooltip("turn on yellow");
 this.setHelpUrl("");
  }
};

Blockly.Python['yellowled'] = function(block) {
  var value_seconds = Blockly.Python.valueToCode(block, 'seconds', Blockly.Python.ORDER_ATOMIC);
  var code ='pyb.LED(3).on()\n';
  return code;
};
