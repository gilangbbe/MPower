const ItemCardListStyles = {
  width: '55%',
  height: '345px', // Set the height of the container
  overflowY: 'auto', // Enable vertical scrolling
  overflowX: 'hidden', // Optionally hide horizontal scrolling
  marginTop: 2,
  marginLeft: 1,
  '&::-webkit-scrollbar': {
    width: '12px', // Width of the scrollbar
  },
  '&::-webkit-scrollbar-track': {
    backgroundColor: '#f0f0f0', // Background of the scrollbar track
    borderRadius: '10px',
  },
  '&::-webkit-scrollbar-thumb': {
    backgroundColor: '#888', // Scrollbar thumb color
    borderRadius: '10px',
    border: '3px solid #f0f0f0', // Border around the thumb
  },
  '&::-webkit-scrollbar-thumb:hover': {
    backgroundColor: '#555', // Scrollbar thumb color on hover
  },
};

export default ItemCardListStyles;
