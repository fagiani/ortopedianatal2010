var kozuka_el = { src: 'flash/kozuka_gothic_pro_el.swf' };
var officina_bold = { src: 'flash/officina_sans_std_bold.swf' };
sIFR.activate(kozuka_el,officina_bold);


sIFR.replace(kozuka_el, {
  selector: '#menu li',
  css: [ 
    '.sIFR-root { text-transform: uppercase; }',
    '.sIFR-root a { font-size: 12.5px; color: #0078b0; text-decoration: none; }',
    '.sIFR-root a:link { color: #0078b0; }',
    '.sIFR-root a:visited { color: #0078b0; }',
    '.sIFR-root a:hover { color: #0078b0; text-decoration: underline; }',
    '.sIFR-root a:active { color: #0078b0; }'
  ],
  wmode: 'transparent',
  tuneWidth: '15',
  sharpness: '-200' 
});
