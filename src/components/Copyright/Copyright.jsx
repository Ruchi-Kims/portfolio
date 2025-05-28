import React from 'react';
const Copyright = () => {
  const currentYear = new Date().getFullYear();
  return (
    <div style={{ textAlign: 'center', padding: '10px', fontSize: '14px', color: '#666' }}>
      &copy; {currentYear} Ruchi. Tous droits réservés.
    </div>
  );
};

export default Copyright;
