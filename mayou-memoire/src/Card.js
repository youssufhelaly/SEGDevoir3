import React from 'react';

export default function Card({ shape, highlight, onClick }) {
  const borderColor = highlight === 'green' ? '2px solid #2ecc40' : highlight === 'red' ? '2px solid #ff4136' : '2px solid #444';
  return (
    <div
      className="card"
      style={{
        border: borderColor,
        background: '#2d313a',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        cursor: shape ? 'default' : 'pointer',
      }}
      onClick={onClick}
    >
      {shape && <span style={{ color: '#fff', fontSize: '2rem' }}>{renderShape(shape)}</span>}
    </div>
  );
}

function renderShape(shape) {
  switch (shape?.toLowerCase()) {
    case 'grece':       return '🇬🇷';
    case 'nigeria':     return '🇳🇬';
    case 'chile':       return '🇨🇱';
    case 'japon':       return '🇯🇵';
    case 'espagne':     return '🇪🇸';
    case 'russie':      return '🇷🇺';
    case 'usa':         return '🇺🇸';
    case 'bhoutan':     return '🇧🇹';
    case 'arabie saoudite': return '🇸🇦';
    case 'nepal':       return '🇳🇵';
    case 'france':      return '🇫🇷';
    case 'maroc':       return '🇲🇦';
    case 'puerto rico': return '🇵🇷';
    case 'brésil':      return '🇧🇷';
    case 'palestine':   return '🇵🇸';
    case 'haiti':       return '🇭🇹';
    case 'liban':       return '🇱🇧';
    case 'egypte':      return '🇪🇬';
    default:            return '';
  }
}
