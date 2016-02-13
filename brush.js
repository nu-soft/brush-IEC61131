var BrushBase = require('brush-base');
var regexLib = require('syntaxhighlighter-regex').commonRegExp;

function Brush() {
  var keywords =  'ABS ACOS ACTION ADD AND ANDN ANY ANY_BIT ANY_DATE ANY_INT ANY_NUM ANY_REAL ARRAY ASIN AT ATAN ' +
                  'BOOL BY BYTE ' +
                  'CAL CALC CALCN CASE CD CDT CLK CONCAT CONFIGURATION CONSTANT COS CTD CTU CTUD CU CV ' +
                  'D DATE DATE_AND_TIME DELETE DINT DIV DO DS DT DWORD '+
                  'ELSE ELSIF END_ACTION END_CASE END_CONFIGURATION END_FOR END_FUNCTION END_FUNCTION_BLOCK END_IF END_PROGRAM END_REPEAT END_RESOURCE END_STEP END_STRUCT END_TRANSITION END_TYPE END_VAR END_WHILE EN ENO EQ ET EXIT EXP EXPT '+
                  'FALSE F_EDGE F_TRIG FIND FOR FROM FUNCTION FUNCTION_BLOCK '+
                  'GE GT'+
                  'IF IN INITIAL_STEP INSERT INT INTERVAL '+
                  'JMP JMPC JMPCN '+
                  'L LD LDN LE LEFT LEN LIMIT LINT LN LOG LREAL LT LWORD '+
                  'MAX MID MIN MOD MOVE MUL MUX '+
                  'N NE NEG NOT '+
                  'OF ON OR OEN '+
                  'P PRIORITY PROGRAM PT PV '+
                  'Q Q1 QU QD '+
                  'R R1 R_TRIG READ_ONLY READ_WRITE REAL RELEASE REPEAT REPLACE RESOURCE RET RETAIN RETC RTCN RETURN RIGHT ROL ROR RS RTC R_EDGE '+
                  'S S1 SD SEL SEMA SHL SHR SIN SINGLE SINT SL SQRT SR ST STEP STN STRING STRUCT SUB '+
                  'TAN TASK THEN TIME TIME_OF_DAY TO TOD TOF TON TP TRANSITION TRUE TYPE '+
                  'UDINT UINT ULINT UNTIL USINT '+
                  'VAR VAR_ACCESS VAR_EXTERNAL VAR_GLOBAL VAR_INPUT VAR_IN_OUT VAR_OUTPUT '+
                  'WHILE WITH WORD '+
                  'XOR XORN';

  this.regexList = [
    {
      regex: /\(\*[\s\S]*?\*\)/gm,
      css: 'comments'
    },
    {
      regex: regexLib.singleLineCComments,
      css: 'comments'
    },
    {
      regex: regexLib.singleQuotedString,
      css: 'string'
    },
    {
      regex: /\b\d+([\.eE]\d+)?\b/g,
      css: 'value'
    },
    {
      regex: new RegExp(this.getKeywords(keywords), 'gmi'),
      css: 'keyword'
    }
		];
};

Brush.prototype = new BrushBase();
Brush.aliases = ['structuredtext', 'ST', 'IEC61131','st','iec61131'];
module.exports = Brush;