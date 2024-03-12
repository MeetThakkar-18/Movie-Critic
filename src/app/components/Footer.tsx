
const Footer = () => {
    const currentYear = new Date().getFullYear();
  
    return (
      <footer style={{ backgroundColor: '#fffff', padding: '10px', textAlign: 'center' }}>
        <p>&copy; {currentYear} Copyright All rights reserved.</p>
      </footer>
    );
  };
  
  export default Footer;
  