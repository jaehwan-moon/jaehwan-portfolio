const library = require('@fortawesome/fontawesome-svg-core').library;
const fab = require('@fortawesome/free-brands-svg-icons').fab;
const faEnvelope = require('@fortawesome/free-solid-svg-icons').faEnvelope;
const faGlobe = require('@fortawesome/free-solid-svg-icons').faGlobe;

exports.onClientEntry = () => {
  library.add(fab, faEnvelope, faGlobe);
};