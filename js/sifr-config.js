var kozuka_el = { src: 'flash/kozuka_gothic_pro_el.swf' };
var officina_bold = { src: 'flash/officina_sans_std_bold.swf' };
sIFR.activate(kozuka_el,officina_bold);

sIFR.replace(kozuka_el, {
  selector: '#main_menu li',
  css: [ 
    '.sIFR-root { text-transform: uppercase; margin: 0px 15px; }',
    '.sIFR-root a { font-size: 15px; color: #0078b0 !important; text-decoration: none; margin: 0px 10px !important; }',
    '.sIFR-root a:link { color: #0078b0; }',
    '.sIFR-root a:visited { color: #0078b0; }',
    '.sIFR-root a:hover { color: #0078b0; text-decoration: underline; }',
    '.sIFR-root a:active { color: #0078b0; }'
  ],
  wmode: 'transparent',
  tuneWidth: '15',
  sharpness: '-200'
});
sIFR.replace(officina_bold, {
  selector: 'span.remain_text_flash',
  css: [ 
    '.sIFR-root { font-size: 21px; color: #F99D00; }'
  ],
  wmode: 'transparent',
  tuneHeight: '0',
  sharpness: '-100',
  forceSingleLine: 'true',
  offsetLeft: '7'
});
sIFR.replace(officina_bold, {
  selector: 'span.remain_days_flash',
  css: [ 
    '.sIFR-root { font-size: 36px; color: #FFCC33; }'
  ],
  wmode: 'transparent',
  tuneHeight: '-7',
  sharpness: '-100',
  forceSingleLine: 'true'
});
sIFR.replace(kozuka_el, {
  selector: '#footer * h3',
  css: [ 
    '.sIFR-root { font-size: 16px; color: #0078b0; text-align: center; }'
  ],
  sharpness: '-200'
});
sIFR.replace(kozuka_el, {
  selector: '#content * h2',
  css: [ 
    '.sIFR-root { font-size: 19px; color: #0078b0; }'
  ],
  wmode: 'transparent',
  sharpness: '-200'
});
sIFR.replace(officina_bold, {
  selector: '#content h1',
  css: [ 
    '.sIFR-root { font-size: 36px; color: #FFCC33; }'
  ],
  wmode: 'transparent',
  tuneHeight: '-7',
  sharpness: '-100',
  forceSingleLine: 'true'
});
